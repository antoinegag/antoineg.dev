self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/About */ "./components/Home/About/index.tsx");
/* harmony import */ var _components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/Contact */ "./components/Home/Contact/index.tsx");
/* harmony import */ var _components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/Experience */ "./components/Home/Experience/index.tsx");
/* harmony import */ var _components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Experience/Current */ "./components/Home/Experience/Current.tsx");
/* harmony import */ var _components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Hero */ "./components/Home/Hero/index.tsx");
/* harmony import */ var react_page_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-page-scroller */ "./node_modules/react-page-scroller/es/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









var __N_SSG = true;
function index(_ref) {
  var projects = _ref.projects;
  var shouldSmoothScroll = !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile || react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isIPad13;
  var Scroller = shouldSmoothScroll ? react_page_scroller__WEBPACK_IMPORTED_MODULE_7__.default : (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: "ANTOINEG.DEV",
    description: "Curiosity driven maker, Web Developer, tech enthusiast",
    canonical: "https://antoineg.dev/",
    openGraph: {
      url: "https://antoineg.dev",
      title: "ANTOINEG.DEV",
      description: "Curiosity driven maker, Web Developer, tech enthusiast",
      images: [{
        url: "https://antoineg.dev/images/action.jpg",
        width: 585,
        height: 585,
        alt: "Portrait"
      }]
    },
    twitter: {
      handle: "@antoineg_dev",
      site: "https://antoineg.dev",
      cardType: "summary_large_image"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "no-scrollbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(Scroller // pageOnChange={this.handlePageChange}
  // onBeforePageScroll={this.handleBeforePageChange}
  // customPageNumber={this.state.currentPage}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Experience_Current__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Experience__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }))));
}

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

/***/ "./node_modules/react-device-detect/main.js":
/*!**************************************************!*\
  !*** ./node_modules/react-device-detect/main.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);

var UAParser = __webpack_require__(/*! ua-parser-js/dist/ua-parser.min */ "./node_modules/ua-parser-js/dist/ua-parser.min.js");

var UA = new UAParser();
var browser = UA.getBrowser();
var cpu = UA.getCPU();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  BROWSER: undefined
};
var BROWSER_TYPES = {
  CHROME: 'Chrome',
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: 'IE',
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium",
  MIUI: "MIUI Browser"
};
var OS_TYPES = {
  IOS: 'iOS',
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: 'Windows',
  MAC_OS: 'Mac OS'
};
var initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkType = function checkType(type) {
  switch (type) {
    case DEVICE_TYPES.MOBILE:
      return {
        isMobile: true
      };

    case DEVICE_TYPES.TABLET:
      return {
        isTablet: true
      };

    case DEVICE_TYPES.SMART_TV:
      return {
        isSmartTV: true
      };

    case DEVICE_TYPES.CONSOLE:
      return {
        isConsole: true
      };

    case DEVICE_TYPES.WEARABLE:
      return {
        isWearable: true
      };

    case DEVICE_TYPES.BROWSER:
      return {
        isBrowser: true
      };

    default:
      return initialData;
  }
};
var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
}

var isMobileType = function isMobileType() {
  return device.type === DEVICE_TYPES.MOBILE;
};

var isTabletType = function isTabletType() {
  return device.type === DEVICE_TYPES.TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case DEVICE_TYPES.MOBILE:
    case DEVICE_TYPES.TABLET:
      return true;

    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === DEVICE_TYPES.SMART_TV;
};

var isBrowserType = function isBrowserType() {
  return device.type === DEVICE_TYPES.BROWSER;
};

var isWearableType = function isWearableType() {
  return device.type === DEVICE_TYPES.WEARABLE;
};

var isConsoleType = function isConsoleType() {
  return device.type === DEVICE_TYPES.CONSOLE;
};

var isAndroidType = function isAndroidType() {
  return os.name === OS_TYPES.ANDROID;
};

var isWindowsType = function isWindowsType() {
  return os.name === OS_TYPES.WINDOWS;
};

var isMacOsType = function isMacOsType() {
  return os.name === OS_TYPES.MAC_OS;
};

var isWinPhoneType = function isWinPhoneType() {
  return os.name === OS_TYPES.WINDOWS_PHONE;
};

var isIOSType = function isIOSType() {
  return os.name === OS_TYPES.IOS;
};

var isChromeType = function isChromeType() {
  return browser.name === BROWSER_TYPES.CHROME;
};

var isFirefoxType = function isFirefoxType() {
  return browser.name === BROWSER_TYPES.FIREFOX;
};

var isChromiumType = function isChromiumType() {
  return browser.name === BROWSER_TYPES.CHROMIUM;
};

var isEdgeType = function isEdgeType() {
  return browser.name === BROWSER_TYPES.EDGE;
};

var isYandexType = function isYandexType() {
  return browser.name === BROWSER_TYPES.YANDEX;
};

var isSafariType = function isSafariType() {
  return browser.name === BROWSER_TYPES.SAFARI || browser.name === BROWSER_TYPES.MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === BROWSER_TYPES.MOBILE_SAFARI;
};

var isOperaType = function isOperaType() {
  return browser.name === BROWSER_TYPES.OPERA;
};

var isIEType = function isIEType() {
  return browser.name === BROWSER_TYPES.INTERNET_EXPLORER || browser.name === BROWSER_TYPES.IE;
};

var isMIUIType = function isMIUIType() {
  return browser.name === BROWSER_TYPES.MIUI;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};

var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};

var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return setDefaults(browser.version);
};

var getBrowserVersion = function getBrowserVersion() {
  return setDefaults(browser.major);
};

var getOsVersion = function getOsVersion() {
  return setDefaults(os.version);
};

var getOsName = function getOsName() {
  return setDefaults(os.name);
};

var getBrowserName = function getBrowserName() {
  return setDefaults(browser.name);
};

var getMobileVendor = function getMobileVendor() {
  return setDefaults(device.vendor);
};

var getMobileModel = function getMobileModel() {
  return setDefaults(device.model);
};

var getEngineName = function getEngineName() {
  return setDefaults(engine.name);
};

var getEngineVersion = function getEngineVersion() {
  return setDefaults(engine.version);
};

var getUseragent = function getUseragent() {
  return setDefaults(ua);
};

var getDeviceType = function getDeviceType() {
  return setDefaults(device.type, 'browser');
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType() && !isEdgeChromiumType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();
var isMIUI = isMIUIType();

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      viewClassName = _ref.viewClassName,
      style = _ref.style;
  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      viewClassName = _ref2.viewClassName,
      style = _ref2.style;
  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      viewClassName = _ref3.viewClassName,
      style = _ref3.style;
  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      viewClassName = _ref4.viewClassName,
      style = _ref4.style;
  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      viewClassName = _ref5.viewClassName,
      style = _ref5.style;
  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      viewClassName = _ref6.viewClassName,
      style = _ref6.style;
  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      viewClassName = _ref7.viewClassName,
      style = _ref7.style;
  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style;
  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      viewClassName = _ref9.viewClassName,
      style = _ref9.style;
  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      viewClassName = _ref10.viewClassName,
      style = _ref10.style;
  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      viewClassName = _ref11.viewClassName,
      style = _ref11.style;
  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition;
  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};

