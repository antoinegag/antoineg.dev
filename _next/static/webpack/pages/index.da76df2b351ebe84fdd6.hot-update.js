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
/* harmony import */ var _components_Home_BaseScroller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/BaseScroller */ "./components/Home/BaseScroller.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










var __N_SSG = true;
function index(_ref) {
  var projects = _ref.projects;
  var shouldSmoothScroll = !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile && !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isIPad13;
  var Scroller = shouldSmoothScroll ? react_page_scroller__WEBPACK_IMPORTED_MODULE_7__.default : _components_Home_BaseScroller__WEBPACK_IMPORTED_MODULE_9__.BaseScroller;
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
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(Scroller // pageOnChange={this.handlePageChange}
  // onBeforePageScroll={this.handleBeforePageChange}
  // customPageNumber={this.state.currentPage}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwicHJvamVjdHMiLCJzaG91bGRTbW9vdGhTY3JvbGwiLCJpc01vYmlsZSIsImlzSVBhZDEzIiwiU2Nyb2xsZXIiLCJSZWFjdFBhZ2VTY3JvbGxlciIsIkJhc2VTY3JvbGxlciIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQU1lLFNBQVNBLEtBQVQsT0FBb0M7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQ2pELE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLHlEQUFELElBQWEsQ0FBQ0MseURBQXpDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxrQkFBa0IsR0FBR0ksd0RBQUgsR0FBdUJDLHVFQUExRDtBQUVBLFNBQ0UscUVBQ0UsTUFBQyw2Q0FBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsZUFBVyxFQUFDLHdEQUZkO0FBR0UsYUFBUyxFQUFDLHVCQUhaO0FBSUUsYUFBUyxFQUFFO0FBQ1RDLFNBQUcsRUFBRSxzQkFESTtBQUVUQyxXQUFLLEVBQUUsY0FGRTtBQUdUQyxpQkFBVyxFQUFFLHdEQUhKO0FBSVRDLFlBQU0sRUFBRSxDQUNOO0FBQ0VILFdBQUcsRUFBRSx3Q0FEUDtBQUVFSSxhQUFLLEVBQUUsR0FGVDtBQUdFQyxjQUFNLEVBQUUsR0FIVjtBQUlFQyxXQUFHLEVBQUU7QUFKUCxPQURNO0FBSkMsS0FKYjtBQWlCRSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGVBREQ7QUFFUEMsVUFBSSxFQUFFLHNCQUZDO0FBR1BDLGNBQVEsRUFBRTtBQUhILEtBakJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQTZCRSxNQUFDLFFBQUQsQ0FDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UscUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFNRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQUxGLENBN0JGLENBREY7QUE4Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGE3NmRmMmIzNTFlYmU4NGZkZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0Fib3V0XCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdFwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IEN1cnJlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlL0N1cnJlbnRcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9IZXJvXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2plY3RzXCI7XHJcbmltcG9ydCBSZWFjdFBhZ2VTY3JvbGxlciBmcm9tIFwicmVhY3QtcGFnZS1zY3JvbGxlclwiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0c0RhdGEsIFByb2plY3REYXRhIH0gZnJvbSBcIi4uL2xpYi9tYXJrZG93blBvc3RzXCI7XHJcbmltcG9ydCB7IGlzSVBhZDEzLCBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcbmltcG9ydCB7IEJhc2VTY3JvbGxlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvQmFzZVNjcm9sbGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0RGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHByb2plY3RzIH06IFByb3BzKSB7XHJcbiAgY29uc3Qgc2hvdWxkU21vb3RoU2Nyb2xsID0gIWlzTW9iaWxlICYmICFpc0lQYWQxMztcclxuICBjb25zdCBTY3JvbGxlciA9IHNob3VsZFNtb290aFNjcm9sbCA/IFJlYWN0UGFnZVNjcm9sbGVyIDogQmFzZVNjcm9sbGVyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT1cIkFOVE9JTkVHLkRFVlwiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJDdXJpb3NpdHkgZHJpdmVuIG1ha2VyLCBXZWIgRGV2ZWxvcGVyLCB0ZWNoIGVudGh1c2lhc3RcIlxyXG4gICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vYW50b2luZWcuZGV2L1wiXHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXZcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkFOVE9JTkVHLkRFVlwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VyaW9zaXR5IGRyaXZlbiBtYWtlciwgV2ViIERldmVsb3BlciwgdGVjaCBlbnRodXNpYXN0XCIsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FudG9pbmVnLmRldi9pbWFnZXMvYWN0aW9uLmpwZ1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA1ODUsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1ODUsXHJcbiAgICAgICAgICAgICAgYWx0OiBcIlBvcnRyYWl0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgaGFuZGxlOiBcIkBhbnRvaW5lZ19kZXZcIixcclxuICAgICAgICAgIHNpdGU6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXZcIixcclxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1wZWFjaC01MDAgcC01IHRleHQtcGVhY2gtNTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIPCfkYsgSGV5IHRoZXJlISBUaGlzIHNpdGUgaXMgaW4gbWFpbnRlbmFuY2UgbW9kZSwgbGltaXRlZCBjb250ZW50IGlzXHJcbiAgICAgICAgICBhdmFpbGFibGUgZm9yIG5vdyDinIzvuI9cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIHsvKiAvL1RPRE86IGFsbG93IHRoaXMgdG8gYmUgZGlzYWJsZWQgICovfVxyXG4gICAgICA8U2Nyb2xsZXJcclxuICAgICAgLy8gcGFnZU9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgIC8vIG9uQmVmb3JlUGFnZVNjcm9sbD17dGhpcy5oYW5kbGVCZWZvcmVQYWdlQ2hhbmdlfVxyXG4gICAgICAvLyBjdXN0b21QYWdlTnVtYmVyPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgIDxDdXJyZW50IC8+XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZSAvPlxyXG4gICAgICAgICAgey8qIDxQcm9qZWN0cyBwcm9qZWN0cz17cHJvamVjdHN9IC8+ICovfVxyXG4gICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9TY3JvbGxlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0c0RhdGEoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvamVjdHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=