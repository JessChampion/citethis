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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 346);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(27);



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b);
        }) : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlaceholder__ = __webpack_require__(27);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(__WEBPACK_IMPORTED_MODULE_0__isPlaceholder__["a" /* default */])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlaceholder__ = __webpack_require__(27);




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _dispatchable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isTransformer__ = __webpack_require__(44);



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_1__isTransformer__["a" /* default */])(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_curryN__ = __webpack_require__(29);





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function curryN(length, fn) {
  if (length === 1) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(fn);
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(length, Object(__WEBPACK_IMPORTED_MODULE_3__internal_curryN__["a" /* default */])(length, [], fn));
});
/* harmony default export */ __webpack_exports__["a"] = (curryN);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _has;
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xmap__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(13);








/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/map', 'map'], __WEBPACK_IMPORTED_MODULE_4__internal_xmap__["a" /* default */], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return Object(__WEBPACK_IMPORTED_MODULE_5__curryN__["a" /* default */])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, Object(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(functor));
    default:
      return Object(__WEBPACK_IMPORTED_MODULE_2__internal_map__["a" /* default */])(fn, functor);
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xwrap__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind__ = __webpack_require__(70);




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](Object(__WEBPACK_IMPORTED_MODULE_2__bind__["a" /* default */])(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = Object(__WEBPACK_IMPORTED_MODULE_1__xwrap__["a" /* default */])(fn);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_equals__ = __webpack_require__(155);



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function equals(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_equals__["a" /* default */])(a, b, [], []);
});
/* harmony default export */ __webpack_exports__["a"] = (equals);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _concat;
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);



/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
/* harmony default export */ __webpack_exports__["a"] = (slice);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arity;
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArguments__ = __webpack_require__(71);




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArguments__["a" /* default */])(obj);
  for (prop in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_keys);
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(8);



/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (reduce);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduced;
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (always);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function max(a, b) {
  return b > a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (max);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexOf__ = __webpack_require__(87);


function _contains(a, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__indexOf__["a" /* default */])(list, a, 0) >= 0;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(45);




/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pluck(p, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */])(p), list);
});
/* harmony default export */ __webpack_exports__["a"] = (pluck);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isString;
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _checkForMethod;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(15);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return Object(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_toString__ = __webpack_require__(154);



/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toString(val) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_toString__["a" /* default */])(val, []);
});
/* harmony default export */ __webpack_exports__["a"] = (toString);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(22);



/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.charAt(idx) : list[idx];
});
/* harmony default export */ __webpack_exports__["a"] = (nth);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(24);





/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function invoker(arity, method) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(target) + ' does not have a method named "' + method + '"');
  });
});
/* harmony default export */ __webpack_exports__["a"] = (invoker);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isPlaceholder;
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function add(a, b) {
  return Number(a) + Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (add);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curryN;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(27);



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : Object(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(left, _curryN(length, combined, fn));
  };
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _map;
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString__ = __webpack_require__(22);




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function isArrayLike(x) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isString__["a" /* default */])(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ __webpack_exports__["a"] = (_isArrayLike);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (assoc);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
var nAry = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});
/* harmony default export */ __webpack_exports__["a"] = (nAry);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isFunction;
function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liftN__ = __webpack_require__(79);



/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
var lift = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lift(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__liftN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (lift);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(22);



/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function reverse(list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
/* harmony default export */ __webpack_exports__["a"] = (reverse);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _containsWith;
function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(54);




/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function reject(pred, filterable) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])(pred), filterable);
});
/* harmony default export */ __webpack_exports__["a"] = (reject);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__ = __webpack_require__(165);






/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__["a" /* default */], function reduceBy(valueFn, valueAcc, keyFn, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(Object(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));
/* harmony default export */ __webpack_exports__["a"] = (reduceBy);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function flip(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (flip);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(7);



/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lens = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
/* harmony default export */ __webpack_exports__["a"] = (lens);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isObject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mergeWithKey__ = __webpack_require__(63);




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWithKey(fn, lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__mergeWithKey__["a" /* default */])(function (k, lVal, rVal) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(lVal) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWithKey);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isTransformer;
function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(19);



/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function prop(p, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])([p], obj);
});
/* harmony default export */ __webpack_exports__["a"] = (prop);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(7);





/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  // else
  Object(__WEBPACK_IMPORTED_MODULE_2__internal_reduce__["a" /* default */])(function (acc, f) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(acc, Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(f, applyX));
  }, [], applyF);
});
/* harmony default export */ __webpack_exports__["a"] = (ap);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curry = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function curry(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xchain__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(7);






/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/chain', 'chain'], __WEBPACK_IMPORTED_MODULE_3__internal_xchain__["a" /* default */], function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__["a" /* default */])(false)(Object(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(fn, monad));
}));
/* harmony default export */ __webpack_exports__["a"] = (chain);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(36);



/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(11);




/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('tail', /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(1, Infinity)));
/* harmony default export */ __webpack_exports__["a"] = (tail);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isFunction__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isString__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toString__ = __webpack_require__(24);






/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function concat(a, b) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(a)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(b)) {
      return a.concat(b);
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not an array');
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(a)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(b)) {
      return a + b;
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not a string');
  }
  if (a != null && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
/* harmony default export */ __webpack_exports__["a"] = (concat);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(13);








/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['filter'], __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__["a" /* default */], function (pred, filterable) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(filterable) ? Object(__WEBPACK_IMPORTED_MODULE_4__internal_reduce__["a" /* default */])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, Object(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(filterable)) :
  // else
  Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(pred, filterable);
}));
/* harmony default export */ __webpack_exports__["a"] = (filter);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _filter;
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isObject;
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adjust__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__always__ = __webpack_require__(17);




/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function update(idx, x, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__adjust__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__always__["a" /* default */])(x), idx, list);
});
/* harmony default export */ __webpack_exports__["a"] = (update);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtake__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['take'], __WEBPACK_IMPORTED_MODULE_2__internal_xtake__["a" /* default */], function take(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, n < 0 ? Infinity : n, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (take);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_identity__ = __webpack_require__(60);



/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _identity;
function _identity(x) {
  return x;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniqBy__ = __webpack_require__(104);



/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__uniqBy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectAssign__ = __webpack_require__(218);


/* harmony default export */ __webpack_exports__["a"] = (typeof Object.assign === 'function' ? Object.assign : __WEBPACK_IMPORTED_MODULE_0__objectAssign__["a" /* default */]);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, l)) {
      result[k] = Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) && !Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWithKey);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__F__ = __webpack_require__(125);
