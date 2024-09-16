/*!
 *
 * Bryntum Gantt for Odoo 5.5.0
 * Copyright(c) 2021 Bryntum AB
 * https://bryntum.com/contact
 * https://www.bryntum.com/legal/Bryntum-Odoo-Apps-EUL.pdf
 * The source code may NOT be used outside the Bryntum Gantt for Odoo app
 */

odoo.define('bryntum.gantt.widget', function (require) {
    "use strict";

    let view_registry = require('web.view_registry');
    let BasicView = require('web.BasicView');
    let BasicController = require('web.BasicController');
    let BasicRenderer = require('web.BasicRenderer');
    let ajax = require('web.ajax');


    let BryntumGanttController = BasicController.extend({
        start: function () {
            let response = this._super.apply(this, arguments);
            response.then(() => {
               this.$el.find('.o_cp_searchview, .o_search_options, .o_cp_pager, .o_cp_left, .o_cp_bottom_left').addClass('d-none');
               this.$el.find('.o_control_panel').addClass('d-flex justify-content-between');
               this.$el.find('.o_cp_top').css('min-width', '250px');
               this.$el.find('.breadcrumb').css('width', '600px');
               this.$el.find('.o_cp_bottom_right').css('justify-content', 'normal');

               this._rpc({
                   model : 'project.project',
                   method: 'get_bryntum_values',
                   args  : [],
               }).then((response) => {
                   try {
                       let week_start = parseInt(response.week_start);
                       if (!isNaN(week_start)) {
                           window.o_gantt.week_start = week_start;
                       }

                       window.o_gantt.readOnly = response.bryntum_readonly_project;
                       window.o_gantt.saveWbs = response.bryntum_save_wbs;

                       eval('window.o_gantt.config = ' + response.bryntum_gantt_config);
                       window.o_gantt.bryntum_auto_scheduling = response.bryntum_auto_scheduling;
                   } catch (err) {
                       console.log('Gantt configuration object not valid');
                   }
                   Object.assign(window.o_gantt, {companyIds: response['companyIds']});
                   window.o_gantt.run = true;
               }).catch(err => {
                   window.o_gantt.run = true;
               });

            });
            return response;
        }
    });

    let BryntumGanttRenderer = BasicRenderer.extend({
        init: function (parent, state, params) {
            this.state = state;
            return this._super.apply(this, arguments);
        },
        start: function () {
            let response = this._super.apply(this, arguments);

            let domain = this.state.domain ? this.state.domain.filter(el => el[0].indexOf('project_id') !== -1) : [];
            Object.assign(window.o_gantt, {companyIds: this.state.context.allowed_company_ids});
            this.$el.attr('id', 'bryntum-gantt');
            if (domain.length) {
                window.o_gantt.projectID = domain[0][2];
            } else {
                window.o_gantt.projectID = 0;
            }

            if (this.state && this.state.context) {
                window.o_gantt.lang = this.state.context.lang;
            }

            return response;
        },
        /**
         * @override
         */
        updateState: function (state, params) {
            let response = this._super.apply(this, arguments);

            window.o_gantt.update();

            let domain = this.state.domain ? this.state.domain.filter(el => el[0].indexOf('project_id') !== -1) : [];

            if (domain.length) {
                this.state = state;
                window.o_gantt.projectID = domain[0][2];
            } else {
                window.o_gantt.projectID = 0;
            }

            return response;
        },
        destroy: function () {
            window.o_gantt.run = false;
            return this._super.apply(this, arguments);
        }
    });

    let BryntumGantt = BasicView.extend({
        display_name: 'Bryntum Gantt',
        icon: 'fa fa-th-list',
        viewType: 'BryntumGantt',
        jsLibs: [
            'bryntum_gantt/static/gantt_src/js/app.js?v210',
            'bryntum_gantt/static/gantt_src/js/chunk-vendors.js?v210'
        ],
        config: _.extend({}, BasicView.prototype.config, {
            Controller: BryntumGanttController,
            Renderer: BryntumGanttRenderer
        })
    });

    view_registry.add('BryntumGantt', BryntumGantt);

    return {
        Gantt: BryntumGantt,
        Renderer: BryntumGanttRenderer,
        Controller: BryntumGanttController
    };
});
