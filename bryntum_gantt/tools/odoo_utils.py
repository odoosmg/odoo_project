from odoo import tools
from odoo.modules import get_module_path
from odoo.modules.module import module_manifest, release
from .. import __manifest__
import ast


def is_enterprise():
    module_name = vars(__manifest__)['__name__'].split('.')[-2]
    mod_path = get_module_path(module_name, downloaded=True)

    manifest_file = module_manifest(mod_path)

    f = tools.file_open(manifest_file, mode='rb')
    try:
        manifest_info = ast.literal_eval(tools.pycompat.to_text(f.read()))
    finally:
        f.close()

    return 'project_enterprise' in manifest_info['depends']


def get_odoo_major_version():
    return release.major_version

