webpackHotUpdate_N_E("pages/hello",{

/***/ "./pages/hello.tsx":
/*!*************************!*\
  !*** ./pages/hello.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hello; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/hello.module.css */ "./styles/hello.module.css");
/* harmony import */ var _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\hello.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Hello() {
  return __jsx("div", {
    className: "min-h-full bg-gray-800 flex items-center justify-center text-white flex-col font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-8xl mb-8 stroke-yellow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "HELLO"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "antoineg.dev")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "My Projects")), __jsx("a", {
    href: "https://www.instagram.com/antoine.gagn/",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Instagram"), __jsx("a", {
    href: "https://open.spotify.com/user/antoinem8",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Spotify"), __jsx("a", {
    href: "https://vsco.co/antoinega/gallery",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "VSCO"), __jsx("div", {
    className: "text-8xl mb-8 stroke-yellow mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "HELLO"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8udHN4Il0sIm5hbWVzIjpbIkhlbGxvIiwic3R5bGVzIiwibWVkaWFfbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsMkZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELCtEQUFNLENBQUNDLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FORixFQVNFO0FBQ0UsUUFBSSxFQUFDLHlDQURQO0FBRUUsYUFBUyxFQUFFRCwrREFBTSxDQUFDQyxVQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLEVBZUU7QUFDRSxRQUFJLEVBQUMseUNBRFA7QUFFRSxhQUFTLEVBQUVELCtEQUFNLENBQUNDLFVBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixFQXFCRTtBQUFHLFFBQUksRUFBQyxtQ0FBUjtBQUE0QyxhQUFTLEVBQUVELCtEQUFNLENBQUNDLFVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkYsRUEyQkU7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRixDQURGO0FBK0JEO0tBaEN1QkYsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxsby4zYzRjZmM5MGJjYzZkYzA2YTc3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9oZWxsby5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxsbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGJnLWdyYXktODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZmxleC1jb2wgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtOHhsIG1iLTggc3Ryb2tlLXllbGxvd1wiPkhFTExPPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtOHhsIG1iLTggc3Ryb2tlLXllbGxvdy13aGl0ZS10ZXh0XCI+SEVMTE88L2Rpdj4gKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFfbGlua30+YW50b2luZWcuZGV2PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9saW5rfT5NeSBQcm9qZWN0czwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FudG9pbmUuZ2Fnbi9cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9XHJcbiAgICAgID5cclxuICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdXNlci9hbnRvaW5lbThcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9XHJcbiAgICAgID5cclxuICAgICAgICBTcG90aWZ5XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdnNjby5jby9hbnRvaW5lZ2EvZ2FsbGVyeVwiIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9PlxyXG4gICAgICAgIFZTQ09cclxuICAgICAgPC9hPlxyXG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB1bmRlcmxpbmUgZm9udC1ub3JtYWwgeWVsbG93LXdhdnlcIj5Qb3N0czwvYT5cclxuICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBtYi04IHN0cm9rZS15ZWxsb3cgbXQtNlwiPkhFTExPPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=