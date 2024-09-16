# -*- coding: utf-8 -*-
from json import dumps, loads
from odoo import Command
from ..tools.controller_utils import *
from ..tools.date_utils import *
import pytz
from datetime import timedelta
from odoo import http
from odoo.http import Response, request


class BryntumGantt(http.Controller):
    task_id_template = 'project-task_%d'

    def get_tz(self):
        """
        Get the user's timezone based on the partner's timezone.

        :return: A pytz timezone object representing the user's timezone.
        :rtype: pytz.timezone
        """
        default_tz = pytz.utc
        try:
            user_tz = request.env.user.partner_id.tz
            if isinstance(user_tz, str):
                default_tz = pytz.timezone(user_tz) or pytz.utc
        except Exception as e:
            pass
        return default_tz

    # @property
    # def default_fields(self):
    #     return [
    #         ('name', 'name', None),
    #         ('planned_date_begin', 'startDate', from_gantt_date),
    #         ('planned_date_end', 'endDate', from_gantt_date),
    #         ('duration', 'duration', None),
    #         ('assigned_resources', 'assignedResource', None),
    #         ('duration_unit', 'durationUnit', None),
    #         ('parent_id', 'parentId', to_task_id),
    #         ('project_id', 'project_id', to_project_id),
    #         ('parent_index', 'parentIndex', None),
    #         ('percent_done', 'percentDone', None),
    #         ('assigned_ids', 'assignedList', None),
    #         ('description', 'note', None),
    #         ('effort', 'effort', None),
    #         ('gantt_calendar_flex', 'calendar', None),
    #         ('date_deadline', 'date_deadline', from_gantt_date),
    #         ('scheduling_mode', 'schedulingMode', None),
    #         ('constraint_type', 'constraintType', None),
    #         ('constraint_date', 'constraintDate', from_gantt_date),
    #         ('effort_driven', 'effortDriven', None),
    #         ('bryntum_rollup', 'rollup', None),
    #         ('manually_scheduled', 'manuallyScheduled', None),
    #         ('stage_id', 'stageId', None),
    #         ('wbs_value', 'wbsValue', None),
    #         ('is_nearly_dateline', 'isNearlyDateLine', None),
    #         ('is_over_dateline', 'isOverDateLine', None),
    #         ('kpi_description', 'kpiNote', None),
    #         ('kpi_type', 'kpiType', None),
    #         ('completed_date', 'completedDate', from_gantt_date),
    #         ('result_description', 'resultNote', None),
    #     ]

    @property
    def default_fields(self):
        return [
            ('name', 'name', None),
            ('planned_date_begin', 'startDate', from_gantt_date),
            ('planned_date_end', 'endDate', from_gantt_date),
            ('completed_date', 'completedDate', from_gantt_date),
            ('duration', 'duration', None),
            ('assigned_resources', 'assignedResources', None),
            ('duration_unit', 'durationUnit', None),
            ('parent_id', 'parentId', to_task_id),
            ('project_id', 'project_id', to_project_id),
            ('parent_index', 'parentIndex', None),
            ('percent_done', 'percentDone', None),
            ('assigned_ids', 'assignedList', None),
            ('description', 'note', None),
            ('kpi_description', 'kpiNote', None),
            ('result_description', 'resultNote', None),
            ('effort', 'effort', None),
            ('gantt_calendar_flex', 'calendar', None),
            ('date_deadline', 'date_deadline', from_gantt_date),
            ('scheduling_mode', 'schedulingMode', None),
            ('kpi_type', 'kpiType', None),
            ('constraint_type', 'constraintType', None),
            ('constraint_date', 'constraintDate', from_gantt_date),
            ('effort_driven', 'effortDriven', None),
            ('bryntum_rollup', 'rollup', None),
            ('manually_scheduled', 'manuallyScheduled', None),
            ('stage_id', 'stageId', None),
            ('wbs_value', 'wbsValue', None),
            ('kpi_description', 'kpiNote', None),
            ('kpi_type', 'kpiType', None),
            ('miscellaneous', 'Miscellaneous', None),
            ('budget', 'Budget', None),
            ('actual_budget', 'actualBudget', None),
            ('completed_date', 'completedDate', from_gantt_date),
            ('result_description', 'resultNote', None),
            ('user_ids', 'userResource', None),
            ('owner', 'Owner', None),
            ('participant', 'Participant', None),
            ('project_closed', 'projectClosed', None),
            ('is_project', 'isProject', None)
        ]

    def build_project_task(self, task_obj: dict, project: dict, project_id: str, tz: str):


        # for task in task_obj:
            # print(' task.name=', task.name)
            # print(' task.user_ids=', task.user_ids)
            # print('testiing=', ', '.join(user.name for user in task.user_ids))
        tasks = [
            {
                "id": self.task_id_template % task.id,
                "name": task.name,
                "parentId": self.task_id_template % task.parent_id,
                "parentIndex": task.parent_index,
                'assignedResources': task.assigned_resources,
                "percentDone": task.percent_done,
                "startDate": get_gantt_date(task.planned_date_begin, tz),
                "endDate": get_gantt_date(task.planned_date_end, tz),
                "completedDate": get_gantt_date(task.completed_date, tz),
                "expanded": True,
                "date_deadline": get_gantt_date(task.date_deadline, tz),
                "project_id": project_id,
                "note": task.description,
                "kpiNote": task.kpi_description or '',
                "resultNote": task.result_description or '',
                "effort": task.effort,
                "duration": task.duration,
                "durationUnit": task.duration_unit,
                "calendar": task.gantt_calendar_flex,
                "schedulingMode": task.scheduling_mode,
                "kpiType": task.kpi_type or None,
                "Miscellaneous": task.miscellaneous or 'Not Started Yet',
                "Budget": task.budget,
                "actualBudget": task.actual_budget,
                "constraintType": task.constraint_type or None,
                "constraintDate": get_gantt_date(task.constraint_date, tz),
                "effortDriven": task.effort_driven,
                "rollup": task.bryntum_rollup,
                "manuallyScheduled": task.manually_scheduled if project.bryntum_auto_scheduling else True,
                "baselines": get_baselines(task, tz, get_gantt_date),
                "segments": get_segments(task, tz, get_gantt_date),
                "stageId": task.stage_id.id,
                'userResource': ', '.join(user.name for user in task.user_ids),
                "Owner": task.owner or '',
                "Participant": task.participant or '',
                "projectClosed": task.project_closed,
                "isProject": task.is_project,
            }
            for task in task_obj
        ]
        return tasks

    @http.route('/bryntum_gantt/load', type='json', auth='user', cors="*")
    def bryntum_gantt_load(self, data=None, **kw):
        data_json = loads(data)
        project_ids = data_json.get('project_ids')
        company_ids = data_json.get('companyID')
        only_projects = data_json.get('only_projects')

        tz = self.get_tz()
        project_env = request.env['project.project']
        resource_env = request.env['resource.resource']

        resource_domain = [('company_id', 'in', company_ids), ('active', '=', True)]
        user_domain = []


        su = request.env['ir.config_parameter'].sudo()
        default_calendar_id = su.get_param('bryntum.default_calendar') or 'general'

        users = []
        resources = []
        assignments = []
        dependencies = []
        projects = []
        project_nodes = []
        calendar = []
        calendars = []

        use_user_ids = False

        for project_id in project_ids:
            if project_id:
                project_id = int(project_id)
            else:
                continue

            project = project_env.search([('id', '=', project_id)])
            # resource_domain += [('user_id', 'in', project.members_vt.ids)]
            # user_domain += [('id', 'in', project.members_vt.ids)]


            task_objs = project.tasks

            if not project.id:
                continue

            project_id = 'project_%d' % project.id
            tasks = self.build_project_task(task_obj=task_objs, project=project, project_id=project_id, tz=tz)

            if project.bryntum_user_assignment:
                use_user_ids = True

            assignments = assignments + [
                {
                    'id': assignment.get('id'),
                    'event': self.task_id_template % assignment.get('event'),
                    'resource': assignment.get('resource'),
                    'units': assignment.get('units')
                }
                for task in task_objs
                for assignment in get_assignments(task, get_assignment) or []
            ]

            dependencies = dependencies + [
                {
                    'id': link.id,
                    'fromTask': self.task_id_template % link.from_id,
                    'toTask': self.task_id_template % link.to_id,
                    'lag': link.lag,
                    'lagUnit': link.lag_unit,
                    'active': link.dep_active,
                    'type': link.type
                }
                for task in task_objs for link in task.linked_ids
            ]

            project_nodes.append({
                'id': project_id,
                'startDate': get_gantt_date(project.project_start_date, tz),
                'name': project.name,
                'project_id': project_id,
                'manuallyScheduled': not project.bryntum_auto_scheduling,
                'expanded': True,

                'children': tasks
            })
        if not bool(only_projects):
            all_projects = project_env.with_context(filterby_company=True).search([('company_id', 'in', company_ids)])
            projects = [
                {
                    'id': 'project_%d' % project.id,
                    'name': project.name,
                    'manuallyScheduled': not project.bryntum_auto_scheduling,
                    'taskTypes': [
                        {
                            "id": type.id,
                            "name": type.name
                        }
                        for type in project.type_ids
                    ]
                }
                for project in all_projects
            ]

            resource_ids = resource_env.search(resource_domain)
            resources = [
                {
                    "id": "r_" + str(resource.id),
                    "name": f"R-{resource.name}"
                }
                for resource in resource_ids
            ]
            calendar = all_projects.get_default_calendar()
            calendars = all_projects.get_calendars()

            calendar_config = su.get_param('bryntum.calendar_config')

            if isinstance(calendar_config, str):
                try:
                    calendar = loads(calendar_config)
                except:
                    calendar = calendar

            if use_user_ids:
                user_env = request.env['res.users']
                user_ids = user_env.search(user_domain)

                users = [
                    {
                        "id": "u_" + str(user.id),
                        "name": user.name,
                        "city": user.partner_id.city
                    }
                    for user in user_ids
                ]

        params = {
            "success": True,
            "project": {
                "id": "bryntum_gantt_project",
                'current_user': request.env.user.name,
                "calendar": default_calendar_id
            },
            "projects": {
                "rows": projects
            },
            "calendars": {
                "rows": calendar,
                "toProcess": calendars
            },
            "tasks": {
                "rows": project_nodes
            },
            "dependencies": {
                "rows": dependencies,
            },
            "resources": {
                "rows": users
            },
            "assignments": {
                "rows": assignments
            },
            "timeRanges": {
                "rows": []
            }
        }
        # return Response(response=dumps(params), headers=headers)
        return params

    @http.route('/bryntum_gantt/send/update', type='json', auth='user', cors="*")
    def bryntum_gantt_update(self, data=None, **kw):
        """
        Handles updates for Bryntum Gantt chart data.

        :param data: JSON data containing updates.
        :type data: str
        :param kw: Additional keyword arguments.
        :type kw: dict
        :return: A dictionary indicating the success and status of the update.
        :rtype: dict
        """
        try:
            data_json = loads(data)

            task_env = request.env['project.task']
            project_env = request.env['project.project']
            task_linked_env = request.env['project.task.linked']
            task_assignments_env = request.env['project.task.assignment']
            task_baselines_env = request.env['project.task.baseline']
            task_segments_env = request.env['project.task.segment']

            for el in data_json:
                gantt_model_id = el['model']['id']
                model, int_id = gantt_id(gantt_model_id)

                if not int_id:
                    continue

                new_data = el.get('newData', {})

                if model == 'project-task':
                    task = task_env.search([('id', '=', int_id)])
                    self.update_task(task, new_data, task_linked_env, task_assignments_env, task_baselines_env,
                                     task_segments_env)

                elif model in ('project', 'project-project'):
                    project = project_env.search([('id', '=', int_id)])
                    self.update_project(project, new_data)

            return {'success': True, 'status': 'updated'}

        except Exception as e:
            return {'success': False, 'message': str(e)}

    def update_task(self, task, new_data, task_linked_env, task_assignments_env, task_baselines_env, task_segments_env):
        """
        Updates a project task with the provided data.

        :param task: The project task to be updated.
        :type task: odoo.models.Model
        :param new_data: New data for the project task.
        :type new_data: dict
        :param task_linked_env: Project task linked model environment.
        :type task_linked_env: odoo.models.Model
        :param task_assignments_env: Project task assignment model environment.
        :type task_assignments_env: odoo.models.Model
        :param task_baselines_env: Project task baseline model environment.
        :type task_baselines_env: odoo.models.Model
        :param task_segments_env: Project task segment model environment.
        :type task_segments_env: odoo.models.Model
        """
        task_gantt_ids = new_data.get('taskLinks')
        if task_gantt_ids is not None:
            self.update_task_links(task, task_gantt_ids, task_linked_env)

        task_assignments = new_data.get('assignedResources')
        if task_assignments is not None:
            self.update_task_assignments(task, task_assignments, task_assignments_env)
            new_data.pop('assignedResources')

        baselines = new_data.get('baselines')
        if baselines is not None:
            self.update_task_baselines(task, baselines, task_baselines_env)

        segments = new_data.get('segments')
        if segments is not None:
            self.update_task_segments(task, segments, task_segments_env)

        data = field_related(new_data, self.default_fields)
        self.update_task_data(task, data)

    def update_task_links(self, task, task_gantt_ids, task_linked_env):
        """
        Updates task links for the given task.

        :param task: The task for which the links are to be updated.
        :type task: odoo.models.Model
        :param task_gantt_ids: List of task link data from the Gantt chart.
        :type task_gantt_ids: list[dict]
        :param task_linked_env: Project task linked model environment.
        :type task_linked_env: odoo.models.Model
        """
        task.linked_ids.unlink()
        for link in task_gantt_ids:
            task_linked_env.create({
                'from_id': to_task_id(link.get('from')),
                'to_id': to_task_id(link.get('to')),
                'lag': int(link.get('lag')),
                'lag_unit': link.get('lagUnit'),
                'dep_active': link.get('active'),
                'type': link.get('type')
            })

    def update_task_assignments(self, task, task_assignments, task_assignments_env):
        """
        Updates task assignments for the given task.

        :param task: The task for which assignments are to be updated.
        :type task: odoo.models.Model
        :param task_assignments: List of task assignment data from the Gantt chart.
        :type task_assignments: list[dict]
        :param task_assignments_env: Project task assignment model environment.
        :type task_assignments_env: odoo.models.Model
        """
        if request.env.user.id != task.project_id.user_id.id and request.env.user.id not in task.user_ids.ids:
            return

        task.assigned_resources.unlink()
        assigned_resources = []
        user_ids = []
        for assignment in task_assignments:
            resource_id = get_resource_id(assignment.get('resource_id'))
            if resource_id and resource_id[0]:
                user_ids.append(resource_id[0])
            assigned_resources.append(Command.create({
                'task': to_task_id(assignment.get('task_id')),
                'resource': resource_id[0],
                'resource_base': resource_id[1],
                'units': int(assignment.get('units'))
            }))
        task.update({
            'user_ids': [(6, 0, user_ids)],
            'assigned_resources': assigned_resources
        })

    def update_task_baselines(self, task, baselines, task_baselines_env):
        """
        Updates task baselines for the given task.

        :param task: The task for which baselines are to be updated.
        :type task: odoo.models.Model
        :param baselines: List of baseline data from the Gantt chart.
        :type baselines: list[dict]
        :param task_baselines_env: Project task baseline model environment.
        :type task_baselines_env: odoo.models.Model
        """
        task.baselines.unlink()
        for baseline in baselines:
            task_baselines_env.create({
                'task': task.id,
                'name': baseline.get('name'),
                'planned_date_begin': from_gantt_date(baseline.get('startDate')),
                'planned_date_end': from_gantt_date(baseline.get('endDate'))
            })

    def update_task_segments(self, task, segments, task_segments_env):
        task.segments.unlink()
        for segment in segments:
            task_segments_env.create({
                'task': task.id,
                'name': segment.get('name'),
                'planned_date_begin': from_gantt_date(segment.get('startDate')),
                'planned_date_end': from_gantt_date(segment.get('endDate'))
            })

    def update_task_data(self, task, data):
        if 'planned_date_begin' in data or 'planned_date_end' in data:
            if data['planned_date_end'] is None:
                date_from = data['planned_date_begin'] + timedelta(days=1)
                data['planned_date_end'] = date_from
        task.write(data)

    def update_project(self, project, new_data):
        """
        Updates a project with the provided data.

        :param project: The project to be updated.
        :type project: odoo.models.Model
        :param new_data: New data for the project.
        :type new_data: dict
        """
        start_date = new_data.get('startDate')
        if project and start_date:
            project.write({'project_start_date': from_gantt_date(start_date)})

        name = new_data.get('name')
        if project and name:
            project.write({'name': name})

    @http.route('/bryntum_gantt/send/remove', type='json', auth='user', cors="*")
    def bryntum_gantt_remove(self, data=None, **kw):
        data_json = loads(data)
        task_env = request.env['project.task']

        task_gantt_ids = [item for outer in data_json for item in outer]
        task_int_ids = [to_task_id(el) for el in task_gantt_ids]

        task = task_env.search([('id', 'in', task_int_ids)])
        try:
            task.unlink()
        except Exception as e:
            return {'success': False, 'message': str(e)}

        return {'success': True, 'status': 'deleted'}

    @http.route('/bryntum_gantt/send/create', type='json', auth='user', cors='*')
    def bryntum_gantt_create(self, data=None, project_id=None, **kw):
        data_json = loads(data)
        task_env = request.env['project.task']
        create_int_ids = []
        id_map = {}
        for rec in data_json:
            if not is_gantt_new_id(rec.get('id')):
                continue
            data = field_related(rec, self.default_fields)

            if data['parent_id'] is None:
                data['parent_id'] = id_map.get(rec.get('parentId')) or None

            if not data.get('user_ids', False):
                data['user_ids'] = [(6, 0, [request.env.user.id])]
            task = task_env.create(data)
            generated_id = task.id
            id_map[rec.get('id')] = generated_id
            create_int_ids.append((rec.get('id'), self.task_id_template % generated_id))

        return {
            'success': True,
            'status': 'created',
            'ids': create_int_ids
        }
