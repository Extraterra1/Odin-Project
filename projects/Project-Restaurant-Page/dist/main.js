/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./basico.woff */ "./src/basico.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 10px;
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}

@font-face {
  font-family: "Basico";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  font-style: normal;
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
}
body {
  min-height: 100vh;
  font-family: "Basico";
}

ul {
  list-style: none;
}

.container {
  min-height: inherit;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  padding: 1rem 2rem;
  background-color: var(--bs-gray-dark);
  color: var(--bs-light);
}

.header h1 {
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 4rem;
  padding-left: 4rem;
}

.header ul {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  margin-right: 20%;
  font-size: 1.5rem;
}

.header ul li {
  cursor: pointer;
}

.header ul li:hover {
  color: #c9c9c9;
}

.content {
  background-color: #9a6638;
  color: var(--bs-light);
}
.home-wrapper {
  padding: 10rem 30rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title title"
    "text img"
    "text img";
}

.home-wrapper h1 {
  grid-area: title;
  place-self: center;
  font-size: 7rem;
  margin-bottom: 5%;
}

.home-wrapper img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.home-wrapper .side-content {
  background-color: var(--bs-dark);
  padding: 3rem;
  display: grid;
  gap: 2rem;
  place-content: center;
}

.side-content p {
  font-size: 1.5rem;
  max-width: 60ch;
  letter-spacing: 1px;
}

.about-wrapper,
.contact-wrapper {
  display: grid;
  height: 100%;
}

.hero {
  align-self: center;
  justify-self: stretch;

  display: grid;
  background-color: rgba(33, 37, 41, 0.6);
  place-items: center;
  padding: 15rem;
  margin-top: 4rem;
}
.hero h1 {
  font-size: 7rem;
  letter-spacing: 1rem;
}

.story {
  justify-self: center;
  display: grid;
  gap: 2rem;
  place-content: center;
  padding: 4rem 0;
}

.story p {
  max-width: 75ch;
  font-size: 1.5rem;
  line-height: 2.5rem;
}

form {
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 8rem;
  width: 40%;
}

.input-group {
  display: grid;
  place-items: start;
  gap: 1rem;
}

.input-group input {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #eee;
  width: 100%;
}

.input-group label {
  align-self: end;
  font-size: 2rem;
}

.input-group textarea {
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
}

.input-group:nth-child(3) {
  grid-column: span 2;
}

.input-group:last-child {
  grid-column: span 2;
}

.input-group button {
  border: none;
  outline: none;
  border-radius: 10px;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: var(--bs-teal);
  color: var(--bs-white);
  font-weight: bold;
  font-size: 1.8rem;
}

