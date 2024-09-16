# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models
from json import dumps

class BryntumSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    bryntum_auto_scheduling = fields.Boolean('Auto scheduling', default=False)
    bryntum_user_assignment = fields.Boolean('User assignment', default=False)
    bryntum_readonly_projects = fields.Boolean('Readonly projects', default=False)
    bryntum_save_wbs = fields.Boolean('Save WBS values', default=False)

    bryntum_gantt_config = fields.Text('Gantt configuration object', default='{}')
    bryntum_calendar_config = fields.Text('Calendar configuration object', default='{}')
    bryntum_default_calendar = fields.Selection(selection="get_calendar_names", string="Default calendar")

    def get_calendar_names(self):
         calendar_env = self.env['resource.calendar']
         calendars = calendar_env.search([])
         calendar_names = [
                (str(calendar.id), calendar.name)
                for calendar in calendars
            ]
         return calendar_names


    def set_values(self):
        res = super(BryntumSettings, self).set_values()
        projects = self.env["project.project"].search([])
        self.env['ir.config_parameter'].set_param('bryntum.auto_scheduling', self.bryntum_auto_scheduling)
        projects['bryntum_auto_scheduling'] = self.bryntum_auto_scheduling
        self.env['ir.config_parameter'].set_param('bryntum.user_assignment', self.bryntum_user_assignment)
        projects['bryntum_user_assignment'] = self.bryntum_user_assignment

        self.env['ir.config_parameter'].set_param('bryntum.readonly_projects', self.bryntum_readonly_projects)
        self.env['ir.config_parameter'].set_param('bryntum.save_wbs', self.bryntum_save_wbs)

        self.env['ir.config_parameter'].set_param('bryntum.gantt_config', self.bryntum_gantt_config)
        self.env['ir.config_parameter'].set_param('bryntum.calendar_config', self.bryntum_calendar_config)
        self.env['ir.config_parameter'].set_param('bryntum.default_calendar', self.bryntum_default_calendar)
        return res

    @api.model
    def get_values(self):
        res = super(BryntumSettings, self).get_values()
        su = self.env['ir.config_parameter'].sudo()

        projects = self.env["project.project"].search([])

        res.update(
            bryntum_auto_scheduling=su.get_param('bryntum.auto_scheduling'),
            bryntum_user_assignment=su.get_param('bryntum.user_assignment'),
            bryntum_readonly_projects=su.get_param('bryntum.readonly_projects'),
            bryntum_save_wbs=su.get_param('bryntum.save_wbs'),

            bryntum_gantt_config=su.get_param('bryntum.gantt_config') or '{}',
            bryntum_calendar_config=su.get_param('bryntum.calendar_config') or dumps(projects.get_default_calendar()),
            bryntum_default_calendar=su.get_param('bryntum.default_calendar')
        )
        return res
