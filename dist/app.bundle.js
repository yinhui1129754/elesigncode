/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/all.js":
/*!************************!*\
  !*** ./example/all.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../src/scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_core_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../src/core/main */ \"./src/core/main.js\");\n/* harmony import */ var _src_untils_untils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../src/untils/untils */ \"./src/untils/untils.js\");\n\n\n\nvar m = new _src_core_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  ele: document.getElementById(\"testEle\")\n});\nm.init();\nwindow.test = _src_untils_untils__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.testMain = m;\n\n//# sourceURL=webpack:///./example/all.js?");

/***/ }),

/***/ "./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/class/base.js":
/*!***************************!*\
  !*** ./src/class/base.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 全局base类\r\n * @param {对象结构名称} name \r\n */\nfunction Base(name) {\n  this.struct = name;\n}\n\nBase.prototype = {\n  constructor: Base,\n  //虚函数 init\n  init: function init() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\n\n//# sourceURL=webpack:///./src/class/base.js?");

/***/ }),

/***/ "./src/class/data.js":
/*!***************************!*\
  !*** ./src/class/data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _untils_untils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../untils/untils */ \"./src/untils/untils.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ \"./src/class/line.js\");\n\n\n/**\r\n * 创建一个data类型的构造函数\r\n */\n\nvar obj = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"createObject\"])(\"data\", function (main) {\n  this.buffer = []; // 数据buffer C端用二进制我们这里用json\n\n  this.main = main; // 中心对象\n});\nObject(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(obj.prototype, {\n  init: function init() {},\n  getSize: function getSize() {\n    return this.buffer.length;\n  },\n  pushData: function pushData(d) {\n    this.buffer.push(d);\n  },\n  popData: function popData() {\n    return this.buffer.pop();\n  },\n  clear: function clear() {\n    this.buffer.length = 0;\n  },\n  toJson: function toJson() {\n    var arr = [];\n\n    for (var i = 0; i < this.buffer.length; i++) {\n      arr.push(this.buffer[i].toJson());\n    }\n\n    return arr;\n  },\n  jsonTo: function jsonTo(json) {\n    this.clear();\n\n    for (var i = 0; i < json.length; i++) {\n      var buf = new _line__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      buf.jsonTo(json[i]);\n      this.buffer.push(buf);\n    }\n\n    return this.buffer;\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);\n\n//# sourceURL=webpack:///./src/class/data.js?");

/***/ }),

