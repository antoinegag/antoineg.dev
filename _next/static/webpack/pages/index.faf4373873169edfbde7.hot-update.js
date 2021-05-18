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
    className: "mb-2 flex items-center justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.MailOpenIcon, {
    height: "24",
    className: "text-green-700 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("a", {
    href: "mailto:hello@antoineg.dev",
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
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Twitter", " ", __jsx("a", {
    href: "https://twitter.com/antoineg_dev",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "@antoineg_dev")), __jsx("div", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "LinkedIn", " ", __jsx("a", {
    href: "https://www.linkedin.com/in/antoine-gagnon/",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "antoine-gagnon")), __jsx("div", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Github", " ", __jsx("a", {
    href: "https://github.com/antoinegag",
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNFO0FBQUssYUFBUyxFQUFDLDBIQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ3FCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEckIsQ0FGRixFQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBTEYsRUFRRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFjLFVBQU0sRUFBQyxJQUFyQjtBQUEwQixhQUFTLEVBQUMscUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsUUFBSSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsQ0FSRixFQVlFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDVSxHQURWLEVBRUU7QUFBRyxRQUFJLEVBQUMsa0NBQVI7QUFBMkMsYUFBUyxFQUFDLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsQ0FaRixFQWtCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1csR0FEWCxFQUVFO0FBQ0UsUUFBSSxFQUFDLDZDQURQO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixDQWxCRixFQTRCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDUyxHQURULEVBRUU7QUFBRyxRQUFJLEVBQUMsK0JBQVI7QUFBd0MsYUFBUyxFQUFDLFdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0E1QkYsQ0FERixDQURGO0FBdUNEO0tBeEN1QkEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYWY0MzczODczMTY5ZWRmYmRlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNYWlsT3Blbkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBweS0xMCB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by1ibCB0by1ncmVlbi01MCBmcm9tLXBlYWNoLTUwIHZpYS1ncmVlbi01MFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwXCI+Q29udGFjdDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgTXkgaW5ib3ggaXMgYWx3YXlzIDxzcGFuPm9wZW48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWItOFwiPlxyXG4gICAgICAgICAgKGp1c3QgcGxlYXNlIGRvbid0IGFkZCBtZSB0byB5b3VyIG5ld3NsZXR0ZXIpXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8TWFpbE9wZW5JY29uIGhlaWdodD1cIjI0XCIgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDAgbXItMlwiIC8+XHJcbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmhlbGxvQGFudG9pbmVnLmRldlwiPmhlbGxvQGFudG9pbmVnLmRldjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgIFR3aXR0ZXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9hbnRvaW5lZ19kZXZcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgQGFudG9pbmVnX2RldlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgTGlua2VkSW57XCIgXCJ9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FudG9pbmUtZ2Fnbm9uL1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGFudG9pbmUtZ2Fnbm9uXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgR2l0aHVie1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbnRvaW5lZ2FnXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgIEBhbnRvaW5lZ2FnXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9