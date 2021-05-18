self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Contact/index.tsx":
/*!*******************************************!*\
  !*** ./components/Home/Contact/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\Home\\Contact\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Contact() {
  return __jsx("div", {
    className: "min-h-screen py-10 text-center flex items-center justify-center bg-gradient-to-bl to-green-50 from-peach-50 via-green-50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-green-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Contact"), __jsx("div", {
    className: "text-3xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "My inbox is always ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 30
    }
  }, "open")), __jsx("div", {
    className: "text-base mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "(just please don't add me to your newsletter)"), __jsx("div", {
    className: "mb-2 flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.MailOpenIcon, {
    height: "24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("a", {
    href: "mailto:hello@antoineg.dev",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "hello@antoineg.dev")), __jsx("div", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Twitter", " ", __jsx("a", {
    href: "https://twitter.com/antoineg_dev",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "@antoineg_dev")), __jsx("div", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "LinkedIn", " ", __jsx("a", {
    href: "https://www.linkedin.com/in/antoine-gagnon/",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "antoine-gagnon")), __jsx("div", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Github", " ", __jsx("a", {
    href: "https://github.com/antoinegag",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "@antoinegag"))));
}
_c = Contact;

var _c;

$RefreshReg$(_c, "Contact");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNFO0FBQUssYUFBUyxFQUFDLDBIQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ3FCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEckIsQ0FGRixFQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBTEYsRUFRRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFjLFVBQU0sRUFBQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLFFBQUksRUFBQywyQkFBUjtBQUFvQyxhQUFTLEVBQUMsV0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixDQVJGLEVBY0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNVLEdBRFYsRUFFRTtBQUFHLFFBQUksRUFBQyxrQ0FBUjtBQUEyQyxhQUFTLEVBQUMsV0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixDQWRGLEVBb0JFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDVyxHQURYLEVBRUU7QUFDRSxRQUFJLEVBQUMsNkNBRFA7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLENBcEJGLEVBOEJFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNTLEdBRFQsRUFFRTtBQUFHLFFBQUksRUFBQywrQkFBUjtBQUF3QyxhQUFTLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixDQTlCRixDQURGLENBREY7QUF5Q0Q7S0ExQ3VCQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NjdlM2VjMWIzNWU4YjdjZTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1haWxPcGVuSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB5LTEwIHRleHQtY2VudGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLWJsIHRvLWdyZWVuLTUwIGZyb20tcGVhY2gtNTAgdmlhLWdyZWVuLTUwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDBcIj5Db250YWN0PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICBNeSBpbmJveCBpcyBhbHdheXMgPHNwYW4+b3Blbjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBtYi04XCI+XHJcbiAgICAgICAgICAoanVzdCBwbGVhc2UgZG9uJ3QgYWRkIG1lIHRvIHlvdXIgbmV3c2xldHRlcilcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxNYWlsT3Blbkljb24gaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0BhbnRvaW5lZy5kZXZcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgaGVsbG9AYW50b2luZWcuZGV2XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICBUd2l0dGVye1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYW50b2luZWdfZGV2XCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgIEBhbnRvaW5lZ19kZXZcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgIExpbmtlZElue1wiIFwifVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbnRvaW5lLWdhZ25vbi9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBhbnRvaW5lLWdhZ25vblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgIEdpdGh1YntcIiBcIn1cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYW50b2luZWdhZ1wiIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICBAYW50b2luZWdhZ1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==