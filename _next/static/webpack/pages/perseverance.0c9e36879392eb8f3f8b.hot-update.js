webpackHotUpdate_N_E("pages/perseverance",{

/***/ "./components/3D/Rover/index.tsx":
/*!***************************************!*\
  !*** ./components/3D/Rover/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\components\\3D\\Rover\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var RoverModel = function RoverModel() {
  _s();

  // const { viewport } = useThree();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // useFrame(({ mouse }) => {
  //   // if (ref.current) {
  //   //   const x = (mouse.x * viewport.width) / 2 - 100;
  //   //   ref.current.rotation.set(0.1, x, 0);
  //   // }
  // });

  var gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"])(__webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js").GLTFLoader, "./Perseverance.glb");
  return __jsx("primitive", {
    ref: ref,
    object: gltf.scene,
    position: [0, -2, 0],
    rotation: new three__WEBPACK_IMPORTED_MODULE_2__["Euler"](0, 0.5, 0),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

_s(RoverModel, "Hyx6S4Qwy+DYvvFA7KZzCpWQCbo=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"]];
});

_c = RoverModel;

var CameraControls = function CameraControls() {
  _s2();

  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  var OrbitControls = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js").OrbitControls;

  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["extend"])({
    OrbitControls: OrbitControls
  });

  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useThree"])(),
      camera = _useThree.camera,
      domElement = _useThree.gl.domElement; // Ref to the controls, so that we can update them on every frame using useFrame


  var controls = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useFrame"])(function (state) {
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
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useThree"], react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useFrame"]];
});

_c2 = CameraControls;

var Spotlight = function Spotlight() {
  _s3();

  var spotlight = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // useHelper(spotlight, SpotLightHelper);

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

_s3(Spotlight, "8Po4CuTLQcn8XUAkCgSHwwd2cNQ=");

_c3 = Spotlight;

var Rover = function Rover(_ref) {
  var className = _ref.className;
  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["Canvas"], {
    className: className,
    style: {
      position: ""
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
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(Spotlight, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("gridHelper", {
    args: [30, 20, "orange", new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xd97706)],
    rotation: new three__WEBPACK_IMPORTED_MODULE_2__["Euler"](0, 0, 0),
    position: [0, -2, -0.6],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx("axesHelper", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx(CameraControls, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(RoverModel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9Sb3Zlci9pbmRleC50c3giXSwibmFtZXMiOlsiUm92ZXJNb2RlbCIsInJlZiIsInVzZVJlZiIsImdsdGYiLCJ1c2VMb2FkZXIiLCJyZXF1aXJlIiwiR0xURkxvYWRlciIsInNjZW5lIiwiVEhSRUUiLCJDYW1lcmFDb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJleHRlbmQiLCJ1c2VUaHJlZSIsImNhbWVyYSIsImRvbUVsZW1lbnQiLCJnbCIsImNvbnRyb2xzIiwidXNlRnJhbWUiLCJzdGF0ZSIsImN1cnJlbnQiLCJ1cGRhdGUiLCJTcG90bGlnaHQiLCJzcG90bGlnaHQiLCJSb3ZlciIsImNsYXNzTmFtZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU9BOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCLENBRnVCLENBSXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLG1FQUFTLENBQ3BCQyxtQkFBTyxDQUFDLHNHQUFELENBQVAsQ0FBaURDLFVBRDdCLEVBRXBCLG9CQUZvQixDQUF0QjtBQUlBLFNBQ0U7QUFDRSxPQUFHLEVBQUVMLEdBRFA7QUFFRSxVQUFNLEVBQUVFLElBQUksQ0FBQ0ksS0FGZjtBQUdFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLENBSFo7QUFJRSxZQUFRLEVBQUUsSUFBSUMsMkNBQUosQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRCxDQXZCRDs7R0FBTVIsVTtVQVdTSSwyRDs7O0tBWFRKLFU7O0FBeUJOLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxhQUFhLEdBQUdMLG1CQUFPLENBQUMsOEdBQUQsQ0FBUCxDQUNuQkssYUFESDs7QUFFQUMsa0VBQU0sQ0FBQztBQUFFRCxpQkFBYSxFQUFiQTtBQUFGLEdBQUQsQ0FBTjs7QUFOMkIsa0JBVXZCRSxrRUFBUSxFQVZlO0FBQUEsTUFRekJDLE1BUnlCLGFBUXpCQSxNQVJ5QjtBQUFBLE1BU25CQyxVQVRtQixhQVN6QkMsRUFUeUIsQ0FTbkJELFVBVG1CLEVBWTNCOzs7QUFDQSxNQUFNRSxRQUFRLEdBQUdkLG9EQUFNLEVBQXZCO0FBQ0FlLG9FQUFRLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsTUFBakIsRUFBWDtBQUFBLEdBQUQsQ0FBUjtBQUNBLFNBQ0U7QUFDRSxPQUFHLEVBQUVKLFFBRFA7QUFFRSxRQUFJLEVBQUUsQ0FBQ0gsTUFBRCxFQUFTQyxVQUFULENBRlI7QUFHRSxjQUFVLEVBQUUsSUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFPRCxDQXRCRDs7SUFBTUwsYztVQVVBRywwRCxFQUlKSywwRDs7O01BZElSLGM7O0FBd0JOLElBQU1ZLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsU0FBUyxHQUFHcEIsb0RBQU0sRUFBeEIsQ0FEc0IsQ0FFdEI7O0FBQ0EsU0FDRTtBQUNFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxDQURaO0FBRUUsU0FBSyxFQUFFLEdBRlQ7QUFHRSxZQUFRLEVBQUUsQ0FIWjtBQUlFLE9BQUcsRUFBRW9CLFNBSlA7QUFLRSxZQUFRLEVBQUUsR0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFTRCxDQVpEOztJQUFNRCxTOztNQUFBQSxTOztBQWNOLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTBDO0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxTQUF1QztBQUN0RCxTQUNFLE1BQUMsd0RBQUQ7QUFBUSxhQUFTLEVBQUVBLFNBQW5CO0FBQThCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBYyxhQUFTLEVBQUUsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQ0UsUUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxRQUFULEVBQW1CLElBQUlqQiwyQ0FBSixDQUFnQixRQUFoQixDQUFuQixDQURSO0FBRUUsWUFBUSxFQUFFLElBQUlBLDJDQUFKLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBRlo7QUFHRSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLEVBQVEsQ0FBQyxHQUFULENBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsOENBQUQ7QUFBVSxZQUFRLEVBQUUsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixDQURGO0FBZ0JELENBakJEOztNQUFNZSxLO0FBbUJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzZXZlcmFuY2UuMGM5ZTM2ODc5MzkyZWI4ZjNmOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUhlbHBlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtbywgU3VzcGVuc2UsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhbnZhcyxcclxuICB1c2VGcmFtZSxcclxuICB1c2VMb2FkZXIsXHJcbiAgdXNlVGhyZWUsXHJcbiAgZXh0ZW5kLFxyXG59IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgU3BvdExpZ2h0SGVscGVyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBSb3Zlck1vZGVsID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIHVzZUZyYW1lKCh7IG1vdXNlIH0pID0+IHtcclxuICAvLyAgIC8vIGlmIChyZWYuY3VycmVudCkge1xyXG4gIC8vICAgLy8gICBjb25zdCB4ID0gKG1vdXNlLnggKiB2aWV3cG9ydC53aWR0aCkgLyAyIC0gMTAwO1xyXG4gIC8vICAgLy8gICByZWYuY3VycmVudC5yb3RhdGlvbi5zZXQoMC4xLCB4LCAwKTtcclxuICAvLyAgIC8vIH1cclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihcclxuICAgIHJlcXVpcmUoXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCIpLkdMVEZMb2FkZXIsXHJcbiAgICBcIi4vUGVyc2V2ZXJhbmNlLmdsYlwiXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHByaW1pdGl2ZVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgb2JqZWN0PXtnbHRmLnNjZW5lfVxyXG4gICAgICBwb3NpdGlvbj17WzAsIC0yLCAwXX1cclxuICAgICAgcm90YXRpb249e25ldyBUSFJFRS5FdWxlcigwLCAwLjUsIDApfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2FtZXJhQ29udHJvbHMgPSAoKSA9PiB7XHJcbiAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBUaHJlZS5qcyBDYW1lcmEsIGFuZCB0aGUgY2FudmFzIGh0bWwgZWxlbWVudC5cclxuICAvLyBXZSBuZWVkIHRoZXNlIHRvIHNldHVwIHRoZSBPcmJpdENvbnRyb2xzIGNsYXNzLlxyXG4gIC8vIGh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jZXhhbXBsZXMvZW4vY29udHJvbHMvT3JiaXRDb250cm9sc1xyXG4gIGNvbnN0IE9yYml0Q29udHJvbHMgPSByZXF1aXJlKFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIilcclxuICAgIC5PcmJpdENvbnRyb2xzO1xyXG4gIGV4dGVuZCh7IE9yYml0Q29udHJvbHMgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgY2FtZXJhLFxyXG4gICAgZ2w6IHsgZG9tRWxlbWVudCB9LFxyXG4gIH0gPSB1c2VUaHJlZSgpO1xyXG5cclxuICAvLyBSZWYgdG8gdGhlIGNvbnRyb2xzLCBzbyB0aGF0IHdlIGNhbiB1cGRhdGUgdGhlbSBvbiBldmVyeSBmcmFtZSB1c2luZyB1c2VGcmFtZVxyXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlUmVmKCk7XHJcbiAgdXNlRnJhbWUoKHN0YXRlKSA9PiBjb250cm9scy5jdXJyZW50LnVwZGF0ZSgpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG9yYml0Q29udHJvbHNcclxuICAgICAgcmVmPXtjb250cm9sc31cclxuICAgICAgYXJncz17W2NhbWVyYSwgZG9tRWxlbWVudF19XHJcbiAgICAgIGVuYWJsZVpvb209e3RydWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTcG90bGlnaHQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3BvdGxpZ2h0ID0gdXNlUmVmKCk7XHJcbiAgLy8gdXNlSGVscGVyKHNwb3RsaWdodCwgU3BvdExpZ2h0SGVscGVyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwb3RMaWdodFxyXG4gICAgICBwb3NpdGlvbj17WzAsIDAsIDEwXX1cclxuICAgICAgYW5nbGU9ezAuM31cclxuICAgICAgcGVudW1icmE9ezF9XHJcbiAgICAgIHJlZj17c3BvdGxpZ2h0fVxyXG4gICAgICBkaXN0YW5jZT17MjAwfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUm92ZXIgPSAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYW52YXMgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IHBvc2l0aW9uOiBcIlwiIH19PlxyXG4gICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC41fSAvPlxyXG4gICAgICA8U3BvdGxpZ2h0IC8+XHJcbiAgICAgIDxncmlkSGVscGVyXHJcbiAgICAgICAgYXJncz17WzMwLCAyMCwgXCJvcmFuZ2VcIiwgbmV3IFRIUkVFLkNvbG9yKDB4ZDk3NzA2KV19XHJcbiAgICAgICAgcm90YXRpb249e25ldyBUSFJFRS5FdWxlcigwLCAwLCAwKX1cclxuICAgICAgICBwb3NpdGlvbj17WzAsIC0yLCAtMC42XX1cclxuICAgICAgLz5cclxuICAgICAgPGF4ZXNIZWxwZXIgLz5cclxuICAgICAgPENhbWVyYUNvbnRyb2xzIC8+XHJcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgPFJvdmVyTW9kZWwgLz5cclxuICAgICAgPC9TdXNwZW5zZT5cclxuICAgIDwvQ2FudmFzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3ZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==