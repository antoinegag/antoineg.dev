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
  }, __jsx(Scroller // pageOnChange={this.handlePageChange}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwicHJvamVjdHMiLCJzaG91bGRTbW9vdGhTY3JvbGwiLCJTY3JvbGxlciIsIlJlYWN0UGFnZVNjcm9sbGVyIiwiUmVhY3QiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFPZSxTQUFTQSxLQUFULE9BQW9DO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNqRCxNQUFNQyxrQkFBa0IsR0FBRyxLQUEzQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsa0JBQWtCLEdBQUdFLHdEQUFILEdBQXVCQyx1REFBMUQ7QUFFQSxTQUNFLHFFQUNFLE1BQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGVBQVcsRUFBQyx3REFGZDtBQUdFLGFBQVMsRUFBQyx1QkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsc0JBREk7QUFFVEMsV0FBSyxFQUFFLGNBRkU7QUFHVEMsaUJBQVcsRUFBRSx3REFISjtBQUlUQyxZQUFNLEVBQUUsQ0FDTjtBQUNFSCxXQUFHLEVBQUUsd0NBRFA7QUFFRUksYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETTtBQUpDLEtBSmI7QUFpQkUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxlQUREO0FBRVBDLFVBQUksRUFBRSxzQkFGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQWpCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxRQUFELENBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBVUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FORixDQXhCRixDQURGO0FBOENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxYTA4MTNiODI5ZWQ0NGQ0YmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9BYm91dFwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCBDdXJyZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvRXhwZXJpZW5jZS9DdXJyZW50XCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvSGVyb1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgUmVhY3RQYWdlU2Nyb2xsZXIgZnJvbSBcInJlYWN0LXBhZ2Utc2Nyb2xsZXJcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHNEYXRhLCBQcm9qZWN0RGF0YSB9IGZyb20gXCIuLi9saWIvbWFya2Rvd25Qb3N0c1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwcm9qZWN0czogUHJvamVjdERhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyBwcm9qZWN0cyB9OiBQcm9wcykge1xyXG4gIGNvbnN0IHNob3VsZFNtb290aFNjcm9sbCA9IGZhbHNlO1xyXG4gIGNvbnN0IFNjcm9sbGVyID0gc2hvdWxkU21vb3RoU2Nyb2xsID8gUmVhY3RQYWdlU2Nyb2xsZXIgOiBSZWFjdC5GcmFnbWVudDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9XCJBTlRPSU5FRy5ERVZcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VyaW9zaXR5IGRyaXZlbiBtYWtlciwgV2ViIERldmVsb3BlciwgdGVjaCBlbnRodXNpYXN0XCJcclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL2FudG9pbmVnLmRldi9cIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJBTlRPSU5FRy5ERVZcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvaW1hZ2VzL2FjdGlvbi5qcGdcIixcclxuICAgICAgICAgICAgICB3aWR0aDogNTg1LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNTg1LFxyXG4gICAgICAgICAgICAgIGFsdDogXCJQb3J0cmFpdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogXCJAYW50b2luZWdfZGV2XCIsXHJcbiAgICAgICAgICBzaXRlOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICBjYXJkVHlwZTogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1zY3JvbGxiYXJcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1wZWFjaC01MDAgcC01IHRleHQtcGVhY2gtNTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIPCfkYsgSGV5IHRoZXJlISBUaGlzIHNpdGUgaXMgaW4gbWFpbnRlbmFuY2UgbW9kZSwgbGltaXRlZCBjb250ZW50IGlzXHJcbiAgICAgICAgICBhdmFpbGFibGUgZm9yIG5vdyDinIzvuI9cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIC8vVE9ETzogYWxsb3cgdGhpcyB0byBiZSBkaXNhYmxlZCAgKi99XHJcbiAgICAgICAgPFNjcm9sbGVyXHJcbiAgICAgICAgLy8gcGFnZU9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgLy8gb25CZWZvcmVQYWdlU2Nyb2xsPXt0aGlzLmhhbmRsZUJlZm9yZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgLy8gY3VzdG9tUGFnZU51bWJlcj17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICA8Q3VycmVudCAvPlxyXG4gICAgICAgICAgPEV4cGVyaWVuY2UgLz5cclxuICAgICAgICAgIHsvKiA8UHJvamVjdHMgcHJvamVjdHM9e3Byb2plY3RzfSAvPiAqL31cclxuICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgPC9TY3JvbGxlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHNEYXRhKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2plY3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9