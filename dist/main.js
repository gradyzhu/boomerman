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

/***/ "./src/crate.js":
/*!**********************!*\
  !*** ./src/crate.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Crate {\n  constructor(map, ctx) {\n    this.map = map;\n    this.ctx = ctx;\n    this.drawAll();\n  }\n\n  draw(pos) {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"#9f6343\";\n    this.ctx.fillRect(pos[0], pos[1], 50, 50);\n    this.ctx.stroke();\n  }  \n\n  drawAll() {\n    let rowValues = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];\n    let colValues = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650]; \n\n    let crateCount = 0;\n    while (crateCount < 25) {\n      let row = Math.floor(Math.random() * rowValues.length);\n      let col = Math.floor(Math.random() * colValues.length);\n      if (this.map[row][col] == 0) {\n        this.draw([colValues[col], rowValues[row]]);\n        this.map[row][col] = 2;\n        crateCount++;\n      }\n    }\n  }\n}\n\nmodule.exports = Crate;\n\n//# sourceURL=webpack:///./src/crate.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst Map = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n\nclass Game {\n  constructor({ctx, canvas}) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.map = new Map({canvas: canvas, ctx: this.ctx});\n    this.start();\n  }\n\n  start() {\n    let player = new Player({ \n      length: 50,  \n      canvas: canvas,\n      ctx: this.ctx, \n      map: this.map\n    });\n\n    document.addEventListener('keydown', function(e) {\n      player.move(e);\n    });\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  var canvas = document.getElementById(\"canvas\");\n  var c = canvas.getContext(\"2d\");\n  new Game({ctx: c, canvas: canvas});\n});\n\nconsole.log(\"webpack is working!\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Obstacle = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\nconst Crate = __webpack_require__(/*! ./crate.js */ \"./src/crate.js\");\n\nclass Map {\n  constructor({canvas, ctx}) {\n    this.map = [\n      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n    ];\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.collision = true;\n    \n    new Obstacle(this.map, this.ctx);\n    new Crate(this.map, this.ctx);\n  }\n\n}\n\nmodule.exports = Map;\n\n\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Obstacle {\n  constructor(map, ctx) {\n    this.map = map;\n    this.ctx = ctx;\n    this.drawObstacles();\n  }\n\n  drawObstacle(pos) {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"#848685\";\n    this.ctx.fillRect(pos[0], pos[1], 50, 50);\n    this.ctx.stroke();\n  }  \n\n  drawObstacles() {\n    for (let i = 0; i < this.map.length; i++) {\n      for (let j = 0; j < this.map[0].length; j++) {\n        if (this.map[i][j] != 0) {\n          this.drawObstacle([j * 50, i * 50]);\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = Obstacle;\n\n//# sourceURL=webpack:///./src/obstacle.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Player {\n  constructor({length, ctx, canvas, map}) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.x = 50;\n    this.y = 50;\n    this.dx = 10;\n    this.dy = 10;\n    this.length = length;\n    this.color = \"yellow\";\n    this.map = map;\n    this.draw();\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.x, this.y, this.length, this.length);\n    this.ctx.stroke();\n  }\n\n  move(e) {\n    this.ctx.clearRect(this.x, this.y, this.length, this.length);\n\n    // if (e.keyCode==39 && !this.map.collision) {\n    //   this.x += this.dx;\n    // }\n    if (e.keyCode==39) this.x += this.dx;\n    if (e.keyCode==37) this.x -= this.dx;\n    if (e.keyCode==40) this.y += this.dy;\n    if (e.keyCode==38) this.y -= this.dy;\n    \n    this.draw();\n    // if (this.x < 0) this.x += this.dx;\n    // if (this.x > canvas.width - this.length) {\n    //   this.x -= this.dx;\n    // }\n    // if (this.y < 0) this.y = this.y + this.dy;\n    // if (this.y > canvas.height - this.length) {\n    //   this.y -= this.dy;\n    // }\n  }\n\n  // drop() {\n  //   bomb = newBomb();\n  // }\n}\n\nmodule.exports = Player;\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });