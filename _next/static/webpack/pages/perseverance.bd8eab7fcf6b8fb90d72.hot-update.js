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
/* harmony import */ var _components_3D_Rover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/3D/Rover */ "./components/3D/Rover/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\perseverance.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Perseverance = function Perseverance() {
  _s();

  var date = Date.UTC(2021, 2, 18, 8, 55, 0);
  var diff = date - +Date.UTC();

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(calculateTimeLeft()),
      timeLeft = _useState[0],
      setTimeLeft = _useState[1];

  return __jsx("div", {
    className: "bg-gray-800 w-full min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Perseverance landing countdown"), __jsx("h1", {
    className: "text-white text-3xl lg:text-9xl absolute w-full text-center pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, timeLeft.hours)), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsImRpZmYiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImRpZmZlcmVuY2UiLCJ0aW1lTGVmdCIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXNlU3RhdGUiLCJzZXRUaW1lTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLENBQTdCLENBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUdILElBQUksR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUwsRUFBckI7O0FBRUEsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQUlDLFVBQVUsR0FBRyxDQUFDTCxJQUFELEdBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQTFCO0FBQ0EsUUFBSUssUUFBUSxHQUFHLEVBQWY7O0FBRUEsUUFBSUQsVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2xCQyxjQUFRLEdBQUc7QUFDVEMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osVUFBVSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBckIsQ0FERztBQUVUSyxhQUFLLEVBQUVGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSixVQUFVLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBWCxHQUFrQyxFQUE3QyxDQUZFO0FBR1RNLGVBQU8sRUFBRUgsSUFBSSxDQUFDQyxLQUFMLENBQVlKLFVBQVUsR0FBRyxJQUFiLEdBQW9CLEVBQXJCLEdBQTJCLEVBQXRDLENBSEE7QUFJVE8sZUFBTyxFQUFFSixJQUFJLENBQUNDLEtBQUwsQ0FBWUosVUFBVSxHQUFHLElBQWQsR0FBc0IsRUFBakM7QUFKQSxPQUFYO0FBTUQ7O0FBRUQsV0FBT0MsUUFBUDtBQUNELEdBZEQ7O0FBSnlCLGtCQW9CT08sc0RBQVEsQ0FBQ1QsaUJBQWlCLEVBQWxCLENBcEJmO0FBQUEsTUFvQmxCRSxRQXBCa0I7QUFBQSxNQW9CUlEsV0FwQlE7O0FBc0J6QixTQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDLGtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsUUFBUSxDQUFDSSxLQURaLENBSkYsQ0FERixFQVNFLE1BQUMsNERBQUQ7QUFBTyxhQUFTLEVBQUMsMkNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBYUQsQ0FuQ0Q7O0dBQU1YLFk7O0tBQUFBLFk7QUFxQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNldmVyYW5jZS5iZDhlYWI3ZmNmNmI4ZmI5MGQ3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3ZlciBmcm9tIFwiLi4vY29tcG9uZW50cy8zRC9Sb3ZlclwiO1xyXG5cclxuY29uc3QgUGVyc2V2ZXJhbmNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBEYXRlLlVUQygyMDIxLCAyLCAxOCwgOCwgNTUsIDApO1xyXG4gIGNvbnN0IGRpZmYgPSBkYXRlIC0gK0RhdGUuVVRDKCk7XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZVRpbWVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRpZmZlcmVuY2UgPSArZGF0ZSAtICtuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRpbWVMZWZ0ID0ge307XHJcblxyXG4gICAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XHJcbiAgICAgIHRpbWVMZWZ0ID0ge1xyXG4gICAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcclxuICAgICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwKSAlIDYwKSxcclxuICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRpbWVMZWZ0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoY2FsY3VsYXRlVGltZUxlZnQoKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgcHQtMTIgYWJzb2x1dGVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBsZzp0ZXh0LTh4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICBQZXJzZXZlcmFuY2UgbGFuZGluZyBjb3VudGRvd25cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIGxnOnRleHQtOXhsIGFic29sdXRlIHctZnVsbCB0ZXh0LWNlbnRlciBwdC0yXCI+XHJcbiAgICAgICAgICB7dGltZUxlZnQuaG91cnN9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSb3ZlciBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS04MDAgdG9wLTAgei0wIHctZnVsbFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2V2ZXJhbmNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9