.footer {
  background-color: var(--bs-gray-dark);
  color: var(--bs-light);
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,2DAAwC;EACxC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,kBAAkB;EAClB,qCAAqC;EACrC,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC;;;cAGY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;;EAErB,aAAa;EACb,uCAAuC;EACvC,mBAAmB;EACnB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,gCAAgC;EAChC,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":[":root {\r\n  font-size: 10px;\r\n  --bs-blue: #0d6efd;\r\n  --bs-indigo: #6610f2;\r\n  --bs-purple: #6f42c1;\r\n  --bs-pink: #d63384;\r\n  --bs-red: #dc3545;\r\n  --bs-orange: #fd7e14;\r\n  --bs-yellow: #ffc107;\r\n  --bs-green: #198754;\r\n  --bs-teal: #20c997;\r\n  --bs-cyan: #0dcaf0;\r\n  --bs-white: #fff;\r\n  --bs-gray: #6c757d;\r\n  --bs-gray-dark: #343a40;\r\n  --bs-primary: #0d6efd;\r\n  --bs-secondary: #6c757d;\r\n  --bs-success: #198754;\r\n  --bs-info: #0dcaf0;\r\n  --bs-warning: #ffc107;\r\n  --bs-danger: #dc3545;\r\n  --bs-light: #f8f9fa;\r\n  --bs-dark: #212529;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Basico\";\r\n  src: url(\"./basico.woff\") format(\"woff\");\r\n  font-style: normal;\r\n  font-weight: 400;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100vh;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  font-family: \"Basico\";\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  min-height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n}\r\n\r\n.header {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n  padding: 1rem 2rem;\r\n  background-color: var(--bs-gray-dark);\r\n  color: var(--bs-light);\r\n}\r\n\r\n.header h1 {\r\n  letter-spacing: 2px;\r\n  font-weight: 600;\r\n  font-size: 4rem;\r\n  padding-left: 4rem;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n  gap: 2rem;\r\n  margin-right: 20%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.header ul li {\r\n  cursor: pointer;\r\n}\r\n\r\n.header ul li:hover {\r\n  color: #c9c9c9;\r\n}\r\n\r\n.content {\r\n  background-color: #9a6638;\r\n  color: var(--bs-light);\r\n}\r\n.home-wrapper {\r\n  padding: 10rem 30rem;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"title title\"\r\n    \"text img\"\r\n    \"text img\";\r\n}\r\n\r\n.home-wrapper h1 {\r\n  grid-area: title;\r\n  place-self: center;\r\n  font-size: 7rem;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.home-wrapper img {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.home-wrapper .side-content {\r\n  background-color: var(--bs-dark);\r\n  padding: 3rem;\r\n  display: grid;\r\n  gap: 2rem;\r\n  place-content: center;\r\n}\r\n\r\n.side-content p {\r\n  font-size: 1.5rem;\r\n  max-width: 60ch;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.about-wrapper,\r\n.contact-wrapper {\r\n  display: grid;\r\n  height: 100%;\r\n}\r\n\r\n.hero {\r\n  align-self: center;\r\n  justify-self: stretch;\r\n\r\n  display: grid;\r\n  background-color: rgba(33, 37, 41, 0.6);\r\n  place-items: center;\r\n  padding: 15rem;\r\n  margin-top: 4rem;\r\n}\r\n.hero h1 {\r\n  font-size: 7rem;\r\n  letter-spacing: 1rem;\r\n}\r\n\r\n.story {\r\n  justify-self: center;\r\n  display: grid;\r\n  gap: 2rem;\r\n  place-content: center;\r\n  padding: 4rem 0;\r\n}\r\n\r\n.story p {\r\n  max-width: 75ch;\r\n  font-size: 1.5rem;\r\n  line-height: 2.5rem;\r\n}\r\n\r\nform {\r\n  justify-self: center;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 2rem;\r\n  padding: 8rem;\r\n  width: 40%;\r\n}\r\n\r\n.input-group {\r\n  display: grid;\r\n  place-items: start;\r\n  gap: 1rem;\r\n}\r\n\r\n.input-group input {\r\n  padding: 0.6rem;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  width: 100%;\r\n}\r\n\r\n.input-group label {\r\n  align-self: end;\r\n  font-size: 2rem;\r\n}\r\n\r\n.input-group textarea {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  font-size: 1.2rem;\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.input-group:nth-child(3) {\r\n  grid-column: span 2;\r\n}\r\n\r\n.input-group:last-child {\r\n  grid-column: span 2;\r\n}\r\n\r\n.input-group button {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  padding: 1.5rem 1rem;\r\n  background-color: var(--bs-teal);\r\n  color: var(--bs-white);\r\n  font-weight: bold;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.footer {\r\n  background-color: var(--bs-gray-dark);\r\n  color: var(--bs-light);\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("about-wrapper");
  wrapper.innerHTML = `<div class="hero">
            <h1>ABOUT US</h1>
          </div>
          <div class="story">
            <p>
              Once upon a time, in a quaint and picturesque village nestled deep within the rolling hills of Tuscany, there lived a man named Giovanni. Giovanni
              was a humble and kind-hearted soul, known throughout the village for his unwavering passion for cooking. He had a talent for creating the most
              exquisite dishes, each one a masterpiece of flavor and presentation.
            </p>

            <p>
              Giovanni's love for cooking was born from the deep-seated memories of his childhood. His parents, Maria and Antonio, had owned a small trattoria
              on the outskirts of the village, a place where locals and travelers alike would gather to savor the delectable flavors of homemade Italian
              cuisine.
            </p>

            <p>
              Maria was a culinary genius, a woman who could turn the simplest ingredients into gastronomic wonders that left patrons raving about her dishes
              for years to come. Antonio, her beloved husband, was the heart and soul of the trattoria, always ready with a warm smile and a friendly
              conversation for anyone who walked through their door.
            </p>

            <p>
              Life was idyllic for young Giovanni as he watched his parents work side by side, their love for each other and their craft evident in every dish
              they served. But tragedy struck one fateful evening when a powerful storm rolled through the village, unleashing torrents of rain and fierce
              winds.
            </p>

            <p>
              The trattoria, nestled on the banks of a gentle river, was inundated with water as the river overflowed its banks. Giovanni's parents, Maria and
              Antonio, were trapped inside. Desperate attempts were made by the villagers to save them, but the raging storm was unforgiving. In the end, they
              could only watch in helpless horror as the waters claimed the trattoria and its beloved owners.
            </p>

            <p>
              Giovanni was devastated by the loss of his parents and the trattoria. He was left with nothing but the precious memories of their culinary
              creations and the dreams they had shared together. Determined to honor their legacy, he vowed to rebuild their trattoria and share their recipes
              with the world.
            </p>

            <p>
              With the help of the villagers, Giovanni worked tirelessly to reconstruct the trattoria from the ground up. It took years of hard work and
              dedication, but eventually, the trattoria rose from the ashes, more beautiful than ever before. Giovanni adorned the walls with photographs of his
              parents and their creations, turning the trattoria into a living tribute to their memory.
            </p>

            <p>
              Giovanni's trattoria became famous far and wide, drawing food enthusiasts and travelers from across the globe. His dishes were a testament to his
              parents' culinary genius, and each bite was a taste of the love and passion that Maria and Antonio had poured into their craft.
            </p>

            <p>
              Yet, as Giovanni stood in his bustling trattoria, he couldn't help but feel the absence of his parents, especially during those quiet moments in
              the kitchen when he knew they should have been by his side. The tragic origins of his restaurant were a constant reminder of the price he had paid
              to preserve their legacy.
            </p>

            <p>
              And so, Giovanni's trattoria thrived, a place where the flavors of the past mingled with the present, and where the spirit of Maria and Antonio
              lived on through every dish served. But the sadness in Giovanni's eyes was a reminder that behind the delectable creations was a story of love,
              loss, and the undying determination to keep a culinary dream alive.
            </p>
          </div>`;
  contentContainer.appendChild(wrapper);
  return {
    page: "aboutUs",
    element: wrapper,
  };
}


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-wrapper");
  wrapper.innerHTML = `<div class="hero">
            <h1>CONTACT US</h1>
          </div>
          <form>
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div class="input-group">
              <label for="message">Your Message</label>
              <textarea name="" id="message" cols="50" rows="10"></textarea>
            </div>
            <div class="input-group">
              <button>Submit</button>
            </div>
          </form>`;
  contentContainer.appendChild(wrapper);
  return {
    page: "contact",
    element: wrapper,
  };
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img1.jpg */ "./src/img1.jpg");
/* harmony import */ var _img2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img2.jpg */ "./src/img2.jpg");


