/*!
 *
 * Bryntum Gantt for Odoo 5.5.0
 * Copyright(c) 2022 Bryntum AB
 * https://bryntum.com/contact
 * https://www.bryntum.com/legal/Bryntum-Odoo-Apps-EUL.pdf
 * The source code may NOT be used outside the Bryntum Gantt for Odoo app
 */
/******/ (function (modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for (; i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
				/******/
			}
/******/ 			installedChunks[chunkId] = 0;
			/******/
		}
/******/ 		for (moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
				/******/
			}
			/******/
		}
/******/ 		if (parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while (resolves.length) {
/******/ 			resolves.shift()();
			/******/
		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
		/******/
	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for (var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if (installedChunks[depId] !== 0) fulfilled = false;
				/******/
			}
/******/ 			if (fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
				/******/
			}
			/******/
		}
/******/
/******/ 		return result;
		/******/
	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
		/******/
	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
			/******/
		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
			/******/
		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
		/******/
	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
			/******/
		}
		/******/
	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			/******/
		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
		/******/
	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
		/******/
	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
		/******/
	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "bryntum_gantt/static/gantt_src/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0, "chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
	/******/
})
/************************************************************************/
/******/({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bryntum_gantt_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt-vue */ \"./node_modules/@bryntum/gantt-vue/index.js\");\n/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bryntum/gantt */ \"./node_modules/@bryntum/gantt/gantt.module.js\");\n/* harmony import */ var _lib_Locales_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Locales.js */ \"./src/lib/Locales.js\");\n/* harmony import */ var _lib_ProjectModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ProjectModel */ \"./src/lib/ProjectModel.js\");\n/* harmony import */ var _lib_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/Task */ \"./src/lib/Task.js\");\n/* harmony import */ var _configs_ganttConfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/ganttConfig.js */ \"./src/configs/ganttConfig.js\");\n/* harmony import */ var _configs_histogramConfig_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/histogramConfig.js */ \"./src/configs/histogramConfig.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    BryntumGantt: _bryntum_gantt_vue__WEBPACK_IMPORTED_MODULE_0__[\"BryntumGantt\"],\n    BryntumSplitter: _bryntum_gantt_vue__WEBPACK_IMPORTED_MODULE_0__[\"BryntumSplitter\"],\n    BryntumResourceHistogram: _bryntum_gantt_vue__WEBPACK_IMPORTED_MODULE_0__[\"BryntumResourceHistogram\"]\n  },\n  methods: {},\n  mounted() {\n    const gantt = this.gantt = this.$refs.gantt.instance,\n      histogram = this.histogram = this.$refs.histogram.instance,\n      project = gantt.project,\n      stm = project.stm;\n    this.splitter = this.$refs.splitter.instance;\n    window.o_gantt.gantt = gantt;\n    window.o_gantt.histogram = histogram;\n\n    // eslint-disable-next-line no-debugger\n    gantt.tbar.histogram = histogram;\n    try {\n      const state = JSON.parse(localStorage.getItem('b-gantt-state'));\n      if (state) {\n        delete state.zoomLevel;\n        gantt.state = state;\n      }\n    } catch (err) {}\n    try {\n      const projectIds = JSON.parse(localStorage.getItem('b-gantt-project-ids'));\n      if (projectIds) {\n        if (project.projectIds.length === 0) {\n          project.projectIds = projectIds;\n          project.transport.load.params = {\n   companyID: window.o_gantt.companyIds,\n         project_ids: project.projectIds\n          };\n        }\n      }\n    } catch (err) {}\n    window.project = project;\n    project.load().then(() => {\n      stm.enable();\n      stm.autoRecord = true;\n    });\n    histogram.addPartner(gantt);\n  },\n  destroyed() {\n    try {\n      const state = this.gantt.state;\n      localStorage.setItem('b-scheduler-state', JSON.stringify(state));\n    } catch (err) {\n      console.log(err);\n    }\n    this.gantt.destroy();\n    this.histogram.destroy();\n    this.splitter.destroy();\n  },\n  data() {\n    const projectConfig = {\n      taskModelClass: _lib_Task__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    };\n    window.production = true;\n    if (!window.o_gantt) {\n      window.o_gantt = {\n        projectID: 0,\n        lang: 'en_En',\n        readOnly: false,\n        saveWbs: false,\n        config: {\n          project: {\n            // silenceInitialCommit: false,\n            week_start: 1,\n            hoursPerDay: 8\n          }\n        }\n      };\n      window.production = false;\n    }\n    if (!window.production) {\n      Object.assign(projectConfig, {\n        autoSync: true,\n        transport: {\n          load: {\n            url: 'http://lorem.com/bryntum_gantt/load'\n          },\n          sync: {\n            create: 'http://lorem.com/bryntum_gantt/send/create',\n            update: 'http://lorem.com/bryntum_gantt/send/update',\n            remove: 'http://lorem.com/bryntum_gantt/send/remove'\n          }\n        }\n      });\n    }\n    if (window.o_gantt.config && window.o_gantt.config.project) {\n      Object.assign(projectConfig, window.o_gantt.config.project);\n      delete window.o_gantt.config.project;\n    }\n    projectConfig.silenceInitialCommit = !window.o_gantt.saveWbs;\n    const project = new _lib_ProjectModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"](projectConfig);\n    project.addCrudStore({\n      storeId: 'projects',\n      store: new _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__[\"Store\"]({\n        fields: ['id', 'name']\n      })\n    });\n    project.projects = project.getStoreDescriptor('projects').store;\n    project.transport.load.params = {\n companyID: window.o_gantt.companyIds,\n     project_ids: project.projectIds\n    };\n    window.o_gantt.update = function () {\n      project.load();\n    };\n    const config = window.o_gantt.config || {};\n    config.readOnly = !!window.o_gantt.readOnly;\n    if (config.tbar) {\n      Object.assign(_configs_ganttConfig_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].tbar, config.tbar);\n      delete window.o_gantt.config.tbar;\n    }\n    if (config.features) {\n      Object.assign(_configs_ganttConfig_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].features, config.features);\n      delete config.features;\n    }\n    Object.assign(config, {\n      weekStartDay: config.weekStartDay !== undefined ? config.weekStartDay : window.o_gantt.week_start\n    });\n    _configs_histogramConfig_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].weekStartDay = config.weekStartDay;\n    Object.assign(_configs_ganttConfig_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object.assign({\n      project: project\n    }, config));\n    Object.assign(_configs_histogramConfig_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      project: project\n    });\n    _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__[\"LocaleManager\"].locale = _lib_Locales_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][window.o_gantt.lang] || 'En';\n    const errorFn = window.onerror;\n    if (errorFn) {\n      window.onerror = function (message, file, line, col, error) {\n        if (error) {\n          errorFn(message, file, line, col, error);\n        }\n      };\n    }\n    return {\n      ganttConfig: _configs_ganttConfig_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      histogramConfig: _configs_histogramConfig_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

			/***/
		}),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4fbfbb1a-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4fbfbb1a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"panel\", attrs: { id: \"bryntum-scheduler-component\" } },\n    [\n      _c(\n        \"bryntum-gantt\",\n        _vm._b({ ref: \"gantt\" }, \"bryntum-gantt\", _vm.ganttConfig, false)\n      ),\n      _c(\"bryntum-splitter\", { ref: \"splitter\" }),\n      _c(\n        \"bryntum-resource-histogram\",\n        _vm._b(\n          { ref: \"histogram\" },\n          \"bryntum-resource-histogram\",\n          _vm.histogramConfig,\n          false\n        )\n      ),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224fbfbb1a-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

			/***/
		}),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

			eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!@bryntum/gantt/gantt.stockholm.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@bryntum/gantt/gantt.stockholm.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"/**\\n * Application global styles (compiled from existing files)\\n */\\n.b-sch-event .b-sch-event-content {\\n  font-size: 12px;\\n}\\n.b-theme-stockholm .b-sch-event {\\n  border-radius: 2px;\\n}\\n.b-percent-bar-cell .b-percent-bar-outer {\\n  height: 1em;\\n  border-radius: 1em;\\n}\\n.b-percent-bar-cell .b-percent-bar-outer .b-percent-bar {\\n  border-radius: 1em;\\n  background-color: #8ee997;\\n}\\n.b-gantt > .b-toolbar > .b-content-element > .b-widget:not(.b-last-visible-child) {\\n  margin-right: 1em;\\n}\\n.b-gantt > .b-toolbar > .b-content-element .b-button {\\n  min-width: 3.5em;\\n}\\n.b-widget label {\\n  margin-bottom: unset !important;\\n}\\n.filter-by-name label {\\n  display: none;\\n}\\n.b-theme-stockholm .b-gantt > .b-toolbar {\\n  border-bottom-color: #d8d9da;\\n}\\n.b-theme-classic .b-gantt > .b-toolbar {\\n  background-color: #f1f1f4;\\n  border-bottom-color: #b0b0b6;\\n}\\n.b-theme-classic .b-gantt > .b-toolbar .b-has-label label {\\n  color: #555;\\n}\\n.b-theme-classic-light .b-gantt > .b-toolbar {\\n  background-color: #fff;\\n  border-bottom-color: #e0e0e0;\\n}\\n.b-theme-material .b-gantt > .b-toolbar {\\n  background-color: #fff;\\n  border-bottom: none;\\n}\\n.b-theme-material .b-gantt > .b-toolbar .filter-by-name label {\\n  display: block;\\n}\\n.b-theme-classic-dark .b-gantt > .b-toolbar {\\n  background-color: #2b2b2f;\\n  border-bottom-color: #2a2b2e;\\n}\\n.settings-menu .b-slider {\\n  margin-bottom: 0.5em;\\n}\\n.b-task-baseline[data-index=\\\"0\\\"] {\\n  background-color: #ddd;\\n}\\n.b-task-baseline[data-index=\\\"1\\\"] {\\n  background-color: lightgray;\\n}\\n.b-task-baseline[data-index=\\\"2\\\"] {\\n  background-color: #c9c9c9;\\n}\\n.b-hide-baseline-1 .b-task-baseline[data-index=\\\"0\\\"] {\\n  display: none;\\n}\\n.b-hide-baseline-2 .b-task-baseline[data-index=\\\"1\\\"] {\\n  display: none;\\n}\\n.b-hide-baseline-3 .b-task-baseline[data-index=\\\"2\\\"] {\\n  display: none;\\n}\\n.end-date-edit {\\n  margin-bottom: 0.6em;\\n}\\n#bryntum-scheduler-component {\\n  position: relative;\\n  height: 100%;\\n  flex: 1 1 100%;\\n  min-height: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: stretch;\\n  transform: translate(0, 0);\\n  top: 0;\\n  left: 0;\\n}\\n.b-datefield.b-no-steppers .b-step-trigger {\\n  display: none !important;\\n}\\n[aria-hidden=true], [aria-hidden=\\\"1\\\"] {\\n  display: unset !important;\\n}\\n.b-undoredobase .b-badge::before {\\n  top: -0.6em;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

			/***/
		}),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

			eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2465e40d\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

			/***/
		}),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

			/***/
		}),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

			/***/
		}),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&":
/*!*******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--9-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

			/***/
		}),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4fbfbb1a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4fbfbb1a-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4fbfbb1a-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4fbfbb1a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4fbfbb1a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

			/***/
		}),

/***/ "./src/configs/ganttConfig.js":
/*!************************************!*\
  !*** ./src/configs/ganttConfig.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";


			__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt */ "./node_modules/@bryntum/gantt/gantt.module.js");
/* harmony import */ var _lib_GanttToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/GanttToolbar */ "./src/lib/GanttToolbar.js");
/* harmony import */ var zipcelx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zipcelx */ "./node_modules/zipcelx/lib/module.js"); 
			/**
			 *- Gantt configuration
			 */


			//  var core = require('web.core');
			//  var framework = require('web.framework');

			class TestTab extends _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__['EditorTab'] {
				// Factoryable type name
				static get type() {
					return 'custom_testtab';
				}
				static get defaultConfig() {
					return {
						title: 'Test Tab',
						cls: "b-test-tab",
						layoutStyle: {
							flexFlow: "column nowrap"
						},
						items: {
							grid: {
								type: "grid",
								weight: 100,
								flex: "1 1 auto",
								columns: {
									data: {
										resource: {
											localeClass: this,
											text: "Score",
											field: "resource",
											flex: 7,
											renderer: ({ value }) => (value == null ? void 0 : value.name) || "",
											editor: {
												type: "modelcombo",
												displayField: "name",
												valueField: "id"
											}
										},
										units: {
											type: "number",
											localeClass: this,
											text: "Range",
											field: "units",
											flex: 3,
											renderer: (data) => this.L("L{unitsTpl}", data),
											min: 0,
											max: 100,
											step: 10
										}
									}
								},
								disableGridRowModelWarning: true,
								asyncEventSuffix: "PreCommit"
							},
							toolbar: {
								type: "toolbar",
								dock: "bottom",
								cls: "b-compact-bbar",
								items: {
									add: {
										type: "button",
										weight: 210,
										cls: "b-add-button b-green",
										icon: "b-icon b-icon-add"
									},
									remove: {
										type: "button",
										weight: 220,
										cls: "b-remove-button b-red",
										icon: "b-icon b-icon-trash",
										disabled: true
									}
								}
							}
						}
					}
				}  // eo getter defaultConfig

				afterConstruct() {
					super.afterConstruct();
					const me = this, addButton = me.addButton = me.widgetMap.add, removeButton = me.removeButton = me.widgetMap.remove, grid = me.grid = me.widgetMap.grid;
					addButton == null ? void 0 : addButton.ion({ click: "onAddClick", thisObj: me });
					removeButton == null ? void 0 : removeButton.ion({ click: "onRemoveClick", thisObj: me });
					grid.ion({
						selectionChange: "onGridSelectionChange",
						startCellEdit: "onGridStartCellEdit",
						finishCellEdit: "onGridFinishCellEdit",
						cancelCellEdit: "onGridCancelCellEdit",
						thisObj: me
					});
				}

				loadEvent(record) {
//				    console.log('testing=',record.widgetMap);
//				    record.name.disabled = disable;
//				    this.widgetMap['mspExportButton'].hidden = false;
//				    predecessorsTab:false,
				}

				onAddClick() {
					console.log("Clicked");
				}
				onRemoveClick() {
					console.log("Remove button");
					// const me = this, { grid } = me;
					// grid.store.remove(grid.selectedRecords);
					// grid.selectedRecords = null;
					// me.removeButton.disable();
				}
				onGridSelectionChange({ selection }) {
					const { removeButton } = this, disable = !(selection == null ? void 0 : selection.length) || this.up((w) => w.readOnly);
					if (removeButton.containsFocus && disable) {
						this.grid.focus();
					}
//					console.log('disable');
					removeButton.disabled = disable;
				}
				onGridStartCellEdit({ editorContext }) {
					if (editorContext.column.field === "resource") {
						this.resourceCombo.store.fillFromMaster();
						this._editingAssignment = editorContext.record;
						this._activeCellEdit = editorContext;
					}
				}
				onGridFinishCellEdit() {
					this._activeCellEdit = this._editingAssignment = null;
				}
				onGridCancelCellEdit() {
					this._activeCellEdit = this._editingAssignment = null;
				}
				pruneInvalidAssignments() {
					const { store } = this.grid;
					store.remove(store.query((a) => !a.isValid));
				}
				beforeTaskEditShow({ editor }) {
				    console.log('beforeTaskEditShow');
//                    editor.widgetMap.notesTab.hidden = false;
                }

			}// eo class FilesTab
			TestTab.initClass();
			TestTab._$name = "TestTab";




			const ganttConfig = {
				dependencyIdField: "wbsCode",
				resourceImageFolderPath: "users/",
				syncMask: null,
				
				removePartner: () => {
					// console.log('remove partner');
				},
				columns: [{
					type: "wbs",
					text:  "Nº",
					persist: true,
					id: 'br_column_1'
				}, {
					type: "name",
					width: 450,
					id: 'br_column_2'
				}, {
					type: "startdate",
					id: 'br_column_3'
				}, {
					type: "enddate",
					id: 'br_column_4'
				}, {
					type: "completeddate",
					id: 'br_column_4_1'
				}, {
					type: "resourceassignment",
					text:  "Responsibility (Person)",
					width: 250,
					showAvatars: false,
					id: 'br_column_5',
				}, {
					type: "percentdone",
					showCircle: true,
					width: 70,
					id: 'br_column_6'
				}, {
					type: "owner",
					width: 80,
					id: 'br_column_6_1',
					readOnly: true
				}, {
					type: "participant",
					width: 150,
					id: 'br_column_6_2',
					readOnly: true
				}, {
					type: "miscellaneous",
					width: 150,
					id: 'br_column_6_3'
				}, {
					type: "Budget",
					width: 150,
					id: 'br_column_6_4'
				}, {
					type: "actualBudget",
					width: 150,
					id: 'br_column_6_5'
				}, {
					type: "predecessor",
					hidden: true,
					width: 112,
					id: 'br_column_7'
				}, {
					type: "successor",
					hidden: true,
					width: 112,
					id: 'br_column_8'
				}, {
					text: 'Type',
					field: 'stageId',
					editor: {
						type: 'combo',
						valueField: 'id',
						displayField: 'name'
					},
					renderer: function ({
						value,
						record,
						grid
					}) {
						var _grid$project$project;
						const project = (_grid$project$project = grid.project.projects) === null || _grid$project$project === void 0 ? void 0 : _grid$project$project.getById(record.project_id);
						if (project) {
							var _project$taskTypes$ge;
							return (_project$taskTypes$ge = project.taskTypes.getById(value)) === null || _project$taskTypes$ge === void 0 ? void 0 : _project$taskTypes$ge.name;
						}
					},
					id: 'br_column_14'
				}, {
					type: "addnew",
					id: 'br_column_13'
				}],
				taskRenderer({ taskRecord, renderData }) {
					// Set the background color based on task deadlines
					const timeDifference = taskRecord.endDate - Date.now();
					const completedDateDifference = taskRecord.endDate - taskRecord.completedDate;
					const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
					const completedDate = Math.ceil(completedDateDifference / (1000 * 3600 * 24));
					const percentDone = taskRecord.percentDone;
//					console.log('timeDifference=',timeDifference)
//					console.log('dayDifference=',dayDifference)
//					console.log('percentDone=',percentDone)
//					console.log('completedDate=',completedDate)
//                    console.log('taskRecord.endDate =',taskRecord.endDate )
//                    console.log('Date.now()=',Date.now())
//                    this.widgetMap['mspExportButton'].hidden = feature.disabled;
//console.log('widgetMap=',this.miscellaneous);

					if ((!taskRecord.completedDate & (taskRecord.endDate && dayDifference < 0)) || (taskRecord.completedDate && completedDate < 0)) {
					    renderData.style = 'background-color: red';
					}else if (taskRecord.completedDate && percentDone < 100) {
						renderData.style = 'background-color: pink';
					}else if (!taskRecord.completedDate && !isNaN(dayDifference) && dayDifference <= 7 && dayDifference >= 0) {
						renderData.style = 'background-color: #FFA71D';
					}else if (!taskRecord.completedDate && !isNaN(dayDifference) && dayDifference > 7) {
						renderData.style = 'background-color: #00A36C';
					}else{
					    renderData.style = 'background-color: #6495ED';
					}
				},
				subGridConfigs: {
					locked: {
						flex: 2
					},
					normal: {
						flex: 1.2
					}
				},
				columnLines: false,
				features: {
					dependencies: {
						onTimeSpanMouseLeave: function (event) {
							var _this$creationData;
							const me = this,
								element = event[`${this.eventName}Element`],
								target = event.event.relatedTarget,
								timeSpanElement = (_this$creationData = this.creationData) === null || _this$creationData === void 0 ? void 0 : _this$creationData.timeSpanElement;
							let isDescendant = false;
							try {
								isDescendant = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__["DomHelper"].isDescendant(timeSpanElement, target);
							} catch (err) { }
							if (!this.creationData || !timeSpanElement || !isDescendant) {
								this.hideTerminals(element);
							}
							if (this.creationData && !this.creationData.finalizing) {
								this.creationData.timeSpanElement = null;
								this.onOverNewTargetWhileCreating();
							}
						}
					},
					cellEdit: {
						addNewAtEnd: false
					},
					taskEdit: {
						callOnFunctions: true,
						onHide: () => { },
						items: {
							testTab: {
								type: 'custom_testtab',
								weight: 100,
								hidden:true,
							},
							notesTab: {
								title: 'Description',
								tab: {
									icon: false,
									titleProperty: 'text',
								},
							},
							generalTab: false,
							predecessorsTab: false,
							successorsTab: false,
							resourcesTab: false,
							advancedTab: false,
						}
					},
					taskMenu: {
						items: {
							// splitTask : false,
							testTask: {
								text: 'Task Detail',
								weight: 100,
								icon: 'b-fa b-fa-fw b-icon-link',
								cls: "b-separator",
								onItem({ taskRecord }) {
									let task_id = taskRecord.id.split('_')[1];
									window.location = `${window.location.origin}/web#id=${task_id}&model=project.task&view_type=form`;
								}
							},
							add: {
								menu: {
									subtask: {
										at: 'end'
									},
									addTaskAbove: false,
									addTaskBelow: false,
									successor: false,
									predecessor: false
								}
							}
						}
					},
					rollups: {
						disabled: true
					},
					baselines: {
						disabled: true,
						// Custom tooltip template for baselines
						template(data) {
							const me = this,
								{
									baseline
								} = data,
								{
									task
								} = baseline,
								delayed = task.startDate > baseline.startDate,
								overrun = task.durationMS > baseline.durationMS;
							let {
								decimalPrecision
							} = me;
							if (decimalPrecision == null) {
								decimalPrecision = me.client.durationDisplayPrecision;
							}
							const multiplier = Math.pow(10, decimalPrecision),
								displayDuration = Math.round(baseline.duration * multiplier) / multiplier;
							return `
                    <div class="b-gantt-task-title">${_bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__["StringHelper"].encodeHtml(task.name)} (${baseline.name})</div>
                    <table>
                    <tr><td>${me.L('Start')}:</td><td>${data.startClockHtml}</td></tr>
                    ${baseline.milestone ? '' : `
                        <tr><td>Start:</td><td>${data.endClockHtml}</td></tr>
                        <tr><td>Duration:</td><td class="b-right">${displayDuration + ' ' + _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__["DateHelper"].getLocalizedNameOfUnit(baseline.durationUnit, baseline.duration !== 1)}</td></tr>
                    `}
                    </table>
                    ${delayed ? `
                        <h4 class="statusmessage b-baseline-delay"><i class="statusicon b-fa b-fa-exclamation-triangle"></i>Delayed start by ${_bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__["DateHelper"].formatDelta(task.startDate - baseline.startDate)}</h4>
                    ` : ''}
                    ${overrun ? `
                        <h4 class="statusmessage b-baseline-overrun"><i class="statusicon b-fa b-fa-exclamation-triangle"></i>Overrun by ${_bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__["DateHelper"].formatDelta(task.durationMS - baseline.durationMS)}</h4>
                    ` : ''}
                    `;
						}
					},
					progressLine: {
						disabled: true
					},
					filter: true,
					dependencyEdit: true,
					rowReorder: {
						listeners: {
							gridRowDrag: ({
								context
							}) => {
								const {
									startRecord,
									parent
								} = context;
								if (parent && startRecord) {
									context.valid = parent.project_id === startRecord.project_id || parent.id === startRecord.project_id;
								} else {
									context.valid = false;
								}
							}
						}
					},
					mspExport: {
						filename: 'Gantt MSP Export',
						disabled: true
					},
					excelExporter: {
						disabled: true,
						zipcelx: zipcelx__WEBPACK_IMPORTED_MODULE_2__["default"]
					},
					timeRanges: {
						showCurrentTimeLine: true
					},
					labels: {
						left: {
							field: "name",
							editor: {
								type: "textfield"
							}
						}
					}
				},
				listeners: {
					taskMenuBeforeShow: ({
						taskRecord
					}) => {
						return !taskRecord.isReadOnly;
					},
					'beforeCellEditStart': function ({
						editorContext
					}) {
						const {
							record,
							editor,
							column
						} = editorContext;
						if (column.field === 'stageId') {
							var _this$project$project;
							const project = (_this$project$project = this.project.projects) === null || _this$project$project === void 0 ? void 0 : _this$project$project.getById(record.project_id);
							if (project) {
								editor.store = project.taskTypes;
							} else {
								return false;
							}
						}
					}
				},
				tbar: {
					type: "gantttoolbar",
					overflow: 'scroll'
				}
			};
