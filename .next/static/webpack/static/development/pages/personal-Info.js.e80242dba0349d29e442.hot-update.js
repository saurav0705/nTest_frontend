webpackHotUpdate("static\\development\\pages\\personal-Info.js",{

/***/ "./pages/personal-Info.js":
/*!********************************!*\
  !*** ./pages/personal-Info.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\personal-Info.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var Personal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Personal, _Component);

  function Personal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Personal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Personal).call(this, props));
    _this.state = {
      user: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Personal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!local_storage__WEBPACK_IMPORTED_MODULE_9___default.a.get('loggedIn')) {
                next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
              }

              url = 'http://localhost:8080/users/info';
              _context.prev = 2;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*',
                  'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_9___default.a.get('token')
                }
              }));

            case 5:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 14;
                break;
              }

              _context.next = 9;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 9:
              data = _context.sent;
              _context.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                user: data.user
              }));

            case 12:
              _context.next = 15;
              break;

            case 14:
              alert('unable to fetch');

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              console.error('You have an error in your code or there are Network issues.', _context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[2, 17]]);
    }
  }, {
    key: "renderQuestions",
    value: function renderQuestions() {
      if (!this.state.user.questions) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null);
      } else {
        if (this.state.user.questions.length === 0) {
          return __jsx("p", {
            className: "text-4l m-1 bg-red-600 p-3 rounded",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Well you are Very Intelligent");
        }

        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.state.user.questions.map(function (ques) {
          return __jsx("p", {
            className: "text-4l m-1 bg-red-600 p-3 rounded",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "Q. ", ques.question);
        }));
      }
    }
  }, {
    key: "renderAnswers",
    value: function renderAnswers() {
      if (!this.state.user.answers) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null);
      } else {
        if (this.state.user.answers.length === 0) {
          return __jsx("p", {
            className: "text-4l m-1 bg-green-600 p-3 rounded",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, "Lets Start Helping Others");
        }

        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.state.user.answers.map(function (ans) {
          return __jsx("p", {
            className: "text-4l m-1 bg-green-600 p-3 rounded",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, "A. ", ans.answer);
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "block md:flex justify-center p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_8__["urlOfImages"].user,
        className: "h-auto rounded-full",
        alt: "Profile Picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx("div", {
        className: "flex justify-center mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_8__["urlOfImages"].copyright,
        className: "mx-2 mt-1 h-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, " ", __jsx("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_8__["urlOfImages"]['stack-overflow'],
        className: "h-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("p", {
        className: "font-bold text-4l mb-2 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "QuestionOverflow ")))), __jsx("div", {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("div", {
        className: "max-w-sm rounded border overflow-hidden shadow-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        className: "px-6 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "font-bold text-4xl mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.state.user.name), __jsx("div", {
        className: " text-2xl mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.state.user.username), __jsx("p", {
        className: "text-gray-700 text-base mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Below Is the list of all the Question you asked and Answered. We very much Appreciate your contribution."), __jsx("div", {
        className: "p-2 m-2 bg-red-400 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("div", {
        className: "font-bold text-xl mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Questions Asked"), this.renderQuestions()), __jsx("div", {
        className: "p-2 m-2 bg-green-400 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("div", {
        className: "font-bold text-xl mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Questions Answered"), this.renderAnswers()), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), __jsx("div", {
        className: "flex justify-center m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("button", {
        className: "bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Edit"))))));
    }
  }]);

  return Personal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Personal);

/***/ })

})
//# sourceMappingURL=personal-Info.js.e80242dba0349d29e442.hot-update.js.map