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
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







var __N_SSG = true;
function index(_ref) {
  var projects = _ref.projects;
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
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "no-scrollbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwicHJvamVjdHMiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRZSxTQUFTQSxLQUFULE9BQW9DO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNqRCxTQUNFLHFFQUNFLE1BQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGVBQVcsRUFBQyx3REFGZDtBQUdFLGFBQVMsRUFBQyx1QkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsc0JBREk7QUFFVEMsV0FBSyxFQUFFLGNBRkU7QUFHVEMsaUJBQVcsRUFBRSx3REFISjtBQUlUQyxZQUFNLEVBQUUsQ0FDTjtBQUNFSCxXQUFHLEVBQUUsd0NBRFA7QUFFRUksYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETTtBQUpDLEtBSmI7QUFpQkUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxlQUREO0FBRVBDLFVBQUksRUFBRSxzQkFGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQWpCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFVRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQXhCRixDQURGO0FBdUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhYjJlODc5YmE5MmY0YWJlZDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9BYm91dFwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCBDdXJyZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvRXhwZXJpZW5jZS9DdXJyZW50XCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvSGVyb1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0c0RhdGEsIFByb2plY3REYXRhIH0gZnJvbSBcIi4uL2xpYi9tYXJrZG93blBvc3RzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0RGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHByb2plY3RzIH06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9XCJBTlRPSU5FRy5ERVZcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VyaW9zaXR5IGRyaXZlbiBtYWtlciwgV2ViIERldmVsb3BlciwgdGVjaCBlbnRodXNpYXN0XCJcclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL2FudG9pbmVnLmRldi9cIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJBTlRPSU5FRy5ERVZcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvaW1hZ2VzL2FjdGlvbi5qcGdcIixcclxuICAgICAgICAgICAgICB3aWR0aDogNTg1LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNTg1LFxyXG4gICAgICAgICAgICAgIGFsdDogXCJQb3J0cmFpdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogXCJAYW50b2luZWdfZGV2XCIsXHJcbiAgICAgICAgICBzaXRlOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICBjYXJkVHlwZTogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1zY3JvbGxiYXJcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1wZWFjaC01MDAgcC01IHRleHQtcGVhY2gtNTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIPCfkYsgSGV5IHRoZXJlISBUaGlzIHNpdGUgaXMgaW4gbWFpbnRlbmFuY2UgbW9kZSwgbGltaXRlZCBjb250ZW50IGlzXHJcbiAgICAgICAgICBhdmFpbGFibGUgZm9yIG5vdyDinIzvuI9cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPEhlcm8gLz5cclxuICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICA8Q3VycmVudCAvPlxyXG4gICAgICAgIDxFeHBlcmllbmNlIC8+XHJcbiAgICAgICAgey8qIDxQcm9qZWN0cyBwcm9qZWN0cz17cHJvamVjdHN9IC8+ICovfVxyXG4gICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzRGF0YSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9qZWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==