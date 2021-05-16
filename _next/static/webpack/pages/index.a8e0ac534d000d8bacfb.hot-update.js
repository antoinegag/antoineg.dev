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
  return __jsx("div", {
    className: "viewport-block",
    ref: forwardedRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, text), __jsx("div", {
    style: {
      width: "400px",
      height: "300px",
      background: color
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

_c = Block;
var ViewportBlock = (0,react_in_viewport__WEBPACK_IMPORTED_MODULE_1__.default)(Block);
_c2 = ViewportBlock;

var Component = function Component(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx(ViewportBlock, {
    onEnterViewport: function onEnterViewport() {
      return console.log("enter");
    },
    onLeaveViewport: function onLeaveViewport() {
      return console.log("leave");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }));
};

_c3 = Component;
/* harmony default export */ __webpack_exports__["default"] = (Component); // const Current = () => {
//   return (
//     <div className="overflow-hidden pt-16 min-h-screen flex flex-col justify-between px-5 bg-gradient-to-br to-green-50 from-peach-50 via-green-50">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform -rotate-12 rounded-3xl overflow-hidden"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform transition duration-1000 hover:-rotate-90 -rotate-6 rounded-3xl overflow-hidden"></div>
//         <div className="relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10">
//           <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400">
//             Currently on a mission at
//           </h1>
//           <div className="my-10">
//             <div className="font-bold stroke-green text-4xl text-left md:w-2/3 mx-auto">
//               Making commerce better
//             </div>
//             <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2">
//               Shopify
//             </div>
//             <div className="font-bold stroke-green text-5xl text-right md:w-2/3 mx-auto">
//               for everyone
//             </div>
//           </div>
//           {/* <p className="text-2xl">
//           Making commerce better for{" "}
//           <span className="text-green-600 font-semibold">everyone</span>.
//         </p> */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Current;

var _c, _c2, _c3;

$RefreshReg$(_c, "Block");
$RefreshReg$(_c2, "ViewportBlock");
$RefreshReg$(_c3, "Component");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudC50c3giXSwibmFtZXMiOlsiQmxvY2siLCJwcm9wcyIsImluVmlld3BvcnQiLCJmb3J3YXJkZWRSZWYiLCJjb2xvciIsInRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJWaWV3cG9ydEJsb2NrIiwiaGFuZGxlVmlld3BvcnQiLCJDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFHUjtBQUFBLE1BQ0lDLFVBREosR0FDaUNELEtBRGpDLENBQ0lDLFVBREo7QUFBQSxNQUNnQkMsWUFEaEIsR0FDaUNGLEtBRGpDLENBQ2dCRSxZQURoQjtBQUVKLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxHQUFHLFNBQUgsR0FBZSxTQUF2QztBQUNBLE1BQU1HLElBQUksR0FBR0gsVUFBVSxHQUFHLGFBQUgsR0FBbUIsaUJBQTFDO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxPQUFHLEVBQUVDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtFLElBQUwsQ0FERixFQUVFO0FBQUssU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxZQUFNLEVBQUUsT0FBMUI7QUFBbUNDLGdCQUFVLEVBQUVKO0FBQS9DLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQWJEOztLQUFNSixLO0FBZU4sSUFBTVMsYUFBYSxHQUFHQywwREFBYyxDQUFDVixLQUFELENBQXBDO01BQU1TLGE7O0FBRU4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1YsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFDRSxtQkFBZSxFQUFFO0FBQUEsYUFBTVcsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUFOO0FBQUEsS0FEbkI7QUFFRSxtQkFBZSxFQUFFO0FBQUEsYUFBTUQsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUFOO0FBQUEsS0FGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRGdCO0FBQUEsQ0FBbEI7O01BQU1GLFM7QUFTTiwrREFBZUEsU0FBZixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThlMGFjNTM0ZDAwMGQ4YmFjZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGhhbmRsZVZpZXdwb3J0IGZyb20gXCJyZWFjdC1pbi12aWV3cG9ydFwiO1xyXG5jb25zdCBCbG9jayA9IChwcm9wczoge1xyXG4gIGluVmlld3BvcnQ6IGJvb2xlYW47XHJcbiAgZm9yd2FyZGVkUmVmOiBSZWFjdC5MZWdhY3lSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBpblZpZXdwb3J0LCBmb3J3YXJkZWRSZWYgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNvbG9yID0gaW5WaWV3cG9ydCA/IFwiIzIxN2FjMFwiIDogXCIjZmY5ODAwXCI7XHJcbiAgY29uc3QgdGV4dCA9IGluVmlld3BvcnQgPyBcIkluIHZpZXdwb3J0XCIgOiBcIk5vdCBpbiB2aWV3cG9ydFwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdwb3J0LWJsb2NrXCIgcmVmPXtmb3J3YXJkZWRSZWZ9PlxyXG4gICAgICA8aDM+e3RleHR9PC9oMz5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MDBweFwiLCBoZWlnaHQ6IFwiMzAwcHhcIiwgYmFja2dyb3VuZDogY29sb3IgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBWaWV3cG9ydEJsb2NrID0gaGFuZGxlVmlld3BvcnQoQmxvY2spO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxWaWV3cG9ydEJsb2NrXHJcbiAgICAgIG9uRW50ZXJWaWV3cG9ydD17KCkgPT4gY29uc29sZS5sb2coXCJlbnRlclwiKX1cclxuICAgICAgb25MZWF2ZVZpZXdwb3J0PXsoKSA9PiBjb25zb2xlLmxvZyhcImxlYXZlXCIpfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuLy8gY29uc3QgQ3VycmVudCA9ICgpID0+IHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcHQtMTYgbWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHB4LTUgYmctZ3JhZGllbnQtdG8tYnIgdG8tZ3JlZW4tNTAgZnJvbS1wZWFjaC01MCB2aWEtZ3JlZW4tNTBcIj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0zIHNtOm1heC13LXhsIHNtOm14LWF1dG9cIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTYwMCB0by1ncmVlbi00MDAgc2hhZG93LWxnIHRyYW5zZm9ybSAtcm90YXRlLTEyIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlblwiPjwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcGVhY2gtMjAwIHRvLXBlYWNoLTUwMCBzaGFkb3ctbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMCBob3Zlcjotcm90YXRlLTkwIC1yb3RhdGUtNiByb3VuZGVkLTN4bCBvdmVyZmxvdy1oaWRkZW5cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtY2VudGVyIHctZnVsbCBteS1hdXRvIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLTN4bCBwLTEwXCI+XHJcbi8vICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by1wZWFjaC01MDAgdmlhLWluZGlnby00MDBcIj5cclxuLy8gICAgICAgICAgICAgQ3VycmVudGx5IG9uIGEgbWlzc2lvbiBhdFxyXG4vLyAgICAgICAgICAgPC9oMT5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTBcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgc3Ryb2tlLWdyZWVuIHRleHQtNHhsIHRleHQtbGVmdCBtZDp3LTIvMyBteC1hdXRvXCI+XHJcbi8vICAgICAgICAgICAgICAgTWFraW5nIGNvbW1lcmNlIGJldHRlclxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC02eGwgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tbCB0by1ncmVlbi03MDAgZnJvbS1ncmVlbi02MDAgcGItMlwiPlxyXG4vLyAgICAgICAgICAgICAgIFNob3BpZnlcclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHN0cm9rZS1ncmVlbiB0ZXh0LTV4bCB0ZXh0LXJpZ2h0IG1kOnctMi8zIG14LWF1dG9cIj5cclxuLy8gICAgICAgICAgICAgICBmb3IgZXZlcnlvbmVcclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4vLyAgICAgICAgICAgTWFraW5nIGNvbW1lcmNlIGJldHRlciBmb3J7XCIgXCJ9XHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBmb250LXNlbWlib2xkXCI+ZXZlcnlvbmU8L3NwYW4+LlxyXG4vLyAgICAgICAgIDwvcD4gKi99XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEN1cnJlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=