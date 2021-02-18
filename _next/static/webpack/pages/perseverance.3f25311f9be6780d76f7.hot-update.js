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
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(hours), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(minutes), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(seconds));
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
    renderer: renderer,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInplcm9QYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLENBQWI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNEM7QUFBQSxRQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsUUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLFFBQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxRQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUMzRCxRQUFJQSxTQUFKLEVBQWU7QUFDYjtBQUNBLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELEtBSEQsTUFHTztBQUNMO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dDLCtEQUFPLENBQUNKLEtBQUQsQ0FEVixPQUNvQkksK0RBQU8sQ0FBQ0gsT0FBRCxDQUQzQixPQUN1Q0csK0RBQU8sQ0FBQ0YsT0FBRCxDQUQ5QyxDQURGO0FBS0Q7QUFDRixHQVpEOztBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsa0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBVyxRQUFJLEVBQUVOLElBQWpCO0FBQXVCLFlBQVEsRUFBRUcsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixFQVNFLE1BQUMsNERBQUQ7QUFBTyxhQUFTLEVBQUMsMkNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBYUQsQ0E5QkQ7O0tBQU1KLFk7QUFnQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNldmVyYW5jZS4zZjI1MzExZjliZTY3ODBkNzZmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuaW1wb3J0IFJvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzLzNEL1JvdmVyXCI7XHJcblxyXG5jb25zdCBQZXJzZXZlcmFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IERhdGUuVVRDKDIwMjEsIDEsIDE4LCAyMCwgNTUsIDApO1xyXG5cclxuICBjb25zdCByZW5kZXJlciA9ICh7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSkgPT4ge1xyXG4gICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICAvLyBSZW5kZXIgYSBjb21wbGV0ZWQgc3RhdGVcclxuICAgICAgcmV0dXJuIDxkaXY+TGFuZGVkITwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlbmRlciBhIGNvdW50ZG93blxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge3plcm9QYWQoaG91cnMpfTp7emVyb1BhZChtaW51dGVzKX06e3plcm9QYWQoc2Vjb25kcyl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgcHQtMTIgYWJzb2x1dGVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBsZzp0ZXh0LTh4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICBQZXJzZXZlcmFuY2UgbGFuZGluZyBjb3VudGRvd25cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIGxnOnRleHQtOXhsIGFic29sdXRlIHctZnVsbCB0ZXh0LWNlbnRlciBwdC0yXCI+XHJcbiAgICAgICAgICA8Q291bnRkb3duIGRhdGU9e2RhdGV9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJvdmVyIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCB0b3AtMCB6LTAgdy1mdWxsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzZXZlcmFuY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=