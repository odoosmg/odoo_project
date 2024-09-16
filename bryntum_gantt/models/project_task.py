# -*- coding: utf-8 -*-
import pytz
from pytz import timezone

import odoo.tools
from odoo.tools import DEFAULT_SERVER_DATETIME_FORMAT
from odoo import models, fields, api, Command
from odoo.tools.misc import format_date
from odoo.exceptions import UserError, ValidationError
import dateutil.parser
from ..tools.odoo_utils import is_enterprise
from datetime import datetime, timedelta
from ..tools.date_utils import get_gantt_date
import logging

_logger = logging.getLogger(__name__)

if not is_enterprise():
    class Task(models.Model):
        _inherit = "project.task"

        planned_date_begin = fields.Datetime("Start date", tracking=True)
        planned_date_begin_formatted = fields.Char(compute='_compute_planned_date_begin')
        planned_date_end = fields.Datetime("End date", tracking=True)

        _sql_constraints = [
            ('planned_dates_check', "CHECK ((planned_date_begin <= planned_date_end))",
             "The planned start date must be prior to the planned end date."),
            ('completed_date_check', "CHECK ((planned_date_begin <= completed_date))",
             "The planned start date must be prior to the completed date."),
        ]

        @api.depends('planned_date_begin')
        def _compute_planned_date_begin(self):
            for task in self:
                task.planned_date_begin_formatted = format_date(self.env,
                                                                task.planned_date_begin) if task.planned_date_begin else None
else:
    class Task(models.Model):
        _inherit = "project.task"

        def _get_recurrence_start_date(self):
            return fields.Date.today()


def check_gantt_date(value):
    if isinstance(value, str):
        return dateutil.parser.parse(value, ignoretz=True)
    else:
        return value


