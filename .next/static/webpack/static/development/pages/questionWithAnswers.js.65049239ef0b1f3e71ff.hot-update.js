webpackHotUpdate("static\\development\\pages\\questionWithAnswers.js",{

/***/ "./pages/questionWithAnswers.js":
/*!**************************************!*\
  !*** ./pages/questionWithAnswers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\questionWithAnswers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var QueryWithAns =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(QueryWithAns, _Component);

  function QueryWithAns() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, QueryWithAns);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(QueryWithAns).call(this));
    _this.state = {
      question: {},
      answers: [],
      loggedIn: false,
      objId: '',
      form: false,
      quesbox: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(QueryWithAns, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        quesbox: event.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('loggedIn')) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.setState({
                'loggedIn': true
              }));

            case 3:
              this.show();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "upvote",
    value: function upvote(id) {
      var url, response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function upvote$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = 'http://localhost:8000/answers/' + id + '/upvote';
              _context2.prev = 1;
              _context2.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*',
                  'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('token')
                }
              }));

            case 4:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 14;
                break;
              }

              _context2.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 8:
              data = _context2.sent;
              console.log("data----------- ", data);
              console.log(response);
              this.componentDidMount(); //   await this.setState({
              //       user:data.user
              //   })

              _context2.next = 15;
              break;

            case 14:
              alert('unable to fetch');

            case 15:
              _context2.next = 21;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](1);
              console.error('You have an error in your code or there are Network issues.', _context2.t0);
              throw new Error(_context2.t0);

            case 21:
              console.log('up----------------------', id);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[1, 17]]);
    }
  }, {
    key: "downvote",
    value: function downvote(id) {
      var url, response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function downvote$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = 'http://localhost:8000/answers/' + id + '/downvote';
              _context3.prev = 1;
              _context3.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*',
                  'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('token')
                }
              }));

            case 4:
              response = _context3.sent;

              if (!response.ok) {
                _context3.next = 14;
                break;
              }

              _context3.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 8:
              data = _context3.sent;
              console.log("data----------- ", data);
              console.log(response);
              this.componentDidMount(); //   await this.setState({
              //       user:data.user
              //   })

              _context3.next = 15;
              break;

            case 14:
              alert('unable to fetch');

            case 15:
              _context3.next = 21;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](1);
              console.error('You have an error in your code or there are Network issues.', _context3.t0);
              throw new Error(_context3.t0);

            case 21:
              console.log('down-----------------------', id);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[1, 17]]);
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function show$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:8000/questions/' + local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('obj_id')).then(function (response) {
                return response.json();
              }).then(function (res) {
                console.log('test---------------- ', res);

                if (res.question) {
                  _this2.setState({
                    question: res.question
                  });

                  if (_this2.state.question.answers) {
                    _this2.setState({
                      answers: _this2.state.question.answers
                    });
                  }
                }

                _this2.setState({
                  'objId': local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('obj_id')
                });
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "submitanswer",
    value: function submitanswer() {
      var url, response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function submitanswer$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log('called');
              url = 'http://localhost:8000/questions/' + this.state.objId + '/answer';
              _context5.prev = 2;
              _context5.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*',
                  'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get('token')
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  answer: this.state.quesbox
                })
              }));

            case 5:
              response = _context5.sent;

              if (!response.ok) {
                _context5.next = 16;
                break;
              }

              _context5.next = 9;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 9:
              data = _context5.sent;
              console.log("data----------- ", data);
              console.log(response);
              this.toggleBox();
              this.componentDidMount(); //   await this.setState({
              //       user:data.user
              //   })

              _context5.next = 17;
              break;

            case 16:
              alert('unable to fetch');

            case 17:
              _context5.next = 23;
              break;

            case 19:
              _context5.prev = 19;
              _context5.t0 = _context5["catch"](2);
              console.error('You have an error in your code or there are Network issues.', _context5.t0);
              throw new Error(_context5.t0);

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[2, 19]]);
    }
  }, {
    key: "renderAnswer",
    value: function renderAnswer() {
      var _this3 = this;

      if (this.state.answers && this.state.answers.length > 0) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, this.state.answers.map(function (answer) {
          return __jsx("div", {
            className: "flex justify-center bg-green-300 p-4 m-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, __jsx("div", {
            className: "block md:flex justify-center w-full",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, __jsx("center", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, __jsx("img", {
            src: _images__WEBPACK_IMPORTED_MODULE_10__["urlOfImages"].answer,
            className: "h-6 mt-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }))), __jsx("div", {
            className: "p-1 w-auto text-4m md:text-2xl",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, __jsx("span", {
            className: "ml-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, answer.answer), __jsx("div", {
            className: "text-right text-gray-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, "-- ", answer.author.name)), __jsx("div", {
            className: _this3.state.loggedIn ? 'block p-6' : 'hidden p-6',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, __jsx("button", {
            onClick: function onClick() {
              return _this3.upvote(answer._id);
            },
            className: "bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, "Upvote ", answer.upvote.length), __jsx("button", {
            onClick: function onClick() {
              return _this3.downvote(answer._id);
            },
            className: "bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, "Downvote ", answer.downvote.length))));
        }));
      } else {
        return __jsx("div", {
          className: "flex justify-center bg-green-300 p-4 m-4 text-2xl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, "NO ONE ANSWERED IT YET");
      }
    }
  }, {
    key: "toggleBox",
    value: function toggleBox() {
      this.setState({
        form: !this.state.form
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("div", {
        className: this.state.form ? 'hidden' : 'block',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx("div", {
        className: "flex overflow-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("div", {
        className: this.state.loggedIn ? 'block' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx("div", {
        className: "fixed top-10  left-3 md:relative md:w-1/6 p-6 -ml-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx("div", {
        onClick: function onClick() {
          return _this4.toggleBox();
        },
        className: "bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-1 px-4 -ml-3 md:py-2 md:px-4 rounded m-1 md:m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx("span", {
        className: "w-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, " Answer")))), __jsx("div", {
        className: "block text-center  border-gray-600 w-screen md:w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx("div", {
        className: "text-2l md:text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Q."), "   ", this.state.question.question), __jsx("div", {
        className: "text-2xl bg-green-500 p-8 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Answers", this.renderAnswer()))))), __jsx("div", {
        className: this.state.form ? 'block' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("div", {
        className: "max-w-sm rounded overflow-hidden shadow-lg mt-10 border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, __jsx("div", {
        className: "px-4 py-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, __jsx("div", {
        className: "font-bold text-xl mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Write Your Answer Here"), __jsx("textarea", {
        value: this.state.quesbox,
        onChange: this.handleChange,
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "username",
        required: true,
        placeholder: "Enter Your question Here ...",
        rows: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }), __jsx("button", {
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",
        onClick: function onClick() {
          return _this4.submitanswer();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Submit Question"))))));
    }
  }]);

  return QueryWithAns;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QueryWithAns);

/***/ })

})
//# sourceMappingURL=questionWithAnswers.js.65049239ef0b1f3e71ff.hot-update.js.map