/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PAYMENT_METHOD_NAME\": () => (/* binding */ PAYMENT_METHOD_NAME)\n/* harmony export */ });\nvar PAYMENT_METHOD_NAME = \"flutterwave\";\n\n//# sourceURL=webpack://flutterwave/./src/constants/index.js?");

/***/ }),

/***/ "./src/flutterwave-utils.js":
/*!**********************************!*\
  !*** ./src/flutterwave-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFLUTTERWAVEServerData\": () => (/* binding */ getFLUTTERWAVEServerData)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/settings */ \"@woocommerce/settings\");\n/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * WooCommerce dependencies\n */\n\n/**\n * Flutterwave data\n */\n\nvar getFLUTTERWAVEServerData = function getFLUTTERWAVEServerData() {\n  var flutterwaveServerData = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)(\"woocommerce_flutterwave_settings\", null);\n  console.log(\"the flw meat\", flutterwaveServerData);\n\n  if (!flutterwaveServerData || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(flutterwaveServerData) !== \"object\") {\n    throw new Error(\"Flutterwave initialization data is not available\");\n  }\n\n  return flutterwaveServerData;\n};\n\n//# sourceURL=webpack://flutterwave/./src/flutterwave-utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/blocks-registry */ \"@woocommerce/blocks-registry\");\n/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./src/constants/index.js\");\n/* harmony import */ var _flutterwave_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flutterwave-utils */ \"./src/flutterwave-utils.js\");\n\n\nvar _getFLUTTERWAVEServer, _getFLUTTERWAVEServer2;\n\nvar _excluded = [\"RenderedComponent\"];\n\n\n/**\n * WordPress dependencies\n */\n\n/**\n * WooCommerce dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n// import ComponentCreditCard from \"./component-credit-card\";\n// import ComponentSavedToken from \"./component-saved-token\";\n\n\n\n\nvar Label = function Label(props) {\n  var PaymentMethodLabel = props.components.PaymentMethodLabel;\n  var labelText = (0,_flutterwave_utils__WEBPACK_IMPORTED_MODULE_5__.getFLUTTERWAVEServerData)().title ? (0,_flutterwave_utils__WEBPACK_IMPORTED_MODULE_5__.getFLUTTERWAVEServerData)().title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(\"Flutterwave for WooCommerce\", \"flutterwave\");\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PaymentMethodLabel, {\n    text: labelText\n  });\n};\n\nvar FLUTTERWAVEComponent = function FLUTTERWAVEComponent(_ref) {\n  var RenderedComponent = _ref.RenderedComponent,\n      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, _excluded);\n\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderedComponent, props);\n};\n\n(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_3__.registerPaymentMethod)({\n  name: _constants__WEBPACK_IMPORTED_MODULE_4__.PAYMENT_METHOD_NAME,\n  label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Label, null),\n  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(\"Flutterwave payment method\", \"flutterwave\"),\n  canMakePayment: function canMakePayment() {\n    return true;\n  },\n  content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FLUTTERWAVEComponent, {\n    RenderedComponent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", null, \"Flutterwave 1\")\n  }),\n  edit: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FLUTTERWAVEComponent, {\n    RenderedComponent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", null, \"Flutterwave 2\")\n  }),\n  savedTokenComponent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FLUTTERWAVEComponent, {\n    RenderedComponent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", null, \"Flutterwave 3\")\n  }),\n  supports: {\n    features: (_getFLUTTERWAVEServer = (_getFLUTTERWAVEServer2 = (0,_flutterwave_utils__WEBPACK_IMPORTED_MODULE_5__.getFLUTTERWAVEServerData)()) === null || _getFLUTTERWAVEServer2 === void 0 ? void 0 : _getFLUTTERWAVEServer2.supports) !== null && _getFLUTTERWAVEServer !== void 0 ? _getFLUTTERWAVEServer : []\n  }\n});\n\n//# sourceURL=webpack://flutterwave/./src/index.js?");

/***/ }),

/***/ "@woocommerce/blocks-registry":
/*!******************************************!*\
  !*** external ["wc","wcBlocksRegistry"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wc"]["wcBlocksRegistry"];

/***/ }),

/***/ "@woocommerce/settings":
/*!************************************!*\
  !*** external ["wc","wcSettings"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wc"]["wcSettings"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _objectWithoutProperties)\n/* harmony export */ });\n/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://flutterwave/./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _objectWithoutPropertiesLoose)\n/* harmony export */ });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://flutterwave/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack://flutterwave/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;