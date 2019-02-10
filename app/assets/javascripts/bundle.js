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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hoarder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./badCircle.js":
/*!**********************!*\
  !*** ./badCircle.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./helper.js");


class Circle {
  constructor(ctx, canvas, dx, dy) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.dx = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomNegMovement"])();
    this.dy = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomNegMovement"])();
    this.parameters = {
      x: Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomSpawn"])(850, 150),
      y: Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomSpawn"])(825, 150),
      radius: 10
    };
  }

  drawCircle() {
    let {
      x,
      y,
      radius
    } = this.parameters;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    if (this.parameters.x + this.dx > this.canvas.width - this.parameters.radius || this.parameters.x + this.dx < this.parameters.radius && this.dx !== 0) {
      this.dx = -this.dx;
    } else if (this.parameters.y + this.dy > this.canvas.height - this.parameters.radius || this.parameters.y + this.dy < this.parameters.radius && this.dy !== 0) {
      this.dy = -this.dy;
    }

    this.parameters.x += this.dx;
    this.parameters.y += this.dy;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./dot.js":
/*!****************!*\
  !*** ./dot.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./helper.js");


class Dot {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.parameter = {
      x: Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomSpawn"])(850, 150),
      y: Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomSpawn"])(825, 150),
      radius: 10
    };
  }

  drawDot() {
    let {
      x,
      y,
      radius
    } = this.parameter;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
    this.ctx.closePath();
  }

  reposition() {
    this.parameter.x = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomSpawn"])(850, 150);
    this.parameter.y = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomSpawn"])(850, 150);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dot);

/***/ }),

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/*! exports provided: getRandomSpawn, getRandomMovement, getRandomNegMovement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomSpawn", function() { return getRandomSpawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomMovement", function() { return getRandomMovement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNegMovement", function() { return getRandomNegMovement; });
const getRandomSpawn = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getRandomMovement = () => {
  return Math.floor(Math.random() * 4);
};
const getRandomNegMovement = () => {
  return -Math.floor(Math.random() * 4);
};

/***/ }),

/***/ "./hoarder.js":
/*!********************!*\
  !*** ./hoarder.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./player.js");
/* harmony import */ var _badCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badCircle */ "./badCircle.js");
/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dot */ "./dot.js");



document.addEventListener("DOMContentLoaded", () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var dot = new _dot__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvas);
  var player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvas);
  const circles = []; // var startCircle = new Circle(ctx, canvas, dx, dy);
  // circles.push(startCircle);
  // key handler 

  var rightPressed = false;
  var leftPressed = false;
  var upPressed = false;
  var downPressed = false;
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    switch (e.key) {
      case "ArrowRight":
        rightPressed = true;
        break;

      case "ArrowLeft":
        leftPressed = true;
        break;

      case "ArrowUp":
        upPressed = true;
        break;

      case "ArrowDown":
        downPressed = true;
        break;

      default:
        break;
    }
  }

  function keyUpHandler(e) {
    switch (e.key) {
      case "ArrowRight":
        rightPressed = false;
        break;

      case "ArrowLeft":
        leftPressed = false;
        break;

      case "ArrowUp":
        upPressed = false;
        break;

      case "ArrowDown":
        downPressed = false;

      default:
        break;
    }
  }

  function drawBorder() {
    ctx.beginPath();
    ctx.rect(150, 150, 700, 700);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }

  function drawHeader() {
    ctx.font = "40px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Hoarder", 425, 90);
  }

  function between(x, min, max) {
    return x >= min && x <= max;
  } // high score functionality, call in game over mechanics


  function addHighscoreToDocument() {
    var highScoreBox = document.getElementById("high-score-list");
    var highScoreContent = document.createTextNode(`${player.score}`);
    highScoreBox.appendChild(highScoreContent);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeader();
    drawBorder();
    dot.drawDot();
    player.drawPlayer();
    circles.forEach(circle => {
      circle.drawCircle();
      circle.move();
    });
    player.drawScore(); // player movement and wall collision mechanics 

    if (rightPressed && player.parameters.x < canvas.width - player.parameters.radius - 150) {
      player.updatePosition("right", 5);
    } else if (leftPressed && player.parameters.x > player.parameters.radius + 150) {
      player.updatePosition("left", 5);
    } else if (upPressed && player.parameters.y > player.parameters.radius + 150) {
      player.updatePosition("up", 5);
    } else if (downPressed && player.parameters.y < canvas.height - player.parameters.radius - 150) {
      player.updatePosition("down", 5);
    } // player collect dots 


    if (between(dot.parameter.x, player.parameters.x - player.parameters.radius, player.parameters.x + player.parameters.radius) && between(dot.parameter.y, player.parameters.y - player.parameters.radius, player.parameters.y + player.parameters.radius)) {
      dot.reposition();
      player.collision();
      circles.push(new _badCircle__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas, 0, 5));
    } // circle collision 


    circles.forEach(circle => {
      if (between(circle.parameters.x, player.parameters.x - player.parameters.radius, player.parameters.x + player.parameters.radius) && between(circle.parameters.y, player.parameters.y - player.parameters.radius, player.parameters.y + player.parameters.radius)) {
        player.circleCollision();
      }
    });
  }

  setInterval(draw, 10);
});

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Player {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.parameters = {
      x: 500,
      y: 500,
      radius: 40
    };
    this.score = 0;
  }

  drawPlayer() {
    let {
      x,
      y,
      radius
    } = this.parameters;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  updatePosition(direction, num) {
    switch (direction) {
      case "right":
        this.parameters.x += num;
        break;

      case "left":
        this.parameters.x -= num;
        break;

      case "up":
        this.parameters.y -= num;
        break;

      case "down":
        this.parameters.y += num;
        break;

      default:
        break;
    }
  }

  collision() {
    this.score += 1;
  }

  circleCollision() {
    this.score -= 3;

    if (this.score <= 0) {
      alert("game over");
    }
  }

  drawScore() {
    this.ctx.font = "24px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 750, 120);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map