/* harmony default export */ __webpack_exports__["default"] = (ganttConfig);

			// eof

			//# sourceURL=webpack:///./src/configs/ganttConfig.js?

			/***/
		}),

/***/ "./src/configs/histogramConfig.js":
/*!****************************************!*\
  !*** ./src/configs/histogramConfig.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_HistogramToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/HistogramToolbar */ \"./src/lib/HistogramToolbar.js\");\n\nconst histogramConfig = {\n  hideHeaders: false,\n  rowHeight: 50,\n  showBarTip: true,\n  ref: 'histogram',\n  header: false,\n  collapsible: true,\n  collapsed: true,\n  minHeight: 0,\n  columns: [{\n    type: 'resourceInfo',\n    showImage: false,\n    text: 'Name',\n    field: 'name',\n    showEventCount: false,\n    flex: 1\n  }],\n  tbar: {\n    type: \"histogramtoolbar\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (histogramConfig);\n\n//# sourceURL=webpack:///./src/configs/histogramConfig.js?");

			/***/
		}),

/***/ "./src/lib/Calendars.js":
/*!******************************!*\
  !*** ./src/lib/Calendars.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calendar; });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bryntum/gantt */ \"./node_modules/@bryntum/gantt/gantt.module.js\");\n\n\nclass Calendar {\n  constructor(toProcess) {\n    this.toProcess = toProcess;\n    this.resourceCalendars = {};\n  }\n  getDayString(number) {\n    return [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"][parseInt(number)];\n  }\n  getDateString(dateStr, number = 0) {\n    const d = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__[\"DateHelper\"].parse(`${dateStr || '1970-01-01'}`, 'YYYY-MM-DD');\n    d.setHours(parseInt(number));\n    d.setMinutes(parseInt(Math.round(number % 1 * 60)));\n    return _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__[\"DateHelper\"].format(d, 'YYYY-MM-DDTHH:mm:ss');\n  }\n  getHourString(dateStr) {\n    const d = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__[\"DateHelper\"].parse(dateStr, 'YYYY-MM-DDTHH:mm:ss');\n    return _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__[\"DateHelper\"].format(d, 'HH:mm');\n  }\n  getCalendars() {\n    const rows = [];\n    for (let i = 0; i < this.toProcess.length; i++) {\n      const calendar = this.toProcess[i];\n      if (calendar.active) {\n        const intervals = {};\n        const workingIntervals = calendar.working_intervals;\n        for (let i = 0; i < workingIntervals.length; i++) {\n          const workingInterval = workingIntervals[i];\n          const isStatic = !!workingInterval.date_from;\n          const name = isStatic ? workingInterval.name : this.getDayString(workingInterval.day_of_week);\n          const dateFrom = this.getDateString(workingInterval.date_from, workingInterval.hour_from);\n          const dateTo = this.getDateString(workingInterval.date_to, workingInterval.hour_to);\n          const resourceId = workingInterval.resource_id ? 'r_' + workingInterval.resource_id : '-';\n          const resourceName = workingInterval.resource_name ? workingInterval.resource_name : '-';\n          let entry = dateFrom + '|' + dateTo + '|' + resourceId + '|' + resourceName;\n          if (!intervals[entry]) {\n            intervals[entry] = {\n              isWorking: true\n            };\n            if (!isStatic) {\n              intervals[entry].dayNames = [];\n            }\n          }\n          entry = intervals[entry];\n          if (isStatic) {\n            entry.startDate = dateFrom;\n            entry.endDate = dateTo;\n          } else {\n            if (!entry.dayNames.includes(name)) {\n              entry.dayNames.push(name);\n              entry.recurrentStartDate = `On ${entry.dayNames.join(', ')} at ${this.getHourString(dateFrom)}`;\n              entry.recurrentEndDate = `On ${entry.dayNames.join(', ')} at ${this.getHourString(dateTo)}`;\n            }\n          }\n        }\n        const leaveIntervals = calendar.leave_intervals;\n        for (let i = 0; i < leaveIntervals.length; i++) {\n          const leaveInterval = leaveIntervals[i];\n          const dateFrom = leaveInterval.date_from;\n          const dateTo = leaveInterval.date_to;\n          const resourceId = leaveInterval.resource_id ? 'r_' + leaveInterval.resource_id : '-';\n          const resourceName = leaveInterval.resource_name ? leaveInterval.resource_name : '-';\n          let entry = dateFrom + '|' + dateTo + '|' + resourceId + '|' + resourceName;\n          if (!intervals[entry]) {\n            intervals[entry] = {\n              isWorking: false\n            };\n          }\n          entry = intervals[entry];\n          entry.startDate = dateFrom;\n          entry.endDate = dateTo;\n        }\n        const keys = Object.keys(intervals);\n        calendar.intervals = [];\n        calendar.children = [];\n        const resourceCalendars = {};\n        let resourceIndex = 1;\n        for (let i = 0; i < keys.length; i++) {\n          const key = keys[i];\n          const interval = intervals[key];\n          const fragments = key.split('|');\n          const resourceId = fragments[2];\n          const resourceName = fragments[3];\n          if (resourceId !== '-') {\n            if (!resourceCalendars[resourceId]) {\n              resourceCalendars[resourceId] = {\n                id: calendar.id + '_' + resourceIndex,\n                name: resourceName + ' (' + resourceIndex + ')',\n                intervals: []\n              };\n              calendar.children.push(resourceCalendars[resourceId]);\n              this.resourceCalendars[resourceId] = {};\n              resourceIndex++;\n            }\n            resourceCalendars[resourceId].intervals.push(interval);\n          } else {\n            calendar.intervals.push(interval);\n          }\n        }\n        delete calendar.working_intervals;\n        delete calendar.leave_intervals;\n        calendar.unspecifiedTimeIsWorking = false;\n        rows.push(calendar);\n      }\n    }\n    return rows;\n  }\n}\n\n//# sourceURL=webpack:///./src/lib/Calendars.js?");

			/***/
		}),

