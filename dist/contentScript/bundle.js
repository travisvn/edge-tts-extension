/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/content-styles.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/content-styles.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --etts-bg-primary: #ffffff;
  --etts-bg-secondary: #f8f9fa;
  --etts-text-primary: #000000;
  --etts-text-secondary: #666666;
  --etts-border-color: #cccccc;
  --etts-button-bg: #007bff;
  --etts-button-text: #ffffff;
  --etts-hover-bg: #0056b3;
}

[data-theme='dark'] {
  --etts-bg-primary: #1a1a1a;
  --etts-bg-secondary: #2d2d2d;
  --etts-text-primary: #ffffff;
  --etts-text-secondary: #cccccc;
  --etts-border-color: #404040;
  --etts-button-bg: #0d6efd;
  --etts-button-text: #ffffff;
  --etts-hover-bg: #0b5ed7;
}

.flex-center {
  display: flex; /* Tailwind's flex */
  flex-direction: row;
  align-items: center; /* Tailwind's items-center */
  justify-content: center; /* Tailwind's justify-center */
  gap: 1rem;
}

.tts-icon {
  width: 1rem; /* Tailwind's w-4 (4 * 0.25rem) */
  height: 1rem; /* Tailwind's h-4 (4 * 0.25rem) */
  margin-right: 0.25rem; /* Tailwind's mr-1 */
  fill: none; /* Tailwind's fill-none */
  stroke: currentColor; /* Tailwind's stroke-currentColor */
}

.tts-input {
  width: 100%; /* Tailwind's w-full */
  padding-left: 0.75rem; /* Tailwind's px-3 */
  padding-right: 0.75rem;
  padding-top: 0.5rem; /* Tailwind's py-2 */
  padding-bottom: 0.5rem;
  border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */
  border-radius: 0.375rem; /* Tailwind's rounded */
  outline: none; /* Tailwind's focus:outline-none */
}

.tts-input.dark {
  background-color: #1f2937; /* Tailwind's dark:bg-gray-800 */
  border-color: #4b5563; /* Tailwind's dark:border-gray-600 */
  color: white; /* Tailwind's dark:text-white */
}

.transition-all {
  transition: all 0.2s ease-in-out;
}

.min-width-200 {
  min-width: 200px;
}

.space-x-3 {
  display: flex;
  gap: 0.75rem;
}

.space-y-3 {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  height: 1.25rem; /* 5 * 0.25rem */
  width: 1.25rem; /* 5 * 0.25rem */
  border: 2px solid #2563eb; /* Blue border */
  border-radius: 50%;
  border-top-color: transparent; /* Border-t-transparent */
}

.lucide {
  width: 20px;
  height: 20px;
  stroke: var(--etts-button-text);
}

.tts-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--etts-bg-primary);
  color: var(--etts-text-primary);
  border: 1px solid var(--etts-border-color);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  min-width: 200px;
  transition: all 0.2s;
}

