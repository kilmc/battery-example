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
/******/ 	return __webpack_require__(__webpack_require__.s = "./input/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./input/Component.js":
/*!****************************!*\
  !*** ./input/Component.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Component = function Component() {\n  return React.createElement('div', { className: 'bg-cover bg-pink_50 mb50-md' });\n};\n\nexports.default = Component;\n\n//# sourceURL=webpack:///./input/Component.js?");

/***/ }),

/***/ "./input/index.js":
/*!************************!*\
  !*** ./input/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Component = __webpack_require__(/*! ./Component */ \"./input/Component.js\");\n\nvar _Component2 = _interopRequireDefault(_Component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NavLink = function NavLink(_ref) {\n  var active = _ref.active,\n      children = _ref.children;\n\n  var classes = styles('white fz18px mr1', active ? 'text-underline' : 'text-decoration-none');\n  return React.createElement(\n    'a',\n    { className: classes },\n    children\n  );\n};\n\nvar Header = function Header() {\n  return React.createElement(\n    'header',\n    { className: 'bg-black p3' },\n    React.createElement(\n      'nav',\n      { className: 'text-uppercase' },\n      React.createElement(\n        NavLink,\n        null,\n        'Home'\n      ),\n      React.createElement(\n        NavLink,\n        null,\n        'About'\n      ),\n      React.createElement(\n        NavLink,\n        null,\n        'Links'\n      ),\n      React.createElement(\n        NavLink,\n        null,\n        'Contact'\n      )\n    )\n  );\n};\nvar Content = function Content() {\n  return React.createElement(\n    'section',\n    { className: 'bg-pink_30 flex-auto p3' },\n    React.createElement(\n      'h2',\n      null,\n      'A bunch of nice content'\n    ),\n    React.createElement(_Component2.default, null)\n  );\n};\nvar Footer = function Footer() {\n  return React.createElement(\n    'footer',\n    { className: 'bg-black white h15vh p3 border-box' },\n    'This is a little footer thingy'\n  );\n};\n\nvar App = function App() {\n  return React.createElement(\n    'div',\n    { className: 'flex flex-column min-h100vh justify-between w100p' },\n    React.createElement(Header, null),\n    React.createElement(Content, null),\n    React.createElement(Footer, null)\n  );\n};\n\n//# sourceURL=webpack:///./input/index.js?");

/***/ })

/******/ });