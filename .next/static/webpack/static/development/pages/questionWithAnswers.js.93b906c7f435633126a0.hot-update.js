webpackHotUpdate("static\\development\\pages\\questionWithAnswers.js",{

/***/ "./pages/questionWithAnswers.js":
/*!**************************************!*\
  !*** ./pages/questionWithAnswers.js ***!
  \**************************************/
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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\questionWithAnswers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var QueryWithAns =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QueryWithAns, _Component);

  function QueryWithAns() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QueryWithAns);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(QueryWithAns).call(this));
    _this.state = {
      question: {},
      answers: [],
      loggedIn: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(QueryWithAns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!local_storage__WEBPACK_IMPORTED_MODULE_10___default.a.get('loggedIn')) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                'loggedIn': true
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "upvote",
    value: function upvote(id) {
      console.log('up----------------------', id);
    }
  }, {
    key: "downvote",
    value: function downvote(id) {
      console.log('down-----------------------', id);
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function show$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()('http://localhost:8000/questions/' + local_storage__WEBPACK_IMPORTED_MODULE_10___default.a.get('obj_id')).then(function (response) {
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

                localStorage.setItem('obj_id', '');
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "renderAnswer",
    value: function renderAnswer() {
      var _this3 = this;

      if (this.state.answers && this.state.answers.length > 0) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, this.state.answers.map(function (answer) {
          return __jsx("div", {
            className: "flex justify-center bg-green-300 p-4 m-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("div", {
            className: "block md:flex justify-center w-full",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("center", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("img", {
            src: _images__WEBPACK_IMPORTED_MODULE_8__["urlOfImages"].answer,
            className: "h-6 mt-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }))), __jsx("div", {
            className: "p-1 w-auto text-4m md:text-2xl",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx("span", {
            className: "ml-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, answer.answer), __jsx("div", {
            className: "text-right text-gray-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "-- ", answer.author.name)), __jsx("div", {
            className: _this3.state.loggedIn ? 'block p-6' : 'hidden p-6',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, __jsx("button", {
            onClick: function onClick() {
              return _this3.upvote(answer._id);
            },
            className: "bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "Upvote ", answer.upvote.length), __jsx("button", {
            onClick: function onClick() {
              return _this3.downvote(answer._id);
            },
            className: "bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, "Downvote ", answer.downvote.length))));
        }));
      } else {
        return __jsx("div", {
          className: "flex justify-center bg-green-300 p-4 m-4 text-2xl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "NO ONE ANSWERED IT YET");
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.show();
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "flex overflow-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "fixed top-10  left-3 md:relative md:w-1/6 p-6 -ml-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-1 px-4 -ml-3 md:py-2 md:px-4 rounded m-1 md:m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Answer")), __jsx("div", {
        className: "block text-center  border-gray-600 w-screen md:w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("div", {
        className: "text-2l md:text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Q."), "   ", this.state.question.question), __jsx("div", {
        className: "text-2xl bg-green-500 p-8 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Answers", this.renderAnswer()))));
    }
  }]);

  return QueryWithAns;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QueryWithAns);

/***/ })

})
//# sourceMappingURL=questionWithAnswers.js.93b906c7f435633126a0.hot-update.js.map