.tts-button {
  background: var(--etts-button-bg);
  color: var(--etts-button-text);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tts-button:hover {
  background: var(--etts-hover-bg);
}

.tts-button.red {
  background: #dc3545;
}

.tts-button.red:hover {
  background: #bb2d3b;
}

.loading-spinner {
  border: 2px solid var(--etts-bg-secondary);
  border-top: 2px solid var(--etts-button-bg);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/content-styles.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,8BAA8B;EAC9B,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,8BAA8B;EAC9B,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,aAAa,EAAE,oBAAoB;EACnC,mBAAmB;EACnB,mBAAmB,EAAE,4BAA4B;EACjD,uBAAuB,EAAE,8BAA8B;EACvD,SAAS;AACX;;AAEA;EACE,WAAW,EAAE,iCAAiC;EAC9C,YAAY,EAAE,iCAAiC;EAC/C,qBAAqB,EAAE,oBAAoB;EAC3C,UAAU,EAAE,yBAAyB;EACrC,oBAAoB,EAAE,mCAAmC;AAC3D;;AAEA;EACE,WAAW,EAAE,sBAAsB;EACnC,qBAAqB,EAAE,oBAAoB;EAC3C,sBAAsB;EACtB,mBAAmB,EAAE,oBAAoB;EACzC,sBAAsB;EACtB,yBAAyB,EAAE,+BAA+B;EAC1D,uBAAuB,EAAE,uBAAuB;EAChD,aAAa,EAAE,kCAAkC;AACnD;;AAEA;EACE,yBAAyB,EAAE,gCAAgC;EAC3D,qBAAqB,EAAE,oCAAoC;EAC3D,YAAY,EAAE,+BAA+B;AAC/C;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,eAAe,EAAE,gBAAgB;EACjC,cAAc,EAAE,gBAAgB;EAChC,yBAAyB,EAAE,gBAAgB;EAC3C,kBAAkB;EAClB,6BAA6B,EAAE,yBAAyB;AAC1D;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,+BAA+B;EAC/B,0CAA0C;EAC1C,kBAAkB;EAClB,aAAa;EACb,yCAAyC;EACzC,cAAc;EACd,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;EACjC,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;EAC1C,2CAA2C;EAC3C,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\n  --etts-bg-primary: #ffffff;\n  --etts-bg-secondary: #f8f9fa;\n  --etts-text-primary: #000000;\n  --etts-text-secondary: #666666;\n  --etts-border-color: #cccccc;\n  --etts-button-bg: #007bff;\n  --etts-button-text: #ffffff;\n  --etts-hover-bg: #0056b3;\n}\n\n[data-theme='dark'] {\n  --etts-bg-primary: #1a1a1a;\n  --etts-bg-secondary: #2d2d2d;\n  --etts-text-primary: #ffffff;\n  --etts-text-secondary: #cccccc;\n  --etts-border-color: #404040;\n  --etts-button-bg: #0d6efd;\n  --etts-button-text: #ffffff;\n  --etts-hover-bg: #0b5ed7;\n}\n\n.flex-center {\n  display: flex; /* Tailwind's flex */\n  flex-direction: row;\n  align-items: center; /* Tailwind's items-center */\n  justify-content: center; /* Tailwind's justify-center */\n  gap: 1rem;\n}\n\n.tts-icon {\n  width: 1rem; /* Tailwind's w-4 (4 * 0.25rem) */\n  height: 1rem; /* Tailwind's h-4 (4 * 0.25rem) */\n  margin-right: 0.25rem; /* Tailwind's mr-1 */\n  fill: none; /* Tailwind's fill-none */\n  stroke: currentColor; /* Tailwind's stroke-currentColor */\n}\n\n.tts-input {\n  width: 100%; /* Tailwind's w-full */\n  padding-left: 0.75rem; /* Tailwind's px-3 */\n  padding-right: 0.75rem;\n  padding-top: 0.5rem; /* Tailwind's py-2 */\n  padding-bottom: 0.5rem;\n  border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */\n  border-radius: 0.375rem; /* Tailwind's rounded */\n  outline: none; /* Tailwind's focus:outline-none */\n}\n\n.tts-input.dark {\n  background-color: #1f2937; /* Tailwind's dark:bg-gray-800 */\n  border-color: #4b5563; /* Tailwind's dark:border-gray-600 */\n  color: white; /* Tailwind's dark:text-white */\n}\n\n.transition-all {\n  transition: all 0.2s ease-in-out;\n}\n\n.min-width-200 {\n  min-width: 200px;\n}\n\n.space-x-3 {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.space-y-3 {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner {\n  height: 1.25rem; /* 5 * 0.25rem */\n  width: 1.25rem; /* 5 * 0.25rem */\n  border: 2px solid #2563eb; /* Blue border */\n  border-radius: 50%;\n  border-top-color: transparent; /* Border-t-transparent */\n}\n\n.lucide {\n  width: 20px;\n  height: 20px;\n  stroke: var(--etts-button-text);\n}\n\n.tts-controls {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: var(--etts-bg-primary);\n  color: var(--etts-text-primary);\n  border: 1px solid var(--etts-border-color);\n  border-radius: 8px;\n  padding: 15px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  min-width: 200px;\n  transition: all 0.2s;\n}\n\n.tts-button {\n  background: var(--etts-button-bg);\n  color: var(--etts-button-text);\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.tts-button:hover {\n  background: var(--etts-hover-bg);\n}\n\n.tts-button.red {\n  background: #dc3545;\n}\n\n.tts-button.red:hover {\n  background: #bb2d3b;\n}\n\n.loading-spinner {\n  border: 2px solid var(--etts-bg-secondary);\n  border-top: 2px solid var(--etts-button-bg);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/content-styles.css":
/*!********************************!*\
  !*** ./src/content-styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./content-styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/content-styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/controlPanel.ts":
/*!****************************************!*\
  !*** ./src/components/controlPanel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createControlPanel: () => (/* binding */ createControlPanel),
/* harmony export */   updatePanelContent: () => (/* binding */ updatePanelContent)
/* harmony export */ });
/* harmony import */ var _lib_svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/svgs */ "./src/lib/svgs.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function createControlPanel() {
    return __awaiter(this, arguments, void 0, function* (isLoading = true) {
        const settings = yield chrome.storage.sync.get({
            darkMode: false,
        });
        const panel = document.createElement('div');
        panel.className = 'tts-controls';
        panel.id = 'tts-control-panel';
        if (settings.darkMode) {
            panel.dataset.theme = 'dark';
            // panel.className += ' dark';
        }
        updatePanelContent(panel, isLoading);
        document.body.appendChild(panel);
        return panel;
    });
}
function updatePanelContent(panel, isLoading) {
    panel.innerHTML = `
		${isLoading ? `
			<div class="flex-center loading-container">
				<span>Generating audio...</span>
				<div class="loading-spinner"></div>
			</div>
		` : `
			<div class="flex-center">
				<button id="tts-pause" class="tts-button">
					${_lib_svgs__WEBPACK_IMPORTED_MODULE_0__.circlePause}
					<span>Pause</span>
				</button>
				<button id="tts-stop" class="tts-button red">
					${_lib_svgs__WEBPACK_IMPORTED_MODULE_0__.circleStop}
					<span>Stop</span>
				</button>
			</div>
		`}
	`;
    if (!isLoading) {
        const pauseButton = panel.querySelector('#tts-pause');
        const stopButton = panel.querySelector('#tts-stop');
        if (pauseButton)
            pauseButton.addEventListener("click", () => {
                var _a;
                (_a = window.onClickTogglePause) === null || _a === void 0 ? void 0 : _a.call(window);
            });
        if (stopButton)
            stopButton.addEventListener("click", () => {
                var _a;
                (_a = window.onClickStopPlayback) === null || _a === void 0 ? void 0 : _a.call(window);
            });
    }
}


