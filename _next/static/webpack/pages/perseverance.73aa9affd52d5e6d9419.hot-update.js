webpackHotUpdate_N_E("pages/perseverance",{

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
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _components_3D_Rover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/3D/Rover */ "./components/3D/Rover/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\perseverance.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Perseverance = function Perseverance() {
  var date = Date.UTC(2021, 1, 18, 20, 55, 0);

  var renderer = function renderer(_ref) {
    var hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds,
        completed = _ref.completed;

    if (completed) {
      // Render a completed state
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 14
        }
      }, "Landed!");
    } else {
      // Render a countdown
      return __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, hours, ":", minutes, ":", seconds);
    }
  };

  return __jsx("div", {
    className: "bg-gray-800 w-full min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Perseverance landing countdown"), __jsx("h1", {
    className: "text-white text-3xl lg:text-9xl absolute w-full text-center pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: date,
    daysInHours: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsQ0FBOUIsQ0FBYjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QztBQUFBLFFBQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxRQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsUUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLFFBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQzNELFFBQUlBLFNBQUosRUFBZTtBQUNiO0FBQ0EsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsS0FIRCxNQUdPO0FBQ0w7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0gsS0FESCxPQUNXQyxPQURYLE9BQ3FCQyxPQURyQixDQURGO0FBS0Q7QUFDRixHQVpEOztBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsa0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBVyxRQUFJLEVBQUVOLElBQWpCO0FBQXVCLGVBQVcsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixFQVNFLE1BQUMsNERBQUQ7QUFBTyxhQUFTLEVBQUMsMkNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBYUQsQ0E5QkQ7O0tBQU1ELFk7QUFnQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNldmVyYW5jZS43M2FhOWFmZmQ1MmQ1ZTZkOTQxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xyXG5pbXBvcnQgUm92ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvM0QvUm92ZXJcIjtcclxuXHJcbmNvbnN0IFBlcnNldmVyYW5jZSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRlID0gRGF0ZS5VVEMoMjAyMSwgMSwgMTgsIDIwLCA1NSwgMCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVyID0gKHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XHJcbiAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgIC8vIFJlbmRlciBhIGNvbXBsZXRlZCBzdGF0ZVxyXG4gICAgICByZXR1cm4gPGRpdj5MYW5kZWQhPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVuZGVyIGEgY291bnRkb3duXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7aG91cnN9OnttaW51dGVzfTp7c2Vjb25kc31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdy1mdWxsIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBwdC0xMiBhYnNvbHV0ZVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxnOnRleHQtOHhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIFBlcnNldmVyYW5jZSBsYW5kaW5nIGNvdW50ZG93blxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgbGc6dGV4dC05eGwgYWJzb2x1dGUgdy1mdWxsIHRleHQtY2VudGVyIHB0LTJcIj5cclxuICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17ZGF0ZX0gZGF5c0luSG91cnMgLz5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJvdmVyIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCB0b3AtMCB6LTAgdy1mdWxsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzZXZlcmFuY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=