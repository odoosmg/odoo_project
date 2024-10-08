/** @odoo-module **/
/* Copyright 2021-2024 Tecnativa - Víctor Martínez
 * License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl). */

import {SearchModel} from "@web/search/search_model";
import {patch} from "@web/core/utils/patch";

patch(SearchModel.prototype, "dms.SearchPanel", {
    setup() {
        this._super(...arguments);
    },

    _getCategoryDomain(excludedCategoryId) {
        const domain = this._super.apply(this, arguments);
        for (const category of this.categories) {
            if (category.id === excludedCategoryId) {
                continue;
            }

            if (category.activeValueId) {
                domain.push([category.fieldName, "=", category.activeValueId]);
            }
            if (domain.length === 0 && this.resModel === "dms.directory") {
                domain.push([category.fieldName, "=", false]);
            }
        }
        return domain;
    },
});
