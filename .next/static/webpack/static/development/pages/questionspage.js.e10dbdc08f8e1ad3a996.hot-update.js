webpackHotUpdate("static\\development\\pages\\questionspage.js",{

/***/ "./pages/questionspage.js":
/*!********************************!*\
  !*** ./pages/questionspage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
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






var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\questionspage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Query =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Query, _Component);

  function Query() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Query);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Query).call(this));
    _this.state = {
      questionList: [],
      answers: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Query, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()('http://localhost:8000/questions/').then(function (response) {
        return response.json();
      }).then(function (res) {
        _this2.setState({
          questionList: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.questionList)
        });
      });
    }
  }, {
    key: "renderQuestion",
    value: function renderQuestion() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.state.questionList.map(function (question) {
        return __jsx("div", {
          className: "text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
          onClick: function onClick() {
            return console.log(question._id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Q.   ", question.question);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "flex overflow-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "hidden md:block w-1/6 p-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: " w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Ask A Question"), __jsx("div", {
        className: "bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Top"), __jsx("div", {
        className: "bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Bottom")), __jsx("div", {
        className: "block text-center  border-gray-600 w-screen md:w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.renderQuestion())));
    }
  }]);

  return Query;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Query);

/***/ })

})
//# sourceMappingURL=questionspage.js.e10dbdc08f8e1ad3a996.hot-update.js.map