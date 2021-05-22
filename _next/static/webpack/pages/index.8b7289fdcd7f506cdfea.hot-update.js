self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/About */ "./components/Home/About/index.tsx");
/* harmony import */ var _components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/Contact */ "./components/Home/Contact/index.tsx");
/* harmony import */ var _components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/Experience */ "./components/Home/Experience/index.tsx");
/* harmony import */ var _components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Experience/Current */ "./components/Home/Experience/Current.tsx");
/* harmony import */ var _components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Hero */ "./components/Home/Hero/index.tsx");
/* harmony import */ var react_page_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-page-scroller */ "./node_modules/react-page-scroller/es/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









var __N_SSG = true;
function index(_ref) {
  var projects = _ref.projects;
  var shouldSmoothScroll = !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile && !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isIPad13;
  var Scroller = shouldSmoothScroll ? react_page_scroller__WEBPACK_IMPORTED_MODULE_7__.default : (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: "ANTOINEG.DEV",
    description: "Curiosity driven maker, Web Developer, tech enthusiast",
    canonical: "https://antoineg.dev/",
    openGraph: {
      url: "https://antoineg.dev",
      title: "ANTOINEG.DEV",
      description: "Curiosity driven maker, Web Developer, tech enthusiast",
      images: [{
        url: "https://antoineg.dev/images/action.jpg",
        width: 585,
        height: 585,
        alt: "Portrait"
      }]
    },
    twitter: {
      handle: "@antoineg_dev",
      site: "https://antoineg.dev",
      cardType: "summary_large_image"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(Scroller // pageOnChange={this.handlePageChange}
  // onBeforePageScroll={this.handleBeforePageChange}
  // customPageNumber={this.state.currentPage}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwicHJvamVjdHMiLCJzaG91bGRTbW9vdGhTY3JvbGwiLCJpc01vYmlsZSIsImlzSVBhZDEzIiwiU2Nyb2xsZXIiLCJSZWFjdFBhZ2VTY3JvbGxlciIsIlJlYWN0IiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBTWUsU0FBU0EsS0FBVCxPQUFvQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDakQsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQ0MseURBQUQsSUFBYSxDQUFDQyx5REFBekM7QUFDQSxNQUFNQyxRQUFRLEdBQUdILGtCQUFrQixHQUFHSSx3REFBSCxHQUF1QkMsdURBQTFEO0FBRUEsU0FDRSxxRUFDRSxNQUFDLDZDQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxlQUFXLEVBQUMsd0RBRmQ7QUFHRSxhQUFTLEVBQUMsdUJBSFo7QUFJRSxhQUFTLEVBQUU7QUFDVEMsU0FBRyxFQUFFLHNCQURJO0FBRVRDLFdBQUssRUFBRSxjQUZFO0FBR1RDLGlCQUFXLEVBQUUsd0RBSEo7QUFJVEMsWUFBTSxFQUFFLENBQ047QUFDRUgsV0FBRyxFQUFFLHdDQURQO0FBRUVJLGFBQUssRUFBRSxHQUZUO0FBR0VDLGNBQU0sRUFBRSxHQUhWO0FBSUVDLFdBQUcsRUFBRTtBQUpQLE9BRE07QUFKQyxLQUpiO0FBaUJFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsZUFERDtBQUVQQyxVQUFJLEVBQUUsc0JBRkM7QUFHUEMsY0FBUSxFQUFFO0FBSEgsS0FqQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBNkJFLE1BQUMsUUFBRCxDQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVVFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBN0JGLENBREY7QUE0Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI3Mjg5ZmRjZDdmNTA2Y2RmZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0Fib3V0XCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdFwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IEN1cnJlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlL0N1cnJlbnRcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9IZXJvXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2plY3RzXCI7XHJcbmltcG9ydCBSZWFjdFBhZ2VTY3JvbGxlciBmcm9tIFwicmVhY3QtcGFnZS1zY3JvbGxlclwiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0c0RhdGEsIFByb2plY3REYXRhIH0gZnJvbSBcIi4uL2xpYi9tYXJrZG93blBvc3RzXCI7XHJcbmltcG9ydCB7IGlzSVBhZDEzLCBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0RGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHByb2plY3RzIH06IFByb3BzKSB7XHJcbiAgY29uc3Qgc2hvdWxkU21vb3RoU2Nyb2xsID0gIWlzTW9iaWxlICYmICFpc0lQYWQxMztcclxuICBjb25zdCBTY3JvbGxlciA9IHNob3VsZFNtb290aFNjcm9sbCA/IFJlYWN0UGFnZVNjcm9sbGVyIDogUmVhY3QuRnJhZ21lbnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPVwiQU5UT0lORUcuREVWXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiXHJcbiAgICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2FudG9pbmVnLmRldlwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiQU5UT0lORUcuREVWXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJpb3NpdHkgZHJpdmVuIG1ha2VyLCBXZWIgRGV2ZWxvcGVyLCB0ZWNoIGVudGh1c2lhc3RcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2L2ltYWdlcy9hY3Rpb24uanBnXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDU4NSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDU4NSxcclxuICAgICAgICAgICAgICBhbHQ6IFwiUG9ydHJhaXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6IFwiQGFudG9pbmVnX2RldlwiLFxyXG4gICAgICAgICAgc2l0ZTogXCJodHRwczovL2FudG9pbmVnLmRldlwiLFxyXG4gICAgICAgICAgY2FyZFR5cGU6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJnLXBlYWNoLTUwMCBwLTUgdGV4dC1wZWFjaC01MCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAg8J+RiyBIZXkgdGhlcmUhIFRoaXMgc2l0ZSBpcyBpbiBtYWludGVuYW5jZSBtb2RlLCBsaW1pdGVkIGNvbnRlbnQgaXNcclxuICAgICAgICAgIGF2YWlsYWJsZSBmb3Igbm93IOKcjO+4j1xyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgey8qIC8vVE9ETzogYWxsb3cgdGhpcyB0byBiZSBkaXNhYmxlZCAgKi99XHJcbiAgICAgIDxTY3JvbGxlclxyXG4gICAgICAvLyBwYWdlT25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgLy8gb25CZWZvcmVQYWdlU2Nyb2xsPXt0aGlzLmhhbmRsZUJlZm9yZVBhZ2VDaGFuZ2V9XHJcbiAgICAgIC8vIGN1c3RvbVBhZ2VOdW1iZXI9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2V9XHJcbiAgICAgID5cclxuICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgIDxDdXJyZW50IC8+XHJcbiAgICAgICAgPEV4cGVyaWVuY2UgLz5cclxuICAgICAgICB7LyogPFByb2plY3RzIHByb2plY3RzPXtwcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9TY3JvbGxlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0c0RhdGEoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvamVjdHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=