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
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative py-3 sm:max-w-xl sm:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform -rotate-12 rounded-3xl overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform transition duration-1000 hover:-rotate-90 -rotate-6 rounded-3xl overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Currently on a mission at"), __jsx("div", {
    className: "my-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "font-bold stroke-green text-4xl text-left md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Making commerce better"), __jsx("div", {
    className: "font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Shopify"), __jsx("div", {
    className: "font-bold stroke-green text-5xl text-right md:w-2/3 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "for everyone")))));
};

_c = Block;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,react_in_viewport__WEBPACK_IMPORTED_MODULE_1__.default)(Block)); // const Current = () => {
// };
// export default Current;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudC50c3giXSwibmFtZXMiOlsiQmxvY2siLCJwcm9wcyIsImluVmlld3BvcnQiLCJmb3J3YXJkZWRSZWYiLCJjb2xvciIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVmlld3BvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUdSO0FBQUEsTUFDSUMsVUFESixHQUNpQ0QsS0FEakMsQ0FDSUMsVUFESjtBQUFBLE1BQ2dCQyxZQURoQixHQUNpQ0YsS0FEakMsQ0FDZ0JFLFlBRGhCO0FBRUosTUFBTUMsS0FBSyxHQUFHRixVQUFVLEdBQUcsU0FBSCxHQUFlLFNBQXZDO0FBQ0EsTUFBTUcsSUFBSSxHQUFHSCxVQUFVLEdBQUcsYUFBSCxHQUFtQixpQkFBMUM7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkwsVUFBbEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLGdJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEhBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsbUtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHVHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsb0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsNkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixDQUpGLENBSEYsQ0FERixDQURGO0FBNEJELENBcENEOztLQUFNRixLO0FBc0NOLCtEQUFlLE1BQUFRLDBEQUFjLENBQUNSLEtBQUQsQ0FBN0IsRSxDQUNBO0FBRUE7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNTIxNGU5NzhkYWJlZWZjNDVjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaGFuZGxlVmlld3BvcnQgZnJvbSBcInJlYWN0LWluLXZpZXdwb3J0XCI7XHJcbmNvbnN0IEJsb2NrID0gKHByb3BzOiB7XHJcbiAgaW5WaWV3cG9ydDogYm9vbGVhbjtcclxuICBmb3J3YXJkZWRSZWY6IFJlYWN0LkxlZ2FjeVJlZjxIVE1MRGl2RWxlbWVudD47XHJcbn0pID0+IHtcclxuICBjb25zdCB7IGluVmlld3BvcnQsIGZvcndhcmRlZFJlZiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY29sb3IgPSBpblZpZXdwb3J0ID8gXCIjMjE3YWMwXCIgOiBcIiNmZjk4MDBcIjtcclxuICBjb25zdCB0ZXh0ID0gaW5WaWV3cG9ydCA/IFwiSW4gdmlld3BvcnRcIiA6IFwiTm90IGluIHZpZXdwb3J0XCI7XHJcbiAgY29uc29sZS5sb2coXCJpblwiLCBpblZpZXdwb3J0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcHQtMTYgbWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHB4LTUgYmctZ3JhZGllbnQtdG8tYnIgdG8tZ3JlZW4tNTAgZnJvbS1wZWFjaC01MCB2aWEtZ3JlZW4tNTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0zIHNtOm1heC13LXhsIHNtOm14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTYwMCB0by1ncmVlbi00MDAgc2hhZG93LWxnIHRyYW5zZm9ybSAtcm90YXRlLTEyIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlblwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcGVhY2gtMjAwIHRvLXBlYWNoLTUwMCBzaGFkb3ctbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMCBob3Zlcjotcm90YXRlLTkwIC1yb3RhdGUtNiByb3VuZGVkLTN4bCBvdmVyZmxvdy1oaWRkZW5cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtY2VudGVyIHctZnVsbCBteS1hdXRvIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLTN4bCBwLTEwXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by1wZWFjaC01MDAgdmlhLWluZGlnby00MDBcIj5cclxuICAgICAgICAgICAgQ3VycmVudGx5IG9uIGEgbWlzc2lvbiBhdFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgc3Ryb2tlLWdyZWVuIHRleHQtNHhsIHRleHQtbGVmdCBtZDp3LTIvMyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgTWFraW5nIGNvbW1lcmNlIGJldHRlclxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC02eGwgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tbCB0by1ncmVlbi03MDAgZnJvbS1ncmVlbi02MDAgcGItMlwiPlxyXG4gICAgICAgICAgICAgIFNob3BpZnlcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHN0cm9rZS1ncmVlbiB0ZXh0LTV4bCB0ZXh0LXJpZ2h0IG1kOnctMi8zIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICBmb3IgZXZlcnlvbmVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgTWFraW5nIGNvbW1lcmNlIGJldHRlciBmb3J7XCIgXCJ9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBmb250LXNlbWlib2xkXCI+ZXZlcnlvbmU8L3NwYW4+LlxyXG4gICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVZpZXdwb3J0KEJsb2NrKTtcclxuLy8gY29uc3QgQ3VycmVudCA9ICgpID0+IHtcclxuXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDdXJyZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9