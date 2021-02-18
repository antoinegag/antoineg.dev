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
    object: gltf.scene // I'm so sorry
    ,
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
      lineNumber: 51,
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
      lineNumber: 63,
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
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("ambientLight", {
    intensity: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx(Spotlight, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("gridHelper", {
    args: [30, 20, "#a82700", new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xa82700)],
    rotation: new three__WEBPACK_IMPORTED_MODULE_2__["Euler"](0, 0, 0),
    position: [0, -2, -0.6],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(CameraControls, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(RoverModel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zRC9Sb3Zlci9pbmRleC50c3giXSwibmFtZXMiOlsiUm92ZXJNb2RlbCIsInJlZiIsInVzZVJlZiIsImdsdGYiLCJ1c2VMb2FkZXIiLCJyZXF1aXJlIiwiR0xURkxvYWRlciIsInNjZW5lIiwiVEhSRUUiLCJDYW1lcmFDb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJleHRlbmQiLCJ1c2VUaHJlZSIsImNhbWVyYSIsImRvbUVsZW1lbnQiLCJnbCIsImNvbnRyb2xzIiwidXNlRnJhbWUiLCJzdGF0ZSIsImN1cnJlbnQiLCJ1cGRhdGUiLCJTcG90bGlnaHQiLCJzcG90bGlnaHQiLCJSb3ZlciIsImNsYXNzTmFtZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU9BOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCLENBRnVCLENBSXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLG1FQUFTLENBQ3BCQyxtQkFBTyxDQUFDLHNHQUFELENBQVAsQ0FBaURDLFVBRDdCLEVBRXBCLG9CQUZvQixDQUF0QjtBQUlBLFNBQ0U7QUFDRSxPQUFHLEVBQUVMLEdBRFA7QUFFRSxVQUFNLEVBQUdFLElBQUQsQ0FBY0ksS0FGeEIsQ0FFK0I7QUFGL0I7QUFHRSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLEVBQVEsQ0FBUixDQUhaO0FBSUUsWUFBUSxFQUFFLElBQUlDLDJDQUFKLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQsQ0F2QkQ7O0dBQU1SLFU7VUFXU0ksMkQ7OztLQVhUSixVOztBQXlCTixJQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsYUFBYSxHQUFHTCxtQkFBTyxDQUFDLDhHQUFELENBQVAsQ0FDbkJLLGFBREg7O0FBRUFDLGtFQUFNLENBQUM7QUFBRUQsaUJBQWEsRUFBYkE7QUFBRixHQUFELENBQU47O0FBSDJCLGtCQU92QkUsa0VBQVEsRUFQZTtBQUFBLE1BS3pCQyxNQUx5QixhQUt6QkEsTUFMeUI7QUFBQSxNQU1uQkMsVUFObUIsYUFNekJDLEVBTnlCLENBTW5CRCxVQU5tQixFQVMzQjs7O0FBQ0EsTUFBTUUsUUFBUSxHQUFHZCxvREFBTSxFQUF2QjtBQUNBZSxvRUFBUSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXRixRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQVg7QUFBQSxHQUFELENBQVI7QUFDQSxTQUNFO0FBQ0UsT0FBRyxFQUFFSixRQURQO0FBRUUsUUFBSSxFQUFFLENBQUNILE1BQUQsRUFBU0MsVUFBVCxDQUZSO0FBR0UsY0FBVSxFQUFFLElBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBT0QsQ0FuQkQ7O0lBQU1MLGM7VUFPQUcsMEQsRUFJSkssMEQ7OztNQVhJUixjOztBQXFCTixJQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLFNBQVMsR0FBR3BCLG9EQUFNLEVBQXhCLENBRHNCLENBRXRCOztBQUNBLFNBQ0U7QUFDRSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsQ0FEWjtBQUVFLFNBQUssRUFBRSxHQUZUO0FBR0UsWUFBUSxFQUFFLENBSFo7QUFJRSxPQUFHLEVBQUVvQixTQUpQO0FBS0UsWUFBUSxFQUFFLEdBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBU0QsQ0FaRDs7SUFBTUQsUzs7TUFBQUEsUzs7QUFjTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUEwQztBQUFBLE1BQXZDQyxTQUF1QyxRQUF2Q0EsU0FBdUM7QUFDdEQsU0FDRSxNQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFQSxTQUFuQjtBQUE4QixTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQWMsYUFBUyxFQUFFLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsU0FBVCxFQUFvQixJQUFJakIsMkNBQUosQ0FBZ0IsUUFBaEIsQ0FBcEIsQ0FEUjtBQUVFLFlBQVEsRUFBRSxJQUFJQSwyQ0FBSixDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZaO0FBR0UsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxFQUFRLENBQUMsR0FBVCxDQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQVFFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSxNQUFDLDhDQUFEO0FBQVUsWUFBUSxFQUFFLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVEYsQ0FERjtBQWVELENBaEJEOztNQUFNZSxLO0FBa0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzZXZlcmFuY2UuYWY1OTgxOWM5NjNjZTEwNGVhMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUhlbHBlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtbywgU3VzcGVuc2UsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhbnZhcyxcclxuICB1c2VGcmFtZSxcclxuICB1c2VMb2FkZXIsXHJcbiAgdXNlVGhyZWUsXHJcbiAgZXh0ZW5kLFxyXG59IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgU3BvdExpZ2h0SGVscGVyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBSb3Zlck1vZGVsID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIHVzZUZyYW1lKCh7IG1vdXNlIH0pID0+IHtcclxuICAvLyAgIC8vIGlmIChyZWYuY3VycmVudCkge1xyXG4gIC8vICAgLy8gICBjb25zdCB4ID0gKG1vdXNlLnggKiB2aWV3cG9ydC53aWR0aCkgLyAyIC0gMTAwO1xyXG4gIC8vICAgLy8gICByZWYuY3VycmVudC5yb3RhdGlvbi5zZXQoMC4xLCB4LCAwKTtcclxuICAvLyAgIC8vIH1cclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihcclxuICAgIHJlcXVpcmUoXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCIpLkdMVEZMb2FkZXIsXHJcbiAgICBcIi4vUGVyc2V2ZXJhbmNlLmdsYlwiXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHByaW1pdGl2ZVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgb2JqZWN0PXsoZ2x0ZiBhcyBhbnkpLnNjZW5lfSAvLyBJJ20gc28gc29ycnlcclxuICAgICAgcG9zaXRpb249e1swLCAtMiwgMF19XHJcbiAgICAgIHJvdGF0aW9uPXtuZXcgVEhSRUUuRXVsZXIoMCwgMC41LCAwKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENhbWVyYUNvbnRyb2xzID0gKCkgPT4ge1xyXG4gIGNvbnN0IE9yYml0Q29udHJvbHMgPSByZXF1aXJlKFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIilcclxuICAgIC5PcmJpdENvbnRyb2xzO1xyXG4gIGV4dGVuZCh7IE9yYml0Q29udHJvbHMgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgY2FtZXJhLFxyXG4gICAgZ2w6IHsgZG9tRWxlbWVudCB9LFxyXG4gIH0gPSB1c2VUaHJlZSgpO1xyXG5cclxuICAvLyBSZWYgdG8gdGhlIGNvbnRyb2xzLCBzbyB0aGF0IHdlIGNhbiB1cGRhdGUgdGhlbSBvbiBldmVyeSBmcmFtZSB1c2luZyB1c2VGcmFtZVxyXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlUmVmKCk7XHJcbiAgdXNlRnJhbWUoKHN0YXRlKSA9PiBjb250cm9scy5jdXJyZW50LnVwZGF0ZSgpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG9yYml0Q29udHJvbHNcclxuICAgICAgcmVmPXtjb250cm9sc31cclxuICAgICAgYXJncz17W2NhbWVyYSwgZG9tRWxlbWVudF19XHJcbiAgICAgIGVuYWJsZVpvb209e3RydWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTcG90bGlnaHQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3BvdGxpZ2h0ID0gdXNlUmVmKCk7XHJcbiAgLy8gdXNlSGVscGVyKHNwb3RsaWdodCwgU3BvdExpZ2h0SGVscGVyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwb3RMaWdodFxyXG4gICAgICBwb3NpdGlvbj17WzAsIDAsIDEwXX1cclxuICAgICAgYW5nbGU9ezAuM31cclxuICAgICAgcGVudW1icmE9ezF9XHJcbiAgICAgIHJlZj17c3BvdGxpZ2h0fVxyXG4gICAgICBkaXN0YW5jZT17MjAwfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUm92ZXIgPSAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYW52YXMgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IHBvc2l0aW9uOiBcIlwiIH19PlxyXG4gICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC41fSAvPlxyXG4gICAgICA8U3BvdGxpZ2h0IC8+XHJcbiAgICAgIDxncmlkSGVscGVyXHJcbiAgICAgICAgYXJncz17WzMwLCAyMCwgXCIjYTgyNzAwXCIsIG5ldyBUSFJFRS5Db2xvcigweGE4MjcwMCldfVxyXG4gICAgICAgIHJvdGF0aW9uPXtuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCl9XHJcbiAgICAgICAgcG9zaXRpb249e1swLCAtMiwgLTAuNl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDYW1lcmFDb250cm9scyAvPlxyXG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxyXG4gICAgICAgIDxSb3Zlck1vZGVsIC8+XHJcbiAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICA8L0NhbnZhcz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm92ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=