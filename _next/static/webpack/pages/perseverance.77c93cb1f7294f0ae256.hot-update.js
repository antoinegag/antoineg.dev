webpackHotUpdate_N_E("pages/perseverance",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/perseverance.tsx":
/*!********************************!*\
  !*** ./pages/perseverance.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_3D_Rover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/3D/Rover */ "./components/3D/Rover/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\perseverance.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Perseverance = function Perseverance() {
  _s();

  var date = Date.UTC(2021, 2, 18, 8, 55, 0);
  var diff = date - +new Date();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(calculateTimeLeft()),
      timeLeft = _useState[0],
      setTimeLeft = _useState[1];

  var calculateTimeLeft = function calculateTimeLeft() {
    var difference = +date - +new Date();
    var timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    }

    return timeLeft;
  };

  return __jsx("div", {
    className: "bg-gray-800 w-full min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Perseverance landing countdown"), __jsx("h1", {
    className: "text-white text-3xl lg:text-9xl absolute w-full text-center pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

_s(Perseverance, "Ze1itcgh66kZsgTtTjMSVO3TIWU=");

_c = Perseverance;
/* harmony default export */ __webpack_exports__["default"] = (Perseverance);

var _c;

$RefreshReg$(_c, "Perseverance");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsImRpZmYiLCJ1c2VTdGF0ZSIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsImRpZmZlcmVuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLENBQTdCLENBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUdILElBQUksR0FBRyxDQUFDLElBQUlDLElBQUosRUFBckI7O0FBRnlCLGtCQUdPRyxzREFBUSxDQUFDQyxpQkFBaUIsRUFBbEIsQ0FIZjtBQUFBLE1BR2xCQyxRQUhrQjtBQUFBLE1BR1JDLFdBSFE7O0FBS3pCLE1BQU1GLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFJRyxVQUFVLEdBQUcsQ0FBQ1IsSUFBRCxHQUFRLENBQUMsSUFBSUMsSUFBSixFQUExQjtBQUNBLFFBQUlLLFFBQVEsR0FBRyxFQUFmOztBQUVBLFFBQUlFLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNsQkYsY0FBUSxHQUFHO0FBQ1RHLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdILFVBQVUsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQXJCLENBREc7QUFFVEksYUFBSyxFQUFFRixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsVUFBVSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQVgsR0FBa0MsRUFBN0MsQ0FGRTtBQUdUSyxlQUFPLEVBQUVILElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxVQUFVLEdBQUcsSUFBYixHQUFvQixFQUFyQixHQUEyQixFQUF0QyxDQUhBO0FBSVRNLGVBQU8sRUFBRUosSUFBSSxDQUFDQyxLQUFMLENBQVlILFVBQVUsR0FBRyxJQUFkLEdBQXNCLEVBQWpDO0FBSkEsT0FBWDtBQU1EOztBQUVELFdBQU9GLFFBQVA7QUFDRCxHQWREOztBQWdCQSxTQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDLGtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBU0UsTUFBQyw0REFBRDtBQUFPLGFBQVMsRUFBQywyQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREY7QUFhRCxDQWxDRDs7R0FBTVAsWTs7S0FBQUEsWTtBQW9DU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyc2V2ZXJhbmNlLjc3YzkzY2IxZjcyOTRmMGFlMjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzLzNEL1JvdmVyXCI7XHJcblxyXG5jb25zdCBQZXJzZXZlcmFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IERhdGUuVVRDKDIwMjEsIDIsIDE4LCA4LCA1NSwgMCk7XHJcbiAgY29uc3QgZGlmZiA9IGRhdGUgLSArbmV3IERhdGUoKTtcclxuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKGNhbGN1bGF0ZVRpbWVMZWZ0KCkpO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVUaW1lTGVmdCA9ICgpID0+IHtcclxuICAgIGxldCBkaWZmZXJlbmNlID0gK2RhdGUgLSArbmV3IERhdGUoKTtcclxuICAgIGxldCB0aW1lTGVmdCA9IHt9O1xyXG5cclxuICAgIGlmIChkaWZmZXJlbmNlID4gMCkge1xyXG4gICAgICB0aW1lTGVmdCA9IHtcclxuICAgICAgICBkYXlzOiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgIGhvdXJzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCksXHJcbiAgICAgICAgbWludXRlczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDAgLyA2MCkgJSA2MCksXHJcbiAgICAgICAgc2Vjb25kczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDApICUgNjApLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aW1lTGVmdDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB3LWZ1bGwgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHB0LTEyIGFic29sdXRlXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbGc6dGV4dC04eGwgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgUGVyc2V2ZXJhbmNlIGxhbmRpbmcgY291bnRkb3duXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBsZzp0ZXh0LTl4bCBhYnNvbHV0ZSB3LWZ1bGwgdGV4dC1jZW50ZXIgcHQtMlwiPlxyXG4gICAgICAgICAge31cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJvdmVyIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCB0b3AtMCB6LTAgdy1mdWxsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzZXZlcmFuY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=