/* unused harmony reexport F */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__T__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__T__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(127);
/* unused harmony reexport __ */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add__ = __webpack_require__(28);
/* unused harmony reexport add */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addIndex__ = __webpack_require__(128);
/* unused harmony reexport addIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adjust__ = __webpack_require__(68);
/* unused harmony reexport adjust */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all__ = __webpack_require__(129);
/* unused harmony reexport all */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__allPass__ = __webpack_require__(131);
/* unused harmony reexport allPass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__always__ = __webpack_require__(17);
/* unused harmony reexport always */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__and__ = __webpack_require__(72);
/* unused harmony reexport and */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__any__ = __webpack_require__(73);
/* unused harmony reexport any */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__anyPass__ = __webpack_require__(133);
/* unused harmony reexport anyPass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ap__ = __webpack_require__(46);
/* unused harmony reexport ap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aperture__ = __webpack_require__(134);
/* unused harmony reexport aperture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__append__ = __webpack_require__(137);
/* unused harmony reexport append */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__apply__ = __webpack_require__(75);
/* unused harmony reexport apply */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__applySpec__ = __webpack_require__(138);
/* unused harmony reexport applySpec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__applyTo__ = __webpack_require__(139);
/* unused harmony reexport applyTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ascend__ = __webpack_require__(140);
/* unused harmony reexport ascend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assoc__ = __webpack_require__(32);
/* unused harmony reexport assoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assocPath__ = __webpack_require__(77);
/* unused harmony reexport assocPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__binary__ = __webpack_require__(141);
/* unused harmony reexport binary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bind__ = __webpack_require__(70);
/* unused harmony reexport bind */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__both__ = __webpack_require__(142);
/* unused harmony reexport both */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__call__ = __webpack_require__(143);
/* unused harmony reexport call */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chain__ = __webpack_require__(49);
/* unused harmony reexport chain */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clamp__ = __webpack_require__(147);
/* unused harmony reexport clamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__clone__ = __webpack_require__(148);
/* unused harmony reexport clone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comparator__ = __webpack_require__(149);
/* unused harmony reexport comparator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__complement__ = __webpack_require__(150);
/* unused harmony reexport complement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__compose__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_30__compose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__composeK__ = __webpack_require__(85);
/* unused harmony reexport composeK */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__composeP__ = __webpack_require__(152);
/* unused harmony reexport composeP */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__concat__ = __webpack_require__(53);
/* unused harmony reexport concat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__cond__ = __webpack_require__(161);
/* unused harmony reexport cond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__construct__ = __webpack_require__(162);
/* unused harmony reexport construct */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__constructN__ = __webpack_require__(90);
/* unused harmony reexport constructN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__contains__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_37__contains__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__converge__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_38__converge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__countBy__ = __webpack_require__(164);
/* unused harmony reexport countBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__curry__ = __webpack_require__(48);
/* unused harmony reexport curry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__curryN__ = __webpack_require__(5);
/* unused harmony reexport curryN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dec__ = __webpack_require__(166);
/* unused harmony reexport dec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__defaultTo__ = __webpack_require__(92);
/* unused harmony reexport defaultTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__descend__ = __webpack_require__(167);
/* unused harmony reexport descend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__difference__ = __webpack_require__(93);
/* unused harmony reexport difference */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__differenceWith__ = __webpack_require__(94);
/* unused harmony reexport differenceWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__dissoc__ = __webpack_require__(95);
/* unused harmony reexport dissoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dissocPath__ = __webpack_require__(168);
/* unused harmony reexport dissocPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__divide__ = __webpack_require__(169);
/* unused harmony reexport divide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__drop__ = __webpack_require__(97);
/* unused harmony reexport drop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dropLast__ = __webpack_require__(171);
/* unused harmony reexport dropLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dropLastWhile__ = __webpack_require__(175);
/* unused harmony reexport dropLastWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__dropRepeats__ = __webpack_require__(178);
/* unused harmony reexport dropRepeats */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__dropRepeatsWith__ = __webpack_require__(99);
/* unused harmony reexport dropRepeatsWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__dropWhile__ = __webpack_require__(179);
/* unused harmony reexport dropWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__either__ = __webpack_require__(181);
/* unused harmony reexport either */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__empty__ = __webpack_require__(102);
/* unused harmony reexport empty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__endsWith__ = __webpack_require__(182);
/* unused harmony reexport endsWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__eqBy__ = __webpack_require__(183);
/* unused harmony reexport eqBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__eqProps__ = __webpack_require__(184);
/* unused harmony reexport eqProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__equals__ = __webpack_require__(9);
/* unused harmony reexport equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__evolve__ = __webpack_require__(185);
/* unused harmony reexport evolve */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__filter__ = __webpack_require__(54);
/* unused harmony reexport filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__find__ = __webpack_require__(186);
/* unused harmony reexport find */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__findIndex__ = __webpack_require__(188);
/* unused harmony reexport findIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__findLast__ = __webpack_require__(190);
/* unused harmony reexport findLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__findLastIndex__ = __webpack_require__(192);
/* unused harmony reexport findLastIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__flatten__ = __webpack_require__(194);
/* unused harmony reexport flatten */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__flip__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_69__flip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__forEach__ = __webpack_require__(195);
/* unused harmony reexport forEach */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__forEachObjIndexed__ = __webpack_require__(196);
/* unused harmony reexport forEachObjIndexed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__fromPairs__ = __webpack_require__(197);
/* unused harmony reexport fromPairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__groupBy__ = __webpack_require__(198);
/* unused harmony reexport groupBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__groupWith__ = __webpack_require__(199);
/* unused harmony reexport groupWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__gt__ = __webpack_require__(200);
/* unused harmony reexport gt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__gte__ = __webpack_require__(201);
/* unused harmony reexport gte */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__has__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_77__has__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__hasIn__ = __webpack_require__(203);
/* unused harmony reexport hasIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__head__ = __webpack_require__(204);
/* unused harmony reexport head */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__identical__ = __webpack_require__(88);
/* unused harmony reexport identical */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__identity__ = __webpack_require__(59);
/* unused harmony reexport identity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ifElse__ = __webpack_require__(205);
/* unused harmony reexport ifElse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__inc__ = __webpack_require__(206);
/* unused harmony reexport inc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__indexBy__ = __webpack_require__(207);
/* unused harmony reexport indexBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__indexOf__ = __webpack_require__(208);
/* unused harmony reexport indexOf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__init__ = __webpack_require__(209);
/* unused harmony reexport init */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__innerJoin__ = __webpack_require__(210);
/* unused harmony reexport innerJoin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__insert__ = __webpack_require__(211);
/* unused harmony reexport insert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__insertAll__ = __webpack_require__(212);
/* unused harmony reexport insertAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__intersection__ = __webpack_require__(213);
/* unused harmony reexport intersection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__intersperse__ = __webpack_require__(215);
/* unused harmony reexport intersperse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__into__ = __webpack_require__(216);
/* unused harmony reexport into */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__invert__ = __webpack_require__(219);
/* unused harmony reexport invert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__invertObj__ = __webpack_require__(220);
/* unused harmony reexport invertObj */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__invoker__ = __webpack_require__(26);
/* unused harmony reexport invoker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__is__ = __webpack_require__(106);
/* unused harmony reexport is */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__isEmpty__ = __webpack_require__(221);
/* unused harmony reexport isEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__isNil__ = __webpack_require__(78);
/* unused harmony reexport isNil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__join__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_99__join__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__juxt__ = __webpack_require__(107);
/* unused harmony reexport juxt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__keys__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_101__keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__keysIn__ = __webpack_require__(223);
/* unused harmony reexport keysIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__last__ = __webpack_require__(100);
/* unused harmony reexport last */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__lastIndexOf__ = __webpack_require__(224);
/* unused harmony reexport lastIndexOf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__length__ = __webpack_require__(108);
/* unused harmony reexport length */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__lens__ = __webpack_require__(41);
/* unused harmony reexport lens */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__lensIndex__ = __webpack_require__(225);
/* unused harmony reexport lensIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__lensPath__ = __webpack_require__(226);
/* unused harmony reexport lensPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__lensProp__ = __webpack_require__(227);
/* unused harmony reexport lensProp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__lift__ = __webpack_require__(35);
/* unused harmony reexport lift */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__liftN__ = __webpack_require__(79);
/* unused harmony reexport liftN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__lt__ = __webpack_require__(228);
/* unused harmony reexport lt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__lte__ = __webpack_require__(229);
/* unused harmony reexport lte */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__map__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_114__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__mapAccum__ = __webpack_require__(230);
/* unused harmony reexport mapAccum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__mapAccumRight__ = __webpack_require__(231);
/* unused harmony reexport mapAccumRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__mapObjIndexed__ = __webpack_require__(232);
/* unused harmony reexport mapObjIndexed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__match__ = __webpack_require__(233);
/* unused harmony reexport match */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__mathMod__ = __webpack_require__(234);
/* unused harmony reexport mathMod */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__max__ = __webpack_require__(18);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__maxBy__ = __webpack_require__(235);
/* unused harmony reexport maxBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__mean__ = __webpack_require__(110);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__median__ = __webpack_require__(236);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__memoize__ = __webpack_require__(237);
/* unused harmony reexport memoize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__memoizeWith__ = __webpack_require__(112);
/* unused harmony reexport memoizeWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__merge__ = __webpack_require__(238);
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__mergeAll__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_127__mergeAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__mergeDeepLeft__ = __webpack_require__(240);
/* unused harmony reexport mergeDeepLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__mergeDeepRight__ = __webpack_require__(241);
/* unused harmony reexport mergeDeepRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__mergeDeepWith__ = __webpack_require__(242);
/* unused harmony reexport mergeDeepWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__mergeDeepWithKey__ = __webpack_require__(42);
/* unused harmony reexport mergeDeepWithKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__mergeWith__ = __webpack_require__(243);
/* unused harmony reexport mergeWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__mergeWithKey__ = __webpack_require__(63);
/* unused harmony reexport mergeWithKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__min__ = __webpack_require__(244);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__minBy__ = __webpack_require__(245);
/* unused harmony reexport minBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__modulo__ = __webpack_require__(246);
/* unused harmony reexport modulo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__multiply__ = __webpack_require__(113);
/* unused harmony reexport multiply */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__nAry__ = __webpack_require__(33);
/* unused harmony reexport nAry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__negate__ = __webpack_require__(247);
/* unused harmony reexport negate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__none__ = __webpack_require__(248);
/* unused harmony reexport none */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__not__ = __webpack_require__(83);
/* unused harmony reexport not */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__nth__ = __webpack_require__(25);
/* unused harmony reexport nth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__nthArg__ = __webpack_require__(249);
/* unused harmony reexport nthArg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__o__ = __webpack_require__(250);
/* unused harmony reexport o */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__objOf__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_145__objOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__of__ = __webpack_require__(251);
/* unused harmony reexport of */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__omit__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_147__omit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__once__ = __webpack_require__(254);
/* unused harmony reexport once */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__or__ = __webpack_require__(101);
/* unused harmony reexport or */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__over__ = __webpack_require__(114);
/* unused harmony reexport over */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__pair__ = __webpack_require__(255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_151__pair__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__partial__ = __webpack_require__(256);
/* unused harmony reexport partial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__partialRight__ = __webpack_require__(257);
/* unused harmony reexport partialRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__partition__ = __webpack_require__(258);
/* unused harmony reexport partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__path__ = __webpack_require__(19);
/* unused harmony reexport path */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__pathEq__ = __webpack_require__(259);
/* unused harmony reexport pathEq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__pathOr__ = __webpack_require__(260);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_157__pathOr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__pathSatisfies__ = __webpack_require__(261);
/* unused harmony reexport pathSatisfies */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__pick__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_159__pick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__pickAll__ = __webpack_require__(116);
/* unused harmony reexport pickAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__pickBy__ = __webpack_require__(263);
/* unused harmony reexport pickBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__pipe__ = __webpack_require__(84);
/* unused harmony reexport pipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__pipeK__ = __webpack_require__(264);
/* unused harmony reexport pipeK */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__pipeP__ = __webpack_require__(86);
/* unused harmony reexport pipeP */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__pluck__ = __webpack_require__(21);
/* unused harmony reexport pluck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__prepend__ = __webpack_require__(117);
/* unused harmony reexport prepend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__product__ = __webpack_require__(265);
/* unused harmony reexport product */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__project__ = __webpack_require__(266);
/* unused harmony reexport project */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__prop__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_169__prop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__propEq__ = __webpack_require__(267);
/* unused harmony reexport propEq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__propIs__ = __webpack_require__(268);
/* unused harmony reexport propIs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__propOr__ = __webpack_require__(269);
/* unused harmony reexport propOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__propSatisfies__ = __webpack_require__(270);
/* unused harmony reexport propSatisfies */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__props__ = __webpack_require__(271);
/* unused harmony reexport props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__range__ = __webpack_require__(272);
/* unused harmony reexport range */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__reduce__ = __webpack_require__(14);
/* unused harmony reexport reduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__reduceBy__ = __webpack_require__(39);
/* unused harmony reexport reduceBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__reduceRight__ = __webpack_require__(119);
/* unused harmony reexport reduceRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__reduceWhile__ = __webpack_require__(273);
/* unused harmony reexport reduceWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__reduced__ = __webpack_require__(274);
/* unused harmony reexport reduced */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__reject__ = __webpack_require__(38);
/* unused harmony reexport reject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__remove__ = __webpack_require__(96);
/* unused harmony reexport remove */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__repeat__ = __webpack_require__(275);
/* unused harmony reexport repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__replace__ = __webpack_require__(276);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_184__replace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__reverse__ = __webpack_require__(36);
/* unused harmony reexport reverse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__scan__ = __webpack_require__(277);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__sequence__ = __webpack_require__(121);
/* unused harmony reexport sequence */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__set__ = __webpack_require__(278);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__slice__ = __webpack_require__(11);
/* unused harmony reexport slice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__sort__ = __webpack_require__(279);
/* unused harmony reexport sort */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__sortBy__ = __webpack_require__(280);
/* unused harmony reexport sortBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__sortWith__ = __webpack_require__(281);
/* unused harmony reexport sortWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__split__ = __webpack_require__(282);
/* unused harmony reexport split */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__splitAt__ = __webpack_require__(283);
/* unused harmony reexport splitAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__splitEvery__ = __webpack_require__(284);
/* unused harmony reexport splitEvery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__splitWhen__ = __webpack_require__(285);
/* unused harmony reexport splitWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__startsWith__ = __webpack_require__(286);
/* unused harmony reexport startsWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__subtract__ = __webpack_require__(287);
/* unused harmony reexport subtract */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__sum__ = __webpack_require__(111);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__symmetricDifference__ = __webpack_require__(288);
/* unused harmony reexport symmetricDifference */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__symmetricDifferenceWith__ = __webpack_require__(289);
/* unused harmony reexport symmetricDifferenceWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__tail__ = __webpack_require__(52);
/* unused harmony reexport tail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__take__ = __webpack_require__(58);
/* unused harmony reexport take */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__takeLast__ = __webpack_require__(103);
/* unused harmony reexport takeLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__takeLastWhile__ = __webpack_require__(290);
/* unused harmony reexport takeLastWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__takeWhile__ = __webpack_require__(291);
/* unused harmony reexport takeWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__tap__ = __webpack_require__(293);
/* unused harmony reexport tap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__test__ = __webpack_require__(295);
/* unused harmony reexport test */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__times__ = __webpack_require__(120);
/* unused harmony reexport times */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__toLower__ = __webpack_require__(297);
/* unused harmony reexport toLower */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__toPairs__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_211__toPairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__toPairsIn__ = __webpack_require__(299);
/* unused harmony reexport toPairsIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__toString__ = __webpack_require__(24);
/* unused harmony reexport toString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__toUpper__ = __webpack_require__(300);
/* unused harmony reexport toUpper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__transduce__ = __webpack_require__(301);
/* unused harmony reexport transduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__transpose__ = __webpack_require__(302);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__traverse__ = __webpack_require__(303);
/* unused harmony reexport traverse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__trim__ = __webpack_require__(304);
/* unused harmony reexport trim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__tryCatch__ = __webpack_require__(305);
/* unused harmony reexport tryCatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__type__ = __webpack_require__(50);
/* unused harmony reexport type */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__unapply__ = __webpack_require__(306);
/* unused harmony reexport unapply */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__unary__ = __webpack_require__(307);
/* unused harmony reexport unary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__uncurryN__ = __webpack_require__(308);
/* unused harmony reexport uncurryN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__unfold__ = __webpack_require__(309);
/* unused harmony reexport unfold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__union__ = __webpack_require__(310);
/* unused harmony reexport union */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__unionWith__ = __webpack_require__(311);
/* unused harmony reexport unionWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__uniq__ = __webpack_require__(61);
/* unused harmony reexport uniq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__uniqBy__ = __webpack_require__(104);
/* unused harmony reexport uniqBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__uniqWith__ = __webpack_require__(122);
/* unused harmony reexport uniqWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_230__unless__ = __webpack_require__(312);
/* unused harmony reexport unless */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_231__unnest__ = __webpack_require__(313);
/* unused harmony reexport unnest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_232__until__ = __webpack_require__(314);
/* unused harmony reexport until */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_233__update__ = __webpack_require__(57);
/* unused harmony reexport update */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_234__useWith__ = __webpack_require__(118);
/* unused harmony reexport useWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_235__values__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_235__values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_236__valuesIn__ = __webpack_require__(315);
/* unused harmony reexport valuesIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_237__view__ = __webpack_require__(316);
/* unused harmony reexport view */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_238__when__ = __webpack_require__(317);
/* unused harmony reexport when */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_239__where__ = __webpack_require__(123);
/* unused harmony reexport where */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_240__whereEq__ = __webpack_require__(318);
/* unused harmony reexport whereEq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_241__without__ = __webpack_require__(319);
/* unused harmony reexport without */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_242__xprod__ = __webpack_require__(320);
/* unused harmony reexport xprod */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_243__zip__ = __webpack_require__(321);
/* unused harmony reexport zip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_244__zipObj__ = __webpack_require__(322);
/* unused harmony reexport zipObj */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_245__zipWith__ = __webpack_require__(323);
/* unused harmony reexport zipWith */























































































































































































































































/***/ }),
/* 65 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(327)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TYPE_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return VALID_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEPARATOR; });
// FORMATS
var BIB = 'BIB';
var ENW = 'ENW';
var RIS = 'RIS';

var FORMATS = { BIB: BIB, ENW: ENW, RIS: RIS };

// TYPES
var ARTICLE = 'ARTICLE';
var BOOK = 'BOOK';
var MISC = 'MISC';

var TYPES = { ARTICLE: ARTICLE, BOOK: BOOK, MISC: MISC };

var TYPE_CODES = {
  ARTICLE: {
    BIB: 'article',
    ENW: 'Journal Article',
    RIS: 'JOUR'
  },
  BOOK: {
    BIB: 'book',
    ENW: 'Book',
    RIS: 'BOOK'
  },
  MISC: {
    BIB: 'misc',
    ENW: 'Generic',
    RIS: 'GEN'
  }
};

// FIELDS
var VALID_TAGS = ['author', 'title', 'year', 'type'];
var TAGS = {
  author: {
    BIB: 'author',
    ENW: '%A',
    RIS: 'AU'
  },
  title: {
    BIB: 'title',
    ENW: '%T',
    RIS: 'TI'
  },
  year: {
    BIB: 'year',
    ENW: '%D',
    RIS: 'PY'
  }
};

// TEMPLATES
var TEMPLATE = {
  BIB: function BIB(type, body) {
    return '@' + type + '{\r\n' + body + '"\r\n}';
  },
  ENW: function ENW(type, body) {
    return '%0 ' + type + '\r\n' + body;
  },
  RIS: function RIS(type, body) {
    return 'TY  - ' + type + '\r\n' + body + '\r\nER  - ';
  }
};

var SEPARATOR = {
  INNER: {
    BIB: ' = "',
    ENW: ' ',
    RIS: '  - '
  },
  OUTER: {
    BIB: '"\r\n',
    ENW: '\r\n',
    RIS: '\r\n'
  }
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);



/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
var adjust = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
/* harmony default export */ __webpack_exports__["a"] = (adjust);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _xwrap;
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function bind(fn, thisObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (bind);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(6);


var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])('callee', x);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_isArguments);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function and(a, b) {
  return a && b;
});
/* harmony default export */ __webpack_exports__["a"] = (and);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xany__ = __webpack_require__(74);




