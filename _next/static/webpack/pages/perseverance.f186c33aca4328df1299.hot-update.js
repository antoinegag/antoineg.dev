webpackHotUpdate_N_E("pages/perseverance",{

/***/ "./node_modules/react-countdown/dist/index.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-countdown/dist/index.es.js ***!
  \*******************************************************/
/*! exports provided: default, calcTimeDelta, formatTimeDelta, zeroPad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTimeDelta", function() { return calcTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeDelta", function() { return formatTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroPad", function() { return zeroPad; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : '';
  var suffix = match ? match[3] : '';
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : (_toConsumableArray(Array(length)).map(function () {
    return '0';
  }).join('') + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$now = options.now,
      now = _options$now === void 0 ? Date.now : _options$now,
      _options$precision = options.precision,
      precision = _options$precision === void 0 ? 0 : _options$precision,
      controlled = options.controlled,
      _options$offsetTime = options.offsetTime,
      offsetTime = _options$offsetTime === void 0 ? 0 : _options$offsetTime,
      overtime = options.overtime;
  var startTimestamp;

  if (typeof date === 'string') {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }

  if (!controlled) {
    startTimestamp += offsetTime;
  }

  var timeLeft = controlled ? startTimestamp : startTimestamp - now();
  var clampedPrecision = Math.min(20, Math.max(0, precision));
  var total = Math.round(parseFloat(((overtime ? timeLeft : Math.max(0, timeLeft)) / 1000).toFixed(clampedPrecision)) * 1000);
  var seconds = Math.abs(total) / 1000;
  return {
    total: total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1000).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(timeDelta, options) {
  var days = timeDelta.days,
      hours = timeDelta.hours,
      minutes = timeDelta.minutes,
      seconds = timeDelta.seconds;

  var _Object$assign = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), options),
      daysInHours = _Object$assign.daysInHours,
      zeroPadTime = _Object$assign.zeroPadTime,
      _Object$assign$zeroPa = _Object$assign.zeroPadDays,
      zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;

  var zeroPadTimeLength = Math.min(2, zeroPadTime);
  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, zeroPadTimeLength);
  return {
    days: daysInHours ? '' : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, zeroPadTimeLength),
    seconds: zeroPad(seconds, zeroPadTimeLength)
  };
}

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  var _super = _createSuper(Countdown);

  function Countdown() {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _super.apply(this, arguments);
    _this.state = {
      count: _this.props.count || 3
    };

    _this.startCountdown = function () {
      _this.interval = window.setInterval(function () {
        var count = _this.state.count - 1;

        if (count === 0) {
          _this.stopCountdown();

          _this.props.onComplete && _this.props.onComplete();
        } else {
          _this.setState(function (prevState) {
            return {
              count: prevState.count - 1
            };
          });
        }
      }, 1000);
    };

    _this.stopCountdown = function () {
      clearInterval(_this.interval);
    };

    _this.addTime = function (seconds) {
      _this.stopCountdown();

      _this.setState(function (prevState) {
        return {
          count: prevState.count + seconds
        };
      }, _this.startCountdown);
    };

    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountdown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(this.props.children, {
        count: this.state.count
      }) : null;
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
Countdown.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["element"],
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
};

var Countdown$1 = function (_React$Component) {
  _inherits(Countdown$1, _React$Component);

  var _super = _createSuper(Countdown$1);

  function Countdown$1(props) {
    var _this;

    _classCallCheck(this, Countdown$1);

    _this = _super.call(this, props);
    _this.mounted = false;
    _this.initialTimestamp = _this.calcOffsetStartTimestamp();
    _this.offsetStartTimestamp = _this.props.autoStart ? 0 : _this.initialTimestamp;
    _this.offsetTime = 0;
    _this.legacyMode = false;
    _this.legacyCountdownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

    _this.tick = function () {
      var timeDelta = _this.calcTimeDelta();

      var callback = timeDelta.completed && !_this.props.overtime ? undefined : _this.props.onTick;

      _this.setTimeDeltaState(timeDelta, undefined, callback);
    };

    _this.start = function () {
      if (_this.isStarted()) return;
      var prevOffsetStartTimestamp = _this.offsetStartTimestamp;
      _this.offsetStartTimestamp = 0;
      _this.offsetTime += prevOffsetStartTimestamp ? _this.calcOffsetStartTimestamp() - prevOffsetStartTimestamp : 0;

      var timeDelta = _this.calcTimeDelta();

      _this.setTimeDeltaState(timeDelta, "STARTED", _this.props.onStart);

      if (!_this.props.controlled && (!timeDelta.completed || _this.props.overtime)) {
        _this.clearTimer();

        _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
      }
    };

    _this.pause = function () {
      if (_this.isPaused()) return;

      _this.clearTimer();

      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();

      _this.setTimeDeltaState(_this.state.timeDelta, "PAUSED", _this.props.onPause);
    };

    _this.stop = function () {
      if (_this.isStopped()) return;

      _this.clearTimer();

      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();
      _this.offsetTime = _this.offsetStartTimestamp - _this.initialTimestamp;

      _this.setTimeDeltaState(_this.calcTimeDelta(), "STOPPED", _this.props.onStop);
    };

    _this.isStarted = function () {
      return _this.isStatus("STARTED");
    };

    _this.isPaused = function () {
      return _this.isStatus("PAUSED");
    };

    _this.isStopped = function () {
      return _this.isStatus("STOPPED");
    };

    _this.isCompleted = function () {
      return _this.isStatus("COMPLETED");
    };

    _this.handleOnComplete = function (timeDelta) {
      if (_this.props.onComplete) _this.props.onComplete(timeDelta);
    };

    if (props.date) {
      var timeDelta = _this.calcTimeDelta();

      _this.state = {
        timeDelta: timeDelta,
        status: timeDelta.completed ? "COMPLETED" : "STOPPED"
      };
    } else {
      _this.legacyMode = true;
    }

    return _this;
  }

  _createClass(Countdown$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = true;
      if (this.props.onMount) this.props.onMount(this.calcTimeDelta());
      if (this.props.autoStart) this.start();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.legacyMode) {
        return;
      }

      if (!this.shallowCompare(this.props, prevProps)) {
        if (this.props.date !== prevProps.date) {
          this.initialTimestamp = this.calcOffsetStartTimestamp();
          this.offsetStartTimestamp = this.initialTimestamp;
          this.offsetTime = 0;
        }

        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = false;
      this.clearTimer();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$1() {
      var _this$props = this.props,
          date = _this$props.date,
          now = _this$props.now,
          precision = _this$props.precision,
          controlled = _this$props.controlled,
          overtime = _this$props.overtime;
      return calcTimeDelta(date, {
        now: now,
        precision: precision,
        controlled: controlled,
        offsetTime: this.offsetTime,
        overtime: overtime
      });
    }
  }, {
    key: "calcOffsetStartTimestamp",
    value: function calcOffsetStartTimestamp() {
      return Date.now();
    }
  }, {
    key: "addTime",
    value: function addTime(seconds) {
      this.legacyCountdownRef.current.addTime(seconds);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "isStatus",
    value: function isStatus(status) {
      return this.state.status === status;
    }
  }, {
    key: "shallowCompare",
    value: function shallowCompare(objA, objB) {
      var keysA = Object.keys(objA);
      return keysA.length === Object.keys(objB).length && !keysA.some(function (keyA) {
        var valueA = objA[keyA];
        var valueB = objB[keyA];
        return !objB.hasOwnProperty(keyA) || !(valueA === valueB || valueA !== valueA && valueB !== valueB);
      });
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(timeDelta, status, callback) {
      var _this2 = this;

      if (!this.mounted) return;
      var completedCallback;

      if (!this.state.timeDelta.completed && timeDelta.completed) {
        if (!this.props.overtime) this.clearTimer();
        completedCallback = this.handleOnComplete;
      }

      var onDone = function onDone() {
        if (callback) callback(_this2.state.timeDelta);
        if (completedCallback) completedCallback(_this2.state.timeDelta);
      };

      return this.setState(function (prevState) {
        var newStatus = status || prevState.status;

        if (timeDelta.completed && !_this2.props.overtime) {
          newStatus = "COMPLETED";
        } else if (!status && newStatus === "COMPLETED") {
          newStatus = "STOPPED";
        }

        return {
          timeDelta: timeDelta,
          status: newStatus
        };
      }, onDone);
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        stop: this.stop,
        isStarted: this.isStarted,
        isPaused: this.isPaused,
        isStopped: this.isStopped,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props,
          daysInHours = _this$props2.daysInHours,
          zeroPadTime = _this$props2.zeroPadTime,
          zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign(Object.assign({}, timeDelta), {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours: daysInHours,
          zeroPadTime: zeroPadTime,
          zeroPadDays: zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.legacyMode) {
        var _this$props3 = this.props,
            count = _this$props3.count,
            _children = _this$props3.children,
            onComplete = _this$props3.onComplete;
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Countdown, {
          ref: this.legacyCountdownRef,
          count: count,
          onComplete: onComplete
        }, _children);
      }

      var _this$props4 = this.props,
          className = _this$props4.className,
          overtime = _this$props4.overtime,
          children = _this$props4.children,
          renderer = _this$props4.renderer;
      var renderProps = this.getRenderProps();

      if (renderer) {
        return renderer(renderProps);
      }

      if (children && this.state.timeDelta.completed && !overtime) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(children, {
          countdown: renderProps
        });
      }

      var _renderProps$formatte = renderProps.formatted,
          days = _renderProps$formatte.days,
          hours = _renderProps$formatte.hours,
          minutes = _renderProps$formatte.minutes,
          seconds = _renderProps$formatte.seconds;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: className
      }, renderProps.total < 0 ? '-' : '', days, days ? ':' : '', hours, ":", minutes, ":", seconds);
    }
  }]);

  return Countdown$1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
Countdown$1.defaultProps = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), {
  controlled: false,
  intervalDelay: 1000,
  precision: 0,
  autoStart: true
});
Countdown$1.propTypes = {
  date: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["instanceOf"])(Date), prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]]),
  daysInHours: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  zeroPadTime: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  zeroPadDays: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  controlled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  precision: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  autoStart: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  overtime: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["element"],
  renderer: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  now: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onStop: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onTick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown$1);



/***/ }),

