webpackHotUpdate_N_E("pages/perseverance",{

/***/ "./components/3D/Rover/index.tsx":
/*!***************************************!*\
  !*** ./components/3D/Rover/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\3D\\Rover\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var RoverModel = function RoverModel() {
  _s();

  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useThree"])(),
      viewport = _useThree.viewport;

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(function (_ref) {// if (ref.current) {
    //   const x = (mouse.x * viewport.width) / 2 - 100;
    //   ref.current.rotation.set(0.1, x, 0);
    // }

    var mouse = _ref.mouse;
  });
  var gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useLoader"])(__webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js").GLTFLoader, "./Perseverance.glb");
  return __jsx("primitive", {
    ref: ref,
    object: gltf.scene,
    position: [0, -2, 0],
    rotation: new three__WEBPACK_IMPORTED_MODULE_3__["Euler"](0, 0.5, 0),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

_s(RoverModel, "YpJxEaAbquy8ldbhve6s3dbqq3I=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useThree"], react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"], react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useLoader"]];
});

_c = RoverModel;

var CameraControls = function CameraControls() {
  _s2();

  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  var OrbitControls = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js").OrbitControls;

  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["extend"])({
    OrbitControls: OrbitControls
  });

  var _useThree2 = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useThree"])(),
      camera = _useThree2.camera,
      domElement = _useThree2.gl.domElement; // Ref to the controls, so that we can update them on every frame using useFrame


  var controls = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(function (state) {
    return controls.current.update();
  });
  return __jsx("orbitControls", {
    ref: controls,
    args: [camera, domElement],
    enableZoom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  });
};

_s2(CameraControls, "A1TmuuxjpxsoXikKrdEBYzB8ePs=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useThree"], react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"]];
});

_c2 = CameraControls;

var Spotlight = function Spotlight() {
  _s3();

  var spotlight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_0__["useHelper"])(spotlight, three__WEBPACK_IMPORTED_MODULE_3__["SpotLightHelper"]);
  return __jsx("spotLight", {
    position: [0, 0, 10],
    angle: 0.3,
    penumbra: 1,
    ref: spotlight,
    distance: 200,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  });
};

_s3(Spotlight, "LIZSHypdFMSptqEimlmUMzKlpgg=", false, function () {
  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_0__["useHelper"]];
});

_c3 = Spotlight;

var Rover = function Rover(_ref2) {
  var className = _ref2.className;
  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["Canvas"], {
    className: className,
    style: {
      position: ""
    },
    camera: {
      fov: 75,
      near: 0.1,
      far: 1000
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("ambientLight", {
    intensity: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx(Spotlight, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), __jsx("gridHelper", {
    args: [30, 20, "orange", new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xd97706)],
    rotation: new three__WEBPACK_IMPORTED_MODULE_3__["Euler"](0, 0, 0),
    position: [0, -2, -0.6],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }), __jsx("axesHelper", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx(CameraControls, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(RoverModel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })));
};

_c4 = Rover;
/* harmony default export */ __webpack_exports__["default"] = (Rover);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "RoverModel");
$RefreshReg$(_c2, "CameraControls");
$RefreshReg$(_c3, "Spotlight");
$RefreshReg$(_c4, "Rover");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9Sb3Zlci9pbmRleC50c3giXSwibmFtZXMiOlsiUm92ZXJNb2RlbCIsInVzZVRocmVlIiwidmlld3BvcnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VGcmFtZSIsIm1vdXNlIiwiZ2x0ZiIsInVzZUxvYWRlciIsInJlcXVpcmUiLCJHTFRGTG9hZGVyIiwic2NlbmUiLCJUSFJFRSIsIkNhbWVyYUNvbnRyb2xzIiwiT3JiaXRDb250cm9scyIsImV4dGVuZCIsImNhbWVyYSIsImRvbUVsZW1lbnQiLCJnbCIsImNvbnRyb2xzIiwic3RhdGUiLCJjdXJyZW50IiwidXBkYXRlIiwiU3BvdGxpZ2h0Iiwic3BvdGxpZ2h0IiwidXNlSGVscGVyIiwiU3BvdExpZ2h0SGVscGVyIiwiUm92ZXIiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsImZvdiIsIm5lYXIiLCJmYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0ZDLGtFQUFRLEVBRE47QUFBQSxNQUNmQyxRQURlLGFBQ2ZBLFFBRGU7O0FBRXZCLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sRUFBbEI7QUFFQUMsb0VBQVEsQ0FBQyxnQkFBZSxDQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFKc0IsUUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBS3ZCLEdBTE8sQ0FBUjtBQU9BLE1BQU1DLElBQUksR0FBR0MsbUVBQVMsQ0FDcEJDLG1CQUFPLENBQUMsc0dBQUQsQ0FBUCxDQUFpREMsVUFEN0IsRUFFcEIsb0JBRm9CLENBQXRCO0FBSUEsU0FDRTtBQUNFLE9BQUcsRUFBRVAsR0FEUDtBQUVFLFVBQU0sRUFBRUksSUFBSSxDQUFDSSxLQUZmO0FBR0UsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxFQUFRLENB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QWFFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRSxNQUFDLDhDQUFEO0FBQVUsWUFBUSxFQUFFLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZEYsQ0FERjtBQW9CRCxDQXJCRDs7TUFBTWUsSztBQXVCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyc2V2ZXJhbmNlLjc3ZTNjNjQzMTg3ODFiNDgyZjU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VIZWxwZXIgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZU1lbW8sIFN1c3BlbnNlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMsXHJcbiAgdXNlRnJhbWUsXHJcbiAgdXNlTG9hZGVyLFxyXG4gIHVzZVRocmVlLFxyXG4gIGV4dGVuZCxcclxufSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IFNwb3RMaWdodEhlbHBlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgUm92ZXJNb2RlbCA9ICgpID0+IHtcclxuICBjb25zdCB7IHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VGcmFtZSgoeyBtb3VzZSB9KSA9PiB7XHJcbiAgICAvLyBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgIC8vICAgY29uc3QgeCA9IChtb3VzZS54ICogdmlld3BvcnQud2lkdGgpIC8gMiAtIDEwMDtcclxuICAgIC8vICAgcmVmLmN1cnJlbnQucm90YXRpb24uc2V0KDAuMSwgeCwgMCk7XHJcbiAgICAvLyB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdsdGYgPSB1c2VMb2FkZXIoXHJcbiAgICByZXF1aXJlKFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiKS5HTFRGTG9hZGVyLFxyXG4gICAgXCIuL1BlcnNldmVyYW5jZS5nbGJcIlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxwcmltaXRpdmVcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIG9iamVjdD17Z2x0Zi5zY2VuZX1cclxuICAgICAgcG9zaXRpb249e1swLCAtMiwgMF19XHJcbiAgICAgIHJvdGF0aW9uPXtuZXcgVEhSRUUuRXVsZXIoMCwgMC41LCAwKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENhbWVyYUNvbnRyb2xzID0gKCkgPT4ge1xyXG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgVGhyZWUuanMgQ2FtZXJhLCBhbmQgdGhlIGNhbnZhcyBodG1sIGVsZW1lbnQuXHJcbiAgLy8gV2UgbmVlZCB0aGVzZSB0byBzZXR1cCB0aGUgT3JiaXRDb250cm9scyBjbGFzcy5cclxuICAvLyBodHRwczovL3RocmVlanMub3JnL2RvY3MvI2V4YW1wbGVzL2VuL2NvbnRyb2xzL09yYml0Q29udHJvbHNcclxuICBjb25zdCBPcmJpdENvbnRyb2xzID0gcmVxdWlyZShcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCIpXHJcbiAgICAuT3JiaXRDb250cm9scztcclxuICBleHRlbmQoeyBPcmJpdENvbnRyb2xzIH0pO1xyXG4gIGNvbnN0IHtcclxuICAgIGNhbWVyYSxcclxuICAgIGdsOiB7IGRvbUVsZW1lbnQgfSxcclxuICB9ID0gdXNlVGhyZWUoKTtcclxuXHJcbiAgLy8gUmVmIHRvIHRoZSBjb250cm9scywgc28gdGhhdCB3ZSBjYW4gdXBkYXRlIHRoZW0gb24gZXZlcnkgZnJhbWUgdXNpbmcgdXNlRnJhbWVcclxuICBjb25zdCBjb250cm9scyA9IHVzZVJlZigpO1xyXG4gIHVzZUZyYW1lKChzdGF0ZSkgPT4gY29udHJvbHMuY3VycmVudC51cGRhdGUoKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxvcmJpdENvbnRyb2xzXHJcbiAgICAgIHJlZj17Y29udHJvbHN9XHJcbiAgICAgIGFyZ3M9e1tjYW1lcmEsIGRvbUVsZW1lbnRdfVxyXG4gICAgICBlbmFibGVab29tPXt0cnVlfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3BvdGxpZ2h0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNwb3RsaWdodCA9IHVzZVJlZigpO1xyXG4gIHVzZUhlbHBlcihzcG90bGlnaHQsIFNwb3RMaWdodEhlbHBlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcG90TGlnaHRcclxuICAgICAgcG9zaXRpb249e1swLCAwLCAxMF19XHJcbiAgICAgIGFuZ2xlPXswLjN9XHJcbiAgICAgIHBlbnVtYnJhPXsxfVxyXG4gICAgICByZWY9e3Nwb3RsaWdodH1cclxuICAgICAgZGlzdGFuY2U9ezIwMH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJvdmVyID0gKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lOiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FudmFzXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJcIiB9fVxyXG4gICAgICBjYW1lcmE9e3sgZm92OiA3NSwgbmVhcjogMC4xLCBmYXI6IDEwMDAgfX1cclxuICAgID5cclxuICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cclxuICAgICAgPFNwb3RsaWdodCAvPlxyXG4gICAgICA8Z3JpZEhlbHBlclxyXG4gICAgICAgIGFyZ3M9e1szMCwgMjAsIFwib3JhbmdlXCIsIG5ldyBUSFJFRS5Db2xvcigweGQ5NzcwNildfVxyXG4gICAgICAgIHJvdGF0aW9uPXtuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCl9XHJcbiAgICAgICAgcG9zaXRpb249e1swLCAtMiwgLTAuNl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxheGVzSGVscGVyIC8+XHJcbiAgICAgIDxDYW1lcmFDb250cm9scyAvPlxyXG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxyXG4gICAgICAgIDxSb3Zlck1vZGVsIC8+XHJcbiAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICA8L0NhbnZhcz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm92ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=