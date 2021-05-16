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
var ViewportBlock = (0,react_in_viewport__WEBPACK_IMPORTED_MODULE_1__.default)(Block
/** options: {}, config: {} **/
);
_c2 = ViewportBlock;

var Component = function Component(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx("div", {
    style: {
      height: "100vh"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Scroll down to make component in viewport")), __jsx(ViewportBlock, {
    onEnterViewport: function onEnterViewport() {
      return console.log("enter");
    },
    onLeaveViewport: function onLeaveViewport() {
      return console.log("leave");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2UvQ3VycmVudC50c3giXSwibmFtZXMiOlsiQmxvY2siLCJwcm9wcyIsImluVmlld3BvcnQiLCJmb3J3YXJkZWRSZWYiLCJjb2xvciIsInRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJWaWV3cG9ydEJsb2NrIiwiaGFuZGxlVmlld3BvcnQiLCJDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFHUjtBQUFBLE1BQ0lDLFVBREosR0FDaUNELEtBRGpDLENBQ0lDLFVBREo7QUFBQSxNQUNnQkMsWUFEaEIsR0FDaUNGLEtBRGpDLENBQ2dCRSxZQURoQjtBQUVKLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxHQUFHLFNBQUgsR0FBZSxTQUF2QztBQUNBLE1BQU1HLElBQUksR0FBR0gsVUFBVSxHQUFHLGFBQUgsR0FBbUIsaUJBQTFDO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxPQUFHLEVBQUVDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtFLElBQUwsQ0FERixFQUVFO0FBQUssU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxZQUFNLEVBQUUsT0FBMUI7QUFBbUNDLGdCQUFVLEVBQUVKO0FBQS9DLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQWJEOztLQUFNSixLO0FBZU4sSUFBTVMsYUFBYSxHQUFHQywwREFBYyxDQUFDVjtBQUFNO0FBQVAsQ0FBcEM7TUFBTVMsYTs7QUFFTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVixLQUFEO0FBQUEsU0FDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVNLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREYsQ0FERixFQUlFLE1BQUMsYUFBRDtBQUNFLG1CQUFlLEVBQUU7QUFBQSxhQUFNSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQU47QUFBQSxLQURuQjtBQUVFLG1CQUFlLEVBQUU7QUFBQSxhQUFNRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQU47QUFBQSxLQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FEZ0I7QUFBQSxDQUFsQjs7TUFBTUYsUztBQVlOLCtEQUFlQSxTQUFmLEUsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lM2FmNzUwYmNiNmY1YWQxNTdlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaGFuZGxlVmlld3BvcnQgZnJvbSBcInJlYWN0LWluLXZpZXdwb3J0XCI7XHJcbmNvbnN0IEJsb2NrID0gKHByb3BzOiB7XHJcbiAgaW5WaWV3cG9ydDogYm9vbGVhbjtcclxuICBmb3J3YXJkZWRSZWY6IFJlYWN0LkxlZ2FjeVJlZjxIVE1MRGl2RWxlbWVudD47XHJcbn0pID0+IHtcclxuICBjb25zdCB7IGluVmlld3BvcnQsIGZvcndhcmRlZFJlZiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY29sb3IgPSBpblZpZXdwb3J0ID8gXCIjMjE3YWMwXCIgOiBcIiNmZjk4MDBcIjtcclxuICBjb25zdCB0ZXh0ID0gaW5WaWV3cG9ydCA/IFwiSW4gdmlld3BvcnRcIiA6IFwiTm90IGluIHZpZXdwb3J0XCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld3BvcnQtYmxvY2tcIiByZWY9e2ZvcndhcmRlZFJlZn0+XHJcbiAgICAgIDxoMz57dGV4dH08L2gzPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIsIGhlaWdodDogXCIzMDBweFwiLCBiYWNrZ3JvdW5kOiBjb2xvciB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFZpZXdwb3J0QmxvY2sgPSBoYW5kbGVWaWV3cG9ydChCbG9jayAvKiogb3B0aW9uczoge30sIGNvbmZpZzoge30gKiovKTtcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICA8aDI+U2Nyb2xsIGRvd24gdG8gbWFrZSBjb21wb25lbnQgaW4gdmlld3BvcnQ8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Vmlld3BvcnRCbG9ja1xyXG4gICAgICBvbkVudGVyVmlld3BvcnQ9eygpID0+IGNvbnNvbGUubG9nKFwiZW50ZXJcIil9XHJcbiAgICAgIG9uTGVhdmVWaWV3cG9ydD17KCkgPT4gY29uc29sZS5sb2coXCJsZWF2ZVwiKX1cclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcbi8vIGNvbnN0IEN1cnJlbnQgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHB0LTE2IG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweC01IGJnLWdyYWRpZW50LXRvLWJyIHRvLWdyZWVuLTUwIGZyb20tcGVhY2gtNTAgdmlhLWdyZWVuLTUwXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMyBzbTptYXgtdy14bCBzbTpteC1hdXRvXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi02MDAgdG8tZ3JlZW4tNDAwIHNoYWRvdy1sZyB0cmFuc2Zvcm0gLXJvdGF0ZS0xMiByb3VuZGVkLTN4bCBvdmVyZmxvdy1oaWRkZW5cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBlYWNoLTIwMCB0by1wZWFjaC01MDAgc2hhZG93LWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMDAgaG92ZXI6LXJvdGF0ZS05MCAtcm90YXRlLTYgcm91bmRlZC0zeGwgb3ZlcmZsb3ctaGlkZGVuXCI+PC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWNlbnRlciB3LWZ1bGwgbXktYXV0byBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC0zeGwgcC0xMFwiPlxyXG4vLyAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdG8tcGVhY2gtNTAwIHZpYS1pbmRpZ28tNDAwXCI+XHJcbi8vICAgICAgICAgICAgIEN1cnJlbnRseSBvbiBhIG1pc3Npb24gYXRcclxuLy8gICAgICAgICAgIDwvaDE+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHN0cm9rZS1ncmVlbiB0ZXh0LTR4bCB0ZXh0LWxlZnQgbWQ6dy0yLzMgbXgtYXV0b1wiPlxyXG4vLyAgICAgICAgICAgICAgIE1ha2luZyBjb21tZXJjZSBiZXR0ZXJcclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWwgdG8tZ3JlZW4tNzAwIGZyb20tZ3JlZW4tNjAwIHBiLTJcIj5cclxuLy8gICAgICAgICAgICAgICBTaG9waWZ5XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzdHJva2UtZ3JlZW4gdGV4dC01eGwgdGV4dC1yaWdodCBtZDp3LTIvMyBteC1hdXRvXCI+XHJcbi8vICAgICAgICAgICAgICAgZm9yIGV2ZXJ5b25lXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cclxuLy8gICAgICAgICAgIE1ha2luZyBjb21tZXJjZSBiZXR0ZXIgZm9ye1wiIFwifVxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgZm9udC1zZW1pYm9sZFwiPmV2ZXJ5b25lPC9zcGFuPi5cclxuLy8gICAgICAgICA8L3A+ICovfVxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDdXJyZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9