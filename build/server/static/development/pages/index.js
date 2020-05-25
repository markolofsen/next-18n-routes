module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next/package.json */ \"./node_modules/next-i18next/package.json\");\nvar next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! next-i18next/package.json */ \"./node_modules/next-i18next/package.json\", 1);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Footer = ({\n  t\n}) => __jsx(\"footer\", null, __jsx(\"p\", null, t('description')), __jsx(\"p\", null, \"next-i18next v\", next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__[\"version\"]));\n\nFooter.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__[\"withTranslation\"])('footer')(Footer));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsInQiLCJ2ZXJzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDYixzQkFDRSxpQkFDR0EsQ0FBQyxDQUFDLGFBQUQsQ0FESixDQURGLEVBSUUsbUNBRUdDLGlFQUZILENBSkYsQ0FERjs7QUFZQUYsTUFBTSxDQUFDRyxTQUFQLEdBQW1CO0FBQ2pCRixHQUFDLEVBQUVHLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFERCxDQUFuQjtBQUllQyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQlAsTUFBMUIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0L3BhY2thZ2UuanNvbidcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcblxuY29uc3QgRm9vdGVyID0gKHsgdCB9KSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPHA+XG4gICAgICB7dCgnZGVzY3JpcHRpb24nKX1cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBuZXh0LWkxOG5leHQgdlxuICAgICAge3ZlcnNpb259XG4gICAgPC9wPlxuICA8L2Zvb3Rlcj5cbilcblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Header = ({\n  title\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", null, \"next-i18next\"), __jsx(\"link\", {\n  href: \"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css\",\n  rel: \"stylesheet\"\n}), __jsx(\"link\", {\n  href: \"/static/app.css\",\n  rel: \"stylesheet\"\n}), __jsx(\"link\", {\n  href: \"https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css\",\n  rel: \"stylesheet\"\n}), __jsx(\"link\", {\n  href: \"https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600\",\n  rel: \"stylesheet\"\n}), __jsx(\"link\", {\n  \"data-react-helmet\": \"true\",\n  rel: \"icon\",\n  href: \"https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media\"\n})), __jsx(\"h2\", null, \"next-i18next\", __jsx(\"hr\", null)), __jsx(\"h1\", null, title), __jsx(\"a\", {\n  className: \"github\",\n  href: \"//github.com/isaachinman/next-i18next\"\n}, __jsx(\"i\", {\n  className: \"typcn typcn-social-github-circular\"\n})));\n\nHeader.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsInRpdGxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ2IsTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSxNQUFDLGdEQUFELFFBQ0Usb0NBREYsRUFHRTtBQUFNLE1BQUksRUFBQyxzRUFBWDtBQUFrRixLQUFHLEVBQUM7QUFBdEYsRUFIRixFQUlFO0FBQU0sTUFBSSxFQUFDLGlCQUFYO0FBQTZCLEtBQUcsRUFBQztBQUFqQyxFQUpGLEVBTUU7QUFBTSxNQUFJLEVBQUMsd0VBQVg7QUFBb0YsS0FBRyxFQUFDO0FBQXhGLEVBTkYsRUFPRTtBQUFNLE1BQUksRUFBQyxzRUFBWDtBQUFrRixLQUFHLEVBQUM7QUFBdEYsRUFQRixFQVFFO0FBQU0sdUJBQWtCLE1BQXhCO0FBQStCLEtBQUcsRUFBQyxNQUFuQztBQUEwQyxNQUFJLEVBQUM7QUFBL0MsRUFSRixDQURGLEVBV0Usa0NBRUUsaUJBRkYsQ0FYRixFQWVFLGtCQUNHQSxLQURILENBZkYsRUFrQkU7QUFDRSxXQUFTLEVBQUMsUUFEWjtBQUVFLE1BQUksRUFBQztBQUZQLEdBSUU7QUFBRyxXQUFTLEVBQUM7QUFBYixFQUpGLENBbEJGLENBREY7O0FBNEJBRCxNQUFNLENBQUNFLFNBQVAsR0FBbUI7QUFDakJELE9BQUssRUFBRUUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEUCxDQUFuQjtBQUllTCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPm5leHQtaTE4bmV4dDwvdGl0bGU+XG5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tZXllci1yZXNldC8yLjAvcmVzZXQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdHlwaWNvbnMvMi4wLjkvdHlwaWNvbnMubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMHxPc3dhbGQ6NjAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8bGluayBkYXRhLXJlYWN0LWhlbG1ldD1cInRydWVcIiByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vYmxvYnNjZG4uZ2l0Ym9vay5jb20vdjAvYi9naXRib29rLTI4NDI3LmFwcHNwb3QuY29tL28vc3BhY2VzJTJGLUw5aVM2V20yaHluUzVIOUdqN2olMkZhdmF0YXIucG5nP2dlbmVyYXRpb249MTUyMzQ2MjI1NDU0ODc4MCZhbXA7YWx0PW1lZGlhXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGgyPlxuICAgICAgbmV4dC1pMThuZXh0XG4gICAgICA8aHIgLz5cbiAgICA8L2gyPlxuICAgIDxoMT5cbiAgICAgIHt0aXRsZX1cbiAgICA8L2gxPlxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCJnaXRodWJcIlxuICAgICAgaHJlZj1cIi8vZ2l0aHViLmNvbS9pc2FhY2hpbm1hbi9uZXh0LWkxOG5leHRcIlxuICAgID5cbiAgICAgIDxpIGNsYXNzTmFtZT1cInR5cGNuIHR5cGNuLXNvY2lhbC1naXRodWItY2lyY3VsYXJcIiAvPlxuICAgIDwvYT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst localeSubpathVariations = {\n  none: {},\n  foreign: {\n    de: 'de'\n  },\n  all: {\n    en: 'en',\n    de: 'de'\n  }\n};\nmodule.exports = new NextI18Next({\n  defaultLanguage: 'en',\n  fallbackLng: 'en',\n  otherLanguages: ['de'],\n  localePath: true ? 'public/static/locales' : undefined,\n  localeSubpaths: localeSubpathVariations[localeSubpaths],\n  browserLanguageDetection: false,\n  serverLanguageDetection: true,\n  detection: {\n    lookupCookie: 'next-i18next',\n    ignoreRoutes: ['/_next/', '/static/', '/public/', '/api/'],\n    order: ['path', 'querystring', 'cookie'],\n    caches: ['cookie'],\n    cookieMinutes: 160,\n    lookupQuerystring: 'lang',\n    lookupFromPathIndex: 0\n  },\n  debug: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsImxvY2FsZVN1YnBhdGhWYXJpYXRpb25zIiwibm9uZSIsImZvcmVpZ24iLCJkZSIsImFsbCIsImVuIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRMYW5ndWFnZSIsImZhbGxiYWNrTG5nIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwiYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uIiwic2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJkZXRlY3Rpb24iLCJsb29rdXBDb29raWUiLCJpZ25vcmVSb3V0ZXMiLCJvcmRlciIsImNhY2hlcyIsImNvb2tpZU1pbnV0ZXMiLCJsb29rdXBRdWVyeXN0cmluZyIsImxvb2t1cEZyb21QYXRoSW5kZXgiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU07QUFDTEM7QUFESyxJQUVGRixtQkFBTyxDQUFDLGdDQUFELENBQVAsQ0FBdUJDLE9BQXZCLEdBQWlDRSxtQkFGckM7O0FBSUEsTUFBTUMsdUJBQXVCLEdBQUc7QUFDL0JDLE1BQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBTyxFQUFFO0FBQ1JDLE1BQUUsRUFBRTtBQURJLEdBRnNCO0FBSy9CQyxLQUFHLEVBQUU7QUFDSkMsTUFBRSxFQUFFLElBREE7QUFFSkYsTUFBRSxFQUFFO0FBRkE7QUFMMEIsQ0FBaEM7QUFXQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlaLFdBQUosQ0FBZ0I7QUFDaENhLGlCQUFlLEVBQUUsSUFEZTtBQUVoQ0MsYUFBVyxFQUFFLElBRm1CO0FBR2hDQyxnQkFBYyxFQUFFLENBQUMsSUFBRCxDQUhnQjtBQUloQ0MsWUFBVSxFQUFFLE9BQWdDLHVCQUFoQyxHQUEwRCxTQUp0QztBQUtoQ2IsZ0JBQWMsRUFBRUUsdUJBQXVCLENBQUNGLGNBQUQsQ0FMUDtBQU0vQmMsMEJBQXdCLEVBQUUsS0FOSztBQU8vQkMseUJBQXVCLEVBQUUsSUFQTTtBQVFoQ0MsV0FBUyxFQUFFO0FBQ1ZDLGdCQUFZLEVBQUUsY0FESjtBQUVWQyxnQkFBWSxFQUFFLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsT0FBcEMsQ0FGSjtBQUdWQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsYUFBVCxFQUF3QixRQUF4QixDQUhHO0FBSVJDLFVBQU0sRUFBRSxDQUFDLFFBQUQsQ0FKQTtBQUtSQyxpQkFBYSxFQUFFLEdBTFA7QUFNUkMscUJBQWlCLEVBQUUsTUFOWDtBQU9SQyx1QkFBbUIsRUFBRTtBQVBiLEdBUnFCO0FBaUJoQ0MsT0FBSyxFQUFFO0FBakJ5QixDQUFoQixDQUFqQiIsImZpbGUiOiIuL2kxOG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcbmNvbnN0IHtcblx0bG9jYWxlU3VicGF0aHNcbn0gPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXG5cbmNvbnN0IGxvY2FsZVN1YnBhdGhWYXJpYXRpb25zID0ge1xuXHRub25lOiB7fSxcblx0Zm9yZWlnbjoge1xuXHRcdGRlOiAnZGUnLFxuXHR9LFxuXHRhbGw6IHtcblx0XHRlbjogJ2VuJyxcblx0XHRkZTogJ2RlJyxcblx0fSxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuXHRkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXG5cdGZhbGxiYWNrTG5nOiAnZW4nLFxuXHRvdGhlckxhbmd1YWdlczogWydkZSddLFxuXHRsb2NhbGVQYXRoOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdwdWJsaWMvc3RhdGljL2xvY2FsZXMnIDogJ3N0YXRpYy9sb2NhbGVzJyxcblx0bG9jYWxlU3VicGF0aHM6IGxvY2FsZVN1YnBhdGhWYXJpYXRpb25zW2xvY2FsZVN1YnBhdGhzXSxcbiAgYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgc2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb246IHRydWUsXG5cdGRldGVjdGlvbjoge1xuXHRcdGxvb2t1cENvb2tpZTogJ25leHQtaTE4bmV4dCcsXG5cdFx0aWdub3JlUm91dGVzOiBbJy9fbmV4dC8nLCAnL3N0YXRpYy8nLCAnL3B1YmxpYy8nLCAnL2FwaS8nXSxcblx0XHRvcmRlcjogWydwYXRoJywgJ3F1ZXJ5c3RyaW5nJywgJ2Nvb2tpZSddLFxuICAgIGNhY2hlczogWydjb29raWUnXSxcbiAgICBjb29raWVNaW51dGVzOiAxNjAsXG4gICAgbG9va3VwUXVlcnlzdHJpbmc6ICdsYW5nJyxcbiAgICBsb29rdXBGcm9tUGF0aEluZGV4OiAwXG5cdH0sXG5cdGRlYnVnOiBmYWxzZVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./node_modules/next-i18next/package.json":
/*!************************************************!*\
  !*** ./node_modules/next-i18next/package.json ***!
  \************************************************/
