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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet currentSlide = 0;\nconst slides = document.querySelectorAll(\".slide\")\nconst dots = document.querySelectorAll('.dot')\n\nconst init = (n) => {\n  slides.forEach((slide, index) => {\n    slide.style.display = \"none\"\n    dots.forEach((dot, index) => {\n      dot.classList.remove(\"active\")\n    })\n  })\n  slides[n].style.display = \"block\"\n  dots[n].classList.add(\"active\")\n}\n\nconst next = () => {\n  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++\n  init(currentSlide)\n}\n\ndocument.querySelector(\".next\").addEventListener('click', next)\n\ndocument.querySelector(\".prev\").addEventListener('click', (e) => {\n  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--\n  init(currentSlide)\n})\n\nsetInterval(() => {\n  next()\n}, 5000);\n\ndots.forEach((dot, i) => {\n  dot.addEventListener(\"click\", () => {\n    console.log(currentSlide)\n    init(i)\n    currentSlide = i\n  })\n\n})\n\ndocument.addEventListener(\"DOMContentLoaded\", init(currentSlide))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Cannot find module 'node-sass'\\nRequire stack:\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/getDefaultSassImplementation.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/getSassImplementation.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/index.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/cjs.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/loadLoader.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/LoaderRunner.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack/lib/NormalModule.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack/lib/NormalModuleFactory.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack/lib/Compiler.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack/lib/webpack.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack-cli/bin/utils/validate-options.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack-cli/bin/utils/convert-argv.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack-cli/bin/cli.js\\n- /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack/bin/webpack.js\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:962:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:838:27)\\n    at Module.require (internal/modules/cjs/loader.js:1022:19)\\n    at require (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at getDefaultSassImplementation (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/getDefaultSassImplementation.js:24:10)\\n    at getSassImplementation (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/getSassImplementation.js:19:72)\\n    at Object.loader (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/sass-loader/dist/index.js:40:61)\\n    at /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at runSyncOrAsync (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\\n    at Array.<anonymous> (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /home/dhatguy/Documents/Workspace/theOdinProject/image-slider/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)\");\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });