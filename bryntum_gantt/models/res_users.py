# -*- coding: utf-8 -*-

from odoo import fields, models, api, _


class User(models.Model):
    _inherit = "res.users"

    def get_default_selected_company(self):
        print(self.env.company.id)
        return self.env.company