/***/ "./src/lib/GanttToolbar.js":
/*!*********************************!*\
  !*** ./src/lib/GanttToolbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return GanttToolbar; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bryntum/gantt */ "./node_modules/@bryntum/gantt/gantt.module.js");



			/**
			 * @module GanttToolbar
			 */

			/**
			 * @extends Core/widget/Toolbar
			 */
			class GanttToolbar extends _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__["Toolbar"] {
				// Factoryable type name
				static get type() {
					return 'gantttoolbar';
				}
				static get $name() {
					return 'GanttToolbar';
				}
				static get configurable() {
					return {
						items: [{
							type: 'buttonGroup',
							items: [{
								color: 'b-green',
								ref: 'addTaskButton',
								icon: 'b-fa b-fa-plus',
								text: 'Create',
								tooltip: 'Create new task',
								onAction: 'up.onAddTaskClick'
							}]
						}, {
							ref: 'undoRedo',
							type: 'undoredo',
							items: {
								transactionsCombo: null
							}
						}, {
							type: 'buttonGroup',
							items: [{
								ref: 'expandAllButton',
								icon: 'b-fa b-fa-angle-double-down',
								tooltip: 'Expand all',
								onAction: 'up.onExpandAllClick'
							}, {
								ref: 'collapseAllButton',
								icon: 'b-fa b-fa-angle-double-up',
								tooltip: 'Collapse all',
								onAction: 'up.onCollapseAllClick'
							}]
						}, {
							type: 'buttonGroup',
							items: [{
								ref: 'zoomInButton',
								icon: 'b-fa b-fa-search-plus',
								tooltip: 'Zoom in',
								onAction: 'up.onZoomInClick'
							}, {
								ref: 'zoomOutButton',
								icon: 'b-fa b-fa-search-minus',
								tooltip: 'Zoom out',
								onAction: 'up.onZoomOutClick'
							}, {
								ref: 'zoomToFitButton',
								icon: 'b-fa b-fa-compress-arrows-alt',
								tooltip: 'Zoom to fit',
								onAction: 'up.onZoomToFitClick'
							}, {
								ref: 'previousButton',
								icon: 'b-fa b-fa-angle-left',
								tooltip: 'Previous time span',
								onAction: 'up.onShiftPreviousClick'
							}, {
								ref: 'nextButton',
								icon: 'b-fa b-fa-angle-right',
								tooltip: 'Next time span',
								onAction: 'up.onShiftNextClick'
							}]
						}, {
							type: 'buttonGroup',
							ref: 'baseLineButtons',
							hidden: true,
							items: [{
								type: 'button',
								text: 'Set baseline',
								icon: 'b-fa-bars',
								iconAlign: 'end',
								menu: [{
									text: 'Set baseline 1',
									onItem() {
										this.up('gantttoolbar').setBaseline(1);
									}
								}, {
									text: 'Set baseline 2',
									onItem() {
										this.up('gantttoolbar').setBaseline(2);
									}
								}, {
									text: 'Set baseline 3',
									onItem() {
										this.up('gantttoolbar').setBaseline(3);
									}
								}]
							}, {
								type: 'button',
								text: 'Show baseline',
								icon: 'b-fa-bars',
								iconAlign: 'end',
								menu: [{
									checked: true,
									text: 'Baseline 1',
									onToggle({
										checked
									}) {
										this.up('gantttoolbar').toggleBaselineVisible(1, checked);
									}
								}, {
									checked: true,
									text: 'Baseline 2',
									onToggle({
										checked
									}) {
										this.up('gantttoolbar').toggleBaselineVisible(2, checked);
									}
								}, {
									checked: true,
									text: 'Baseline 3',
									onToggle({
										checked
									}) {
										this.up('gantttoolbar').toggleBaselineVisible(3, checked);
									}
								}]
							}]
						}, {
							type: 'button',
							ref: 'featuresButton',
							icon: 'b-fa b-fa-tasks',
							text: 'Settings',
							tooltip: 'Toggle features',
							toggleable: true,
							menu: {
								onItem: 'up.onFeaturesClick',
								onBeforeShow: 'up.onFeaturesShow',
								// "checked" is set to a boolean value to display a checkbox for menu items. No matter if it is true or false.
								// The real value is set dynamically depending on the "disabled" config of the feature it is bound to.
								items: [{
									text: 'UI settings',
									icon: 'b-fa-sliders-h',
									menu: {
										type: 'popup',
										anchor: true,
										cls: 'settings-menu',
										layoutStyle: {
											flexDirection: 'column'
										},
										onBeforeShow: 'up.onSettingsShow',
										items: [{
											type: 'slider',
											ref: 'rowHeight',
											text: 'Row height',
											width: '12em',
											showValue: true,
											min: 30,
											max: 70,
											onInput: 'up.onRowHeightChange'
										}, {
											type: 'slider',
											ref: 'barMargin',
											text: 'Bar margin',
											width: '12em',
											showValue: true,
											min: 0,
											max: 10,
											onInput: 'up.onBarMarginChange'
										}, {
											type: 'slider',
											ref: 'duration',
											text: 'Animation duration ',
											width: '12em',
											min: 0,
											max: 2000,
											step: 100,
											showValue: true,
											onInput: 'up.onAnimationDurationChange'
										}]
									}
								}, {
									text: 'Draw dependencies',
									feature: 'dependencies',
									checked: false
								}, {
									text: 'Task labels',
									feature: 'labels',
									checked: false
								}, {
									text: 'Critical paths',
									feature: 'criticalPaths',
									tooltip: 'Highlight critical paths',
									checked: false
								}, {
									text: 'Project lines',
									feature: 'projectLines',
									checked: false
								}, {
									text: 'Highlight non-working time',
									feature: 'nonWorkingTime',
									checked: false
								}, {
									text: 'Enable cell editing',
									feature: 'cellEdit',
									checked: false
								}, {
									text: 'Show baselines',
									feature: 'baselines',
									checked: false
								}, {
									text: 'Show rollups',
									feature: 'rollups',
									checked: false
								}, {
									text: 'Export to MSP',
									feature: 'mspExport',
									checked: false
								}, {
									text: 'Export to Excel',
									feature: 'excelExporter',
									checked: false
								}, {
									text: 'Show progress line',
									feature: 'progressLine',
									checked: false
								}, {
									text: 'Show resource utilization',
									subGrid: 'partner',
									checked: false
								}, {
									text: 'Hide schedule',
									cls: 'b-separator',
									subGrid: 'normal',
									checked: false
								}]
							}
						}, {
							type: 'datefield',
							ref: 'startDateField',
							label: 'Project start',
							// required  : true, (done on load)
							flex: '0 0 18em',
							listeners: {
								change: 'up.onStartDateChange'
							}
						}, {
							type: 'combo',
							ref: 'projectPicker',
							displayField: 'name',
							minWidth: '300px',
							width: 'auto',
							placeholder: 'Pick a project',
							multiSelect: true,
							listeners: {
								change: 'up.onProjectChange'
							}
						}, {
							type: 'checkbox',
							text: 'My Tasks',
							cls: 'b-blue',
							feature: 'taskLines',
							checked: false,
							listeners: {
								change: 'up.onMyTaskChange'
							}
						}, '->', {
							type: 'button',
							text: 'Export to MSP',
							hidden: true,
							ref: 'mspExportButton',
							icon: 'b-fa-file-export',
							onAction: 'up.onMSPExport'
						}, {
							type: 'button',
							text: 'Export as .xslx',
							hidden: true,
							ref: 'excelExportButton',
							icon: 'b-fa-file-export',
							onAction: 'up.onExcelExport'
						}, {
							type: 'textfield',
							ref: 'filterByName',
							cls: 'filter-by-name',
							flex: '0 0 13.5em',
							// Label used for material, hidden in other themes
							label: 'Find tasks by name',
							// Placeholder for others
							tooltip: 'Find tasks by name',
							clearable: true,
							keyStrokeChangeDelay: 100,
							triggers: {
								filter: {
									align: 'end',
									cls: 'b-fa b-fa-filter'
								}
							},
							onChange: 'up.onFilterChange'
						}]
					};
				}

				// Called when toolbar is added to the Gantt panel
				updateParent(parent, was) {
					super.updateParent(parent, was);
					this.gantt = parent;
					const addTaskButton = this.widgetMap.addTaskButton;
					if (addTaskButton) {
						addTaskButton.text = this.gantt.L('New task');
					}
					const projectStartField = this.widgetMap.startDateField;
					const projectLines = this.gantt.features.projectLines;
					if (projectLines && projectStartField) {
						projectStartField.label = projectLines.L('Project Start');
					}
					parent.project.on({
						load: 'onProjectload',
						refresh: 'updateStartDateField',
						thisObj: this
					});
					this.styleNode = document.createElement('style');
					document.head.appendChild(this.styleNode);
				}
				syncOverflowMenuButton(overflowItems) {
					const combo = overflowItems.find(item => item.ref === 'projectPicker');
					if (combo) {
						combo.initialConfig.store = this.gantt.project.projects;
					}
					super.syncOverflowMenuButton(overflowItems);
				}
				onProjectload() {
					this.updateStartDateField();
					const {
						projectPicker
					} = this.widgetMap,
						project = this.gantt.project;
					try {
						localStorage.setItem('b-gantt-project-ids', JSON.stringify(project.projectIds));
					} catch (err) {
						console.log(err);
					}
					if (!project.loadProjectsOnly) {
						projectPicker.store = project.projects;
						const value = [];
						if (this.gantt.project.root.children) {
							this.gantt.project.root.children.forEach(project => {
								value.push(project.id);
							});
						}
						projectPicker.placeholder = value.length === 0 ? this.L('Pick a project') : '';
						projectPicker.value = value;
					} else {
						project.loadProjectsOnly = false;
						projectPicker.disabled = false;
					}
				}
				setAnimationDuration(value) {
					const me = this,
						cssText = `.b-animating .b-gantt-task-wrap { transition-duration: ${value / 1000}s !important; }`;
					me.gantt.transitionDuration = value;
					if (me.transitionRule) {
						me.transitionRule.cssText = cssText;
					} else {
						me.transitionRule = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__["CSSHelper"].insertRule(cssText);
					}
				}
				updateStartDateField() {
					const {
						startDateField
					} = this.widgetMap;
					if (this.gantt.project.startDate) {
//					console.log('this.gantt.project.startDate=',this.gantt.project.startDate)
//					console.log('this.widgetMap=',this.widgetMap);
						startDateField.value = this.gantt.project.startDate;

						// This handler is called on project.load/propagationComplete, so now we have the
						// initial start date. Prior to this time, the empty (default) value would be
						// flagged as invalid.
						startDateField.required = true;
					}
				}

				// region controller methods

				async onAddTaskClick() {
					const {
						gantt
					} = this;
					if (gantt.taskStore.rootNode.children.length) {
						const parent = gantt.selectedRecord || gantt.taskStore.first;
						if (parent) {
							const added = parent.appendChild({
								name: gantt.L('New task'),
								duration: 1,
								isReadOnly: false,
								project_id: parent.project_id
							});

							// run propagation to calculate new task fields
							await gantt.project.propagateAsync();

							// scroll to the added task
							await gantt.scrollRowIntoView(added);
							gantt.features.cellEdit.startEditing({
								record: added,
								field: 'name'
							});
						}
					}
				}
				onEditTaskClick() {
//				console.log('onEditTaskClick');
					const {
						gantt
					} = this;
					if (gantt.selectedRecord) {
						gantt.editTask(gantt.selectedRecord);
					} else {
						_bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__["Toast"].show(this.L('First select the task you want to edit'));
					}
				}
				onExpandAllClick() {
					this.gantt.expandAll();
				}
				onCollapseAllClick() {
					this.gantt.collapseAll();
				}
				onZoomInClick() {
					this.gantt.zoomIn();
				}
				onZoomOutClick() {
					this.gantt.zoomOut();
				}
				onZoomToFitClick() {
					this.gantt.zoomToFit({
						leftMargin: 50,
						rightMargin: 50
					});
				}
				onShiftPreviousClick() {
					this.gantt.shiftPrevious();
				}
				onShiftNextClick() {
					this.gantt.shiftNext();
				}
				onStartDateChange({
					value,
					oldValue
				}) {
					if (!oldValue) {
						// ignore initial set
						return;
					}
					this.gantt.startDate = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_1__["DateHelper"].add(value, -1, 'week');
					this.gantt.project.setStartDate(value);
				}
				onKpiTypeChange({
					value
				}){
					console.log(value);
				}
				onFilterChange({
					value
				}) {
					if (value === '') {
						this.gantt.taskStore.clearFilters();
					} else {
						value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
						this.gantt.taskStore.filter({
							filters: task => task.name && task.name.match(new RegExp(value, 'i')),
							replace: true
						});
					}
				}
				onFeaturesClick({
					source: item
				}) {
					const {
						gantt,
						histogram
					} = this;
//					console.log('item.feature=',item.feature);
					if (item.feature) {
						const feature = gantt.features[item.feature];
						feature.disabled = !feature.disabled;
						if (item.feature === 'baselines') {
							this.widgetMap['baseLineButtons'].hidden = feature.disabled;
						}
						if (item.feature === 'mspExport') {
							this.widgetMap['mspExportButton'].hidden = feature.disabled;
						}
						if (item.feature === 'excelExporter') {
							this.widgetMap['excelExportButton'].hidden = feature.disabled;
						}
					} else if (item.subGrid) {
						if (item.subGrid === 'normal') {
							const subGrid = gantt.subGrids[item.subGrid];
							subGrid.collapsed = !subGrid.collapsed;
						}
						if (item.subGrid === 'partner') {
							// eslint-disable-next-line no-debugger
							if (!histogram.collapsed) {
								histogram._prevMinHeight = histogram.minHeight;
								histogram.minHeight = 'unset';
							} else {
								histogram.minHeight = histogram._prevMinHeight;
							}
							histogram.collapse(!histogram.collapsed);
						}
					}
				}
				onFeaturesShow({
					source: menu
				}) {
					const {
						gantt,
						histogram
					} = this;
					menu.items.map(item => {
						const {
							feature
						} = item;
						if (feature) {
							// a feature might be not presented in the gantt
							// (the code is shared between "advanced" and "php" demos which use a bit different set of features)
							if (gantt.features[feature]) {
								item.checked = !gantt.features[feature].disabled;
							}
							// hide not existing features
							else {
								item.hide();
							}
						} else if (item.subGrid) {
							if (item.subGrid === 'normal') {
								item.checked = gantt.subGrids[item.subGrid].collapsed;
							}
							if (item.subGrid === 'partner') {
								item.checked = !histogram.collapsed;
							}
						}
					});
				}
				onSettingsShow({
					source: menu
				}) {
					const {
						gantt
					} = this,
						{
							rowHeight,
							barMargin,
							duration
						} = menu.widgetMap;
					rowHeight.value = gantt.rowHeight;
					barMargin.value = gantt.barMargin;
					barMargin.max = gantt.rowHeight / 2 - 5;
					duration.value = gantt.transitionDuration;
				}
				onRowHeightChange({
					value,
					source
				}) {
					this.gantt.rowHeight = value;
					source.owner.widgetMap.barMargin.max = value / 2 - 5;
				}
				onBarMarginChange({
					value
				}) {
					this.gantt.barMargin = value;
				}
				onAnimationDurationChange({
					value
				}) {
					this.gantt.transitionDuration = value;
					this.styleNode.innerHTML = `.b-animating .b-gantt-task-wrap { transition-duration: ${value / 1000}s !important; }`;
				}
				onCriticalPathsClick({
					source
				}) {
					this.gantt.features.criticalPaths.disabled = !source.pressed;
				}
				setBaseline(index) {
					this.gantt.taskStore.setBaseline(index);
				}
				toggleBaselineVisible(index, visible) {
					this.gantt.element.classList[visible ? 'remove' : 'add'](`b-hide-baseline-${index}`);
				}
				onFieldCloneChange({
					source,
					value,
					userAction
				}) {
					if (source.ref === 'projectPicker') {
						source._toolbarOverflowOriginal.userAction = userAction;
					}
					source._toolbarOverflowOriginal.value = value;
				}
				onMyTaskChange(param) {
					const value = param.value || false, project = this.gantt.project;
					const current_user = project.current_user.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
					if(value == true){
						this.gantt.taskStore.filter({	
							filters: task => task.userResource != undefined && task.userResource != null && task.userResource.includes(current_user),
							replace: true
						});
					}else{
						this.gantt.taskStore.clearFilters();
					}					
				}
				onProjectChange(param) {
					const values = param.value || [],
						me = this,
						project = this.gantt.project;
					if (me.isLoading) return;
					const {
						addTaskButton,
						projectPicker
					} = this.widgetMap;
					addTaskButton.disabled = values.length === 0;
					if (param.userAction || param.source.userAction) {
						me.isLoading = true;
						param.source.userAction = false;
						param.source.disabled = true;
						project.projectIds = values.map(value => {
							return value.substring(value.indexOf('_') + 1);
						});
						projectPicker.placeholder = values.length === 0 ? this.L('Pick a project') : '';
						project.loadProjectsOnly = true;
						project.transport.load.params = {
							companyID: window.o_gantt.companyIds,
							project_ids: project.projectIds,
							only_projects: project.loadProjectsOnly
						};
						project.suspendAutoSync();
						project.taskStore.clear();
						project.assignmentStore.clear();
						project.dependencyStore.clear();
						project.suspendChangeEvent = true;
						project.load().then(() => {
							me.isLoading = false;
							project.acceptChanges();
							project.resumeAutoSync();
							project.suspendChangeEvent = false;
						});
					}
				}
				onMSPExport() {
					// give a filename based on task name
					const filename = this.gantt.project.taskStore.first && `${this.gantt.project.taskStore.first.name}.xml`;

					// call the export to download the XML file
					this.gantt.features.mspExport.export({
						filename
					});
				}
				onExcelExport() {
					// give a filename based on task name
					const filename = this.gantt.project.taskStore.first && `${this.gantt.project.taskStore.first.name}.xslx`;
					this.gantt.features.excelExporter.export({
						filename
					});
				}

				// endregion
			}

			// Register this widget type with its Factory
			GanttToolbar.initClass();

			//# sourceURL=webpack:///./src/lib/GanttToolbar.js?

			/***/
		}),

