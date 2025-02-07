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
    chrome.runtime.sendMessage({ action: "background:togglePause" });
}
function onClickStopPlayback() {
    chrome.runtime.sendMessage({ action: "background:stopPlayback" });
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.action === "controlPanel:updatePause") {
        updatePlayPauseButton(request.isPaused);
    }
    if (request.action === "controlPanel:remove") {
        removeControlPanel();
    }
    if (request.action === "controlPanel:create") {
        controlPanel = yield (0,_components_controlPanel__WEBPACK_IMPORTED_MODULE_1__.createControlPanel)(true);
    }
    if (request.action === "controlPanel:updateLoading") {
        (0,_components_controlPanel__WEBPACK_IMPORTED_MODULE_1__.updatePanelContent)(controlPanel, request.isLoading);
    }
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBR0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQU8sT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRTtJQUMzRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssMEJBQTBCLEVBQUUsQ0FBQztRQUNsRCxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdDLGtCQUFrQixFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdDLFlBQVksR0FBRyxNQUFNLDRFQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssNEJBQTRCLEVBQUUsQ0FBQztRQUNwRCw0RUFBa0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7QUFDSCxDQUFDLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvY29udGVudC1zdHlsZXMuY3NzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnQtc3R5bGVzLmNzcz9iZTNmIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xQYW5lbC50cyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2xpYi9zdmdzLnRzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvY29udGVudFNjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWV0dHMtYmctcHJpbWFyeTogI2ZmZmZmZjtcbiAgLS1ldHRzLWJnLXNlY29uZGFyeTogI2Y4ZjlmYTtcbiAgLS1ldHRzLXRleHQtcHJpbWFyeTogIzAwMDAwMDtcbiAgLS1ldHRzLXRleHQtc2Vjb25kYXJ5OiAjNjY2NjY2O1xuICAtLWV0dHMtYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xuICAtLWV0dHMtYnV0dG9uLWJnOiAjMDA3YmZmO1xuICAtLWV0dHMtYnV0dG9uLXRleHQ6ICNmZmZmZmY7XG4gIC0tZXR0cy1ob3Zlci1iZzogIzAwNTZiMztcbn1cblxuW2RhdGEtdGhlbWU9J2RhcmsnXSB7XG4gIC0tZXR0cy1iZy1wcmltYXJ5OiAjMWExYTFhO1xuICAtLWV0dHMtYmctc2Vjb25kYXJ5OiAjMmQyZDJkO1xuICAtLWV0dHMtdGV4dC1wcmltYXJ5OiAjZmZmZmZmO1xuICAtLWV0dHMtdGV4dC1zZWNvbmRhcnk6ICNjY2NjY2M7XG4gIC0tZXR0cy1ib3JkZXItY29sb3I6ICM0MDQwNDA7XG4gIC0tZXR0cy1idXR0b24tYmc6ICMwZDZlZmQ7XG4gIC0tZXR0cy1idXR0b24tdGV4dDogI2ZmZmZmZjtcbiAgLS1ldHRzLWhvdmVyLWJnOiAjMGI1ZWQ3O1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4OyAvKiBUYWlsd2luZCdzIGZsZXggKi9cbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogVGFpbHdpbmQncyBpdGVtcy1jZW50ZXIgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIFRhaWx3aW5kJ3MganVzdGlmeS1jZW50ZXIgKi9cbiAgZ2FwOiAxcmVtO1xufVxuXG4udHRzLWljb24ge1xuICB3aWR0aDogMXJlbTsgLyogVGFpbHdpbmQncyB3LTQgKDQgKiAwLjI1cmVtKSAqL1xuICBoZWlnaHQ6IDFyZW07IC8qIFRhaWx3aW5kJ3MgaC00ICg0ICogMC4yNXJlbSkgKi9cbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtOyAvKiBUYWlsd2luZCdzIG1yLTEgKi9cbiAgZmlsbDogbm9uZTsgLyogVGFpbHdpbmQncyBmaWxsLW5vbmUgKi9cbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIFRhaWx3aW5kJ3Mgc3Ryb2tlLWN1cnJlbnRDb2xvciAqL1xufVxuXG4udHRzLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7IC8qIFRhaWx3aW5kJ3Mgdy1mdWxsICovXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTsgLyogVGFpbHdpbmQncyBweC0zICovXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07IC8qIFRhaWx3aW5kJ3MgcHktMiAqL1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiOyAvKiBUYWlsd2luZCdzIGJvcmRlci1ncmF5LTMwMCAqL1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgLyogVGFpbHdpbmQncyByb3VuZGVkICovXG4gIG91dGxpbmU6IG5vbmU7IC8qIFRhaWx3aW5kJ3MgZm9jdXM6b3V0bGluZS1ub25lICovXG59XG5cbi50dHMtaW5wdXQuZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7IC8qIFRhaWx3aW5kJ3MgZGFyazpiZy1ncmF5LTgwMCAqL1xuICBib3JkZXItY29sb3I6ICM0YjU1NjM7IC8qIFRhaWx3aW5kJ3MgZGFyazpib3JkZXItZ3JheS02MDAgKi9cbiAgY29sb3I6IHdoaXRlOyAvKiBUYWlsd2luZCdzIGRhcms6dGV4dC13aGl0ZSAqL1xufVxuXG4udHJhbnNpdGlvbi1hbGwge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1pbi13aWR0aC0yMDAge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uc3BhY2UteC0zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uc3BhY2UteS0zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uYW5pbWF0ZS1zcGluIHtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLnNwaW5uZXIge1xuICBoZWlnaHQ6IDEuMjVyZW07IC8qIDUgKiAwLjI1cmVtICovXG4gIHdpZHRoOiAxLjI1cmVtOyAvKiA1ICogMC4yNXJlbSAqL1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjU2M2ViOyAvKiBCbHVlIGJvcmRlciAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBCb3JkZXItdC10cmFuc3BhcmVudCAqL1xufVxuXG4ubHVjaWRlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgc3Ryb2tlOiB2YXIoLS1ldHRzLWJ1dHRvbi10ZXh0KTtcbn1cblxuLnR0cy1jb250cm9scyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZXR0cy1iZy1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWV0dHMtdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZXR0cy1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi50dHMtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZXR0cy1idXR0b24tYmcpO1xuICBjb2xvcjogdmFyKC0tZXR0cy1idXR0b24tdGV4dCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnR0cy1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ldHRzLWhvdmVyLWJnKTtcbn1cblxuLnR0cy1idXR0b24ucmVkIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbn1cblxuLnR0cy1idXR0b24ucmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2JiMmQzYjtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWV0dHMtYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWV0dHMtYnV0dG9uLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBRSw0QkFBNEI7RUFDakQsdUJBQXVCLEVBQUUsOEJBQThCO0VBQ3ZELFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVcsRUFBRSxpQ0FBaUM7RUFDOUMsWUFBWSxFQUFFLGlDQUFpQztFQUMvQyxxQkFBcUIsRUFBRSxvQkFBb0I7RUFDM0MsVUFBVSxFQUFFLHlCQUF5QjtFQUNyQyxvQkFBb0IsRUFBRSxtQ0FBbUM7QUFDM0Q7O0FBRUE7RUFDRSxXQUFXLEVBQUUsc0JBQXNCO0VBQ25DLHFCQUFxQixFQUFFLG9CQUFvQjtFQUMzQyxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO0VBQ3pDLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBRSwrQkFBK0I7RUFDMUQsdUJBQXVCLEVBQUUsdUJBQXVCO0VBQ2hELGFBQWEsRUFBRSxrQ0FBa0M7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxnQ0FBZ0M7RUFDM0QscUJBQXFCLEVBQUUsb0NBQW9DO0VBQzNELFlBQVksRUFBRSwrQkFBK0I7QUFDL0M7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsZUFBZSxFQUFFLGdCQUFnQjtFQUNqQyxjQUFjLEVBQUUsZ0JBQWdCO0VBQ2hDLHlCQUF5QixFQUFFLGdCQUFnQjtFQUMzQyxrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUUseUJBQXlCO0FBQzFEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWV0dHMtYmctcHJpbWFyeTogI2ZmZmZmZjtcXG4gIC0tZXR0cy1iZy1zZWNvbmRhcnk6ICNmOGY5ZmE7XFxuICAtLWV0dHMtdGV4dC1wcmltYXJ5OiAjMDAwMDAwO1xcbiAgLS1ldHRzLXRleHQtc2Vjb25kYXJ5OiAjNjY2NjY2O1xcbiAgLS1ldHRzLWJvcmRlci1jb2xvcjogI2NjY2NjYztcXG4gIC0tZXR0cy1idXR0b24tYmc6ICMwMDdiZmY7XFxuICAtLWV0dHMtYnV0dG9uLXRleHQ6ICNmZmZmZmY7XFxuICAtLWV0dHMtaG92ZXItYmc6ICMwMDU2YjM7XFxufVxcblxcbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1ldHRzLWJnLXByaW1hcnk6ICMxYTFhMWE7XFxuICAtLWV0dHMtYmctc2Vjb25kYXJ5OiAjMmQyZDJkO1xcbiAgLS1ldHRzLXRleHQtcHJpbWFyeTogI2ZmZmZmZjtcXG4gIC0tZXR0cy10ZXh0LXNlY29uZGFyeTogI2NjY2NjYztcXG4gIC0tZXR0cy1ib3JkZXItY29sb3I6ICM0MDQwNDA7XFxuICAtLWV0dHMtYnV0dG9uLWJnOiAjMGQ2ZWZkO1xcbiAgLS1ldHRzLWJ1dHRvbi10ZXh0OiAjZmZmZmZmO1xcbiAgLS1ldHRzLWhvdmVyLWJnOiAjMGI1ZWQ3O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDsgLyogVGFpbHdpbmQncyBmbGV4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogVGFpbHdpbmQncyBpdGVtcy1jZW50ZXIgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBUYWlsd2luZCdzIGp1c3RpZnktY2VudGVyICovXFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50dHMtaWNvbiB7XFxuICB3aWR0aDogMXJlbTsgLyogVGFpbHdpbmQncyB3LTQgKDQgKiAwLjI1cmVtKSAqL1xcbiAgaGVpZ2h0OiAxcmVtOyAvKiBUYWlsd2luZCdzIGgtNCAoNCAqIDAuMjVyZW0pICovXFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07IC8qIFRhaWx3aW5kJ3MgbXItMSAqL1xcbiAgZmlsbDogbm9uZTsgLyogVGFpbHdpbmQncyBmaWxsLW5vbmUgKi9cXG4gIHN0cm9rZTogY3VycmVudENvbG9yOyAvKiBUYWlsd2luZCdzIHN0cm9rZS1jdXJyZW50Q29sb3IgKi9cXG59XFxuXFxuLnR0cy1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTsgLyogVGFpbHdpbmQncyB3LWZ1bGwgKi9cXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTsgLyogVGFpbHdpbmQncyBweC0zICovXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTsgLyogVGFpbHdpbmQncyBweS0yICovXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjsgLyogVGFpbHdpbmQncyBib3JkZXItZ3JheS0zMDAgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyAvKiBUYWlsd2luZCdzIHJvdW5kZWQgKi9cXG4gIG91dGxpbmU6IG5vbmU7IC8qIFRhaWx3aW5kJ3MgZm9jdXM6b3V0bGluZS1ub25lICovXFxufVxcblxcbi50dHMtaW5wdXQuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyOTM3OyAvKiBUYWlsd2luZCdzIGRhcms6YmctZ3JheS04MDAgKi9cXG4gIGJvcmRlci1jb2xvcjogIzRiNTU2MzsgLyogVGFpbHdpbmQncyBkYXJrOmJvcmRlci1ncmF5LTYwMCAqL1xcbiAgY29sb3I6IHdoaXRlOyAvKiBUYWlsd2luZCdzIGRhcms6dGV4dC13aGl0ZSAqL1xcbn1cXG5cXG4udHJhbnNpdGlvbi1hbGwge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5taW4td2lkdGgtMjAwIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5zcGFjZS14LTMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLnNwYWNlLXktMyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLmFuaW1hdGUtc3BpbiB7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICBoZWlnaHQ6IDEuMjVyZW07IC8qIDUgKiAwLjI1cmVtICovXFxuICB3aWR0aDogMS4yNXJlbTsgLyogNSAqIDAuMjVyZW0gKi9cXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNTYzZWI7IC8qIEJsdWUgYm9yZGVyICovXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQm9yZGVyLXQtdHJhbnNwYXJlbnQgKi9cXG59XFxuXFxuLmx1Y2lkZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHN0cm9rZTogdmFyKC0tZXR0cy1idXR0b24tdGV4dCk7XFxufVxcblxcbi50dHMtY29udHJvbHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ldHRzLWJnLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWV0dHMtdGV4dC1wcmltYXJ5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWV0dHMtYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4udHRzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ldHRzLWJ1dHRvbi1iZyk7XFxuICBjb2xvcjogdmFyKC0tZXR0cy1idXR0b24tdGV4dCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnR0cy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZXR0cy1ob3Zlci1iZyk7XFxufVxcblxcbi50dHMtYnV0dG9uLnJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xcbn1cXG5cXG4udHRzLWJ1dHRvbi5yZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2JiMmQzYjtcXG59XFxuXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ldHRzLWJnLXNlY29uZGFyeSk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZXR0cy1idXR0b24tYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC1zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQtc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2lyY2xlUGF1c2UsIGNpcmNsZVN0b3AgfSBmcm9tICcuLi9saWIvc3Zncyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb250cm9sUGFuZWwoaXNMb2FkaW5nID0gdHJ1ZSkge1xuXHRjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHtcblx0XHRkYXJrTW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdGNvbnN0IHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHBhbmVsLmNsYXNzTmFtZSA9ICd0dHMtY29udHJvbHMnO1xuXHRwYW5lbC5pZCA9ICd0dHMtY29udHJvbC1wYW5lbCc7XG5cblx0aWYgKHNldHRpbmdzLmRhcmtNb2RlKSB7XG5cdFx0cGFuZWwuZGF0YXNldC50aGVtZSA9ICdkYXJrJztcblx0XHQvLyBwYW5lbC5jbGFzc05hbWUgKz0gJyBkYXJrJztcblx0fVxuXG5cdHVwZGF0ZVBhbmVsQ29udGVudChwYW5lbCwgaXNMb2FkaW5nKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYW5lbCk7XG5cdHJldHVybiBwYW5lbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBhbmVsQ29udGVudChwYW5lbCwgaXNMb2FkaW5nKSB7XG5cdHBhbmVsLmlubmVySFRNTCA9IGBcblx0XHQke2lzTG9hZGluZyA/IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWNlbnRlciBsb2FkaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8c3Bhbj5HZW5lcmF0aW5nIGF1ZGlvLi4uPC9zcGFuPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgIDogYFxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtY2VudGVyXCI+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJ0dHMtcGF1c2VcIiBjbGFzcz1cInR0cy1idXR0b25cIj5cblx0XHRcdFx0XHQke2NpcmNsZVBhdXNlfVxuXHRcdFx0XHRcdDxzcGFuPlBhdXNlPC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInR0cy1zdG9wXCIgY2xhc3M9XCJ0dHMtYnV0dG9uIHJlZFwiPlxuXHRcdFx0XHRcdCR7Y2lyY2xlU3RvcH1cblx0XHRcdFx0XHQ8c3Bhbj5TdG9wPC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdGB9XG5cdGA7XG5cblx0aWYgKCFpc0xvYWRpbmcpIHtcblx0XHRjb25zdCBwYXVzZUJ1dHRvbiA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyN0dHMtcGF1c2UnKTtcblx0XHRjb25zdCBzdG9wQnV0dG9uID0gcGFuZWwucXVlcnlTZWxlY3RvcignI3R0cy1zdG9wJyk7XG5cblx0XHRpZiAocGF1c2VCdXR0b24pXG5cdFx0XHRwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR3aW5kb3cub25DbGlja1RvZ2dsZVBhdXNlPy4oKTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKHN0b3BCdXR0b24pXG5cdFx0XHRzdG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHdpbmRvdy5vbkNsaWNrU3RvcFBsYXliYWNrPy4oKTtcblx0XHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgY2lyY2xlUGxheSA9IGBcbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImx1Y2lkZSBsdWNpZGUtY2lyY2xlLXBsYXlcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEwIDggMTYgMTIgMTAgMTYgMTAgOFwiLz48L3N2Zz5cbmBcblxuZXhwb3J0IGNvbnN0IGNpcmNsZVBhdXNlID0gYFxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibHVjaWRlIGx1Y2lkZS1jaXJjbGUtcGF1c2VcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIvPjxsaW5lIHgxPVwiMTBcIiB4Mj1cIjEwXCIgeTE9XCIxNVwiIHkyPVwiOVwiLz48bGluZSB4MT1cIjE0XCIgeDI9XCIxNFwiIHkxPVwiMTVcIiB5Mj1cIjlcIi8+PC9zdmc+XG5gXG5cbmV4cG9ydCBjb25zdCBjaXJjbGVTdG9wID0gYFxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibHVjaWRlIGx1Y2lkZS1jaXJjbGUtc3RvcFwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIi8+PHJlY3QgeD1cIjlcIiB5PVwiOVwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjZcIiByeD1cIjFcIi8+PC9zdmc+XG5gXG5cbmV4cG9ydCBjb25zdCBzdW4gPSBgXG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLXN1blwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNFwiLz48cGF0aCBkPVwiTTEyIDJ2MlwiLz48cGF0aCBkPVwiTTEyIDIwdjJcIi8+PHBhdGggZD1cIm00LjkzIDQuOTMgMS40MSAxLjQxXCIvPjxwYXRoIGQ9XCJtMTcuNjYgMTcuNjYgMS40MSAxLjQxXCIvPjxwYXRoIGQ9XCJNMiAxMmgyXCIvPjxwYXRoIGQ9XCJNMjAgMTJoMlwiLz48cGF0aCBkPVwibTYuMzQgMTcuNjYtMS40MSAxLjQxXCIvPjxwYXRoIGQ9XCJtMTkuMDcgNC45My0xLjQxIDEuNDFcIi8+PC9zdmc+XG5gXG5leHBvcnQgY29uc3QgbW9vbiA9IGBcbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImx1Y2lkZSBsdWNpZGUtbW9vblwiPjxwYXRoIGQ9XCJNMTIgM2E2IDYgMCAwIDAgOSA5IDkgOSAwIDEgMS05LTlaXCIvPjwvc3ZnPlxuYCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEVkZ2VUVFNDbGllbnQsIFByb3NvZHlPcHRpb25zLCBPVVRQVVRfRk9STUFUIH0gZnJvbSBcImVkZ2UtdHRzLWNsaWVudFwiO1xuaW1wb3J0IFwiLi9jb250ZW50LXN0eWxlcy5jc3NcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRyb2xQYW5lbCxcbiAgdXBkYXRlUGFuZWxDb250ZW50LFxufSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRyb2xQYW5lbFwiO1xuaW1wb3J0IHsgY2lyY2xlUGF1c2UsIGNpcmNsZVBsYXkgfSBmcm9tIFwiLi9saWIvc3Znc1wiO1xuXG5cbmxldCBjb250cm9sUGFuZWwgPSBudWxsO1xud2luZG93Lm9uQ2xpY2tUb2dnbGVQYXVzZSA9IG9uQ2xpY2tUb2dnbGVQYXVzZTtcbndpbmRvdy5vbkNsaWNrU3RvcFBsYXliYWNrID0gb25DbGlja1N0b3BQbGF5YmFjaztcblxuZnVuY3Rpb24gdXBkYXRlUGxheVBhdXNlQnV0dG9uKGlzUGF1c2VkOiBib29sZWFuKSB7XG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0dHMtcGF1c2VcIik7XG4gIGlmIChwYXVzZUJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPVxuICAgICAgaXNQYXVzZWQgPyBcIlBhdXNlXCIgOiBcIlJlc3VtZVwiO1xuICAgIHBhdXNlQnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICR7aXNQYXVzZWQgPyBjaXJjbGVQYXVzZSA6IGNpcmNsZVBsYXl9XG4gICAgICA8c3Bhbj5cbiAgICAgICAgJHtidXR0b25UZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIGA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29udHJvbFBhbmVsKCkge1xuICBpZiAoY29udHJvbFBhbmVsICYmIGNvbnRyb2xQYW5lbC5wYXJlbnROb2RlKSB7XG4gICAgY29udHJvbFBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udHJvbFBhbmVsKTtcbiAgfVxuICBjb250cm9sUGFuZWwgPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIG9uQ2xpY2tUb2dnbGVQYXVzZSgpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246IFwiYmFja2dyb3VuZDp0b2dnbGVQYXVzZVwiIH0pO1xufVxuXG5mdW5jdGlvbiBvbkNsaWNrU3RvcFBsYXliYWNrKCkge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogXCJiYWNrZ3JvdW5kOnN0b3BQbGF5YmFja1wiIH0pO1xufVxuXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImNvbnRyb2xQYW5lbDp1cGRhdGVQYXVzZVwiKSB7XG4gICAgdXBkYXRlUGxheVBhdXNlQnV0dG9uKHJlcXVlc3QuaXNQYXVzZWQpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImNvbnRyb2xQYW5lbDpyZW1vdmVcIikge1xuICAgIHJlbW92ZUNvbnRyb2xQYW5lbCgpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImNvbnRyb2xQYW5lbDpjcmVhdGVcIikge1xuICAgIGNvbnRyb2xQYW5lbCA9IGF3YWl0IGNyZWF0ZUNvbnRyb2xQYW5lbCh0cnVlKTtcbiAgfVxuXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJjb250cm9sUGFuZWw6dXBkYXRlTG9hZGluZ1wiKSB7XG4gICAgdXBkYXRlUGFuZWxDb250ZW50KGNvbnRyb2xQYW5lbCwgcmVxdWVzdC5pc0xvYWRpbmcpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==