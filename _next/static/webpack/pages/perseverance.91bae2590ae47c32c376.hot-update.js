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
    title: "Perseverance landing",
    description: "Perseverance landing countdown",
    canonical: "https://antoineg.dev/perseverance",
    openGraph: {
      url: "https://antoineg.dev/perseverance",
      title: "Perseverance landing",
      description: "Perseverance landing countdown"
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
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-2xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Perseverance landing"), __jsx("div", {
    className: "text-white text-4xl lg:text-9xl w-full text-center py-5 font-bold font-mono",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    renderer: renderer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_3__["isMobile"] || react_device_detect__WEBPACK_IMPORTED_MODULE_3__["isIPad13"] ? "Touch and drag to explore the rover" : "Click and drag to explore the rover"), __jsx("div", {
    className: "text-yellow-500 pb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "antoineg.dev/perseverance")), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInplcm9QYWQiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIiwiaXNNb2JpbGUiLCJpc0lQYWQxMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLENBQWI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNEM7QUFBQSxRQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsUUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLFFBQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxRQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUMzRCxRQUFJQSxTQUFKLEVBQWU7QUFDYixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0MsK0RBQU8sQ0FBQ0osS0FBRCxDQURWLEVBRUU7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFHR0ksK0RBQU8sQ0FBQ0gsT0FBRCxDQUhWLEVBSUU7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFLR0csK0RBQU8sQ0FBQ0YsT0FBRCxDQUxWLENBREY7QUFTRDtBQUNGLEdBZEQ7O0FBZ0JBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUNFLFNBQUssRUFBQyxzQkFEUjtBQUVFLGVBQVcsRUFBQyxnQ0FGZDtBQUdFLGFBQVMsRUFBQyxtQ0FIWjtBQUlFLGFBQVMsRUFBRTtBQUNURyxTQUFHLEVBQUUsbUNBREk7QUFFVEMsV0FBSyxFQUFFLHNCQUZFO0FBR1RDLGlCQUFXLEVBQUU7QUFISixLQUpiO0FBU0UsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxlQUREO0FBRVBDLFVBQUksRUFBRSxzQkFGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQVRYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWdCRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFXLFFBQUksRUFBRWQsSUFBakI7QUFBdUIsWUFBUSxFQUFFRyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWSw0REFBUSxJQUFJQyw0REFBWixHQUNHLHFDQURILEdBRUcscUNBSE4sQ0FQRixFQWFFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBYkYsQ0FERixFQWdCRSxNQUFDLDREQUFEO0FBQU8sYUFBUyxFQUFDLDJDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBaEJGLENBREY7QUFxQ0QsQ0F4REQ7O0tBQU1qQixZO0FBMERTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzZXZlcmFuY2UuOTFiYWUyNTkwYWU0N2MzMmMzNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuaW1wb3J0IHsgaXNJUGFkMTMsIGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IFJvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzLzNEL1JvdmVyXCI7XHJcblxyXG5jb25zdCBQZXJzZXZlcmFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IERhdGUuVVRDKDIwMjEsIDEsIDE4LCAyMCwgNTQsIDUzKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZXIgPSAoeyBob3VycywgbWludXRlcywgc2Vjb25kcywgY29tcGxldGVkIH0pID0+IHtcclxuICAgIGlmIChjb21wbGV0ZWQpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+TGFuZGVkITwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7emVyb1BhZChob3Vycyl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDBcIj46PC9zcGFuPlxyXG4gICAgICAgICAge3plcm9QYWQobWludXRlcyl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDBcIj46PC9zcGFuPlxyXG4gICAgICAgICAge3plcm9QYWQoc2Vjb25kcyl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPVwiUGVyc2V2ZXJhbmNlIGxhbmRpbmdcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiUGVyc2V2ZXJhbmNlIGxhbmRpbmcgY291bnRkb3duXCJcclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL2FudG9pbmVnLmRldi9wZXJzZXZlcmFuY2VcIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2L3BlcnNldmVyYW5jZVwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiUGVyc2V2ZXJhbmNlIGxhbmRpbmdcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNldmVyYW5jZSBsYW5kaW5nIGNvdW50ZG93blwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgaGFuZGxlOiBcIkBhbnRvaW5lZ19kZXZcIixcclxuICAgICAgICAgIHNpdGU6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXZcIixcclxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBwdC0xMiBhYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsZzp0ZXh0LTh4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIFBlcnNldmVyYW5jZSBsYW5kaW5nXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTR4bCBsZzp0ZXh0LTl4bCB3LWZ1bGwgdGV4dC1jZW50ZXIgcHktNSBmb250LWJvbGQgZm9udC1tb25vXCI+XHJcbiAgICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17ZGF0ZX0gcmVuZGVyZXI9e3JlbmRlcmVyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge2lzTW9iaWxlIHx8IGlzSVBhZDEzXHJcbiAgICAgICAgICAgICAgPyBcIlRvdWNoIGFuZCBkcmFnIHRvIGV4cGxvcmUgdGhlIHJvdmVyXCJcclxuICAgICAgICAgICAgICA6IFwiQ2xpY2sgYW5kIGRyYWcgdG8gZXhwbG9yZSB0aGUgcm92ZXJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHBiLTBcIj5hbnRvaW5lZy5kZXYvcGVyc2V2ZXJhbmNlPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdmVyIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCB0b3AtMCB6LTAgdy1mdWxsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2V2ZXJhbmNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9