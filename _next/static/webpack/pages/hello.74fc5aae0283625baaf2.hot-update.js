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
    className: "xxl:text-8xl mb-8 stroke-yellow",
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
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "antoineg.dev")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "My Projects")), __jsx("a", {
    href: "https://www.instagram.com/antoine.gagn/",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Instagram"), __jsx("a", {
    href: "https://www.goodreads.com/user/show/131654245-antoine",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Goodreads"), __jsx("a", {
    href: "https://open.spotify.com/user/antoinem8",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Spotify"), __jsx("a", {
    href: "https://vsco.co/antoinega/gallery",
    className: _styles_hello_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.media_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "VSCO"), __jsx("div", {
    className: "text-8xl mb-8 stroke-yellow mt-6",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8udHN4Il0sIm5hbWVzIjpbIkhlbGxvIiwic3R5bGVzIiwibWVkaWFfbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsMkZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FGRixFQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELCtEQUFNLENBQUNDLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FMRixFQVFFO0FBQ0UsUUFBSSxFQUFDLHlDQURQO0FBRUUsYUFBUyxFQUFFRCwrREFBTSxDQUFDQyxVQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLEVBY0U7QUFDRSxRQUFJLEVBQUMsdURBRFA7QUFFRSxhQUFTLEVBQUVELCtEQUFNLENBQUNDLFVBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEYsRUFvQkU7QUFDRSxRQUFJLEVBQUMseUNBRFA7QUFFRSxhQUFTLEVBQUVELCtEQUFNLENBQUNDLFVBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsRUEwQkU7QUFBRyxRQUFJLEVBQUMsbUNBQVI7QUFBNEMsYUFBUyxFQUFFRCwrREFBTSxDQUFDQyxVQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGLEVBZ0NFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0YsQ0FERjtBQW9DRDtLQXJDdUJGLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVsbG8uNzRmYzVhYWUwMjgzNjI1YmFhZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaGVsbG8ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVsbG8oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBiZy1ncmF5LTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIGZsZXgtY29sIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4eGw6dGV4dC04eGwgbWItOCBzdHJva2UteWVsbG93XCI+SEVMTE88L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9saW5rfT5hbnRvaW5lZy5kZXY8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX2xpbmt9Pk15IFByb2plY3RzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYW50b2luZS5nYWduL1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFfbGlua31cclxuICAgICAgPlxyXG4gICAgICAgIEluc3RhZ3JhbVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vdXNlci9zaG93LzEzMTY1NDI0NS1hbnRvaW5lXCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9saW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAgR29vZHJlYWRzXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3VzZXIvYW50b2luZW04XCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9saW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAgU3BvdGlmeVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZzY28uY28vYW50b2luZWdhL2dhbGxlcnlcIiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9saW5rfT5cclxuICAgICAgICBWU0NPXHJcbiAgICAgIDwvYT5cclxuICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdW5kZXJsaW5lIGZvbnQtbm9ybWFsIHllbGxvdy13YXZ5XCI+UG9zdHM8L2E+XHJcbiAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC04eGwgbWItOCBzdHJva2UteWVsbG93IG10LTZcIj5IRUxMTzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9