/***/ "./src/class/draw.js":
/*!***************************!*\
  !*** ./src/class/draw.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _untils_untils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../untils/untils */ \"./src/untils/untils.js\");\n\n/**\r\n * 创建一个绘制类型的构造函数\r\n * @param {cvs节点} cvs \r\n * @param {中心对象} main \r\n */\n\nvar obj = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"createObject\"])(\"draw\", function (cvs, main) {\n  this.cvs = cvs; //cvs节点\n\n  this.c2d = cvs.getContext(\"2d\"); //canvas绘制上下文\n\n  this.main = main; //中心对象\n\n  this.memCvs = document.createElement(\"canvas\");\n  this.memCvs2d = this.memCvs.getContext(\"2d\");\n  this.scalc = 1;\n});\nObject(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(obj.prototype, {\n  init: function init() {},\n  resize: function resize(w, h) {\n    this.cvs.setAttribute(\"width\", w);\n    this.cvs.setAttribute(\"height\", h);\n    this.c2d = this.cvs.getContext(\"2d\");\n    this.memCvs.setAttribute(\"width\", w * this.scalc);\n    this.memCvs.setAttribute(\"height\", h * this.scalc);\n    this.memCvs2d = this.memCvs.getContext(\"2d\");\n    this.draw();\n  },\n  draw: function draw() {\n    if (this.main.destoryKey) {\n      return console.log(\"object is destory!!\");\n    }\n\n    var arr = this.main.data.buffer;\n    var len = arr.length;\n    var i = 0,\n        q = 0;\n    var c2d = this.memCvs2d;\n    var line = null;\n    c2d.clearRect(0, 0, this.memCvs.width, this.memCvs.height);\n    c2d.save();\n    c2d.scale(this.scalc, this.scalc);\n\n    for (i; i < len; i++) {\n      c2d.beginPath();\n      line = arr[i];\n\n      if (!line.points.length > 0) {\n        continue;\n      }\n\n      c2d.lineWidth = line.lineWidth;\n      c2d.strokeStyle = line.color;\n      c2d.lineJoin = \"round\";\n      c2d.lineCap = \"round\"; //   c2d.globalCompositeOperation = 'source-atop'\n\n      c2d.lineTo(line.points[0].x, line.points[0].y);\n\n      for (q = 1; q < line.points.length; q++) {\n        c2d.lineTo(line.points[q].x, line.points[q].y);\n      }\n\n      c2d.stroke();\n      c2d.closePath();\n    }\n\n    c2d.restore();\n    this.c2d.clearRect(0, 0, this.cvs.width, this.cvs.height);\n\n    if (this.main.option.bgColor != -1) {\n      this.c2d.fillStyle = this.main.option.bgColor;\n      this.c2d.fillRect(0, 0, this.cvs.width, this.cvs.height);\n    }\n\n    this.c2d.drawImage(this.memCvs, 0, 0, this.cvs.width, this.cvs.height);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);\n\n//# sourceURL=webpack:///./src/class/draw.js?");

/***/ }),

/***/ "./src/class/event.js":
/*!****************************!*\
  !*** ./src/class/event.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _untils_untils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../untils/untils */ \"./src/untils/untils.js\");\n\n/**\r\n * 创建一个事件类型的构造函数\r\n * @param {中心对象} main \r\n */\n\nvar obj = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"createObject\"])(\"event\", function (main) {\n  this.eventBuffer = {}; // 事件缓存\n\n  this.main = main;\n  this.touch = null;\n\n  this.mousedown = function (e) {\n    e.preventDefault();\n\n    if (Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n      this.touch = e.changedTouches[0];\n      this.main.pointStart({\n        clientX: this.touch.clientX,\n        clientY: this.touch.clientY\n      });\n    } else {\n      this.main.pointStart({\n        clientX: e.clientX,\n        clientY: e.clientY\n      });\n    }\n  }.bind(this);\n\n  this.mousemove = function (e) {\n    e.preventDefault();\n\n    if (Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n      this.touch = e.changedTouches[0];\n      this.main.pointMove({\n        clientX: this.touch.clientX,\n        clientY: this.touch.clientY\n      });\n    } else {\n      this.main.pointMove({\n        clientX: e.clientX,\n        clientY: e.clientY\n      });\n    }\n  }.bind(this);\n\n  this.mouseup = function (e) {\n    e.preventDefault();\n\n    if (Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n      this.touch = e.changedTouches[0];\n      this.main.pointEnd({\n        clientX: this.touch.clientX,\n        clientY: this.touch.clientY\n      });\n    } else {\n      this.main.pointEnd({\n        clientX: e.clientX,\n        clientY: e.clientY\n      });\n    }\n  }.bind(this);\n});\nObject(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(obj.prototype, {\n  bindEvent: function bindEvent(ele) {\n    ele.style.cssText = \"touch-action: pan-y;\";\n\n    if (Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n      ele.addEventListener(\"touchstart\", this.mousedown);\n      document.addEventListener(\"touchmove\", this.mousemove);\n      document.addEventListener(\"touchend\", this.mouseup);\n    } else {\n      ele.addEventListener(\"mousedown\", this.mousedown);\n      document.addEventListener(\"mousemove\", this.mousemove);\n      document.addEventListener(\"mouseup\", this.mouseup);\n    }\n  },\n  unbindEvent: function unbindEvent(ele) {\n    if (Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n      ele.removeEventListener(\"touchstart\", this.mousedown);\n      document.removeEventListener(\"touchmove\", this.mousemove);\n      document.removeEventListener(\"touchend\", this.mouseup);\n    } else {\n      ele.removeEventListener(\"mousedown\", this.mousedown);\n      document.removeEventListener(\"mousemove\", this.mousemove);\n      document.removeEventListener(\"mouseup\", this.mouseup);\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);\n\n//# sourceURL=webpack:///./src/class/event.js?");