/*! exports provided: name, version, repository, author, funding, main, types, license, engines, description, keywords, scripts, husky, bundlesize, devDependencies, dependencies, peerDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"next-i18next\\\",\\\"version\\\":\\\"4.4.2\\\",\\\"repository\\\":\\\"git@github.com:isaachinman/next-i18next.git\\\",\\\"author\\\":\\\"Isaac Hinman <isaac@isaachinman.com>\\\",\\\"funding\\\":{\\\"type\\\":\\\"github\\\",\\\"url\\\":\\\"https://github.com/sponsors/isaachinman\\\"},\\\"main\\\":\\\"dist/commonjs/index.js\\\",\\\"types\\\":\\\"./types.d.ts\\\",\\\"license\\\":\\\"MIT\\\",\\\"engines\\\":{\\\"node\\\":\\\">=8\\\"},\\\"description\\\":\\\"The easiest way to translate your NextJs apps.\\\",\\\"keywords\\\":[\\\"react\\\",\\\"i18next\\\",\\\"nextjs\\\",\\\"next\\\",\\\"translation\\\",\\\"localisation\\\",\\\"localization\\\",\\\"locale\\\"],\\\"scripts\\\":{\\\"check-types\\\":\\\"tsc\\\",\\\"lint\\\":\\\"eslint types.d.ts src/**/* examples __tests__/**/*\\\",\\\"lint:fix\\\":\\\"eslint types.d.ts src/**/* examples __tests__/**/* --fix\\\",\\\"clean\\\":\\\"rm -rf examples/simple/.next && rm -rf dist && mkdir dist\\\",\\\"build:es\\\":\\\"BABEL_ENV=es babel src --extensions '.ts,.tsx' --out-dir dist/es\\\",\\\"build:cjs\\\":\\\"BABEL_ENV=cjs babel src --extensions '.ts,.tsx' --out-dir dist/commonjs\\\",\\\"build\\\":\\\"yarn clean && yarn build:cjs && yarn build:es\\\",\\\"build:examples/simple\\\":\\\"yarn --cwd examples/simple && yarn --cwd examples/simple build\\\",\\\"heroku-postbuild\\\":\\\"yarn build && yarn build:examples/simple\\\",\\\"prepublishOnly\\\":\\\"yarn build\\\",\\\"run-example\\\":\\\"yarn build && cd examples/simple && yarn && yarn dev\\\",\\\"run-example:prod\\\":\\\"yarn --cwd examples/simple start\\\",\\\"test\\\":\\\"yarn check-types && yarn build && yarn build:examples/simple && bundlesize && NODE_ENV=test jest --maxWorkers=1 --silent\\\",\\\"contributors:check\\\":\\\"all-contributors check\\\",\\\"contributors:add\\\":\\\"all-contributors add\\\",\\\"contributors:generate\\\":\\\"all-contributors generate\\\"},\\\"husky\\\":{\\\"hooks\\\":{\\\"pre-commit\\\":\\\"yarn lint && yarn test\\\"}},\\\"bundlesize\\\":[{\\\"path\\\":\\\"./examples/simple/.next/static/chunks/commons*.js\\\",\\\"maxSize\\\":\\\"106 kB\\\"},{\\\"path\\\":\\\"./examples/simple/.next/static/runtime/main*.js\\\",\\\"maxSize\\\":\\\"8 kB\\\"},{\\\"path\\\":\\\"./examples/simple/.next/static/runtime/webpack*.js\\\",\\\"maxSize\\\":\\\"750 B\\\"}],\\\"devDependencies\\\":{\\\"@babel/cli\\\":\\\"^7.5.5\\\",\\\"@babel/core\\\":\\\"^7.5.5\\\",\\\"@babel/plugin-proposal-class-properties\\\":\\\"^7.5.5\\\",\\\"@babel/plugin-transform-runtime\\\":\\\"^7.5.5\\\",\\\"@babel/preset-env\\\":\\\"^7.5.5\\\",\\\"@babel/preset-react\\\":\\\"^7.0.0\\\",\\\"@babel/preset-typescript\\\":\\\"^7.3.3\\\",\\\"@types/express\\\":\\\"^4.16.1\\\",\\\"@types/jest\\\":\\\"^24.0.16\\\",\\\"@types/jest-environment-puppeteer\\\":\\\"^4.0.0\\\",\\\"@types/react\\\":\\\"^16.8.4\\\",\\\"@types/react-dom\\\":\\\"^16.8.2\\\",\\\"@typescript-eslint/eslint-plugin\\\":\\\"^1.13.0\\\",\\\"@typescript-eslint/parser\\\":\\\"^1.13.0\\\",\\\"all-contributors-cli\\\":\\\"^6.0.0\\\",\\\"babel-core\\\":\\\"^7.0.0-bridge.0\\\",\\\"babel-jest\\\":\\\"^24.1.0\\\",\\\"babel-plugin-add-module-exports\\\":\\\"^1.0.0\\\",\\\"babel-plugin-transform-async-to-generator\\\":\\\"^6.24.1\\\",\\\"bundlesize\\\":\\\"^0.18.0\\\",\\\"enzyme\\\":\\\"^3.8.0\\\",\\\"enzyme-adapter-react-16\\\":\\\"^1.7.1\\\",\\\"eslint\\\":\\\"^6.1.0\\\",\\\"eslint-plugin-import\\\":\\\"^2.17.1\\\",\\\"eslint-plugin-jsx-a11y\\\":\\\"^6.1.2\\\",\\\"eslint-plugin-react\\\":\\\"^7.14.3\\\",\\\"husky\\\":\\\"^3.0.0\\\",\\\"jest\\\":\\\"^24.1.0\\\",\\\"jest-puppeteer\\\":\\\"^4.0.0\\\",\\\"jsdom\\\":\\\"^15.0.0\\\",\\\"jsdom-global\\\":\\\"^3.0.2\\\",\\\"next\\\":\\\"^9.0.1\\\",\\\"puppeteer\\\":\\\"^1.11.0\\\",\\\"react\\\":\\\"^16.12.0\\\",\\\"react-dom\\\":\\\"^16.12.0\\\",\\\"typescript\\\":\\\"^3.5.3\\\"},\\\"dependencies\\\":{\\\"core-js\\\":\\\"^2\\\",\\\"detect-node\\\":\\\"^2.0.4\\\",\\\"hoist-non-react-statics\\\":\\\"^3.2.0\\\",\\\"i18next\\\":\\\"^19.0.3\\\",\\\"i18next-browser-languagedetector\\\":\\\"^4.0.0\\\",\\\"i18next-fs-backend\\\":\\\"^1.0.2\\\",\\\"i18next-http-backend\\\":\\\"^1.0.8\\\",\\\"i18next-http-middleware\\\":\\\">=1.0.2\\\",\\\"path-match\\\":\\\"^1.2.4\\\",\\\"prop-types\\\":\\\"^15.6.2\\\",\\\"react-i18next\\\":\\\"^11.0.0\\\",\\\"url\\\":\\\"^0.11.0\\\"},\\\"peerDependencies\\\":{\\\"next\\\":\\\">= 7.0.0\\\",\\\"react\\\":\\\">= 16.8.0\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0LWkxOG5leHQvcGFja2FnZS5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next-i18next/package.json\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Homepage = ({\n  t\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"main\", null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  title: t('h1')\n}), __jsx(\"div\", null, __jsx(\"button\", {\n  type: \"button\",\n  onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language === 'en' ? 'de' : 'en')\n}, t('change-locale')), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n  href: \"/second-page\"\n}, __jsx(\"button\", {\n  type: \"button\"\n}, t('to-second-page'))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n\nHomepage.getInitialProps = async () => ({\n  namespacesRequired: ['common', 'footer']\n});\n\nHomepage.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('common')(Homepage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwidCIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNmLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0Usb0JBQ0UsTUFBQywwREFBRDtBQUFRLE9BQUssRUFBRUEsQ0FBQyxDQUFDLElBQUQ7QUFBaEIsRUFERixFQUVFLG1CQUNFO0FBQ0UsTUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFPLEVBQUUsTUFBTUMsMENBQUksQ0FBQ0MsY0FBTCxDQUFvQkQsMENBQUksQ0FBQ0UsUUFBTCxLQUFrQixJQUFsQixHQUF5QixJQUF6QixHQUFnQyxJQUFwRDtBQUZqQixHQUlHSCxDQUFDLENBQUMsZUFBRCxDQUpKLENBREYsRUFPRSxNQUFDLDBDQUFEO0FBQU0sTUFBSSxFQUFDO0FBQVgsR0FDRTtBQUNFLE1BQUksRUFBQztBQURQLEdBR0dBLENBQUMsQ0FBQyxnQkFBRCxDQUhKLENBREYsQ0FQRixDQUZGLENBREYsRUFtQkUsTUFBQywwREFBRCxPQW5CRixDQURGOztBQXdCQUQsUUFBUSxDQUFDSyxlQUFULEdBQTJCLGFBQWE7QUFDdENDLG9CQUFrQixFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVg7QUFEa0IsQ0FBYixDQUEzQjs7QUFJQU4sUUFBUSxDQUFDTyxTQUFULEdBQXFCO0FBQ25CTixHQUFDLEVBQUVPLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEQyxDQUFyQjtBQUllQyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQlgsUUFBMUIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBpMThuLCBMaW5rLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuY29uc3QgSG9tZXBhZ2UgPSAoeyB0IH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxtYWluPlxuICAgICAgPEhlYWRlciB0aXRsZT17dCgnaDEnKX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlID09PSAnZW4nID8gJ2RlJyA6ICdlbicpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2NoYW5nZS1sb2NhbGUnKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9zZWNvbmQtcGFnZSc+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCd0by1zZWNvbmQtcGFnZScpfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICAgPEZvb3RlciAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5Ib21lcGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ2Zvb3RlciddLFxufSlcblxuSG9tZXBhZ2UucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKEhvbWVwYWdlKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mark/Documents/htdocs/simple/simple/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });