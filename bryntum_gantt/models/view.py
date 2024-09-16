# -*- coding: utf-8 -*-
from ..tools.odoo_utils import get_odoo_major_version
from odoo import models, fields


def _get_field_selection():
    version = get_odoo_major_version()

    if version == '13.0':
        return fields.Selection(selection_add=[('BryntumGantt', "Bryntum Gantt")])

    return fields.Selection(selection_add=[
                ('BryntumGantt', "Bryntum Gantt")
            ], default='BryntumGantt', ondelete={'BryntumGantt': 'set default'})


class View(models.Model):
    _inherit = 'ir.ui.view'
    type = _get_field_selection()


class ActWindowView(models.Model):
    _inherit = 'ir.actions.act_window.view'
    view_mode = _get_field_selection()