/***/ "./src/lib/HistogramToolbar.js":
/*!*************************************!*\
  !*** ./src/lib/HistogramToolbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HistogramToolbar; });\n/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt */ \"./node_modules/@bryntum/gantt/gantt.module.js\");\n\nclass HistogramToolbar extends _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__[\"Toolbar\"] {\n  // Factoryable type name\n  static get type() {\n    return 'histogramtoolbar';\n  }\n  static get $name() {\n    return 'HistogramToolbar';\n  }\n  static get configurable() {\n    return {\n      items: [{\n        type: 'checkbox',\n        ref: 'showBarText',\n        text: 'Show bar texts',\n        tooltip: 'Check to show resource allocation in the bars',\n        checked: false,\n        onAction: 'up.onShowBarTextToggle'\n      }, {\n        type: 'checkbox',\n        ref: 'showMaxEffort',\n        text: 'Show max allocation',\n        tooltip: 'Check to display max resource allocation line',\n        checked: true,\n        onAction: 'up.onShowMaxAllocationToggle'\n      }\n      // {\n      //     type     : 'checkbox',\n      //     ref      : 'showBarTip',\n      //     text     : 'Enable bar tooltip',\n      //     tooltip  : 'Check to show tooltips when moving mouse over bars',\n      //     checked  : true,\n      //     onAction : 'up.onShowBarTipToggle'\n      // }\n      ]\n    };\n  }\n\n  updateParent(parent, was) {\n    super.updateParent(parent, was);\n    this.histogram = parent;\n  }\n  onShowBarTextToggle({\n    source\n  }) {\n    this.histogram.showBarText = source.checked;\n  }\n  onShowMaxAllocationToggle({\n    source\n  }) {\n    this.histogram.showMaxEffort = source.checked;\n  }\n\n  // onShowBarTipToggle({ source }) {\n  //     this.histogram.showBarTip = source.checked;\n  // }\n}\n\n// Register this widget type with its Factory\nHistogramToolbar.initClass();\n\n//# sourceURL=webpack:///./src/lib/HistogramToolbar.js?");

			/***/
		}),

