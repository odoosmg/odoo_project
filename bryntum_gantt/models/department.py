# -*- coding: utf-8 -*-

from odoo import fields, models, api, _


class Department(models.Model):
    _inherit = 'hr.department'
    _order = "name desc"

    short_name = fields.Char('Short Name')