/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
var any = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_2__internal_xany__["a" /* default */], function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
/* harmony default export */ __webpack_exports__["a"] = (any);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XAny = /*#__PURE__*/function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return XAny;
}();

var _xany = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xany(f, xf) {
  return new XAny(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xany);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function apply(fn, args) {
  return fn.apply(this, args);
});
/* harmony default export */ __webpack_exports__["a"] = (apply);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(13);



/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
var values = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function values(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
/* harmony default export */ __webpack_exports__["a"] = (values);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isInteger__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assoc__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isNil__ = __webpack_require__(78);







/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
var assocPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !Object(__WEBPACK_IMPORTED_MODULE_5__isNil__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(idx, obj) ? obj[idx] : Object(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(idx) && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_4__assoc__["a" /* default */])(idx, val, obj);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (assocPath);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isNil(x) {
  return x == null;
});
/* harmony default export */ __webpack_exports__["a"] = (isNil);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(7);






/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function liftN(arity, fn) {
  var lifted = Object(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, fn);
  return Object(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__ap__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (liftN);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _makeFlat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(31);


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _clone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloneRegExp__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(50);



/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (Object(__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */])(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return Object(__WEBPACK_IMPORTED_MODULE_0__cloneRegExp__["a" /* default */])(value);
    default:
      return value;
  }
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _cloneRegExp;
function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function not(a) {
  return !a;
});
/* harmony default export */ __webpack_exports__["a"] = (not);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipe__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(52);





/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipe__["a" /* default */], arguments[0], Object(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = composeK;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chain__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);




/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__chain__["a" /* default */], init)), last);
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeP;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipeP__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(52);





