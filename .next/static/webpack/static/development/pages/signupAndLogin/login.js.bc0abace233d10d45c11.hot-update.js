webpackHotUpdate("static\\development\\pages\\signupAndLogin\\login.js",{

/***/ "./pages/signupAndLogin/login.js":
/*!***************************************!*\
  !*** ./pages/signupAndLogin/login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _signupAndLogin_social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../signupAndLogin/social */ "./pages/signupAndLogin/social.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Layout */ "./pages/Layout.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\signupAndLogin\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






var LogIn =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(LogIn, _Component);

  function LogIn(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LogIn);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(LogIn).call(this, props));
    _this.state = {
      username: '',
      password: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlePasswordChange = _this.handlePasswordChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LogIn, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        username: event.target.value
      });
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "login",
    value: function login() {
      var url, response, _ref, token;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(this.state.username + "      " + this.state.password);

              if (!(this.state.username === '' || this.state.password === '')) {
                _context.next = 5;
                break;
              }

              alert("invalid fields can't be empty");
              _context.next = 28;
              break;

            case 5:
              url = 'http://localhost:8000/users/login/';
              console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                username: this.state.username,
                password: this.state.password
              }));
              _context.prev = 7;
              _context.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13___default()(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  username: this.state.username,
                  password: this.state.password
                })
              }));

            case 10:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 21;
                break;
              }

              this.setState({
                loggedIn: true
              });
              _context.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 15:
              _ref = _context.sent;
              token = _ref.token;
              console.log(token);
              console.log(response);
              _context.next = 22;
              break;

            case 21:
              console.log('Login failed.'); // https://github.com/developit/unfetch#caveats

            case 22:
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](7);
              console.error('You have an error in your code or there are Network issues.', _context.t0);
              throw new Error(_context.t0);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[7, 24]]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _jsx;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(_signupAndLogin_social__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("div", {
        className: "mt-5 border w-full max-w-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        "for": "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Email"), __jsx("input", {
        value: this.state.username,
        onChange: this.handleChange,
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "username",
        type: "text",
        placeholder: "Email",
        name: "username",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), __jsx("div", {
        className: "mb-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        "for": "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Password"), __jsx("input", {
        value: this.state.password,
        onChange: this.handlePasswordChange,
        className: "shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
        id: "password",
        type: "password",
        placeholder: "Password",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx("div", {
        className: "flex items-center justify-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("button", (_jsx = {
        type: "submit",
        onClick: function onClick() {
          _this2.login();
        },
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "button"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 85
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), "Log In", this.state.loggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null) : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "failed")), __jsx("a", {
        className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Forgot Password?")))))))));
    }
  }]);

  return LogIn;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LogIn);

/***/ })

})
//# sourceMappingURL=login.js.bc0abace233d10d45c11.hot-update.js.map