/***/ "./src/lib/Locales.js":
/*!****************************!*\
  !*** ./src/lib/Locales.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Ar */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Ar.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Ar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Cs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Cs */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Cs.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Cs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Cs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Da__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Da */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Da.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Da__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Da__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_De__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.De */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.De.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_De__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_De__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Es */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Es.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Es__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Et__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Et */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Et.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Et__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Et__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_FrFr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.FrFr */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.FrFr.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_FrFr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_FrFr__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_It__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.It */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.It.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_It__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_It__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Nl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Nl */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Nl.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Nl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Nl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Pl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Pl */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Pl.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Pl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Pl__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Pt */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Pt.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Pt__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ja__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Ja */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Ja.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ja__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Ja__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Sl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Sl */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Sl.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Sl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Sl__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Ro */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Ro.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ro__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Ro__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ru__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Ru */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Ru.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Ru__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Ru__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_SvSE__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.SvSE */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.SvSE.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_SvSE__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_SvSE__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Th__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Th */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Th.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Th__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Th__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Tr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Tr */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Tr.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Tr__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Tr__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Vi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.Vi */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.Vi.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_Vi__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_Vi__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_ZhCn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bryntum/gantt/locales/gantt.locale.ZhCn */ \"./node_modules/@bryntum/gantt/locales/gantt.locale.ZhCn.js\");\n/* harmony import */ var _bryntum_gantt_locales_gantt_locale_ZhCn__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_bryntum_gantt_locales_gantt_locale_ZhCn__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _locales_locale_nl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../locales/locale_nl */ \"./src/locales/locale_nl.js\");\n/* harmony import */ var _locales_locale_fr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../locales/locale_fr */ \"./src/locales/locale_fr.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst localeMap = {\n  'ar_001': 'Ar',\n  'cs_CZ': 'Cs',\n  'da_DK': 'Da',\n  'el_GR': 'El',\n  'de_DE': 'De',\n  'de_CH': 'De',\n  'et_EE': 'Et',\n  'es_AR': 'Es',\n  'es_BO': 'Es',\n  'es_CL': 'Es',\n  'es_CO': 'Es',\n  'es_CR': 'Es',\n  'es_DO': 'Es',\n  'es_EC': 'Es',\n  'es_GT': 'Es',\n  'es_MX': 'Es',\n  'es_PA': 'Es',\n  'es_PE': 'Es',\n  'es_PY': 'Es',\n  'es_UY': 'Es',\n  'es_VE': 'Es',\n  'es_ES': 'Es',\n  'fr_BE': 'FrFr',\n  'fr_CA': 'FrFr',\n  'fr_CH': 'FrFr',\n  'fr_FR': 'FrFr',\n  'it_IT': 'It',\n  'ja_JP': 'Ja',\n  'nl_NL': 'Nl',\n  'nl_BE': 'Nl',\n  'pl_PL': 'Pl',\n  'pt_AO': 'Pt',\n  'pt_BR': 'Pt',\n  'pt_PT': 'Pt',\n  'ro_RO': 'Ro',\n  'ru_RU': 'Ru',\n  'sl_SI': 'Sl',\n  'sv_SE': 'SvSE',\n  'th_TH': 'Th',\n  'tr_TR': 'Tr',\n  'vi_VN': 'Vi',\n  'zh_HK': 'ZhCn',\n  'zh_CN': 'ZhCn',\n  'zh_TW': 'ZhCn'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (localeMap);\n\n//# sourceURL=webpack:///./src/lib/Locales.js?");

			/***/
		}),

/***/ "./src/lib/ProjectModel.js":
/*!*********************************!*\
  !*** ./src/lib/ProjectModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";

			__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return Project; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bryntum/gantt */ "./node_modules/@bryntum/gantt/gantt.module.js");