/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipeP__["a" /* default */], arguments[0], Object(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _indexOf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equals__ = __webpack_require__(9);


function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__equals__["a" /* default */])(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (identical);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _complement;
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nAry__ = __webpack_require__(33);




/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */
var constructN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__curry__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__nAry__["a" /* default */])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (constructN);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pluck__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reduce__ = __webpack_require__(14);







/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function converge(after, fns) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_4__pluck__["a" /* default */])('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, Object(__WEBPACK_IMPORTED_MODULE_1__internal_map__["a" /* default */])(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (converge);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
/* harmony default export */ __webpack_exports__["a"] = (defaultTo);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], second) && !Object(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (difference);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
var differenceWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], second) && !Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (differenceWith);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
var dissoc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (dissoc);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
var remove = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (remove);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['drop'], __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__["a" /* default */], function drop(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(Math.max(0, n), Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (drop);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDropRepeatsWith = /*#__PURE__*/function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropRepeatsWith.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return XDropRepeatsWith;
}();

var _xdropRepeatsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropRepeatsWith);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__last__ = __webpack_require__(100);





/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */], function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(Object(__WEBPACK_IMPORTED_MODULE_3__last__["a" /* default */])(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeatsWith);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(25);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
var last = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(-1);
/* harmony default export */ __webpack_exports__["a"] = (last);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function or(a, b) {
  return a || b;
});
/* harmony default export */ __webpack_exports__["a"] = (or);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArguments__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_isString__ = __webpack_require__(22);






/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
var empty = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(x) ? [] : Object(__WEBPACK_IMPORTED_MODULE_4__internal_isString__["a" /* default */])(x) ? '' : Object(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(x) ? {} : Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArguments__["a" /* default */])(x) ? function () {
    return arguments;
  }() :
  // else
  void 0;
});
/* harmony default export */ __webpack_exports__["a"] = (empty);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop__ = __webpack_require__(97);



/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
var takeLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLast(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__drop__["a" /* default */])(n >= 0 ? xs.length - n : 0, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLast);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_Set__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqBy(fn, list) {
  var set = new __WEBPACK_IMPORTED_MODULE_0__internal_Set__["a" /* default */]();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqBy);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
var objOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (objOf);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
/* harmony default export */ __webpack_exports__["a"] = (is);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converge__ = __webpack_require__(91);



/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function juxt(fns) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__converge__["a" /* default */])(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
/* harmony default export */ __webpack_exports__["a"] = (juxt);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(109);



/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function length(list) {
  return list != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(list.length) ? list.length : NaN;
});
/* harmony default export */ __webpack_exports__["a"] = (length);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isNumber;
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sum__ = __webpack_require__(111);



/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function mean(list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__sum__["a" /* default */])(list) / list.length;
});
/* harmony default export */ __webpack_exports__["a"] = (mean);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(14);



/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */], 0);
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(6);




/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function memoizeWith(mFn, fn) {
  var cache = {};
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
/* harmony default export */ __webpack_exports__["a"] = (memoizeWith);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function multiply(a, b) {
  return a * b;
});
/* harmony default export */ __webpack_exports__["a"] = (multiply);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (over);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createPartialApplicator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);



function _createPartialApplicator(concat) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (fn, args) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickAll);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function prepend(el, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])([el], list);
});
/* harmony default export */ __webpack_exports__["a"] = (prepend);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function useWith(fn, transformers) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (useWith);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
var reduceRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
/* harmony default export */ __webpack_exports__["a"] = (reduceRight);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
/* harmony default export */ __webpack_exports__["a"] = (times);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prepend__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduceRight__ = __webpack_require__(119);






/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
var sequence = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : Object(__WEBPACK_IMPORTED_MODULE_4__reduceRight__["a" /* default */])(function (x, acc) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__ap__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__prepend__["a" /* default */], x), acc);
  }, of([]), traversable);
});
/* harmony default export */ __webpack_exports__["a"] = (sequence);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
var uniqWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqWith);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
var where = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function where(spec, testObj) {
  for (var prop in spec) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
/* harmony default export */ __webpack_exports__["a"] = (where);

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(17);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(false);
/* unused harmony default export */ var _unused_webpack_default_export = (F);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(17);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(true);
/* harmony default export */ __webpack_exports__["a"] = (T);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
/* unused harmony default export */ var _unused_webpack_default_export = ({ '@@functional/placeholder': true });

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);




/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var addIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function addIndex(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (addIndex);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xall__ = __webpack_require__(130);




/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['all'], __WEBPACK_IMPORTED_MODULE_2__internal_xall__["a" /* default */], function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (all);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return XAll;
}();

