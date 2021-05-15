self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Hero/index.tsx":
/*!****************************************!*\
  !*** ./components/Home/Hero/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Hero; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero.module.css */ "./components/Home/Hero/hero.module.css");
/* harmony import */ var _hero_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hero_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\Home\\Hero\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Hero() {
  return __jsx("div", {
    className: (_hero_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-1/3 px-4 hidden md:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-none d-md-block",
    alt: "portrait",
    src: "/images/portrait.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full md:w-2/3 px-4 text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    y: [-50, 50],
    disabled: react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile && !react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isIPad13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-4xl md:text-6xl font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Antoine Gagnon."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Curiosity driven maker,", " ", __jsx("span", {
    className: "font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Web Developer"), ", tech enthusiast"), __jsx("hr", {
    className: "my-2 border-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Computer science student at University of Sherbrooke"))), __jsx("div", {
    className: (_hero_module_css__WEBPACK_IMPORTED_MODULE_3___default().more),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
}
_c = Hero;

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0hlcm8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhlcm8iLCJzdHlsZXMiLCJpc01vYmlsZSIsImlzSVBhZDEzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsT0FBRyxFQUFDLFVBRk47QUFHRSxPQUFHLEVBQUMsc0JBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFVLEtBQUMsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBYjtBQUF3QixZQUFRLEVBQUVDLHlEQUFRLElBQUksQ0FBQ0MseURBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxvQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDMEIsR0FEMUIsRUFFRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLHNCQUpGLEVBU0U7QUFBSSxhQUFTLEVBQUMsc0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDREQVZGLENBREYsQ0FSRixFQTBCRTtBQUFLLGFBQVMsRUFBRUYsOERBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0ExQkYsQ0FERjtBQWtDRDtLQW5DdUJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjdmNTJmYTc1Mjc0YTMzZWQyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hlcm8ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgaXNJUGFkMTMsIGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtNCBoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiXHJcbiAgICAgICAgICBhbHQ9XCJwb3J0cmFpdFwiXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BvcnRyYWl0LmpwZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIHB4LTQgdGV4dC14bFwiPlxyXG4gICAgICAgIDxQYXJhbGxheCB5PXtbLTUwLCA1MF19IGRpc2FibGVkPXtpc01vYmlsZSAmJiAhaXNJUGFkMTN9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgQW50b2luZSBHYWdub24uXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEN1cmlvc2l0eSBkcml2ZW4gbWFrZXIse1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+V2ViIERldmVsb3Blcjwvc3Bhbj4sIHRlY2hcclxuICAgICAgICAgICAgZW50aHVzaWFzdFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTIgYm9yZGVyLWdyYXktNTAwXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgQ29tcHV0ZXIgc2NpZW5jZSBzdHVkZW50IGF0IFVuaXZlcnNpdHkgb2YgU2hlcmJyb29rZVxyXG4gICAgICAgICAgICB7LyogPGJyIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogV2ViIGRldmVsb3BlciBhdCBDb3ZlbyBSJkQgKi99XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9yZX0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==