/***/ }),

/***/ "./src/lib/svgs.ts":
/*!*************************!*\
  !*** ./src/lib/svgs.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circlePause: () => (/* binding */ circlePause),
/* harmony export */   circlePlay: () => (/* binding */ circlePlay),
/* harmony export */   circleStop: () => (/* binding */ circleStop),
/* harmony export */   moon: () => (/* binding */ moon),
/* harmony export */   sun: () => (/* binding */ sun)
/* harmony export */ });
const circlePlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
`;
const circlePause = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-pause"><circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/></svg>
`;
const circleStop = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-stop"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
`;
const sun = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
`;
const moon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
`;


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/contentScript.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-styles.css */ "./src/content-styles.css");
/* harmony import */ var _components_controlPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/controlPanel */ "./src/components/controlPanel.ts");
/* harmony import */ var _lib_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/svgs */ "./src/lib/svgs.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let controlPanel = null;
window.onClickTogglePause = onClickTogglePause;
window.onClickStopPlayback = onClickStopPlayback;
function updatePlayPauseButton(isPaused) {
    const pauseButton = document.querySelector("#tts-pause");
    if (pauseButton) {
        const buttonText = isPaused ? "Pause" : "Resume";
        pauseButton.innerHTML = `
      ${isPaused ? _lib_svgs__WEBPACK_IMPORTED_MODULE_2__.circlePause : _lib_svgs__WEBPACK_IMPORTED_MODULE_2__.circlePlay}
      <span>
        ${buttonText}
      </span>
    `;
    }
}
function removeControlPanel() {
    if (controlPanel && controlPanel.parentNode) {
        controlPanel.parentNode.removeChild(controlPanel);
    }
    controlPanel = null;
}
function onClickTogglePause() {
    chrome.runtime.sendMessage({ action: "offscreen:togglePause" });
}
function onClickStopPlayback() {
    chrome.runtime.sendMessage({ action: "offscreen:stopPlayback" });
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('request_ content script:', request);
    if (request.action === "controlPanel:updatePause") {
        updatePlayPauseButton(request.isPaused);
    }
    if (request.action === "controlPanel:updateLoading") {
        (0,_components_controlPanel__WEBPACK_IMPORTED_MODULE_1__.updatePanelContent)(controlPanel, request.isLoading);
    }
    if (request.action === "controlPanel:remove") {
        removeControlPanel();
    }
    if (request.action === "controlPanel:create") {
        controlPanel = yield (0,_components_controlPanel__WEBPACK_IMPORTED_MODULE_1__.createControlPanel)(true);
    }
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBR0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQU8sT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRTtJQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xELHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLDRCQUE0QixFQUFFLENBQUM7UUFDcEQsNEVBQWtCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLHFCQUFxQixFQUFFLENBQUM7UUFDN0Msa0JBQWtCLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLHFCQUFxQixFQUFFLENBQUM7UUFDN0MsWUFBWSxHQUFHLE1BQU0sNEVBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztBQUdILENBQUMsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50LXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvY29udGVudC1zdHlsZXMuY3NzP2JlM2YiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbFBhbmVsLnRzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvbGliL3N2Z3MudHMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50U2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tZXR0cy1iZy1wcmltYXJ5OiAjZmZmZmZmO1xuICAtLWV0dHMtYmctc2Vjb25kYXJ5OiAjZjhmOWZhO1xuICAtLWV0dHMtdGV4dC1wcmltYXJ5OiAjMDAwMDAwO1xuICAtLWV0dHMtdGV4dC1zZWNvbmRhcnk6ICM2NjY2NjY7XG4gIC0tZXR0cy1ib3JkZXItY29sb3I6ICNjY2NjY2M7XG4gIC0tZXR0cy1idXR0b24tYmc6ICMwMDdiZmY7XG4gIC0tZXR0cy1idXR0b24tdGV4dDogI2ZmZmZmZjtcbiAgLS1ldHRzLWhvdmVyLWJnOiAjMDA1NmIzO1xufVxuXG5bZGF0YS10aGVtZT0nZGFyayddIHtcbiAgLS1ldHRzLWJnLXByaW1hcnk6ICMxYTFhMWE7XG4gIC0tZXR0cy1iZy1zZWNvbmRhcnk6ICMyZDJkMmQ7XG4gIC0tZXR0cy10ZXh0LXByaW1hcnk6ICNmZmZmZmY7XG4gIC0tZXR0cy10ZXh0LXNlY29uZGFyeTogI2NjY2NjYztcbiAgLS1ldHRzLWJvcmRlci1jb2xvcjogIzQwNDA0MDtcbiAgLS1ldHRzLWJ1dHRvbi1iZzogIzBkNmVmZDtcbiAgLS1ldHRzLWJ1dHRvbi10ZXh0OiAjZmZmZmZmO1xuICAtLWV0dHMtaG92ZXItYmc6ICMwYjVlZDc7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIFRhaWx3aW5kJ3MgZmxleCAqL1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBUYWlsd2luZCdzIGl0ZW1zLWNlbnRlciAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogVGFpbHdpbmQncyBqdXN0aWZ5LWNlbnRlciAqL1xuICBnYXA6IDFyZW07XG59XG5cbi50dHMtaWNvbiB7XG4gIHdpZHRoOiAxcmVtOyAvKiBUYWlsd2luZCdzIHctNCAoNCAqIDAuMjVyZW0pICovXG4gIGhlaWdodDogMXJlbTsgLyogVGFpbHdpbmQncyBoLTQgKDQgKiAwLjI1cmVtKSAqL1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07IC8qIFRhaWx3aW5kJ3MgbXItMSAqL1xuICBmaWxsOiBub25lOyAvKiBUYWlsd2luZCdzIGZpbGwtbm9uZSAqL1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogVGFpbHdpbmQncyBzdHJva2UtY3VycmVudENvbG9yICovXG59XG5cbi50dHMtaW5wdXQge1xuICB3aWR0aDogMTAwJTsgLyogVGFpbHdpbmQncyB3LWZ1bGwgKi9cbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtOyAvKiBUYWlsd2luZCdzIHB4LTMgKi9cbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTsgLyogVGFpbHdpbmQncyBweS0yICovXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7IC8qIFRhaWx3aW5kJ3MgYm9yZGVyLWdyYXktMzAwICovXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyAvKiBUYWlsd2luZCdzIHJvdW5kZWQgKi9cbiAgb3V0bGluZTogbm9uZTsgLyogVGFpbHdpbmQncyBmb2N1czpvdXRsaW5lLW5vbmUgKi9cbn1cblxuLnR0cy1pbnB1dC5kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNzsgLyogVGFpbHdpbmQncyBkYXJrOmJnLWdyYXktODAwICovXG4gIGJvcmRlci1jb2xvcjogIzRiNTU2MzsgLyogVGFpbHdpbmQncyBkYXJrOmJvcmRlci1ncmF5LTYwMCAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFRhaWx3aW5kJ3MgZGFyazp0ZXh0LXdoaXRlICovXG59XG5cbi50cmFuc2l0aW9uLWFsbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWluLXdpZHRoLTIwMCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5zcGFjZS14LTMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5zcGFjZS15LTMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5hbmltYXRlLXNwaW4ge1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uc3Bpbm5lciB7XG4gIGhlaWdodDogMS4yNXJlbTsgLyogNSAqIDAuMjVyZW0gKi9cbiAgd2lkdGg6IDEuMjVyZW07IC8qIDUgKiAwLjI1cmVtICovXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNTYzZWI7IC8qIEJsdWUgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIEJvcmRlci10LXRyYW5zcGFyZW50ICovXG59XG5cbi5sdWNpZGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBzdHJva2U6IHZhcigtLWV0dHMtYnV0dG9uLXRleHQpO1xufVxuXG4udHRzLWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ldHRzLWJnLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tZXR0cy10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ldHRzLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnR0cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ldHRzLWJ1dHRvbi1iZyk7XG4gIGNvbG9yOiB2YXIoLS1ldHRzLWJ1dHRvbi10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4udHRzLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWV0dHMtaG92ZXItYmcpO1xufVxuXG4udHRzLWJ1dHRvbi5yZWQge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xufVxuXG4udHRzLWJ1dHRvbi5yZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmIyZDNiO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXR0cy1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZXR0cy1idXR0b24tYmcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250ZW50LXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWEsRUFBRSxvQkFBb0I7RUFDbkMsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFFLDRCQUE0QjtFQUNqRCx1QkFBdUIsRUFBRSw4QkFBOEI7RUFDdkQsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVyxFQUFFLGlDQUFpQztFQUM5QyxZQUFZLEVBQUUsaUNBQWlDO0VBQy9DLHFCQUFxQixFQUFFLG9CQUFvQjtFQUMzQyxVQUFVLEVBQUUseUJBQXlCO0VBQ3JDLG9CQUFvQixFQUFFLG1DQUFtQztBQUMzRDs7QUFFQTtFQUNFLFdBQVcsRUFBRSxzQkFBc0I7RUFDbkMscUJBQXFCLEVBQUUsb0JBQW9CO0VBQzNDLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFFLCtCQUErQjtFQUMxRCx1QkFBdUIsRUFBRSx1QkFBdUI7RUFDaEQsYUFBYSxFQUFFLGtDQUFrQztBQUNuRDs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLGdDQUFnQztFQUMzRCxxQkFBcUIsRUFBRSxvQ0FBb0M7RUFDM0QsWUFBWSxFQUFFLCtCQUErQjtBQUMvQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlLEVBQUUsZ0JBQWdCO0VBQ2pDLGNBQWMsRUFBRSxnQkFBZ0I7RUFDaEMseUJBQXlCLEVBQUUsZ0JBQWdCO0VBQzNDLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBRSx5QkFBeUI7QUFDMUQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZXR0cy1iZy1wcmltYXJ5OiAjZmZmZmZmO1xcbiAgLS1ldHRzLWJnLXNlY29uZGFyeTogI2Y4ZjlmYTtcXG4gIC0tZXR0cy10ZXh0LXByaW1hcnk6ICMwMDAwMDA7XFxuICAtLWV0dHMtdGV4dC1zZWNvbmRhcnk6ICM2NjY2NjY7XFxuICAtLWV0dHMtYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1ldHRzLWJ1dHRvbi1iZzogIzAwN2JmZjtcXG4gIC0tZXR0cy1idXR0b24tdGV4dDogI2ZmZmZmZjtcXG4gIC0tZXR0cy1ob3Zlci1iZzogIzAwNTZiMztcXG59XFxuXFxuW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLWV0dHMtYmctcHJpbWFyeTogIzFhMWExYTtcXG4gIC0tZXR0cy1iZy1zZWNvbmRhcnk6ICMyZDJkMmQ7XFxuICAtLWV0dHMtdGV4dC1wcmltYXJ5OiAjZmZmZmZmO1xcbiAgLS1ldHRzLXRleHQtc2Vjb25kYXJ5OiAjY2NjY2NjO1xcbiAgLS1ldHRzLWJvcmRlci1jb2xvcjogIzQwNDA0MDtcXG4gIC0tZXR0cy1idXR0b24tYmc6ICMwZDZlZmQ7XFxuICAtLWV0dHMtYnV0dG9uLXRleHQ6ICNmZmZmZmY7XFxuICAtLWV0dHMtaG92ZXItYmc6ICMwYjVlZDc7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4OyAvKiBUYWlsd2luZCdzIGZsZXggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBUYWlsd2luZCdzIGl0ZW1zLWNlbnRlciAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIFRhaWx3aW5kJ3MganVzdGlmeS1jZW50ZXIgKi9cXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnR0cy1pY29uIHtcXG4gIHdpZHRoOiAxcmVtOyAvKiBUYWlsd2luZCdzIHctNCAoNCAqIDAuMjVyZW0pICovXFxuICBoZWlnaHQ6IDFyZW07IC8qIFRhaWx3aW5kJ3MgaC00ICg0ICogMC4yNXJlbSkgKi9cXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTsgLyogVGFpbHdpbmQncyBtci0xICovXFxuICBmaWxsOiBub25lOyAvKiBUYWlsd2luZCdzIGZpbGwtbm9uZSAqL1xcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIFRhaWx3aW5kJ3Mgc3Ryb2tlLWN1cnJlbnRDb2xvciAqL1xcbn1cXG5cXG4udHRzLWlucHV0IHtcXG4gIHdpZHRoOiAxMDAlOyAvKiBUYWlsd2luZCdzIHctZnVsbCAqL1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtOyAvKiBUYWlsd2luZCdzIHB4LTMgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtOyAvKiBUYWlsd2luZCdzIHB5LTIgKi9cXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiOyAvKiBUYWlsd2luZCdzIGJvcmRlci1ncmF5LTMwMCAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IC8qIFRhaWx3aW5kJ3Mgcm91bmRlZCAqL1xcbiAgb3V0bGluZTogbm9uZTsgLyogVGFpbHdpbmQncyBmb2N1czpvdXRsaW5lLW5vbmUgKi9cXG59XFxuXFxuLnR0cy1pbnB1dC5kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7IC8qIFRhaWx3aW5kJ3MgZGFyazpiZy1ncmF5LTgwMCAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjNGI1NTYzOyAvKiBUYWlsd2luZCdzIGRhcms6Ym9yZGVyLWdyYXktNjAwICovXFxuICBjb2xvcjogd2hpdGU7IC8qIFRhaWx3aW5kJ3MgZGFyazp0ZXh0LXdoaXRlICovXFxufVxcblxcbi50cmFuc2l0aW9uLWFsbCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1pbi13aWR0aC0yMDAge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNwYWNlLXgtMyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uc3BhY2UteS0zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uYW5pbWF0ZS1zcGluIHtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5zcGlubmVyIHtcXG4gIGhlaWdodDogMS4yNXJlbTsgLyogNSAqIDAuMjVyZW0gKi9cXG4gIHdpZHRoOiAxLjI1cmVtOyAvKiA1ICogMC4yNXJlbSAqL1xcbiAgYm9yZGVyOiAycHggc29saWQgIzI1NjNlYjsgLyogQmx1ZSBib3JkZXIgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBCb3JkZXItdC10cmFuc3BhcmVudCAqL1xcbn1cXG5cXG4ubHVjaWRlIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgc3Ryb2tlOiB2YXIoLS1ldHRzLWJ1dHRvbi10ZXh0KTtcXG59XFxuXFxuLnR0cy1jb250cm9scyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWV0dHMtYmctcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tZXR0cy10ZXh0LXByaW1hcnkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZXR0cy1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi50dHMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWV0dHMtYnV0dG9uLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1ldHRzLWJ1dHRvbi10ZXh0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4udHRzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ldHRzLWhvdmVyLWJnKTtcXG59XFxuXFxuLnR0cy1idXR0b24ucmVkIHtcXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XFxufVxcblxcbi50dHMtYnV0dG9uLnJlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYmIyZDNiO1xcbn1cXG5cXG4ubG9hZGluZy1zcGlubmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWV0dHMtYmctc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ldHRzLWJ1dHRvbi1iZyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LXN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC1zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjaXJjbGVQYXVzZSwgY2lyY2xlU3RvcCB9IGZyb20gJy4uL2xpYi9zdmdzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbnRyb2xQYW5lbChpc0xvYWRpbmcgPSB0cnVlKSB7XG5cdGNvbnN0IHNldHRpbmdzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuXHRcdGRhcmtNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0Y29uc3QgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cGFuZWwuY2xhc3NOYW1lID0gJ3R0cy1jb250cm9scyc7XG5cdHBhbmVsLmlkID0gJ3R0cy1jb250cm9sLXBhbmVsJztcblxuXHRpZiAoc2V0dGluZ3MuZGFya01vZGUpIHtcblx0XHRwYW5lbC5kYXRhc2V0LnRoZW1lID0gJ2RhcmsnO1xuXHRcdC8vIHBhbmVsLmNsYXNzTmFtZSArPSAnIGRhcmsnO1xuXHR9XG5cblx0dXBkYXRlUGFuZWxDb250ZW50KHBhbmVsLCBpc0xvYWRpbmcpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhbmVsKTtcblx0cmV0dXJuIHBhbmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGFuZWxDb250ZW50KHBhbmVsLCBpc0xvYWRpbmcpIHtcblx0cGFuZWwuaW5uZXJIVE1MID0gYFxuXHRcdCR7aXNMb2FkaW5nID8gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtY2VudGVyIGxvYWRpbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdDxzcGFuPkdlbmVyYXRpbmcgYXVkaW8uLi48L3NwYW4+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAgOiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1jZW50ZXJcIj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInR0cy1wYXVzZVwiIGNsYXNzPVwidHRzLWJ1dHRvblwiPlxuXHRcdFx0XHRcdCR7Y2lyY2xlUGF1c2V9XG5cdFx0XHRcdFx0PHNwYW4+UGF1c2U8L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwidHRzLXN0b3BcIiBjbGFzcz1cInR0cy1idXR0b24gcmVkXCI+XG5cdFx0XHRcdFx0JHtjaXJjbGVTdG9wfVxuXHRcdFx0XHRcdDxzcGFuPlN0b3A8L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0YH1cblx0YDtcblxuXHRpZiAoIWlzTG9hZGluZykge1xuXHRcdGNvbnN0IHBhdXNlQnV0dG9uID0gcGFuZWwucXVlcnlTZWxlY3RvcignI3R0cy1wYXVzZScpO1xuXHRcdGNvbnN0IHN0b3BCdXR0b24gPSBwYW5lbC5xdWVyeVNlbGVjdG9yKCcjdHRzLXN0b3AnKTtcblxuXHRcdGlmIChwYXVzZUJ1dHRvbilcblx0XHRcdHBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHdpbmRvdy5vbkNsaWNrVG9nZ2xlUGF1c2U/LigpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoc3RvcEJ1dHRvbilcblx0XHRcdHN0b3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0d2luZG93Lm9uQ2xpY2tTdG9wUGxheWJhY2s/LigpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBjaXJjbGVQbGF5ID0gYFxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibHVjaWRlIGx1Y2lkZS1jaXJjbGUtcGxheVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTAgOCAxNiAxMiAxMCAxNiAxMCA4XCIvPjwvc3ZnPlxuYFxuXG5leHBvcnQgY29uc3QgY2lyY2xlUGF1c2UgPSBgXG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLWNpcmNsZS1wYXVzZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIi8+PGxpbmUgeDE9XCIxMFwiIHgyPVwiMTBcIiB5MT1cIjE1XCIgeTI9XCI5XCIvPjxsaW5lIHgxPVwiMTRcIiB4Mj1cIjE0XCIgeTE9XCIxNVwiIHkyPVwiOVwiLz48L3N2Zz5cbmBcblxuZXhwb3J0IGNvbnN0IGNpcmNsZVN0b3AgPSBgXG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLWNpcmNsZS1zdG9wXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiLz48cmVjdCB4PVwiOVwiIHk9XCI5XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiNlwiIHJ4PVwiMVwiLz48L3N2Zz5cbmBcblxuZXhwb3J0IGNvbnN0IHN1biA9IGBcbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImx1Y2lkZSBsdWNpZGUtc3VuXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI0XCIvPjxwYXRoIGQ9XCJNMTIgMnYyXCIvPjxwYXRoIGQ9XCJNMTIgMjB2MlwiLz48cGF0aCBkPVwibTQuOTMgNC45MyAxLjQxIDEuNDFcIi8+PHBhdGggZD1cIm0xNy42NiAxNy42NiAxLjQxIDEuNDFcIi8+PHBhdGggZD1cIk0yIDEyaDJcIi8+PHBhdGggZD1cIk0yMCAxMmgyXCIvPjxwYXRoIGQ9XCJtNi4zNCAxNy42Ni0xLjQxIDEuNDFcIi8+PHBhdGggZD1cIm0xOS4wNyA0LjkzLTEuNDEgMS40MVwiLz48L3N2Zz5cbmBcbmV4cG9ydCBjb25zdCBtb29uID0gYFxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibHVjaWRlIGx1Y2lkZS1tb29uXCI+PHBhdGggZD1cIk0xMiAzYTYgNiAwIDAgMCA5IDkgOSA5IDAgMSAxLTktOVpcIi8+PC9zdmc+XG5gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRWRnZVRUU0NsaWVudCwgUHJvc29keU9wdGlvbnMsIE9VVFBVVF9GT1JNQVQgfSBmcm9tIFwiZWRnZS10dHMtY2xpZW50XCI7XG5pbXBvcnQgXCIuL2NvbnRlbnQtc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ29udHJvbFBhbmVsLFxuICB1cGRhdGVQYW5lbENvbnRlbnQsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbFBhbmVsXCI7XG5pbXBvcnQgeyBjaXJjbGVQYXVzZSwgY2lyY2xlUGxheSB9IGZyb20gXCIuL2xpYi9zdmdzXCI7XG5cblxubGV0IGNvbnRyb2xQYW5lbCA9IG51bGw7XG53aW5kb3cub25DbGlja1RvZ2dsZVBhdXNlID0gb25DbGlja1RvZ2dsZVBhdXNlO1xud2luZG93Lm9uQ2xpY2tTdG9wUGxheWJhY2sgPSBvbkNsaWNrU3RvcFBsYXliYWNrO1xuXG5mdW5jdGlvbiB1cGRhdGVQbGF5UGF1c2VCdXR0b24oaXNQYXVzZWQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R0cy1wYXVzZVwiKTtcbiAgaWYgKHBhdXNlQnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9XG4gICAgICBpc1BhdXNlZCA/IFwiUGF1c2VcIiA6IFwiUmVzdW1lXCI7XG4gICAgcGF1c2VCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgJHtpc1BhdXNlZCA/IGNpcmNsZVBhdXNlIDogY2lyY2xlUGxheX1cbiAgICAgIDxzcGFuPlxuICAgICAgICAke2J1dHRvblRleHR9XG4gICAgICA8L3NwYW4+XG4gICAgYDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDb250cm9sUGFuZWwoKSB7XG4gIGlmIChjb250cm9sUGFuZWwgJiYgY29udHJvbFBhbmVsLnBhcmVudE5vZGUpIHtcbiAgICBjb250cm9sUGFuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250cm9sUGFuZWwpO1xuICB9XG4gIGNvbnRyb2xQYW5lbCA9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gb25DbGlja1RvZ2dsZVBhdXNlKCkge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogXCJvZmZzY3JlZW46dG9nZ2xlUGF1c2VcIiB9KTtcbn1cblxuZnVuY3Rpb24gb25DbGlja1N0b3BQbGF5YmFjaygpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246IFwib2Zmc2NyZWVuOnN0b3BQbGF5YmFja1wiIH0pO1xufVxuXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbmNvbnNvbGUubG9nKCdyZXF1ZXN0XyBjb250ZW50IHNjcmlwdDonLCByZXF1ZXN0KTtcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImNvbnRyb2xQYW5lbDp1cGRhdGVQYXVzZVwiKSB7XG4gICAgdXBkYXRlUGxheVBhdXNlQnV0dG9uKHJlcXVlc3QuaXNQYXVzZWQpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImNvbnRyb2xQYW5lbDp1cGRhdGVMb2FkaW5nXCIpIHtcbiAgICB1cGRhdGVQYW5lbENvbnRlbnQoY29udHJvbFBhbmVsLCByZXF1ZXN0LmlzTG9hZGluZyk7XG4gIH1cbiAgXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJjb250cm9sUGFuZWw6cmVtb3ZlXCIpIHtcbiAgICByZW1vdmVDb250cm9sUGFuZWwoKTtcbiAgfVxuXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJjb250cm9sUGFuZWw6Y3JlYXRlXCIpIHtcbiAgICBjb250cm9sUGFuZWwgPSBhd2FpdCBjcmVhdGVDb250cm9sUGFuZWwodHJ1ZSk7XG4gIH1cblxuXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==