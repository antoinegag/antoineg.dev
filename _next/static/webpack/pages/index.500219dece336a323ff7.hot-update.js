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
      cMesh.rotation.y += 0.005;
      var pos = Math.sin(state.clock.elapsedTime);
      cMesh.position.y = (pos + 1) / 3;
    }
  });
  var position = [1, 2, 0];
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
    args: [2.5, 50, 50],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9HbG9iZS9pbmRleC50c3giXSwibmFtZXMiOlsiR2xvYmVNZXNoIiwicHJvcHMiLCJtZXNoIiwidXNlUmVmIiwidXNlRnJhbWUiLCJzdGF0ZSIsImRlbHRhIiwiY01lc2giLCJjdXJyZW50Iiwicm90YXRpb24iLCJ5IiwicG9zIiwiTWF0aCIsInNpbiIsImNsb2NrIiwiZWxhcHNlZFRpbWUiLCJwb3NpdGlvbiIsIlRIUkVFIiwiR2xvYmUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMzQjtBQUNBLE1BQU1DLElBQUksR0FBR0MsNkNBQU0sRUFBbkIsQ0FGMkIsQ0FJM0I7O0FBQ0FDLDZEQUFRLENBQUMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3pCLFFBQU1DLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxPQUFMLElBQWdCLElBQTlCOztBQUVBLFFBQUlELEtBQUosRUFBVztBQUNUQSxXQUFLLENBQUNFLFFBQU4sQ0FBZUMsQ0FBZixJQUFvQixLQUFwQjtBQUVBLFVBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZQyxXQUFyQixDQUFaO0FBQ0FSLFdBQUssQ0FBQ1MsUUFBTixDQUFlTixDQUFmLEdBQW1CLENBQUNDLEdBQUcsR0FBRyxDQUFQLElBQVksQ0FBL0I7QUFDRDtBQUNGLEdBVE8sQ0FBUjtBQVdBLE1BQU1LLFFBQVEsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFqQjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG1KQUFVZixLQUFWO0FBQWlCLE9BQUcsRUFBRUMsSUFBdEI7QUFBNEIsWUFBUSxFQUFFYyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBZ0IsUUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxFQUFWLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsU0FBSyxFQUFFLElBQUlDLHdDQUFKLENBQWdCLFFBQWhCLENBRFQ7QUFFRSxpQkFBYSxFQUFFLElBRmpCO0FBR0UsdUJBQW1CLEVBQUUsQ0FIdkI7QUFJRSxzQkFBa0IsRUFBRSxDQUp0QjtBQUtFLGFBQVMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBY0QsQ0FoQ0Q7O0dBQU1qQixTO1VBS0pJLHVEOzs7S0FMSUosUzs7QUFrQ04sSUFBTWtCLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTJDO0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxTQUF3QztBQUN2RCxTQUNFLE1BQUMscURBQUQ7QUFBUSxhQUFTLEVBQUVBLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFjLGFBQVMsRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFNBQUQ7QUFBVyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQVBEOztNQUFNRCxLO0FBU04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTAwMjE5ZGVjZTMzNmEzMjNmZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IEdsb2JlTWVzaCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIFRoaXMgcmVmZXJlbmNlIHdpbGwgZ2l2ZSB1cyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBtZXNoXHJcbiAgY29uc3QgbWVzaCA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBSb3RhdGUgbWVzaCBldmVyeSBmcmFtZSwgdGhpcyBpcyBvdXRzaWRlIG9mIFJlYWN0IHdpdGhvdXQgb3ZlcmhlYWRcclxuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XHJcbiAgICBjb25zdCBjTWVzaCA9IG1lc2guY3VycmVudCB8fCBudWxsO1xyXG5cclxuICAgIGlmIChjTWVzaCkge1xyXG4gICAgICBjTWVzaC5yb3RhdGlvbi55ICs9IDAuMDA1O1xyXG5cclxuICAgICAgY29uc3QgcG9zID0gTWF0aC5zaW4oc3RhdGUuY2xvY2suZWxhcHNlZFRpbWUpO1xyXG4gICAgICBjTWVzaC5wb3NpdGlvbi55ID0gKHBvcyArIDEpIC8gMztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcG9zaXRpb24gPSBbMSwgMiwgMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXA+XHJcbiAgICAgIDxtZXNoIHsuLi5wcm9wc30gcmVmPXttZXNofSBwb3NpdGlvbj17cG9zaXRpb259PlxyXG4gICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMi41LCA1MCwgNTBdfSAvPlxyXG4gICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbFxyXG4gICAgICAgICAgY29sb3I9e25ldyBUSFJFRS5Db2xvcigweDA0Nzg1Nyl9XHJcbiAgICAgICAgICBwb2x5Z29uT2Zmc2V0PXt0cnVlfVxyXG4gICAgICAgICAgcG9seWdvbk9mZnNldEZhY3Rvcj17MX1cclxuICAgICAgICAgIHBvbHlnb25PZmZzZXRVbml0cz17MX1cclxuICAgICAgICAgIHdpcmVmcmFtZVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbWVzaD5cclxuICAgIDwvZ3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdsb2JlID0gKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhbnZhcyBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXsxfSAvPlxyXG4gICAgICA8R2xvYmVNZXNoIHBvc2l0aW9uPXtbMCwgMCwgMF19IC8+XHJcbiAgICA8L0NhbnZhcz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=