/***/ "./pages/perseverance.tsx":
/*!********************************!*\
  !*** ./pages/perseverance.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _components_3D_Rover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/3D/Rover */ "./components/3D/Rover/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\antoine\\Development\\antoineg.dev\\pages\\perseverance.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Perseverance = function Perseverance() {
  var date = Date.UTC(2021, 2, 18, 8, 55, 0);
  return __jsx("div", {
    className: "bg-gray-800 w-full min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-center pt-12 absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl lg:text-8xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Perseverance landing countdown"), __jsx("h1", {
    className: "text-white text-3xl lg:text-9xl absolute w-full text-center pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx(_components_3D_Rover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "min-h-screen bg-gray-800 top-0 z-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

_c = Perseverance;
/* harmony default export */ __webpack_exports__["default"] = (Perseverance);

var _c;

$RefreshReg$(_c, "Perseverance");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNvdW50ZG93bi9kaXN0L2luZGV4LmVzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wZXJzZXZlcmFuY2UudHN4Il0sIm5hbWVzIjpbIlBlcnNldmVyYW5jZSIsImRhdGUiLCJEYXRlIiwiVVRDIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRTtBQUNjOztBQUV4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUNBQW1DLDBEQUFZO0FBQy9DO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQywrQ0FBUztBQUNYO0FBQ0EsU0FBUyxpREFBTTtBQUNmLFlBQVksa0RBQU87QUFDbkIsY0FBYywrQ0FBSTtBQUNsQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFTOztBQUV4QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwwREFBWTtBQUMzQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyREFBYTtBQUMxQjtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsK0NBQVM7QUFDWCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxRQUFRLDREQUFTLEVBQUUsNkRBQVUsUUFBUSxpREFBTSxFQUFFLGlEQUFNO0FBQ25ELGVBQWUsK0NBQUk7QUFDbkIsZUFBZSxpREFBTTtBQUNyQixlQUFlLGlEQUFNO0FBQ3JCLGNBQWMsK0NBQUk7QUFDbEIsaUJBQWlCLGlEQUFNO0FBQ3ZCLGFBQWEsaURBQU07QUFDbkIsYUFBYSwrQ0FBSTtBQUNqQixZQUFZLCtDQUFJO0FBQ2hCLGFBQWEsaURBQU07QUFDbkIsWUFBWSxrREFBTztBQUNuQixZQUFZLCtDQUFJO0FBQ2hCLE9BQU8sK0NBQUk7QUFDWCxXQUFXLCtDQUFJO0FBQ2YsV0FBVywrQ0FBSTtBQUNmLFdBQVcsK0NBQUk7QUFDZixVQUFVLCtDQUFJO0FBQ2QsVUFBVSwrQ0FBSTtBQUNkLGNBQWMsK0NBQUk7QUFDbEI7O0FBRWUsMEVBQVcsRUFBQztBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BtQm5EO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsRUFBNkIsQ0FBN0IsQ0FBYjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsa0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBVyxRQUFJLEVBQUVGLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREYsRUFTRSxNQUFDLDREQUFEO0FBQU8sYUFBUyxFQUFDLDJDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERjtBQWFELENBaEJEOztLQUFNRCxZO0FBa0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzZXZlcmFuY2UuZjE4NmMzM2FjYTQzMjhkZjEyOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb25lRWxlbWVudCwgQ29tcG9uZW50LCBjcmVhdGVSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBudW1iZXIsIGVsZW1lbnQsIGZ1bmMsIG9uZU9mVHlwZSwgaW5zdGFuY2VPZiwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIHplcm9QYWQodmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcbiAgdmFyIHN0clZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuIHN0clZhbHVlO1xuICB2YXIgbWF0Y2ggPSBzdHJWYWx1ZS5tYXRjaCgvKC4qPykoWzAtOV0rKSguKikvKTtcbiAgdmFyIHByZWZpeCA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgdmFyIHN1ZmZpeCA9IG1hdGNoID8gbWF0Y2hbM10gOiAnJztcbiAgdmFyIHN0ck5vID0gbWF0Y2ggPyBtYXRjaFsyXSA6IHN0clZhbHVlO1xuICB2YXIgcGFkZGVkTm8gPSBzdHJOby5sZW5ndGggPj0gbGVuZ3RoID8gc3RyTm8gOiAoX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5KGxlbmd0aCkpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcwJztcbiAgfSkuam9pbignJykgKyBzdHJObykuc2xpY2UobGVuZ3RoICogLTEpO1xuICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4KS5jb25jYXQocGFkZGVkTm8pLmNvbmNhdChzdWZmaXgpO1xufVxudmFyIHRpbWVEZWx0YUZvcm1hdE9wdGlvbnNEZWZhdWx0cyA9IHtcbiAgZGF5c0luSG91cnM6IGZhbHNlLFxuICB6ZXJvUGFkVGltZTogMlxufTtcbmZ1bmN0aW9uIGNhbGNUaW1lRGVsdGEoZGF0ZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfb3B0aW9ucyRub3cgPSBvcHRpb25zLm5vdyxcbiAgICAgIG5vdyA9IF9vcHRpb25zJG5vdyA9PT0gdm9pZCAwID8gRGF0ZS5ub3cgOiBfb3B0aW9ucyRub3csXG4gICAgICBfb3B0aW9ucyRwcmVjaXNpb24gPSBvcHRpb25zLnByZWNpc2lvbixcbiAgICAgIHByZWNpc2lvbiA9IF9vcHRpb25zJHByZWNpc2lvbiA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHByZWNpc2lvbixcbiAgICAgIGNvbnRyb2xsZWQgPSBvcHRpb25zLmNvbnRyb2xsZWQsXG4gICAgICBfb3B0aW9ucyRvZmZzZXRUaW1lID0gb3B0aW9ucy5vZmZzZXRUaW1lLFxuICAgICAgb2Zmc2V0VGltZSA9IF9vcHRpb25zJG9mZnNldFRpbWUgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRvZmZzZXRUaW1lLFxuICAgICAgb3ZlcnRpbWUgPSBvcHRpb25zLm92ZXJ0aW1lO1xuICB2YXIgc3RhcnRUaW1lc3RhbXA7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgIHN0YXJ0VGltZXN0YW1wID0gbmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpO1xuICB9IGVsc2UgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgc3RhcnRUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydFRpbWVzdGFtcCA9IGRhdGU7XG4gIH1cblxuICBpZiAoIWNvbnRyb2xsZWQpIHtcbiAgICBzdGFydFRpbWVzdGFtcCArPSBvZmZzZXRUaW1lO1xuICB9XG5cbiAgdmFyIHRpbWVMZWZ0ID0gY29udHJvbGxlZCA/IHN0YXJ0VGltZXN0YW1wIDogc3RhcnRUaW1lc3RhbXAgLSBub3coKTtcbiAgdmFyIGNsYW1wZWRQcmVjaXNpb24gPSBNYXRoLm1pbigyMCwgTWF0aC5tYXgoMCwgcHJlY2lzaW9uKSk7XG4gIHZhciB0b3RhbCA9IE1hdGgucm91bmQocGFyc2VGbG9hdCgoKG92ZXJ0aW1lID8gdGltZUxlZnQgOiBNYXRoLm1heCgwLCB0aW1lTGVmdCkpIC8gMTAwMCkudG9GaXhlZChjbGFtcGVkUHJlY2lzaW9uKSkgKiAxMDAwKTtcbiAgdmFyIHNlY29uZHMgPSBNYXRoLmFicyh0b3RhbCkgLyAxMDAwO1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiB0b3RhbCxcbiAgICBkYXlzOiBNYXRoLmZsb29yKHNlY29uZHMgLyAoMzYwMCAqIDI0KSksXG4gICAgaG91cnM6IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDAgJSAyNCksXG4gICAgbWludXRlczogTWF0aC5mbG9vcihzZWNvbmRzIC8gNjAgJSA2MCksXG4gICAgc2Vjb25kczogTWF0aC5mbG9vcihzZWNvbmRzICUgNjApLFxuICAgIG1pbGxpc2Vjb25kczogTnVtYmVyKChzZWNvbmRzICUgMSAqIDEwMDApLnRvRml4ZWQoKSksXG4gICAgY29tcGxldGVkOiB0b3RhbCA8PSAwXG4gIH07XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lRGVsdGEodGltZURlbHRhLCBvcHRpb25zKSB7XG4gIHZhciBkYXlzID0gdGltZURlbHRhLmRheXMsXG4gICAgICBob3VycyA9IHRpbWVEZWx0YS5ob3VycyxcbiAgICAgIG1pbnV0ZXMgPSB0aW1lRGVsdGEubWludXRlcyxcbiAgICAgIHNlY29uZHMgPSB0aW1lRGVsdGEuc2Vjb25kcztcblxuICB2YXIgX09iamVjdCRhc3NpZ24gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRpbWVEZWx0YUZvcm1hdE9wdGlvbnNEZWZhdWx0cyksIG9wdGlvbnMpLFxuICAgICAgZGF5c0luSG91cnMgPSBfT2JqZWN0JGFzc2lnbi5kYXlzSW5Ib3VycyxcbiAgICAgIHplcm9QYWRUaW1lID0gX09iamVjdCRhc3NpZ24uemVyb1BhZFRpbWUsXG4gICAgICBfT2JqZWN0JGFzc2lnbiR6ZXJvUGEgPSBfT2JqZWN0JGFzc2lnbi56ZXJvUGFkRGF5cyxcbiAgICAgIHplcm9QYWREYXlzID0gX09iamVjdCRhc3NpZ24kemVyb1BhID09PSB2b2lkIDAgPyB6ZXJvUGFkVGltZSA6IF9PYmplY3QkYXNzaWduJHplcm9QYTtcblxuICB2YXIgemVyb1BhZFRpbWVMZW5ndGggPSBNYXRoLm1pbigyLCB6ZXJvUGFkVGltZSk7XG4gIHZhciBmb3JtYXR0ZWRIb3VycyA9IGRheXNJbkhvdXJzID8gemVyb1BhZChob3VycyArIGRheXMgKiAyNCwgemVyb1BhZFRpbWUpIDogemVyb1BhZChob3VycywgemVyb1BhZFRpbWVMZW5ndGgpO1xuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXNJbkhvdXJzID8gJycgOiB6ZXJvUGFkKGRheXMsIHplcm9QYWREYXlzKSxcbiAgICBob3VyczogZm9ybWF0dGVkSG91cnMsXG4gICAgbWludXRlczogemVyb1BhZChtaW51dGVzLCB6ZXJvUGFkVGltZUxlbmd0aCksXG4gICAgc2Vjb25kczogemVyb1BhZChzZWNvbmRzLCB6ZXJvUGFkVGltZUxlbmd0aClcbiAgfTtcbn1cblxudmFyIENvdW50ZG93biA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb3VudGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ291bnRkb3duKTtcblxuICBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvdW50ZG93bik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY291bnQ6IF90aGlzLnByb3BzLmNvdW50IHx8IDNcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhcnRDb3VudGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb3VudCA9IF90aGlzLnN0YXRlLmNvdW50IC0gMTtcblxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICBfdGhpcy5zdG9wQ291bnRkb3duKCk7XG5cbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNvbXBsZXRlICYmIF90aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50IC0gMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0b3BDb3VudGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKF90aGlzLmludGVydmFsKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWRkVGltZSA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7XG4gICAgICBfdGhpcy5zdG9wQ291bnRkb3duKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgc2Vjb25kc1xuICAgICAgICB9O1xuICAgICAgfSwgX3RoaXMuc3RhcnRDb3VudGRvd24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ291bnRkb3duLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gPyBjbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xuICAgICAgICBjb3VudDogdGhpcy5zdGF0ZS5jb3VudFxuICAgICAgfSkgOiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb3VudGRvd247XG59KENvbXBvbmVudCk7XG5Db3VudGRvd24ucHJvcFR5cGVzID0ge1xuICBjb3VudDogbnVtYmVyLFxuICBjaGlsZHJlbjogZWxlbWVudCxcbiAgb25Db21wbGV0ZTogZnVuY1xufTtcblxudmFyIENvdW50ZG93biQxID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvdW50ZG93biQxLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENvdW50ZG93biQxKTtcblxuICBmdW5jdGlvbiBDb3VudGRvd24kMShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3VudGRvd24kMSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgX3RoaXMuaW5pdGlhbFRpbWVzdGFtcCA9IF90aGlzLmNhbGNPZmZzZXRTdGFydFRpbWVzdGFtcCgpO1xuICAgIF90aGlzLm9mZnNldFN0YXJ0VGltZXN0YW1wID0gX3RoaXMucHJvcHMuYXV0b1N0YXJ0ID8gMCA6IF90aGlzLmluaXRpYWxUaW1lc3RhbXA7XG4gICAgX3RoaXMub2Zmc2V0VGltZSA9IDA7XG4gICAgX3RoaXMubGVnYWN5TW9kZSA9IGZhbHNlO1xuICAgIF90aGlzLmxlZ2FjeUNvdW50ZG93blJlZiA9IGNyZWF0ZVJlZigpO1xuXG4gICAgX3RoaXMudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lRGVsdGEgPSBfdGhpcy5jYWxjVGltZURlbHRhKCk7XG5cbiAgICAgIHZhciBjYWxsYmFjayA9IHRpbWVEZWx0YS5jb21wbGV0ZWQgJiYgIV90aGlzLnByb3BzLm92ZXJ0aW1lID8gdW5kZWZpbmVkIDogX3RoaXMucHJvcHMub25UaWNrO1xuXG4gICAgICBfdGhpcy5zZXRUaW1lRGVsdGFTdGF0ZSh0aW1lRGVsdGEsIHVuZGVmaW5lZCwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5pc1N0YXJ0ZWQoKSkgcmV0dXJuO1xuICAgICAgdmFyIHByZXZPZmZzZXRTdGFydFRpbWVzdGFtcCA9IF90aGlzLm9mZnNldFN0YXJ0VGltZXN0YW1wO1xuICAgICAgX3RoaXMub2Zmc2V0U3RhcnRUaW1lc3RhbXAgPSAwO1xuICAgICAgX3RoaXMub2Zmc2V0VGltZSArPSBwcmV2T2Zmc2V0U3RhcnRUaW1lc3RhbXAgPyBfdGhpcy5jYWxjT2Zmc2V0U3RhcnRUaW1lc3RhbXAoKSAtIHByZXZPZmZzZXRTdGFydFRpbWVzdGFtcCA6IDA7XG5cbiAgICAgIHZhciB0aW1lRGVsdGEgPSBfdGhpcy5jYWxjVGltZURlbHRhKCk7XG5cbiAgICAgIF90aGlzLnNldFRpbWVEZWx0YVN0YXRlKHRpbWVEZWx0YSwgXCJTVEFSVEVEXCIsIF90aGlzLnByb3BzLm9uU3RhcnQpO1xuXG4gICAgICBpZiAoIV90aGlzLnByb3BzLmNvbnRyb2xsZWQgJiYgKCF0aW1lRGVsdGEuY29tcGxldGVkIHx8IF90aGlzLnByb3BzLm92ZXJ0aW1lKSkge1xuICAgICAgICBfdGhpcy5jbGVhclRpbWVyKCk7XG5cbiAgICAgICAgX3RoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoX3RoaXMudGljaywgX3RoaXMucHJvcHMuaW50ZXJ2YWxEZWxheSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmlzUGF1c2VkKCkpIHJldHVybjtcblxuICAgICAgX3RoaXMuY2xlYXJUaW1lcigpO1xuXG4gICAgICBfdGhpcy5vZmZzZXRTdGFydFRpbWVzdGFtcCA9IF90aGlzLmNhbGNPZmZzZXRTdGFydFRpbWVzdGFtcCgpO1xuXG4gICAgICBfdGhpcy5zZXRUaW1lRGVsdGFTdGF0ZShfdGhpcy5zdGF0ZS50aW1lRGVsdGEsIFwiUEFVU0VEXCIsIF90aGlzLnByb3BzLm9uUGF1c2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmlzU3RvcHBlZCgpKSByZXR1cm47XG5cbiAgICAgIF90aGlzLmNsZWFyVGltZXIoKTtcblxuICAgICAgX3RoaXMub2Zmc2V0U3RhcnRUaW1lc3RhbXAgPSBfdGhpcy5jYWxjT2Zmc2V0U3RhcnRUaW1lc3RhbXAoKTtcbiAgICAgIF90aGlzLm9mZnNldFRpbWUgPSBfdGhpcy5vZmZzZXRTdGFydFRpbWVzdGFtcCAtIF90aGlzLmluaXRpYWxUaW1lc3RhbXA7XG5cbiAgICAgIF90aGlzLnNldFRpbWVEZWx0YVN0YXRlKF90aGlzLmNhbGNUaW1lRGVsdGEoKSwgXCJTVE9QUEVEXCIsIF90aGlzLnByb3BzLm9uU3RvcCk7XG4gICAgfTtcblxuICAgIF90aGlzLmlzU3RhcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pc1N0YXR1cyhcIlNUQVJURURcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmlzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmlzU3RhdHVzKFwiUEFVU0VEXCIpO1xuICAgIH07XG5cbiAgICBfdGhpcy5pc1N0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaXNTdGF0dXMoXCJTVE9QUEVEXCIpO1xuICAgIH07XG5cbiAgICBfdGhpcy5pc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pc1N0YXR1cyhcIkNPTVBMRVRFRFwiKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlT25Db21wbGV0ZSA9IGZ1bmN0aW9uICh0aW1lRGVsdGEpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNvbXBsZXRlKSBfdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRpbWVEZWx0YSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5kYXRlKSB7XG4gICAgICB2YXIgdGltZURlbHRhID0gX3RoaXMuY2FsY1RpbWVEZWx0YSgpO1xuXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGltZURlbHRhOiB0aW1lRGVsdGEsXG4gICAgICAgIHN0YXR1czogdGltZURlbHRhLmNvbXBsZXRlZCA/IFwiQ09NUExFVEVEXCIgOiBcIlNUT1BQRURcIlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMubGVnYWN5TW9kZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvdW50ZG93biQxLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmxlZ2FjeU1vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3VudCkgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMuY2FsY1RpbWVEZWx0YSgpKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9TdGFydCkgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMubGVnYWN5TW9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5zaGFsbG93Q29tcGFyZSh0aGlzLnByb3BzLCBwcmV2UHJvcHMpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGUgIT09IHByZXZQcm9wcy5kYXRlKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsVGltZXN0YW1wID0gdGhpcy5jYWxjT2Zmc2V0U3RhcnRUaW1lc3RhbXAoKTtcbiAgICAgICAgICB0aGlzLm9mZnNldFN0YXJ0VGltZXN0YW1wID0gdGhpcy5pbml0aWFsVGltZXN0YW1wO1xuICAgICAgICAgIHRoaXMub2Zmc2V0VGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFRpbWVEZWx0YVN0YXRlKHRoaXMuY2FsY1RpbWVEZWx0YSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5sZWdhY3lNb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FsY1RpbWVEZWx0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVGltZURlbHRhJDEoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wcy5kYXRlLFxuICAgICAgICAgIG5vdyA9IF90aGlzJHByb3BzLm5vdyxcbiAgICAgICAgICBwcmVjaXNpb24gPSBfdGhpcyRwcm9wcy5wcmVjaXNpb24sXG4gICAgICAgICAgY29udHJvbGxlZCA9IF90aGlzJHByb3BzLmNvbnRyb2xsZWQsXG4gICAgICAgICAgb3ZlcnRpbWUgPSBfdGhpcyRwcm9wcy5vdmVydGltZTtcbiAgICAgIHJldHVybiBjYWxjVGltZURlbHRhKGRhdGUsIHtcbiAgICAgICAgbm93OiBub3csXG4gICAgICAgIHByZWNpc2lvbjogcHJlY2lzaW9uLFxuICAgICAgICBjb250cm9sbGVkOiBjb250cm9sbGVkLFxuICAgICAgICBvZmZzZXRUaW1lOiB0aGlzLm9mZnNldFRpbWUsXG4gICAgICAgIG92ZXJ0aW1lOiBvdmVydGltZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbGNPZmZzZXRTdGFydFRpbWVzdGFtcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjT2Zmc2V0U3RhcnRUaW1lc3RhbXAoKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUaW1lKHNlY29uZHMpIHtcbiAgICAgIHRoaXMubGVnYWN5Q291bnRkb3duUmVmLmN1cnJlbnQuYWRkVGltZShzZWNvbmRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJUaW1lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclRpbWVyKCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3RhdHVzKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhdHVzID09PSBzdGF0dXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoYWxsb3dDb21wYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlKG9iakEsIG9iakIpIHtcbiAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0gT2JqZWN0LmtleXMob2JqQikubGVuZ3RoICYmICFrZXlzQS5zb21lKGZ1bmN0aW9uIChrZXlBKSB7XG4gICAgICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleUFdO1xuICAgICAgICB2YXIgdmFsdWVCID0gb2JqQltrZXlBXTtcbiAgICAgICAgcmV0dXJuICFvYmpCLmhhc093blByb3BlcnR5KGtleUEpIHx8ICEodmFsdWVBID09PSB2YWx1ZUIgfHwgdmFsdWVBICE9PSB2YWx1ZUEgJiYgdmFsdWVCICE9PSB2YWx1ZUIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVEZWx0YVN0YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRpbWVEZWx0YVN0YXRlKHRpbWVEZWx0YSwgc3RhdHVzLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5tb3VudGVkKSByZXR1cm47XG4gICAgICB2YXIgY29tcGxldGVkQ2FsbGJhY2s7XG5cbiAgICAgIGlmICghdGhpcy5zdGF0ZS50aW1lRGVsdGEuY29tcGxldGVkICYmIHRpbWVEZWx0YS5jb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLm92ZXJ0aW1lKSB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICAgICAgY29tcGxldGVkQ2FsbGJhY2sgPSB0aGlzLmhhbmRsZU9uQ29tcGxldGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkRvbmUgPSBmdW5jdGlvbiBvbkRvbmUoKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soX3RoaXMyLnN0YXRlLnRpbWVEZWx0YSk7XG4gICAgICAgIGlmIChjb21wbGV0ZWRDYWxsYmFjaykgY29tcGxldGVkQ2FsbGJhY2soX3RoaXMyLnN0YXRlLnRpbWVEZWx0YSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHZhciBuZXdTdGF0dXMgPSBzdGF0dXMgfHwgcHJldlN0YXRlLnN0YXR1cztcblxuICAgICAgICBpZiAodGltZURlbHRhLmNvbXBsZXRlZCAmJiAhX3RoaXMyLnByb3BzLm92ZXJ0aW1lKSB7XG4gICAgICAgICAgbmV3U3RhdHVzID0gXCJDT01QTEVURURcIjtcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdHVzICYmIG5ld1N0YXR1cyA9PT0gXCJDT01QTEVURURcIikge1xuICAgICAgICAgIG5ld1N0YXR1cyA9IFwiU1RPUFBFRFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aW1lRGVsdGE6IHRpbWVEZWx0YSxcbiAgICAgICAgICBzdGF0dXM6IG5ld1N0YXR1c1xuICAgICAgICB9O1xuICAgICAgfSwgb25Eb25lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXBpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFwaSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFwaSA9IHRoaXMuYXBpIHx8IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgIHBhdXNlOiB0aGlzLnBhdXNlLFxuICAgICAgICBzdG9wOiB0aGlzLnN0b3AsXG4gICAgICAgIGlzU3RhcnRlZDogdGhpcy5pc1N0YXJ0ZWQsXG4gICAgICAgIGlzUGF1c2VkOiB0aGlzLmlzUGF1c2VkLFxuICAgICAgICBpc1N0b3BwZWQ6IHRoaXMuaXNTdG9wcGVkLFxuICAgICAgICBpc0NvbXBsZXRlZDogdGhpcy5pc0NvbXBsZXRlZFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVuZGVyUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVuZGVyUHJvcHMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkYXlzSW5Ib3VycyA9IF90aGlzJHByb3BzMi5kYXlzSW5Ib3VycyxcbiAgICAgICAgICB6ZXJvUGFkVGltZSA9IF90aGlzJHByb3BzMi56ZXJvUGFkVGltZSxcbiAgICAgICAgICB6ZXJvUGFkRGF5cyA9IF90aGlzJHByb3BzMi56ZXJvUGFkRGF5cztcbiAgICAgIHZhciB0aW1lRGVsdGEgPSB0aGlzLnN0YXRlLnRpbWVEZWx0YTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRpbWVEZWx0YSksIHtcbiAgICAgICAgYXBpOiB0aGlzLmdldEFwaSgpLFxuICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgZm9ybWF0dGVkOiBmb3JtYXRUaW1lRGVsdGEodGltZURlbHRhLCB7XG4gICAgICAgICAgZGF5c0luSG91cnM6IGRheXNJbkhvdXJzLFxuICAgICAgICAgIHplcm9QYWRUaW1lOiB6ZXJvUGFkVGltZSxcbiAgICAgICAgICB6ZXJvUGFkRGF5czogemVyb1BhZERheXNcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMubGVnYWN5TW9kZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvdW50ID0gX3RoaXMkcHJvcHMzLmNvdW50LFxuICAgICAgICAgICAgX2NoaWxkcmVuID0gX3RoaXMkcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgICAgb25Db21wbGV0ZSA9IF90aGlzJHByb3BzMy5vbkNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb3VudGRvd24sIHtcbiAgICAgICAgICByZWY6IHRoaXMubGVnYWN5Q291bnRkb3duUmVmLFxuICAgICAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlXG4gICAgICAgIH0sIF9jaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgICAgb3ZlcnRpbWUgPSBfdGhpcyRwcm9wczQub3ZlcnRpbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgICAgcmVuZGVyZXIgPSBfdGhpcyRwcm9wczQucmVuZGVyZXI7XG4gICAgICB2YXIgcmVuZGVyUHJvcHMgPSB0aGlzLmdldFJlbmRlclByb3BzKCk7XG5cbiAgICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIocmVuZGVyUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRyZW4gJiYgdGhpcy5zdGF0ZS50aW1lRGVsdGEuY29tcGxldGVkICYmICFvdmVydGltZSkge1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgY291bnRkb3duOiByZW5kZXJQcm9wc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9yZW5kZXJQcm9wcyRmb3JtYXR0ZSA9IHJlbmRlclByb3BzLmZvcm1hdHRlZCxcbiAgICAgICAgICBkYXlzID0gX3JlbmRlclByb3BzJGZvcm1hdHRlLmRheXMsXG4gICAgICAgICAgaG91cnMgPSBfcmVuZGVyUHJvcHMkZm9ybWF0dGUuaG91cnMsXG4gICAgICAgICAgbWludXRlcyA9IF9yZW5kZXJQcm9wcyRmb3JtYXR0ZS5taW51dGVzLFxuICAgICAgICAgIHNlY29uZHMgPSBfcmVuZGVyUHJvcHMkZm9ybWF0dGUuc2Vjb25kcztcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICB9LCByZW5kZXJQcm9wcy50b3RhbCA8IDAgPyAnLScgOiAnJywgZGF5cywgZGF5cyA/ICc6JyA6ICcnLCBob3VycywgXCI6XCIsIG1pbnV0ZXMsIFwiOlwiLCBzZWNvbmRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ291bnRkb3duJDE7XG59KENvbXBvbmVudCk7XG5Db3VudGRvd24kMS5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRpbWVEZWx0YUZvcm1hdE9wdGlvbnNEZWZhdWx0cyksIHtcbiAgY29udHJvbGxlZDogZmFsc2UsXG4gIGludGVydmFsRGVsYXk6IDEwMDAsXG4gIHByZWNpc2lvbjogMCxcbiAgYXV0b1N0YXJ0OiB0cnVlXG59KTtcbkNvdW50ZG93biQxLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogb25lT2ZUeXBlKFtpbnN0YW5jZU9mKERhdGUpLCBzdHJpbmcsIG51bWJlcl0pLFxuICBkYXlzSW5Ib3VyczogYm9vbCxcbiAgemVyb1BhZFRpbWU6IG51bWJlcixcbiAgemVyb1BhZERheXM6IG51bWJlcixcbiAgY29udHJvbGxlZDogYm9vbCxcbiAgaW50ZXJ2YWxEZWxheTogbnVtYmVyLFxuICBwcmVjaXNpb246IG51bWJlcixcbiAgYXV0b1N0YXJ0OiBib29sLFxuICBvdmVydGltZTogYm9vbCxcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIGNoaWxkcmVuOiBlbGVtZW50LFxuICByZW5kZXJlcjogZnVuYyxcbiAgbm93OiBmdW5jLFxuICBvbk1vdW50OiBmdW5jLFxuICBvblN0YXJ0OiBmdW5jLFxuICBvblBhdXNlOiBmdW5jLFxuICBvblN0b3A6IGZ1bmMsXG4gIG9uVGljazogZnVuYyxcbiAgb25Db21wbGV0ZTogZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duJDE7XG5leHBvcnQgeyBjYWxjVGltZURlbHRhLCBmb3JtYXRUaW1lRGVsdGEsIHplcm9QYWQgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuaW1wb3J0IFJvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzLzNEL1JvdmVyXCI7XHJcblxyXG5jb25zdCBQZXJzZXZlcmFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IERhdGUuVVRDKDIwMjEsIDIsIDE4LCA4LCA1NSwgMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgcHQtMTIgYWJzb2x1dGVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBsZzp0ZXh0LTh4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICBQZXJzZXZlcmFuY2UgbGFuZGluZyBjb3VudGRvd25cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIGxnOnRleHQtOXhsIGFic29sdXRlIHctZnVsbCB0ZXh0LWNlbnRlciBwdC0yXCI+XHJcbiAgICAgICAgICA8Q291bnRkb3duIGRhdGU9e2RhdGV9IC8+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSb3ZlciBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS04MDAgdG9wLTAgei0wIHctZnVsbFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2V2ZXJhbmNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9