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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\Home\\Experience\\Current.tsx",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




var Current = function Current(props) {
  var inViewport = props.inViewport,
      forwardedRef = props.forwardedRef;
  console.log("in", inViewport);
  return __jsx("div", {
    className: "overflow-hidden pt-16 min-h-screen flex flex-col justify-between px-5 bg-gradient-to-br to-green-50 from-peach-50 via-green-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative py-3 sm:max-w-xl sm:mx-auto",
    ref: forwardedRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform transition duration-1000 rounded-3xl overflow-hidden", {
      "-rotate-12": inViewport
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform transition duration-1000 rounded-3xl overflow-hidden", {
      "-rotate-6": inViewport
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Currently on a mission at"), __jsx("div", {
    className: "my-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "font-bold stroke-green text-4xl text-left md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Making commerce better"), __jsx("div", {
    className: "font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Shopify"), __jsx("div", {
    className: "font-bold stroke-green text-5xl text-right md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudC50c3giXSwibmFtZXMiOlsiQ3VycmVudCIsInByb3BzIiwiaW5WaWV3cG9ydCIsImZvcndhcmRlZFJlZiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWVzIiwiaGFuZGxlVmlld3BvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFHVjtBQUFBLE1BQ0lDLFVBREosR0FDaUNELEtBRGpDLENBQ0lDLFVBREo7QUFBQSxNQUNnQkMsWUFEaEIsR0FDaUNGLEtBRGpDLENBQ2dCRSxZQURoQjtBQUVKQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCSCxVQUFsQjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQXNELE9BQUcsRUFBRUMsWUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFFRyxpREFBVSxDQUNuQix3SUFEbUIsRUFFbkI7QUFBRSxvQkFBY0o7QUFBaEIsS0FGbUIsQ0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFDRSxhQUFTLEVBQUVJLGlEQUFVLENBQ25CLHdJQURtQixFQUVuQjtBQUFFLG1CQUFhSjtBQUFmLEtBRm1CLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQWFFO0FBQUssYUFBUyxFQUFDLHlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx1R0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUlFO0FBQUssYUFBUyxFQUFDLG9HQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQU9FO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsQ0FKRixDQWJGLENBREYsQ0FERjtBQWtDRCxDQXpDRDs7S0FBTUYsTztBQTJDTiwrREFBZSxNQUFBTywwREFBYyxDQUFDUCxPQUFELENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMyZjc5MmJlMTZjZTA0ZTk0ZTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBoYW5kbGVWaWV3cG9ydCBmcm9tIFwicmVhY3QtaW4tdmlld3BvcnRcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IEN1cnJlbnQgPSAocHJvcHM6IHtcclxuICBpblZpZXdwb3J0OiBib29sZWFuO1xyXG4gIGZvcndhcmRlZFJlZjogUmVhY3QuTGVnYWN5UmVmPEhUTUxEaXZFbGVtZW50PjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgaW5WaWV3cG9ydCwgZm9yd2FyZGVkUmVmIH0gPSBwcm9wcztcclxuICBjb25zb2xlLmxvZyhcImluXCIsIGluVmlld3BvcnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcHQtMTYgbWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHB4LTUgYmctZ3JhZGllbnQtdG8tYnIgdG8tZ3JlZW4tNTAgZnJvbS1wZWFjaC01MCB2aWEtZ3JlZW4tNTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0zIHNtOm1heC13LXhsIHNtOm14LWF1dG9cIiByZWY9e2ZvcndhcmRlZFJlZn0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBcImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTYwMCB0by1ncmVlbi00MDAgc2hhZG93LWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMDAgcm91bmRlZC0zeGwgb3ZlcmZsb3ctaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIHsgXCItcm90YXRlLTEyXCI6IGluVmlld3BvcnQgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBcImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBlYWNoLTIwMCB0by1wZWFjaC01MDAgc2hhZG93LWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMDAgcm91bmRlZC0zeGwgb3ZlcmZsb3ctaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIHsgXCItcm90YXRlLTZcIjogaW5WaWV3cG9ydCB9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtY2VudGVyIHctZnVsbCBteS1hdXRvIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLTN4bCBwLTEwXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by1wZWFjaC01MDAgdmlhLWluZGlnby00MDBcIj5cclxuICAgICAgICAgICAgQ3VycmVudGx5IG9uIGEgbWlzc2lvbiBhdFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgc3Ryb2tlLWdyZWVuIHRleHQtNHhsIHRleHQtbGVmdCBtZDp3LTIvMyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgTWFraW5nIGNvbW1lcmNlIGJldHRlclxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC02eGwgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tbCB0by1ncmVlbi03MDAgZnJvbS1ncmVlbi02MDAgcGItMlwiPlxyXG4gICAgICAgICAgICAgIFNob3BpZnlcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHN0cm9rZS1ncmVlbiB0ZXh0LTV4bCB0ZXh0LXJpZ2h0IG1kOnctMi8zIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICBmb3IgZXZlcnlvbmVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVmlld3BvcnQoQ3VycmVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=