function Home() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("home-wrapper");
  wrapper.innerHTML = `<h1>Welcome to the show</h1>
            <div class="side-content">
              <p>
                Step into a world of culinary delight at [Restaurant Name], where every visit promises a memorable dining experience. Our restaurant is dedicated
                to serving exquisite cuisine in a warm and inviting atmosphere. From our carefully crafted menus to our attentive staff, we aim to create the
                perfect setting for your next dining adventure. At [Restaurant Name], we take pride in our commitment to culinary excellence. Our talented chefs
                are passionate about creating dishes that tantalize your taste buds. Using only the finest and freshest ingredients, we offer a diverse menu that
                caters to all palates, from classic comfort foods to innovative, gourmet creations.
              </p>
              <p>
                At [Restaurant Name], we take pride in our commitment to culinary excellence. Our talented chefs are passionate about creating dishes that
                tantalize your taste buds. Using only the finest and freshest ingredients, we offer a diverse menu that caters to all palates, from classic
                comfort foods to innovative, gourmet creations.
              </p>
            </div>
            <img src="../src/img1.jpg" alt="" srcset="" />
            <img src="../src/img2.jpg" alt="" srcset="" />
            <div class="side-content">
              <p>
                Dining at [Restaurant Name] is not just about the food; it's an immersive experience for all your senses. Our thoughtfully designed interior,
                soothing ambiance, and carefully curated music selection create a harmonious atmosphere that complements the flavors on your plate.
              </p>
              <p>
                Whether you're a seafood enthusiast, a vegetarian, or a carnivore craving a juicy steak, our menu has something to satisfy every craving. We also
                offer a wide range of gluten-free, vegan, and allergy-friendly options, ensuring that everyone can enjoy a memorable meal.
              </p>
              <p>
                Enhance your dining experience with our handcrafted cocktails and an extensive wine list. Our expert mixologists take pride in concocting unique
                libations that perfectly complement your meal. From classic cocktails to our signature creations, you're in for a treat.
              </p>
            </div>`;
  wrapper.querySelector("img").src = _img1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  wrapper.querySelectorAll("img")[1].src = _img2_jpg__WEBPACK_IMPORTED_MODULE_1__;

  contentContainer.appendChild(wrapper);
  return { page: "home", element: wrapper };
}


/***/ }),

/***/ "./src/basico.woff":
/*!*************************!*\
  !*** ./src/basico.woff ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a19ef64c02b71bc13d4.woff";

/***/ }),

/***/ "./src/img1.jpg":
/*!**********************!*\
  !*** ./src/img1.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b507d796787e73745c8d.jpg";

/***/ }),

/***/ "./src/img2.jpg":
/*!**********************!*\
  !*** ./src/img2.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8b162f5cddd04965fe.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _img1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img1.jpg */ "./src/img1.jpg");
/* harmony import */ var _img2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img2.jpg */ "./src/img2.jpg");








let curPage = "home";

const changePage = function (e) {
  if (this.textContent === "Home" && curPage != "home") return (curPage = (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])().page);
  if (this.textContent === "About Us" && curPage != "aboutUs") return (curPage = (0,_modules_about__WEBPACK_IMPORTED_MODULE_2__["default"])().page);
  if (this.textContent === "Contact" && curPage != "contact") return (curPage = (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])().page);
};

document.querySelectorAll(".header ul li").forEach((e) => e.addEventListener("click", changePage));

