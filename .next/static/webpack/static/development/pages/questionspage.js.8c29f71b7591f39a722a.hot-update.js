webpackHotUpdate("static\\development\\pages\\questionspage.js",{

/***/ "./pages/questionspage.js":
/*!********************************!*\
  !*** ./pages/questionspage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_14__);









var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\questionspage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;







var Query =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Query, _Component);

  function Query() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Query);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Query).call(this));
    _this.state = {
      questionList: [],
      answers: [],
      questionBox: false,
      quesbox: '',
      query: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Query, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        quesbox: event.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default()('http://localhost:8000/questions/').then(function (response) {
                return response.json();
              }).then(function (res) {
                _this2.setState({
                  questionList: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(res.questionList)
                });
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "questionDetails",
    value: function questionDetails(obj) {
      localStorage.setItem('obj_id', obj);
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/questionWithAnswers');
    }
  }, {
    key: "renderQuestion",
    value: function renderQuestion() {
      var _this3 = this;

      if (!this.state.questionList || this.state.questionList.length === 0) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "NOTHING FOUND"));
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.state.questionList.map(function (question) {
        return __jsx("div", {
          className: "text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
          onClick: function onClick() {
            return _this3.questionDetails(question._id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Q."), "   ", question.question);
      }));
    }
  }, {
    key: "openQuestionDialog",
    value: function openQuestionDialog() {
      this.setState({
        questionBox: !this.state.questionBox
      });
    }
  }, {
    key: "submitquestion",
    value: function submitquestion() {
      var url, response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function submitquestion$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('called');
              console.log(this.state.quesbox);
              url = 'http://localhost:8000/questions';
              _context2.prev = 3;
              _context2.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default()(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": '*',
                  'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_14___default.a.get('token')
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  question: this.state.quesbox
                })
              }));

            case 6:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 17;
                break;
              }

              _context2.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 10:
              data = _context2.sent;
              console.log("data----------- ", data);
              console.log(response);
              this.openQuestionDialog();
              this.componentDidMount(); //   await this.setState({
              //       user:data.user
              //   })

              _context2.next = 18;
              break;

            case 17:
              alert('unable to fetch');

            case 18:
              _context2.next = 24;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](3);
              console.error('You have an error in your code or there are Network issues.', _context2.t0);
              throw new Error(_context2.t0);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[3, 20]]);
    }
  }, {
    key: "test",
    value: function test() {
      var _this4 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function test$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(local_storage__WEBPACK_IMPORTED_MODULE_14___default.a.get('query') && local_storage__WEBPACK_IMPORTED_MODULE_14___default.a.get('query').length > 0)) {
                _context3.next = 6;
                break;
              }

              console.log('tetsing sucess ----------------- ', local_storage__WEBPACK_IMPORTED_MODULE_14___default.a.get('query'));
              _context3.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default()('http://localhost:8000/questions/search/' + local_storage__WEBPACK_IMPORTED_MODULE_14___default.a.get('query')).then(function (response) {
                return response.json();
              }).then(function (res) {
                console.log(res);

                _this4.setState({
                  questionList: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(res.questionList)
                });

                localStorage.setItem('query', '');
              }));

            case 4:
              _context3.next = 7;
              break;

            case 6:
              return _context3.abrupt("return");

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      this.test();
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("div", {
        className: this.state.questionBox ? 'hidden' : 'block',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("div", {
        className: "flex overflow-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("div", {
        className: "fixed bottom-3 right-3 md:block  p-0 md:p-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: " w-full bg-red-300 hover:bg-red-700 text-white font-bold  mt-10 p-2  rounded ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_11__["urlOfImages"].question,
        className: "h-8 rounded-full inline-block",
        onClick: function onClick() {
          _this5.openQuestionDialog();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx("span", {
        className: "hidden md:block ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, " Ask A Question"))), __jsx("div", {
        className: "block text-center  border-gray-600 w-screen ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, this.renderQuestion()))), __jsx("div", {
        className: this.state.questionBox ? 'block' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("div", {
        className: "max-w-sm rounded overflow-hidden shadow-lg mt-10 border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("div", {
        className: "px-4 py-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "font-bold text-xl mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Write Your Question Here"), __jsx("textarea", {
        value: this.state.quesbox,
        onChange: this.handleChange,
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "username",
        required: true,
        placeholder: "Enter Your question Here ...",
        rows: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), __jsx("button", {
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",
        onClick: function onClick() {
          return _this5.submitquestion();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Submit Question"))))));
    }
  }]);

  return Query;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Query);

/***/ })

})
//# sourceMappingURL=questionspage.js.8c29f71b7591f39a722a.hot-update.js.map