var _xall = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xall(f, xf) {
  return new XAll(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xall);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(14);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function allPass(preds) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (allPass);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XMap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xmap(f, xf) {
  return new XMap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xmap);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(14);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function anyPass(preds) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (anyPass);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_aperture__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__ = __webpack_require__(136);





/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_aperture__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (aperture);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _aperture;
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XAperture = /*#__PURE__*/function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0__concat__["a" /* default */])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return XAperture;
}();

var _xaperture = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xaperture);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function append(el, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list, [el]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (append);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apply__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pluck__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reduce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__values__ = __webpack_require__(76);









/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function applySpec(spec) {
  spec = Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_5__pluck__["a" /* default */])('length', Object(__WEBPACK_IMPORTED_MODULE_7__values__["a" /* default */])(spec))), function () {
    var args = arguments;
    return Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (f) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__apply__["a" /* default */])(f, args);
    }, spec);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (applySpec);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
* Takes a value and applies a function to it.
*
* This function is also known as the `thrush` combinator.
*
* @func
* @memberOf R
 * @since v0.25.0
* @category Function
* @sig a -> (a -> b) -> b
* @param {*} x The value
* @param {Function} f The function to apply
* @return {*} The result of applying `f` to `x`
* @example
*
*      var t42 = R.applyTo(42);
*      t42(R.identity); //=> 42
*      t42(R.add(1)); //=> 43
*/
var applyTo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function applyTo(x, f) {
  return f(x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (applyTo);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
var ascend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
/* unused harmony default export */ var _unused_webpack_default_export = (ascend);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(33);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
var binary = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function binary(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(2, fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (binary);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lift__ = __webpack_require__(35);





/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
var both = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function both(f, g) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : Object(__WEBPACK_IMPORTED_MODULE_3__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__and__["a" /* default */])(f, g);
});
/* unused harmony default export */ var _unused_webpack_default_export = (both);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry__ = __webpack_require__(48);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry__["a" /* default */])(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (call);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatCat__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);




var _xchain = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xchain(f, xf) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(f, Object(__WEBPACK_IMPORTED_MODULE_1__flatCat__["a" /* default */])(xf));
});
/* harmony default export */ __webpack_exports__["a"] = (_xchain);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forceReduced__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xfBase__ = __webpack_require__(4);





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? Object(__WEBPACK_IMPORTED_MODULE_0__forceReduced__["a" /* default */])(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike__["a" /* default */])(input) ? Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, [input]) : Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, input);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_flatCat);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _forceReduced;
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
var clamp = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});
/* unused harmony default export */ var _unused_webpack_default_export = (clamp);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);



/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : Object(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(value, [], [], true);
});
/* unused harmony default export */ var _unused_webpack_default_export = (clone);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
var comparator = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
/* unused harmony default export */ var _unused_webpack_default_export = (comparator);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lift__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not__ = __webpack_require__(83);



/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__not__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (complement);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipe;
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipeP__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(36);



/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipeP__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipeP;
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toISOString__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reject__ = __webpack_require__(38);







function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (k) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).concat(mapPairs(x, Object(__WEBPACK_IMPORTED_MODULE_5__reject__["a" /* default */])(function (k) {
        return (/^\d+$/.test(k)
        );
      }, Object(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__toISOString__["a" /* default */])(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, Object(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)).join(', ') + '}';
  }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containsWith__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functionName__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identical__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keys__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(50);








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = Object(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(aIterator);
  var b = Object(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !Object(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(function (b, aItem) {
    return !Object(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a, b)) {
    return true;
  }

  var typeA = Object(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(a);

  if (typeA !== Object(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && Object(__WEBPACK_IMPORTED_MODULE_2__functionName__["a" /* default */])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = Object(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(a);
  if (keysA.length !== Object(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(Object(__WEBPACK_IMPORTED_MODULE_3__has__["a" /* default */])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayFromIterator;
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _functionName;
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _quote;
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

/* harmony default export */ __webpack_exports__["a"] = (_toISOString);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFilter.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfilter);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(14);






/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function cond(pairs) {
  var arity = Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(function (pair) {
    return pair[0].length;
  }, pairs));
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (cond);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructN__ = __webpack_require__(90);



/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
var construct = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function construct(Fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__constructN__["a" /* default */])(Fn.length, Fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (construct);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
var contains = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (contains);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(39);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return acc + 1;
}, 0);
/* unused harmony default export */ var _unused_webpack_default_export = (countBy);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curryN__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__has__["a" /* default */])(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curryN__["a" /* default */])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xreduceBy);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(28);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(-1);
/* unused harmony default export */ var _unused_webpack_default_export = (dec);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
var descend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
/* unused harmony default export */ var _unused_webpack_default_export = (descend);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assoc__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dissoc__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remove__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update__ = __webpack_require__(57);







/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
var dissocPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0]) ? Object(__WEBPACK_IMPORTED_MODULE_4__remove__["a" /* default */])(path[0], 1, obj) : Object(__WEBPACK_IMPORTED_MODULE_3__dissoc__["a" /* default */])(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0])) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__update__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      } else {
        return Object(__WEBPACK_IMPORTED_MODULE_2__assoc__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      }
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (dissocPath);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function divide(a, b) {
  return a / b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (divide);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDrop = /*#__PURE__*/function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDrop.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdrop);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__ = __webpack_require__(174);





/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (dropLast);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__take__ = __webpack_require__(58);


function dropLast(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__take__["a" /* default */])(n < xs.length ? xs.length - n : 0, xs);
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTake.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(ret) : ret;
  };

  return XTake;
}();

var _xtake = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtake(n, xf) {
  return new XTake(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtake);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDropLast = /*#__PURE__*/function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return XDropLast;
}();

var _xdropLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLast);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__ = __webpack_require__(177);





/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */
var dropLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (dropLastWhile);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLastWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(11);


function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, idx + 1, xs);
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XDropLastWhile = /*#__PURE__*/function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  return XDropLastWhile;
}();

var _xdropLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLastWhile);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equals__ = __webpack_require__(9);






/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */]), /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */])));
/* unused harmony default export */ var _unused_webpack_default_export = (dropRepeats);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['dropWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__["a" /* default */], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(idx, Infinity, xs);
}));
/* unused harmony default export */ var _unused_webpack_default_export = (dropWhile);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDropWhile;
}();

var _xdropWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropWhile);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lift__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__or__ = __webpack_require__(101);





/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
var either = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function either(f, g) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : Object(__WEBPACK_IMPORTED_MODULE_2__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__or__["a" /* default */])(f, g);
});
/* unused harmony default export */ var _unused_webpack_default_export = (either);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takeLast__ = __webpack_require__(103);




/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (suffix, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__takeLast__["a" /* default */])(suffix.length, list), suffix);
});
/* unused harmony default export */ var _unused_webpack_default_export = (endsWith);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);



/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
var eqBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqBy(f, x, y) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(f(x), f(y));
});
/* unused harmony default export */ var _unused_webpack_default_export = (eqBy);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);



/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
var eqProps = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqProps(prop, obj1, obj2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(obj1[prop], obj2[prop]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (eqProps);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (evolve);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfind__ = __webpack_require__(187);




/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
var find = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['find'], __WEBPACK_IMPORTED_MODULE_2__internal_xfind__["a" /* default */], function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
/* unused harmony default export */ var _unused_webpack_default_export = (find);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XFind = /*#__PURE__*/function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return XFind;
}();

var _xfind = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfind(f, xf) {
  return new XFind(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfind);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__ = __webpack_require__(189);




/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__["a" /* default */], function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findIndex);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XFindIndex = /*#__PURE__*/function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return XFindIndex;
}();

var _xfindIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindIndex);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__ = __webpack_require__(191);




/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
var findLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__["a" /* default */], function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findLast);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XFindLast = /*#__PURE__*/function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return XFindLast;
}();

var _xfindLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLast);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__ = __webpack_require__(193);




/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findLastIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__["a" /* default */], function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findLastIndex);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XFindLastIndex = /*#__PURE__*/function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return XFindLastIndex;
}();

var _xfindLastIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLastIndex);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__ = __webpack_require__(80);



/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__["a" /* default */])(true));
/* unused harmony default export */ var _unused_webpack_default_export = (flatten);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (forEach);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(13);