document.querySelector("img").src = _img1_jpg__WEBPACK_IMPORTED_MODULE_4__;
document.querySelectorAll("img")[1].src = _img2_jpg__WEBPACK_IMPORTED_MODULE_5__;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FB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O1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhO0FBQ0U7QUFDSTtBQUN4QztBQUM4QjtBQUNBO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHlEQUFJO0FBQzlFLGlGQUFpRiwwREFBSztBQUN0RixnRkFBZ0YsNERBQU87QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0NBQUk7QUFDeEMsMENBQTBDLHNDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Jhc2ljby53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC0tYnMtYmx1ZTogIzBkNmVmZDtcclxuICAtLWJzLWluZGlnbzogIzY2MTBmMjtcclxuICAtLWJzLXB1cnBsZTogIzZmNDJjMTtcclxuICAtLWJzLXBpbms6ICNkNjMzODQ7XHJcbiAgLS1icy1yZWQ6ICNkYzM1NDU7XHJcbiAgLS1icy1vcmFuZ2U6ICNmZDdlMTQ7XHJcbiAgLS1icy15ZWxsb3c6ICNmZmMxMDc7XHJcbiAgLS1icy1ncmVlbjogIzE5ODc1NDtcclxuICAtLWJzLXRlYWw6ICMyMGM5OTc7XHJcbiAgLS1icy1jeWFuOiAjMGRjYWYwO1xyXG4gIC0tYnMtd2hpdGU6ICNmZmY7XHJcbiAgLS1icy1ncmF5OiAjNmM3NTdkO1xyXG4gIC0tYnMtZ3JheS1kYXJrOiAjMzQzYTQwO1xyXG4gIC0tYnMtcHJpbWFyeTogIzBkNmVmZDtcclxuICAtLWJzLXNlY29uZGFyeTogIzZjNzU3ZDtcclxuICAtLWJzLXN1Y2Nlc3M6ICMxOTg3NTQ7XHJcbiAgLS1icy1pbmZvOiAjMGRjYWYwO1xyXG4gIC0tYnMtd2FybmluZzogI2ZmYzEwNztcclxuICAtLWJzLWRhbmdlcjogI2RjMzU0NTtcclxuICAtLWJzLWxpZ2h0OiAjZjhmOWZhO1xyXG4gIC0tYnMtZGFyazogIzIxMjUyOTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmFzaWNvXCI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJCYXNpY29cIjtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktZGFyayk7XHJcbiAgY29sb3I6IHZhcigtLWJzLWxpZ2h0KTtcclxufVxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDRyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBnYXA6IDJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIgdWwgbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB1bCBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICNjOWM5Yzk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE2NjM4O1xyXG4gIGNvbG9yOiB2YXIoLS1icy1saWdodCk7XHJcbn1cclxuLmhvbWUtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTByZW0gMzByZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJ0aXRsZSB0aXRsZVwiXHJcbiAgICBcInRleHQgaW1nXCJcclxuICAgIFwidGV4dCBpbWdcIjtcclxufVxyXG5cclxuLmhvbWUtd3JhcHBlciBoMSB7XHJcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA3cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaG9tZS13cmFwcGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmhvbWUtd3JhcHBlciAuc2lkZS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kYXJrKTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZGUtY29udGVudCBwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXgtd2lkdGg6IDYwY2g7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmFib3V0LXdyYXBwZXIsXHJcbi5jb250YWN0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIDAuNik7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXJlbTtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcbi5oZXJvIGgxIHtcclxuICBmb250LXNpemU6IDdyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5zdG9yeSB7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDJyZW07XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRyZW0gMDtcclxufVxyXG5cclxuLnN0b3J5IHAge1xyXG4gIG1heC13aWR0aDogNzVjaDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZzogOHJlbTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IHN0YXJ0O1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIGlucHV0IHtcclxuICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHRleHRhcmVhIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwOm50aC1jaGlsZCgzKSB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGVhbCk7XHJcbiAgY29sb3I6IHZhcigtLWJzLXdoaXRlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS1kYXJrKTtcclxuICBjb2xvcjogdmFyKC0tYnMtbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJEQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0Qsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDOzs7Y0FHWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7O0VBRXJCLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAtLWJzLWJsdWU6ICMwZDZlZmQ7XFxyXFxuICAtLWJzLWluZGlnbzogIzY2MTBmMjtcXHJcXG4gIC0tYnMtcHVycGxlOiAjNmY0MmMxO1xcclxcbiAgLS1icy1waW5rOiAjZDYzMzg0O1xcclxcbiAgLS1icy1yZWQ6ICNkYzM1NDU7XFxyXFxuICAtLWJzLW9yYW5nZTogI2ZkN2UxNDtcXHJcXG4gIC0tYnMteWVsbG93OiAjZmZjMTA3O1xcclxcbiAgLS1icy1ncmVlbjogIzE5ODc1NDtcXHJcXG4gIC0tYnMtdGVhbDogIzIwYzk5NztcXHJcXG4gIC0tYnMtY3lhbjogIzBkY2FmMDtcXHJcXG4gIC0tYnMtd2hpdGU6ICNmZmY7XFxyXFxuICAtLWJzLWdyYXk6ICM2Yzc1N2Q7XFxyXFxuICAtLWJzLWdyYXktZGFyazogIzM0M2E0MDtcXHJcXG4gIC0tYnMtcHJpbWFyeTogIzBkNmVmZDtcXHJcXG4gIC0tYnMtc2Vjb25kYXJ5OiAjNmM3NTdkO1xcclxcbiAgLS1icy1zdWNjZXNzOiAjMTk4NzU0O1xcclxcbiAgLS1icy1pbmZvOiAjMGRjYWYwO1xcclxcbiAgLS1icy13YXJuaW5nOiAjZmZjMTA3O1xcclxcbiAgLS1icy1kYW5nZXI6ICNkYzM1NDU7XFxyXFxuICAtLWJzLWxpZ2h0OiAjZjhmOWZhO1xcclxcbiAgLS1icy1kYXJrOiAjMjEyNTI5O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFzaWNvXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2Jhc2ljby53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJhc2ljb1xcXCI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzByZW0sIDFmcikpO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS1kYXJrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1icy1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjAlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwgbGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHVsIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjYzljOWM5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE2NjM4O1xcclxcbiAgY29sb3I6IHZhcigtLWJzLWxpZ2h0KTtcXHJcXG59XFxyXFxuLmhvbWUtd3JhcHBlciB7XFxyXFxuICBwYWRkaW5nOiAxMHJlbSAzMHJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcInRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICBcXFwidGV4dCBpbWdcXFwiXFxyXFxuICAgIFxcXCJ0ZXh0IGltZ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXdyYXBwZXIgaDEge1xcclxcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS13cmFwcGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtd3JhcHBlciAuc2lkZS1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWRhcmspO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWNvbnRlbnQgcCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1heC13aWR0aDogNjBjaDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyLFxcclxcbi5jb250YWN0LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC42KTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxufVxcclxcbi5oZXJvIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rvcnkge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcnkgcCB7XFxyXFxuICBtYXgtd2lkdGg6IDc1Y2g7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogOHJlbTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IHN0YXJ0O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAgaW5wdXQge1xcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwIGxhYmVsIHtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwOm50aC1jaGlsZCgzKSB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXA6bGFzdC1jaGlsZCB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAgYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXRlYWwpO1xcclxcbiAgY29sb3I6IHZhcigtLWJzLXdoaXRlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS1kYXJrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1icy1saWdodCk7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXdyYXBwZXJcIik7XHJcbiAgd3JhcHBlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImhlcm9cIj5cclxuICAgICAgICAgICAgPGgxPkFCT1VUIFVTPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIE9uY2UgdXBvbiBhIHRpbWUsIGluIGEgcXVhaW50IGFuZCBwaWN0dXJlc3F1ZSB2aWxsYWdlIG5lc3RsZWQgZGVlcCB3aXRoaW4gdGhlIHJvbGxpbmcgaGlsbHMgb2YgVHVzY2FueSwgdGhlcmUgbGl2ZWQgYSBtYW4gbmFtZWQgR2lvdmFubmkuIEdpb3Zhbm5pXHJcbiAgICAgICAgICAgICAgd2FzIGEgaHVtYmxlIGFuZCBraW5kLWhlYXJ0ZWQgc291bCwga25vd24gdGhyb3VnaG91dCB0aGUgdmlsbGFnZSBmb3IgaGlzIHVud2F2ZXJpbmcgcGFzc2lvbiBmb3IgY29va2luZy4gSGUgaGFkIGEgdGFsZW50IGZvciBjcmVhdGluZyB0aGUgbW9zdFxyXG4gICAgICAgICAgICAgIGV4cXVpc2l0ZSBkaXNoZXMsIGVhY2ggb25lIGEgbWFzdGVycGllY2Ugb2YgZmxhdm9yIGFuZCBwcmVzZW50YXRpb24uXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEdpb3Zhbm5pJ3MgbG92ZSBmb3IgY29va2luZyB3YXMgYm9ybiBmcm9tIHRoZSBkZWVwLXNlYXRlZCBtZW1vcmllcyBvZiBoaXMgY2hpbGRob29kLiBIaXMgcGFyZW50cywgTWFyaWEgYW5kIEFudG9uaW8sIGhhZCBvd25lZCBhIHNtYWxsIHRyYXR0b3JpYVxyXG4gICAgICAgICAgICAgIG9uIHRoZSBvdXRza2lydHMgb2YgdGhlIHZpbGxhZ2UsIGEgcGxhY2Ugd2hlcmUgbG9jYWxzIGFuZCB0cmF2ZWxlcnMgYWxpa2Ugd291bGQgZ2F0aGVyIHRvIHNhdm9yIHRoZSBkZWxlY3RhYmxlIGZsYXZvcnMgb2YgaG9tZW1hZGUgSXRhbGlhblxyXG4gICAgICAgICAgICAgIGN1aXNpbmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIE1hcmlhIHdhcyBhIGN1bGluYXJ5IGdlbml1cywgYSB3b21hbiB3aG8gY291bGQgdHVybiB0aGUgc2ltcGxlc3QgaW5ncmVkaWVudHMgaW50byBnYXN0cm9ub21pYyB3b25kZXJzIHRoYXQgbGVmdCBwYXRyb25zIHJhdmluZyBhYm91dCBoZXIgZGlzaGVzXHJcbiAgICAgICAgICAgICAgZm9yIHllYXJzIHRvIGNvbWUuIEFudG9uaW8sIGhlciBiZWxvdmVkIGh1c2JhbmQsIHdhcyB0aGUgaGVhcnQgYW5kIHNvdWwgb2YgdGhlIHRyYXR0b3JpYSwgYWx3YXlzIHJlYWR5IHdpdGggYSB3YXJtIHNtaWxlIGFuZCBhIGZyaWVuZGx5XHJcbiAgICAgICAgICAgICAgY29udmVyc2F0aW9uIGZvciBhbnlvbmUgd2hvIHdhbGtlZCB0aHJvdWdoIHRoZWlyIGRvb3IuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExpZmUgd2FzIGlkeWxsaWMgZm9yIHlvdW5nIEdpb3Zhbm5pIGFzIGhlIHdhdGNoZWQgaGlzIHBhcmVudHMgd29yayBzaWRlIGJ5IHNpZGUsIHRoZWlyIGxvdmUgZm9yIGVhY2ggb3RoZXIgYW5kIHRoZWlyIGNyYWZ0IGV2aWRlbnQgaW4gZXZlcnkgZGlzaFxyXG4gICAgICAgICAgICAgIHRoZXkgc2VydmVkLiBCdXQgdHJhZ2VkeSBzdHJ1Y2sgb25lIGZhdGVmdWwgZXZlbmluZyB3aGVuIGEgcG93ZXJmdWwgc3Rvcm0gcm9sbGVkIHRocm91Z2ggdGhlIHZpbGxhZ2UsIHVubGVhc2hpbmcgdG9ycmVudHMgb2YgcmFpbiBhbmQgZmllcmNlXHJcbiAgICAgICAgICAgICAgd2luZHMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFRoZSB0cmF0dG9yaWEsIG5lc3RsZWQgb24gdGhlIGJhbmtzIG9mIGEgZ2VudGxlIHJpdmVyLCB3YXMgaW51bmRhdGVkIHdpdGggd2F0ZXIgYXMgdGhlIHJpdmVyIG92ZXJmbG93ZWQgaXRzIGJhbmtzLiBHaW92YW5uaSdzIHBhcmVudHMsIE1hcmlhIGFuZFxyXG4gICAgICAgICAgICAgIEFudG9uaW8sIHdlcmUgdHJhcHBlZCBpbnNpZGUuIERlc3BlcmF0ZSBhdHRlbXB0cyB3ZXJlIG1hZGUgYnkgdGhlIHZpbGxhZ2VycyB0byBzYXZlIHRoZW0sIGJ1dCB0aGUgcmFnaW5nIHN0b3JtIHdhcyB1bmZvcmdpdmluZy4gSW4gdGhlIGVuZCwgdGhleVxyXG4gICAgICAgICAgICAgIGNvdWxkIG9ubHkgd2F0Y2ggaW4gaGVscGxlc3MgaG9ycm9yIGFzIHRoZSB3YXRlcnMgY2xhaW1lZCB0aGUgdHJhdHRvcmlhIGFuZCBpdHMgYmVsb3ZlZCBvd25lcnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEdpb3Zhbm5pIHdhcyBkZXZhc3RhdGVkIGJ5IHRoZSBsb3NzIG9mIGhpcyBwYXJlbnRzIGFuZCB0aGUgdHJhdHRvcmlhLiBIZSB3YXMgbGVmdCB3aXRoIG5vdGhpbmcgYnV0IHRoZSBwcmVjaW91cyBtZW1vcmllcyBvZiB0aGVpciBjdWxpbmFyeVxyXG4gICAgICAgICAgICAgIGNyZWF0aW9ucyBhbmQgdGhlIGRyZWFtcyB0aGV5IGhhZCBzaGFyZWQgdG9nZXRoZXIuIERldGVybWluZWQgdG8gaG9ub3IgdGhlaXIgbGVnYWN5LCBoZSB2b3dlZCB0byByZWJ1aWxkIHRoZWlyIHRyYXR0b3JpYSBhbmQgc2hhcmUgdGhlaXIgcmVjaXBlc1xyXG4gICAgICAgICAgICAgIHdpdGggdGhlIHdvcmxkLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBXaXRoIHRoZSBoZWxwIG9mIHRoZSB2aWxsYWdlcnMsIEdpb3Zhbm5pIHdvcmtlZCB0aXJlbGVzc2x5IHRvIHJlY29uc3RydWN0IHRoZSB0cmF0dG9yaWEgZnJvbSB0aGUgZ3JvdW5kIHVwLiBJdCB0b29rIHllYXJzIG9mIGhhcmQgd29yayBhbmRcclxuICAgICAgICAgICAgICBkZWRpY2F0aW9uLCBidXQgZXZlbnR1YWxseSwgdGhlIHRyYXR0b3JpYSByb3NlIGZyb20gdGhlIGFzaGVzLCBtb3JlIGJlYXV0aWZ1bCB0aGFuIGV2ZXIgYmVmb3JlLiBHaW92YW5uaSBhZG9ybmVkIHRoZSB3YWxscyB3aXRoIHBob3RvZ3JhcGhzIG9mIGhpc1xyXG4gICAgICAgICAgICAgIHBhcmVudHMgYW5kIHRoZWlyIGNyZWF0aW9ucywgdHVybmluZyB0aGUgdHJhdHRvcmlhIGludG8gYSBsaXZpbmcgdHJpYnV0ZSB0byB0aGVpciBtZW1vcnkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEdpb3Zhbm5pJ3MgdHJhdHRvcmlhIGJlY2FtZSBmYW1vdXMgZmFyIGFuZCB3aWRlLCBkcmF3aW5nIGZvb2QgZW50aHVzaWFzdHMgYW5kIHRyYXZlbGVycyBmcm9tIGFjcm9zcyB0aGUgZ2xvYmUuIEhpcyBkaXNoZXMgd2VyZSBhIHRlc3RhbWVudCB0byBoaXNcclxuICAgICAgICAgICAgICBwYXJlbnRzJyBjdWxpbmFyeSBnZW5pdXMsIGFuZCBlYWNoIGJpdGUgd2FzIGEgdGFzdGUgb2YgdGhlIGxvdmUgYW5kIHBhc3Npb24gdGhhdCBNYXJpYSBhbmQgQW50b25pbyBoYWQgcG91cmVkIGludG8gdGhlaXIgY3JhZnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFlldCwgYXMgR2lvdmFubmkgc3Rvb2QgaW4gaGlzIGJ1c3RsaW5nIHRyYXR0b3JpYSwgaGUgY291bGRuJ3QgaGVscCBidXQgZmVlbCB0aGUgYWJzZW5jZSBvZiBoaXMgcGFyZW50cywgZXNwZWNpYWxseSBkdXJpbmcgdGhvc2UgcXVpZXQgbW9tZW50cyBpblxyXG4gICAgICAgICAgICAgIHRoZSBraXRjaGVuIHdoZW4gaGUga25ldyB0aGV5IHNob3VsZCBoYXZlIGJlZW4gYnkgaGlzIHNpZGUuIFRoZSB0cmFnaWMgb3JpZ2lucyBvZiBoaXMgcmVzdGF1cmFudCB3ZXJlIGEgY29uc3RhbnQgcmVtaW5kZXIgb2YgdGhlIHByaWNlIGhlIGhhZCBwYWlkXHJcbiAgICAgICAgICAgICAgdG8gcHJlc2VydmUgdGhlaXIgbGVnYWN5LlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBBbmQgc28sIEdpb3Zhbm5pJ3MgdHJhdHRvcmlhIHRocml2ZWQsIGEgcGxhY2Ugd2hlcmUgdGhlIGZsYXZvcnMgb2YgdGhlIHBhc3QgbWluZ2xlZCB3aXRoIHRoZSBwcmVzZW50LCBhbmQgd2hlcmUgdGhlIHNwaXJpdCBvZiBNYXJpYSBhbmQgQW50b25pb1xyXG4gICAgICAgICAgICAgIGxpdmVkIG9uIHRocm91Z2ggZXZlcnkgZGlzaCBzZXJ2ZWQuIEJ1dCB0aGUgc2FkbmVzcyBpbiBHaW92YW5uaSdzIGV5ZXMgd2FzIGEgcmVtaW5kZXIgdGhhdCBiZWhpbmQgdGhlIGRlbGVjdGFibGUgY3JlYXRpb25zIHdhcyBhIHN0b3J5IG9mIGxvdmUsXHJcbiAgICAgICAgICAgICAgbG9zcywgYW5kIHRoZSB1bmR5aW5nIGRldGVybWluYXRpb24gdG8ga2VlcCBhIGN1bGluYXJ5IGRyZWFtIGFsaXZlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gO1xyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhZ2U6IFwiYWJvdXRVc1wiLFxyXG4gICAgZWxlbWVudDogd3JhcHBlcixcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC13cmFwcGVyXCIpO1xyXG4gIHdyYXBwZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICAgICAgICAgIDxoMT5DT05UQUNUIFVTPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBpZD1cIm1lc3NhZ2VcIiBjb2xzPVwiNTBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+YDtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYWdlOiBcImNvbnRhY3RcIixcclxuICAgIGVsZW1lbnQ6IHdyYXBwZXIsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgSW1nMSBmcm9tIFwiLi4vaW1nMS5qcGdcIjtcclxuaW1wb3J0IEltZzIgZnJvbSBcIi4uL2ltZzIuanBnXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtd3JhcHBlclwiKTtcclxuICB3cmFwcGVyLmlubmVySFRNTCA9IGA8aDE+V2VsY29tZSB0byB0aGUgc2hvdzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFN0ZXAgaW50byBhIHdvcmxkIG9mIGN1bGluYXJ5IGRlbGlnaHQgYXQgW1Jlc3RhdXJhbnQgTmFtZV0sIHdoZXJlIGV2ZXJ5IHZpc2l0IHByb21pc2VzIGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLiBPdXIgcmVzdGF1cmFudCBpcyBkZWRpY2F0ZWRcclxuICAgICAgICAgICAgICAgIHRvIHNlcnZpbmcgZXhxdWlzaXRlIGN1aXNpbmUgaW4gYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlLiBGcm9tIG91ciBjYXJlZnVsbHkgY3JhZnRlZCBtZW51cyB0byBvdXIgYXR0ZW50aXZlIHN0YWZmLCB3ZSBhaW0gdG8gY3JlYXRlIHRoZVxyXG4gICAgICAgICAgICAgICAgcGVyZmVjdCBzZXR0aW5nIGZvciB5b3VyIG5leHQgZGluaW5nIGFkdmVudHVyZS4gQXQgW1Jlc3RhdXJhbnQgTmFtZV0sIHdlIHRha2UgcHJpZGUgaW4gb3VyIGNvbW1pdG1lbnQgdG8gY3VsaW5hcnkgZXhjZWxsZW5jZS4gT3VyIHRhbGVudGVkIGNoZWZzXHJcbiAgICAgICAgICAgICAgICBhcmUgcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyBkaXNoZXMgdGhhdCB0YW50YWxpemUgeW91ciB0YXN0ZSBidWRzLiBVc2luZyBvbmx5IHRoZSBmaW5lc3QgYW5kIGZyZXNoZXN0IGluZ3JlZGllbnRzLCB3ZSBvZmZlciBhIGRpdmVyc2UgbWVudSB0aGF0XHJcbiAgICAgICAgICAgICAgICBjYXRlcnMgdG8gYWxsIHBhbGF0ZXMsIGZyb20gY2xhc3NpYyBjb21mb3J0IGZvb2RzIHRvIGlubm92YXRpdmUsIGdvdXJtZXQgY3JlYXRpb25zLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEF0IFtSZXN0YXVyYW50IE5hbWVdLCB3ZSB0YWtlIHByaWRlIGluIG91ciBjb21taXRtZW50IHRvIGN1bGluYXJ5IGV4Y2VsbGVuY2UuIE91ciB0YWxlbnRlZCBjaGVmcyBhcmUgcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyBkaXNoZXMgdGhhdFxyXG4gICAgICAgICAgICAgICAgdGFudGFsaXplIHlvdXIgdGFzdGUgYnVkcy4gVXNpbmcgb25seSB0aGUgZmluZXN0IGFuZCBmcmVzaGVzdCBpbmdyZWRpZW50cywgd2Ugb2ZmZXIgYSBkaXZlcnNlIG1lbnUgdGhhdCBjYXRlcnMgdG8gYWxsIHBhbGF0ZXMsIGZyb20gY2xhc3NpY1xyXG4gICAgICAgICAgICAgICAgY29tZm9ydCBmb29kcyB0byBpbm5vdmF0aXZlLCBnb3VybWV0IGNyZWF0aW9ucy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcxLmpwZ1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltZzIuanBnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgRGluaW5nIGF0IFtSZXN0YXVyYW50IE5hbWVdIGlzIG5vdCBqdXN0IGFib3V0IHRoZSBmb29kOyBpdCdzIGFuIGltbWVyc2l2ZSBleHBlcmllbmNlIGZvciBhbGwgeW91ciBzZW5zZXMuIE91ciB0aG91Z2h0ZnVsbHkgZGVzaWduZWQgaW50ZXJpb3IsXHJcbiAgICAgICAgICAgICAgICBzb290aGluZyBhbWJpYW5jZSwgYW5kIGNhcmVmdWxseSBjdXJhdGVkIG11c2ljIHNlbGVjdGlvbiBjcmVhdGUgYSBoYXJtb25pb3VzIGF0bW9zcGhlcmUgdGhhdCBjb21wbGVtZW50cyB0aGUgZmxhdm9ycyBvbiB5b3VyIHBsYXRlLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFdoZXRoZXIgeW91J3JlIGEgc2VhZm9vZCBlbnRodXNpYXN0LCBhIHZlZ2V0YXJpYW4sIG9yIGEgY2Fybml2b3JlIGNyYXZpbmcgYSBqdWljeSBzdGVhaywgb3VyIG1lbnUgaGFzIHNvbWV0aGluZyB0byBzYXRpc2Z5IGV2ZXJ5IGNyYXZpbmcuIFdlIGFsc29cclxuICAgICAgICAgICAgICAgIG9mZmVyIGEgd2lkZSByYW5nZSBvZiBnbHV0ZW4tZnJlZSwgdmVnYW4sIGFuZCBhbGxlcmd5LWZyaWVuZGx5IG9wdGlvbnMsIGVuc3VyaW5nIHRoYXQgZXZlcnlvbmUgY2FuIGVuam95IGEgbWVtb3JhYmxlIG1lYWwuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgRW5oYW5jZSB5b3VyIGRpbmluZyBleHBlcmllbmNlIHdpdGggb3VyIGhhbmRjcmFmdGVkIGNvY2t0YWlscyBhbmQgYW4gZXh0ZW5zaXZlIHdpbmUgbGlzdC4gT3VyIGV4cGVydCBtaXhvbG9naXN0cyB0YWtlIHByaWRlIGluIGNvbmNvY3RpbmcgdW5pcXVlXHJcbiAgICAgICAgICAgICAgICBsaWJhdGlvbnMgdGhhdCBwZXJmZWN0bHkgY29tcGxlbWVudCB5b3VyIG1lYWwuIEZyb20gY2xhc3NpYyBjb2NrdGFpbHMgdG8gb3VyIHNpZ25hdHVyZSBjcmVhdGlvbnMsIHlvdSdyZSBpbiBmb3IgYSB0cmVhdC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IEltZzE7XHJcbiAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpWzFdLnNyYyA9IEltZzI7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgcmV0dXJuIHsgcGFnZTogXCJob21lXCIsIGVsZW1lbnQ6IHdyYXBwZXIgfTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vbW9kdWxlcy9hYm91dFwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIjtcclxuXHJcbmltcG9ydCBJbWcxIGZyb20gXCIuL2ltZzEuanBnXCI7XHJcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltZzIuanBnXCI7XHJcblxyXG5sZXQgY3VyUGFnZSA9IFwiaG9tZVwiO1xyXG5cclxuY29uc3QgY2hhbmdlUGFnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiICYmIGN1clBhZ2UgIT0gXCJob21lXCIpIHJldHVybiAoY3VyUGFnZSA9IEhvbWUoKS5wYWdlKTtcclxuICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gXCJBYm91dCBVc1wiICYmIGN1clBhZ2UgIT0gXCJhYm91dFVzXCIpIHJldHVybiAoY3VyUGFnZSA9IEFib3V0KCkucGFnZSk7XHJcbiAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09IFwiQ29udGFjdFwiICYmIGN1clBhZ2UgIT0gXCJjb250YWN0XCIpIHJldHVybiAoY3VyUGFnZSA9IENvbnRhY3QoKS5wYWdlKTtcclxufTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyIHVsIGxpXCIpLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVBhZ2UpKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gSW1nMTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKVsxXS5zcmMgPSBJbWcyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=