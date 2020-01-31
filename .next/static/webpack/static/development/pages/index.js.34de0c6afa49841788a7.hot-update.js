webpackHotUpdate("static\\development\\pages\\index.js",{

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
      answers: []
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
            case "end":
              return _context.stop();
          }
        }
      });
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
                console.log(res);

                if (true) {
                  _this2.setState({
                    question: res.question,
                    answers: res.question.answers
                  });
                } else {}

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
      if (this.state.answers && this.state.answers.length > 0) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, this.state.answers.map(function (answer) {
          return __jsx("div", {
            className: "flex justify-center bg-green-300 p-4 m-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, __jsx("div", {
            className: "block md:flex justify-center w-full",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, __jsx("center", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, __jsx("img", {
            src: _images__WEBPACK_IMPORTED_MODULE_8__["urlOfImages"].answer,
            className: "h-6 mt-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }))), __jsx("div", {
            className: "p-1 w-auto text-4m md:text-2xl",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("span", {
            className: "ml-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, answer.answer), __jsx("div", {
            className: "text-right text-gray-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, "-- ", answer.author.name)), __jsx("div", {
            className: "px-4 mx-6",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("button", {
            className: "bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "Upvote ", answer.upvote.length), __jsx("button", {
            className: "bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "Downvote ", answer.downvote.length))));
        }));
      } else {
        return __jsx("div", {
          className: "flex justify-center bg-green-300 p-4 m-4 text-2xl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "NO ONE ANSWERED IT");
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.show();
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "flex overflow-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("div", {
        className: "hidden md:block w-1/6 p-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("div", {
        className: "bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Answer"), __jsx("div", {
        className: " w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Ask A Question"), __jsx("div", {
        className: "bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Top"), __jsx("div", {
        className: "bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Bottom")), __jsx("div", {
        className: "block text-center  border-gray-600 w-screen md:w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.state.question.question), __jsx("div", {
        className: "text-2xl bg-green-500 p-8 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
//# sourceMappingURL=index.js.34de0c6afa49841788a7.hot-update.js.map