/***/ }),

/***/ "./src/class/line.js":
/*!***************************!*\
  !*** ./src/class/line.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _untils_untils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../untils/untils */ \"./src/untils/untils.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./src/class/point.js\");\n\n\n/**\r\n * 创建一个线段类型的构造函数\r\n */\n\nvar obj = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"createObject\"])(\"line\", function () {\n  this.points = []; //储存点\n\n  this.color = \"#333333\"; //储存颜色\n\n  this.lineWidth = 4;\n});\nObject(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(obj.prototype, {\n  pushPoint: function pushPoint(p) {\n    this.points.push(p);\n  },\n  setLineWidth: function setLineWidth(w) {\n    this.lineWidth = w;\n  },\n  copy: function copy() {\n    var o = new obj();\n    var arr = [];\n\n    for (var i = 0; i < this.points.length; i++) {\n      arr.push(this.points[i].copy());\n    }\n\n    o.color = this.color;\n    o.setLineWidth(this.lineWidth);\n    return o;\n  },\n  setColor: function setColor(c) {\n    this.color = c;\n  },\n  toJson: function toJson() {\n    var arr = [];\n\n    for (var i = 0; i < this.points.length; i++) {\n      arr.push(this.points[i].toJson());\n    }\n\n    return {\n      points: arr,\n      color: this.color,\n      lineWidth: this.lineWidth\n    };\n  },\n  jsonTo: function jsonTo(json) {\n    this.color = json.color;\n    this.lineWidth = json.lineWidth;\n\n    for (var i = 0; i < json.points.length; i++) {\n      var buf = new _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](json.points[i].x, json.points[i].y);\n      this.points.push(buf);\n    }\n\n    return this.points;\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);\n\n//# sourceURL=webpack:///./src/class/line.js?");

/***/ }),

/***/ "./src/class/point.js":
/*!****************************!*\
  !*** ./src/class/point.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _untils_untils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../untils/untils */ \"./src/untils/untils.js\");\n\nvar obj = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"createObject\"])(\"point\", function (x, y) {\n  this.x = x;\n  this.y = y;\n});\nObject(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(obj.prototype, {\n  copy: function copy() {\n    return new obj(this.x, this.y);\n  },\n  toJson: function toJson() {\n    return {\n      x: this.x,\n      y: this.y\n    };\n  },\n  jsonTo: function jsonTo(json) {\n    this.x = json.x;\n    this.y = json.y;\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);\n\n//# sourceURL=webpack:///./src/class/point.js?");

