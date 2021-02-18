webpackHotUpdate_N_E("pages/perseverance",{

/***/ "./pages/perseverance.tsx":
/*!********************************!*\
  !*** ./pages/perseverance.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_3D_Rover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/3D/Rover */ "./components/3D/Rover/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\perseverance.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Perseverance = function Perseverance() {
  var date = Date.UTC(2021, 1, 18, 20, 54, 53);

  var renderer = function renderer(_ref) {
    var hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds,
        completed = _ref.completed;

    if (completed) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      }, "Landed!");
    } else {
      return __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours), __jsx("span", {
        className: "text-yellow-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, ":"), Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes), __jsx("span", {
        className: "text-yellow-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }
      }, ":"), Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_0__["NextSeo"], {
    title: "ANTOINEG.DEV",
    description: "Curiosity driven maker, Web Developer, tech enthusiast",
    canonical: "https://antoineg.dev/",
    openGraph: {
      url: "https://antoineg.dev",
      title: "ANTOINEG.DEV",
      description: "Curiosity driven maker, Web Developer, tech enthusiast",
      images: [{
        url: "https://antoineg.dev/images/action.jpg",
        width: 585,
        height: 585,
        alt: "Portrait"
      }]
    },
    twitter: {
      handle: "@antoineg_dev",
      site: "https://antoineg.dev",
      cardType: "summary_large_image"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "bg-gray-800 w-full min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-2xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Perseverance landing"), __jsx("div", {
    className: "text-white text-4xl lg:text-9xl w-full text-center py-5 font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    renderer: renderer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_3__["isMobile"] || react_device_detect__WEBPACK_IMPORTED_MODULE_3__["isIPad13"] ? "Move with your fingers!" : "Move with your mouse! Hold left click to rotate, right click to move."), __jsx("div", {
    className: "text-yellow-500 pb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "antoineg.dev/perseverance")), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })));
};

_c = Perseverance;
/* harmony default export */ __webpack_exports__["default"] = (Perseverance);

var _c;

$RefreshReg$(_c, "Perseverance");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInplcm9QYWQiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiLCJpc01vYmlsZSIsImlzSVBhZDEzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsQ0FBYjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QztBQUFBLFFBQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxRQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsUUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLFFBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQzNELFFBQUlBLFNBQUosRUFBZTtBQUNiLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHQywrREFBTyxDQUFDSixLQUFELENBRFYsRUFFRTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdHSSwrREFBTyxDQUFDSCxPQUFELENBSFYsRUFJRTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtHRywrREFBTyxDQUFDRixPQUFELENBTFYsQ0FERjtBQVNEO0FBQ0YsR0FkRDs7QUFnQkEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxlQUFXLEVBQUMsd0RBRmQ7QUFHRSxhQUFTLEVBQUMsdUJBSFo7QUFJRSxhQUFTLEVBQUU7QUFDVEcsU0FBRyxFQUFFLHNCQURJO0FBRVRDLFdBQUssRUFBRSxjQUZFO0FBR1RDLGlCQUFXLEVBQUUsd0RBSEo7QUFJVEMsWUFBTSxFQUFFLENBQ047QUFDRUgsV0FBRyxFQUFFLHdDQURQO0FBRUVJLGFBQUssRUFBRSxHQUZUO0FBR0VDLGNBQU0sRUFBRSxHQUhWO0FBSUVDLFdBQUcsRUFBRTtBQUpQLE9BRE07QUFKQyxLQUpiO0FBaUJFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsZUFERDtBQUVQQyxVQUFJLEVBQUUsc0JBRkM7QUFHUEMsY0FBUSxFQUFFO0FBSEgsS0FqQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBd0JFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUlFO0FBQUssYUFBUyxFQUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQVcsUUFBSSxFQUFFbEIsSUFBakI7QUFBdUIsWUFBUSxFQUFFRyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZ0IsNERBQVEsSUFBSUMsNERBQVosR0FDRyx5QkFESCxHQUVHLHVFQUhOLENBUEYsRUFhRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWJGLENBREYsRUFnQkUsTUFBQyw0REFBRDtBQUFPLGFBQVMsRUFBQywyQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQXhCRixDQURGO0FBNkNELENBaEVEOztLQUFNckIsWTtBQWtFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyc2V2ZXJhbmNlLmZmOGUzMDg1N2IzYTE2MmVjNWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ291bnRkb3duLCB7IHplcm9QYWQgfSBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XHJcbmltcG9ydCB7IGlzSVBhZDEzLCBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcbmltcG9ydCBSb3ZlciBmcm9tIFwiLi4vY29tcG9uZW50cy8zRC9Sb3ZlclwiO1xyXG5cclxuY29uc3QgUGVyc2V2ZXJhbmNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBEYXRlLlVUQygyMDIxLCAxLCAxOCwgMjAsIDU0LCA1Myk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVyID0gKHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XHJcbiAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxhbmRlZCE8L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge3plcm9QYWQoaG91cnMpfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNjAwXCI+Ojwvc3Bhbj5cclxuICAgICAgICAgIHt6ZXJvUGFkKG1pbnV0ZXMpfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNjAwXCI+Ojwvc3Bhbj5cclxuICAgICAgICAgIHt6ZXJvUGFkKHNlY29uZHMpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT1cIkFOVE9JTkVHLkRFVlwiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJDdXJpb3NpdHkgZHJpdmVuIG1ha2VyLCBXZWIgRGV2ZWxvcGVyLCB0ZWNoIGVudGh1c2lhc3RcIlxyXG4gICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vYW50b2luZWcuZGV2L1wiXHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXZcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkFOVE9JTkVHLkRFVlwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VyaW9zaXR5IGRyaXZlbiBtYWtlciwgV2ViIERldmVsb3BlciwgdGVjaCBlbnRodXNpYXN0XCIsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FudG9pbmVnLmRldi9pbWFnZXMvYWN0aW9uLmpwZ1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA1ODUsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1ODUsXHJcbiAgICAgICAgICAgICAgYWx0OiBcIlBvcnRyYWl0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgaGFuZGxlOiBcIkBhbnRvaW5lZ19kZXZcIixcclxuICAgICAgICAgIHNpdGU6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXZcIixcclxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBwdC0xMiBhYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsZzp0ZXh0LTh4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIFBlcnNldmVyYW5jZSBsYW5kaW5nXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTR4bCBsZzp0ZXh0LTl4bCB3LWZ1bGwgdGV4dC1jZW50ZXIgcHktNSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgPENvdW50ZG93biBkYXRlPXtkYXRlfSByZW5kZXJlcj17cmVuZGVyZXJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICB7aXNNb2JpbGUgfHwgaXNJUGFkMTNcclxuICAgICAgICAgICAgICA/IFwiTW92ZSB3aXRoIHlvdXIgZmluZ2VycyFcIlxyXG4gICAgICAgICAgICAgIDogXCJNb3ZlIHdpdGggeW91ciBtb3VzZSEgSG9sZCBsZWZ0IGNsaWNrIHRvIHJvdGF0ZSwgcmlnaHQgY2xpY2sgdG8gbW92ZS5cIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHBiLTBcIj5hbnRvaW5lZy5kZXYvcGVyc2V2ZXJhbmNlPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdmVyIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCB0b3AtMCB6LTAgdy1mdWxsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2V2ZXJhbmNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9