/* harmony import */ var _Calendars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calendars */ "./src/lib/Calendars.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task */ "./src/lib/Task.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






			class Project extends _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"] {
				construct(...args) {
					super.construct(...args);
					this.companyID = window.o_gantt.companyIds;
					this.projectIds = window.o_gantt.projectID === 0 ? [] : [window.o_gantt.projectID];
					this.loadProjectsOnly = false;
					this.assignmentStore.on('load', this.cleanUpAssignments);
				}

				/**
				 * Removes assignments with no resource present.
				 * @param args
				 */
				cleanUpAssignments(args) {
					const resourceStore = this.resourceStore;
					const toRemove = [];
					this.forEach(assignment => {
						if (!resourceStore.getById(assignment.resourceId)) {
							toRemove.push(assignment);
						}
					});
					if (toRemove.length > 0) {
						this.remove(toRemove, true);
						this.project.clearChanges();
					}
				}
				jsonRpc(url, data) {
					return new Promise((resolve, reject) => {
						// get session id from web call in cookie response
						if (data.length > 0 || data.project_ids) {
							// url += '?session_id=6ffdce337bd4fcafb96e9278217c49d38511a960';
							axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, {
								jsonrpc: '2.0',
								method: 'call',
								params: {
									data: JSON.stringify(data)
								},
								id: parseInt(Math.random() * 10 ** 12)
							}).then(response => {
								if (response.status === 200 && response.data.result) {
									if (response.data.result.success) {
										resolve(response.data.result);
									} else {
										reject(response.data.result);
									}
								} else {
									if (response.data.error) {
										reject(response.data.error);
									} else {
										reject("Something went wrong!");
									}
								}
							}).catch(reject);
						} else {
							resolve();
						}
					});
				}
				static get defaultConfig() {
					return {
						// Set your default instance config properties here
						taskModelClass: _Task__WEBPACK_IMPORTED_MODULE_4__["default"],
						autoSync: true,
						transport: {
							load: {
								url: '/bryntum_gantt/load'
							},
							sync: {
								create: '/bryntum_gantt/send/create',
								update: '/bryntum_gantt/send/update',
								remove: '/bryntum_gantt/send/remove'
							}
						},
						listeners: {
							change: ({
								records,
								action,
								store,
								source,
								isExpand
							}) => {
								var _store$project;
								const suspendChangeEvent = (_store$project = store.project) === null || _store$project === void 0 ? void 0 : _store$project.suspendChangeEvent;
								if (action === 'add' && !suspendChangeEvent) {
									if (store.isTaskStore && !isExpand) {
										records.forEach(record => {
											const project = source.projects.getById(record.parent.project_id);
											if (project) {
												record.set('project_id', record.parent.project_id, true);
												record.set('manuallyScheduled', project.manuallyScheduled, true);
											}
										});
									}
									if (store.isDependencyStore) {
										if (action === 'add' || action === 'update') {
											records.forEach(record => {
												if (record.fromEvent && record.toEvent) {
													record.set('active', record.fromEvent.project_id === record.toEvent.project_id, true);
												}
											});
										}
									}
								}
							}
						},
						// The State TrackingManager which the UndoRedo widget in the toolbar uses
						stm: {
							autoRecord: true
						},
						resetUndoRedoQueuesAfterLoad: true
					};
				}
				sendRequest(request) {
					const me = this,
						type = request.type,
						success = request.success,
						failure = request.failure;
					const data = request.data,
						response = {
							success: true,
							type: data.type,
							requestId: data.requestId
						},
						responseRaw = {
							text: async () => {
								return response;
							}
						};
					let fetchOptions = {};
					const rpcFail = err => {
						response.success = false;
						response.message = err.message;
						_bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["Toast"].show((type === 'load' ? "Load error" : "Save error: ") + err.message);
						if (type !== 'load') {
							me.clearChanges();
						}
						return {
							error: err.message,
							cancelled: true
						};
					};
					let ajaxPromise;
					if (type === 'load') {
						fetchOptions = me.transport.load.params;
						ajaxPromise = new Promise((resolve, reject) => {
							this.jsonRpc(me.transport.load.url, fetchOptions).then(result => {
								Object.assign(response, result);
								resolve(response);
							}).catch(reject);
						});
					} else {
						const updated = data.updated,
							removed = data.removed,
							created = data.added;
						fetchOptions = {
							updated,
							removed,
							created
						};
						ajaxPromise = new Promise((resolve, reject) => {
							this.jsonRpc(me.transport.sync.create, created).then(result => {
								response.created = result;
								this.jsonRpc(me.transport.sync.update, updated).then(result => {
									response.updated = result;
									this.jsonRpc(me.transport.sync.remove, removed).then(result => {
										response.removed = result;
										me.acceptChanges();
										resolve(response);
									}).catch(reject);
								}).catch(reject);
							}).catch(reject);
						});
					}
					ajaxPromise.catch(rpcFail).then(response => {
						if (response.success) {
							success === null || success === void 0 ? void 0 : success.call(request.thisObj || me, responseRaw, fetchOptions, request);
						} else {
							failure === null || failure === void 0 ? void 0 : failure.call(request.thisObj || me, responseRaw, fetchOptions, request);
						}
					});
					ajaxPromise.abort = () => { };
					return ajaxPromise;
				}
				cancelRequest(promise, reject) { }
				encode(request) {
					if (request.type === 'load') {
						return request;
					} else {
						const tasks = request.tasks,
							assignments = request.assignments,
							dependencies = request.dependencies,
							updated = [],
							removed = [],
							added = [],
							getNewUpdate = id => {
								const newUpdate = updated.filter(item => item.id === id)[0] || {
									model: {
										id: id
									},
									newData: {}
								};
								updated.push(newUpdate);
								return newUpdate;
							},
							isRemoved = id => {
								return removed.indexOf(id) > -1;
							},
							me = this;
						if (tasks) {
							if (tasks.added) {
								[].push.apply(added, tasks.added.map(item => {
									if (item.schedulingMode === 'false') {
										delete item.schedulingMode;
									}
									item.id = item.$PhantomId;
									return item;
								}));
							}
							if (tasks.updated) {
								[].push.apply(updated, tasks.updated.map(item => {
									const task = this.taskStore.getById(item.id);
									if (item.schedulingMode === 'false' || item.schedulingMode === false) {
										delete item.schedulingMode;
									}
									if (!item.startDate && !item.endDate) {
										delete item.startDate;
										delete item.endDate;
									}
									if (item.baselineUpdates) {
										delete item.baselineUpdates;
										delete item.startDate;
										delete item.endDate;
										if (task && task.duration !== 0 && task.startDate && task.endDate) {
											item.baselines = task.baselines.map(baseline => {
												const format = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].defaultFormat;
												return {
													startDate: _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].format(baseline.startDate, format),
													endDate: _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].format(baseline.endDate, format),
													name: baseline.name
												};
											});
										}
										if (item.baselines && !item.baselines.every(baseline => {
											return baseline.startDate && baseline.endDate;
										})) {
											delete item.baselines;
										}
									} else {
										delete item.baselines;
									}
									const segments = item.segments || task.segments;
									if (segments) {
										const writeSegments = segments.map(segment => {
											const format = _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].defaultFormat;
											return {
												startDate: _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].format(segment.startDate, format),
												endDate: _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].format(segment.endDate, format),
												name: segment.name
											};
										});
										item.segments = writeSegments;
									} else {
										if (item.segments === null) {
											item.segments = [];
										}
									}
									return {
										model: {
											id: item.id
										},
										newData: item
									};
								}));
							}
							if (tasks.removed) {
								[].push.apply(removed, tasks.removed.map(item => {
									return [item.id];
								}));
							}
						}
						const updateDependency = dep => {
							if (dep && !isRemoved(dep.to && dep.toTask)) {
								const deps = dep.toTask.incomingDeps,
									task = getNewUpdate(dep.to);
								task.newData.taskLinks = [];
								if (deps) {
									deps.forEach(dep => {
										task.newData.taskLinks.push({
											from: dep.from,
											lag: dep.lag,
											lagUnit: dep.lagUnit,
											to: dep.to,
											type: dep.type,
											active: dep.active
										});
									});
								}
							}
						};
						if (dependencies) {
							if (dependencies.added) {
								dependencies.added.forEach(dep => {
									dep.toTask = this.taskStore.getById(dep.to);
									updateDependency(dep);
									delete dep.toTask;
								});
							}
							if (dependencies.removed) {
								dependencies.removed.forEach(depId => {
									const dep = this.dependencyStore.removed.idMap[depId.id];
									updateDependency(dep);
								});
							}
							if (dependencies.updated) {
								dependencies.updated.forEach(depId => {
									const dep = this.dependencyStore.getById(depId.id);
									updateDependency(dep);
								});
							}
							this.dependencyStore.commit();
						}
						const updateAssignments = assignment => {
							if (assignment && !isRemoved(assignment.eventId)) {
								const taskModel = this.taskStore.getById(assignment.eventId);
								if (taskModel) {
									const assignments = taskModel.assignments || [],
										task = getNewUpdate(assignment.eventId);
									task.newData.assignedList = null;
									task.newData.assignedResources = assignments.map(assignment => {
										return {
											task_id: taskModel.id,
											resource_id: assignment.resourceId,
											units: assignment.units
										};
									});
									task.newData.assignedResources = task.newData.assignedResources.length === 0 ? [] : task.newData.assignedResources;
								}
							}
						};
						if (assignments) {
							if (assignments.added) {
								assignments.added.forEach(assignment => {
									updateAssignments(assignment);
								});
							}
							if (assignments.removed) {
								assignments.removed.forEach(as => {
									const assignment = this.assignmentStore.removed.idMap[as.id];
									updateAssignments(assignment);
								});
							}
							if (assignments.updated) {
								assignments.updated.forEach(as => {
									const assignment = this.assignmentStore.getById(as.id);
									updateAssignments(assignment);
								});
							}
							this.assignmentStore.commit();
						}
						return {
							added,
							removed,
							updated,
							type: request.type,
							requestId: request.requestId
						};
					}
				}
				decode(response) {
					if (response.type === 'sync') {
						delete response.updated;
						delete response.removed;
						if (response.created) {
							response.tasks = {
								rows: []
							};
							response.created.ids.forEach(created => {
								response.tasks.rows.push({
									$PhantomId: created[0],
									id: created[1]
								});
							});
						}
						delete response.created;
						return response;
					} else {
						//const decoded = super.decode(response);

						const decoded = response;
						if (!decoded) {
							return;
						}
						if (this.loadProjectsOnly) {
							delete decoded.projects;
							delete decoded.resources;
							delete decoded.calendars;
						} else {
							decoded.projects.rows.forEach(project => {
								project.taskTypes = new _bryntum_gantt__WEBPACK_IMPORTED_MODULE_2__["Store"]({
									data: project.taskTypes
								});
							});
							const calendars = decoded.calendars;
							const calendar = new _Calendars__WEBPACK_IMPORTED_MODULE_3__["default"](calendars.toProcess);
							delete calendars.toProcess;
							[].push.apply(calendars.rows, calendar.getCalendars());
							const resources = decoded.resources && decoded.resources.rows || [];
							resources.forEach(resource => {
								if (resource.avatar) {
									resource.imageUrl = "data:image/png;base64," + atob(resource.avatar);
									delete resource.avatar;
								}
								resource.calendar = calendar[resource.id];
							});
						}
						const projects = decoded.tasks && decoded.tasks.rows && decoded.tasks.rows || [];
						projects.forEach(project => {
							this.readProject(project);
						});
						return decoded;
					}
				}
				readProject(project) {
					const taskMap = {};
					taskMap[project.id] = project;
					project.isReadOnly = true;
					const projectId = project.id;
					if (project.children) {
						project.children.forEach(task => {
							if (task.parentId === "project-task_0") {
								task.parentId = projectId;
							}
							if (task.schedulingMode === false) {
								delete task.schedulingMode;
							}
							if (task.segments === null) {
								delete task.segments;
							}
							taskMap[task.id] = task;
							if (task.duration === -1) {
								delete task.duration;
							}
							if (task.baselines && task.baselines.length === 0) {
								task.baselines = [1, 2, 3].map(version => {
									return {
										name: 'Version ' + version,
										startDate: task.startDate,
										endDate: task.endDate
									};
								});
							}
						});
					}
					project.children = [];
					for (let id in taskMap) {
						let task = taskMap[id];
						if (!task.startDate) {
							delete task.duration;
						}
						if (task.startDate && task.endDate) {
							delete task.duration;
						}
						const parentTask = taskMap[task.parentId];
						if (parentTask) {
							if (!parentTask.children) {
								parentTask.children = [];
							}
							parentTask.children.push(task);
							parentTask.children = parentTask.children.sort((item1, item2) => {
								if (item1.parentIndex < item2.parentIndex) return -1;
								if (item1.parentIndex > item2.parentIndex) return 1;
								return 0;
							});
						}
					}
					return project;
				}
			}

			//# sourceURL=webpack:///./src/lib/ProjectModel.js?

			/***/
		}),
	

/***/ "./src/lib/Task.js":
/*!*************************!*\
  !*** ./src/lib/Task.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";


			__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return Task; });
/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt */ "./node_modules/@bryntum/gantt/gantt.module.js");
			/**
			 *- Custom task model
			 *
			 * Taken from the vanilla example
			 */


			// here you can extend our default Task class with your additional fields, methods and logic
			class Task extends _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__["TaskModel"] {
				static get fields() {
					return [{
						name: 'wbsValue',
						type: 'wbs',
						persist: true
					}, {
						name: 'startDate',
						type: 'date',
						alwaysWrite: true
					}, {
						name: 'endDate',
						type: 'date',
						alwaysWrite: true
					},
					// { name : 'manuallyScheduled', type: 'boolean', defaultValue: true },
					{
						name: 'date_deadline',
						type: 'date'
					}, {
						name: 'isReadOnly',
						type: 'boolean',
						defaultValue: false
					}, {
						name: 'assignedResources',
					}, {
						name: 'userResource',
					}, {
					    name: 'isNearlyDateLine',
					}, {
					    name: 'isOverDateLine',
					}, {
						name: 'note',
						convert: v => {
							return v === false ? '' : v;
						}
					}, {
						name: 'effort',
						defaultValue: 0,
						convert: v => {
							return v > 0 ? v : 0;
						}
					}, {
						name: 'baselineUpdates',
						defaultValue: 0,
						type: 'number'
					}, {
						name: 'project_id'
					}, {
						name: 'stageId'
					}, {
						name: 'isProject'
					}, {
						name: 'projectClosed'
					}, {
						name: 'kpiType'
					}, {
						name: 'kpiNote'
					}, {
						name: 'resultNote'
					}, {
						name: 'field_1'
					}, {
						name: 'field_2'
					}, {
						name: 'field_3'
					}, {
						name: 'field_4'
					}, {
						name: 'field_5'
					}, {
						name: 'number_field_1',
						type: 'number'
					}, {
						name: 'number_field_2',
						type: 'number'
					}, {
						name: 'number_field_3',
						type: 'number'
					}, {
						name: 'number_field_4',
						type: 'number'
					}, {
						name: 'number_field_5',
						type: 'number'
					}, {
						name: 'date_field_1',
						type: 'date'
					}, {
						name: 'date_field_2',
						type: 'date'
					}, {
						name: 'date_field_3',
						type: 'date'
					}, {
						name: 'date_field_4',
						type: 'date'
					}, {
						name: 'date_field_5',
						type: 'date'
					}, {
						name: 'bool_field_1',
						type: 'boolean'
					}, {
						name: 'bool_field_2',
						type: 'boolean'
					}, {
						name: 'bool_field_3',
						type: 'boolean'
					}, {
						name: 'bool_field_4',
						type: 'boolean'
					}, {
						name: 'bool_field_5',
						type: 'boolean'
					}];
				}
				loadEvent(record) {
//				    console.log('testing2=',record);
//				    record.name.disabled = disable;
//				    this.widgetMap['mspExportButton'].hidden = false;
//				    predecessorsTab:false,
				}
				isEditable(fieldName) {
//				console.log('fieldName=',fieldName);
//				console.log('this.manuallyScheduled=',this.isProject);
                    switch (fieldName) {
						case "projectClosed":
						case "kpiType":
						case "kpiNote":
						case "resultNote":
                            if(this.isProject)
							    return true;
							else
							    return false;
                    }
					return super.isEditable(fieldName);
				}
				setBaseline(version) {
					if (!this.parentId) return;
					super.setBaseline(version);
					const store = this.baselines;
					if (store.count) {
						this.baselineUpdates++;
						store.commit();
					}
				}
				get isLate() {
					return this.date_deadline && Date.now() > this.date_deadline;
				}
				get isTask() {
					return true;
				}
			}

			// eof

			//# sourceURL=webpack:///./src/lib/Task.js?


			/***/
		}),