/***/ }),

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _untils_untils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../untils/untils */ \"./src/untils/untils.js\");\n/* harmony import */ var _untils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../untils/config */ \"./src/untils/config.js\");\n/* harmony import */ var _class_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../class/draw */ \"./src/class/draw.js\");\n/* harmony import */ var _class_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../class/data */ \"./src/class/data.js\");\n/* harmony import */ var _class_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../class/event */ \"./src/class/event.js\");\n/* harmony import */ var _class_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../class/line */ \"./src/class/line.js\");\n/* harmony import */ var _class_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../class/point */ \"./src/class/point.js\");\n// 导入创建对象的方法和合并的方法\n // 导入默认配置项\n\n // 绘制构造函数\n\n // 数据构造函数\n\n\n\n\n // 创建一个入口对象中心对象\n\nvar obj = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"createObject\"])(\"main\", function (option) {\n  this.option = Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])({}, _untils_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"], option);\n  this.cvs = document.createElement(\"canvas\");\n  this.draw = new _class_draw__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.cvs, this);\n  this.data = new _class_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n  this.redoData = new _class_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n  this.event = new _class_event__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n  this.dropData = {\n    start: false,\n    startX: 0,\n    startY: 0,\n    nowLine: null\n  };\n});\nObject(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(obj.prototype, {\n  init: function init() {\n    if (this.option.ele) {\n      this.option.ele.appendChild(this.cvs);\n      this.resize();\n    }\n\n    this.draw.draw();\n    this.event.bindEvent(this.cvs);\n  },\n  moutedEle: function moutedEle(e) {\n    this.option.ele = e;\n\n    if (this.option.ele) {\n      this.option.ele.appendChild(this.cvs);\n      this.resize();\n    }\n\n    this.draw.draw();\n  },\n  resize: function resize() {\n    var w = this.option.ele.clientWidth;\n    var h = this.option.ele.clientHeight;\n    this.draw.resize(w, h);\n    this.draw.draw();\n  },\n  resizeWithNumber: function resizeWithNumber(w, h) {\n    this.draw.resize(w, h);\n    this.draw.draw();\n  },\n  destory: function destory() {\n    this.data.clear();\n    this.redoData.clear();\n    this.event.unbindEvent(this.cvs);\n\n    if (this.cvs.parentNode) {\n      this.cvs.parentNode.removeChild(this.cvs);\n    }\n\n    for (var i in this) {\n      delete this[i];\n    }\n\n    Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"proxyCall\"])(this, \"destoryKey\", null, null, 1, function () {\n      return true;\n    });\n  },\n  undo: function undo() {\n    var b = this.data.popData();\n\n    if (b) {\n      this.redoData.pushData(b);\n      this.draw.draw();\n    }\n  },\n  redo: function redo() {\n    var b = this.redoData.popData();\n\n    if (b) {\n      this.data.pushData(b);\n      this.draw.draw();\n    }\n  },\n  toJson: function toJson() {\n    return JSON.stringify({\n      data: this.data.toJson(),\n      color: this.option.color,\n      lineWidth: this.option.lineWidth,\n      bgColor: this.option.bgColor\n    });\n  },\n  jsonTo: function jsonTo(json) {\n    this.data.jsonTo(json.data);\n    this.option.color = json.color;\n    this.option.lineWidth = json.lineWidth;\n    this.option.bgColor = json.bgColor;\n    this.draw.draw();\n  },\n  pointStart: function pointStart(event) {\n    var eleX = event.clientX - Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"getOffsetLeft\"])(this.cvs);\n    var eleY = event.clientY - Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"getOffsetTop\"])(this.cvs);\n\n    if (!this.dropData.start) {\n      this.dropData.start = true;\n      this.dropData.startX = eleX;\n      this.dropData.startY = eleY;\n      this.dropData.nowLine = new _class_line__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n      this.dropData.nowLine.setLineWidth(this.option.lineWidth);\n      this.dropData.nowLine.setColor(this.option.color);\n      this.data.pushData(this.dropData.nowLine);\n      this.draw.draw();\n    }\n  },\n  pointMove: function pointMove(event) {\n    if (this.dropData.start) {\n      var eleX = event.clientX - Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"getOffsetLeft\"])(this.cvs);\n      var eleY = event.clientY - Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"getOffsetTop\"])(this.cvs);\n      this.dropData.nowLine.pushPoint(new _class_point__WEBPACK_IMPORTED_MODULE_6__[\"default\"](eleX, eleY));\n      this.draw.draw();\n    }\n  },\n  pointEnd: function pointEnd(event) {\n    var eleX = event.clientX - Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"getOffsetLeft\"])(this.cvs);\n    var eleY = event.clientY - Object(_untils_untils__WEBPACK_IMPORTED_MODULE_0__[\"getOffsetTop\"])(this.cvs);\n\n    if (this.dropData.start) {\n      this.dropData.start = false;\n      this.draw.draw();\n    }\n  },\n  toPng: function toPng() {\n    this.draw.draw();\n    return this.cvs.toDataURL(\"image/png\");\n  },\n  toJpeg: function toJpeg() {\n    var b = false;\n    var base64Str = \"\";\n\n    if (this.option.bgColor === -1) {\n      this.option.bgColor = \"white\";\n      b = true;\n    }\n\n    this.draw.draw();\n    base64Str = this.cvs.toDataURL(\"image/jpeg\");\n\n    if (b) {\n      this.option.bgColor = -1;\n      this.draw.draw();\n    }\n\n    return base64Str;\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);\n\n//# sourceURL=webpack:///./src/core/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/untils/config.js":
/*!******************************!*\
  !*** ./src/untils/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ele: null,\n  color: \"#333333\",\n  lineWidth: 4,\n  bgColor: -1\n});\n\n//# sourceURL=webpack:///./src/untils/config.js?");

/***/ }),