class ProjectTask(models.Model):
    _inherit = 'project.task'

    duration = fields.Integer(string="Duration (days)", default=-1)
    duration_unit = fields.Char(string="Duration Unit", default='d')

    percent_done = fields.Integer(string="Done %", default=0, tracking=True)
    parent_index = fields.Integer(string="Parent Index", default=0)

    assigned_ids = fields.Many2many('res.users', relation='assigned_resources', string="Assigned resources")
    assigned_resources = fields.One2many('project.task.assignment',
                                         inverse_name='task',
                                         string='Assignments')
    employee_ids = fields.Many2many("hr.employee", string="Assignees", compute="_compute_employee_ids", store=True)
    baselines = fields.One2many('project.task.baseline',
                                inverse_name='task',
                                string='Baselines')

    segments = fields.One2many('project.task.segment',
                               inverse_name='task',
                               string='Segments')

    effort = fields.Integer(string="Effort (hours)", default=0)

    gantt_calendar_flex = fields.Char(string="Gantt Calendar Ids")
    linked_ids = fields.One2many('project.task.linked',
                                 inverse_name='to_id',
                                 string='Linked')
    scheduling_mode = fields.Selection([
        ('Normal', 'Normal'),
        ('FixedDuration', 'Fixed Duration'),
        ('FixedEffort', 'Fixed Effort'),
        ('FixedUnits', 'Fixed Units')
    ], string='Scheduling Mode')
    constraint_type = fields.Selection([
        ('muststarton', 'Must start on'),
        ('mustfinishon', 'Must finish on'),
        ('startnoearlierthan', 'Start no earlier than'),
        ('startnolaterthan', 'Start no later than'),
        ('finishnoearlierthan', 'Finish no earlier than'),
        ('finishnolaterthan', 'Finish no later than')
    ], string='Constraint Type')
    constraint_date = fields.Datetime(string="Constraint Date")
    effort_driven = fields.Boolean(string="Effort Driven", default=False)
    manually_scheduled = fields.Boolean(string="Manually Scheduled", default=False)
    bryntum_rollup = fields.Boolean(string="Rollup", default=False)
    wbs_value = fields.Char(string="WBS Value", tracking=True)
    is_nearly_dateline = fields.Boolean(store=True, compute="_compute_over_date")
    is_over_dateline = fields.Boolean(store=True, compute="_compute_over_date")
    kpi_type = fields.Selection([
        ('Deadline', 'Deadline'),
        ('Quantity', 'Quantity'),
        ('Other', 'Other')
    ], string='KPI Type', tracking=True)
    kpi_description = fields.Char(string='KPI Description', tracking=True)
    result_description = fields.Char(string='Result Description', tracking=True)
    completed_date = fields.Datetime("Completed date", tracking=True)
    miscellaneous = fields.Selection([
        ('NotStartedYet', 'Not Started Yet'),
        ('InProgress', 'In Progress'),
        ('Completed', 'Completed'),
        ('Early', 'Early'),
        ('OnTime', 'On Time'),
        ('Late', 'Late')
    ], default='NotStartedYet', string='Miscellaneous', tracking=True)
    budget = fields.Float(string='Budget', tracking=True)
    actual_budget = fields.Float(string='Actual Budget', tracking=True)
    owner = fields.Char('Owner', tracking=True)
    participant = fields.Char('Participant', tracking=True)
    project_closed = fields.Boolean('Project Closed', readonly=True, tracking=True)
    is_project = fields.Boolean(string="Is Project", default=False, readonly=True)

    def _action_refresh_assigned_resource(self):
        for rec in self:
            if rec.user_ids:
                rec.assigned_resources.unlink()
                rec.assigned_resources = [Command.create({
                    'task': rec.id,
                    'resource': user.id,
                    'resource_base': False,
                    'units': int(100)
                }) for user in rec.user_ids]

    def get_tz(self):
        """
        Get the user's timezone based on the partner's timezone.

        :return: A pytz timezone object representing the user's timezone.
        :rtype: pytz.timezone
        """
        default_tz = pytz.utc
        try:
            user_tz = self.env.user.partner_id.tz
            if isinstance(user_tz, str):
                default_tz = pytz.timezone(user_tz) or pytz.utc
        except Exception as e:
            pass
        return default_tz

    @api.depends('percent_done', 'planned_date_end')
    def _compute_over_date(self):
        """
        Compute if the task is nearly or already over the planned deadline.
        """
        tz = self.get_tz()
        # today = get_gantt_date(fields.Datetime.now(), tz)
        today = fields.Datetime.now()
        for rec in self:
            planned_date = fields.Datetime.from_string(rec.planned_date_end)
            done_percent = rec.percent_done
            is_over_dateline = done_percent < 100 and planned_date and today >= planned_date
            is_nearly_dateline = done_percent < 100 and planned_date and today < planned_date and (today - planned_date).days <= 7
            rec.update({
                'is_nearly_dateline': is_nearly_dateline,
                'is_over_dateline': is_over_dateline
            })

    @api.depends('completed_date', 'planned_date_end')
    def _compute_over_date(self):
        for record in self:
            if record.completed_date:
                # print('planned_date_end=', record.planned_date_end)
                # print('completed_date=', record.completed_date)
                planned_date_end = record.planned_date_end.strftime('%Y-%m-%d')
                completed_date = record.completed_date
                completed_date = completed_date.strftime('%Y-%m-%d')
                # print("type-p=", type(planned_date_end))
                # print('planned_date_end=', planned_date_end)
                # print('completed_date=', completed_date)
                # print("type-c=", type(completed_date))
                if completed_date == planned_date_end:
                    record.miscellaneous = 'OnTime'
                elif completed_date < planned_date_end:
                    record.miscellaneous = 'Early'
                elif completed_date > planned_date_end:
                    record.miscellaneous = 'Late'

    def open_task(self):
        self.ensure_one()
        return {
            'type': 'ir.actions.act_window',
            'name': 'Task',
            'view_mode': 'tree',
            'res_model': 'project.task',
            'domain': [('id', '=', self.id)],
        }

    def unlink(self):
        if self.create_uid == self.env.user:
            return super().unlink()
        elif self.env.user.has_group('project_owner_team.project_owner_team_group_project_see_all') or self.env.user.has_group('project.group_project_manager'):
            return super().unlink()
        else:
            raise UserError("You are not allow to delete task")

    @api.depends('user_ids')
    def _compute_employee_ids(self):
        for rec in self:
            rec.employee_ids = False
            employee_ids = []
            my_list = []
            dep_list = ''
            if rec.user_ids:
                for user in rec.user_ids:
                    employee_ids += user.employee_ids.ids
                    if user.employee_ids.department_id.short_name not in my_list and \
                            rec.project_id.user_id.employee_ids.department_id.short_name != user.employee_ids.department_id.short_name:
                        my_list.append(user.employee_ids.department_id.short_name)
                        dep_list = dep_list + user.employee_ids.department_id.short_name + '/'
            dep_list = dep_list[:-1]
            # print('dep_list=',dep_list)
            rec.owner = rec.project_id.user_id.employee_ids.department_id.short_name
            rec.participant = dep_list
            rec.employee_ids = employee_ids

    def _unlink_assigned_resources(self):
        """Unlink existing assigned resources."""
        for resource in self.assigned_resources:
            resource.unlink()

    def _process_employee_ids(self, employee_ids):
        """Process employee IDs and return user and resource lists."""
        user_list = []
        resource_list = []

        for emp in employee_ids:
            resource_list.append(self._create_resource_command(emp))
            user = self._find_user_by_employee(emp)
            if user:
                user_list.append(user.id)

        return user_list, resource_list

    def _create_resource_command(self, employee_id):
        """Create a resource command."""
        user = self._find_user_by_employee(employee_id)
        return Command.create(dict(
            task=self.id,
            resource=user and user.id or False,
            resource_base=employee_id,
            units=int(100)
        ))

    def _find_user_by_employee(self, employee_id):
        """Find user by employee ID."""
        return self.env['res.users'].sudo().search([('employee_ids', 'in', [employee_id])])

    def _notify_assigned_users(self, user_list):
        """Notify assigned users."""
        task_model_description = self.env['ir.model']._get(self._name).display_name

        for user_id in user_list:
            user = self.env['res.users'].browse(user_id)
            values = {
                'object': self,
                'model_description': task_model_description,
                'access_link': self._notify_get_action_link('view'),
                'assignee_name': user.sudo().name,
            }

            assignation_msg = self.env['ir.qweb']._render(
                'project.project_message_user_assigned', values, minimal_qcontext=True
            )
            assignation_msg = self.env['mail.render.mixin']._replace_local_links(assignation_msg)

            self.message_notify(
                subject=('You have been assigned to %s', self.display_name),
                body=assignation_msg,
                partner_ids=user.partner_id.ids,
                record_name=self.display_name,
                email_layout_xmlid='mail.mail_notification_layout',
                model_description=task_model_description,
                mail_auto_delete=False,
            )

    @api.constrains('completed_date', 'planned_date_begin')
    def _check_date_end(self):
        for record in self:
            if record.completed_date and record.completed_date < record.planned_date_begin:
                raise ValidationError("The start date must be anterior to the complete date.")

    @api.constrains('parent_id')
    def _check_parent_id(self):
        for record in self:
            if not record.parent_id:
                record.is_project = True
                record.kpi_type = 'Deadline'
            else:
                record.is_project = False
                record.kpi_type = None

    def write(self, vals):
        # print('self.env.user.id=', self.env.user.id)
        # print('self.user_ids.ids=', self.user_ids.ids)
        # print("vals['user_ids'][0][1]=", vals['user_ids'][0][1])
        # print("vals['user_ids'][0][2]=", vals['user_ids'][0][2])
        # print("isinstance(vals['user_ids'][0][2], list)=",isinstance(vals['user_ids'][0][2], list))
        """
        Override this function to pass resources to the Gantt chart.
        """
        if self.env.user.has_group('project.group_project_manager'):
            print('admin')
        elif self.env.user.id != self.project_id.user_id.id and self.env.user.id not in self.user_ids.ids:
            raise UserError("You are not allow to edit task")

        # print('dara')
        if 'user_ids' in vals and isinstance(vals['user_ids'][0][2], list):
            self._notify_assigned_users(vals['user_ids'][0][2])
        res = super(ProjectTask, self).write(vals)

        if 'user_ids' in vals and vals['user_ids'][0][1] is False:
            self.assigned_resources.unlink()
            for rec in vals['user_ids'][0][2]:
                self.assigned_resources.create({
                    'task': self.id,
                    'resource': rec,
                    'resource_base': False,
                    'units': int(100)
                })
        return res

    @api.model_create_multi
    def create(self, vals):
        """
        override this function to pass resource to the gantt chart
        """
        vals[0]['miscellaneous'] = 'NotStartedYet'
        response = super(ProjectTask, self).create(vals)
        if response.user_ids:
            self.assigned_resources.unlink()
            for rec in response.user_ids:
                self.assigned_resources.create({
                    'task': response.id,
                    'resource': rec.id,
                    'resource_base': False,
                    'units': int(100)
                })
        if response.employee_ids:
            self.assigned_resources.unlink()
            for rec in response.employee_ids:
                self.assigned_resources.create({
                    'task': response.id,
                    'resource': False,
                    'resource_base': rec.id,
                    'units': int(100)
                })
        return response

    @api.returns('self', lambda value: value.id)
    def copy(self, default=None):
        task_copy = super(ProjectTask, self).copy(default)
        task_mapping = self.env.context.get('task_mapping_keys', {})
        task_mapping[self.id] = task_copy.id
        return task_copy

    @api.onchange('constraint_type')
    def _onchange_constraint_type(self):
        if not self.constraint_type:
            self.constraint_date = None
        else:
            self.constraint_date = {
                'muststarton': self.planned_date_begin,
                'mustfinishon': self.planned_date_end,
                'startnoearlierthan': self.planned_date_begin,
                'startnolaterthan': self.planned_date_begin,
                'finishnoearlierthan': self.planned_date_end,
                'finishnolaterthan': self.planned_date_end
            }[self.constraint_type]