/***/ "./src/locales/locale_fr.js":
/*!**********************************!*\
  !*** ./src/locales/locale_fr.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt */ \"./node_modules/@bryntum/gantt/gantt.module.js\");\n\nconst locale = {\n  localeName: 'FrFr',\n  localeDesc: 'Français (France)',\n  localeCode: 'fr-FR',\n  Baselines: {\n    baseline: 'Point de comparaison',\n    Complete: 'Terminé',\n    'Delayed start by': 'Début différe de',\n    Duration: 'Durée',\n    End: 'Fin',\n    'Overrun by': 'Dépassé par',\n    Start: 'Début'\n  },\n  Button: {\n    Create: 'Créer',\n    'Critical paths': 'Chemins critiques',\n    Edit: 'Éditer',\n    'Export to PDF': 'Exporter en PDF',\n    Features: 'Fonctionnalités',\n    Settings: 'Paramètres'\n  },\n  DateColumn: {\n    Deadline: 'Date limite'\n  },\n  Field: {\n    'Find tasks by name': 'Chercher les tâches par nom',\n    'Project start': 'Début du projet'\n  },\n  GanttToolbar: {\n    'First select the task you want to edit': \"Sélectionnez d'abord la tâche que vous souaitez éditer\",\n    'New task': 'Nouvelle tâche',\n    'Pick a project': 'Choisissez un projet'\n  },\n  Indicators: {\n    Indicators: 'Indicateurs',\n    lateDates: 'Début/Fin retardé',\n    constraintDate: 'Contraintes'\n  },\n  MenuItem: {\n    'Draw dependencies': 'Tracer les dépendances',\n    'Enable cell editing': \"Autoriser la modification des cellules\",\n    'Hide schedule': 'Masquer le calendrier',\n    'Highlight non-working time': 'Afficher les périodes non-travaillées',\n    'Project lines': 'Bornages du projet',\n    'Show baselines': 'Afficher les comparaisons',\n    'Show progress line': \"Afficher l'avancement\",\n    'Show rollups': 'Afficher les cumuls',\n    'Task labels': 'Nom des tâches'\n  },\n  Slider: {\n    'Animation duration ': \"Durée d'animation\",\n    'Bar margin': 'Largeur de la barre',\n    'Row height': 'Hauteur de ligne'\n  },\n  StartDateColumn: {\n    'Start date': 'Date de début'\n  },\n  StatusColumn: {\n    Status: 'Status'\n  },\n  TaskTooltip: {\n    'Scheduling Mode': 'Mode de planification',\n    Calendar: 'Calendrier',\n    Critical: 'Critique'\n  },\n  Tooltip: {\n    'Adjust settings': 'Régler les paramètres',\n    'Collapse all': 'Tout réduire',\n    'Create new task': 'Créer une nouvelle tâche',\n    'Edit selected task': 'Éditer la tâche sélectionnée',\n    'Expand all': 'Tout afficher',\n    'Highlight critical paths': 'Afficher le chemin critique',\n    'Next time span': 'Laps de temps suivant',\n    'Previous time span': 'Laps de temps précédent',\n    'Toggle features': 'Activer/Désactiver les fonctionnalités',\n    'Zoom in': 'Zoomer',\n    'Zoom out': 'Dézoomer',\n    'Zoom to fit': 'Ajuster à la page'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__[\"LocaleHelper\"].publishLocale(locale));\n\n//# sourceURL=webpack:///./src/locales/locale_fr.js?");

			/***/
		}),

/***/ "./src/locales/locale_nl.js":
/*!**********************************!*\
  !*** ./src/locales/locale_nl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bryntum/gantt */ \"./node_modules/@bryntum/gantt/gantt.module.js\");\n\nconst locale = {\n  localeName: 'Nl',\n  localeDesc: 'Nederlands',\n  localeCode: 'nl',\n  Baselines: {\n    baseline: 'basis lijn',\n    Complete: 'Gedaan',\n    'Delayed start by': 'Uitgestelde start met',\n    Duration: 'Duur',\n    End: 'Einde',\n    'Overrun by': 'Overschreden met',\n    Start: 'Begin'\n  },\n  Button: {\n    Create: 'Creëer',\n    'Critical paths': 'Kritieke paden',\n    Edit: 'Bewerk',\n    'Export to PDF': 'Exporteren naar PDF',\n    Features: 'Kenmerken',\n    Settings: 'Instellingen'\n  },\n  DateColumn: {\n    Deadline: 'Deadline'\n  },\n  Field: {\n    'Find tasks by name': 'Zoek taken op naam',\n    'Project start': 'Start van het project'\n  },\n  GanttToolbar: {\n    'First select the task you want to edit': 'Selecteer eerst de taak die u wilt bewerken',\n    'New task': 'Nieuwe taak',\n    'Pick a project': 'Selecteer een project'\n  },\n  Indicators: {\n    Indicators: 'Indicatoren',\n    constraintDate: 'Beperking'\n  },\n  MenuItem: {\n    'Draw dependencies': 'Teken afhankelijkheden',\n    'Enable cell editing': 'Schakel celbewerking in',\n    'Hide schedule': 'Verberg schema',\n    'Highlight non-working time': 'Markeer niet-werkende tijd',\n    'Project lines': 'Projectlijnen',\n    'Show baselines': 'Toon basislijnen',\n    'Show progress line': 'Toon voortgangslijn',\n    'Show rollups': 'Rollups weergeven',\n    'Task labels': 'Taaklabels'\n  },\n  Slider: {\n    'Animation duration ': 'Animatieduur',\n    'Bar margin': 'Staafmarge',\n    'Row height': 'Rijhoogte'\n  },\n  StartDateColumn: {\n    'Start date': 'Startdatum'\n  },\n  StatusColumn: {\n    Status: 'Toestand'\n  },\n  TaskTooltip: {\n    'Scheduling Mode': 'Planningsmodus',\n    Calendar: 'Kalender',\n    Critical: 'Kritisch'\n  },\n  Tooltip: {\n    'Adjust settings': 'Pas instellingen aan',\n    'Collapse all': 'Alles inklappen',\n    'Create new task': 'Maak een nieuwe taak',\n    'Edit selected task': 'Bewerk de geselecteerde taak',\n    'Expand all': 'Alles uitvouwen',\n    'Highlight critical paths': 'Markeer kritieke paden',\n    'Next time span': 'Volgende tijdspanne',\n    'Previous time span': 'Vorige tijdspanne',\n    'Toggle features': 'Schakel tussen functies',\n    'Zoom in': 'In zoomen',\n    'Zoom out': 'Uitzoomen',\n    'Zoom to fit': 'Zoom in om te passen'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_bryntum_gantt__WEBPACK_IMPORTED_MODULE_0__[\"LocaleHelper\"].publishLocale(locale));\n\n//# sourceURL=webpack:///./src/locales/locale_nl.js?");

			/***/
		}),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

			"use strict";
			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/*!\n *\n * Bryntum Gantt for Odoo 5.5.0\n * Copyright(c) 2022 Bryntum AB\n * https://bryntum.com/contact\n * https://bryntum.com/license\n *\n */\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nlet module = null;\nwindow.o_gantt = {\n  _isRun: false,\n  moduleID: '#bryntum-gantt',\n  config: {},\n  projectID: 0,\n  mountTimes: 0,\n  mount: function () {\n    if ($(this.moduleID).length) {\n      this.destroy();\n      module = this.moduleInit();\n      module.$mount(this.moduleID);\n    } else {\n      this.mountTimes++;\n      if (this.mountTimes < 10) {\n        setTimeout(this.mount.bind(this), 100);\n      } else {\n        this.destroy();\n      }\n    }\n  },\n  get run() {\n    return this._isRun;\n  },\n  set run(val) {\n    this._isRun = val;\n    if (val) {\n      this.mount();\n    } else {\n      this.destroy();\n    }\n  },\n  destroy: function () {\n    if (module) {\n      module.$el.parentElement.removeChild(module.$el);\n      module.$destroy();\n      module = null;\n    }\n  },\n  moduleInit() {\n    return new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    });\n  },\n  update() {\n    console.debug('empty_method');\n  }\n};\n\n//# sourceURL=webpack:///./src/main.js?");

			/***/
		}),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

			eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

			/***/
		})

	/******/
});