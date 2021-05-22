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
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








var __N_SSG = true;
function index(_ref) {
  var projects = _ref.projects;
  var shouldSmoothScroll = false;
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
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "no-scrollbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_page_scroller__WEBPACK_IMPORTED_MODULE_7__.default // pageOnChange={this.handlePageChange}
  // onBeforePageScroll={this.handleBeforePageChange}
  // customPageNumber={this.state.currentPage}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwicHJvamVjdHMiLCJzaG91bGRTbW9vdGhTY3JvbGwiLCJTY3JvbGxlciIsIlJlYWN0UGFnZVNjcm9sbGVyIiwiUmVhY3QiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFPZSxTQUFTQSxLQUFULE9BQW9DO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNqRCxNQUFNQyxrQkFBa0IsR0FBRyxLQUEzQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsa0JBQWtCLEdBQUdFLHdEQUFILEdBQXVCQyx1REFBMUQ7QUFFQSxTQUNFLHFFQUNFLE1BQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGVBQVcsRUFBQyx3REFGZDtBQUdFLGFBQVMsRUFBQyx1QkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsc0JBREk7QUFFVEMsV0FBSyxFQUFFLGNBRkU7QUFHVEMsaUJBQVcsRUFBRSx3REFISjtBQUlUQyxZQUFNLEVBQUUsQ0FDTjtBQUNFSCxXQUFHLEVBQUUsd0NBRFA7QUFFRUksYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETTtBQUpDLEtBSmI7QUFpQkUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxlQUREO0FBRVBDLFVBQUksRUFBRSxzQkFGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQWpCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx3REFBRCxDQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVVFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBTkYsQ0F4QkYsQ0FERjtBQThDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYjgwYjhkODZlNWZkNGQyMTljZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvQWJvdXRcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Db250YWN0XCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvRXhwZXJpZW5jZVwiO1xyXG5pbXBvcnQgQ3VycmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudFwiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0hlcm9cIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvamVjdHNcIjtcclxuaW1wb3J0IFJlYWN0UGFnZVNjcm9sbGVyIGZyb20gXCJyZWFjdC1wYWdlLXNjcm9sbGVyXCI7XHJcbmltcG9ydCB7IGdldFByb2plY3RzRGF0YSwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi4vbGliL21hcmtkb3duUG9zdHNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcHJvamVjdHM6IFByb2plY3REYXRhW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KHsgcHJvamVjdHMgfTogUHJvcHMpIHtcclxuICBjb25zdCBzaG91bGRTbW9vdGhTY3JvbGwgPSBmYWxzZTtcclxuICBjb25zdCBTY3JvbGxlciA9IHNob3VsZFNtb290aFNjcm9sbCA/IFJlYWN0UGFnZVNjcm9sbGVyIDogUmVhY3QuRnJhZ21lbnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPVwiQU5UT0lORUcuREVWXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiXHJcbiAgICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2FudG9pbmVnLmRldlwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiQU5UT0lORUcuREVWXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJpb3NpdHkgZHJpdmVuIG1ha2VyLCBXZWIgRGV2ZWxvcGVyLCB0ZWNoIGVudGh1c2lhc3RcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2L2ltYWdlcy9hY3Rpb24uanBnXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDU4NSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDU4NSxcclxuICAgICAgICAgICAgICBhbHQ6IFwiUG9ydHJhaXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6IFwiQGFudG9pbmVnX2RldlwiLFxyXG4gICAgICAgICAgc2l0ZTogXCJodHRwczovL2FudG9pbmVnLmRldlwiLFxyXG4gICAgICAgICAgY2FyZFR5cGU6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmctcGVhY2gtNTAwIHAtNSB0ZXh0LXBlYWNoLTUwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICDwn5GLIEhleSB0aGVyZSEgVGhpcyBzaXRlIGlzIGluIG1haW50ZW5hbmNlIG1vZGUsIGxpbWl0ZWQgY29udGVudCBpc1xyXG4gICAgICAgICAgYXZhaWxhYmxlIGZvciBub3cg4pyM77iPXHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiAvL1RPRE86IGFsbG93IHRoaXMgdG8gYmUgZGlzYWJsZWQgICovfVxyXG4gICAgICAgIDxSZWFjdFBhZ2VTY3JvbGxlclxyXG4gICAgICAgIC8vIHBhZ2VPbkNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgIC8vIG9uQmVmb3JlUGFnZVNjcm9sbD17dGhpcy5oYW5kbGVCZWZvcmVQYWdlQ2hhbmdlfVxyXG4gICAgICAgIC8vIGN1c3RvbVBhZ2VOdW1iZXI9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhlcm8gLz5cclxuICAgICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgICAgPEN1cnJlbnQgLz5cclxuICAgICAgICAgIDxFeHBlcmllbmNlIC8+XHJcbiAgICAgICAgICB7LyogPFByb2plY3RzIHByb2plY3RzPXtwcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgIDwvUmVhY3RQYWdlU2Nyb2xsZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzRGF0YSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9qZWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==