class ProjectTaskLinked(models.Model):
    _name = 'project.task.linked'
    _description = 'Project Task Linked'

    from_id = fields.Many2one('project.task', ondelete='cascade', string='From')
    to_id = fields.Many2one('project.task', ondelete='cascade', string='To')
    lag = fields.Integer(string="Lag", default=0)
    lag_unit = fields.Char(string="Lag Unit", default='d')
    type = fields.Integer(string="Type", default=2)
    dep_active = fields.Boolean(string="Active", default=True)


class ProjectTaskAssignmentUser(models.Model):
    _name = 'project.task.assignment'
    _description = 'Project Task User Assignment'

    task = fields.Many2one('project.task', ondelete='cascade', string='Task')
    resource = fields.Many2one('res.users', ondelete='cascade', string='User')
    resource_base = fields.Many2one('resource.resource', domain=[('user_id', '!=', False)], ondelete='cascade', string='Resource')
    units = fields.Integer(string="Units", default=0)


class ProjectTaskBaseline(models.Model):
    _name = 'project.task.baseline'
    _description = 'Project Task User Assignment'

    task = fields.Many2one('project.task', ondelete='cascade', string='Task')
    name = fields.Char(string="Name", default='')
    planned_date_begin = fields.Datetime("Start date")
    planned_date_end = fields.Datetime("End date")


class ProjectTaskSegment(models.Model):
    _name = 'project.task.segment'
    _description = 'Project Task Segment'

    task = fields.Many2one('project.task', ondelete='cascade', string='Task')
    name = fields.Char(string="Name", default='')
    planned_date_begin = fields.Datetime("Start date")
    planned_date_end = fields.Datetime("End date")
