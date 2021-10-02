self["webpackHotUpdate_N_E"]("pages/hello",{

/***/ "./pages/hello.tsx":
/*!*************************!*\
  !*** ./pages/hello.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Hello; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\hello.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Hello() {
  return __jsx("div", {
    className: "min-h-full flex items-center justify-center flex-col font-semibold  bg-gradient-to-tl to-green-100 from-peach-100 via-green-50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/headshot.jpg",
    className: "rounded-full h-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "text-2xl my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "antoineg.dev")), __jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default()), {
    top: true,
    duration: 750,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/antoine.gagn/",
    className: "text-2xl mb-2 bg-gradient-to-tl text-white from-yellow-300 via-red-400 to-indigo-400 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Instagram")), __jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default()), {
    top: true,
    delay: 250,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://open.spotify.com/user/antoinem8",
    className: "text-2xl mb-2  bg-gradient-to-br text-white from-green-400 to-green-600 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Spotify")), __jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default()), {
    top: true,
    delay: 500,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vsco.co/antoinega/gallery",
    className: "text-2xl mb-2 bg-gradient-to-tl text-white from-black to-gray-600 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "VSCO")));
}
_c = Hello;

var _c;

$RefreshReg$(_c, "Hello");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8udHN4Il0sIm5hbWVzIjpbIkhlbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixTQUNFO0FBQUssYUFBUyxFQUFDLGdJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsYUFBUyxFQUFDLG1CQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQUtFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBTEYsRUFRRSxNQUFDLDBEQUFEO0FBQU0sT0FBRyxNQUFUO0FBQVUsWUFBUSxFQUFFLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx5Q0FEUDtBQUVFLGFBQVMsRUFBQyw2R0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBUkYsRUFzQkUsTUFBQywwREFBRDtBQUFNLE9BQUcsTUFBVDtBQUFVLFNBQUssRUFBRSxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMseUNBRFA7QUFFRSxhQUFTLEVBQUMsZ0dBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBdEJGLEVBOEJFLE1BQUMsMERBQUQ7QUFBTSxPQUFHLE1BQVQ7QUFBVSxTQUFLLEVBQUUsR0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLG1DQURQO0FBRUUsYUFBUyxFQUFDLDBGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQTlCRixDQURGO0FBNkNEO0tBOUN1QkEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxsby43ZjRlZTE4ODQwMDMyMTIwNzgxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVsbG8oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBmb250LXNlbWlib2xkICBiZy1ncmFkaWVudC10by10bCB0by1ncmVlbi0xMDAgZnJvbS1wZWFjaC0xMDAgdmlhLWdyZWVuLTUwXCI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxnOnRleHQtOHhsIHRleHQtNnhsIG1iLTggc3Ryb2tlLXllbGxvd1wiPkhFTExPPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZWFkc2hvdC5qcGdcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgaC0zMlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtMnhsIG15LTJcIj5hbnRvaW5lZy5kZXY8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPEZhZGUgdG9wIGR1cmF0aW9uPXs3NTB9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hbnRvaW5lLmdhZ24vXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTIgYmctZ3JhZGllbnQtdG8tdGwgdGV4dC13aGl0ZSBmcm9tLXllbGxvdy0zMDAgdmlhLXJlZC00MDAgdG8taW5kaWdvLTQwMCBweC00IHB5LTIgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgICAgey8qIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vdXNlci9zaG93LzEzMTY1NDI0NS1hbnRvaW5lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteS0yXCJcclxuICAgICAgPlxyXG4gICAgICAgIEdvb2RyZWFkc1xyXG4gICAgICA8L2E+ICovfVxyXG4gICAgICA8RmFkZSB0b3AgZGVsYXk9ezI1MH0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdXNlci9hbnRvaW5lbThcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiAgYmctZ3JhZGllbnQtdG8tYnIgdGV4dC13aGl0ZSBmcm9tLWdyZWVuLTQwMCB0by1ncmVlbi02MDAgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3BvdGlmeVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgICA8RmFkZSB0b3AgZGVsYXk9ezUwMH0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZzY28uY28vYW50b2luZWdhL2dhbGxlcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiBiZy1ncmFkaWVudC10by10bCB0ZXh0LXdoaXRlIGZyb20tYmxhY2sgdG8tZ3JheS02MDAgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVlNDT1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB1bmRlcmxpbmUgZm9udC1ub3JtYWwgeWVsbG93LXdhdnlcIj5Qb3N0czwvYT5cclxuICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGc6dGV4dC04eGwgdGV4dC02eGwgbWItOCBzdHJva2UteWVsbG93IG10LTZcIj5IRUxMTzwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==