function withOrientationChange(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.isEventListenerAdded = false;
        _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
        _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
        _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
        _this.state = {
          isLandscape: false,
          isPortrait: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: "handleOrientationChange",
        value: function handleOrientationChange() {
          if (!this.isEventListenerAdded) {
            this.isEventListenerAdded = true;
          }

          var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
          this.setState({
            isPortrait: orientation === 0,
            isLandscape: orientation === 90
          });
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange() {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function onPageLoad() {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
            if (!this.isEventListenerAdded) {
              this.handleOrientationChange();
              window.addEventListener("load", this.onPageLoad, false);
            } else {
              window.removeEventListener("load", this.onPageLoad, false);
            }

            window.addEventListener("resize", this.onOrientationChange, false);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.onOrientationChange, false);
        }
      }, {
        key: "render",
        value: function render() {
          return React__default.createElement(WrappedComponent, _extends({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }]);

      return _class;
    }(React__default.Component)
  );
}

exports.AndroidView = AndroidView;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.withOrientationChange = withOrientationChange;


/***/ }),

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/ua-parser-js/dist/ua-parser.min.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.28",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){return typeof str1===STR_TYPE?str2.toLowerCase().indexOf(str1.toLowerCase())!==-1:false},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str,len){str=str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/\s]+([\w\.]+)/i],[VERSION,[NAME,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[VERSION,[NAME,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure Browser"],VERSION],[/focus\/([\w\.]+)/i],[VERSION,[NAME,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[VERSION,[NAME,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Browser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[NAME],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+)\s.*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,"Chrome WebView"],VERSION],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\s\w]*);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/droid.+;\s(pixel\sc)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,"Sony"],[TYPE,TABLET]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[MODEL,"Fire Phone"],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((playbook);[\w\s\),;-]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[MODEL,[VENDOR,"ASUS"],[TYPE,TABLET]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[MODEL,[VENDOR,"ASUS"],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(surface\sduo)\s/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/\s(u304aa)\sbuild/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/[;\/]\s?(rct\w+)\sbuild/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/;\s(nx\d{3}j)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/[;\/]\s?(zur\d{3})\sbuild/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/;\s(ph-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/[;\/]\s?tu_(1491)\sbuild/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w\s]+)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint)\s(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[345portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[VENDOR,"LG"],[TYPE,SMARTTV]],[/(apple)\s?tv/i],[VENDOR,[MODEL,"Apple TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/droid.+aft([\w])(\sbuild\/|\))/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[TYPE,SMARTTV]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,WEARABLE]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]],[/(phone)/i],[[TYPE,MOBILE]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[NAME,VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua==="object"){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!=="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={name:undefined,version:undefined};mapper.rgx.call(_browser,_ua,_rgxmap.browser);_browser.major=util.major(_browser.version);return _browser};this.getCPU=function(){var _cpu={architecture:undefined};mapper.rgx.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={name:undefined,version:undefined};mapper.rgx.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={name:undefined,version:undefined};mapper.rgx.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?util.trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if("object"!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}}var $=typeof window!=="undefined"&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZGV2aWNlLWRldGVjdC9tYWluLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdWEtcGFyc2VyLWpzL2Rpc3QvdWEtcGFyc2VyLm1pbi5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInByb2plY3RzIiwic2hvdWxkU21vb3RoU2Nyb2xsIiwiaXNNb2JpbGUiLCJpc0lQYWQxMyIsIlNjcm9sbGVyIiwiUmVhY3RQYWdlU2Nyb2xsZXIiLCJSZWFjdCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQU1lLFNBQVNBLEtBQVQsT0FBb0M7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQ2pELE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLHlEQUFELElBQWFDLHlEQUF4QztBQUNBLE1BQU1DLFFBQVEsR0FBR0gsa0JBQWtCLEdBQUdJLHdEQUFILEdBQXVCQyx1REFBMUQ7QUFFQSxTQUNFLHFFQUNFLE1BQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGVBQVcsRUFBQyx3REFGZDtBQUdFLGFBQVMsRUFBQyx1QkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsc0JBREk7QUFFVEMsV0FBSyxFQUFFLGNBRkU7QUFHVEMsaUJBQVcsRUFBRSx3REFISjtBQUlUQyxZQUFNLEVBQUUsQ0FDTjtBQUNFSCxXQUFHLEVBQUUsd0NBRFA7QUFFRUksYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QThCLHdCQUF3QiwyQkFBMkIsd0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDc4YzVkNmFjNTg4ZjI4YTg1ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0Fib3V0XCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdFwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IEN1cnJlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9FeHBlcmllbmNlL0N1cnJlbnRcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9IZXJvXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2plY3RzXCI7XHJcbmltcG9ydCBSZWFjdFBhZ2VTY3JvbGxlciBmcm9tIFwicmVhY3QtcGFnZS1zY3JvbGxlclwiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0c0RhdGEsIFByb2plY3REYXRhIH0gZnJvbSBcIi4uL2xpYi9tYXJrZG93blBvc3RzXCI7XHJcbmltcG9ydCB7IGlzSVBhZDEzLCBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0RGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHByb2plY3RzIH06IFByb3BzKSB7XHJcbiAgY29uc3Qgc2hvdWxkU21vb3RoU2Nyb2xsID0gIWlzTW9iaWxlIHx8IGlzSVBhZDEzO1xyXG4gIGNvbnN0IFNjcm9sbGVyID0gc2hvdWxkU21vb3RoU2Nyb2xsID8gUmVhY3RQYWdlU2Nyb2xsZXIgOiBSZWFjdC5GcmFnbWVudDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9XCJBTlRPSU5FRy5ERVZcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VyaW9zaXR5IGRyaXZlbiBtYWtlciwgV2ViIERldmVsb3BlciwgdGVjaCBlbnRodXNpYXN0XCJcclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL2FudG9pbmVnLmRldi9cIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJBTlRPSU5FRy5ERVZcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cmlvc2l0eSBkcml2ZW4gbWFrZXIsIFdlYiBEZXZlbG9wZXIsIHRlY2ggZW50aHVzaWFzdFwiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hbnRvaW5lZy5kZXYvaW1hZ2VzL2FjdGlvbi5qcGdcIixcclxuICAgICAgICAgICAgICB3aWR0aDogNTg1LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNTg1LFxyXG4gICAgICAgICAgICAgIGFsdDogXCJQb3J0cmFpdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogXCJAYW50b2luZWdfZGV2XCIsXHJcbiAgICAgICAgICBzaXRlOiBcImh0dHBzOi8vYW50b2luZWcuZGV2XCIsXHJcbiAgICAgICAgICBjYXJkVHlwZTogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1zY3JvbGxiYXJcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1wZWFjaC01MDAgcC01IHRleHQtcGVhY2gtNTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIPCfkYsgSGV5IHRoZXJlISBUaGlzIHNpdGUgaXMgaW4gbWFpbnRlbmFuY2UgbW9kZSwgbGltaXRlZCBjb250ZW50IGlzXHJcbiAgICAgICAgICBhdmFpbGFibGUgZm9yIG5vdyDinIzvuI9cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIC8vVE9ETzogYWxsb3cgdGhpcyB0byBiZSBkaXNhYmxlZCAgKi99XHJcbiAgICAgICAgPFNjcm9sbGVyXHJcbiAgICAgICAgLy8gcGFnZU9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgLy8gb25CZWZvcmVQYWdlU2Nyb2xsPXt0aGlzLmhhbmRsZUJlZm9yZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgLy8gY3VzdG9tUGFnZU51bWJlcj17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICA8Q3VycmVudCAvPlxyXG4gICAgICAgICAgPEV4cGVyaWVuY2UgLz5cclxuICAgICAgICAgIHsvKiA8UHJvamVjdHMgcHJvamVjdHM9e3Byb2plY3RzfSAvPiAqL31cclxuICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgPC9TY3JvbGxlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHNEYXRhKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2plY3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcblxudmFyIFVBUGFyc2VyID0gcmVxdWlyZSgndWEtcGFyc2VyLWpzL2Rpc3QvdWEtcGFyc2VyLm1pbicpO1xuXG52YXIgVUEgPSBuZXcgVUFQYXJzZXIoKTtcbnZhciBicm93c2VyID0gVUEuZ2V0QnJvd3NlcigpO1xudmFyIGNwdSA9IFVBLmdldENQVSgpO1xudmFyIGRldmljZSA9IFVBLmdldERldmljZSgpO1xudmFyIGVuZ2luZSA9IFVBLmdldEVuZ2luZSgpO1xudmFyIG9zID0gVUEuZ2V0T1MoKTtcbnZhciB1YSA9IFVBLmdldFVBKCk7XG5cbnZhciBzZXREZWZhdWx0cyA9IGZ1bmN0aW9uIHNldERlZmF1bHRzKHApIHtcbiAgdmFyIGQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdub25lJztcbiAgcmV0dXJuIHAgPyBwIDogZDtcbn07XG52YXIgZ2V0TmF2aWdhdG9ySW5zdGFuY2UgPSBmdW5jdGlvbiBnZXROYXZpZ2F0b3JJbnN0YW5jZSgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IgfHwgbmF2aWdhdG9yKSB7XG4gICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvciB8fCBuYXZpZ2F0b3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc0lPUzEzQ2hlY2sgPSBmdW5jdGlvbiBpc0lPUzEzQ2hlY2sodHlwZSkge1xuICB2YXIgbmF2ID0gZ2V0TmF2aWdhdG9ySW5zdGFuY2UoKTtcbiAgcmV0dXJuIG5hdiAmJiBuYXYucGxhdGZvcm0gJiYgKG5hdi5wbGF0Zm9ybS5pbmRleE9mKHR5cGUpICE9PSAtMSB8fCBuYXYucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2Lm1heFRvdWNoUG9pbnRzID4gMSAmJiAhd2luZG93Lk1TU3RyZWFtKTtcbn07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbnZhciBERVZJQ0VfVFlQRVMgPSB7XG4gIE1PQklMRTogJ21vYmlsZScsXG4gIFRBQkxFVDogJ3RhYmxldCcsXG4gIFNNQVJUX1RWOiAnc21hcnR0dicsXG4gIENPTlNPTEU6ICdjb25zb2xlJyxcbiAgV0VBUkFCTEU6ICd3ZWFyYWJsZScsXG4gIEJST1dTRVI6IHVuZGVmaW5lZFxufTtcbnZhciBCUk9XU0VSX1RZUEVTID0ge1xuICBDSFJPTUU6ICdDaHJvbWUnLFxuICBGSVJFRk9YOiBcIkZpcmVmb3hcIixcbiAgT1BFUkE6IFwiT3BlcmFcIixcbiAgWUFOREVYOiBcIllhbmRleFwiLFxuICBTQUZBUkk6IFwiU2FmYXJpXCIsXG4gIElOVEVSTkVUX0VYUExPUkVSOiBcIkludGVybmV0IEV4cGxvcmVyXCIsXG4gIEVER0U6IFwiRWRnZVwiLFxuICBDSFJPTUlVTTogXCJDaHJvbWl1bVwiLFxuICBJRTogJ0lFJyxcbiAgTU9CSUxFX1NBRkFSSTogXCJNb2JpbGUgU2FmYXJpXCIsXG4gIEVER0VfQ0hST01JVU06IFwiRWRnZSBDaHJvbWl1bVwiLFxuICBNSVVJOiBcIk1JVUkgQnJvd3NlclwiXG59O1xudmFyIE9TX1RZUEVTID0ge1xuICBJT1M6ICdpT1MnLFxuICBBTkRST0lEOiBcIkFuZHJvaWRcIixcbiAgV0lORE9XU19QSE9ORTogXCJXaW5kb3dzIFBob25lXCIsXG4gIFdJTkRPV1M6ICdXaW5kb3dzJyxcbiAgTUFDX09TOiAnTWFjIE9TJ1xufTtcbnZhciBpbml0aWFsRGF0YSA9IHtcbiAgaXNNb2JpbGU6IGZhbHNlLFxuICBpc1RhYmxldDogZmFsc2UsXG4gIGlzQnJvd3NlcjogZmFsc2UsXG4gIGlzU21hcnRUVjogZmFsc2UsXG4gIGlzQ29uc29sZTogZmFsc2UsXG4gIGlzV2VhcmFibGU6IGZhbHNlXG59O1xudmFyIGNoZWNrVHlwZSA9IGZ1bmN0aW9uIGNoZWNrVHlwZSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgREVWSUNFX1RZUEVTLk1PQklMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTW9iaWxlOiB0cnVlXG4gICAgICB9O1xuXG4gICAgY2FzZSBERVZJQ0VfVFlQRVMuVEFCTEVUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNUYWJsZXQ6IHRydWVcbiAgICAgIH07XG5cbiAgICBjYXNlIERFVklDRV9UWVBFUy5TTUFSVF9UVjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU21hcnRUVjogdHJ1ZVxuICAgICAgfTtcblxuICAgIGNhc2UgREVWSUNFX1RZUEVTLkNPTlNPTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0NvbnNvbGU6IHRydWVcbiAgICAgIH07XG5cbiAgICBjYXNlIERFVklDRV9UWVBFUy5XRUFSQUJMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzV2VhcmFibGU6IHRydWVcbiAgICAgIH07XG5cbiAgICBjYXNlIERFVklDRV9UWVBFUy5CUk9XU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNCcm93c2VyOiB0cnVlXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpbml0aWFsRGF0YTtcbiAgfVxufTtcbnZhciBicm9QYXlsb2FkID0gZnVuY3Rpb24gYnJvUGF5bG9hZChpc0Jyb3dzZXIsIGJyb3dzZXIsIGVuZ2luZSwgb3MsIHVhKSB7XG4gIHJldHVybiB7XG4gICAgaXNCcm93c2VyOiBpc0Jyb3dzZXIsXG4gICAgYnJvd3Nlck1ham9yVmVyc2lvbjogc2V0RGVmYXVsdHMoYnJvd3Nlci5tYWpvciksXG4gICAgYnJvd3NlckZ1bGxWZXJzaW9uOiBzZXREZWZhdWx0cyhicm93c2VyLnZlcnNpb24pLFxuICAgIGJyb3dzZXJOYW1lOiBzZXREZWZhdWx0cyhicm93c2VyLm5hbWUpLFxuICAgIGVuZ2luZU5hbWU6IHNldERlZmF1bHRzKGVuZ2luZS5uYW1lKSxcbiAgICBlbmdpbmVWZXJzaW9uOiBzZXREZWZhdWx0cyhlbmdpbmUudmVyc2lvbiksXG4gICAgb3NOYW1lOiBzZXREZWZhdWx0cyhvcy5uYW1lKSxcbiAgICBvc1ZlcnNpb246IHNldERlZmF1bHRzKG9zLnZlcnNpb24pLFxuICAgIHVzZXJBZ2VudDogc2V0RGVmYXVsdHModWEpXG4gIH07XG59O1xudmFyIG1vYmlsZVBheWxvYWQgPSBmdW5jdGlvbiBtb2JpbGVQYXlsb2FkKHR5cGUsIGRldmljZSwgb3MsIHVhKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgdHlwZSwge1xuICAgIHZlbmRvcjogc2V0RGVmYXVsdHMoZGV2aWNlLnZlbmRvciksXG4gICAgbW9kZWw6IHNldERlZmF1bHRzKGRldmljZS5tb2RlbCksXG4gICAgb3M6IHNldERlZmF1bHRzKG9zLm5hbWUpLFxuICAgIG9zVmVyc2lvbjogc2V0RGVmYXVsdHMob3MudmVyc2lvbiksXG4gICAgdWE6IHNldERlZmF1bHRzKHVhKVxuICB9KTtcbn07XG52YXIgc3R2UGF5bG9hZCA9IGZ1bmN0aW9uIHN0dlBheWxvYWQoaXNTbWFydFRWLCBlbmdpbmUsIG9zLCB1YSkge1xuICByZXR1cm4ge1xuICAgIGlzU21hcnRUVjogaXNTbWFydFRWLFxuICAgIGVuZ2luZU5hbWU6IHNldERlZmF1bHRzKGVuZ2luZS5uYW1lKSxcbiAgICBlbmdpbmVWZXJzaW9uOiBzZXREZWZhdWx0cyhlbmdpbmUudmVyc2lvbiksXG4gICAgb3NOYW1lOiBzZXREZWZhdWx0cyhvcy5uYW1lKSxcbiAgICBvc1ZlcnNpb246IHNldERlZmF1bHRzKG9zLnZlcnNpb24pLFxuICAgIHVzZXJBZ2VudDogc2V0RGVmYXVsdHModWEpXG4gIH07XG59O1xudmFyIGNvbnNvbGVQYXlsb2FkID0gZnVuY3Rpb24gY29uc29sZVBheWxvYWQoaXNDb25zb2xlLCBlbmdpbmUsIG9zLCB1YSkge1xuICByZXR1cm4ge1xuICAgIGlzQ29uc29sZTogaXNDb25zb2xlLFxuICAgIGVuZ2luZU5hbWU6IHNldERlZmF1bHRzKGVuZ2luZS5uYW1lKSxcbiAgICBlbmdpbmVWZXJzaW9uOiBzZXREZWZhdWx0cyhlbmdpbmUudmVyc2lvbiksXG4gICAgb3NOYW1lOiBzZXREZWZhdWx0cyhvcy5uYW1lKSxcbiAgICBvc1ZlcnNpb246IHNldERlZmF1bHRzKG9zLnZlcnNpb24pLFxuICAgIHVzZXJBZ2VudDogc2V0RGVmYXVsdHModWEpXG4gIH07XG59O1xudmFyIHdlYXJQYXlsb2FkID0gZnVuY3Rpb24gd2VhclBheWxvYWQoaXNXZWFyYWJsZSwgZW5naW5lLCBvcywgdWEpIHtcbiAgcmV0dXJuIHtcbiAgICBpc1dlYXJhYmxlOiBpc1dlYXJhYmxlLFxuICAgIGVuZ2luZU5hbWU6IHNldERlZmF1bHRzKGVuZ2luZS5uYW1lKSxcbiAgICBlbmdpbmVWZXJzaW9uOiBzZXREZWZhdWx0cyhlbmdpbmUudmVyc2lvbiksXG4gICAgb3NOYW1lOiBzZXREZWZhdWx0cyhvcy5uYW1lKSxcbiAgICBvc1ZlcnNpb246IHNldERlZmF1bHRzKG9zLnZlcnNpb24pLFxuICAgIHVzZXJBZ2VudDogc2V0RGVmYXVsdHModWEpXG4gIH07XG59O1xuXG52YXIgdHlwZSA9IGNoZWNrVHlwZShkZXZpY2UudHlwZSk7XG5cbmZ1bmN0aW9uIGRldmljZURldGVjdCgpIHtcbiAgdmFyIGlzQnJvd3NlciA9IHR5cGUuaXNCcm93c2VyLFxuICAgICAgaXNNb2JpbGUgPSB0eXBlLmlzTW9iaWxlLFxuICAgICAgaXNUYWJsZXQgPSB0eXBlLmlzVGFibGV0LFxuICAgICAgaXNTbWFydFRWID0gdHlwZS5pc1NtYXJ0VFYsXG4gICAgICBpc0NvbnNvbGUgPSB0eXBlLmlzQ29uc29sZSxcbiAgICAgIGlzV2VhcmFibGUgPSB0eXBlLmlzV2VhcmFibGU7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHJldHVybiBicm9QYXlsb2FkKGlzQnJvd3NlciwgYnJvd3NlciwgZW5naW5lLCBvcywgdWEpO1xuICB9XG5cbiAgaWYgKGlzU21hcnRUVikge1xuICAgIHJldHVybiBzdHZQYXlsb2FkKGlzU21hcnRUViwgZW5naW5lLCBvcywgdWEpO1xuICB9XG5cbiAgaWYgKGlzQ29uc29sZSkge1xuICAgIHJldHVybiBjb25zb2xlUGF5bG9hZChpc0NvbnNvbGUsIGVuZ2luZSwgb3MsIHVhKTtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIHJldHVybiBtb2JpbGVQYXlsb2FkKHR5cGUsIGRldmljZSwgb3MsIHVhKTtcbiAgfVxuXG4gIGlmIChpc1RhYmxldCkge1xuICAgIHJldHVybiBtb2JpbGVQYXlsb2FkKHR5cGUsIGRldmljZSwgb3MsIHVhKTtcbiAgfVxuXG4gIGlmIChpc1dlYXJhYmxlKSB7XG4gICAgcmV0dXJuIHdlYXJQYXlsb2FkKGlzV2VhcmFibGUsIGVuZ2luZSwgb3MsIHVhKTtcbiAgfVxufVxuXG52YXIgaXNNb2JpbGVUeXBlID0gZnVuY3Rpb24gaXNNb2JpbGVUeXBlKCkge1xuICByZXR1cm4gZGV2aWNlLnR5cGUgPT09IERFVklDRV9UWVBFUy5NT0JJTEU7XG59O1xuXG52YXIgaXNUYWJsZXRUeXBlID0gZnVuY3Rpb24gaXNUYWJsZXRUeXBlKCkge1xuICByZXR1cm4gZGV2aWNlLnR5cGUgPT09IERFVklDRV9UWVBFUy5UQUJMRVQ7XG59O1xuXG52YXIgaXNNb2JpbGVBbmRUYWJsZXRUeXBlID0gZnVuY3Rpb24gaXNNb2JpbGVBbmRUYWJsZXRUeXBlKCkge1xuICBzd2l0Y2ggKGRldmljZS50eXBlKSB7XG4gICAgY2FzZSBERVZJQ0VfVFlQRVMuTU9CSUxFOlxuICAgIGNhc2UgREVWSUNFX1RZUEVTLlRBQkxFVDpcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxudmFyIGlzRWRnZUNocm9taXVtVHlwZSA9IGZ1bmN0aW9uIGlzRWRnZUNocm9taXVtVHlwZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB1YSA9PT0gJ3N0cmluZycgJiYgdWEuaW5kZXhPZignRWRnLycpICE9PSAtMTtcbn07XG5cbnZhciBpc1NtYXJ0VFZUeXBlID0gZnVuY3Rpb24gaXNTbWFydFRWVHlwZSgpIHtcbiAgcmV0dXJuIGRldmljZS50eXBlID09PSBERVZJQ0VfVFlQRVMuU01BUlRfVFY7XG59O1xuXG52YXIgaXNCcm93c2VyVHlwZSA9IGZ1bmN0aW9uIGlzQnJvd3NlclR5cGUoKSB7XG4gIHJldHVybiBkZXZpY2UudHlwZSA9PT0gREVWSUNFX1RZUEVTLkJST1dTRVI7XG59O1xuXG52YXIgaXNXZWFyYWJsZVR5cGUgPSBmdW5jdGlvbiBpc1dlYXJhYmxlVHlwZSgpIHtcbiAgcmV0dXJuIGRldmljZS50eXBlID09PSBERVZJQ0VfVFlQRVMuV0VBUkFCTEU7XG59O1xuXG52YXIgaXNDb25zb2xlVHlwZSA9IGZ1bmN0aW9uIGlzQ29uc29sZVR5cGUoKSB7XG4gIHJldHVybiBkZXZpY2UudHlwZSA9PT0gREVWSUNFX1RZUEVTLkNPTlNPTEU7XG59O1xuXG52YXIgaXNBbmRyb2lkVHlwZSA9IGZ1bmN0aW9uIGlzQW5kcm9pZFR5cGUoKSB7XG4gIHJldHVybiBvcy5uYW1lID09PSBPU19UWVBFUy5BTkRST0lEO1xufTtcblxudmFyIGlzV2luZG93c1R5cGUgPSBmdW5jdGlvbiBpc1dpbmRvd3NUeXBlKCkge1xuICByZXR1cm4gb3MubmFtZSA9PT0gT1NfVFlQRVMuV0lORE9XUztcbn07XG5cbnZhciBpc01hY09zVHlwZSA9IGZ1bmN0aW9uIGlzTWFjT3NUeXBlKCkge1xuICByZXR1cm4gb3MubmFtZSA9PT0gT1NfVFlQRVMuTUFDX09TO1xufTtcblxudmFyIGlzV2luUGhvbmVUeXBlID0gZnVuY3Rpb24gaXNXaW5QaG9uZVR5cGUoKSB7XG4gIHJldHVybiBvcy5uYW1lID09PSBPU19UWVBFUy5XSU5ET1dTX1BIT05FO1xufTtcblxudmFyIGlzSU9TVHlwZSA9IGZ1bmN0aW9uIGlzSU9TVHlwZSgpIHtcbiAgcmV0dXJuIG9zLm5hbWUgPT09IE9TX1RZUEVTLklPUztcbn07XG5cbnZhciBpc0Nocm9tZVR5cGUgPSBmdW5jdGlvbiBpc0Nocm9tZVR5cGUoKSB7XG4gIHJldHVybiBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuQ0hST01FO1xufTtcblxudmFyIGlzRmlyZWZveFR5cGUgPSBmdW5jdGlvbiBpc0ZpcmVmb3hUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLkZJUkVGT1g7XG59O1xuXG52YXIgaXNDaHJvbWl1bVR5cGUgPSBmdW5jdGlvbiBpc0Nocm9taXVtVHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5DSFJPTUlVTTtcbn07XG5cbnZhciBpc0VkZ2VUeXBlID0gZnVuY3Rpb24gaXNFZGdlVHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5FREdFO1xufTtcblxudmFyIGlzWWFuZGV4VHlwZSA9IGZ1bmN0aW9uIGlzWWFuZGV4VHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5ZQU5ERVg7XG59O1xuXG52YXIgaXNTYWZhcmlUeXBlID0gZnVuY3Rpb24gaXNTYWZhcmlUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLlNBRkFSSSB8fCBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuTU9CSUxFX1NBRkFSSTtcbn07XG5cbnZhciBpc01vYmlsZVNhZmFyaVR5cGUgPSBmdW5jdGlvbiBpc01vYmlsZVNhZmFyaVR5cGUoKSB7XG4gIHJldHVybiBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuTU9CSUxFX1NBRkFSSTtcbn07XG5cbnZhciBpc09wZXJhVHlwZSA9IGZ1bmN0aW9uIGlzT3BlcmFUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLk9QRVJBO1xufTtcblxudmFyIGlzSUVUeXBlID0gZnVuY3Rpb24gaXNJRVR5cGUoKSB7XG4gIHJldHVybiBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuSU5URVJORVRfRVhQTE9SRVIgfHwgYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLklFO1xufTtcblxudmFyIGlzTUlVSVR5cGUgPSBmdW5jdGlvbiBpc01JVUlUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLk1JVUk7XG59O1xuXG52YXIgaXNFbGVjdHJvblR5cGUgPSBmdW5jdGlvbiBpc0VsZWN0cm9uVHlwZSgpIHtcbiAgdmFyIG5hdiA9IGdldE5hdmlnYXRvckluc3RhbmNlKCk7XG4gIHZhciB1YSA9IG5hdiAmJiBuYXYudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiB0eXBlb2YgdWEgPT09ICdzdHJpbmcnID8gL2VsZWN0cm9uLy50ZXN0KHVhKSA6IGZhbHNlO1xufTtcblxudmFyIGdldElPUzEzID0gZnVuY3Rpb24gZ2V0SU9TMTMoKSB7XG4gIHZhciBuYXYgPSBnZXROYXZpZ2F0b3JJbnN0YW5jZSgpO1xuICByZXR1cm4gbmF2ICYmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXYucGxhdGZvcm0pIHx8IG5hdi5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXYubWF4VG91Y2hQb2ludHMgPiAxKSAmJiAhd2luZG93Lk1TU3RyZWFtO1xufTtcblxudmFyIGdldElQYWQxMyA9IGZ1bmN0aW9uIGdldElQYWQxMygpIHtcbiAgcmV0dXJuIGlzSU9TMTNDaGVjaygnaVBhZCcpO1xufTtcblxudmFyIGdldElwaG9uZTEzID0gZnVuY3Rpb24gZ2V0SXBob25lMTMoKSB7XG4gIHJldHVybiBpc0lPUzEzQ2hlY2soJ2lQaG9uZScpO1xufTtcblxudmFyIGdldElQb2QxMyA9IGZ1bmN0aW9uIGdldElQb2QxMygpIHtcbiAgcmV0dXJuIGlzSU9TMTNDaGVjaygnaVBvZCcpO1xufTtcblxudmFyIGdldEJyb3dzZXJGdWxsVmVyc2lvbiA9IGZ1bmN0aW9uIGdldEJyb3dzZXJGdWxsVmVyc2lvbigpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKGJyb3dzZXIudmVyc2lvbik7XG59O1xuXG52YXIgZ2V0QnJvd3NlclZlcnNpb24gPSBmdW5jdGlvbiBnZXRCcm93c2VyVmVyc2lvbigpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKGJyb3dzZXIubWFqb3IpO1xufTtcblxudmFyIGdldE9zVmVyc2lvbiA9IGZ1bmN0aW9uIGdldE9zVmVyc2lvbigpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKG9zLnZlcnNpb24pO1xufTtcblxudmFyIGdldE9zTmFtZSA9IGZ1bmN0aW9uIGdldE9zTmFtZSgpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKG9zLm5hbWUpO1xufTtcblxudmFyIGdldEJyb3dzZXJOYW1lID0gZnVuY3Rpb24gZ2V0QnJvd3Nlck5hbWUoKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhicm93c2VyLm5hbWUpO1xufTtcblxudmFyIGdldE1vYmlsZVZlbmRvciA9IGZ1bmN0aW9uIGdldE1vYmlsZVZlbmRvcigpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKGRldmljZS52ZW5kb3IpO1xufTtcblxudmFyIGdldE1vYmlsZU1vZGVsID0gZnVuY3Rpb24gZ2V0TW9iaWxlTW9kZWwoKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhkZXZpY2UubW9kZWwpO1xufTtcblxudmFyIGdldEVuZ2luZU5hbWUgPSBmdW5jdGlvbiBnZXRFbmdpbmVOYW1lKCkge1xuICByZXR1cm4gc2V0RGVmYXVsdHMoZW5naW5lLm5hbWUpO1xufTtcblxudmFyIGdldEVuZ2luZVZlcnNpb24gPSBmdW5jdGlvbiBnZXRFbmdpbmVWZXJzaW9uKCkge1xuICByZXR1cm4gc2V0RGVmYXVsdHMoZW5naW5lLnZlcnNpb24pO1xufTtcblxudmFyIGdldFVzZXJhZ2VudCA9IGZ1bmN0aW9uIGdldFVzZXJhZ2VudCgpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKHVhKTtcbn07XG5cbnZhciBnZXREZXZpY2VUeXBlID0gZnVuY3Rpb24gZ2V0RGV2aWNlVHlwZSgpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKGRldmljZS50eXBlLCAnYnJvd3NlcicpO1xufTtcblxudmFyIGlzU21hcnRUViA9IGlzU21hcnRUVlR5cGUoKTtcbnZhciBpc0NvbnNvbGUgPSBpc0NvbnNvbGVUeXBlKCk7XG52YXIgaXNXZWFyYWJsZSA9IGlzV2VhcmFibGVUeXBlKCk7XG52YXIgaXNNb2JpbGVTYWZhcmkgPSBpc01vYmlsZVNhZmFyaVR5cGUoKSB8fCBnZXRJUGFkMTMoKTtcbnZhciBpc0Nocm9taXVtID0gaXNDaHJvbWl1bVR5cGUoKTtcbnZhciBpc01vYmlsZSA9IGlzTW9iaWxlQW5kVGFibGV0VHlwZSgpIHx8IGdldElQYWQxMygpO1xudmFyIGlzTW9iaWxlT25seSA9IGlzTW9iaWxlVHlwZSgpO1xudmFyIGlzVGFibGV0ID0gaXNUYWJsZXRUeXBlKCkgfHwgZ2V0SVBhZDEzKCk7XG52YXIgaXNCcm93c2VyID0gaXNCcm93c2VyVHlwZSgpO1xudmFyIGlzQW5kcm9pZCA9IGlzQW5kcm9pZFR5cGUoKTtcbnZhciBpc1dpblBob25lID0gaXNXaW5QaG9uZVR5cGUoKTtcbnZhciBpc0lPUyA9IGlzSU9TVHlwZSgpIHx8IGdldElQYWQxMygpO1xudmFyIGlzQ2hyb21lID0gaXNDaHJvbWVUeXBlKCk7XG52YXIgaXNGaXJlZm94ID0gaXNGaXJlZm94VHlwZSgpO1xudmFyIGlzU2FmYXJpID0gaXNTYWZhcmlUeXBlKCk7XG52YXIgaXNPcGVyYSA9IGlzT3BlcmFUeXBlKCk7XG52YXIgaXNJRSA9IGlzSUVUeXBlKCk7XG52YXIgb3NWZXJzaW9uID0gZ2V0T3NWZXJzaW9uKCk7XG52YXIgb3NOYW1lID0gZ2V0T3NOYW1lKCk7XG52YXIgZnVsbEJyb3dzZXJWZXJzaW9uID0gZ2V0QnJvd3NlckZ1bGxWZXJzaW9uKCk7XG52YXIgYnJvd3NlclZlcnNpb24gPSBnZXRCcm93c2VyVmVyc2lvbigpO1xudmFyIGJyb3dzZXJOYW1lID0gZ2V0QnJvd3Nlck5hbWUoKTtcbnZhciBtb2JpbGVWZW5kb3IgPSBnZXRNb2JpbGVWZW5kb3IoKTtcbnZhciBtb2JpbGVNb2RlbCA9IGdldE1vYmlsZU1vZGVsKCk7XG52YXIgZW5naW5lTmFtZSA9IGdldEVuZ2luZU5hbWUoKTtcbnZhciBlbmdpbmVWZXJzaW9uID0gZ2V0RW5naW5lVmVyc2lvbigpO1xudmFyIGdldFVBID0gZ2V0VXNlcmFnZW50KCk7XG52YXIgaXNFZGdlID0gaXNFZGdlVHlwZSgpIHx8IGlzRWRnZUNocm9taXVtVHlwZSgpO1xudmFyIGlzWWFuZGV4ID0gaXNZYW5kZXhUeXBlKCk7XG52YXIgZGV2aWNlVHlwZSA9IGdldERldmljZVR5cGUoKTtcbnZhciBpc0lPUzEzID0gZ2V0SU9TMTMoKTtcbnZhciBpc0lQYWQxMyA9IGdldElQYWQxMygpO1xudmFyIGlzSVBob25lMTMgPSBnZXRJcGhvbmUxMygpO1xudmFyIGlzSVBvZDEzID0gZ2V0SVBvZDEzKCk7XG52YXIgaXNFbGVjdHJvbiA9IGlzRWxlY3Ryb25UeXBlKCk7XG52YXIgaXNFZGdlQ2hyb21pdW0gPSBpc0VkZ2VDaHJvbWl1bVR5cGUoKTtcbnZhciBpc0xlZ2FjeUVkZ2UgPSBpc0VkZ2VUeXBlKCkgJiYgIWlzRWRnZUNocm9taXVtVHlwZSgpO1xudmFyIGlzV2luZG93cyA9IGlzV2luZG93c1R5cGUoKTtcbnZhciBpc01hY09zID0gaXNNYWNPc1R5cGUoKTtcbnZhciBpc01JVUkgPSBpc01JVUlUeXBlKCk7XG5cbnZhciBBbmRyb2lkVmlldyA9IGZ1bmN0aW9uIEFuZHJvaWRWaWV3KF9yZWYpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWYucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWYudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgcmV0dXJuIGlzQW5kcm9pZCA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgQnJvd3NlclZpZXcgPSBmdW5jdGlvbiBCcm93c2VyVmlldyhfcmVmMikge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjIucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmMi52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmMi5zdHlsZTtcbiAgcmV0dXJuIGlzQnJvd3NlciA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgSUVWaWV3ID0gZnVuY3Rpb24gSUVWaWV3KF9yZWYzKSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmMy5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYzLmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWYzLnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYzLnN0eWxlO1xuICByZXR1cm4gaXNJRSA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgSU9TVmlldyA9IGZ1bmN0aW9uIElPU1ZpZXcoX3JlZjQpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWY0LnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjQudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjQuc3R5bGU7XG4gIHJldHVybiBpc0lPUyA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgTW9iaWxlVmlldyA9IGZ1bmN0aW9uIE1vYmlsZVZpZXcoX3JlZjUpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWY1LnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjUuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjUudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjUuc3R5bGU7XG4gIHJldHVybiBpc01vYmlsZSA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgVGFibGV0VmlldyA9IGZ1bmN0aW9uIFRhYmxldFZpZXcoX3JlZjYpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWY2LnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjYuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjYudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjYuc3R5bGU7XG4gIHJldHVybiBpc1RhYmxldCA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgV2luUGhvbmVWaWV3ID0gZnVuY3Rpb24gV2luUGhvbmVWaWV3KF9yZWY3KSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmNy5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWY3LmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWY3LnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWY3LnN0eWxlO1xuICByZXR1cm4gaXNXaW5QaG9uZSA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgTW9iaWxlT25seVZpZXcgPSBmdW5jdGlvbiBNb2JpbGVPbmx5VmlldyhfcmVmOCkge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjgucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmOC5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmOC52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmOC5zdHlsZTtcbiAgcmV0dXJuIGlzTW9iaWxlT25seSA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgU21hcnRUVlZpZXcgPSBmdW5jdGlvbiBTbWFydFRWVmlldyhfcmVmOSkge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjkucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmOS5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmOS52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmOS5zdHlsZTtcbiAgcmV0dXJuIGlzU21hcnRUViA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgQ29uc29sZVZpZXcgPSBmdW5jdGlvbiBDb25zb2xlVmlldyhfcmVmMTApIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWYxMC5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYxMC5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmMTAudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjEwLnN0eWxlO1xuICByZXR1cm4gaXNDb25zb2xlID8gcmVuZGVyV2l0aEZyYWdtZW50ID8gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pIDogUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiB2aWV3Q2xhc3NOYW1lLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjaGlsZHJlbikgOiBudWxsO1xufTtcbnZhciBXZWFyYWJsZVZpZXcgPSBmdW5jdGlvbiBXZWFyYWJsZVZpZXcoX3JlZjExKSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmMTEucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMTEuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjExLnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYxMS5zdHlsZTtcbiAgcmV0dXJuIGlzV2VhcmFibGUgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIEN1c3RvbVZpZXcgPSBmdW5jdGlvbiBDdXN0b21WaWV3KF9yZWYxMikge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjEyLnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjEyLmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWYxMi52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmMTIuc3R5bGUsXG4gICAgICBjb25kaXRpb24gPSBfcmVmMTIuY29uZGl0aW9uO1xuICByZXR1cm4gY29uZGl0aW9uID8gcmVuZGVyV2l0aEZyYWdtZW50ID8gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pIDogUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiB2aWV3Q2xhc3NOYW1lLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjaGlsZHJlbikgOiBudWxsO1xufTtcblxuZnVuY3Rpb24gd2l0aE9yaWVudGF0aW9uQ2hhbmdlKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhfY2xhc3MsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBfY2xhc3MocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKF9jbGFzcykuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgICAgICBfdGhpcy5pc0V2ZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYW5kbGVPcmllbnRhdGlvbkNoYW5nZSA9IF90aGlzLmhhbmRsZU9yaWVudGF0aW9uQ2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgICBfdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlID0gX3RoaXMub25PcmllbnRhdGlvbkNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgICAgX3RoaXMub25QYWdlTG9hZCA9IF90aGlzLm9uUGFnZUxvYWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGlzTGFuZHNjYXBlOiBmYWxzZSxcbiAgICAgICAgICBpc1BvcnRyYWl0OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhfY2xhc3MsIFt7XG4gICAgICAgIGtleTogXCJoYW5kbGVPcmllbnRhdGlvbkNoYW5nZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzRXZlbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRXZlbnRMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodCA/IDkwIDogMDtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUG9ydHJhaXQ6IG9yaWVudGF0aW9uID09PSAwLFxuICAgICAgICAgICAgaXNMYW5kc2NhcGU6IG9yaWVudGF0aW9uID09PSA5MFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJvbk9yaWVudGF0aW9uQ2hhbmdlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9yaWVudGF0aW9uQ2hhbmdlKCkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwib25QYWdlTG9hZFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25QYWdlTG9hZCgpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZU9yaWVudGF0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICBpZiAoKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSAhPT0gdW5kZWZpbmVkICYmIGlzTW9iaWxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFdmVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcmllbnRhdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5vblBhZ2VMb2FkLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5vblBhZ2VMb2FkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgaXNMYW5kc2NhcGU6IHRoaXMuc3RhdGUuaXNMYW5kc2NhcGUsXG4gICAgICAgICAgICBpc1BvcnRyYWl0OiB0aGlzLnN0YXRlLmlzUG9ydHJhaXRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICB9KFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudClcbiAgKTtcbn1cblxuZXhwb3J0cy5BbmRyb2lkVmlldyA9IEFuZHJvaWRWaWV3O1xuZXhwb3J0cy5Ccm93c2VyVmlldyA9IEJyb3dzZXJWaWV3O1xuZXhwb3J0cy5Db25zb2xlVmlldyA9IENvbnNvbGVWaWV3O1xuZXhwb3J0cy5DdXN0b21WaWV3ID0gQ3VzdG9tVmlldztcbmV4cG9ydHMuSUVWaWV3ID0gSUVWaWV3O1xuZXhwb3J0cy5JT1NWaWV3ID0gSU9TVmlldztcbmV4cG9ydHMuTW9iaWxlT25seVZpZXcgPSBNb2JpbGVPbmx5VmlldztcbmV4cG9ydHMuTW9iaWxlVmlldyA9IE1vYmlsZVZpZXc7XG5leHBvcnRzLlNtYXJ0VFZWaWV3ID0gU21hcnRUVlZpZXc7XG5leHBvcnRzLlRhYmxldFZpZXcgPSBUYWJsZXRWaWV3O1xuZXhwb3J0cy5XZWFyYWJsZVZpZXcgPSBXZWFyYWJsZVZpZXc7XG5leHBvcnRzLldpblBob25lVmlldyA9IFdpblBob25lVmlldztcbmV4cG9ydHMuYnJvd3Nlck5hbWUgPSBicm93c2VyTmFtZTtcbmV4cG9ydHMuYnJvd3NlclZlcnNpb24gPSBicm93c2VyVmVyc2lvbjtcbmV4cG9ydHMuZGV2aWNlRGV0ZWN0ID0gZGV2aWNlRGV0ZWN0O1xuZXhwb3J0cy5kZXZpY2VUeXBlID0gZGV2aWNlVHlwZTtcbmV4cG9ydHMuZW5naW5lTmFtZSA9IGVuZ2luZU5hbWU7XG5leHBvcnRzLmVuZ2luZVZlcnNpb24gPSBlbmdpbmVWZXJzaW9uO1xuZXhwb3J0cy5mdWxsQnJvd3NlclZlcnNpb24gPSBmdWxsQnJvd3NlclZlcnNpb247XG5leHBvcnRzLmdldFVBID0gZ2V0VUE7XG5leHBvcnRzLmlzQW5kcm9pZCA9IGlzQW5kcm9pZDtcbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy5pc0Nocm9tZSA9IGlzQ2hyb21lO1xuZXhwb3J0cy5pc0Nocm9taXVtID0gaXNDaHJvbWl1bTtcbmV4cG9ydHMuaXNDb25zb2xlID0gaXNDb25zb2xlO1xuZXhwb3J0cy5pc0VkZ2UgPSBpc0VkZ2U7XG5leHBvcnRzLmlzRWRnZUNocm9taXVtID0gaXNFZGdlQ2hyb21pdW07XG5leHBvcnRzLmlzRWxlY3Ryb24gPSBpc0VsZWN0cm9uO1xuZXhwb3J0cy5pc0ZpcmVmb3ggPSBpc0ZpcmVmb3g7XG5leHBvcnRzLmlzSUUgPSBpc0lFO1xuZXhwb3J0cy5pc0lPUyA9IGlzSU9TO1xuZXhwb3J0cy5pc0lPUzEzID0gaXNJT1MxMztcbmV4cG9ydHMuaXNJUGFkMTMgPSBpc0lQYWQxMztcbmV4cG9ydHMuaXNJUGhvbmUxMyA9IGlzSVBob25lMTM7XG5leHBvcnRzLmlzSVBvZDEzID0gaXNJUG9kMTM7XG5leHBvcnRzLmlzTGVnYWN5RWRnZSA9IGlzTGVnYWN5RWRnZTtcbmV4cG9ydHMuaXNNSVVJID0gaXNNSVVJO1xuZXhwb3J0cy5pc01hY09zID0gaXNNYWNPcztcbmV4cG9ydHMuaXNNb2JpbGUgPSBpc01vYmlsZTtcbmV4cG9ydHMuaXNNb2JpbGVPbmx5ID0gaXNNb2JpbGVPbmx5O1xuZXhwb3J0cy5pc01vYmlsZVNhZmFyaSA9IGlzTW9iaWxlU2FmYXJpO1xuZXhwb3J0cy5pc09wZXJhID0gaXNPcGVyYTtcbmV4cG9ydHMuaXNTYWZhcmkgPSBpc1NhZmFyaTtcbmV4cG9ydHMuaXNTbWFydFRWID0gaXNTbWFydFRWO1xuZXhwb3J0cy5pc1RhYmxldCA9IGlzVGFibGV0O1xuZXhwb3J0cy5pc1dlYXJhYmxlID0gaXNXZWFyYWJsZTtcbmV4cG9ydHMuaXNXaW5QaG9uZSA9IGlzV2luUGhvbmU7XG5leHBvcnRzLmlzV2luZG93cyA9IGlzV2luZG93cztcbmV4cG9ydHMuaXNZYW5kZXggPSBpc1lhbmRleDtcbmV4cG9ydHMubW9iaWxlTW9kZWwgPSBtb2JpbGVNb2RlbDtcbmV4cG9ydHMubW9iaWxlVmVuZG9yID0gbW9iaWxlVmVuZG9yO1xuZXhwb3J0cy5vc05hbWUgPSBvc05hbWU7XG5leHBvcnRzLm9zVmVyc2lvbiA9IG9zVmVyc2lvbjtcbmV4cG9ydHMud2l0aE9yaWVudGF0aW9uQ2hhbmdlID0gd2l0aE9yaWVudGF0aW9uQ2hhbmdlO1xuIiwiLyohQGxpY2Vuc2VcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMjhcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMjEgRmFpc2FsIFNhbG1hbiA8ZkBmYWlzYWxtYW4uY29tPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdyx1bmRlZmluZWQpe1widXNlIHN0cmljdFwiO3ZhciBMSUJWRVJTSU9OPVwiMC43LjI4XCIsRU1QVFk9XCJcIixVTktOT1dOPVwiP1wiLEZVTkNfVFlQRT1cImZ1bmN0aW9uXCIsVU5ERUZfVFlQRT1cInVuZGVmaW5lZFwiLE9CSl9UWVBFPVwib2JqZWN0XCIsU1RSX1RZUEU9XCJzdHJpbmdcIixNQUpPUj1cIm1ham9yXCIsTU9ERUw9XCJtb2RlbFwiLE5BTUU9XCJuYW1lXCIsVFlQRT1cInR5cGVcIixWRU5ET1I9XCJ2ZW5kb3JcIixWRVJTSU9OPVwidmVyc2lvblwiLEFSQ0hJVEVDVFVSRT1cImFyY2hpdGVjdHVyZVwiLENPTlNPTEU9XCJjb25zb2xlXCIsTU9CSUxFPVwibW9iaWxlXCIsVEFCTEVUPVwidGFibGV0XCIsU01BUlRUVj1cInNtYXJ0dHZcIixXRUFSQUJMRT1cIndlYXJhYmxlXCIsRU1CRURERUQ9XCJlbWJlZGRlZFwiLFVBX01BWF9MRU5HVEg9MjU1O3ZhciB1dGlsPXtleHRlbmQ6ZnVuY3Rpb24ocmVnZXhlcyxleHRlbnNpb25zKXt2YXIgbWVyZ2VkUmVnZXhlcz17fTtmb3IodmFyIGkgaW4gcmVnZXhlcyl7aWYoZXh0ZW5zaW9uc1tpXSYmZXh0ZW5zaW9uc1tpXS5sZW5ndGglMj09PTApe21lcmdlZFJlZ2V4ZXNbaV09ZXh0ZW5zaW9uc1tpXS5jb25jYXQocmVnZXhlc1tpXSl9ZWxzZXttZXJnZWRSZWdleGVzW2ldPXJlZ2V4ZXNbaV19fXJldHVybiBtZXJnZWRSZWdleGVzfSxoYXM6ZnVuY3Rpb24oc3RyMSxzdHIyKXtyZXR1cm4gdHlwZW9mIHN0cjE9PT1TVFJfVFlQRT9zdHIyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIxLnRvTG93ZXJDYXNlKCkpIT09LTE6ZmFsc2V9LGxvd2VyaXplOmZ1bmN0aW9uKHN0cil7cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpfSxtYWpvcjpmdW5jdGlvbih2ZXJzaW9uKXtyZXR1cm4gdHlwZW9mIHZlcnNpb249PT1TVFJfVFlQRT92ZXJzaW9uLnJlcGxhY2UoL1teXFxkXFwuXS9nLFwiXCIpLnNwbGl0KFwiLlwiKVswXTp1bmRlZmluZWR9LHRyaW06ZnVuY3Rpb24oc3RyLGxlbil7c3RyPXN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcIlwiKTtyZXR1cm4gdHlwZW9mIGxlbj09PVVOREVGX1RZUEU/c3RyOnN0ci5zdWJzdHJpbmcoMCxVQV9NQVhfTEVOR1RIKX19O3ZhciBtYXBwZXI9e3JneDpmdW5jdGlvbih1YSxhcnJheXMpe3ZhciBpPTAsaixrLHAscSxtYXRjaGVzLG1hdGNoO3doaWxlKGk8YXJyYXlzLmxlbmd0aCYmIW1hdGNoZXMpe3ZhciByZWdleD1hcnJheXNbaV0scHJvcHM9YXJyYXlzW2krMV07aj1rPTA7d2hpbGUoajxyZWdleC5sZW5ndGgmJiFtYXRjaGVzKXttYXRjaGVzPXJlZ2V4W2orK10uZXhlYyh1YSk7aWYoISFtYXRjaGVzKXtmb3IocD0wO3A8cHJvcHMubGVuZ3RoO3ArKyl7bWF0Y2g9bWF0Y2hlc1srK2tdO3E9cHJvcHNbcF07aWYodHlwZW9mIHE9PT1PQkpfVFlQRSYmcS5sZW5ndGg+MCl7aWYocS5sZW5ndGg9PTIpe2lmKHR5cGVvZiBxWzFdPT1GVU5DX1RZUEUpe3RoaXNbcVswXV09cVsxXS5jYWxsKHRoaXMsbWF0Y2gpfWVsc2V7dGhpc1txWzBdXT1xWzFdfX1lbHNlIGlmKHEubGVuZ3RoPT0zKXtpZih0eXBlb2YgcVsxXT09PUZVTkNfVFlQRSYmIShxWzFdLmV4ZWMmJnFbMV0udGVzdCkpe3RoaXNbcVswXV09bWF0Y2g/cVsxXS5jYWxsKHRoaXMsbWF0Y2gscVsyXSk6dW5kZWZpbmVkfWVsc2V7dGhpc1txWzBdXT1tYXRjaD9tYXRjaC5yZXBsYWNlKHFbMV0scVsyXSk6dW5kZWZpbmVkfX1lbHNlIGlmKHEubGVuZ3RoPT00KXt0aGlzW3FbMF1dPW1hdGNoP3FbM10uY2FsbCh0aGlzLG1hdGNoLnJlcGxhY2UocVsxXSxxWzJdKSk6dW5kZWZpbmVkfX1lbHNle3RoaXNbcV09bWF0Y2g/bWF0Y2g6dW5kZWZpbmVkfX19fWkrPTJ9fSxzdHI6ZnVuY3Rpb24oc3RyLG1hcCl7Zm9yKHZhciBpIGluIG1hcCl7aWYodHlwZW9mIG1hcFtpXT09PU9CSl9UWVBFJiZtYXBbaV0ubGVuZ3RoPjApe2Zvcih2YXIgaj0wO2o8bWFwW2ldLmxlbmd0aDtqKyspe2lmKHV0aWwuaGFzKG1hcFtpXVtqXSxzdHIpKXtyZXR1cm4gaT09PVVOS05PV04/dW5kZWZpbmVkOml9fX1lbHNlIGlmKHV0aWwuaGFzKG1hcFtpXSxzdHIpKXtyZXR1cm4gaT09PVVOS05PV04/dW5kZWZpbmVkOml9fXJldHVybiBzdHJ9fTt2YXIgbWFwcz17YnJvd3Nlcjp7b2xkU2FmYXJpOnt2ZXJzaW9uOntcIjEuMFwiOlwiLzhcIiwxLjI6XCIvMVwiLDEuMzpcIi8zXCIsXCIyLjBcIjpcIi80MTJcIixcIjIuMC4yXCI6XCIvNDE2XCIsXCIyLjAuM1wiOlwiLzQxN1wiLFwiMi4wLjRcIjpcIi80MTlcIixcIj9cIjpcIi9cIn19LG9sZEVkZ2U6e3ZlcnNpb246ey4xOlwiMTIuXCIsMjE6XCIxMy5cIiwzMTpcIjE0LlwiLDM5OlwiMTUuXCIsNDE6XCIxNi5cIiw0MjpcIjE3LlwiLDQ0OlwiMTguXCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMmUzOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fTt2YXIgcmVnZXhlcz17YnJvd3NlcjpbWy9cXGIoPzpjcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiQ2hyb21lXCJdXSxbLyg/OmVkZ2V8ZWRnaW9zfGVkZ2F8ZWRnKVxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiRWRnZVwiXV0sWy8ob3BlcmFcXHNtaW5pKVxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmFcXHNbbW9iaWxldGFiXXszLDZ9KVxcYi4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmEpKD86Lit2ZXJzaW9uXFwvfFtcXC9cXHNdKykoW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbL29waW9zW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJPcGVyYSBNaW5pXCJdXSxbL1xcc29wclxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiT3BlcmFcIl1dLFsvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKGF2YW50XFxzfGllbW9iaWxlfHNsaW0pKD86YnJvd3Nlcik/W1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKGJhP2lkdWJyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLC8oZmxvY2t8cm9ja21lbHR8bWlkb3JpfGVwaXBoYW55fHNpbGt8c2t5ZmlyZXxvdmlicm93c2VyfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW18cGhhbnRvbWpzfGJvd3NlcnxxdWFya3xxdXB6aWxsYXxmYWxrb24pXFwvKFtcXHdcXC4tXSspL2ksLyhyZWtvbnF8cHVmZmlufGJyYXZlfHdoYWxlfHFxYnJvd3NlcmxpdGV8cXEpXFwvKFtcXHdcXC5dKykvaSwvKHdlaWJvKV9fKFtcXGRcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy8oPzpbXFxzXFwvXXVjP1xccz9icm93c2VyfCg/Omp1Yy4rKXVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiVUNCcm93c2VyXCJdXSxbLyg/OndpbmRvd3N3ZWNoYXQpP1xcc3FiY29yZVxcLyhbXFx3XFwuXSspXFxiLiooPzp3aW5kb3dzd2VjaGF0KT8vaV0sW1ZFUlNJT04sW05BTUUsXCJXZUNoYXQoV2luKSBEZXNrdG9wXCJdXSxbL21pY3JvbWVzc2VuZ2VyXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJXZUNoYXRcIl1dLFsva29ucXVlcm9yXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJLb25xdWVyb3JcIl1dLFsvdHJpZGVudC4rcnZbOlxcc10oW1xcd1xcLl17MSw5fSlcXGIuK2xpa2VcXHNnZWNrby9pXSxbVkVSU0lPTixbTkFNRSxcIklFXCJdXSxbL3lhYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiWWFuZGV4XCJdXSxbLyhhdmFzdHxhdmcpXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLC8oLispLyxcIiQxIFNlY3VyZSBCcm93c2VyXCJdLFZFUlNJT05dLFsvZm9jdXNcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIkZpcmVmb3ggRm9jdXNcIl1dLFsvb3B0XFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJPcGVyYSBUb3VjaFwiXV0sWy9jb2NfY29jX2Jyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIkNvYyBDb2NcIl1dLFsvZG9sZmluXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJEb2xwaGluXCJdXSxbL2NvYXN0XFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJPcGVyYSBDb2FzdFwiXV0sWy94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiTUlVSSBCcm93c2VyXCJdXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiRmlyZWZveFwiXV0sWy8ocWlodXxxaGJyb3dzZXJ8cWlob29icm93c2VyfDM2MGJyb3dzZXIpL2ldLFtbTkFNRSxcIjM2MCBCcm93c2VyXCJdXSxbLyhvY3VsdXN8c2Ftc3VuZ3xzYWlsZmlzaClicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLC8oLispLyxcIiQxIEJyb3dzZXJcIl0sVkVSU0lPTl0sWy8oY29tb2RvX2RyYWdvbilcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsL18vZyxcIiBcIl0sVkVSU0lPTl0sWy9cXHMoZWxlY3Ryb24pXFwvKFtcXHdcXC5dKylcXHNzYWZhcmkvaSwvKHRlc2xhKSg/Olxcc3F0Y2FyYnJvd3NlcnxcXC8oMjBbMTJdXFxkXFwuW1xcd1xcLi1dKykpL2ksL20/KHFxYnJvd3NlcnxiYWlkdWJveGFwcHwyMzQ1RXhwbG9yZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy8oTWV0YVNyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhMQkJST1dTRVIpL2ldLFtOQU1FXSxbLztmYmF2XFwvKFtcXHdcXC5dKyk7L2ldLFtWRVJTSU9OLFtOQU1FLFwiRmFjZWJvb2tcIl1dLFsvRkJBTlxcL0ZCSU9TfEZCX0lBQlxcL0ZCNEEvaV0sW1tOQU1FLFwiRmFjZWJvb2tcIl1dLFsvc2FmYXJpXFxzKGxpbmUpXFwvKFtcXHdcXC5dKykvaSwvXFxiKGxpbmUpXFwvKFtcXHdcXC5dKylcXC9pYWIvaSwvKGNocm9taXVtfGluc3RhZ3JhbSlbXFwvXFxzXShbXFx3XFwuLV0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbL1xcYmdzYVxcLyhbXFx3XFwuXSspXFxzLipzYWZhcmlcXC8vaV0sW1ZFUlNJT04sW05BTUUsXCJHU0FcIl1dLFsvaGVhZGxlc3NjaHJvbWUoPzpcXC8oW1xcd1xcLl0rKXxcXHMpL2ldLFtWRVJTSU9OLFtOQU1FLFwiQ2hyb21lIEhlYWRsZXNzXCJdXSxbL1xcc3d2XFwpLisoY2hyb21lKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSxcIkNocm9tZSBXZWJWaWV3XCJdLFZFUlNJT05dLFsvZHJvaWQuK1xcc3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxcYi4rKD86bW9iaWxlXFxzc2FmYXJpfHNhZmFyaSkvaV0sW1ZFUlNJT04sW05BTUUsXCJBbmRyb2lkIEJyb3dzZXJcIl1dLFsvKGNocm9tZXxvbW5pd2VifGFyb3JhfFt0aXplbm9rYV17NX1cXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzLiptb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW1ZFUlNJT04sW05BTUUsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccy4qKG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbVkVSU0lPTixOQU1FXSxbL3dlYmtpdC4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pXSxbTkFNRSxbVkVSU0lPTixtYXBwZXIuc3RyLG1hcHMuYnJvd3Nlci5vbGRTYWZhcmkudmVyc2lvbl1dLFsvKHdlYmtpdHxraHRtbClcXC8oW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyhuYXZpZ2F0b3J8bmV0c2NhcGUpXFwvKFtcXHdcXC4tXSspL2ldLFtbTkFNRSxcIk5ldHNjYXBlXCJdLFZFUlNJT05dLFsvaWxlXFxzdnI7XFxzcnY6KFtcXHdcXC5dKylcXCkuK2ZpcmVmb3gvaV0sW1ZFUlNJT04sW05BTUUsXCJGaXJlZm94IFJlYWxpdHlcIl1dLFsvZWtpb2hmLisoZmxvdylcXC8oW1xcd1xcLl0rKS9pLC8oc3dpZnRmb3gpL2ksLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXh8cGFsZW1vb258YmFzaWxpc2t8d2F0ZXJmb3gpXFwvKFtcXHdcXC4tXSspJC9pLC8oZmlyZWZveClcXC8oW1xcd1xcLl0rKVxcc1tcXHdcXHNcXC1dK1xcL1tcXHdcXC5dKyQvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKylcXHMuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0qKS9pLC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dXSxjcHU6W1svKD86KGFtZHx4KD86KD86ODZ8NjQpW18tXSk/fHdvd3x3aW4pNjQpWztcXCldL2ldLFtbQVJDSElURUNUVVJFLFwiYW1kNjRcIl1dLFsvKGlhMzIoPz07KSkvaV0sW1tBUkNISVRFQ1RVUkUsdXRpbC5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW0FSQ0hJVEVDVFVSRSxcImlhMzJcIl1dLFsvXFxiKGFhcmNoNjR8YXJtdj84ZT9sPylcXGIvaV0sW1tBUkNISVRFQ1RVUkUsXCJhcm02NFwiXV0sWy9cXGIoYXJtKD86dls2N10pP2h0P24/W2ZsXXA/KVxcYi9pXSxbW0FSQ0hJVEVDVFVSRSxcImFybWhmXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbQVJDSElURUNUVVJFLFwiYXJtXCJdXSxbLygoPzpwcGN8cG93ZXJwYykoPzo2NCk/KSg/Olxcc21hY3w7fFxcKSkvaV0sW1tBUkNISVRFQ1RVUkUsL293ZXIvLFwiXCIsdXRpbC5sb3dlcml6ZV1dLFsvKHN1bjRcXHcpWztcXCldL2ldLFtbQVJDSElURUNUVVJFLFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxcXGJhcm0oPzo2NHwoPz12KD86WzEtN118WzUtN10xKWw/fDt8ZWFiaSkpfCg/PWF0bWVsXFxzKWF2cnwoPzppcml4fG1pcHN8c3BhcmMpKD86NjQpP1xcYnxwYS1yaXNjKS9pXSxbW0FSQ0hJVEVDVFVSRSx1dGlsLmxvd2VyaXplXV1dLGRldmljZTpbWy9cXGIoc2NoLWlbODldMFxcZHxzaHctbTM4MHN8c20tW3B0XVxcd3syLDR9fGd0LVtwbl1cXGR7Miw0fXxzZ2gtdDhbNTZdOXxuZXh1c1xcczEwKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlNhbXN1bmdcIl0sW1RZUEUsVEFCTEVUXV0sWy9cXGIoKD86c1tjZ3BdaHxndHxzbSktXFx3K3xnYWxheHlcXHNuZXh1cykvaSwvXFxzc2Ftc3VuZ1tcXHMtXShbXFx3LV0rKS9pLC9zZWMtKHNnaFxcdyspL2ldLFtNT0RFTCxbVkVORE9SLFwiU2Ftc3VuZ1wiXSxbVFlQRSxNT0JJTEVdXSxbL1xcKChpcCg/OmhvbmV8b2QpW1xcc1xcd10qKTsvaV0sW01PREVMLFtWRU5ET1IsXCJBcHBsZVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xcKChpcGFkKTtbXFx3XFxzXFwpLDstXSthcHBsZS9pLC9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dK1xcc1xcKChpcGFkKS9pLC9cXGIoaXBhZClcXGRcXGQ/LFxcZFxcZD9bO1xcXV0uK2lvcy9pXSxbTU9ERUwsW1ZFTkRPUixcIkFwcGxlXCJdLFtUWVBFLFRBQkxFVF1dLFsvXFxiKCg/OmFncnxhZ3NbMjNdfGJhaDI/fHNodD8pLWE/W2x3XVxcZHsyfSkvaV0sW01PREVMLFtWRU5ET1IsXCJIdWF3ZWlcIl0sW1RZUEUsVEFCTEVUXV0sWy9kXFwvaHVhd2VpKFtcXHdcXHMtXSspWztcXCldL2ksL1xcYihuZXh1c1xcczZwfHZvZy1bYXRdP2xcXGRcXGR8YW5lLVthdF0/bFt4XFxkXVxcZHxlbWwtYT9sXFxkXFxkYT98bHlhLVthdF0/bFxcZFtcXGRjXXxjbHQtYT9sXFxkXFxkaT98ZWxlLWxcXGRcXGQpL2ksL1xcYihcXHd7Miw0fS1bYXR1XVtsbl1bMDEyNTldWzAxOV0pWztcXClcXHNdL2ldLFtNT0RFTCxbVkVORE9SLFwiSHVhd2VpXCJdLFtUWVBFLE1PQklMRV1dLFsvXFxiKHBvY29bXFxzXFx3XSspKD86XFxzYnVpbGR8XFwpKS9pLC9cXGI7XFxzKFxcdyspXFxzYnVpbGRcXC9obVxcMS9pLC9cXGIoaG1bXFxzXFwtX10/bm90ZT9bXFxzX10/KD86XFxkXFx3KT8pXFxzYnVpbGQvaSwvXFxiKHJlZG1pW1xcc1xcLV9dPyg/Om5vdGV8ayk/W1xcd1xcc19dKykoPzpcXHNidWlsZHxcXCkpL2ksL1xcYihtaVtcXHNcXC1fXT8oPzphXFxkfG9uZXxvbmVbXFxzX11wbHVzfG5vdGUgbHRlKT9bXFxzX10/KD86XFxkP1xcdz8pW1xcc19dPyg/OnBsdXMpPylcXHNidWlsZC9pXSxbW01PREVMLC9fL2csXCIgXCJdLFtWRU5ET1IsXCJYaWFvbWlcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXGIobWlbXFxzXFwtX10/KD86cGFkKSg/OltcXHdcXHNfXSspKSg/Olxcc2J1aWxkfFxcKSkvaV0sW1tNT0RFTCwvXy9nLFwiIFwiXSxbVkVORE9SLFwiWGlhb21pXCJdLFtUWVBFLFRBQkxFVF1dLFsvO1xccyhcXHcrKVxcc2J1aWxkLitcXHNvcHBvL2ksL1xccyhjcGhbMTJdXFxkezN9fHAoPzphZnxjW2FsXXxkXFx3fGVbYXJdKVttdF1cXGQwfHg5MDA3KVxcYi9pXSxbTU9ERUwsW1ZFTkRPUixcIk9QUE9cIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHN2aXZvXFxzKFxcdyspKD86XFxzYnVpbGR8XFwpKS9pLC9cXHModlsxMl1cXGR7M31cXHc/W2F0XSkoPzpcXHNidWlsZHw7KS9pXSxbTU9ERUwsW1ZFTkRPUixcIlZpdm9cIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHMocm14WzEyXVxcZHszfSkoPzpcXHNidWlsZHw7KS9pXSxbTU9ERUwsW1ZFTkRPUixcIlJlYWxtZVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/Oj8oXFxzNGcpPylcXGJbXFx3XFxzXStidWlsZFxcLy9pLC9cXHNtb3QoPzpvcm9sYSk/W1xccy1dKFxcdyopL2ksLygoPzptb3RvW1xcc1xcd1xcKFxcKV0rfHh0XFxkezMsNH18bmV4dXNcXHM2KSg/PVxcc2J1aWxkfFxcKSkpL2ldLFtNT0RFTCxbVkVORE9SLFwiTW90b3JvbGFcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaV0sW01PREVMLFtWRU5ET1IsXCJNb3Rvcm9sYVwiXSxbVFlQRSxUQUJMRVRdXSxbLygoPz1sZyk/W3ZsXWtcXC0/XFxkezN9KVxcc2J1aWxkfFxcczNcXC5bXFxzXFx3Oy1dezEwfWxnPy0oWzA2Y3Y5XXszLDR9KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkxHXCJdLFtUWVBFLFRBQkxFVF1dLFsvKGxtLT9mMTAwW252XT98bmV4dXNcXHNbNDVdKS9pLC9sZ1tlO1xcc1xcLy1dKygoPyFicm93c2VyfG5ldGNhc3QpXFx3KykvaSwvXFxibGcoXFwtP1tcXGRcXHddKylcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkxHXCJdLFtUWVBFLE1PQklMRV1dLFsvKGlkZWF0YWJbXFx3XFwtXFxzXSspL2ksL2xlbm92b1xccz8ocyg/OjUwMDB8NjAwMCkoPzpbXFx3LV0rKXx0YWIoPzpbXFxzXFx3XSspfHl0W1xcZFxcdy1dezZ9fHRiW1xcZFxcdy1dezZ9KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkxlbm92b1wiXSxbVFlQRSxUQUJMRVRdXSxbLyg/Om1hZW1vfG5va2lhKS4qKG45MDB8bHVtaWFcXHNcXGQrKS9pLC9ub2tpYVtcXHNfLV0/KFtcXHdcXC4tXSopL2ldLFtbTU9ERUwsL18vZyxcIiBcIl0sW1ZFTkRPUixcIk5va2lhXCJdLFtUWVBFLE1PQklMRV1dLFsvZHJvaWQuKztcXHMocGl4ZWxcXHNjKVtcXHMpXS9pXSxbTU9ERUwsW1ZFTkRPUixcIkdvb2dsZVwiXSxbVFlQRSxUQUJMRVRdXSxbL2Ryb2lkLis7XFxzKHBpeGVsW1xcc1xcZGF4bF17MCw2fSkoPzpcXHNidWlsZHxcXCkpL2ldLFtNT0RFTCxbVkVORE9SLFwiR29vZ2xlXCJdLFtUWVBFLE1PQklMRV1dLFsvZHJvaWQuK1xccyhbYy1nXVxcZHs0fXxzb1stbF1cXHcrfHhxLWFcXHdbNC03XVsxMl0pKD89XFxzYnVpbGRcXC98XFwpLitjaHJvbWVcXC8oPyFbMS02XXswLDF9XFxkXFwuKSkvaV0sW01PREVMLFtWRU5ET1IsXCJTb255XCJdLFtUWVBFLE1PQklMRV1dLFsvc29ueVxcc3RhYmxldFxcc1twc11cXHNidWlsZFxcLy9pLC8oPzpzb255KT9zZ3BcXHcrKD86XFxzYnVpbGRcXC98XFwpKS9pXSxbW01PREVMLFwiWHBlcmlhIFRhYmxldFwiXSxbVkVORE9SLFwiU29ueVwiXSxbVFlQRSxUQUJMRVRdXSxbL1xccyhrYjIwMDV8aW4yMFsxMl01fGJlMjBbMTJdWzU5XSlcXGIvaSwvXFxiYTAwMCgxKVxcc2J1aWxkL2ksL1xcYm9uZXBsdXNcXHMoYVxcZHs0fSlbXFxzKV0vaV0sW01PREVMLFtWRU5ET1IsXCJPbmVQbHVzXCJdLFtUWVBFLE1PQklMRV1dLFsvKGFsZXhhKXdlYm0vaSwvKGtmW2Etel17Mn13aSkoXFxzYnVpbGRcXC98XFwpKS9pLC8oa2ZbYS16XSspKFxcc2J1aWxkXFwvfFxcKSkuK3NpbGtcXC8vaV0sW01PREVMLFtWRU5ET1IsXCJBbWF6b25cIl0sW1RZUEUsVEFCTEVUXV0sWy8oc2R8a2YpWzAzNDloaWpvcnN0dXddKyhcXHNidWlsZFxcL3xcXCkpLitzaWxrXFwvL2ldLFtbTU9ERUwsXCJGaXJlIFBob25lXCJdLFtWRU5ET1IsXCJBbWF6b25cIl0sW1RZUEUsTU9CSUxFXV0sWy9cXCgocGxheWJvb2spO1tcXHdcXHNcXCksOy1dKyhyaW0pL2ldLFtNT0RFTCxWRU5ET1IsW1RZUEUsVEFCTEVUXV0sWy8oKD86YmJbYS1mXXxzdFtodl0pMTAwLVxcZCkvaSwvXFwoYmIxMDtcXHMoXFx3KykvaV0sW01PREVMLFtWRU5ET1IsXCJCbGFja0JlcnJ5XCJdLFtUWVBFLE1PQklMRV1dLFsvKD86XFxifGFzdXNfKSh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1c1xcczd8cGFkZm9uZXxwMDBbY2pdKS9pXSxbTU9ERUwsW1ZFTkRPUixcIkFTVVNcIl0sW1RZUEUsVEFCTEVUXV0sWy9cXHMoeltlc102WzAyN11bMDFdW2ttXVtsc118emVuZm9uZVxcc1xcZFxcdz8pXFxiL2ldLFtNT0RFTCxbVkVORE9SLFwiQVNVU1wiXSxbVFlQRSxNT0JJTEVdXSxbLyhuZXh1c1xcczkpL2ldLFtNT0RFTCxbVkVORE9SLFwiSFRDXCJdLFtUWVBFLFRBQkxFVF1dLFsvKGh0YylbO19cXHMtXXsxLDJ9KFtcXHdcXHNdKyg/PVxcKXxcXHNidWlsZCl8XFx3KykvaSwvKHp0ZSktKFxcdyopL2ksLyhhbGNhdGVsfGdlZWtzcGhvbmV8bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKikvaV0sW1ZFTkRPUixbTU9ERUwsL18vZyxcIiBcIl0sW1RZUEUsTU9CSUxFXV0sWy9kcm9pZFt4XFxkXFwuXFxzO10rXFxzKFthYl1bMS03XVxcLT9bMDE3OGFdXFxkXFxkPykvaV0sW01PREVMLFtWRU5ET1IsXCJBY2VyXCJdLFtUWVBFLFRBQkxFVF1dLFsvZHJvaWQuKztcXHMobVsxLTVdXFxzbm90ZSlcXHNidWlsZC9pLC9cXGJtei0oW1xcdy1dezIsfSkvaV0sW01PREVMLFtWRU5ET1IsXCJNZWl6dVwiXSxbVFlQRSxNT0JJTEVdXSxbLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSopL2ksLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLC8oYXN1cyktPyhcXHcrKS9pLC8obWljcm9zb2Z0KTtcXHMobHVtaWFbXFxzXFx3XSspL2ksLyhsZW5vdm8pW19cXHMtXT8oW1xcdy1dKykvaSwvbGludXg7Lisoam9sbGEpOy9pLC9kcm9pZC4rO1xccyhvcHBvKVxccz8oW1xcd1xcc10rKVxcc2J1aWxkL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy8oYXJjaG9zKVxccyhnYW1lcGFkMj8pL2ksLyhocCkuKyh0b3VjaHBhZCg/IS4rdGFibGV0KXx0YWJsZXQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaSwvWztcXC9dXFxzPyhsZVtcXHNcXC1dK3BhbilbXFxzXFwtXSsoXFx3ezEsOX0pXFxzYnVpbGQvaSwvWztcXC9dXFxzPyh0cmluaXR5KVtcXC1cXHNdKih0XFxkezN9KVxcc2J1aWxkL2ksL1xcYihnaWdhc2V0KVtcXHNcXC1dKyhxXFx3ezEsOX0pXFxzYnVpbGQvaSwvXFxiKHZvZGFmb25lKVxccyhbXFx3XFxzXSspKD86XFwpfFxcc2J1aWxkKS9pXSxbVkVORE9SLE1PREVMLFtUWVBFLFRBQkxFVF1dLFsvXFxzKHN1cmZhY2VcXHNkdW8pXFxzL2ldLFtNT0RFTCxbVkVORE9SLFwiTWljcm9zb2Z0XCJdLFtUWVBFLFRBQkxFVF1dLFsvZHJvaWRcXHNbXFxkXFwuXSs7XFxzKGZwXFxkdT8pXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJGYWlycGhvbmVcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHModTMwNGFhKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiQVQmVFwiXSxbVFlQRSxNT0JJTEVdXSxbL3NpZS0oXFx3KikvaV0sW01PREVMLFtWRU5ET1IsXCJTaWVtZW5zXCJdLFtUWVBFLE1PQklMRV1dLFsvWztcXC9dXFxzPyhyY3RcXHcrKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiUkNBXCJdLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9cXHNdKHZlbnVlW1xcZFxcc117Miw3fSlcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkRlbGxcIl0sW1RZUEUsVEFCTEVUXV0sWy9bO1xcL11cXHM/KHEoPzptdnx0YSlcXHcrKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiVmVyaXpvblwiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccyg/OmJhcm5lc1smXFxzXStub2JsZVxcc3xibltydF0pKFtcXHdcXHNcXCtdKilcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkJhcm5lcyAmIE5vYmxlXCJdLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9dXFxzKHRtXFxkezN9XFx3KylcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIk51VmlzaW9uXCJdLFtUWVBFLFRBQkxFVF1dLFsvO1xccyhrODgpXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJaVEVcIl0sW1RZUEUsVEFCTEVUXV0sWy87XFxzKG54XFxkezN9ailcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIlpURVwiXSxbVFlQRSxNT0JJTEVdXSxbL1s7XFwvXVxccz8oZ2VuXFxkezN9KVxcc2J1aWxkLio0OWgvaV0sW01PREVMLFtWRU5ET1IsXCJTd2lzc1wiXSxbVFlQRSxNT0JJTEVdXSxbL1s7XFwvXVxccz8oenVyXFxkezN9KVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiU3dpc3NcIl0sW1RZUEUsVEFCTEVUXV0sWy9bO1xcL11cXHM/KCh6ZWtpKT90Yi4qXFxiKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiWmVraVwiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccyhbeXJdXFxkezJ9KVxcc2J1aWxkL2ksL1s7XFwvXVxccyhkcmFnb25bXFwtXFxzXSt0b3VjaFxcc3xkdCkoXFx3ezV9KVxcc2J1aWxkL2ldLFtbVkVORE9SLFwiRHJhZ29uIFRvdWNoXCJdLE1PREVMLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9dXFxzPyhucy0/XFx3ezAsOX0pXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJJbnNpZ25pYVwiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccz8oKG54YXxOZXh0KS0/XFx3ezAsOX0pXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJOZXh0Qm9va1wiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccz8oeHRyZW1lXFxfKT8odigxWzA0NV18MlswMTVdfFszNDY5XTB8N1swNV0pKVxcc2J1aWxkL2ldLFtbVkVORE9SLFwiVm9pY2VcIl0sTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy9bO1xcL11cXHM/KGx2dGVsXFwtKT8odjFbMTJdKVxcc2J1aWxkL2ldLFtbVkVORE9SLFwiTHZUZWxcIl0sTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy87XFxzKHBoLTEpXFxzL2ldLFtNT0RFTCxbVkVORE9SLFwiRXNzZW50aWFsXCJdLFtUWVBFLE1PQklMRV1dLFsvWztcXC9dXFxzPyh2KDEwMG1kfDcwMG5hfDcwMTF8OTE3ZykuKlxcYilcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkVudml6ZW5cIl0sW1RZUEUsVEFCTEVUXV0sWy9bO1xcL11cXHM/KHRyaW9bXFxzXFx3XFwtXFwuXSspXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJNYWNoU3BlZWRcIl0sW1RZUEUsVEFCTEVUXV0sWy9bO1xcL11cXHM/dHVfKDE0OTEpXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJSb3RvclwiXSxbVFlQRSxUQUJMRVRdXSxbLyhzaGllbGRbXFx3XFxzXSspXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJOdmlkaWFcIl0sW1RZUEUsVEFCTEVUXV0sWy8oc3ByaW50KVxccyhcXHcrKS9pXSxbVkVORE9SLE1PREVMLFtUWVBFLE1PQklMRV1dLFsvKGtpblxcLltvbmV0d117M30pL2ldLFtbTU9ERUwsL1xcLi9nLFwiIFwiXSxbVkVORE9SLFwiTWljcm9zb2Z0XCJdLFtUWVBFLE1PQklMRV1dLFsvZHJvaWRcXHNbXFxkXFwuXSs7XFxzKGNjNjY2Nj98ZXQ1WzE2XXxtY1syMzldWzIzXXg/fHZjOFswM114PylcXCkvaV0sW01PREVMLFtWRU5ET1IsXCJaZWJyYVwiXSxbVFlQRSxUQUJMRVRdXSxbL2Ryb2lkXFxzW1xcZFxcLl0rO1xccyhlYzMwfHBzMjB8dGNbMi04XVxcZFtreF0pXFwpL2ldLFtNT0RFTCxbVkVORE9SLFwiWmVicmFcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHMob3V5YSlcXHMvaSwvKG5pbnRlbmRvKVxccyhbd2lkczN1dGNoXSspL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsQ09OU09MRV1dLFsvZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiTnZpZGlhXCJdLFtUWVBFLENPTlNPTEVdXSxbLyhwbGF5c3RhdGlvblxcc1szNDVwb3J0YWJsZXZpXSspL2ldLFtNT0RFTCxbVkVORE9SLFwiU29ueVwiXSxbVFlQRSxDT05TT0xFXV0sWy9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KD8hO1xcc3hib3gpKVtcXHNcXCk7XS9pXSxbTU9ERUwsW1ZFTkRPUixcIk1pY3Jvc29mdFwiXSxbVFlQRSxDT05TT0xFXV0sWy9zbWFydC10di4rKHNhbXN1bmcpL2ldLFtWRU5ET1IsW1RZUEUsU01BUlRUVl1dLFsvaGJidHYuK21hcGxlOyhcXGQrKS9pXSxbW01PREVMLC9eLyxcIlNtYXJ0VFZcIl0sW1ZFTkRPUixcIlNhbXN1bmdcIl0sW1RZUEUsU01BUlRUVl1dLFsvKD86bGludXg7XFxzbmV0Y2FzdC4rc21hcnR0dnxsZ1xcc25ldGNhc3RcXC50di0yMDFcXGQpL2ldLFtbVkVORE9SLFwiTEdcIl0sW1RZUEUsU01BUlRUVl1dLFsvKGFwcGxlKVxccz90di9pXSxbVkVORE9SLFtNT0RFTCxcIkFwcGxlIFRWXCJdLFtUWVBFLFNNQVJUVFZdXSxbL2Nya2V5L2ldLFtbTU9ERUwsXCJDaHJvbWVjYXN0XCJdLFtWRU5ET1IsXCJHb29nbGVcIl0sW1RZUEUsU01BUlRUVl1dLFsvZHJvaWQuK2FmdChbXFx3XSkoXFxzYnVpbGRcXC98XFwpKS9pXSxbTU9ERUwsW1ZFTkRPUixcIkFtYXpvblwiXSxbVFlQRSxTTUFSVFRWXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW01PREVMLFtWRU5ET1IsXCJTaGFycFwiXSxbVFlQRSxTTUFSVFRWXV0sWy9oYmJ0dlxcL1xcZCtcXC5cXGQrXFwuXFxkK1xccytcXChbXFx3XFxzXSo7XFxzKihcXHdbXjtdKik7KFteO10qKS9pXSxbW1ZFTkRPUix1dGlsLnRyaW1dLFtNT0RFTCx1dGlsLnRyaW1dLFtUWVBFLFNNQVJUVFZdXSxbL1tcXHNcXC9cXChdKGFuZHJvaWRcXHN8c21hcnRbLVxcc10/fG9wZXJhXFxzKXR2WztcXClcXHNdL2ldLFtbVFlQRSxTTUFSVFRWXV0sWy8oKHBlYmJsZSkpYXBwXFwvW1xcZFxcLl0rXFxzL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsV0VBUkFCTEVdXSxbL2Ryb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkdvb2dsZVwiXSxbVFlQRSxXRUFSQUJMRV1dLFsvZHJvaWRcXHNbXFxkXFwuXSs7XFxzKHd0NjM/MHsyLDN9KVxcKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlplYnJhXCJdLFtUWVBFLFdFQVJBQkxFXV0sWy8odGVzbGEpKD86XFxzcXRjYXJicm93c2VyfFxcLzIwWzEyXVxcZFxcLltcXHdcXC4tXSspL2ldLFtWRU5ET1IsW1RZUEUsRU1CRURERURdXSxbL2Ryb2lkIC4rPzsgKFteO10rPykoPzogYnVpbGR8XFwpIGFwcGxld2Via2l0KS4rPyBtb2JpbGUgc2FmYXJpL2ldLFtNT0RFTCxbVFlQRSxNT0JJTEVdXSxbL2Ryb2lkIC4rPztcXHMoW147XSs/KSg/OiBidWlsZHxcXCkgYXBwbGV3ZWJraXQpLis/KD8hIG1vYmlsZSkgc2FmYXJpL2ldLFtNT0RFTCxbVFlQRSxUQUJMRVRdXSxbL1xccyh0YWJsZXR8dGFiKVs7XFwvXS9pLC9cXHMobW9iaWxlKSg/Ols7XFwvXXxcXHNzYWZhcmkpL2ldLFtbVFlQRSx1dGlsLmxvd2VyaXplXV0sWy8oYW5kcm9pZFtcXHdcXC5cXHNcXC1dezAsOX0pOy4rYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJHZW5lcmljXCJdXSxbLyhwaG9uZSkvaV0sW1tUWVBFLE1PQklMRV1dXSxlbmdpbmU6W1svd2luZG93cy4rXFxzZWRnZVxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiRWRnZUhUTUxcIl1dLFsvd2Via2l0XFwvNTM3XFwuMzYuK2Nocm9tZVxcLyg/ITI3KShbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiQmxpbmtcIl1dLFsvKHByZXN0bylcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbXxnb2FubmEpXFwvKFtcXHdcXC5dKykvaSwvZWtpb2goZmxvdylcXC8oW1xcd1xcLl0rKS9pLC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvcnZcXDooW1xcd1xcLl17MSw5fSlcXGIuKyhnZWNrbykvaV0sW1ZFUlNJT04sTkFNRV1dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW05BTUUsVkVSU0lPTl0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqKVtcXHNcXC9dPyhbXFxkXFwuXFxzXFx3XSopL2ksLyh3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpKD8hLit4Ym94KS9pXSxbTkFNRSxbVkVSU0lPTixtYXBwZXIuc3RyLG1hcHMub3Mud2luZG93cy52ZXJzaW9uXV0sWy8od2luKD89M3w5fG4pfHdpblxcczl4XFxzKShbbnRcXGRcXC5dKykvaV0sW1tOQU1FLFwiV2luZG93c1wiXSxbVkVSU0lPTixtYXBwZXIuc3RyLG1hcHMub3Mud2luZG93cy52ZXJzaW9uXV0sWy9pcFtob25lYWRdezIsNH1cXGIoPzouKm9zXFxzKFtcXHddKylcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaSwvY2ZuZXR3b3JrXFwvLitkYXJ3aW4vaV0sW1tWRVJTSU9OLC9fL2csXCIuXCJdLFtOQU1FLFwiaU9TXCJdXSxbLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXSopL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKSg/IS4raGFpa3UpL2ldLFtbTkFNRSxcIk1hYyBPU1wiXSxbVkVSU0lPTiwvXy9nLFwiLlwiXV0sWy8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298c2FpbGZpc2h8Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKikvaSwvKGJsYWNrYmVycnkpXFx3KlxcLyhbXFx3XFwuXSopL2ksLyh0aXplbnxrYWlvcylbXFwvXFxzXShbXFx3XFwuXSspL2ksL1xcKChzZXJpZXM0MCk7L2ldLFtOQU1FLFZFUlNJT05dLFsvXFwoYmIoMTApOy9pXSxbVkVSU0lPTixbTkFNRSxcIkJsYWNrQmVycnlcIl1dLFsvKD86c3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89Oyl8c2VyaWVzNjApW1xcL1xccy1dPyhbXFx3XFwuXSopL2ldLFtWRVJTSU9OLFtOQU1FLFwiU3ltYmlhblwiXV0sWy9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pXSxbW05BTUUsXCJGaXJlZm94IE9TXCJdXSxbL3dlYjBzOy4rcnQodHYpL2ksL1xcYig/OmhwKT93b3MoPzpicm93c2VyKT9cXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIndlYk9TXCJdXSxbL2Nya2V5XFwvKFtcXGRcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJDaHJvbWVjYXN0XCJdXSxbLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2ldLFtbTkFNRSxcIkNocm9taXVtIE9TXCJdLFZFUlNJT05dLFsvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczM0NXBvcnRhYmxldnVjaF0rKS9pLC8oeGJveCk7XFxzK3hib3hcXHMoW15cXCk7XSspL2ksLyhtaW50KVtcXC9cXHNcXChcXCldPyhcXHcqKS9pLC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxzdXNlfG9wZW5zdXNlfGdlbnRvb3xhcmNoKD89XFxzbGludXgpfHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXN8cmFzcGJpYW4pKD86XFxzZ251XFwvbGludXgpPyg/Olxcc2xpbnV4KT9bXFwvXFxzLV0/KD8hY2hyb218cGFja2FnZSkoW1xcd1xcLi1dKikvaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSopL2ksLyhnbnUpXFxzPyhbXFx3XFwuXSopL2ksL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KD8hYW1kfFtpeDM0Nl17MSwyfTg2KShbXFx3XFwuXSopL2ksLyhoYWlrdSlcXHMoXFx3KykvaV0sW05BTUUsVkVSU0lPTl0sWy8oc3Vub3MpXFxzPyhbXFx3XFwuXFxkXSopL2ldLFtbTkFNRSxcIlNvbGFyaXNcIl0sVkVSU0lPTl0sWy8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKikvaSwvKGFpeClcXHMoKFxcZCkoPz1cXC58XFwpfFxccylbXFx3XFwuXSkqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXN8ZnVjaHNpYSkvaSwvKHVuaXgpXFxzPyhbXFx3XFwuXSopL2ldLFtOQU1FLFZFUlNJT05dXX07dmFyIFVBUGFyc2VyPWZ1bmN0aW9uKHVhLGV4dGVuc2lvbnMpe2lmKHR5cGVvZiB1YT09PVwib2JqZWN0XCIpe2V4dGVuc2lvbnM9dWE7dWE9dW5kZWZpbmVkfWlmKCEodGhpcyBpbnN0YW5jZW9mIFVBUGFyc2VyKSl7cmV0dXJuIG5ldyBVQVBhcnNlcih1YSxleHRlbnNpb25zKS5nZXRSZXN1bHQoKX12YXIgX3VhPXVhfHwodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCImJndpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50P3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50OkVNUFRZKTt2YXIgX3JneG1hcD1leHRlbnNpb25zP3V0aWwuZXh0ZW5kKHJlZ2V4ZXMsZXh0ZW5zaW9ucyk6cmVnZXhlczt0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgX2Jyb3dzZXI9e25hbWU6dW5kZWZpbmVkLHZlcnNpb246dW5kZWZpbmVkfTttYXBwZXIucmd4LmNhbGwoX2Jyb3dzZXIsX3VhLF9yZ3htYXAuYnJvd3Nlcik7X2Jyb3dzZXIubWFqb3I9dXRpbC5tYWpvcihfYnJvd3Nlci52ZXJzaW9uKTtyZXR1cm4gX2Jyb3dzZXJ9O3RoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7dmFyIF9jcHU9e2FyY2hpdGVjdHVyZTp1bmRlZmluZWR9O21hcHBlci5yZ3guY2FsbChfY3B1LF91YSxfcmd4bWFwLmNwdSk7cmV0dXJuIF9jcHV9O3RoaXMuZ2V0RGV2aWNlPWZ1bmN0aW9uKCl7dmFyIF9kZXZpY2U9e3ZlbmRvcjp1bmRlZmluZWQsbW9kZWw6dW5kZWZpbmVkLHR5cGU6dW5kZWZpbmVkfTttYXBwZXIucmd4LmNhbGwoX2RldmljZSxfdWEsX3JneG1hcC5kZXZpY2UpO3JldHVybiBfZGV2aWNlfTt0aGlzLmdldEVuZ2luZT1mdW5jdGlvbigpe3ZhciBfZW5naW5lPXtuYW1lOnVuZGVmaW5lZCx2ZXJzaW9uOnVuZGVmaW5lZH07bWFwcGVyLnJneC5jYWxsKF9lbmdpbmUsX3VhLF9yZ3htYXAuZW5naW5lKTtyZXR1cm4gX2VuZ2luZX07dGhpcy5nZXRPUz1mdW5jdGlvbigpe3ZhciBfb3M9e25hbWU6dW5kZWZpbmVkLHZlcnNpb246dW5kZWZpbmVkfTttYXBwZXIucmd4LmNhbGwoX29zLF91YSxfcmd4bWFwLm9zKTtyZXR1cm4gX29zfTt0aGlzLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybnt1YTp0aGlzLmdldFVBKCksYnJvd3Nlcjp0aGlzLmdldEJyb3dzZXIoKSxlbmdpbmU6dGhpcy5nZXRFbmdpbmUoKSxvczp0aGlzLmdldE9TKCksZGV2aWNlOnRoaXMuZ2V0RGV2aWNlKCksY3B1OnRoaXMuZ2V0Q1BVKCl9fTt0aGlzLmdldFVBPWZ1bmN0aW9uKCl7cmV0dXJuIF91YX07dGhpcy5zZXRVQT1mdW5jdGlvbih1YSl7X3VhPXR5cGVvZiB1YT09PVNUUl9UWVBFJiZ1YS5sZW5ndGg+VUFfTUFYX0xFTkdUSD91dGlsLnRyaW0odWEsVUFfTUFYX0xFTkdUSCk6dWE7cmV0dXJuIHRoaXN9O3RoaXMuc2V0VUEoX3VhKTtyZXR1cm4gdGhpc307VUFQYXJzZXIuVkVSU0lPTj1MSUJWRVJTSU9OO1VBUGFyc2VyLkJST1dTRVI9e05BTUU6TkFNRSxNQUpPUjpNQUpPUixWRVJTSU9OOlZFUlNJT059O1VBUGFyc2VyLkNQVT17QVJDSElURUNUVVJFOkFSQ0hJVEVDVFVSRX07VUFQYXJzZXIuREVWSUNFPXtNT0RFTDpNT0RFTCxWRU5ET1I6VkVORE9SLFRZUEU6VFlQRSxDT05TT0xFOkNPTlNPTEUsTU9CSUxFOk1PQklMRSxTTUFSVFRWOlNNQVJUVFYsVEFCTEVUOlRBQkxFVCxXRUFSQUJMRTpXRUFSQUJMRSxFTUJFRERFRDpFTUJFRERFRH07VUFQYXJzZXIuRU5HSU5FPXtOQU1FOk5BTUUsVkVSU0lPTjpWRVJTSU9OfTtVQVBhcnNlci5PUz17TkFNRTpOQU1FLFZFUlNJT046VkVSU0lPTn07aWYodHlwZW9mIGV4cG9ydHMhPT1VTkRFRl9UWVBFKXtpZih0eXBlb2YgbW9kdWxlIT09VU5ERUZfVFlQRSYmbW9kdWxlLmV4cG9ydHMpe2V4cG9ydHM9bW9kdWxlLmV4cG9ydHM9VUFQYXJzZXJ9ZXhwb3J0cy5VQVBhcnNlcj1VQVBhcnNlcn1lbHNle2lmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShmdW5jdGlvbigpe3JldHVybiBVQVBhcnNlcn0pfWVsc2UgaWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe3dpbmRvdy5VQVBhcnNlcj1VQVBhcnNlcn19dmFyICQ9dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCImJih3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG8pO2lmKCQmJiEkLnVhKXt2YXIgcGFyc2VyPW5ldyBVQVBhcnNlcjskLnVhPXBhcnNlci5nZXRSZXN1bHQoKTskLnVhLmdldD1mdW5jdGlvbigpe3JldHVybiBwYXJzZXIuZ2V0VUEoKX07JC51YS5zZXQ9ZnVuY3Rpb24odWFzdHJpbmcpe3BhcnNlci5zZXRVQSh1YXN0cmluZyk7dmFyIHJlc3VsdD1wYXJzZXIuZ2V0UmVzdWx0KCk7Zm9yKHZhciBwcm9wIGluIHJlc3VsdCl7JC51YVtwcm9wXT1yZXN1bHRbcHJvcF19fX19KSh0eXBlb2Ygd2luZG93PT09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==