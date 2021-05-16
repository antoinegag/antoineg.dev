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



var Block = function Block(props) {
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
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative py-3 sm:max-w-xl sm:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform -rotate-12 rounded-3xl overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform transition duration-1000 hover:-rotate-90 -rotate-6 rounded-3xl overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Currently on a mission at"), __jsx("div", {
    className: "my-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "font-bold stroke-green text-4xl text-left md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Making commerce better"), __jsx("div", {
    className: "font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Shopify"), __jsx("div", {
    className: "font-bold stroke-green text-5xl text-right md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "for everyone")))));
};

_c = Block;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,react_in_viewport__WEBPACK_IMPORTED_MODULE_1__.default)(Block));

var _c, _c2;

$RefreshReg$(_c, "Block");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudC50c3giXSwibmFtZXMiOlsiQmxvY2siLCJwcm9wcyIsImluVmlld3BvcnQiLCJmb3J3YXJkZWRSZWYiLCJjb2xvciIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVmlld3BvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUdSO0FBQUEsTUFDSUMsVUFESixHQUNpQ0QsS0FEakMsQ0FDSUMsVUFESjtBQUFBLE1BQ2dCQyxZQURoQixHQUNpQ0YsS0FEakMsQ0FDZ0JFLFlBRGhCO0FBRUosTUFBTUMsS0FBSyxHQUFHRixVQUFVLEdBQUcsU0FBSCxHQUFlLFNBQXZDO0FBQ0EsTUFBTUcsSUFBSSxHQUFHSCxVQUFVLEdBQUcsYUFBSCxHQUFtQixpQkFBMUM7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkwsVUFBbEI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLGdJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEhBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsbUtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHVHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsb0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsNkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixDQUpGLENBSEYsQ0FERixDQURGO0FBNEJELENBckNEOztLQUFNRixLO0FBdUNOLCtEQUFlLE1BQUFRLDBEQUFjLENBQUNSLEtBQUQsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjE3MmU5YzZjNTA2MmJmYzYxNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGhhbmRsZVZpZXdwb3J0IGZyb20gXCJyZWFjdC1pbi12aWV3cG9ydFwiO1xyXG5jb25zdCBCbG9jayA9IChwcm9wczoge1xyXG4gIGluVmlld3BvcnQ6IGJvb2xlYW47XHJcbiAgZm9yd2FyZGVkUmVmOiBSZWFjdC5MZWdhY3lSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBpblZpZXdwb3J0LCBmb3J3YXJkZWRSZWYgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNvbG9yID0gaW5WaWV3cG9ydCA/IFwiIzIxN2FjMFwiIDogXCIjZmY5ODAwXCI7XHJcbiAgY29uc3QgdGV4dCA9IGluVmlld3BvcnQgPyBcIkluIHZpZXdwb3J0XCIgOiBcIk5vdCBpbiB2aWV3cG9ydFwiO1xyXG4gIGNvbnNvbGUubG9nKFwiaW5cIiwgaW5WaWV3cG9ydCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBwdC0xNiBtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcHgtNSBiZy1ncmFkaWVudC10by1iciB0by1ncmVlbi01MCBmcm9tLXBlYWNoLTUwIHZpYS1ncmVlbi01MFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTMgc206bWF4LXcteGwgc206bXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNjAwIHRvLWdyZWVuLTQwMCBzaGFkb3ctbGcgdHJhbnNmb3JtIC1yb3RhdGUtMTIgcm91bmRlZC0zeGwgb3ZlcmZsb3ctaGlkZGVuXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wZWFjaC0yMDAgdG8tcGVhY2gtNTAwIHNoYWRvdy1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAwIGhvdmVyOi1yb3RhdGUtOTAgLXJvdGF0ZS02IHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlblwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgdy1mdWxsIG15LWF1dG8gYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtM3hsIHAtMTBcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHRvLXBlYWNoLTUwMCB2aWEtaW5kaWdvLTQwMFwiPlxyXG4gICAgICAgICAgICBDdXJyZW50bHkgb24gYSBtaXNzaW9uIGF0XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzdHJva2UtZ3JlZW4gdGV4dC00eGwgdGV4dC1sZWZ0IG1kOnctMi8zIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICBNYWtpbmcgY29tbWVyY2UgYmV0dGVyXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTZ4bCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1sIHRvLWdyZWVuLTcwMCBmcm9tLWdyZWVuLTYwMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgU2hvcGlmeVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgc3Ryb2tlLWdyZWVuIHRleHQtNXhsIHRleHQtcmlnaHQgbWQ6dy0yLzMgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIGZvciBldmVyeW9uZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XHJcbiAgICAgICAgICBNYWtpbmcgY29tbWVyY2UgYmV0dGVyIGZvcntcIiBcIn1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwIGZvbnQtc2VtaWJvbGRcIj5ldmVyeW9uZTwvc3Bhbj4uXHJcbiAgICAgICAgPC9wPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVmlld3BvcnQoQmxvY2spO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9