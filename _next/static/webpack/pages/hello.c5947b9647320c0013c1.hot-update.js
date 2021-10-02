self["webpackHotUpdate_N_E"]("pages/hello",{

/***/ "./pages/hello.tsx":
/*!*************************!*\
  !*** ./pages/hello.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Hello; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\hello.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Hello() {
  return __jsx("div", {
    className: "min-h-full flex items-center justify-center flex-col font-semibold  bg-gradient-to-tl to-green-100 from-peach-100 via-green-50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/headshot.jpg",
    className: "rounded-full h-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "text-2xl my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "antoineg.dev")), __jsx((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2___default()), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/antoine.gagn/",
    className: "text-2xl mb-2 bg-gradient-to-tl text-white from-yellow-300 via-red-400 to-indigo-400 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Instagram")), __jsx("a", {
    href: "https://open.spotify.com/user/antoinem8",
    className: "text-2xl mb-2  bg-gradient-to-br text-white from-green-400 to-green-600 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Spotify"), __jsx("a", {
    href: "https://vsco.co/antoinega/gallery",
    className: "text-2xl mb-2 bg-gradient-to-tl text-white from-black to-gray-600 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "VSCO"));
}
_c = Hello;

var _c;

$RefreshReg$(_c, "Hello");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-reveal/RevealBase.js":
/*!*************************************************!*\
  !*** ./node_modules/react-reveal/RevealBase.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports, "__esModule", ({value:!0}));var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(){function e(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),_react=__webpack_require__(/*! react */ "./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),inOut=(0,_propTypes.shape)({make:_propTypes.func,duration:_propTypes.number.isRequired,delay:_propTypes.number.isRequired,forever:_propTypes.bool,count:_propTypes.number.isRequired,style:_propTypes.object.isRequired,reverse:_propTypes.bool}),propTypes={collapse:_propTypes.bool,collapseEl:_propTypes.element,cascade:_propTypes.bool,wait:_propTypes.number,force:_propTypes.bool,disabled:_propTypes.bool,appear:_propTypes.bool,enter:_propTypes.bool,exit:_propTypes.bool,fraction:_propTypes.number,refProp:_propTypes.string,innerRef:_propTypes.func,onReveal:_propTypes.func,unmountOnExit:_propTypes.bool,mountOnEnter:_propTypes.bool,inEffect:inOut.isRequired,outEffect:(0,_propTypes.oneOfType)([inOut,(0,_propTypes.oneOf)([!1])]).isRequired,ssrReveal:_propTypes.bool,collapseOnly:_propTypes.bool,ssrFadeout:_propTypes.bool},defaultProps={fraction:.2,refProp:"ref"},contextTypes={transitionGroup:_propTypes.object},RevealBase=function(e){function t(e,i){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return s.isOn=void 0===e.when||!!e.when,s.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:s.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},s.savedChild=!1,s.isShown=!1,_globals.observerMode?s.handleObserve=s.handleObserve.bind(s):(s.revealHandler=s.makeHandler(s.reveal),s.resizeHandler=s.makeHandler(s.resize)),s.saveRef=s.saveRef.bind(s),s}return _inherits(t,e),_createClass(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?_extends({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!_globals.observerMode&&this.props.collapse&&window.document.dispatchEvent(_globals.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var s=this,o=i.forever,n=i.count,r=i.delay,a=i.duration;if(!o){var l=function(){s&&s.el&&(s.animationEndTimeout=void 0,e.call(s))};this.animationEndTimeout=window.setTimeout(l,r+(a+(t?a:0)*n))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var s=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,n=void 0,r=void 0;if(t.collapseOnly)n=i.duration/3,r=i.delay;else{var a=s>>2,l=a>>1;n=a,r=i.delay+(this.isOn?0:s-a-l),e.style.animationDuration=s-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+n+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],s="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(s=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:_extends({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:s}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=_react2.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),_globals.ssr&&(0,_globals.disableSsr)()}},{key:"handleObserve",value:function(e,t){_slicedToArray(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&_globals.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_globals.globalHide||(0,_globals.hideAll)(),this&&this.el&&(e||(e=this.props),_globals.ssr&&(0,_globals.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):_globals.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,s=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!s||_globals.ssr&&!_globals.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):_globals.ssr&&(_globals.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return _react2.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):_react2.default.Children.toArray(e);var s=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=s.duration,n=s.reverse,r=i.length,a=2*o;this.props.collapse&&(a=parseInt(this.state.style.animationDuration,10),o=a/2);var l=n?r:0;return i=i.map(function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e?_react2.default.cloneElement(e,{style:_extends({},e.props.style,t.state.style,{animationDuration:Math.round((0,_globals.cascade)(n?l--:l++,0,r,o,a))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===_typeof(this.props.children)){var e=_react2.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:_react2.default.createElement("div",null,e)}return _react2.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,s=t.props,o=s.style,n=s.className,r=s.children,a=this.props.disabled?n:(this.props.outEffect?_globals.namespace:"")+(this.state.className?" "+this.state.className:"")+(n?" "+n:"")||void 0,l=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),l=_extends({},o,{opacity:1})):l=this.props.disabled?o:_extends({},o,this.state.style);var p=_extends({},this.props.props,_defineProperty({className:a,style:l},this.props.refProp,this.saveRef)),h=_react2.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?_react2.default.cloneElement(this.props.collapseEl,{style:_extends({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):_react2.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,_globals.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,s=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(_globals.globalHide?e.fraction:0);return s>o-window.innerHeight&&s<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){_globals.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!_globals.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(_react2.default.Component);RevealBase.propTypes=propTypes,RevealBase.defaultProps=defaultProps,RevealBase.contextTypes=contextTypes,RevealBase.displayName="RevealBase",exports.default=RevealBase,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Slide.js":
/*!********************************************!*\
  !*** ./node_modules/react-reveal/Slide.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,l=e.down,u=e.top,a=e.bottom,i=e.big,n=e.mirror,s=e.opposite,d=(r?1:0)|(t?2:0)|(u||l?4:0)|(a||p?8:0)|(n?16:0)|(s?32:0)|(o?64:0)|(i?128:0);if(lookup.hasOwnProperty(d))return lookup[d];var _=r||t||p||l||u||a,f=void 0,b=void 0;if(_){if(!n!=!(o&&s)){var y=[t,r,a,u,l,p];r=y[0],t=y[1],u=y[2],a=y[3],p=y[4],l=y[5]}var m=i?"2000px":"100%";f=r?"-"+m:t?m:"0",b=l||u?"-"+m:p||a?m:"0"}return lookup[d]=(0,_globals.animation)((o?"to":"from")+" {"+(_?" transform: translate3d("+f+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {transform: none;} "),lookup[d]}function Slide(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,l=void 0===p?_globals.defaults.duration:p,u=o.delay,a=void 0===u?_globals.defaults.delay:u,i=o.count,n=void 0===i?_globals.defaults.count:i,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?l:t,delay:a,forever:r,count:n,style:{animationFillMode:"both"},reverse:s.left};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports, "__esModule", ({value:!0}));var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Slide.propTypes=propTypes,exports.default=Slide,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/globals.js":
/*!**********************************************!*\
  !*** ./node_modules/react-reveal/globals.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
function insertRule(e){try{return sheet.insertRule(e,sheet.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function cascade(e,n,t,o,r){var s=Math.log(o),i=Math.log(r),a=(i-s)/(t-n);return Math.exp(s+a*(e-n))}function animation(e){if(!sheet)return"";var n="@keyframes "+(name+counter)+"{"+e+"}",t=effectMap[e];return t?""+name+t:(sheet.insertRule(n,sheet.cssRules.length),effectMap[e]=counter,""+name+counter++)}function hideAll(){globalHide||(exports.globalHide=globalHide=!0,window.removeEventListener("scroll",hideAll,!0),insertRule("."+namespace+" { opacity: 0; }"),window.removeEventListener("orientationchange",hideAll,!0),window.document.removeEventListener("visibilitychange",hideAll))}function config(e){var n=e.ssrFadeout;exports.fadeOutEnabled=fadeOutEnabled=n}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.insertRule=insertRule,exports.cascade=cascade,exports.animation=animation,exports.hideAll=hideAll,exports.default=config;var namespace=exports.namespace="react-reveal",defaults=exports.defaults={duration:1e3,delay:0,count:1},ssr=exports.ssr=!0,observerMode=exports.observerMode=!1,raf=exports.raf=function(e){return window.setTimeout(e,66)},disableSsr=exports.disableSsr=function(){return exports.ssr=ssr=!1},fadeOutEnabled=exports.fadeOutEnabled=!1,ssrFadeout=exports.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return exports.fadeOutEnabled=fadeOutEnabled=e},globalHide=exports.globalHide=!1,ie10=exports.ie10=!1,collapseend=exports.collapseend=void 0,counter=1,effectMap={},sheet=!1,name=namespace+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){exports.observerMode=observerMode="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),exports.raf=raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||raf,exports.ssr=ssr=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(exports.ie10=ie10=!0),ssr&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(exports.ssr=ssr=!1),ssr&&window.setTimeout(disableSsr,1500),observerMode||(exports.collapseend=collapseend=document.createEvent("Event"),collapseend.initEvent("collapseend",!0,!0));var element=document.createElement("style");document.head.appendChild(element),element.sheet&&element.sheet.cssRules&&element.sheet.insertRule&&(sheet=element.sheet,window.addEventListener("scroll",hideAll,!0),window.addEventListener("orientationchange",hideAll,!0),window.document.addEventListener("visibilitychange",hideAll))}

/***/ }),

/***/ "./node_modules/react-reveal/wrap.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/wrap.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function wrap(e,t,a,r){return"in"in e&&(e.when=e.in),_react2.default.Children.count(r)<2?_react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r})):(r=_react2.default.Children.map(r,function(r){return _react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r}))}),"Fragment"in _react2.default?_react2.default.createElement(_react2.default.Fragment,null,r):_react2.default.createElement("span",null,r))}Object.defineProperty(exports, "__esModule", ({value:!0}));var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};exports.default=wrap;var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_RevealBase=__webpack_require__(/*! ./RevealBase */ "./node_modules/react-reveal/RevealBase.js"),_RevealBase2=_interopRequireDefault(_RevealBase);module.exports=exports.default;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8udHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXZlYWwvUmV2ZWFsQmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJldmVhbC9TbGlkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJldmVhbC9nbG9iYWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmV2ZWFsL3dyYXAuanMiXSwibmFtZXMiOlsiSGVsbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxzQkFBVDtBQUFnQyxhQUFTLEVBQUMsbUJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBS0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FMRixFQVFFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHlDQURQO0FBRUUsYUFBUyxFQUFDLDZHQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FSRixFQXNCRTtBQUNFLFFBQUksRUFBQyx5Q0FEUDtBQUVFLGFBQVMsRUFBQyxnR0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLEVBNEJFO0FBQ0UsUUFBSSxFQUFDLG1DQURQO0FBRUUsYUFBUyxFQUFDLDBGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkYsQ0FERjtBQXlDRDtLQTFDdUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixjQUFjLG1CQUFPLENBQUMsa0RBQVU7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGdGQUFlOztBQUVwQywyQkFBMkIsbUJBQU8sQ0FBQyx5RkFBNEI7QUFDL0QscUJBQXFCLG1CQUFPLENBQUMscUVBQWtCOztBQUUvQztBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsQ0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7O0FDbEJZLG1DQUFtQywwQkFBMEIsV0FBVyxnQ0FBZ0MseUNBQXlDLGtEQUFrRCxXQUFXLDhCQUE4Qiw4RUFBOEUseUNBQXlDLDRGQUE0Rix1REFBdUQsd0JBQXdCLDJIQUEySCwwQ0FBMEMsYUFBYSxtREFBbUQsc0VBQXNFLDhDQUEyQyxDQUFDLFNBQVMsRUFBQyxDQUFDLG9GQUFvRixnQkFBZ0IsYUFBYSxvR0FBb0csMkJBQTJCLGdCQUFnQiw0QkFBNEIsSUFBSSxpQ0FBaUMsMkRBQTJELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSx5QkFBeUIsUUFBUSxjQUFjLFNBQVMscUJBQXFCLDZCQUE2Qiw4Q0FBOEMsNkVBQTZFLHVDQUF1QyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx5QkFBeUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsVUFBVSxtQkFBTyxDQUFDLDRDQUFPLG9EQUFvRCxtQkFBTyxDQUFDLHNEQUFZLFdBQVcsbUJBQU8sQ0FBQyx5REFBVyw4QkFBOEIsb05BQW9OLGFBQWEsdWpCQUF1akIsZUFBZSwwQkFBMEIsZUFBZSxrQ0FBa0Msd0JBQXdCLGdCQUFnQix3QkFBd0IsOEZBQThGLGlEQUFpRCwrREFBK0QscURBQXFELDRNQUE0TSx1Q0FBdUMsZ0NBQWdDLCtKQUErSixFQUFFLGlDQUFpQyxpRUFBaUUscURBQXFELHNCQUFzQixvQkFBb0IsY0FBYyxXQUFXLHNHQUFzRyxFQUFFLHlDQUF5Qyx3REFBd0QsT0FBTyxpQkFBaUIsbURBQW1ELGdFQUFnRSxFQUFFLHlDQUF5QyxvTUFBb00sRUFBRSxxQ0FBcUMsbUdBQW1HLDJDQUEyQyxLQUFLLGtCQUFrQiw0SUFBNEksbUJBQW1CLDBGQUEwRixJQUFJLEVBQUUsZ0NBQWdDLDhEQUE4RCx1QkFBdUIsa0hBQWtILGtCQUFrQixtQ0FBbUMsV0FBVyxrREFBa0QsNkRBQTZELFVBQVUsNklBQTZJLHdCQUF3Qix5TUFBeU0sRUFBRSxpQ0FBaUMsK0xBQStMLEVBQUUsNENBQTRDLHlEQUF5RCxFQUFFLHdDQUF3Qyw0R0FBNEcsRUFBRSxnQ0FBZ0MsOERBQThELG1DQUFtQyxrQkFBa0IsYUFBYSwyQkFBMkIsaUJBQWlCLDJEQUEyRCxxQkFBcUIsbUNBQW1DLEVBQUUsK0JBQStCLHFFQUFxRSw4TEFBOEwsU0FBUywrQkFBK0IsbUJBQW1CLDRHQUE0RyxFQUFFLHlDQUF5QyxXQUFXLGtDQUFrQyx5TkFBeU4sdUhBQXVILGtSQUFrUiw2Q0FBNkMsZ0NBQWdDLDRCQUE0QixXQUFXLGdNQUFnTSxPQUFPLDhDQUE4QyxvQ0FBb0MsNEJBQTRCLDhGQUE4RixFQUFFLGdDQUFnQyxvQkFBb0IsbURBQW1ELDZDQUE2QyxhQUFhLHlDQUF5QyxJQUFJLHNDQUFzQyxvSEFBb0gsK0VBQStFLFlBQVksMkJBQTJCLHdGQUF3RixpQkFBaUIsOEJBQThCLDJFQUEyRSxFQUFFLElBQUksR0FBRyxFQUFFLGtEQUFrRCx1S0FBdUssK0RBQStELFFBQVEsdUNBQXVDLHlMQUF5TCxFQUFFLGdDQUFnQyxnRUFBZ0UsNENBQTRDLHlEQUF5RCxvSEFBb0gsc0VBQXNFLEVBQUUsOEJBQThCLGFBQWEseUhBQXlILHNCQUFzQixnREFBZ0QsOE1BQThNLHNQQUFzUCxJQUFJLFVBQVUsc0NBQXNDLHFCQUFxQixpQkFBaUIsbUNBQW1DLG9CQUFvQixxRkFBcUYsOEdBQThHLGlCQUFpQix3RkFBd0YsdUNBQXVDLGdFQUFnRSxLQUFLLEVBQUUsb0NBQW9DLHdCQUF3QixnQ0FBZ0Msa0JBQWtCLGdEQUFnRCxFQUFFLG1DQUFtQyw2Q0FBNkMsc0lBQXNJLHNDQUFzQyxFQUFFLCtCQUErQixxR0FBcUcsMkRBQTJELHFDQUFxQyxxQkFBcUIsRUFBRSw4QkFBOEIsaUhBQWlILFdBQVcsa0VBQWtFLFdBQVcsMEVBQTBFLFdBQVcscUVBQXFFLFdBQVcsdURBQXVELFdBQVcsSUFBSSxFQUFFLGdDQUFnQyxrR0FBa0csV0FBVyxxRUFBcUUsV0FBVyw2RUFBNkUsV0FBVyx3RUFBd0UsV0FBVywwREFBMEQsV0FBVyxpTkFBaU4sSUFBSSxnREFBZ0QsT0FBTyw2Q0FBNkMsRUFBRSwrQkFBK0IsS0FBSyxxQkFBcUIsZ0JBQWdCLHNCQUFzQixlQUFlLGdDQUFnQyxVQUFVLEtBQUssNEJBQTRCLDZJQUE2SSxlQUFlLDJDOzs7Ozs7Ozs7OztBQ0E1aWEsbUNBQW1DLDBCQUEwQixXQUFXLHVDQUF1QyxTQUFTLHVGQUF1RixTQUFTLG1CQUFtQix1S0FBdUssNkNBQTZDLHlDQUF5QyxNQUFNLGdCQUFnQixvQkFBb0IsMENBQTBDLHdCQUF3QiwwQ0FBMEMsMkRBQTJELCtDQUErQyxRQUFRLDRCQUE0QixpQkFBaUIsY0FBYyxpQkFBaUIsd1hBQXdYLG1FQUFtRSx5QkFBeUIsaUJBQWlCLGtDQUFrQyw4Q0FBMkMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxlQUFlLG1CQUFPLENBQUMsc0RBQVksUUFBUSxtQkFBTyxDQUFDLG1EQUFRLGdEQUFnRCxtQkFBTyxDQUFDLHlEQUFXLGFBQWEsMlNBQTJTLFdBQVcsMEJBQTBCLGVBQWUsc0M7Ozs7Ozs7Ozs7O0FDQXAyRCx1QkFBdUIsSUFBSSxpREFBaUQsU0FBUyxpREFBaUQsNEJBQTRCLDhDQUE4QywyQkFBMkIsc0JBQXNCLG1CQUFtQixxQ0FBcUMsTUFBTSxpQkFBaUIsc0dBQXNHLG1CQUFtQixhQUFhLGtCQUFrQiwyRkFBMkYsWUFBWSxFQUFFLCtIQUErSCxtQkFBbUIsbUJBQW1CLHNCQUFzQixrQkFBa0IsOENBQTJDLENBQUMsU0FBUyxFQUFDLENBQUMsa0JBQWtCLFlBQVksZUFBZSxTQUFTLGlCQUFpQixXQUFXLGVBQWUsU0FBUyxlQUFlLFFBQVEsY0FBYyxpQkFBaUIseUJBQXlCLGdCQUFnQixFQUFFLDZCQUE2QixLQUFLLFdBQVcsaUJBQWlCLG9CQUFvQixRQUFRLFdBQVcsYUFBYSwrQkFBK0IsWUFBWSxrQkFBa0IsWUFBWSxPQUFPLFdBQVcsUUFBUSxnQkFBZ0Isc0JBQXNCLGVBQWUsa0JBQWtCLFlBQVksOERBQThELE9BQU8sc0JBQXNCLGtCQUFrQixZQUFZLGtCQUFrQixTQUFTLFlBQVksZ0JBQWdCLG1CQUFtQiw4QkFBOEIsZ0VBQWdFLHVHQUF1RyxvQkFBb0IsMEpBQTBKLHVCQUF1QixnQ0FBZ0MsV0FBVyw0R0FBNEcsV0FBVyxxSEFBcUgsWUFBWSwwTkFBME4sV0FBVyxnRUFBZ0UsbUJBQW1CLHVGQUF1Riw0Q0FBNEMsNFI7Ozs7Ozs7Ozs7O0FDQW5uRixtQ0FBbUMsMEJBQTBCLFdBQVcsdUJBQXVCLGdJQUFnSSxJQUFJLGtDQUFrQyxpREFBaUQscUVBQXFFLElBQUksa0NBQWtDLEdBQUcsNElBQTRJLDhDQUEyQyxDQUFDLFNBQVMsRUFBQyxDQUFDLHdDQUF3QyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsVUFBVSxlQUFlLE1BQU0sV0FBVyxtQkFBTyxDQUFDLDRDQUFPLHFEQUFxRCxtQkFBTyxDQUFDLCtEQUFjLG1EQUFtRCwrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxsby5jNTk0N2I5NjQ3MzIwYzAwMTNjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL1NsaWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxsbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIGZvbnQtc2VtaWJvbGQgIGJnLWdyYWRpZW50LXRvLXRsIHRvLWdyZWVuLTEwMCBmcm9tLXBlYWNoLTEwMCB2aWEtZ3JlZW4tNTBcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGc6dGV4dC04eGwgdGV4dC02eGwgbWItOCBzdHJva2UteWVsbG93XCI+SEVMTE88L2Rpdj4gKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlYWRzaG90LmpwZ1wiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTMyXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXktMlwiPmFudG9pbmVnLmRldjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FudG9pbmUuZ2Fnbi9cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiBiZy1ncmFkaWVudC10by10bCB0ZXh0LXdoaXRlIGZyb20teWVsbG93LTMwMCB2aWEtcmVkLTQwMCB0by1pbmRpZ28tNDAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluc3RhZ3JhbVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9TbGlkZT5cclxuICAgICAgey8qIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vdXNlci9zaG93LzEzMTY1NDI0NS1hbnRvaW5lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteS0yXCJcclxuICAgICAgPlxyXG4gICAgICAgIEdvb2RyZWFkc1xyXG4gICAgICA8L2E+ICovfVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdXNlci9hbnRvaW5lbThcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTIgIGJnLWdyYWRpZW50LXRvLWJyIHRleHQtd2hpdGUgZnJvbS1ncmVlbi00MDAgdG8tZ3JlZW4tNjAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgU3BvdGlmeVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdnNjby5jby9hbnRvaW5lZ2EvZ2FsbGVyeVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiBiZy1ncmFkaWVudC10by10bCB0ZXh0LXdoaXRlIGZyb20tYmxhY2sgdG8tZ3JheS02MDAgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgID5cclxuICAgICAgICBWU0NPXHJcbiAgICAgIDwvYT5cclxuICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdW5kZXJsaW5lIGZvbnQtbm9ybWFsIHllbGxvdy13YXZ5XCI+UG9zdHM8L2E+XHJcbiAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxnOnRleHQtOHhsIHRleHQtNnhsIG1iLTggc3Ryb2tlLXllbGxvdyBtdC02XCI+SEVMTE88L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSx0LGkpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBfaW5oZXJpdHMoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgX3R5cGVvZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxfc2xpY2VkVG9BcnJheT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt2YXIgaT1bXSxzPSEwLG89ITEsbj12b2lkIDA7dHJ5e2Zvcih2YXIgcixhPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEocz0ocj1hLm5leHQoKSkuZG9uZSkmJihpLnB1c2goci52YWx1ZSksIXR8fGkubGVuZ3RoIT09dCk7cz0hMCk7fWNhdGNoKGUpe289ITAsbj1lfWZpbmFsbHl7dHJ5eyFzJiZhLnJldHVybiYmYS5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgbn19cmV0dXJuIGl9cmV0dXJuIGZ1bmN0aW9uKHQsaSl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdDtpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKXJldHVybiBlKHQsaSk7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIil9fSgpLF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBpPWFyZ3VtZW50c1t0XTtmb3IodmFyIHMgaW4gaSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxzKSYmKGVbc109aVtzXSl9cmV0dXJuIGV9LF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHM9dFtpXTtzLmVudW1lcmFibGU9cy5lbnVtZXJhYmxlfHwhMSxzLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBzJiYocy53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUscy5rZXkscyl9fXJldHVybiBmdW5jdGlvbih0LGkscyl7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSkscyYmZSh0LHMpLHR9fSgpLF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIiksX3JlYWN0Mj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCksX3Byb3BUeXBlcz1yZXF1aXJlKFwicHJvcC10eXBlc1wiKSxfZ2xvYmFscz1yZXF1aXJlKFwiLi9nbG9iYWxzXCIpLGluT3V0PSgwLF9wcm9wVHlwZXMuc2hhcGUpKHttYWtlOl9wcm9wVHlwZXMuZnVuYyxkdXJhdGlvbjpfcHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLGRlbGF5Ol9wcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsZm9yZXZlcjpfcHJvcFR5cGVzLmJvb2wsY291bnQ6X3Byb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxzdHlsZTpfcHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLHJldmVyc2U6X3Byb3BUeXBlcy5ib29sfSkscHJvcFR5cGVzPXtjb2xsYXBzZTpfcHJvcFR5cGVzLmJvb2wsY29sbGFwc2VFbDpfcHJvcFR5cGVzLmVsZW1lbnQsY2FzY2FkZTpfcHJvcFR5cGVzLmJvb2wsd2FpdDpfcHJvcFR5cGVzLm51bWJlcixmb3JjZTpfcHJvcFR5cGVzLmJvb2wsZGlzYWJsZWQ6X3Byb3BUeXBlcy5ib29sLGFwcGVhcjpfcHJvcFR5cGVzLmJvb2wsZW50ZXI6X3Byb3BUeXBlcy5ib29sLGV4aXQ6X3Byb3BUeXBlcy5ib29sLGZyYWN0aW9uOl9wcm9wVHlwZXMubnVtYmVyLHJlZlByb3A6X3Byb3BUeXBlcy5zdHJpbmcsaW5uZXJSZWY6X3Byb3BUeXBlcy5mdW5jLG9uUmV2ZWFsOl9wcm9wVHlwZXMuZnVuYyx1bm1vdW50T25FeGl0Ol9wcm9wVHlwZXMuYm9vbCxtb3VudE9uRW50ZXI6X3Byb3BUeXBlcy5ib29sLGluRWZmZWN0OmluT3V0LmlzUmVxdWlyZWQsb3V0RWZmZWN0OigwLF9wcm9wVHlwZXMub25lT2ZUeXBlKShbaW5PdXQsKDAsX3Byb3BUeXBlcy5vbmVPZikoWyExXSldKS5pc1JlcXVpcmVkLHNzclJldmVhbDpfcHJvcFR5cGVzLmJvb2wsY29sbGFwc2VPbmx5Ol9wcm9wVHlwZXMuYm9vbCxzc3JGYWRlb3V0Ol9wcm9wVHlwZXMuYm9vbH0sZGVmYXVsdFByb3BzPXtmcmFjdGlvbjouMixyZWZQcm9wOlwicmVmXCJ9LGNvbnRleHRUeXBlcz17dHJhbnNpdGlvbkdyb3VwOl9wcm9wVHlwZXMub2JqZWN0fSxSZXZlYWxCYXNlPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxpKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyx0KTt2YXIgcz1fcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSxpKSk7cmV0dXJuIHMuaXNPbj12b2lkIDA9PT1lLndoZW58fCEhZS53aGVuLHMuc3RhdGU9e2NvbGxhcHNlOmUuY29sbGFwc2U/dC5nZXRJbml0aWFsQ29sbGFwc2VTdHlsZShlKTp2b2lkIDAsc3R5bGU6e29wYWNpdHk6cy5pc09uJiYhZS5zc3JSZXZlYWx8fCFlLm91dEVmZmVjdD92b2lkIDA6MH19LHMuc2F2ZWRDaGlsZD0hMSxzLmlzU2hvd249ITEsX2dsb2JhbHMub2JzZXJ2ZXJNb2RlP3MuaGFuZGxlT2JzZXJ2ZT1zLmhhbmRsZU9ic2VydmUuYmluZChzKToocy5yZXZlYWxIYW5kbGVyPXMubWFrZUhhbmRsZXIocy5yZXZlYWwpLHMucmVzaXplSGFuZGxlcj1zLm1ha2VIYW5kbGVyKHMucmVzaXplKSkscy5zYXZlUmVmPXMuc2F2ZVJlZi5iaW5kKHMpLHN9cmV0dXJuIF9pbmhlcml0cyh0LGUpLF9jcmVhdGVDbGFzcyh0LFt7a2V5Olwic2F2ZVJlZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2hpbGRSZWYmJnRoaXMuY2hpbGRSZWYoZSksdGhpcy5wcm9wcy5pbm5lclJlZiYmdGhpcy5wcm9wcy5pbm5lclJlZihlKSx0aGlzLmVsIT09ZSYmKHRoaXMuZWw9ZSYmXCJvZmZzZXRIZWlnaHRcImluIGU/ZTp2b2lkIDAsdGhpcy5vYnNlcnZlKHRoaXMucHJvcHMsITApKX19LHtrZXk6XCJpbnZpc2libGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMmJnRoaXMuZWwmJih0aGlzLnNhdmVkQ2hpbGQ9ITEsdGhpcy5pc1Nob3dufHwodGhpcy5zZXRTdGF0ZSh7aGFzRXhpdGVkOiEwLGNvbGxhcHNlOnRoaXMucHJvcHMuY29sbGFwc2U/X2V4dGVuZHMoe30sdGhpcy5zdGF0ZS5jb2xsYXBzZSx7dmlzaWJpbGl0eTpcImhpZGRlblwifSk6bnVsbCxzdHlsZTp7b3BhY2l0eTowfX0pLCFfZ2xvYmFscy5vYnNlcnZlck1vZGUmJnRoaXMucHJvcHMuY29sbGFwc2UmJndpbmRvdy5kb2N1bWVudC5kaXNwYXRjaEV2ZW50KF9nbG9iYWxzLmNvbGxhcHNlZW5kKSkpfX0se2tleTpcImFuaW1hdGlvbkVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXt2YXIgcz10aGlzLG89aS5mb3JldmVyLG49aS5jb3VudCxyPWkuZGVsYXksYT1pLmR1cmF0aW9uO2lmKCFvKXt2YXIgbD1mdW5jdGlvbigpe3MmJnMuZWwmJihzLmFuaW1hdGlvbkVuZFRpbWVvdXQ9dm9pZCAwLGUuY2FsbChzKSl9O3RoaXMuYW5pbWF0aW9uRW5kVGltZW91dD13aW5kb3cuc2V0VGltZW91dChsLHIrKGErKHQ/YTowKSpuKSl9fX0se2tleTpcImdldERpbWVuc2lvblZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbC5vZmZzZXRIZWlnaHQrcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLXRvcFwiKSwxMCkrcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWJvdHRvbVwiKSwxMCl9fSx7a2V5OlwiY29sbGFwc2VcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7dmFyIHM9aS5kdXJhdGlvbisodC5jYXNjYWRlP2kuZHVyYXRpb246MCksbz10aGlzLmlzT24/dGhpcy5nZXREaW1lbnNpb25WYWx1ZSgpOjAsbj12b2lkIDAscj12b2lkIDA7aWYodC5jb2xsYXBzZU9ubHkpbj1pLmR1cmF0aW9uLzMscj1pLmRlbGF5O2Vsc2V7dmFyIGE9cz4+MixsPWE+PjE7bj1hLHI9aS5kZWxheSsodGhpcy5pc09uPzA6cy1hLWwpLGUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb249cy1hKyh0aGlzLmlzT24/bDotbCkrXCJtc1wiLGUuc3R5bGUuYW5pbWF0aW9uRGVsYXk9aS5kZWxheSsodGhpcy5pc09uP2EtbDowKStcIm1zXCJ9cmV0dXJuIGUuY29sbGFwc2U9e2hlaWdodDpvLHRyYW5zaXRpb246XCJoZWlnaHQgXCIrbitcIm1zIGVhc2UgXCIrcitcIm1zXCIsb3ZlcmZsb3c6dC5jb2xsYXBzZU9ubHk/XCJoaWRkZW5cIjp2b2lkIDB9LGV9fSx7a2V5OlwiYW5pbWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMmJnRoaXMuZWwmJih0aGlzLnVubGlzdGVuKCksdGhpcy5pc1Nob3duIT09dGhpcy5pc09uKSl7dGhpcy5pc1Nob3duPXRoaXMuaXNPbjt2YXIgdD0hdGhpcy5pc09uJiZlLm91dEVmZmVjdCxpPWVbdD9cIm91dEVmZmVjdFwiOlwiaW5FZmZlY3RcIl0scz1cInN0eWxlXCJpbiBpJiZpLnN0eWxlLmFuaW1hdGlvbk5hbWV8fHZvaWQgMCxvPXZvaWQgMDtlLmNvbGxhcHNlT25seT9vPXtoYXNBcHBlYXJlZDohMCxoYXNFeGl0ZWQ6ITEsc3R5bGU6e29wYWNpdHk6MX19OigoZS5vdXRFZmZlY3R8fHRoaXMuaXNPbikmJmkubWFrZSYmKHM9aS5tYWtlKSxvPXtoYXNBcHBlYXJlZDohMCxoYXNFeGl0ZWQ6ITEsY29sbGFwc2U6dm9pZCAwLHN0eWxlOl9leHRlbmRzKHt9LGkuc3R5bGUse2FuaW1hdGlvbkR1cmF0aW9uOmkuZHVyYXRpb24rXCJtc1wiLGFuaW1hdGlvbkRlbGF5OmkuZGVsYXkrXCJtc1wiLGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OmkuZm9yZXZlcj9cImluZmluaXRlXCI6aS5jb3VudCxvcGFjaXR5OjEsYW5pbWF0aW9uTmFtZTpzfSksY2xhc3NOYW1lOmkuY2xhc3NOYW1lfSksdGhpcy5zZXRTdGF0ZShlLmNvbGxhcHNlP3RoaXMuY29sbGFwc2UobyxlLGkpOm8pLHQ/KHRoaXMuc2F2ZWRDaGlsZD1fcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHRoaXMuZ2V0Q2hpbGQoKSksdGhpcy5hbmltYXRpb25FbmQodGhpcy5pbnZpc2libGUsZS5jYXNjYWRlLGkpKTp0aGlzLnNhdmVkQ2hpbGQ9ITEsdGhpcy5vblJldmVhbChlKX19fSx7a2V5Olwib25SZXZlYWxcIix2YWx1ZTpmdW5jdGlvbihlKXtlLm9uUmV2ZWFsJiZ0aGlzLmlzT24mJih0aGlzLm9uUmV2ZWFsVGltZW91dCYmKHRoaXMub25SZXZlYWxUaW1lb3V0PXdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5vblJldmVhbFRpbWVvdXQpKSxlLndhaXQ/dGhpcy5vblJldmVhbFRpbWVvdXQ9d2luZG93LnNldFRpbWVvdXQoZS5vblJldmVhbCxlLndhaXQpOmUub25SZXZlYWwoKSl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMudW5saXN0ZW4oKSxfZ2xvYmFscy5zc3ImJigwLF9nbG9iYWxzLmRpc2FibGVTc3IpKCl9fSx7a2V5OlwiaGFuZGxlT2JzZXJ2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7X3NsaWNlZFRvQXJyYXkoZSwxKVswXS5pbnRlcnNlY3Rpb25SYXRpbz4wJiYodC5kaXNjb25uZWN0KCksdGhpcy5vYnNlcnZlcj1udWxsLHRoaXMucmV2ZWFsKHRoaXMucHJvcHMsITApKX19LHtrZXk6XCJvYnNlcnZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtpZih0aGlzLmVsJiZfZ2xvYmFscy5vYnNlcnZlck1vZGUpe2lmKHRoaXMub2JzZXJ2ZXIpe2lmKCF0KXJldHVybjt0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKX1lbHNlIGlmKHQpcmV0dXJuO3RoaXMub2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlT2JzZXJ2ZSx7dGhyZXNob2xkOmUuZnJhY3Rpb259KSx0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbCl9fX0se2tleTpcInJldmVhbFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO19nbG9iYWxzLmdsb2JhbEhpZGV8fCgwLF9nbG9iYWxzLmhpZGVBbGwpKCksdGhpcyYmdGhpcy5lbCYmKGV8fChlPXRoaXMucHJvcHMpLF9nbG9iYWxzLnNzciYmKDAsX2dsb2JhbHMuZGlzYWJsZVNzcikoKSx0aGlzLmlzT24mJnRoaXMuaXNTaG93biYmdm9pZCAwIT09ZS5zcHk/KHRoaXMuaXNTaG93bj0hMSx0aGlzLnNldFN0YXRlKHtzdHlsZTp7fX0pLHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQucmV2ZWFsKGUpfSwyMDApKTppfHx0aGlzLmluVmlld3BvcnQoZSl8fGUuZm9yY2U/dGhpcy5hbmltYXRlKGUpOl9nbG9iYWxzLm9ic2VydmVyTW9kZT90aGlzLm9ic2VydmUoZSk6dGhpcy5saXN0ZW4oKSl9fSx7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5lbCYmIXRoaXMucHJvcHMuZGlzYWJsZWQpe3RoaXMucHJvcHMuY29sbGFwc2VPbmx5fHwoXCJtYWtlXCJpbiB0aGlzLnByb3BzLmluRWZmZWN0JiZ0aGlzLnByb3BzLmluRWZmZWN0Lm1ha2UoITEsdGhpcy5wcm9wcyksdm9pZCAwIT09dGhpcy5wcm9wcy53aGVuJiZ0aGlzLnByb3BzLm91dEVmZmVjdCYmXCJtYWtlXCJpbiB0aGlzLnByb3BzLm91dEVmZmVjdCYmdGhpcy5wcm9wcy5vdXRFZmZlY3QubWFrZSghMCx0aGlzLnByb3BzKSk7dmFyIGk9dGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cCxzPWkmJiFpLmlzTW91bnRpbmc/IShcImVudGVyXCJpbiB0aGlzLnByb3BzJiYhMT09PXRoaXMucHJvcHMuZW50ZXIpOnRoaXMucHJvcHMuYXBwZWFyO3JldHVybiB0aGlzLmlzT24mJigodm9pZCAwIT09dGhpcy5wcm9wcy53aGVufHx2b2lkIDAhPT10aGlzLnByb3BzLnNweSkmJiFzfHxfZ2xvYmFscy5zc3ImJiFfZ2xvYmFscy5mYWRlT3V0RW5hYmxlZCYmIXRoaXMucHJvcHMuc3NyRmFkZW91dCYmdGhpcy5wcm9wcy5vdXRFZmZlY3QmJiF0aGlzLnByb3BzLnNzclJldmVhbCYmdC5nZXRUb3AodGhpcy5lbCk8d2luZG93LnBhZ2VZT2Zmc2V0K3dpbmRvdy5pbm5lckhlaWdodCk/KHRoaXMuaXNTaG93bj0hMCx0aGlzLnNldFN0YXRlKHtoYXNBcHBlYXJlZDohMCxjb2xsYXBzZTp0aGlzLnByb3BzLmNvbGxhcHNlP3toZWlnaHQ6dGhpcy5nZXREaW1lbnNpb25WYWx1ZSgpfTp0aGlzLnN0YXRlLmNvbGxhcHNlLHN0eWxlOntvcGFjaXR5OjF9fSksdm9pZCB0aGlzLm9uUmV2ZWFsKHRoaXMucHJvcHMpKTpfZ2xvYmFscy5zc3ImJihfZ2xvYmFscy5mYWRlT3V0RW5hYmxlZHx8dGhpcy5wcm9wcy5zc3JGYWRlb3V0KSYmdGhpcy5wcm9wcy5vdXRFZmZlY3QmJnQuZ2V0VG9wKHRoaXMuZWwpPHdpbmRvdy5wYWdlWU9mZnNldCt3aW5kb3cuaW5uZXJIZWlnaHQ/KHRoaXMuc2V0U3RhdGUoe3N0eWxlOntvcGFjaXR5OjAsdHJhbnNpdGlvbjpcIm9wYWNpdHkgMTAwMG1zIDEwMDBtc1wifX0pLHZvaWQgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZS5yZXZlYWwoZS5wcm9wcywhMCl9LDJlMykpOnZvaWQodGhpcy5pc09uJiYodGhpcy5wcm9wcy5mb3JjZT90aGlzLmFuaW1hdGUodGhpcy5wcm9wcyk6dGhpcy5yZXZlYWwodGhpcy5wcm9wcykpKX19fSx7a2V5OlwiY2FzY2FkZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT12b2lkIDA7aT1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbihlLHQpe3JldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7a2V5OnQsc3R5bGU6e2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIix3aGl0ZVNwYWNlOlwicHJlXCJ9fSxlKX0pOl9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGUpO3ZhciBzPXRoaXMucHJvcHNbdGhpcy5pc09ufHwhdGhpcy5wcm9wcy5vdXRFZmZlY3Q/XCJpbkVmZmVjdFwiOlwib3V0RWZmZWN0XCJdLG89cy5kdXJhdGlvbixuPXMucmV2ZXJzZSxyPWkubGVuZ3RoLGE9MipvO3RoaXMucHJvcHMuY29sbGFwc2UmJihhPXBhcnNlSW50KHRoaXMuc3RhdGUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24sMTApLG89YS8yKTt2YXIgbD1uP3I6MDtyZXR1cm4gaT1pLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT09KHZvaWQgMD09PWU/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKGUpKSYmZT9fcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGUse3N0eWxlOl9leHRlbmRzKHt9LGUucHJvcHMuc3R5bGUsdC5zdGF0ZS5zdHlsZSx7YW5pbWF0aW9uRHVyYXRpb246TWF0aC5yb3VuZCgoMCxfZ2xvYmFscy5jYXNjYWRlKShuP2wtLTpsKyssMCxyLG8sYSkpK1wibXNcIn0pfSk6ZX0pfX0se2tleTpcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih2b2lkIDAhPT1lLndoZW4mJih0aGlzLmlzT249ISFlLndoZW4pLGUuZnJhY3Rpb24hPT10aGlzLnByb3BzLmZyYWN0aW9uJiZ0aGlzLm9ic2VydmUoZSwhMCksIXRoaXMuaXNPbiYmZS5vbkV4aXRlZCYmXCJleGl0XCJpbiBlJiYhMT09PWUuZXhpdClyZXR1cm4gdm9pZCBlLm9uRXhpdGVkKCk7ZS5kaXNhYmxlZHx8KGUuY29sbGFwc2UmJiF0aGlzLnByb3BzLmNvbGxhcHNlJiYodGhpcy5zZXRTdGF0ZSh7c3R5bGU6e30sY29sbGFwc2U6dC5nZXRJbml0aWFsQ29sbGFwc2VTdHlsZShlKX0pLHRoaXMuaXNTaG93bj0hMSksZS53aGVuPT09dGhpcy5wcm9wcy53aGVuJiZlLnNweT09PXRoaXMucHJvcHMuc3B5fHx0aGlzLnJldmVhbChlKSx0aGlzLm9uUmV2ZWFsVGltZW91dCYmIXRoaXMuaXNPbiYmKHRoaXMub25SZXZlYWxUaW1lb3V0PXdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5vblJldmVhbFRpbWVvdXQpKSl9fSx7a2V5OlwiZ2V0Q2hpbGRcIix2YWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMuc2F2ZWRDaGlsZCYmIXRoaXMucHJvcHMuZGlzYWJsZWQpcmV0dXJuIHRoaXMuc2F2ZWRDaGlsZDtpZihcIm9iamVjdFwiPT09X3R5cGVvZih0aGlzLnByb3BzLmNoaWxkcmVuKSl7dmFyIGU9X3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7cmV0dXJuXCJ0eXBlXCJpbiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS50eXBlfHxcInJlZlwiIT09dGhpcy5wcm9wcy5yZWZQcm9wP2U6X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLGUpfXJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLG51bGwsdGhpcy5wcm9wcy5jaGlsZHJlbil9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT12b2lkIDA7ZT10aGlzLnN0YXRlLmhhc0FwcGVhcmVkPyF0aGlzLnByb3BzLnVubW91bnRPbkV4aXR8fCF0aGlzLnN0YXRlLmhhc0V4aXRlZHx8dGhpcy5pc09uOiF0aGlzLnByb3BzLm1vdW50T25FbnRlcnx8dGhpcy5pc09uO3ZhciB0PXRoaXMuZ2V0Q2hpbGQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnJlZiYmKHRoaXMuY2hpbGRSZWY9dC5yZWYpO3ZhciBpPSExLHM9dC5wcm9wcyxvPXMuc3R5bGUsbj1zLmNsYXNzTmFtZSxyPXMuY2hpbGRyZW4sYT10aGlzLnByb3BzLmRpc2FibGVkP246KHRoaXMucHJvcHMub3V0RWZmZWN0P19nbG9iYWxzLm5hbWVzcGFjZTpcIlwiKSsodGhpcy5zdGF0ZS5jbGFzc05hbWU/XCIgXCIrdGhpcy5zdGF0ZS5jbGFzc05hbWU6XCJcIikrKG4/XCIgXCIrbjpcIlwiKXx8dm9pZCAwLGw9dm9pZCAwO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuc3RhdGUuc3R5bGUuYW5pbWF0aW9uTmFtZSYmKHRoaXMuc3RhdGUuc3R5bGUuYW5pbWF0aW9uTmFtZT10aGlzLnN0YXRlLnN0eWxlLmFuaW1hdGlvbk5hbWUoIXRoaXMuaXNPbix0aGlzLnByb3BzKSksdGhpcy5wcm9wcy5jYXNjYWRlJiYhdGhpcy5wcm9wcy5kaXNhYmxlZCYmciYmdGhpcy5zdGF0ZS5zdHlsZS5hbmltYXRpb25OYW1lPyhpPXRoaXMuY2FzY2FkZShyKSxsPV9leHRlbmRzKHt9LG8se29wYWNpdHk6MX0pKTpsPXRoaXMucHJvcHMuZGlzYWJsZWQ/bzpfZXh0ZW5kcyh7fSxvLHRoaXMuc3RhdGUuc3R5bGUpO3ZhciBwPV9leHRlbmRzKHt9LHRoaXMucHJvcHMucHJvcHMsX2RlZmluZVByb3BlcnR5KHtjbGFzc05hbWU6YSxzdHlsZTpsfSx0aGlzLnByb3BzLnJlZlByb3AsdGhpcy5zYXZlUmVmKSksaD1fcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHQscCxlP2l8fHI6dm9pZCAwKTtyZXR1cm4gdm9pZCAwIT09dGhpcy5wcm9wcy5jb2xsYXBzZT90aGlzLnByb3BzLmNvbGxhcHNlRWw/X3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNvbGxhcHNlRWwse3N0eWxlOl9leHRlbmRzKHt9LHRoaXMucHJvcHMuY29sbGFwc2VFbC5zdHlsZSx0aGlzLnByb3BzLmRpc2FibGVkP3ZvaWQgMDp0aGlzLnN0YXRlLmNvbGxhcHNlKSxjaGlsZHJlbjpofSk6X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6dGhpcy5wcm9wcy5kaXNhYmxlZD92b2lkIDA6dGhpcy5zdGF0ZS5jb2xsYXBzZSxjaGlsZHJlbjpofSk6aH19LHtrZXk6XCJtYWtlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT1mdW5jdGlvbigpe2UuY2FsbCh0LHQucHJvcHMpLHQudGlja2luZz0hMX07cmV0dXJuIGZ1bmN0aW9uKCl7dC50aWNraW5nfHwoKDAsX2dsb2JhbHMucmFmKShpKSx0LnRpY2tpbmc9ITApfX19LHtrZXk6XCJpblZpZXdwb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoIXRoaXMuZWx8fHdpbmRvdy5kb2N1bWVudC5oaWRkZW4pcmV0dXJuITE7dmFyIGk9dGhpcy5lbC5vZmZzZXRIZWlnaHQscz13aW5kb3cucGFnZVlPZmZzZXQtdC5nZXRUb3AodGhpcy5lbCksbz1NYXRoLm1pbihpLHdpbmRvdy5pbm5lckhlaWdodCkqKF9nbG9iYWxzLmdsb2JhbEhpZGU/ZS5mcmFjdGlvbjowKTtyZXR1cm4gcz5vLXdpbmRvdy5pbm5lckhlaWdodCYmczxpLW99fSx7a2V5OlwicmVzaXplXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcyYmdGhpcy5lbCYmdGhpcy5pc09uJiZ0aGlzLmluVmlld3BvcnQoZSkmJih0aGlzLnVubGlzdGVuKCksdGhpcy5pc1Nob3duPXRoaXMuaXNPbix0aGlzLnNldFN0YXRlKHtoYXNFeGl0ZWQ6IXRoaXMuaXNPbixoYXNBcHBlYXJlZDohMCxjb2xsYXBzZTp2b2lkIDAsc3R5bGU6e29wYWNpdHk6dGhpcy5pc09ufHwhZS5vdXRFZmZlY3Q/MTowfX0pLHRoaXMub25SZXZlYWwoZSkpfX0se2tleTpcImxpc3RlblwiLHZhbHVlOmZ1bmN0aW9uKCl7X2dsb2JhbHMub2JzZXJ2ZXJNb2RlfHx0aGlzLmlzTGlzdGVuZXJ8fCh0aGlzLmlzTGlzdGVuZXI9ITAsd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLnJldmVhbEhhbmRsZXIse3Bhc3NpdmU6ITB9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5yZXZlYWxIYW5kbGVyLHtwYXNzaXZlOiEwfSksd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5yZXZlYWxIYW5kbGVyLHtwYXNzaXZlOiEwfSksd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb2xsYXBzZWVuZFwiLHRoaXMucmV2ZWFsSGFuZGxlcix7cGFzc2l2ZTohMH0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyLHtwYXNzaXZlOiEwfSkpfX0se2tleTpcInVubGlzdGVuXCIsdmFsdWU6ZnVuY3Rpb24oKXshX2dsb2JhbHMub2JzZXJ2ZXJNb2RlJiZ0aGlzLmlzTGlzdGVuZXImJih3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMucmV2ZWFsSGFuZGxlcix7cGFzc2l2ZTohMH0pLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLnJldmVhbEhhbmRsZXIse3Bhc3NpdmU6ITB9KSx3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0aGlzLnJldmVhbEhhbmRsZXIse3Bhc3NpdmU6ITB9KSx3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbGxhcHNlZW5kXCIsdGhpcy5yZXZlYWxIYW5kbGVyLHtwYXNzaXZlOiEwfSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIse3Bhc3NpdmU6ITB9KSx0aGlzLmlzTGlzdGVuZXI9ITEpLHRoaXMub25SZXZlYWxUaW1lb3V0JiYodGhpcy5vblJldmVhbFRpbWVvdXQ9d2luZG93LmNsZWFyVGltZW91dCh0aGlzLm9uUmV2ZWFsVGltZW91dCkpLHRoaXMuYW5pbWF0aW9uRW5kVGltZW91dCYmKHRoaXMuYW5pbWF0aW9uRW5kVGltZW91dD13aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uRW5kVGltZW91dCkpfX1dLFt7a2V5OlwiZ2V0SW5pdGlhbENvbGxhcHNlU3R5bGVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm57aGVpZ2h0OjAsdmlzaWJpbGl0eTplLndoZW4/dm9pZCAwOlwiaGlkZGVuXCJ9fX0se2tleTpcImdldFRvcFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcig7dm9pZCAwPT09ZS5vZmZzZXRUb3A7KWU9ZS5wYXJlbnROb2RlO2Zvcih2YXIgdD1lLm9mZnNldFRvcDtlLm9mZnNldFBhcmVudDt0Kz1lLm9mZnNldFRvcCllPWUub2Zmc2V0UGFyZW50O3JldHVybiB0fX1dKSx0fShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtSZXZlYWxCYXNlLnByb3BUeXBlcz1wcm9wVHlwZXMsUmV2ZWFsQmFzZS5kZWZhdWx0UHJvcHM9ZGVmYXVsdFByb3BzLFJldmVhbEJhc2UuY29udGV4dFR5cGVzPWNvbnRleHRUeXBlcyxSZXZlYWxCYXNlLmRpc3BsYXlOYW1lPVwiUmV2ZWFsQmFzZVwiLGV4cG9ydHMuZGVmYXVsdD1SZXZlYWxCYXNlLG1vZHVsZS5leHBvcnRzPWV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG8pe3JldHVybiBvJiZvLl9fZXNNb2R1bGU/bzp7ZGVmYXVsdDpvfX1mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobyxlKXt2YXIgcj17fTtmb3IodmFyIHQgaW4gbyllLmluZGV4T2YodCk+PTB8fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLHQpJiYoclt0XT1vW3RdKTtyZXR1cm4gcn1mdW5jdGlvbiBtYWtlKG8sZSl7dmFyIHI9ZS5sZWZ0LHQ9ZS5yaWdodCxwPWUudXAsbD1lLmRvd24sdT1lLnRvcCxhPWUuYm90dG9tLGk9ZS5iaWcsbj1lLm1pcnJvcixzPWUub3Bwb3NpdGUsZD0ocj8xOjApfCh0PzI6MCl8KHV8fGw/NDowKXwoYXx8cD84OjApfChuPzE2OjApfChzPzMyOjApfChvPzY0OjApfChpPzEyODowKTtpZihsb29rdXAuaGFzT3duUHJvcGVydHkoZCkpcmV0dXJuIGxvb2t1cFtkXTt2YXIgXz1yfHx0fHxwfHxsfHx1fHxhLGY9dm9pZCAwLGI9dm9pZCAwO2lmKF8pe2lmKCFuIT0hKG8mJnMpKXt2YXIgeT1bdCxyLGEsdSxsLHBdO3I9eVswXSx0PXlbMV0sdT15WzJdLGE9eVszXSxwPXlbNF0sbD15WzVdfXZhciBtPWk/XCIyMDAwcHhcIjpcIjEwMCVcIjtmPXI/XCItXCIrbTp0P206XCIwXCIsYj1sfHx1P1wiLVwiK206cHx8YT9tOlwiMFwifXJldHVybiBsb29rdXBbZF09KDAsX2dsb2JhbHMuYW5pbWF0aW9uKSgobz9cInRvXCI6XCJmcm9tXCIpK1wiIHtcIisoXz9cIiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKFwiK2YrXCIsIFwiK2IrXCIsIDApO1wiOlwiXCIpK1wifVxcbiAgICAgXCIrKG8/XCJmcm9tXCI6XCJ0b1wiKStcIiB7dHJhbnNmb3JtOiBub25lO30gXCIpLGxvb2t1cFtkXX1mdW5jdGlvbiBTbGlkZSgpe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpfZ2xvYmFscy5kZWZhdWx0cyxlPW8uY2hpbGRyZW4scj0oby5vdXQsby5mb3JldmVyKSx0PW8udGltZW91dCxwPW8uZHVyYXRpb24sbD12b2lkIDA9PT1wP19nbG9iYWxzLmRlZmF1bHRzLmR1cmF0aW9uOnAsdT1vLmRlbGF5LGE9dm9pZCAwPT09dT9fZ2xvYmFscy5kZWZhdWx0cy5kZWxheTp1LGk9by5jb3VudCxuPXZvaWQgMD09PWk/X2dsb2JhbHMuZGVmYXVsdHMuY291bnQ6aSxzPV9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvLFtcImNoaWxkcmVuXCIsXCJvdXRcIixcImZvcmV2ZXJcIixcInRpbWVvdXRcIixcImR1cmF0aW9uXCIsXCJkZWxheVwiLFwiY291bnRcIl0pLGQ9e21ha2U6bWFrZSxkdXJhdGlvbjp2b2lkIDA9PT10P2w6dCxkZWxheTphLGZvcmV2ZXI6cixjb3VudDpuLHN0eWxlOnthbmltYXRpb25GaWxsTW9kZTpcImJvdGhcIn0scmV2ZXJzZTpzLmxlZnR9O3JldHVybigwLF93cmFwMi5kZWZhdWx0KShzLGQsZCxlKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgX3Byb3BUeXBlcz1yZXF1aXJlKFwicHJvcC10eXBlc1wiKSxfd3JhcD1yZXF1aXJlKFwiLi93cmFwXCIpLF93cmFwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwKSxfZ2xvYmFscz1yZXF1aXJlKFwiLi9nbG9iYWxzXCIpLHByb3BUeXBlcz17b3V0Ol9wcm9wVHlwZXMuYm9vbCxsZWZ0Ol9wcm9wVHlwZXMuYm9vbCxyaWdodDpfcHJvcFR5cGVzLmJvb2wsdG9wOl9wcm9wVHlwZXMuYm9vbCxib3R0b206X3Byb3BUeXBlcy5ib29sLGJpZzpfcHJvcFR5cGVzLmJvb2wsbWlycm9yOl9wcm9wVHlwZXMuYm9vbCxvcHBvc2l0ZTpfcHJvcFR5cGVzLmJvb2wsZHVyYXRpb246X3Byb3BUeXBlcy5udW1iZXIsdGltZW91dDpfcHJvcFR5cGVzLm51bWJlcixkZWxheTpfcHJvcFR5cGVzLm51bWJlcixjb3VudDpfcHJvcFR5cGVzLm51bWJlcixmb3JldmVyOl9wcm9wVHlwZXMuYm9vbH0sbG9va3VwPXt9O1NsaWRlLnByb3BUeXBlcz1wcm9wVHlwZXMsZXhwb3J0cy5kZWZhdWx0PVNsaWRlLG1vZHVsZS5leHBvcnRzPWV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpbnNlcnRSdWxlKGUpe3RyeXtyZXR1cm4gc2hlZXQuaW5zZXJ0UnVsZShlLHNoZWV0LmNzc1J1bGVzLmxlbmd0aCl9Y2F0Y2goZSl7Y29uc29sZS53YXJuKFwicmVhY3QtcmV2ZWFsIC0gYW5pbWF0aW9uIGZhaWxlZFwiKX19ZnVuY3Rpb24gY2FzY2FkZShlLG4sdCxvLHIpe3ZhciBzPU1hdGgubG9nKG8pLGk9TWF0aC5sb2cociksYT0oaS1zKS8odC1uKTtyZXR1cm4gTWF0aC5leHAocythKihlLW4pKX1mdW5jdGlvbiBhbmltYXRpb24oZSl7aWYoIXNoZWV0KXJldHVyblwiXCI7dmFyIG49XCJAa2V5ZnJhbWVzIFwiKyhuYW1lK2NvdW50ZXIpK1wie1wiK2UrXCJ9XCIsdD1lZmZlY3RNYXBbZV07cmV0dXJuIHQ/XCJcIituYW1lK3Q6KHNoZWV0Lmluc2VydFJ1bGUobixzaGVldC5jc3NSdWxlcy5sZW5ndGgpLGVmZmVjdE1hcFtlXT1jb3VudGVyLFwiXCIrbmFtZStjb3VudGVyKyspfWZ1bmN0aW9uIGhpZGVBbGwoKXtnbG9iYWxIaWRlfHwoZXhwb3J0cy5nbG9iYWxIaWRlPWdsb2JhbEhpZGU9ITAsd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixoaWRlQWxsLCEwKSxpbnNlcnRSdWxlKFwiLlwiK25hbWVzcGFjZStcIiB7IG9wYWNpdHk6IDA7IH1cIiksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLGhpZGVBbGwsITApLHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGhpZGVBbGwpKX1mdW5jdGlvbiBjb25maWcoZSl7dmFyIG49ZS5zc3JGYWRlb3V0O2V4cG9ydHMuZmFkZU91dEVuYWJsZWQ9ZmFkZU91dEVuYWJsZWQ9bn1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmluc2VydFJ1bGU9aW5zZXJ0UnVsZSxleHBvcnRzLmNhc2NhZGU9Y2FzY2FkZSxleHBvcnRzLmFuaW1hdGlvbj1hbmltYXRpb24sZXhwb3J0cy5oaWRlQWxsPWhpZGVBbGwsZXhwb3J0cy5kZWZhdWx0PWNvbmZpZzt2YXIgbmFtZXNwYWNlPWV4cG9ydHMubmFtZXNwYWNlPVwicmVhY3QtcmV2ZWFsXCIsZGVmYXVsdHM9ZXhwb3J0cy5kZWZhdWx0cz17ZHVyYXRpb246MWUzLGRlbGF5OjAsY291bnQ6MX0sc3NyPWV4cG9ydHMuc3NyPSEwLG9ic2VydmVyTW9kZT1leHBvcnRzLm9ic2VydmVyTW9kZT0hMSxyYWY9ZXhwb3J0cy5yYWY9ZnVuY3Rpb24oZSl7cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGUsNjYpfSxkaXNhYmxlU3NyPWV4cG9ydHMuZGlzYWJsZVNzcj1mdW5jdGlvbigpe3JldHVybiBleHBvcnRzLnNzcj1zc3I9ITF9LGZhZGVPdXRFbmFibGVkPWV4cG9ydHMuZmFkZU91dEVuYWJsZWQ9ITEsc3NyRmFkZW91dD1leHBvcnRzLnNzckZhZGVvdXQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3JldHVybiBleHBvcnRzLmZhZGVPdXRFbmFibGVkPWZhZGVPdXRFbmFibGVkPWV9LGdsb2JhbEhpZGU9ZXhwb3J0cy5nbG9iYWxIaWRlPSExLGllMTA9ZXhwb3J0cy5pZTEwPSExLGNvbGxhcHNlZW5kPWV4cG9ydHMuY29sbGFwc2VlbmQ9dm9pZCAwLGNvdW50ZXI9MSxlZmZlY3RNYXA9e30sc2hlZXQ9ITEsbmFtZT1uYW1lc3BhY2UrXCItXCIrTWF0aC5mbG9vcigxZTE1Kk1hdGgucmFuZG9tKCkpK1wiLVwiO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwibm9kZWpzXCIhPT13aW5kb3cubmFtZSYmd2luZG93LmRvY3VtZW50JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yKXtleHBvcnRzLm9ic2VydmVyTW9kZT1vYnNlcnZlck1vZGU9XCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93JiZcIkludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcImluIHdpbmRvdyYmXCJpbnRlcnNlY3Rpb25SYXRpb1wiaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlJiYvXFx7XFxzKlxcW25hdGl2ZSBjb2RlXFxdXFxzKlxcfS8udGVzdChcIlwiK0ludGVyc2VjdGlvbk9ic2VydmVyKSxleHBvcnRzLnJhZj1yYWY9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8cmFmLGV4cG9ydHMuc3NyPXNzcj13aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLXJlYWN0cm9vdF1cIikubGVuZ3RoPjAsLTEhPT1uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSAxMFwiKSYmKGV4cG9ydHMuaWUxMD1pZTEwPSEwKSxzc3ImJlwicGVyZm9ybWFuY2VcImluIHdpbmRvdyYmXCJ0aW1pbmdcImluIHdpbmRvdy5wZXJmb3JtYW5jZSYmXCJkb21Db250ZW50TG9hZGVkRXZlbnRFbmRcImluIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcmJndpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tTG9hZGluZyYmRGF0ZS5ub3coKS13aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbUxvYWRpbmc8MzAwJiYoZXhwb3J0cy5zc3I9c3NyPSExKSxzc3ImJndpbmRvdy5zZXRUaW1lb3V0KGRpc2FibGVTc3IsMTUwMCksb2JzZXJ2ZXJNb2RlfHwoZXhwb3J0cy5jb2xsYXBzZWVuZD1jb2xsYXBzZWVuZD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpLGNvbGxhcHNlZW5kLmluaXRFdmVudChcImNvbGxhcHNlZW5kXCIsITAsITApKTt2YXIgZWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KSxlbGVtZW50LnNoZWV0JiZlbGVtZW50LnNoZWV0LmNzc1J1bGVzJiZlbGVtZW50LnNoZWV0Lmluc2VydFJ1bGUmJihzaGVldD1lbGVtZW50LnNoZWV0LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsaGlkZUFsbCwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLGhpZGVBbGwsITApLHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGhpZGVBbGwpKX0iLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiB3cmFwKGUsdCxhLHIpe3JldHVyblwiaW5cImluIGUmJihlLndoZW49ZS5pbiksX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHIpPDI/X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JldmVhbEJhc2UyLmRlZmF1bHQsX2V4dGVuZHMoe30sZSx7aW5FZmZlY3Q6dCxvdXRFZmZlY3Q6YSxjaGlsZHJlbjpyfSkpOihyPV9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAocixmdW5jdGlvbihyKXtyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JldmVhbEJhc2UyLmRlZmF1bHQsX2V4dGVuZHMoe30sZSx7aW5FZmZlY3Q6dCxvdXRFZmZlY3Q6YSxjaGlsZHJlbjpyfSkpfSksXCJGcmFnbWVudFwiaW4gX3JlYWN0Mi5kZWZhdWx0P19yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdDIuZGVmYXVsdC5GcmFnbWVudCxudWxsLHIpOl9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLG51bGwscikpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgYT1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIGEpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEscikmJihlW3JdPWFbcl0pfXJldHVybiBlfTtleHBvcnRzLmRlZmF1bHQ9d3JhcDt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKSxfcmVhY3QyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KSxfUmV2ZWFsQmFzZT1yZXF1aXJlKFwiLi9SZXZlYWxCYXNlXCIpLF9SZXZlYWxCYXNlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXZlYWxCYXNlKTttb2R1bGUuZXhwb3J0cz1leHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==