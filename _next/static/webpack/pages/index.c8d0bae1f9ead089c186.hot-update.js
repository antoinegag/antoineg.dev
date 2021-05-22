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




var Globe = function Globe(props) {
  _s();

  // This reference will give us direct access to the mesh
  var mesh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Rotate mesh every frame, this is outside of React without overhead

  (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function (state, delta) {
    var cMesh = mesh.current || null;

    if (cMesh) {
      cMesh.rotation.y += 0.005;
      var pos = Math.sin(state.clock.elapsedTime);
      cMesh.position.y = (pos + 1) / 3;
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
    args: [10, 100, 100],
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

_s(Globe, "aboyJ/StuJfvpd16sdbtizo3yWA=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame];
});

_c = Globe;

var Pyramid = function Pyramid(_ref) {
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
  }), __jsx(Globe, {
    position: [0, 0, 0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

_c2 = Pyramid;
/* harmony default export */ __webpack_exports__["default"] = (Pyramid);

var _c, _c2;

$RefreshReg$(_c, "Globe");
$RefreshReg$(_c2, "Pyramid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9HbG9iZS9pbmRleC50c3giXSwibmFtZXMiOlsiR2xvYmUiLCJwcm9wcyIsIm1lc2giLCJ1c2VSZWYiLCJ1c2VGcmFtZSIsInN0YXRlIiwiZGVsdGEiLCJjTWVzaCIsImN1cnJlbnQiLCJyb3RhdGlvbiIsInkiLCJwb3MiLCJNYXRoIiwic2luIiwiY2xvY2siLCJlbGFwc2VkVGltZSIsInBvc2l0aW9uIiwiVEhSRUUiLCJQeXJhbWlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLDZDQUFNLEVBQW5CLENBRnVCLENBSXZCOztBQUNBQyw2REFBUSxDQUFDLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN6QixRQUFNQyxLQUFLLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxJQUFnQixJQUE5Qjs7QUFFQSxRQUFJRCxLQUFKLEVBQVc7QUFDVEEsV0FBSyxDQUFDRSxRQUFOLENBQWVDLENBQWYsSUFBb0IsS0FBcEI7QUFFQSxVQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixLQUFLLENBQUNTLEtBQU4sQ0FBWUMsV0FBckIsQ0FBWjtBQUNBUixXQUFLLENBQUNTLFFBQU4sQ0FBZU4sQ0FBZixHQUFtQixDQUFDQyxHQUFHLEdBQUcsQ0FBUCxJQUFZLENBQS9CO0FBQ0Q7QUFDRixHQVRPLENBQVI7QUFXQSxNQUFNSyxRQUFRLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBakI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtSkFBVWYsS0FBVjtBQUFpQixPQUFHLEVBQUVDLElBQXRCO0FBQTRCLFlBQVEsRUFBRWMsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQWdCLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLFNBQUssRUFBRSxJQUFJQyx3Q0FBSixDQUFnQixRQUFoQixDQURUO0FBRUUsaUJBQWEsRUFBRSxJQUZqQjtBQUdFLHVCQUFtQixFQUFFLENBSHZCO0FBSUUsc0JBQWtCLEVBQUUsQ0FKdEI7QUFLRSxhQUFTLE1BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERjtBQWNELENBaENEOztHQUFNakIsSztVQUtKSSx1RDs7O0tBTElKLEs7O0FBa0NOLElBQU1rQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUEyQztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFDekQsU0FDRSxNQUFDLHFEQUFEO0FBQVEsYUFBUyxFQUFFQSxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBYyxhQUFTLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxLQUFEO0FBQU8sWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FQRDs7TUFBTUQsTztBQVNOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM4ZDBiYWUxZjllYWQwODljMTg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBHbG9iZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIFRoaXMgcmVmZXJlbmNlIHdpbGwgZ2l2ZSB1cyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBtZXNoXHJcbiAgY29uc3QgbWVzaCA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBSb3RhdGUgbWVzaCBldmVyeSBmcmFtZSwgdGhpcyBpcyBvdXRzaWRlIG9mIFJlYWN0IHdpdGhvdXQgb3ZlcmhlYWRcclxuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XHJcbiAgICBjb25zdCBjTWVzaCA9IG1lc2guY3VycmVudCB8fCBudWxsO1xyXG5cclxuICAgIGlmIChjTWVzaCkge1xyXG4gICAgICBjTWVzaC5yb3RhdGlvbi55ICs9IDAuMDA1O1xyXG5cclxuICAgICAgY29uc3QgcG9zID0gTWF0aC5zaW4oc3RhdGUuY2xvY2suZWxhcHNlZFRpbWUpO1xyXG4gICAgICBjTWVzaC5wb3NpdGlvbi55ID0gKHBvcyArIDEpIC8gMztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcG9zaXRpb24gPSBbMCwgMCwgMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXA+XHJcbiAgICAgIDxtZXNoIHsuLi5wcm9wc30gcmVmPXttZXNofSBwb3NpdGlvbj17cG9zaXRpb259PlxyXG4gICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMTAsIDEwMCwgMTAwXX0gLz5cclxuICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWxcclxuICAgICAgICAgIGNvbG9yPXtuZXcgVEhSRUUuQ29sb3IoMHgwNDc4NTcpfVxyXG4gICAgICAgICAgcG9seWdvbk9mZnNldD17dHJ1ZX1cclxuICAgICAgICAgIHBvbHlnb25PZmZzZXRGYWN0b3I9ezF9XHJcbiAgICAgICAgICBwb2x5Z29uT2Zmc2V0VW5pdHM9ezF9XHJcbiAgICAgICAgICB3aXJlZnJhbWVcclxuICAgICAgICAvPlxyXG4gICAgICA8L21lc2g+XHJcbiAgICA8L2dyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQeXJhbWlkID0gKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhbnZhcyBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXsxfSAvPlxyXG4gICAgICA8R2xvYmUgcG9zaXRpb249e1swLCAwLCAwXX0gLz5cclxuICAgIDwvQ2FudmFzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQeXJhbWlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9