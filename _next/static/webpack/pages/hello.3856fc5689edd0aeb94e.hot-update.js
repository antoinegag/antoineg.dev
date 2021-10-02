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
/* harmony import */ var _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/hello.module.css */ "./styles/hello.module.css");
/* harmony import */ var _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2__);
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
    className: "lg:text-8xl text-6xl mb-8 stroke-yellow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "HELLO"), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: (_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default().media_link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "antoineg.dev")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: (_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default().media_link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "My Projects")), __jsx("a", {
    href: "https://www.instagram.com/antoine.gagn/",
    className: (_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default().media_link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Instagram"), __jsx("a", {
    href: "https://www.goodreads.com/user/show/131654245-antoine",
    className: (_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default().media_link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Goodreads"), __jsx("a", {
    href: "https://open.spotify.com/user/antoinem8",
    className: (_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default().media_link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Spotify"), __jsx("a", {
    href: "https://vsco.co/antoinega/gallery",
    className: (_styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default().media_link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "VSCO"), __jsx("div", {
    className: "lg:text-8xl text-6xl mb-8 stroke-yellow mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8udHN4Il0sIm5hbWVzIjpbIkhlbGxvIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixTQUNFO0FBQUssYUFBUyxFQUFDLGdJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFQyw0RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBRkYsRUFLRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFQSw0RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBTEYsRUFRRTtBQUNFLFFBQUksRUFBQyx5Q0FEUDtBQUVFLGFBQVMsRUFBRUEsNEVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixFQWNFO0FBQ0UsUUFBSSxFQUFDLHVEQURQO0FBRUUsYUFBUyxFQUFFQSw0RUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLEVBb0JFO0FBQ0UsUUFBSSxFQUFDLHlDQURQO0FBRUUsYUFBUyxFQUFFQSw0RUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGLEVBMEJFO0FBQUcsUUFBSSxFQUFDLG1DQUFSO0FBQTRDLGFBQVMsRUFBRUEsNEVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsRUFnQ0U7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRixDQURGO0FBb0NEO0tBckN1QkQsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxsby4zODU2ZmM1Njg5ZWRkMGFlYjk0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9oZWxsby5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxsbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIGZvbnQtc2VtaWJvbGQgIGJnLWdyYWRpZW50LXRvLXRsIHRvLWdyZWVuLTEwMCBmcm9tLXBlYWNoLTEwMCB2aWEtZ3JlZW4tNTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp0ZXh0LTh4bCB0ZXh0LTZ4bCBtYi04IHN0cm9rZS15ZWxsb3dcIj5IRUxMTzwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9PmFudG9pbmVnLmRldjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFfbGlua30+TXkgUHJvamVjdHM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hbnRvaW5lLmdhZ24vXCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9saW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvMTMxNjU0MjQ1LWFudG9pbmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9XHJcbiAgICAgID5cclxuICAgICAgICBHb29kcmVhZHNcclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdXNlci9hbnRvaW5lbThcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9XHJcbiAgICAgID5cclxuICAgICAgICBTcG90aWZ5XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdnNjby5jby9hbnRvaW5lZ2EvZ2FsbGVyeVwiIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9PlxyXG4gICAgICAgIFZTQ09cclxuICAgICAgPC9hPlxyXG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB1bmRlcmxpbmUgZm9udC1ub3JtYWwgeWVsbG93LXdhdnlcIj5Qb3N0czwvYT5cclxuICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp0ZXh0LTh4bCB0ZXh0LTZ4bCBtYi04IHN0cm9rZS15ZWxsb3cgbXQtNlwiPkhFTExPPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=