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
    className: "flex justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-6xl font-semibold uppercase pb-2 text-yellow-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, name), __jsx("div", {
    className: "text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, description)), __jsx("div", {
    className: "self-end text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, tech && tech.length > 0 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 43
    }
  }, tech.join(", ")), repository && __jsx("div", {
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: repository,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, repository)))), __jsx("hr", {
    className: "my-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(_components_MarkdownPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contentHtml: projectData.contentHtml,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvLnRzeCJdLCJuYW1lcyI6WyJQb3N0IiwicHJvamVjdERhdGEiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlcG9zaXRvcnkiLCJ0ZWNoIiwidXJsIiwiY29udGVudEh0bWwiLCJpbWFnZVVybCIsImxlbmd0aCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FJWjtBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRUNDLEVBRkQsR0FVR0QsV0FWSCxDQUVDQyxFQUZEO0FBQUEsTUFHQ0MsSUFIRCxHQVVHRixXQVZILENBR0NFLElBSEQ7QUFBQSxNQUlDQyxXQUpELEdBVUdILFdBVkgsQ0FJQ0csV0FKRDtBQUFBLE1BS0NDLFVBTEQsR0FVR0osV0FWSCxDQUtDSSxVQUxEO0FBQUEsTUFNQ0MsSUFORCxHQVVHTCxXQVZILENBTUNLLElBTkQ7QUFBQSxNQU9DQyxHQVBELEdBVUdOLFdBVkgsQ0FPQ00sR0FQRDtBQUFBLE1BUUNDLFdBUkQsR0FVR1AsV0FWSCxDQVFDTyxXQVJEO0FBQUEsTUFTQ0MsUUFURCxHQVVHUixXQVZILENBU0NRLFFBVEQ7QUFZRCxTQUNFO0FBQUssYUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLElBQVIsQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQUZGLENBSkYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQURILENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJDLFdBQTFCLENBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsSUFBSSxJQUFJQSxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUF0QixJQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1KLElBQUksQ0FBQ0ssSUFBTCxDQUFVLElBQVYsQ0FBTixDQUQ5QixFQUVHTixVQUFVLElBQ1Q7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVBLFVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkEsVUFBdEIsQ0FERixDQUhKLENBUEYsQ0FERixFQWlCRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkUsTUFBQyxnRUFBRDtBQUFjLGVBQVcsRUFBRUosV0FBVyxDQUFDTyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBREYsQ0FWRixDQURGO0FBbUNEO0tBbkR1QlIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9baWRdLjQyNDFhZDFiNGFjZDU1NjQzYzc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEFsbFByb2plY3RJZHMsXHJcbiAgZ2V0UHJvamVjdERhdGEsXHJcbiAgUHJvamVjdERhdGEsXHJcbn0gZnJvbSBcIi4uLy4uL2xpYi9tYXJrZG93blBvc3RzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFya2Rvd25Qb3N0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUG9zdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7XHJcbiAgcHJvamVjdERhdGEsXHJcbn06IHtcclxuICBwcm9qZWN0RGF0YTogUHJvamVjdERhdGEgJiB7IGNvbnRlbnRIdG1sOiBzdHJpbmcgfTtcclxufSkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcmVwb3NpdG9yeSxcclxuICAgIHRlY2gsXHJcbiAgICB1cmwsXHJcbiAgICBjb250ZW50SHRtbCxcclxuICAgIGltYWdlVXJsLFxyXG4gIH0gPSBwcm9qZWN0RGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cHgtNjQgcHktMTAgbWluLWgtc2NyZWVuIGJnLWdyYXktODAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+Ly8gUHJvamVjdHM8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+QmFjayBob21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHBiLTIgdGV4dC15ZWxsb3ctNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1lbmQgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIHt0ZWNoICYmIHRlY2gubGVuZ3RoID4gMCAmJiA8ZGl2Pnt0ZWNoLmpvaW4oXCIsIFwiKX08L2Rpdj59XHJcbiAgICAgICAgICAgICAge3JlcG9zaXRvcnkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVwb3NpdG9yeX0+e3JlcG9zaXRvcnl9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS01XCIgLz5cclxuICAgICAgICAgIDxNYXJrZG93blBvc3QgY29udGVudEh0bWw9e3Byb2plY3REYXRhLmNvbnRlbnRIdG1sfSAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhdGhzID0gZ2V0QWxsUHJvamVjdElkcygpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdERhdGEgPSBhd2FpdCBnZXRQcm9qZWN0RGF0YShwYXJhbXMuaWQgYXMgc3RyaW5nKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvamVjdERhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=