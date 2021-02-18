webpackHotUpdate_N_E("pages/perseverance",{

/***/ "./pages/perseverance.tsx":
/*!********************************!*\
  !*** ./pages/perseverance.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_3D_Rover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/3D/Rover */ "./components/3D/Rover/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\perseverance.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





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
          lineNumber: 11,
          columnNumber: 14
        }
      }, "Landed!");
    } else {
      return __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(hours), __jsx("span", {
        className: "text-yellow-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, ":"), Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(minutes), __jsx("span", {
        className: "text-yellow-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }, ":"), Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(seconds));
    }
  };

  return __jsx("div", {
    className: "bg-gray-800 w-full min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-2xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Perseverance landing"), __jsx("div", {
    className: "text-white text-4xl lg:text-9xl w-full text-center py-5 font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: date,
    renderer: renderer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] || react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isIPad13"] ? "Move with your fingers!" : "Move with your mouse! Hold left click to rotate, right click to move."), __jsx("div", {
    className: "text-yellow-500 pb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "antoineg.dev/perseverance")), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc2V2ZXJhbmNlLnRzeCJdLCJuYW1lcyI6WyJQZXJzZXZlcmFuY2UiLCJkYXRlIiwiRGF0ZSIsIlVUQyIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInplcm9QYWQiLCJpc01vYmlsZSIsImlzSVBhZDEzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsQ0FBYjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QztBQUFBLFFBQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxRQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsUUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLFFBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQzNELFFBQUlBLFNBQUosRUFBZTtBQUNiLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHQywrREFBTyxDQUFDSixLQUFELENBRFYsRUFFRTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdHSSwrREFBTyxDQUFDSCxPQUFELENBSFYsRUFJRTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtHRywrREFBTyxDQUFDRixPQUFELENBTFYsQ0FERjtBQVNEO0FBQ0YsR0FkRDs7QUFnQkEsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxtRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFXLFFBQUksRUFBRU4sSUFBakI7QUFBdUIsWUFBUSxFQUFFRyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSw0REFBUSxJQUFJQyw0REFBWixHQUNHLHlCQURILEdBRUcsdUVBSE4sQ0FQRixFQWFFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBYkYsQ0FERixFQWdCRSxNQUFDLDREQUFEO0FBQU8sYUFBUyxFQUFDLDJDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREY7QUFvQkQsQ0F2Q0Q7O0tBQU1YLFk7QUF5Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNldmVyYW5jZS5lZDA4Y2UyM2Y1ZjljMTI0MzAwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuaW1wb3J0IHsgaXNJUGFkMTMsIGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IFJvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzLzNEL1JvdmVyXCI7XHJcblxyXG5jb25zdCBQZXJzZXZlcmFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IERhdGUuVVRDKDIwMjEsIDEsIDE4LCAyMCwgNTQsIDUzKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZXIgPSAoeyBob3VycywgbWludXRlcywgc2Vjb25kcywgY29tcGxldGVkIH0pID0+IHtcclxuICAgIGlmIChjb21wbGV0ZWQpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+TGFuZGVkITwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7emVyb1BhZChob3Vycyl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDBcIj46PC9zcGFuPlxyXG4gICAgICAgICAge3plcm9QYWQobWludXRlcyl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDBcIj46PC9zcGFuPlxyXG4gICAgICAgICAge3plcm9QYWQoc2Vjb25kcyl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgcHQtMTIgYWJzb2x1dGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxnOnRleHQtOHhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIFBlcnNldmVyYW5jZSBsYW5kaW5nXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIGxnOnRleHQtOXhsIHctZnVsbCB0ZXh0LWNlbnRlciBweS01IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgPENvdW50ZG93biBkYXRlPXtkYXRlfSByZW5kZXJlcj17cmVuZGVyZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICB7aXNNb2JpbGUgfHwgaXNJUGFkMTNcclxuICAgICAgICAgICAgPyBcIk1vdmUgd2l0aCB5b3VyIGZpbmdlcnMhXCJcclxuICAgICAgICAgICAgOiBcIk1vdmUgd2l0aCB5b3VyIG1vdXNlISBIb2xkIGxlZnQgY2xpY2sgdG8gcm90YXRlLCByaWdodCBjbGljayB0byBtb3ZlLlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBwYi0wXCI+YW50b2luZWcuZGV2L3BlcnNldmVyYW5jZTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJvdmVyIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCB0b3AtMCB6LTAgdy1mdWxsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzZXZlcmFuY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=