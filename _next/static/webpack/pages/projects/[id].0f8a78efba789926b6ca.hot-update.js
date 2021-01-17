webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MarkdownPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MarkdownPost */ "./components/MarkdownPost/index.tsx");
var _jsxFileName = "C:\\Users\\antoi\\Documents\\Dev\\antoineg.dev\\pages\\projects\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var __N_SSG = true;
function Post(_ref) {
  var projectData = _ref.projectData;
  var id = projectData.id,
      name = projectData.name,
      description = projectData.description,
      repository = projectData.repository,
      tech = projectData.tech,
      url = projectData.url,
      contentHtml = projectData.contentHtml,
      imageUrl = projectData.imageUrl;
  return __jsx("div", {
    className: "md:px-64 py-10 min-h-screen bg-gray-800 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, name)), __jsx("div", {
    className: "flex justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-3xl font-semibold mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "// Projects"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Back home"))), __jsx("div", {
    className: "flex items-center justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "text-6xl font-semibold uppercase pb-2 text-yellow-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, name), __jsx("div", {
    className: "text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, description)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, tech && tech.length > 0 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, tech.join(", ")), repository && __jsx("div", {
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: repository,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, repository))), __jsx("hr", {
    className: "my-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_components_MarkdownPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contentHtml: projectData.contentHtml,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }))));
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvLnRzeCJdLCJuYW1lcyI6WyJQb3N0IiwicHJvamVjdERhdGEiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlcG9zaXRvcnkiLCJ0ZWNoIiwidXJsIiwiY29udGVudEh0bWwiLCJpbWFnZVVybCIsImxlbmd0aCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FJWjtBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRUNDLEVBRkQsR0FVR0QsV0FWSCxDQUVDQyxFQUZEO0FBQUEsTUFHQ0MsSUFIRCxHQVVHRixXQVZILENBR0NFLElBSEQ7QUFBQSxNQUlDQyxXQUpELEdBVUdILFdBVkgsQ0FJQ0csV0FKRDtBQUFBLE1BS0NDLFVBTEQsR0FVR0osV0FWSCxDQUtDSSxVQUxEO0FBQUEsTUFNQ0MsSUFORCxHQVVHTCxXQVZILENBTUNLLElBTkQ7QUFBQSxNQU9DQyxHQVBELEdBVUdOLFdBVkgsQ0FPQ00sR0FQRDtBQUFBLE1BUUNDLFdBUkQsR0FVR1AsV0FWSCxDQVFDTyxXQVJEO0FBQUEsTUFTQ0MsUUFURCxHQVVHUixXQVZILENBU0NRLFFBVEQ7QUFZRCxTQUNFO0FBQUssYUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLElBQVIsQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQUZGLENBSkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHVEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFESCxDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCQyxXQUExQixDQUpGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLElBQUksSUFBSUEsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBdEIsSUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNSixJQUFJLENBQUNLLElBQUwsQ0FBVSxJQUFWLENBQU4sQ0FEOUIsRUFFR04sVUFBVSxJQUNUO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFQSxVQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JBLFVBQXRCLENBREYsQ0FISixDQVBGLEVBZUU7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkUsTUFBQyxnRUFBRDtBQUFjLGVBQVcsRUFBRUosV0FBVyxDQUFDTyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREYsQ0FWRixDQURGO0FBaUNEO0tBakR1QlIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9baWRdLjBmOGE3OGVmYmE3ODk5MjZiNmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEFsbFByb2plY3RJZHMsXHJcbiAgZ2V0UHJvamVjdERhdGEsXHJcbiAgUHJvamVjdERhdGEsXHJcbn0gZnJvbSBcIi4uLy4uL2xpYi9tYXJrZG93blBvc3RzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFya2Rvd25Qb3N0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUG9zdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7XHJcbiAgcHJvamVjdERhdGEsXHJcbn06IHtcclxuICBwcm9qZWN0RGF0YTogUHJvamVjdERhdGEgJiB7IGNvbnRlbnRIdG1sOiBzdHJpbmcgfTtcclxufSkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcmVwb3NpdG9yeSxcclxuICAgIHRlY2gsXHJcbiAgICB1cmwsXHJcbiAgICBjb250ZW50SHRtbCxcclxuICAgIGltYWdlVXJsLFxyXG4gIH0gPSBwcm9qZWN0RGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cHgtNjQgcHktMTAgbWluLWgtc2NyZWVuIGJnLWdyYXktODAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+Ly8gUHJvamVjdHM8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+QmFjayBob21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgcGItMiB0ZXh0LXllbGxvdy01MDBcIj5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dGVjaCAmJiB0ZWNoLmxlbmd0aCA+IDAgJiYgPGRpdj57dGVjaC5qb2luKFwiLCBcIil9PC9kaXY+fVxyXG4gICAgICAgICAgICB7cmVwb3NpdG9yeSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3JlcG9zaXRvcnl9PntyZXBvc2l0b3J5fTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTVcIiAvPlxyXG4gICAgICAgICAgPE1hcmtkb3duUG9zdCBjb250ZW50SHRtbD17cHJvamVjdERhdGEuY29udGVudEh0bWx9IC8+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQcm9qZWN0SWRzKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBwcm9qZWN0RGF0YSA9IGF3YWl0IGdldFByb2plY3REYXRhKHBhcmFtcy5pZCBhcyBzdHJpbmcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9qZWN0RGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==