/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
var forEachObjIndexed = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function forEachObjIndexed(fn, obj) {
  var keyList = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
/* unused harmony default export */ var _unused_webpack_default_export = (forEachObjIndexed);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
var fromPairs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (fromPairs);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduceBy__ = __webpack_require__(39);




/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('groupBy', /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__reduceBy__["a" /* default */])(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
/* unused harmony default export */ var _unused_webpack_default_export = (groupBy);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
var groupWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
/* unused harmony default export */ var _unused_webpack_default_export = (groupWith);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
var gt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gt(a, b) {
  return a > b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (gt);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
var gte = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gte(a, b) {
  return a >= b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (gte);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (has);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
var hasIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function hasIn(prop, obj) {
  return prop in obj;
});
/* unused harmony default export */ var _unused_webpack_default_export = (hasIn);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(25);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
var head = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(0);
/* unused harmony default export */ var _unused_webpack_default_export = (head);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
var ifElse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ifElse(condition, onTrue, onFalse) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (ifElse);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(28);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(1);
/* unused harmony default export */ var _unused_webpack_default_export = (inc);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(39);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return elem;
}, null);
/* unused harmony default export */ var _unused_webpack_default_export = (indexBy);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_indexOf__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(15);




/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(xs) ? xs.indexOf(target) : Object(__WEBPACK_IMPORTED_MODULE_1__internal_indexOf__["a" /* default */])(xs, target, 0);
});
/* unused harmony default export */ var _unused_webpack_default_export = (indexOf);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(11);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, -1);
/* unused harmony default export */ var _unused_webpack_default_export = (init);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(55);




/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
var innerJoin = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function innerJoin(pred, xs, ys) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(function (x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, x, ys);
  }, xs);
});
/* unused harmony default export */ var _unused_webpack_default_export = (innerJoin);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
var insert = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (insert);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
/* unused harmony default export */ var _unused_webpack_default_export = (insertAll);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uniq__ = __webpack_require__(61);






/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
var intersection = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_4__uniq__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(lookupList), filteredList));
});
/* unused harmony default export */ var _unused_webpack_default_export = (intersection);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(20);


var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
/* harmony default export */ __webpack_exports__["a"] = (_Set);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
var intersperse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (intersperse);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_stepCat__ = __webpack_require__(217);






/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function into(acc, xf, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__["a" /* default */])(acc) ? Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(acc), acc['@@transducer/init'](), list) : Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(Object(__WEBPACK_IMPORTED_MODULE_4__internal_stepCat__["a" /* default */])(acc)), Object(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(acc, [], [], false), list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (into);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _stepCat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isTransformer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objOf__ = __webpack_require__(105);






var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__assign__["a" /* default */])(result, Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(input) ? Object(__WEBPACK_IMPORTED_MODULE_4__objOf__["a" /* default */])(input[0], input[1]) : input);
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};

function _stepCat(obj) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isTransformer__["a" /* default */])(obj)) {
    return obj;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectAssign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(6);


// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(13);




/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
var invert = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invert(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (invert);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(13);



/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
var invertObj = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invertObj(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (invertObj);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(9);




/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
var isEmpty = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isEmpty(x) {
  return x != null && Object(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(x, Object(__WEBPACK_IMPORTED_MODULE_1__empty__["a" /* default */])(x));
});
/* unused harmony default export */ var _unused_webpack_default_export = (isEmpty);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(26);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'join');
/* harmony default export */ __webpack_exports__["a"] = (join);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
var keysIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
/* unused harmony default export */ var _unused_webpack_default_export = (keysIn);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(9);




/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
var lastIndexOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (Object(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (lastIndexOf);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lens__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update__ = __webpack_require__(57);





/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
var lensIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensIndex(n) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n), Object(__WEBPACK_IMPORTED_MODULE_3__update__["a" /* default */])(n));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensIndex);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assocPath__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path__ = __webpack_require__(19);





/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
var lensPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensPath(p) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__path__["a" /* default */])(p), Object(__WEBPACK_IMPORTED_MODULE_1__assocPath__["a" /* default */])(p));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensPath);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assoc__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prop__ = __webpack_require__(45);





/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lensProp = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensProp(k) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__prop__["a" /* default */])(k), Object(__WEBPACK_IMPORTED_MODULE_1__assoc__["a" /* default */])(k));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensProp);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
var lt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lt(a, b) {
  return a < b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (lt);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
var lte = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lte(a, b) {
  return a <= b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (lte);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
var mapAccum = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapAccum);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
var mapAccumRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapAccumRight);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(13);




/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mapObjIndexed(fn, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, Object(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapObjIndexed);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
var match = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function match(rx, str) {
  return str.match(rx) || [];
});
/* unused harmony default export */ var _unused_webpack_default_export = (match);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(47);



/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
var mathMod = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mathMod(m, p) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(m)) {
    return NaN;
  }
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
/* unused harmony default export */ var _unused_webpack_default_export = (mathMod);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
var maxBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (maxBy);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mean__ = __webpack_require__(110);



/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
var median = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return Object(__WEBPACK_IMPORTED_MODULE_1__mean__["a" /* default */])(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
/* unused harmony default export */ var _unused_webpack_default_export = (median);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memoizeWith__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toString__ = __webpack_require__(24);



/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__memoizeWith__["a" /* default */])(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__toString__["a" /* default */])(arguments);
});
/* unused harmony default export */ var _unused_webpack_default_export = (memoize);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
var merge = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function merge(l, r) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */])({}, l, r);
});
/* unused harmony default export */ var _unused_webpack_default_export = (merge);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);



/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function mergeAll(list) {
  return __WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */].apply(null, [{}].concat(list));
});
/* harmony default export */ __webpack_exports__["a"] = (mergeAll);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(42);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
var mergeDeepLeft = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepLeft(lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepLeft);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(42);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepRight(lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepRight);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(42);



/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWith(fn, lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepWith);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeWithKey__ = __webpack_require__(63);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
var mergeWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWith(fn, l, r) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeWithKey__["a" /* default */])(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeWith);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function min(a, b) {
  return b < a ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (min);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
var minBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (minBy);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var modulo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function modulo(a, b) {
  return a % b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (modulo);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function negate(n) {
  return -n;
});
/* unused harmony default export */ var _unused_webpack_default_export = (negate);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xany__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__any__ = __webpack_require__(73);






/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *      var isOdd = n => n % 2 === 1;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_3__internal_xany__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__any__["a" /* default */])));
/* unused harmony default export */ var _unused_webpack_default_export = (none);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(25);




/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
var nthArg = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(arity, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n, arguments);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (nthArg);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
var o = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function o(f, g, x) {
  return f(g(x));
});
/* unused harmony default export */ var _unused_webpack_default_export = (o);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_of__ = __webpack_require__(252);



/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
var of = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_of__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (of);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _of;
function _of(x) {
  return [x];
}

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
var omit = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (omit);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);



/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function once(fn) {
  var called = false;
  var result;
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (once);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pair(fst, snd) {
  return [fst, snd];
});
/* harmony default export */ __webpack_exports__["a"] = (pair);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(115);



/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
var partial = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (partial);

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(40);




/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (partialRight);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juxt__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reject__ = __webpack_require__(38);




/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__juxt__["a" /* default */])([__WEBPACK_IMPORTED_MODULE_0__filter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__reject__["a" /* default */]]);
/* unused harmony default export */ var _unused_webpack_default_export = (partition);

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(19);




/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathEq(_path, val, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(_path, obj), val);
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathEq);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultTo__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(19);




/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathOr(d, p, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__defaultTo__["a" /* default */])(d, Object(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(p, obj));
});
/* harmony default export */ __webpack_exports__["a"] = (pathOr);

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(19);



/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])(propPath, obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathSatisfies);

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pick);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
var pickBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (pickBy);

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeK__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(36);



/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__composeK__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiply__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(14);



/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__multiply__["a" /* default */], 1);
/* unused harmony default export */ var _unused_webpack_default_export = (product);

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickAll__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useWith__ = __webpack_require__(118);





/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__useWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_map__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_2__pickAll__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]]); // passing `identity` gives correct arity
/* unused harmony default export */ var _unused_webpack_default_export = (project);

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);



/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propEq(name, val, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(val, obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propEq);

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(106);



/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propIs(type, name, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */])(type, obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propIs);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propOr(val, p, obj) {
  return obj != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(p, obj) ? obj[p] : val;
});
/* unused harmony default export */ var _unused_webpack_default_export = (propOr);

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propSatisfies);

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (props);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(109);



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function range(from, to) {
  if (!(Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(from) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (range);

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduced__ = __webpack_require__(16);




/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
var reduceWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], function _reduceWhile(pred, fn, a, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : Object(__WEBPACK_IMPORTED_MODULE_2__internal_reduced__["a" /* default */])(acc);
  }, a, list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (reduceWhile);

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduced__ = __webpack_require__(16);



/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduced__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (reduced);

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__times__ = __webpack_require__(120);




/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function repeat(value, n) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__times__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(value), n);
});
/* unused harmony default export */ var _unused_webpack_default_export = (repeat);

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
/* harmony default export */ __webpack_exports__["a"] = (replace);

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
var scan = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (scan);

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__over__ = __webpack_require__(114);




