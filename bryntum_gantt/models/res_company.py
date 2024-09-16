# -*- coding: utf-8 -*-

from odoo import fields, models, api, _


class Company(models.Model):
    _inherit = 'res.company'

    @api.model
    def get_default_selected_company(self):
        print(self.env.company.id)
        return self.env.company