/***/ "./src/untils/untils.js":
/*!******************************!*\
  !*** ./src/untils/untils.js ***!
  \******************************/
/*! exports provided: proxyCall, isMobile, isString, isNumber, isBool, isValue, isFunction, isObj, isUndefined, isNull, isNil, isArray, mergeArr, merge, allStatus, createObject, getEndStyle, getOffsetTop, getOffsetLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proxyCall\", function() { return proxyCall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBool\", function() { return isBool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValue\", function() { return isValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObj\", function() { return isObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return isUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNil\", function() { return isNil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArr\", function() { return mergeArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return merge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allStatus\", function() { return allStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createObject\", function() { return createObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEndStyle\", function() { return getEndStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOffsetTop\", function() { return getOffsetTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOffsetLeft\", function() { return getOffsetLeft; });\n/* harmony import */ var _class_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../class/base */ \"./src/class/base.js\");\n\nfunction proxyCall(o, key, setAfter, geter, defaultVal, setBefore) {\n  var v = defaultVal || undefined;\n  Object.defineProperty(o, key, {\n    get: function get() {\n      geter && geter(v);\n      return v;\n    },\n    set: function set(v2) {\n      var buf = v;\n\n      if (!(setBefore && setBefore(v2))) {\n        v = v2;\n      }\n\n      ;\n      setAfter && setAfter(v, buf);\n    }\n  });\n}\nfunction isMobile() {\n  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction isString(v) {\n  return Object.prototype.toString.call(v) === \"[object String]\";\n}\nfunction isNumber(v) {\n  return Object.prototype.toString.call(v) === \"[object Number]\";\n}\nfunction isBool(v) {\n  return Object.prototype.toString.call(v) === \"[object Boolean]\";\n}\nfunction isValue(v) {\n  return isString(v) || isBool(v) || isNumber(v);\n}\nfunction isFunction(v) {\n  return Object.prototype.toString.call(v) === \"[object Function]\";\n}\nfunction isObj(v) {\n  return Object.prototype.toString.call(v) === \"[object Object]\";\n}\nfunction isUndefined(v) {\n  return typeof v === \"undefined\";\n}\nfunction isNull(v) {\n  return v === null;\n}\nfunction isNil(v) {\n  return !!!v;\n}\nfunction isArray(v) {\n  return !isUndefined(v.length);\n}\n/**\r\n * 合并数组\r\n * @param {要合并到的数组} arr \r\n * @param {被合并的数组} arr2 \r\n */\n\nfunction mergeArr(arr, arr2) {\n  var i = 0;\n\n  for (i; i < arr2.length; i++) {\n    item = arr2[i];\n\n    if (isValue(item) || isFunction(item) || item instanceof Node || isNull(item[key])) {\n      arr.push(otem);\n    } else if (isObj(item)) {\n      if (!isObj(arr[i])) {\n        arr[i] = {};\n      }\n\n      merge(arr[i], item);\n    } else if (isArray(item)) {\n      if (!isArray(arr[i])) {\n        arr[i] = [];\n      }\n\n      mergeArr(arr[i], item);\n    }\n  }\n\n  return arr;\n}\n/**\r\n * 合并对象\r\n * @param {要合并的对象} ...obj\r\n */\n\nfunction merge() {\n  var arr = [].slice.call(arguments);\n  var o = arr[0];\n  var len = arr.length,\n      item;\n  var i = 1,\n      key;\n\n  if (isObj(o)) {\n    for (i; i < len; i++) {\n      item = arr[i];\n\n      if (isObj(item)) {\n        for (key in item) {\n          if (isValue(item[key]) || isFunction(item[key]) || item[key] instanceof Node || isNull(item[key])) {\n            o[key] = item[key];\n          } else if (isObj(item[key])) {\n            if (!isObj(o[key])) {\n              o[key] = {};\n            }\n\n            merge(o[key], item[key]);\n          } else if (isArray(item[key])) {\n            if (!isArray(o[key])) {\n              o[key] = [];\n            }\n\n            mergeArr(o[key], item[key]);\n          }\n        }\n      }\n    }\n  }\n\n  return o;\n}\nvar allStatus = {};\nvar baseArr = [];\n/**\r\n * 创建对象\r\n * @param {对象名称} name\r\n * @param {构造函数} call \r\n */\n\nfunction createObject(name, call) {\n  name = \"HHSJ-\" + name;\n\n  allStatus[name] = function () {\n    call && call.apply(this, arguments);\n  };\n\n  baseArr.unshift(function () {});\n  baseArr[0].prototype = new _class_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n  allStatus[name].prototype = new baseArr[0]();\n  return allStatus[name];\n}\n/**\r\n * 获取最终样式\r\n * @param {节点} e \r\n * @param {样式属性} attr \r\n */\n\nfunction getEndStyle(e, attr) {\n  if (typeof window.getComputedStyle != \"undefined\") {\n    return window.getComputedStyle(e)[attr];\n  } else {\n    return e[\"currentStyle\"][attr];\n  }\n}\n\nfunction isPos(node) {\n  return getEndStyle(node, \"position\") === \"relative\" || getEndStyle(node, \"position\") === \"absolute\" || getEndStyle(node, \"position\") === \"fxied\";\n}\n\nfunction getOffsetTop(e) {\n  var node = e;\n  var offsetTop = node.offsetTop;\n  node = node.parentNode;\n\n  while (node && !(node instanceof HTMLDocument)) {\n    if (isPos(node)) {\n      offsetTop += node.offsetTop;\n    }\n\n    node = node.parentNode;\n  }\n\n  return offsetTop;\n}\nfunction getOffsetLeft(e) {\n  var node = e;\n  var offsetLeft = node.offsetLeft;\n  node = node.parentNode;\n\n  while (node && !(node instanceof HTMLDocument)) {\n    if (isPos(node)) {\n      offsetLeft += node.offsetLeft;\n    }\n\n    node = node.parentNode;\n  }\n\n  return offsetLeft;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  proxyCall: proxyCall,\n  mergeArr: mergeArr,\n  merge: merge,\n  isString: isString,\n  isNumber: isNumber,\n  isBool: isBool,\n  isValue: isValue,\n  isFunction: isFunction,\n  isObj: isObj,\n  isUndefined: isUndefined,\n  isNull: isNull,\n  isNil: isNil,\n  isArray: isArray,\n  createObject: createObject,\n  isMobile: isMobile,\n  allStatus: allStatus,\n  getEndStyle: getEndStyle,\n  getOffsetTop: getOffsetTop,\n  getOffsetLeft: getOffsetLeft\n});\n\n//# sourceURL=webpack:///./src/untils/untils.js?");

/***/ })

/******/ });