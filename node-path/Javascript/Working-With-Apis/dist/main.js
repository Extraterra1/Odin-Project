/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const img = document.querySelector('img');\r\nconst searchBtn = document.querySelector('button');\r\nconst key = atob('QlF2djBUT2ZTeWJSWG1ndjJObmk5bkc0a0lQU3BnTnU=');\r\n\r\nconst fetchJSON = async (url) => {\r\n  const res = await fetch(url, { mode: 'cors' });\r\n  return res.json();\r\n};\r\n\r\nconst getGIF = async () => {\r\n  const res = await fetchJSON(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=goat`);\r\n  const imgUrl = res.data.images.original.url;\r\n  img.src = imgUrl;\r\n};\r\n\r\ngetGIF();\r\nconst handleSearchClick = async function (evt) {\r\n  evt.preventDefault();\r\n  const searchTerm = this.parentElement.querySelector('input').value;\r\n  if (searchTerm.length < 1) return alert('come on bro');\r\n\r\n  const res = await fetchJSON(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`);\r\n  const imgUrl = res.data.images.original.url;\r\n  img.src = imgUrl;\r\n};\r\n\r\nsearchBtn.addEventListener('click', handleSearchClick);\r\n\n\n//# sourceURL=webpack://working-with-apis/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;