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

/***/ "./src/code/buttons.js":
/*!*****************************!*\
  !*** ./src/code/buttons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonEvents\": () => (/* binding */ buttonEvents),\n/* harmony export */   \"resetBtn\": () => (/* binding */ resetBtn)\n/* harmony export */ });\nconst buttonEvents = (desiredLocationData) => {\r\n  const tempBtn = document.getElementById('temp-btn');\r\n  const temperature = document.getElementById('temperature-text');\r\n  const feels = document.getElementById('feel-txt');\r\n\r\n  tempBtn.addEventListener('change', function (e) {\r\n    if (tempBtn.checked) {\r\n      temperature.textContent = desiredLocationData.temperatureF + '°F';\r\n      feels.textContent = desiredLocationData.fellsLikeF + '°F';\r\n    } else {\r\n      temperature.textContent = desiredLocationData.temperatureC + '°C';\r\n      feels.textContent = desiredLocationData.fellsLikeC + '°C';\r\n    }\r\n  });\r\n};\r\n\r\nconst resetBtn = () => {\r\n  const tempBtn = document.getElementById('temp-btn');\r\n  tempBtn.checked = false;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/code/buttons.js?");

/***/ }),

/***/ "./src/code/newSearch.js":
/*!*******************************!*\
  !*** ./src/code/newSearch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rdyToSearch\": () => (/* binding */ rdyToSearch)\n/* harmony export */ });\n/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherFetch */ \"./src/code/weatherFetch.js\");\n\r\n\r\nconst rdyToSearch = (() => {\r\n  const searchInput = document.querySelector('input');\r\n  const searchBtn = document.getElementById('search-btn');\r\n  searchInput.addEventListener('keypress', function (e) {\r\n    if (e.key === 'Enter') {\r\n      (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchInput.value);\r\n    }\r\n  });\r\n  searchBtn.addEventListener('click', function (e) {\r\n    (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchInput.value);\r\n  });\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/code/newSearch.js?");

/***/ }),

/***/ "./src/code/process-display.js":
/*!*************************************!*\
  !*** ./src/code/process-display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayData\": () => (/* binding */ displayData),\n/* harmony export */   \"processData\": () => (/* binding */ processData)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/code/buttons.js\");\n\r\n\r\nconst processData = (weatherData) => {\r\n  const locationTime = weatherData.location.localtime.split(' ');\r\n  const locationData = {\r\n    locationName: weatherData.location.name,\r\n    country: weatherData.location.country,\r\n    localTime: locationTime[1],\r\n    conditionIcon: weatherData.current.condition.icon,\r\n    conditionText: weatherData.current.condition.text,\r\n    temperatureC: weatherData.current.temp_c,\r\n    temperatureF: weatherData.current.temp_f,\r\n    fellsLikeC: weatherData.current.feelslike_c,\r\n    fellsLikeF: weatherData.current.feelslike_f,\r\n    precipMM: weatherData.current.precip_mm,\r\n    humidity: weatherData.current.humidity,\r\n  };\r\n  return locationData;\r\n};\r\n\r\nconst displayData = (desiredLocationData) => {\r\n  const locationName = document.getElementById('city-country-name');\r\n  const localTime = document.getElementById('city-time');\r\n  const imageCont = document.querySelector('#condition-icon');\r\n  const conditionText = document.getElementById('condition-text');\r\n  const temperature = document.getElementById('temperature-text');\r\n  const feels = document.getElementById('feel-txt');\r\n  const precip = document.getElementById('precip-txt');\r\n  const humidity = document.getElementById('humty-txt');\r\n  locationName.textContent =\r\n    desiredLocationData.locationName +\r\n    ' ' +\r\n    '/' +\r\n    ' ' +\r\n    desiredLocationData.country;\r\n  localTime.textContent = desiredLocationData.localTime;\r\n  imageCont.src = desiredLocationData.conditionIcon;\r\n  conditionText.textContent = desiredLocationData.conditionText;\r\n  temperature.textContent = desiredLocationData.temperatureC + '°C';\r\n  feels.textContent = desiredLocationData.fellsLikeC + '°C';\r\n  precip.textContent = desiredLocationData.precipMM + 'mm';\r\n  humidity.textContent = desiredLocationData.humidity + '%';\r\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.buttonEvents)(desiredLocationData);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/code/process-display.js?");

/***/ }),

/***/ "./src/code/resetSearch.js":
/*!*********************************!*\
  !*** ./src/code/resetSearch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resetInput = () => {\r\n  const searchInput = document.getElementById('location');\r\n  searchInput.value = '';\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetInput);\r\n\n\n//# sourceURL=webpack://weather-app/./src/code/resetSearch.js?");

/***/ }),

/***/ "./src/code/weatherFetch.js":
/*!**********************************!*\
  !*** ./src/code/weatherFetch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _process_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-display */ \"./src/code/process-display.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/code/buttons.js\");\n/* harmony import */ var _resetSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetSearch */ \"./src/code/resetSearch.js\");\n\r\n\r\n\r\n\r\nasync function getWeather(location) {\r\n  try {\r\n    const response = await fetch(\r\n      `http://api.weatherapi.com/v1/forecast.json?key=217f668dd0994a86a21160307220305&q=${location}`,\r\n      {\r\n        mode: 'cors',\r\n      }\r\n    );\r\n    const weatherData = await response.json();\r\n    const desiredLocationData = (0,_process_display__WEBPACK_IMPORTED_MODULE_0__.processData)(weatherData);\r\n    (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.resetBtn)();\r\n    (0,_process_display__WEBPACK_IMPORTED_MODULE_0__.displayData)(desiredLocationData);\r\n    (0,_resetSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  } catch (err) {\r\n    alert('Sorry, that´s not a valid location');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/code/weatherFetch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_weatherFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/weatherFetch */ \"./src/code/weatherFetch.js\");\n/* harmony import */ var _code_newSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/newSearch */ \"./src/code/newSearch.js\");\n\r\n\r\n\r\n(0,_code_weatherFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('PUEBLA');\r\n// rdyToSearch();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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