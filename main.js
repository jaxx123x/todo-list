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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.svg */ \"./src/assets/background.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nhtml {\n  display: grid;\n  font-family: \"Courier New\", Courier, monospace;\n  grid-template-rows: 1fr 7fr 1fr;\n  grid-template-columns: 1fr 8fr;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  background-color: #e0e5db;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nheader {\n  display: grid;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  font-size: clamp(20px, 50%, 29px);\n  letter-spacing: 2.4px;\n  word-spacing: 3.4px;\n  color: #FF5252;\n  font-weight: 400;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: small-caps;\n  text-transform: none;\n  place-items: center;\n  border-bottom: 1px solid #696565;\n  border-right: 1px solid #c6c2c2;\n  height: 9vh;\n}\n\n.description {\n  display: grid;\n  place-items: center;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 19px;\n  letter-spacing: -2px;\n  word-spacing: -0.2px;\n  color: #FF5252;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  border-bottom: 1px solid #696565;\n  height: 9vh;\n}\n\n.side-bar {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 8fr;\n  justify-items: center;\n  border-right: 1px solid #c6c2c2;\n  height: 91vh;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n  gap: 15px;\n}\n\n.form,\n.books {\n  border: 1px solid #696565;\n  border-radius: 8px;\n  padding: 16px;\n  width: 50%;\n  font-family: sans-serif;\n}\n\n\n.task-title,\n#textarea {\n  background: none;\n  font-size: 13px;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  width: 85%;\n  border: none;\n  font-weight: 700;\n  resize: none;\n  overflow: hidden;\n\n}\n\n#textarea {\n  font-weight: 200;\n  height: 70px;\n}\n\n.informations {\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr;\n  grid-template-rows: 1fr 2fr;\n  font-size: 13px;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  color: #696565;\n  font-weight: 400;\n  justify-items: flex-start;\n  align-items: center;\n}\n\n\n\n#priority {\n  height: 10px;\n  width: 10px;\n}\n\n#inbox,\n#add-category,\n.user-option {\n  display: block;\n  width: 90%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin: 4px auto;\n  background-color: transparent;\n  color: #3d3d3d;\n  font-size: 14px;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  border: 1px solid gray;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s, color 0.2s;\n  align-self: center;\n}\n\n#inbox:hover,\n#add-category:hover,\n.user-option:hover {\n  background-color: rgba(109, 104, 104, 0.15);\n  color: #000;\n}\n\n\n\nbutton {\n\n  border-radius: 10px;\n  border: 0;\n  background-color: rgb(255, 56, 86);\n  letter-spacing: 1.5px;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  box-shadow: rgb(201, 46, 70) 0px 1px 0px 0px;\n  color: hsl(0, 0%, 100%);\n  cursor: pointer;\n  height: 20px;\n  width: 70px;\n}\n\nbutton:hover {\n  box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;\n}\n\nbutton:active {\n  background-color: rgb(255, 56, 86);\n  /*50, 168, 80*/\n  box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;\n  transform: translateY(5px);\n  transition: 200ms;\n}\n\n.books {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 10px;\n}\n\n.book-details {\n  grid-column: span 2;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding-top: 10px;\n  font-size: 13px;\n}\n\n.hidden {\n  display: none;\n}\n\n.btns {\n  display: flex;\n  justify-self: end;\n  gap: 5px;\n}\n\n#toast {\n  visibility: hidden;\n  min-width: 200px;\n  background-color: #4CAF50;\n  /* verde pentru succes */\n  color: white;\n  text-align: center;\n  border-radius: 10px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 17px;\n  opacity: 0;\n  transition: opacity 0.5s ease, visibility 0s linear 0.5s;\n}\n\n#toast.show {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.5s ease;\n}\n\n\n.popup-overlay {\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  animation: fadeIn 0.3s ease-in-out;\n}\n\n\n.popup-form {\n  background-color: #fff;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  animation: popIn 0.25s ease-in-out;\n  gap: 1rem;\n}\n\n\n.popup-form textarea {\n  resize: none;\n  height: 100px;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.popup-form textarea:focus {\n  border-color: #696565;\n\n\n}\n\n#cateogry-submit:hover {\n  background-color: #696565;\n}\n\n\n@keyframes popIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n#close-popup {\n  align-self: flex-end;\n  \n}\n\n.catgs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  align-self: self-start;\n}\n\n#categories {\n  font-size: 17px;\n  color: #696565;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/background.svg":
/*!***********************************!*\
  !*** ./src/assets/background.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f9d48176916cb432d56.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/background.svg?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM),\n/* harmony export */   createCategoryDom: () => (/* binding */ createCategoryDom),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   domLocalStorage: () => (/* binding */ domLocalStorage),\n/* harmony export */   expandTask: () => (/* binding */ expandTask),\n/* harmony export */   submitFunction: () => (/* binding */ submitFunction),\n/* harmony export */   toggleAllLists: () => (/* binding */ toggleAllLists),\n/* harmony export */   toggleCategories: () => (/* binding */ toggleCategories)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n\n\n\n\n\nconst DOM = (() => {\n    //form & sidebar selectors\n    const inbox = document.querySelector(\"#inbox\");\n    const categories = document.querySelector(\"#categories\");\n    const submit = document.querySelector(\"#submit-button\");\n    const taskTitle = document.querySelector(\".task-title\");\n    const taskDescription = document.querySelector(\"#textarea\");\n    const taskPriority = document.querySelector(\"#priority\");\n    const taskDate = document.querySelector(\"#date\");\n    const form = document.querySelector(\".form\");\n    const catgs = document.querySelector(\".catgs\");\n\n    //category selectors\n    const popupOverlay = document.querySelector(\".popup-overlay\");\n    const addCategory = document.querySelector(\"#add-category\");\n    const closePopUp = document.querySelector(\"#close-popup\");\n    const catSubmit = document.querySelector(\"#category-submit\");\n    const categoryName = document.querySelector(\"#popup-text\");\n    const selectCategory = document.querySelector(\"#category\");\n\n\n    //general html selectors\n    const content = document.querySelector(\".content\");\n    const toast = document.querySelector(\"#toast\");\n\n    return { inbox, categories, submit, taskTitle, taskDescription, taskPriority, taskDate, content, form, toast, addCategory, closePopUp, catSubmit, categoryName, popupOverlay, catgs, selectCategory };\n\n})();\n\n\nfunction submitFunction() { //handler function for domToArrayTask() and domToContentTask()\n    DOM.submit.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n\n        if (DOM.taskTitle.value.trim() === \"\") {\n            alert('Please fill at least the title field.');\n            return;\n        }\n        const task = domToArrayTask();\n        domToContentTask(task);\n        toast();\n\n        DOM.form.reset();\n\n        saveToLocalStorage();\n    })\n}\n\n\n//this function take form datas, creates a new object with it and updates indexListArray;\nfunction domToArrayTask() {\n\n    const newTask = new _script_js__WEBPACK_IMPORTED_MODULE_0__.indexList(DOM.taskTitle.value, DOM.taskDescription.value, DOM.taskDate.value, DOM.taskPriority.checked, DOM.selectCategory.value);\n    newTask.pushIn();\n    console.log(_script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray);\n    return newTask;\n\n}\n\n\n\n//adding form data to the dom\nfunction domToContentTask(task) {\n\n\n    const book = document.createElement(\"div\");\n    book.classList.add(\"books\");\n    book.dataset.id = task.id;\n    DOM.content.appendChild(book);\n\n\n    const paragraph = document.createElement(\"p\");\n    paragraph.classList.add(\"task-title\");\n    book.appendChild(paragraph);\n    paragraph.textContent = task.title;\n\n    const btns = document.createElement(\"div\");\n    btns.classList.add(\"btns\");\n    book.appendChild(btns);\n\n\n    const button = document.createElement(\"button\");\n    button.textContent = \"Expand\";\n    button.classList.add(\"expand-button\");\n    btns.appendChild(button);\n\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.textContent = \"Delete\"\n    deleteButton.classList.add(\"delete-button\");\n    btns.appendChild(deleteButton);\n\n    const details = document.createElement(\"div\");\n    details.classList.add(\"book-details\", \"hidden\");\n    book.appendChild(details);\n\n    const description = document.createElement(\"p\");\n    const date = document.createElement(\"p\");\n    const priority = document.createElement(\"p\");\n    details.appendChild(description);\n    details.appendChild(date);\n    details.appendChild(priority);\n    description.classList.add(\"task-description\");\n    date.classList.add(\"task-date\");\n    priority.classList.add(\"task-priority\");\n    description.textContent = task.description;\n    date.textContent = task.date !== \"\" ? `📅 Until: ${task.date}` : \"📅 No time out set\";\n    priority.textContent = `${task.priority === true ? \"🔥 Important\" : \"🟢 No priority\"}`;\n\n\n\n}\n\nfunction toast() {\n    DOM.toast.classList.add(\"show\");\n\n    setTimeout(() => {\n        DOM.toast.classList.remove(\"show\");\n    }, 1000);\n}\n\n\nfunction expandTask() {\n    DOM.content.addEventListener(\"click\", (event) => {\n\n        if (event.target.classList.contains(\"expand-button\")) {\n\n            const parent = event.target.closest(\".books\");\n            const details = parent.querySelector(\".book-details\");\n            details.classList.toggle(\"hidden\");\n            event.target.textContent = details.classList.contains(\"hidden\") ? \"Expand\" : \"Hide\";\n\n        }\n    })\n}\n\nfunction deleteTask() {\n    DOM.content.addEventListener(\"click\", (event) => {\n\n        if (event.target.classList.contains(\"delete-button\")) {\n            const parent = event.target.closest(\".books\");\n            const id = parent.dataset.id;\n            parent.remove();\n\n            const index = _script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray.findIndex(task => task.id == id);\n            _script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray.splice(index, 1);\n            console.log(_script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray);\n\n            saveToLocalStorage();\n        }\n    })\n}\n\n\n\n\nfunction createCategoryDom() {\n    DOM.addCategory.addEventListener(\"click\", (event) => {\n        DOM.popupOverlay.style.visibility = \"visible\";\n    })\n\n    DOM.closePopUp.addEventListener(\"click\", (e) => {\n        DOM.popupOverlay.style.visibility = \"hidden\";\n    })\n\n    DOM.catSubmit.addEventListener(\"click\", (e) => {\n        if (DOM.categoryName.value.trim() === \"\" || DOM.categoryName.value.trim().length > 10) {\n            alert('Cattegory name cannot be empty and cannot be longer than 10 letters');\n            return;\n        }\n        else {\n            event.preventDefault();\n            const category = new _script_js__WEBPACK_IMPORTED_MODULE_0__.indexCatgs(DOM.categoryName.value);\n            category.pushIn();\n\n            saveToLocalStorage();\n            const id = DOM.categoryName.value.trim().replace(/\\s+/g, '-');\n            const newCat = document.createElement('p');\n            newCat.id = id;\n            newCat.classList.add(\"user-option\");\n            newCat.textContent = DOM.categoryName.value;\n            DOM.catgs.appendChild(newCat);\n            DOM.categoryName.value = \"\";\n            DOM.popupOverlay.style.visibility = \"hidden\";\n\n\n\n            const option = document.createElement(\"option\");\n            option.value = id;\n            option.textContent = id;\n            DOM.selectCategory.appendChild(option);\n\n            \n            \n        }\n\n\n\n    })\n}\n\nfunction toggleCategories() {\n    DOM.catgs.addEventListener(\"click\", (event) => {\n        if (event.target.classList.contains(\"user-option\")) {\n            const clickedCategory = event.target.id;\n\n            document.querySelectorAll(\".books\").forEach(el => el.remove());\n\n            _script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray.forEach(element => {\n                if (element.category === clickedCategory) {\n                    domToContentTask(element);\n                }\n            });\n        }\n    })\n}\n\nfunction toggleAllLists() {\n    DOM.inbox.addEventListener(\"click\", () => {\n        document.querySelectorAll(\".books\").forEach(el => el.remove());\n        _script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray.forEach(element => {\n            domToContentTask(element);\n        });\n    })\n}\n\nfunction saveToLocalStorage() {\n    localStorage.setItem(\"tasks\", JSON.stringify(_script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray));\n    localStorage.setItem(\"catgs\", JSON.stringify(_script_js__WEBPACK_IMPORTED_MODULE_0__.indexListCatgs));\n}\n\nfunction domLocalStorage() {\n    const saved = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n    saved.forEach(task => {\n        const restored = new _script_js__WEBPACK_IMPORTED_MODULE_0__.indexList(\n            task.title,\n            task.description,\n            task.date,\n            task.priority,\n            task.category\n        );\n        restored.id = task.id;\n\n        _script_js__WEBPACK_IMPORTED_MODULE_0__.indexListArray.push(restored);\n        domToContentTask(restored);\n    });\n\n    const savedCatgs = JSON.parse(localStorage.getItem(\"catgs\")) || [];\n    savedCatgs.forEach(cat => {\n        const restored = new _script_js__WEBPACK_IMPORTED_MODULE_0__.indexCatgs(cat.name);\n\n        const id = cat.name.trim().replace(/\\s+/g, '-');\n        _script_js__WEBPACK_IMPORTED_MODULE_0__.indexListCatgs.push(restored);\n\n        const newCat = document.createElement('p');\n        newCat.id = id;\n        newCat.classList.add(\"user-option\");\n        newCat.textContent = id;\n\n        const option = document.createElement(\"option\");\n        option.value = id;\n        option.textContent = id;\n        DOM.selectCategory.appendChild(option);\n\n        DOM.catgs.appendChild(newCat);\n\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n\n\n\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.submitFunction)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.expandTask)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createCategoryDom)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.toggleCategories)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.toggleAllLists)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domLocalStorage)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   indexCatgs: () => (/* binding */ indexCatgs),\n/* harmony export */   indexList: () => (/* binding */ indexList),\n/* harmony export */   indexListArray: () => (/* binding */ indexListArray),\n/* harmony export */   indexListCatgs: () => (/* binding */ indexListCatgs)\n/* harmony export */ });\nconst indexListArray = [];\nconst indexListCatgs = [];\n\nclass indexList {\n    static currentId = 0;\n\n    constructor(title, description, date, priority, category) {\n        this.title = title;\n        this.id = indexList.currentId++;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n        this.category = category;\n    }\n\n    pushIn() {\n        indexListArray.push(this);\n    }\n\n};\n\nclass indexCatgs {\n    constructor(name) {\n        this.name = name;\n    }\n\n    pushIn() {\n        indexListCatgs.push(this);\n    }\n};\n\n//# sourceURL=webpack://todo-list/./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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