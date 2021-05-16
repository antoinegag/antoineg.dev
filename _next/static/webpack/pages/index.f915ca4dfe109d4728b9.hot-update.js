self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Experience/Current.tsx":
/*!************************************************!*\
  !*** ./components/Home/Experience/Current.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-in-viewport */ "./node_modules/react-in-viewport/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\Home\\Experience\\Current.tsx",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



var Current = function Current(props) {
  var inViewport = props.inViewport,
      forwardedRef = props.forwardedRef;
  var color = inViewport ? "#217ac0" : "#ff9800";
  var text = inViewport ? "In viewport" : "Not in viewport";
  console.log("in", inViewport);
  return __jsx("div", {
    className: "overflow-hidden pt-16 min-h-screen flex flex-col justify-between px-5 bg-gradient-to-br to-green-50 from-peach-50 via-green-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative py-3 sm:max-w-xl sm:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform -rotate-12 rounded-3xl overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform transition duration-1000 hover:-rotate-90 -rotate-6 rounded-3xl overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Currently on a mission at"), __jsx("div", {
    className: "my-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "font-bold stroke-green text-4xl text-left md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Making commerce better"), __jsx("div", {
    className: "font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Shopify"), __jsx("div", {
    className: "font-bold stroke-green text-5xl text-right md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "for everyone")))));
};

_c = Current;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,react_in_viewport__WEBPACK_IMPORTED_MODULE_1__.default)(Current));

var _c, _c2;

$RefreshReg$(_c, "Current");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudC50c3giXSwibmFtZXMiOlsiQ3VycmVudCIsInByb3BzIiwiaW5WaWV3cG9ydCIsImZvcndhcmRlZFJlZiIsImNvbG9yIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVWaWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBR1Y7QUFBQSxNQUNJQyxVQURKLEdBQ2lDRCxLQURqQyxDQUNJQyxVQURKO0FBQUEsTUFDZ0JDLFlBRGhCLEdBQ2lDRixLQURqQyxDQUNnQkUsWUFEaEI7QUFFSixNQUFNQyxLQUFLLEdBQUdGLFVBQVUsR0FBRyxTQUFILEdBQWUsU0FBdkM7QUFDQSxNQUFNRyxJQUFJLEdBQUdILFVBQVUsR0FBRyxhQUFILEdBQW1CLGlCQUExQztBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCTCxVQUFsQjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywwSEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxtS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQyx5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdUdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDREQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxvR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLENBSkYsQ0FIRixDQURGLENBREY7QUE0QkQsQ0FyQ0Q7O0tBQU1GLE87QUF1Q04sK0RBQWUsTUFBQVEsMERBQWMsQ0FBQ1IsT0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOTE1Y2E0ZGZlMTA5ZDQ3MjhiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaGFuZGxlVmlld3BvcnQgZnJvbSBcInJlYWN0LWluLXZpZXdwb3J0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jb25zdCBDdXJyZW50ID0gKHByb3BzOiB7XHJcbiAgaW5WaWV3cG9ydDogYm9vbGVhbjtcclxuICBmb3J3YXJkZWRSZWY6IFJlYWN0LkxlZ2FjeVJlZjxIVE1MRGl2RWxlbWVudD47XHJcbn0pID0+IHtcclxuICBjb25zdCB7IGluVmlld3BvcnQsIGZvcndhcmRlZFJlZiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY29sb3IgPSBpblZpZXdwb3J0ID8gXCIjMjE3YWMwXCIgOiBcIiNmZjk4MDBcIjtcclxuICBjb25zdCB0ZXh0ID0gaW5WaWV3cG9ydCA/IFwiSW4gdmlld3BvcnRcIiA6IFwiTm90IGluIHZpZXdwb3J0XCI7XHJcbiAgY29uc29sZS5sb2coXCJpblwiLCBpblZpZXdwb3J0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHB0LTE2IG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweC01IGJnLWdyYWRpZW50LXRvLWJyIHRvLWdyZWVuLTUwIGZyb20tcGVhY2gtNTAgdmlhLWdyZWVuLTUwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMyBzbTptYXgtdy14bCBzbTpteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi02MDAgdG8tZ3JlZW4tNDAwIHNoYWRvdy1sZyB0cmFuc2Zvcm0gLXJvdGF0ZS0xMiByb3VuZGVkLTN4bCBvdmVyZmxvdy1oaWRkZW5cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBlYWNoLTIwMCB0by1wZWFjaC01MDAgc2hhZG93LWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMDAgaG92ZXI6LXJvdGF0ZS05MCAtcm90YXRlLTYgcm91bmRlZC0zeGwgb3ZlcmZsb3ctaGlkZGVuXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWNlbnRlciB3LWZ1bGwgbXktYXV0byBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC0zeGwgcC0xMFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdG8tcGVhY2gtNTAwIHZpYS1pbmRpZ28tNDAwXCI+XHJcbiAgICAgICAgICAgIEN1cnJlbnRseSBvbiBhIG1pc3Npb24gYXRcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHN0cm9rZS1ncmVlbiB0ZXh0LTR4bCB0ZXh0LWxlZnQgbWQ6dy0yLzMgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIE1ha2luZyBjb21tZXJjZSBiZXR0ZXJcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWwgdG8tZ3JlZW4tNzAwIGZyb20tZ3JlZW4tNjAwIHBiLTJcIj5cclxuICAgICAgICAgICAgICBTaG9waWZ5XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzdHJva2UtZ3JlZW4gdGV4dC01eGwgdGV4dC1yaWdodCBtZDp3LTIvMyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgZm9yIGV2ZXJ5b25lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cclxuICAgICAgICAgIE1ha2luZyBjb21tZXJjZSBiZXR0ZXIgZm9ye1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgZm9udC1zZW1pYm9sZFwiPmV2ZXJ5b25lPC9zcGFuPi5cclxuICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVWaWV3cG9ydChDdXJyZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==