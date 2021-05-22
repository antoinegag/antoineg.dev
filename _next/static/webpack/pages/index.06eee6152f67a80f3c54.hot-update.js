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
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








var __N_SSG = true;
function index(_ref) {
  var projects = _ref.projects;
  var shouldSmoothScroll = !react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile && !react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isIPad13;
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
  }, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwicHJvamVjdHMiLCJzaG91bGRTbW9vdGhTY3JvbGwiLCJpc01vYmlsZSIsImlzSVBhZDEzIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBTWUsU0FBU0EsS0FBVCxPQUFvQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDakQsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQ0MseURBQUQsSUFBYSxDQUFDQyx5REFBekM7QUFFQSxTQUNFLHFFQUNFLE1BQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGVBQVcsRUFBQyx3REFGZDtBQUdFLGFBQVMsRUFBQyx1QkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsc0JBREk7QUFFVEMsV0FBSyxFQUFFLGNBRkU7QUFHVEMsaUJBQVcsRUFBRSx3REFISjtBQUlUQyxZQUFNLEVBQUUsQ0FDTjtBQUNFSCxXQUFHLEVBQUUsd0NBRFA7QUFFRUksYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETTtBQUpDLEtBSmI7QUFpQkUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxlQUREO0FBRVBDLFVBQUksRUFBRSxzQkFGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQWpCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFZRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQXhCRixDQURGO0FBeUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA2ZWVlNjE1MmY2N2E4MGYzYzU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9BYm91dFwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCBDdXJyZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvRXhwZXJpZW5jZS9DdXJyZW50XCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvSGVyb1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgUmVhY3RQYWdlU2Nyb2xsZXIgZnJvbSBcInJlYWN0LXBhZ2Utc2Nyb2xsZXJcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHNEYXRhLCBQcm9qZWN0RGF0YSB9IGZyb20gXCIuLi9saWIvbWFya2Rvd25Qb3N0c1wiO1xyXG5pbXBvcnQgeyBpc0lQYWQxMywgaXNNb2JpbGUgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwcm9qZWN0czogUHJvamVjdERhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyBwcm9qZWN0cyB9OiBQcm9wcykge1xyXG4gIGNvbnN0IHNob3VsZFNtb290aFNjcm9sbCA9ICFpc01vYmlsZSAmJiAhaXNJUGFkMTM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPVwiQU5UT0lORUcuREVWXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiXHJcbiAgICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2FudG9pbmVnLmRldlwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiQU5UT0lORUcuREVWXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJpb3NpdHkgZHJpdmVuIG1ha2VyLCBXZWIgRGV2ZWxvcGVyLCB0ZWNoIGVudGh1c2lhc3RcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2L2ltYWdlcy9hY3Rpb24uanBnXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDU4NSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDU4NSxcclxuICAgICAgICAgICAgICBhbHQ6IFwiUG9ydHJhaXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6IFwiQGFudG9pbmVnX2RldlwiLFxyXG4gICAgICAgICAgc2l0ZTogXCJodHRwczovL2FudG9pbmVnLmRldlwiLFxyXG4gICAgICAgICAgY2FyZFR5cGU6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmctcGVhY2gtNTAwIHAtNSB0ZXh0LXBlYWNoLTUwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICDwn5GLIEhleSB0aGVyZSEgVGhpcyBzaXRlIGlzIGluIG1haW50ZW5hbmNlIG1vZGUsIGxpbWl0ZWQgY29udGVudCBpc1xyXG4gICAgICAgICAgYXZhaWxhYmxlIGZvciBub3cg4pyM77iPXHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiAvL1RPRE86IGFsbG93IHRoaXMgdG8gYmUgZGlzYWJsZWQgICovfVxyXG5cclxuICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgIDxDdXJyZW50IC8+XHJcbiAgICAgICAgPEV4cGVyaWVuY2UgLz5cclxuICAgICAgICB7LyogPFByb2plY3RzIHByb2plY3RzPXtwcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHNEYXRhKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2plY3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9