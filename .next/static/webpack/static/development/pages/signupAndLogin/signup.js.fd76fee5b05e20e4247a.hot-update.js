webpackHotUpdate("static\\development\\pages\\signupAndLogin\\signup.js",{

/***/ "./pages/signupAndLogin/signup.js":
/*!****************************************!*\
  !*** ./pages/signupAndLogin/signup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _signupAndLogin_social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../signupAndLogin/social */ "./pages/signupAndLogin/social.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Layout */ "./pages/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\signupAndLogin\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var SignUp =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SignUp, _Component);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SignUp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUp).call(this, props));
    _this.state = {
      username: '',
      password: '',
      name: '',
      error: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handlePasswordChange = _this.handlePasswordChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handledispchange = _this.handledispchange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp, [{
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
    key: "handledispchange",
    value: function handledispchange(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log(.*)$
      //console.log(.*)$
      if (local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('loggedIn')) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
      }
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //console.log(re.test(email));

      return re.test(email);
    }
  }, {
    key: "signup",
    value: function signup() {
      var url, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function signup$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(this.state.email.length > 0 && !this.validateEmail(this.state.username))) {
                _context.next = 3;
                break;
              }

              this.setState({
                error: 'Email Invalid'
              });
              return _context.abrupt("return");

            case 3:
              if (!(this.state.username === '' || this.state.password === '' || this.state.name === '')) {
                _context.next = 7;
                break;
              }

              this.setState({
                error: "Fields can't be Empty"
              });
              _context.next = 18;
              break;

            case 7:
              url = 'https://questionstack-266907.appspot.com//users/signup/'; //console.log(.*)$

              _context.prev = 8;
              _context.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  username: this.state.username,
                  password: this.state.password,
                  name: this.state.name
                })
              }));

            case 11:
              response = _context.sent;

              if (response.ok) {
                //console.log(.*)$
                next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/signupAndLogin/login');
              } else {
                //console.log(response);
                this.setState({
                  error: 'User Already exist'
                });
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](8);
              this.setState({
                error: 'Server Not Reachable'
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[8, 15]]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "flex justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("div", {
        className: "mt-40 m-10 pt-20 hidden md:block ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("h1", {
        className: "text-4xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Join The Community"), __jsx("div", {
        className: "text-4l m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Ask A Queation"), __jsx("div", {
        className: "text-4l m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Answer A Queation"), __jsx("div", {
        className: "text-4l m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Help Out Others")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_signupAndLogin_social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("div", {
        className: "mt-5 border w-full max-w-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("div", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Display Name"), __jsx("input", {
        value: this.state.name,
        onChange: this.handledispchange,
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "name",
        type: "text",
        placeholder: "Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), __jsx("div", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Email"), __jsx("input", {
        value: this.state.username,
        onChange: this.handleChange,
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "username",
        type: "text",
        placeholder: "Email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), __jsx("div", {
        className: "mb-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
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
          lineNumber: 122
        },
        __self: this
      })), __jsx("div", {
        className: "flex items-center justify-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("span", {
        className: "text-red-500 p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.error), __jsx("button", {
        onClick: function onClick() {
          return _this2.signup();
        },
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Sign Up")))))))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.fd76fee5b05e20e4247a.hot-update.js.map