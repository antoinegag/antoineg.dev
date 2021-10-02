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
  }, "Instagram")), __jsx("a", {
    href: "https://open.spotify.com/user/antoinem8",
    className: "text-2xl mb-2  bg-gradient-to-br text-white from-green-400 to-green-600 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Spotify"), __jsx("a", {
    href: "https://vsco.co/antoinega/gallery",
    className: "text-2xl mb-2 bg-gradient-to-tl text-white from-black to-gray-600 px-4 py-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "VSCO"));
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


/***/ }),

/***/ "./node_modules/react-reveal/Fade.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Fade.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5]}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0"}return lookup[_]=(0,_globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?_globals.defaults.duration:a,i=o.delay,u=void 0===i?_globals.defaults.delay:i,n=o.count,s=void 0===n?_globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0,_wrap2.default)(d,_,_,r):_}Object.defineProperty(exports, "__esModule", ({value:!0}));var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,distance:_propTypes.string,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Fade.propTypes=propTypes,exports.default=Fade,module.exports=exports.default;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8udHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmV2ZWFsL0ZhZGUuanMiXSwibmFtZXMiOlsiSGVsbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxzQkFBVDtBQUFnQyxhQUFTLEVBQUMsbUJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBS0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FMRixFQVFFLE1BQUMsMERBQUQ7QUFBTSxPQUFHLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHlDQURQO0FBRUUsYUFBUyxFQUFDLDZHQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FSRixFQXNCRTtBQUNFLFFBQUksRUFBQyx5Q0FEUDtBQUVFLGFBQVMsRUFBQyxnR0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLEVBNEJFO0FBQ0UsUUFBSSxFQUFDLG1DQURQO0FBRUUsYUFBUyxFQUFDLDBGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkYsQ0FERjtBQXlDRDtLQTFDdUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlgsbUNBQW1DLDBCQUEwQixXQUFXLHVDQUF1QyxTQUFTLHVGQUF1RixTQUFTLG1CQUFtQix5TUFBeU0sNkNBQTZDLHlDQUF5QyxNQUFNLGdCQUFnQixvQkFBb0IsMENBQTBDLDZCQUE2QiwwQ0FBMEMsMkRBQTJELFdBQVcsK0NBQStDLFFBQVEsNEJBQTRCLFdBQVcsaUJBQWlCLGNBQWMsZ0JBQWdCLGtiQUFrYixtRUFBbUUseUJBQXlCLGlCQUFpQix1Q0FBdUMsOENBQTJDLENBQUMsU0FBUyxFQUFDLENBQUMsZUFBZSxtQkFBTyxDQUFDLHNEQUFZLFdBQVcsbUJBQU8sQ0FBQyx5REFBVyxRQUFRLG1CQUFPLENBQUMsbURBQVEsa0RBQWtELHNVQUFzVSxXQUFXLHlCQUF5QixlQUFlLHFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlbGxvLjBlNDRmMjZjYTM3OTg5MmE1MmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxsbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIGZvbnQtc2VtaWJvbGQgIGJnLWdyYWRpZW50LXRvLXRsIHRvLWdyZWVuLTEwMCBmcm9tLXBlYWNoLTEwMCB2aWEtZ3JlZW4tNTBcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGc6dGV4dC04eGwgdGV4dC02eGwgbWItOCBzdHJva2UteWVsbG93XCI+SEVMTE88L2Rpdj4gKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlYWRzaG90LmpwZ1wiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTMyXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXktMlwiPmFudG9pbmVnLmRldjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8RmFkZSB0b3A+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FudG9pbmUuZ2Fnbi9cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiBiZy1ncmFkaWVudC10by10bCB0ZXh0LXdoaXRlIGZyb20teWVsbG93LTMwMCB2aWEtcmVkLTQwMCB0by1pbmRpZ28tNDAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluc3RhZ3JhbVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgICB7LyogPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvMTMxNjU0MjQ1LWFudG9pbmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIG15LTJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgR29vZHJlYWRzXHJcbiAgICAgIDwvYT4gKi99XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS91c2VyL2FudG9pbmVtOFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiAgYmctZ3JhZGllbnQtdG8tYnIgdGV4dC13aGl0ZSBmcm9tLWdyZWVuLTQwMCB0by1ncmVlbi02MDAgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgID5cclxuICAgICAgICBTcG90aWZ5XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly92c2NvLmNvL2FudG9pbmVnYS9nYWxsZXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yIGJnLWdyYWRpZW50LXRvLXRsIHRleHQtd2hpdGUgZnJvbS1ibGFjayB0by1ncmF5LTYwMCBweC00IHB5LTIgcm91bmRlZC1mdWxsXCJcclxuICAgICAgPlxyXG4gICAgICAgIFZTQ09cclxuICAgICAgPC9hPlxyXG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB1bmRlcmxpbmUgZm9udC1ub3JtYWwgeWVsbG93LXdhdnlcIj5Qb3N0czwvYT5cclxuICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGc6dGV4dC04eGwgdGV4dC02eGwgbWItOCBzdHJva2UteWVsbG93IG10LTZcIj5IRUxMTzwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvKXtyZXR1cm4gbyYmby5fX2VzTW9kdWxlP286e2RlZmF1bHQ6b319ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG8sZSl7dmFyIHI9e307Zm9yKHZhciB0IGluIG8pZS5pbmRleE9mKHQpPj0wfHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyx0KSYmKHJbdF09b1t0XSk7cmV0dXJuIHJ9ZnVuY3Rpb24gbWFrZShvLGUpe3ZhciByPWUuZGlzdGFuY2UsdD1lLmxlZnQscD1lLnJpZ2h0LGE9ZS51cCxsPWUuZG93bixpPWUudG9wLHU9ZS5ib3R0b20sbj1lLmJpZyxzPWUubWlycm9yLGQ9ZS5vcHBvc2l0ZSxfPShyP3IudG9TdHJpbmcoKTowKSsoKHQ/MTowKXwocD8yOjApfChpfHxsPzQ6MCl8KHV8fGE/ODowKXwocz8xNjowKXwoZD8zMjowKXwobz82NDowKXwobj8xMjg6MCkpO2lmKGxvb2t1cC5oYXNPd25Qcm9wZXJ0eShfKSlyZXR1cm4gbG9va3VwW19dO3ZhciBmPXR8fHB8fGF8fGx8fGl8fHUseT12b2lkIDAsYj12b2lkIDA7aWYoZil7aWYoIXMhPSEobyYmZCkpe3ZhciB2PVtwLHQsdSxpLGwsYV07dD12WzBdLHA9dlsxXSxpPXZbMl0sdT12WzNdLGE9dls0XSxsPXZbNV19dmFyIGM9cnx8KG4/XCIyMDAwcHhcIjpcIjEwMCVcIik7eT10P1wiLVwiK2M6cD9jOlwiMFwiLGI9bHx8aT9cIi1cIitjOmF8fHU/YzpcIjBcIn1yZXR1cm4gbG9va3VwW19dPSgwLF9nbG9iYWxzLmFuaW1hdGlvbikoKG8/XCJ0b1wiOlwiZnJvbVwiKStcIiB7b3BhY2l0eTogMDtcIisoZj9cIiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKFwiK3krXCIsIFwiK2IrXCIsIDApO1wiOlwiXCIpK1wifVxcbiAgICAgXCIrKG8/XCJmcm9tXCI6XCJ0b1wiKStcIiB7b3BhY2l0eTogMTt0cmFuc2Zvcm06IG5vbmU7fSBcIiksbG9va3VwW19dfWZ1bmN0aW9uIEZhZGUoKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06X2dsb2JhbHMuZGVmYXVsdHMsZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdLHI9by5jaGlsZHJlbix0PShvLm91dCxvLmZvcmV2ZXIpLHA9by50aW1lb3V0LGE9by5kdXJhdGlvbixsPXZvaWQgMD09PWE/X2dsb2JhbHMuZGVmYXVsdHMuZHVyYXRpb246YSxpPW8uZGVsYXksdT12b2lkIDA9PT1pP19nbG9iYWxzLmRlZmF1bHRzLmRlbGF5Omksbj1vLmNvdW50LHM9dm9pZCAwPT09bj9fZ2xvYmFscy5kZWZhdWx0cy5jb3VudDpuLGQ9X29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG8sW1wiY2hpbGRyZW5cIixcIm91dFwiLFwiZm9yZXZlclwiLFwidGltZW91dFwiLFwiZHVyYXRpb25cIixcImRlbGF5XCIsXCJjb3VudFwiXSksXz17bWFrZTptYWtlLGR1cmF0aW9uOnZvaWQgMD09PXA/bDpwLGRlbGF5OnUsZm9yZXZlcjp0LGNvdW50OnMsc3R5bGU6e2FuaW1hdGlvbkZpbGxNb2RlOlwiYm90aFwifSxyZXZlcnNlOmQubGVmdH07cmV0dXJuIGU/KDAsX3dyYXAyLmRlZmF1bHQpKGQsXyxfLHIpOl99T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIF9wcm9wVHlwZXM9cmVxdWlyZShcInByb3AtdHlwZXNcIiksX2dsb2JhbHM9cmVxdWlyZShcIi4vZ2xvYmFsc1wiKSxfd3JhcD1yZXF1aXJlKFwiLi93cmFwXCIpLF93cmFwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwKSxwcm9wVHlwZXM9e291dDpfcHJvcFR5cGVzLmJvb2wsbGVmdDpfcHJvcFR5cGVzLmJvb2wscmlnaHQ6X3Byb3BUeXBlcy5ib29sLHRvcDpfcHJvcFR5cGVzLmJvb2wsYm90dG9tOl9wcm9wVHlwZXMuYm9vbCxiaWc6X3Byb3BUeXBlcy5ib29sLG1pcnJvcjpfcHJvcFR5cGVzLmJvb2wsb3Bwb3NpdGU6X3Byb3BUeXBlcy5ib29sLGR1cmF0aW9uOl9wcm9wVHlwZXMubnVtYmVyLHRpbWVvdXQ6X3Byb3BUeXBlcy5udW1iZXIsZGlzdGFuY2U6X3Byb3BUeXBlcy5zdHJpbmcsZGVsYXk6X3Byb3BUeXBlcy5udW1iZXIsY291bnQ6X3Byb3BUeXBlcy5udW1iZXIsZm9yZXZlcjpfcHJvcFR5cGVzLmJvb2x9LGxvb2t1cD17fTtGYWRlLnByb3BUeXBlcz1wcm9wVHlwZXMsZXhwb3J0cy5kZWZhdWx0PUZhZGUsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=