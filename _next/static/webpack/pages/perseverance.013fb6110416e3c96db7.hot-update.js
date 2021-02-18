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
    args: [30, 20, "orange", new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xa1251b)],
    rotation: new three__WEBPACK_IMPORTED_MODULE_2__["Euler"](0, 0, 0),
    position: [0, -2, -0.6],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx(CameraControls, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(RoverModel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9Sb3Zlci9pbmRleC50c3giXSwibmFtZXMiOlsiUm92ZXJNb2RlbCIsInJlZiIsInVzZVJlZiIsImdsdGYiLCJ1c2VMb2FkZXIiLCJyZXF1aXJlIiwiR0xURkxvYWRlciIsInNjZW5lIiwiVEhSRUUiLCJDYW1lcmFDb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJleHRlbmQiLCJ1c2VUaHJlZSIsImNhbWVyYSIsImRvbUVsZW1lbnQiLCJnbCIsImNvbnRyb2xzIiwidXNlRnJhbWUiLCJzdGF0ZSIsImN1cnJlbnQiLCJ1cGRhdGUiLCJTcG90bGlnaHQiLCJzcG90bGlnaHQiLCJSb3ZlciIsImNsYXNzTmFtZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU9BOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCLENBRnVCLENBSXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLG1FQUFTLENBQ3BCQyxtQkFBTyxDQUFDLHNHQUFELENBQVAsQ0FBaURDLFVBRDdCLEVBRXBCLG9CQUZvQixDQUF0QjtBQUlBLFNBQ0U7QUFDRSxPQUFHLEVBQUVMLEdBRFA7QUFFRSxVQUFNLEVBQUVFLElBQUksQ0FBQ0ksS0FGZjtBQUdFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLENBSFo7QUFJRSxZQUFRLEVBQUUsSUFBSUMsMkNBQUosQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRCxDQXZCRDs7R0FBTVIsVTtVQVdTSSwyRDs7O0tBWFRKLFU7O0FBeUJOLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxhQUFhLEdBQUdMLG1CQUFPLENBQUMsOEdBQUQsQ0FBUCxDQUNuQkssYUFESDs7QUFFQUMsa0VBQU0sQ0FBQztBQUFFRCxpQkFBYSxFQUFiQTtBQUFGLEdBQUQsQ0FBTjs7QUFOMkIsa0JBVXZCRSxrRUFBUSxFQVZlO0FBQUEsTUFRekJDLE1BUnlCLGFBUXpCQSxNQVJ5QjtBQUFBLE1BU25CQyxVQVRtQixhQVN6QkMsRUFUeUIsQ0FTbkJELFVBVG1CLEVBWTNCOzs7QUFDQSxNQUFNRSxRQUFRLEdBQUdkLG9EQUFNLEVBQXZCO0FBQ0FlLG9FQUFRLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsTUFBakIsRUFBWDtBQUFBLEdBQUQsQ0FBUjtBQUNBLFNBQ0U7QUFDRSxPQUFHLEVBQUVKLFFBRFA7QUFFRSxRQUFJLEVBQUUsQ0FBQ0gsTUFBRCxFQUFTQyxVQUFULENBRlI7QUFHRSxjQUFVLEVBQUUsSUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFPRCxDQXRCRDs7SUFBTUwsYztVQVVBRywwRCxFQUlKSywwRDs7O01BZElSLGM7O0FBd0JOLElBQU1ZLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsU0FBUyxHQUFHcEIsb0RBQU0sRUFBeEIsQ0FEc0IsQ0FFdEI7O0FBQ0EsU0FDRTtBQUNFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxDQURaO0FBRUUsU0FBSyxFQUFFLEdBRlQ7QUFHRSxZQUFRLEVBQUUsQ0FIWjtBQUlFLE9BQUcsRUFBRW9CLFNBSlA7QUFLRSxZQUFRLEVBQUUsR0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFTRCxDQVpEOztJQUFNRCxTOztNQUFBQSxTOztBQWNOLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTBDO0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxTQUF1QztBQUN0RCxTQUNFLE1BQUMsd0RBQUQ7QUFBUSxhQUFTLEVBQUVBLFNBQW5CO0FBQThCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBYyxhQUFTLEVBQUUsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQ0UsUUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxRQUFULEVBQW1CLElBQUlqQiwyQ0FBSixDQUFnQixRQUFoQixDQUFuQixDQURSO0FBRUUsWUFBUSxFQUFFLElBQUlBLDJDQUFKLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBRlo7QUFHRSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLEVBQVEsQ0FBQyxHQUFULENBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBUUUsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsOENBQUQ7QUFBVSxZQUFRLEVBQUUsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixDQURGO0FBZUQsQ0FoQkQ7O01BQU1lLEs7QUFrQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNldmVyYW5jZS4wMTNmYjYxMTA0MTZlM2M5NmRiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSGVscGVyIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VNZW1vLCBTdXNwZW5zZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzLFxyXG4gIHVzZUZyYW1lLFxyXG4gIHVzZUxvYWRlcixcclxuICB1c2VUaHJlZSxcclxuICBleHRlbmQsXHJcbn0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBTcG90TGlnaHRIZWxwZXIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IFJvdmVyTW9kZWwgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgeyB2aWV3cG9ydCB9ID0gdXNlVGhyZWUoKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gdXNlRnJhbWUoKHsgbW91c2UgfSkgPT4ge1xyXG4gIC8vICAgLy8gaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgLy8gICAvLyAgIGNvbnN0IHggPSAobW91c2UueCAqIHZpZXdwb3J0LndpZHRoKSAvIDIgLSAxMDA7XHJcbiAgLy8gICAvLyAgIHJlZi5jdXJyZW50LnJvdGF0aW9uLnNldCgwLjEsIHgsIDApO1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdCBnbHRmID0gdXNlTG9hZGVyKFxyXG4gICAgcmVxdWlyZShcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIikuR0xURkxvYWRlcixcclxuICAgIFwiLi9QZXJzZXZlcmFuY2UuZ2xiXCJcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8cHJpbWl0aXZlXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBvYmplY3Q9e2dsdGYuc2NlbmV9XHJcbiAgICAgIHBvc2l0aW9uPXtbMCwgLTIsIDBdfVxyXG4gICAgICByb3RhdGlvbj17bmV3IFRIUkVFLkV1bGVyKDAsIDAuNSwgMCl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDYW1lcmFDb250cm9scyA9ICgpID0+IHtcclxuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIFRocmVlLmpzIENhbWVyYSwgYW5kIHRoZSBjYW52YXMgaHRtbCBlbGVtZW50LlxyXG4gIC8vIFdlIG5lZWQgdGhlc2UgdG8gc2V0dXAgdGhlIE9yYml0Q29udHJvbHMgY2xhc3MuXHJcbiAgLy8gaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNleGFtcGxlcy9lbi9jb250cm9scy9PcmJpdENvbnRyb2xzXHJcbiAgY29uc3QgT3JiaXRDb250cm9scyA9IHJlcXVpcmUoXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiKVxyXG4gICAgLk9yYml0Q29udHJvbHM7XHJcbiAgZXh0ZW5kKHsgT3JiaXRDb250cm9scyB9KTtcclxuICBjb25zdCB7XHJcbiAgICBjYW1lcmEsXHJcbiAgICBnbDogeyBkb21FbGVtZW50IH0sXHJcbiAgfSA9IHVzZVRocmVlKCk7XHJcblxyXG4gIC8vIFJlZiB0byB0aGUgY29udHJvbHMsIHNvIHRoYXQgd2UgY2FuIHVwZGF0ZSB0aGVtIG9uIGV2ZXJ5IGZyYW1lIHVzaW5nIHVzZUZyYW1lXHJcbiAgY29uc3QgY29udHJvbHMgPSB1c2VSZWYoKTtcclxuICB1c2VGcmFtZSgoc3RhdGUpID0+IGNvbnRyb2xzLmN1cnJlbnQudXBkYXRlKCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8b3JiaXRDb250cm9sc1xyXG4gICAgICByZWY9e2NvbnRyb2xzfVxyXG4gICAgICBhcmdzPXtbY2FtZXJhLCBkb21FbGVtZW50XX1cclxuICAgICAgZW5hYmxlWm9vbT17dHJ1ZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNwb3RsaWdodCA9ICgpID0+IHtcclxuICBjb25zdCBzcG90bGlnaHQgPSB1c2VSZWYoKTtcclxuICAvLyB1c2VIZWxwZXIoc3BvdGxpZ2h0LCBTcG90TGlnaHRIZWxwZXIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BvdExpZ2h0XHJcbiAgICAgIHBvc2l0aW9uPXtbMCwgMCwgMTBdfVxyXG4gICAgICBhbmdsZT17MC4zfVxyXG4gICAgICBwZW51bWJyYT17MX1cclxuICAgICAgcmVmPXtzcG90bGlnaHR9XHJcbiAgICAgIGRpc3RhbmNlPXsyMDB9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSb3ZlciA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhbnZhcyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgcG9zaXRpb246IFwiXCIgfX0+XHJcbiAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXswLjV9IC8+XHJcbiAgICAgIDxTcG90bGlnaHQgLz5cclxuICAgICAgPGdyaWRIZWxwZXJcclxuICAgICAgICBhcmdzPXtbMzAsIDIwLCBcIm9yYW5nZVwiLCBuZXcgVEhSRUUuQ29sb3IoMHhhMTI1MWIpXX1cclxuICAgICAgICByb3RhdGlvbj17bmV3IFRIUkVFLkV1bGVyKDAsIDAsIDApfVxyXG4gICAgICAgIHBvc2l0aW9uPXtbMCwgLTIsIC0wLjZdfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2FtZXJhQ29udHJvbHMgLz5cclxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cclxuICAgICAgICA8Um92ZXJNb2RlbCAvPlxyXG4gICAgICA8L1N1c3BlbnNlPlxyXG4gICAgPC9DYW52YXM+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9