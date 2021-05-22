self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/BaseScroller.tsx":
/*!******************************************!*\
  !*** ./components/Home/BaseScroller.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseScroller": function() { return /* binding */ BaseScroller; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\Home\\BaseScroller.tsx",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

var BaseScroller = function BaseScroller(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, children);
};
_c = BaseScroller;

var _c;

$RefreshReg$(_c, "BaseScroller");

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


/***/ }),

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
  }, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Jhc2VTY3JvbGxlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJCYXNlU2Nyb2xsZXIiLCJjaGlsZHJlbiIsImluZGV4IiwicHJvamVjdHMiLCJzaG91bGRTbW9vdGhTY3JvbGwiLCJpc01vYmlsZSIsImlzSVBhZDEzIiwiU2Nyb2xsZXIiLCJSZWFjdFBhZ2VTY3JvbGxlciIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RELFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQSxRQUFOLENBQVA7QUFDRCxDQUZNO0tBQU1ELFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQU1lLFNBQVNFLEtBQVQsT0FBb0M7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQ2pELE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLHlEQUFELElBQWEsQ0FBQ0MseURBQXpDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxrQkFBa0IsR0FBR0ksd0RBQUgsR0FBdUJSLHVFQUExRDtBQUVBLFNBQ0UscUVBQ0UsTUFBQyw2Q0FBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsZUFBVyxFQUFDLHdEQUZkO0FBR0UsYUFBUyxFQUFDLHVCQUhaO0FBSUUsYUFBUyxFQUFFO0FBQ1RTLFNBQUcsRUFBRSxzQkFESTtBQUVUQyxXQUFLLEVBQUUsY0FGRTtBQUdUQyxpQkFBVyxFQUFFLHdEQUhKO0FBSVRDLFlBQU0sRUFBRSxDQUNOO0FBQ0VILFdBQUcsRUFBRSx3Q0FEUDtBQUVFSSxhQUFLLEVBQUUsR0FGVDtBQUdFQyxjQUFNLEVBQUUsR0FIVjtBQUlFQyxXQUFHLEVBQUU7QUFKUCxPQURNO0FBSkMsS0FKYjtBQWlCRSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGVBREQ7QUFFUEMsVUFBSSxFQUFFLHNCQUZDO0FBR1BDLGNBQVEsRUFBRTtBQUhILEtBakJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQTZCRSxNQUFDLFFBQUQsQ0FDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFVRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQTdCRixDQURGO0FBNENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4YmUxZjZiZDBlOTZmYWRjZjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmFzZVNjcm9sbGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gPGRpdj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9BYm91dFwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCBDdXJyZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvRXhwZXJpZW5jZS9DdXJyZW50XCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvSGVyb1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgUmVhY3RQYWdlU2Nyb2xsZXIgZnJvbSBcInJlYWN0LXBhZ2Utc2Nyb2xsZXJcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHNEYXRhLCBQcm9qZWN0RGF0YSB9IGZyb20gXCIuLi9saWIvbWFya2Rvd25Qb3N0c1wiO1xyXG5pbXBvcnQgeyBpc0lQYWQxMywgaXNNb2JpbGUgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xyXG5pbXBvcnQgeyBCYXNlU2Nyb2xsZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0Jhc2VTY3JvbGxlclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwcm9qZWN0czogUHJvamVjdERhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyBwcm9qZWN0cyB9OiBQcm9wcykge1xyXG4gIGNvbnN0IHNob3VsZFNtb290aFNjcm9sbCA9ICFpc01vYmlsZSAmJiAhaXNJUGFkMTM7XHJcbiAgY29uc3QgU2Nyb2xsZXIgPSBzaG91bGRTbW9vdGhTY3JvbGwgPyBSZWFjdFBhZ2VTY3JvbGxlciA6IEJhc2VTY3JvbGxlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9XCJBTlRPSU5FRy5ERVZcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VyaW9zaXR5IGRyaXZlbiBtYWtlciwgV2ViIERldmVsb3BlciwgdGVjaCBlbnRodXNpYXN0XCJcclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL2FudG9pbmVnLmRldi9cIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJBTlRPSU5FRy5ERVZcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvaW1hZ2VzL2FjdGlvbi5qcGdcIixcclxuICAgICAgICAgICAgICB3aWR0aDogNTg1LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNTg1LFxyXG4gICAgICAgICAgICAgIGFsdDogXCJQb3J0cmFpdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogXCJAYW50b2luZWdfZGV2XCIsXHJcbiAgICAgICAgICBzaXRlOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICBjYXJkVHlwZTogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmctcGVhY2gtNTAwIHAtNSB0ZXh0LXBlYWNoLTUwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICDwn5GLIEhleSB0aGVyZSEgVGhpcyBzaXRlIGlzIGluIG1haW50ZW5hbmNlIG1vZGUsIGxpbWl0ZWQgY29udGVudCBpc1xyXG4gICAgICAgICAgYXZhaWxhYmxlIGZvciBub3cg4pyM77iPXHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICB7LyogLy9UT0RPOiBhbGxvdyB0aGlzIHRvIGJlIGRpc2FibGVkICAqL31cclxuICAgICAgPFNjcm9sbGVyXHJcbiAgICAgIC8vIHBhZ2VPbkNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAvLyBvbkJlZm9yZVBhZ2VTY3JvbGw9e3RoaXMuaGFuZGxlQmVmb3JlUGFnZUNoYW5nZX1cclxuICAgICAgLy8gY3VzdG9tUGFnZU51bWJlcj17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgPEN1cnJlbnQgLz5cclxuICAgICAgICA8RXhwZXJpZW5jZSAvPlxyXG4gICAgICAgIHsvKiA8UHJvamVjdHMgcHJvamVjdHM9e3Byb2plY3RzfSAvPiAqL31cclxuICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICA8L1Njcm9sbGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzRGF0YSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9qZWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==