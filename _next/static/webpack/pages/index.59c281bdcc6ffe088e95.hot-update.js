self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/3D/Globe/index.tsx":
/*!***************************************!*\
  !*** ./components/3D/Globe/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_antoine_Development_antoineg_dev_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\3D\\Globe\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);




var GlobeMesh = function GlobeMesh(props) {
  _s();

  // This reference will give us direct access to the mesh
  var mesh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Rotate mesh every frame, this is outside of React without overhead

  (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function (state, delta) {
    var cMesh = mesh.current || null;

    if (cMesh) {
      cMesh.rotation.y += 0.001;
      var pos = Math.sin(state.clock.elapsedTime);
      cMesh.position.y = (pos + 0.0005) / 3;
    }
  });
  var position = [0, 0, 0];
  return __jsx("group", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("mesh", (0,C_Users_antoine_Development_antoineg_dev_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    ref: mesh,
    position: position,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("sphereGeometry", {
    args: [5, 50, 50],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("meshPhongMaterial", {
    color: new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x047857),
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
    wireframe: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })));
};

_s(GlobeMesh, "aboyJ/StuJfvpd16sdbtizo3yWA=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame];
});

_c = GlobeMesh;

var Globe = function Globe(_ref) {
  var className = _ref.className;
  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("ambientLight", {
    intensity: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(GlobeMesh, {
    position: [0, 0, 0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

_c2 = Globe;
/* harmony default export */ __webpack_exports__["default"] = (Globe);

var _c, _c2;

$RefreshReg$(_c, "GlobeMesh");
$RefreshReg$(_c2, "Globe");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9HbG9iZS9pbmRleC50c3giXSwibmFtZXMiOlsiR2xvYmVNZXNoIiwicHJvcHMiLCJtZXNoIiwidXNlUmVmIiwidXNlRnJhbWUiLCJzdGF0ZSIsImRlbHRhIiwiY01lc2giLCJjdXJyZW50Iiwicm90YXRpb24iLCJ5IiwicG9zIiwiTWF0aCIsInNpbiIsImNsb2NrIiwiZWxhcHNlZFRpbWUiLCJwb3NpdGlvbiIsIlRIUkVFIiwiR2xvYmUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMzQjtBQUNBLE1BQU1DLElBQUksR0FBR0MsNkNBQU0sRUFBbkIsQ0FGMkIsQ0FJM0I7O0FBQ0FDLDZEQUFRLENBQUMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3pCLFFBQU1DLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxPQUFMLElBQWdCLElBQTlCOztBQUVBLFFBQUlELEtBQUosRUFBVztBQUNUQSxXQUFLLENBQUNFLFFBQU4sQ0FBZUMsQ0FBZixJQUFvQixLQUFwQjtBQUVBLFVBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZQyxXQUFyQixDQUFaO0FBQ0FSLFdBQUssQ0FBQ1MsUUFBTixDQUFlTixDQUFmLEdBQW1CLENBQUNDLEdBQUcsR0FBRyxNQUFQLElBQWlCLENBQXBDO0FBQ0Q7QUFDRixHQVRPLENBQVI7QUFXQSxNQUFNSyxRQUFRLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBakI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtSkFBVWYsS0FBVjtBQUFpQixPQUFHLEVBQUVDLElBQXRCO0FBQTRCLFlBQVEsRUFBRWMsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQWdCLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLFNBQUssRUFBRSxJQUFJQyx3Q0FBSixDQUFnQixRQUFoQixDQURUO0FBRUUsaUJBQWEsRUFBRSxJQUZqQjtBQUdFLHVCQUFtQixFQUFFLENBSHZCO0FBSUUsc0JBQWtCLEVBQUUsQ0FKdEI7QUFLRSxhQUFTLE1BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERjtBQWNELENBaENEOztHQUFNakIsUztVQUtKSSx1RDs7O0tBTElKLFM7O0FBa0NOLElBQU1rQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUEyQztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFDdkQsU0FDRSxNQUFDLHFEQUFEO0FBQVEsYUFBUyxFQUFFQSxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBYyxhQUFTLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FQRDs7TUFBTUQsSztBQVNOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU5YzI4MWJkY2M2ZmZlMDg4ZTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBHbG9iZU1lc2ggPSAocHJvcHMpID0+IHtcclxuICAvLyBUaGlzIHJlZmVyZW5jZSB3aWxsIGdpdmUgdXMgZGlyZWN0IGFjY2VzcyB0byB0aGUgbWVzaFxyXG4gIGNvbnN0IG1lc2ggPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gUm90YXRlIG1lc2ggZXZlcnkgZnJhbWUsIHRoaXMgaXMgb3V0c2lkZSBvZiBSZWFjdCB3aXRob3V0IG92ZXJoZWFkXHJcbiAgdXNlRnJhbWUoKHN0YXRlLCBkZWx0YSkgPT4ge1xyXG4gICAgY29uc3QgY01lc2ggPSBtZXNoLmN1cnJlbnQgfHwgbnVsbDtcclxuXHJcbiAgICBpZiAoY01lc2gpIHtcclxuICAgICAgY01lc2gucm90YXRpb24ueSArPSAwLjAwMTtcclxuXHJcbiAgICAgIGNvbnN0IHBvcyA9IE1hdGguc2luKHN0YXRlLmNsb2NrLmVsYXBzZWRUaW1lKTtcclxuICAgICAgY01lc2gucG9zaXRpb24ueSA9IChwb3MgKyAwLjAwMDUpIC8gMztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcG9zaXRpb24gPSBbMCwgMCwgMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXA+XHJcbiAgICAgIDxtZXNoIHsuLi5wcm9wc30gcmVmPXttZXNofSBwb3NpdGlvbj17cG9zaXRpb259PlxyXG4gICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbNSwgNTAsIDUwXX0gLz5cclxuICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWxcclxuICAgICAgICAgIGNvbG9yPXtuZXcgVEhSRUUuQ29sb3IoMHgwNDc4NTcpfVxyXG4gICAgICAgICAgcG9seWdvbk9mZnNldD17dHJ1ZX1cclxuICAgICAgICAgIHBvbHlnb25PZmZzZXRGYWN0b3I9ezF9XHJcbiAgICAgICAgICBwb2x5Z29uT2Zmc2V0VW5pdHM9ezF9XHJcbiAgICAgICAgICB3aXJlZnJhbWVcclxuICAgICAgICAvPlxyXG4gICAgICA8L21lc2g+XHJcbiAgICA8L2dyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHbG9iZSA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYW52YXMgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MX0gLz5cclxuICAgICAgPEdsb2JlTWVzaCBwb3NpdGlvbj17WzAsIDAsIDBdfSAvPlxyXG4gICAgPC9DYW52YXM+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9