/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
var set = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function set(lens, v, x) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__over__["a" /* default */])(lens, Object(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(v), x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (set);

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
/* unused harmony default export */ var _unused_webpack_default_export = (sort);

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (sortBy);

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
var sortWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (sortWith);

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(26);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'split');
/* unused harmony default export */ var _unused_webpack_default_export = (split);

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__length__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(11);




/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
var splitAt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitAt(index, array) {
  return [Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(0, index, array), Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(index, Object(__WEBPACK_IMPORTED_MODULE_1__length__["a" /* default */])(array), array)];
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitAt);

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(11);



/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
var splitEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx, idx += n, list));
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitEvery);

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
var splitWhen = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitWhen);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take__ = __webpack_require__(58);




/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (prefix, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__take__["a" /* default */])(prefix.length, list), prefix);
});
/* unused harmony default export */ var _unused_webpack_default_export = (startsWith);

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
var subtract = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function subtract(a, b) {
  return Number(a) - Number(b);
});
/* unused harmony default export */ var _unused_webpack_default_export = (subtract);

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difference__ = __webpack_require__(93);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function symmetricDifference(list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list1, list2), Object(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list2, list1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (symmetricDifference);

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceWith__ = __webpack_require__(94);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function symmetricDifferenceWith(pred, list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list1, list2), Object(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list2, list1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (symmetricDifferenceWith);

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(11);



/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */
var takeLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx + 1, Infinity, xs);
});
/* unused harmony default export */ var _unused_webpack_default_export = (takeLastWhile);

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['takeWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__["a" /* default */], function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, idx, xs);
}));
/* unused harmony default export */ var _unused_webpack_default_export = (takeWhile);

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTakeWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(result);
  };

  return XTakeWhile;
}();

var _xtakeWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtakeWhile);

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtap__ = __webpack_require__(294);




/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xtap__["a" /* default */], function tap(fn, x) {
  fn(x);
  return x;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (tap);

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XTap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtap(f, xf) {
  return new XTap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtap);

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(24);





/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function test(pattern, str) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__["a" /* default */])(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + Object(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(pattern));
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__["a" /* default */])(pattern).test(str);
});
/* unused harmony default export */ var _unused_webpack_default_export = (test);

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isRegExp;
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(26);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toLowerCase');
/* unused harmony default export */ var _unused_webpack_default_export = (toLower);

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
/* harmony default export */ __webpack_exports__["a"] = (toPairs);

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (toPairsIn);

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(26);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toUpperCase');
/* unused harmony default export */ var _unused_webpack_default_export = (toUpper);

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_reduce__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_xwrap__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);




/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(4, function transduce(xf, fn, acc, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_reduce__["a" /* default */])(xf(typeof fn === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__internal_xwrap__["a" /* default */])(fn) : fn), acc, list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (transduce);

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
var transpose = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (transpose);

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequence__ = __webpack_require__(121);




/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
var traverse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : Object(__WEBPACK_IMPORTED_MODULE_2__sequence__["a" /* default */])(of, Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(f, traversable));
});
/* unused harmony default export */ var _unused_webpack_default_export = (traverse);

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};
var trim = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_trim);
/* unused harmony default export */ var _unused_webpack_default_export = (trim);

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(0);




/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
var tryCatch = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function _tryCatch(tryer, catcher) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__internal_concat__["a" /* default */])([e], arguments));
    }
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (tryCatch);

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
/* unused harmony default export */ var _unused_webpack_default_export = (unapply);

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(33);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unary(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(1, fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (unary);

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
var uncurryN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function uncurryN(depth, fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (uncurryN);

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
var unfold = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (unfold);

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniq__ = __webpack_require__(61);





/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__uniq__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (union);

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqWith__ = __webpack_require__(122);




/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
var unionWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function unionWith(pred, list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__uniqWith__["a" /* default */])(pred, Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list1, list2));
});
/* unused harmony default export */ var _unused_webpack_default_export = (unionWith);

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (unless);

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_identity__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chain__ = __webpack_require__(49);



/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__chain__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_identity__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (unnest);

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
/* unused harmony default export */ var _unused_webpack_default_export = (until);

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
var valuesIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (valuesIn);

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


// `Const` is a functor that effectively ignores the function given to `map`.
var Const = function (x) {
  return { value: x, 'fantasy-land/map': function () {
      return this;
    } };
};

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
/* unused harmony default export */ var _unused_webpack_default_export = (view);

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
var when = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
/* unused harmony default export */ var _unused_webpack_default_export = (when);

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where__ = __webpack_require__(123);





/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function whereEq(spec, testObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__where__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */], spec), testObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (whereEq);

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reject__ = __webpack_require__(38);





/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function (xs, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__reject__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(xs), list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (without);

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
var xprod = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (xprod);

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
var zip = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zip);

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
var zipObj = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zipObj);

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
var zipWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zipWith);

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
}
var normalizeComponent = __webpack_require__(43)
/* script */
var __vue_script__ = __webpack_require__(328)
/* template */
var __vue_template__ = __webpack_require__(338)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/CiteThis.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c10930e", Component.options)
  } else {
    hotAPI.reload("data-v-7c10930e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(66)("6e469c94", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c10930e\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CiteThis.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c10930e\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CiteThis.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(65)(undefined);
// imports


// module
exports.push([module.i, "\n.citeThis button {\n  border-radius: 0.25rem;\n  font-size: 0.9rem;\n  padding: 0.2rem 0.25rem;\n}\n.citeThis {\n  display: inline-block;\n  font-size: 1rem;\n  position: relative;\n}\n.citeThis__button {\n  cursor: pointer;\n  display: inline-block;\n}\n.open > .citeThis__button::before {\n  background: #dfdfdf;\n  border-radius: 0.25rem 0.25rem 0 0;\n  box-shadow: 0.1rem 0.05rem 0.15rem 0 rgba(0, 0, 0, 0.5);\n  content: '';\n  height: calc(100% + 0.8rem);\n  position: absolute;\n  right: -0.45rem;\n  top: -0.4rem;\n  width: calc(100% + 0.9rem);\n  z-index: -1;\n}\n.citeThis__flyout {\n  max-height: 0;\n  position: absolute;\n  right: -0.7rem;\n  top: calc(100% - 0.28rem);\n  visibility: hidden;\n}\n.open > .citeThis__flyout {\n  max-height: 4rem;\n  visibility: visible;\n}\n.citeThis__download {\n  display: none; /*hidden download link*/\n}\n", ""]);

// exports


/***/ }),
/* 327 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__citer_config__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CiteThisButton__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CiteThisButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_CiteThisButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CiteThisFormatSelector__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CiteThisFormatSelector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CiteThisFormatSelector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__citer_CreateCitation__ = __webpack_require__(337);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var TRANSITION_DELAY = 1000;

var listKeys = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* join */])(', '), __WEBPACK_IMPORTED_MODULE_0_ramda__["h" /* keys */]);
var validateType = function validateType(value) {
  var valid = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["f" /* has */])(value, __WEBPACK_IMPORTED_MODULE_1__citer_config__["e" /* TYPES */]);
  if (!valid) {
    var message = 'Invalid value \'' + value + '\' provided for type. Defaulting to type \'' + __WEBPACK_IMPORTED_MODULE_1__citer_config__["e" /* TYPES */].MISC + '\'. Valid types are: ' + listKeys(__WEBPACK_IMPORTED_MODULE_1__citer_config__["e" /* TYPES */]) + '.';
    // eslint-disable-next-line no-console
    console.error(message);
  }
  return valid;
};
var validateYear = function validateYear(year) {
  var y = parseInt('' + year, 10);
  var valid = !Number.isNaN(y) && y > 0;
  if (!valid) {
    var message = 'Invalid value \'' + year + '\' provided for year. The value must be a positive integer.';
    // eslint-disable-next-line no-console
    console.error(message);
  }
  return valid;
};

var getExtension = function getExtension(format) {
  return '.' + format.toLowerCase();
};
var concatWithoutSpace = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["q" /* replace */])(/\s/g, '');
var getDownloadFileName = function getDownloadFileName(format) {
  var author = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ref';
  var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return '' + concatWithoutSpace(author) + year + getExtension(format);
};

var getDownloadHref = function getDownloadHref(content) {
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
};
var createDownloadHref = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* compose */])(getDownloadHref, __WEBPACK_IMPORTED_MODULE_4__citer_CreateCitation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CiteThis',
  components: {
    CiteThisButton: __WEBPACK_IMPORTED_MODULE_2__components_CiteThisButton___default.a,
    CiteThisFormatSelector: __WEBPACK_IMPORTED_MODULE_3__components_CiteThisFormatSelector___default.a
  },
  props: {
    author: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_1__citer_config__["e" /* TYPES */].MISC,
      validator: validateType
    },
    year: {
      type: String,
      default: null,
      validator: validateYear
    }
  },
  data: function data() {
    return {
      availableFormats: __WEBPACK_IMPORTED_MODULE_1__citer_config__["a" /* FORMATS */],
      currentFormat: __WEBPACK_IMPORTED_MODULE_1__citer_config__["a" /* FORMATS */].BIB,
      href: '',
      isOpen: false,
      transition: ''
    };
  },

  methods: {
    cite: function cite(format) {
      var _this = this;

      this.currentFormat = format;
      var providedData = {
        author: this.author,
        title: this.title,
        type: this.type,
        year: this.year
      };
      this.href = createDownloadHref(this.currentFormat, providedData);
      setTimeout(function () {
        // wait for link to set // TODO: is this the best way to do this in vue?
        var downloadLink = _this.$refs.downloadLink;

        if (downloadLink) {
          downloadLink.click();
        }
        _this.close();
      }, 100);
    },
    clearTransition: function clearTransition() {
      this.transition = '';
    },
    close: function close() {
      this.isOpen = false;
      this.transition = 'closing';
      setTimeout(this.clearTransition, TRANSITION_DELAY);
    },
    getFileName: function getFileName() {
      return getDownloadFileName(this.currentFormat, this.author, this.year);
    },
    open: function open() {
      if (this.isOpen) {
        this.close();
        return;
      }
      this.isOpen = true;
      this.transition = 'opening';
      console.log(this.transition);
      setTimeout(this.clearTransition, TRANSITION_DELAY);
    }
  }
});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(43)
/* script */
var __vue_script__ = __webpack_require__(330)
/* template */
var __vue_template__ = __webpack_require__(331)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CiteThisButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70eeea52", Component.options)
  } else {
    hotAPI.reload("data-v-70eeea52", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CiteThisButton',
  props: {
    toggle: {
      required: true,
      type: Function
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close: function close() {
      this.toggle();
      document.body.removeEventListener('mouseup', this.onBodyClick);
      this.$el.parentElement.removeEventListener('mouseup', this.onClickInsideParent);
    },
    open: function open() {
      this.toggle();
      document.body.addEventListener('mouseup', this.onBodyClick);
      this.$el.parentElement.addEventListener('mouseup', this.onClickInsideParent);
    },
    onBodyClick: function onBodyClick() {
      this.close();
    },
    onClick: function onClick() {
      if (this.active) {
        this.close();
        return;
      }
      this.open();
    },
    onClickInsideParent: function onClickInsideParent(event) {
      // prevent closing flyout on click inside component
      event.stopPropagation();
    }
  }
});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    { attrs: { "aria-pressed": [_vm.active] }, on: { click: _vm.onClick } },
    [_vm._v("\n  CITE\n")]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-70eeea52", module.exports)
  }
}

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(333)
}
var normalizeComponent = __webpack_require__(43)
/* script */
var __vue_script__ = __webpack_require__(335)
/* template */
var __vue_template__ = __webpack_require__(336)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CiteThisFormatSelector.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31f024ca", Component.options)
  } else {
    hotAPI.reload("data-v-31f024ca", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(66)("13aabbd6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31f024ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CiteThisFormatSelector.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31f024ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CiteThisFormatSelector.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(65)(undefined);
// imports


// module
exports.push([module.i, "\n.formatSelector{\n  padding: 0 0.25rem 0.5rem;\n}\n.formatSelector__wrap {\n  background: #dfdfdf;\n  border: none;\n  border-radius: 0.25rem 0 0.25rem 0.25rem;\n  box-shadow: 0.1rem 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.5);\n  margin: 0;\n  padding: 1.2rem 0.6rem 0.45rem;\n  text-align: left;\n  width: 9.5rem;\n}\n.formatSelector__title {\n  cursor: default;\n  font-size: 0.8rem;\n  position: relative;\n  top: 1rem;\n}\n.formatSelector__buttons {\n  text-align: center;\n}\n.formatSelector__button {\n  cursor: pointer;\n  font-size: 0.8rem;\n  margin-right: 0.25rem;\n  min-width: 2.5rem;\n}\n", ""]);

// exports


/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CiteThisFormatSelector',
  props: {
    cite: {
      type: Function,
      required: true
    },
    formats: {
      type: Object,
      required: true
    }
  }
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("fieldset", { staticClass: "formatSelector__wrap" }, [
      _c("legend", { staticClass: "formatSelector__title" }, [
        _vm._v("\n      Select citation file format\n    ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "formatSelector__buttons" },
        _vm._l(_vm.formats, function(format) {
          return _c(
            "button",
            {
              key: format,
              staticClass: "formatSelector__button",
              on: {
                click: function($event) {
                  _vm.cite(format)
                }
              }
            },
            [_vm._v("\n        " + _vm._s(format) + "\n      ")]
          )
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-31f024ca", module.exports)
  }
}

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(67);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var isInFormatList = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* flip */])(__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* contains */])(Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["s" /* values */])(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* FORMATS */]));
var validateFormat = function validateFormat(format) {
  return isInFormatList(format);
};
var validateData = __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* T */]; // always return true for now // TODO: check requirements for format

var getTypeCode = function getTypeCode(format, type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["n" /* pathOr */])('MISC', [type, format])(__WEBPACK_IMPORTED_MODULE_1__config__["f" /* TYPE_CODES */]);
};
var getEntries = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_ramda__["r" /* toPairs */], Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* omit */])(['type']));
var translateTag = function translateTag(format) {
  return function (key, value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["m" /* pair */])(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* TAGS */][key][format], value);
  };
};
var concatenateEntries = function concatenateEntries(format) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* join */])(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* SEPARATOR */].OUTER[format]), Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["i" /* map */])(Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* join */])(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* SEPARATOR */].INNER[format])));
};

var generateContent = function generateContent(format, data) {
  var type = getTypeCode(format, data.type);
  var entries = getEntries(data);
  var contents = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["i" /* map */])(function (p) {
    return translateTag(format).apply(undefined, _toConsumableArray(p));
  })(entries);
  var body = concatenateEntries(format)(contents);
  return __WEBPACK_IMPORTED_MODULE_1__config__["d" /* TEMPLATE */][format](type, body);
};

var createCitation = function createCitation(format, data) {
  // param validation
  if (!validateFormat(format) || !validateData(data)) {
    // TODO clean up - better error messages
    // eslint-disable-next-line no-console
    console.error('Invalid params');
  }
  return generateContent(format, data);
};

/* harmony default export */ __webpack_exports__["a"] = (createCitation);

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "citeThis", class: [{ open: _vm.isOpen }, _vm.transition] },
    [
      _c("CiteThisButton", {
        staticClass: "citeThis__button",
        attrs: { toggle: _vm.open, active: _vm.isOpen }
      }),
      _vm._v(" "),
      _c("CiteThisFormatSelector", {
        staticClass: "citeThis__flyout formatSelector",
        attrs: { formats: _vm.availableFormats, cite: _vm.cite }
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          ref: "downloadLink",
          staticClass: "citeThis__download",
          attrs: {
            target: "_blank",
            download: _vm.getFileName(),
            href: _vm.href
          }
        },
        [_vm._v("\n    click to download\n  ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c10930e", module.exports)
  }
}

/***/ }),
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CiteThis__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CiteThis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CiteThis__);


var CiteThisVueComponent = {
  install: function install(Vue) {
    Vue.component('CiteThis', __WEBPACK_IMPORTED_MODULE_0__CiteThis___default.a);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CiteThisVueComponent);

/***/ }),
/* 344 */,
/* 345 */,
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })
/******/ ]);