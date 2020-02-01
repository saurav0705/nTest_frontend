module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/Layout.js":
/*!*************************!*\
  !*** ./pages/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/header.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Layout */ "./pages/Layout.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      Search: false,
      SearchInput: '',
      ham: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      SearchInput: event.target.value
    });
  }

  async componentDidMount() {
    await this.setState({
      'loggedIn': local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('loggedIn')
    }); //console.log(.*)$
    //console.log(.*)$
  }

  async logout() {
    await localStorage.setItem('loggedIn', 'false');
    await localStorage.setItem('token', 'none');
    await this.setState({
      'loggedIn': local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('loggedIn')
    });
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/'); //console.log(.*)$
  }

  profile() {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/personal-Info');
  }

  toggleSearch() {
    this.setState({
      Search: !this.state.Search
    });
  }

  search() {
    var code = event.keyCode || event.which;

    if (code === 13) {
      //13 is the enter keycode
      //console.log(.*)$
      this.toggleSearch();
      localStorage.setItem('query', this.state.SearchInput);
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/questionspage');
    }
  }

  toggleHam() {
    this.setState({
      ham: !this.state.ham
    });
  }

  render() {
    return __jsx("header", {
      className: "bg-gray-100 text-gray-800 px-1 md:px-4  sticky top-0 z-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "py-4 flex whitespace-no-wrap justify-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "block  text-white-500  focus:text-gray focus:outline-none",
      onClick: () => {
        this.toggleHam();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("svg", {
      className: "h-6 w-6 fill-current -mt-2 md:-mt-4",
      viewBox: "0 0 24 24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("path", {
      className: this.state.ham ? 'hidden' : 'block',
      fillRule: "evenodd",
      d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("path", {
      className: this.state.ham ? 'block' : 'hidden',
      d: "M23.302,16.628l-5.395-5.415l5.407-5.345c0.222-0.222,0.222-0.584,0-0.806l-1.538-1.546\r c-0.106-0.107-0.251-0.165-0.403-0.165s-0.295,0.062-0.402,0.165l-5.382,5.328l-5.39-5.325c-0.107-0.106-0.251-0.165-0.403-0.165\r c-0.152,0-0.296,0.062-0.403,0.165L7.858,5.066c-0.222,0.222-0.222,0.584,0,0.806l5.407,5.346l-5.391,5.41\r c-0.107,0.107-0.168,0.251-0.168,0.403s0.057,0.296,0.168,0.403l1.538,1.546c0.111,0.11,0.255,0.168,0.403,0.168\r c0.144,0,0.292-0.054,0.403-0.168l5.37-5.396l5.374,5.391c0.111,0.111,0.255,0.169,0.402,0.169c0.145,0,0.293-0.054,0.402-0.169\r l1.539-1.546c0.106-0.106,0.168-0.25,0.168-0.402C23.471,16.879,23.408,16.735,23.302,16.628z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))), __jsx("div", {
      className: this.state.ham ? 'block' : 'hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "p-2 z-1 mt-6 px-8  absolute bg-yellow-400 text-white rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("a", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/questionspage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("a", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "All Questions")))), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      className: "block h-6",
      src: "data:image/png;base64,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",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("h4", {
      className: "hidden md:block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "QuestionOverflow"))))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "block bg-orange-500  rounded-full text-white px-4  hover:text-white focus:text-white focus:outline-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Products"), __jsx("div", {
      className: "block bg-white-500 p-2 z-1 px-8 absolute bg-yellow-400 hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("a", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "link1"), __jsx("a", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "link1"), __jsx("a", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "link1"), __jsx("a", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "link1"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "hidden md:block  rounded-full px-4 hover:text-white hover:bg-gray-500 focus:text-white focus:outline-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Customers")), __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "hidden md:block  rounded-full px-2 hover:bg-gray-500  hover:text-white focus:text-white focus:outline-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Use Cases")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("input", {
      value: this.state.SearchInput,
      onKeyPress: () => this.search(),
      onChange: this.handleChange,
      className: "w-5/6 hidden md:block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  w-full appearance-none leading-normal",
      type: "text",
      placeholder: "Search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), __jsx("img", {
      onClick: () => this.toggleSearch(),
      src: "data:image/png;base64,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",
      className: "h-6 block md:hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("div", {
      className: this.state.Search ? 'block' : 'hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("input", {
      value: this.state.SearchInput,
      onKeyPress: () => this.search(),
      onChange: this.handleChange,
      className: " w-screen z-1 px-8 absolute left-0 top-10 mt-5 border-3 block md:hidden bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  w-full appearance-none leading-normal",
      type: "text",
      placeholder: "Search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    })))), __jsx("div", {
      className: this.state.loggedIn ? 'hidden' : 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signupAndLogin/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("button", {
      className: "text-xs md:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Log In"))), __jsx("div", {
      className: "ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signupAndLogin/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("button", {
      className: "text-xs md:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Sign Up")))), __jsx("div", {
      className: this.state.loggedIn ? 'flex' : 'hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("img", {
      className: "block h-8 mr-1 md:mt-2 rounded-full",
      src: _images__WEBPACK_IMPORTED_MODULE_4__["urlOfImages"].user,
      onClick: () => {
        this.profile();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), __jsx("div", {
      className: "ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("button", {
      className: "text-xs md:text-xl bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
      onClick: () => {
        this.logout();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Log Out")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/banner */ "./pages/home/banner.js");
/* harmony import */ var _home_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/options */ "./pages/home/options.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_home_banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(_home_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/home/banner.js":
/*!******************************!*\
  !*** ./pages/home/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\home\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Banner = () => {
  return __jsx("div", {
    className: " bg-yellow-500 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex-row content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center m-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-6xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "We <3 people who code")))), __jsx("div", {
    className: "text-2xl flex justify-center m-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.")), __jsx("div", {
    className: "block md:flex xl:flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("button", {
    className: "bg-white  w-15 m-2 border border-orange-500 text-orange-500  py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "For Developers")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("button", {
    className: "bg-orange-500 w-15 border text-white  py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "For Buisnesses"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/home/options.js":
/*!*******************************!*\
  !*** ./pages/home/options.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\home\\options.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Options = () => {
  return __jsx("div", {
    className: "block md:flex justify-center text-center mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "max-w-sm  rounded overflow-hidden border shadow-lg m-4 h-auto p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full  object-cover p-5",
    align: "middle",
    src: "https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    className: "text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Public Q&A"), __jsx("div", {
    className: "text-3l  p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account."), __jsx("button", {
    className: "bg-blue-800 m-2  text-white font-bold py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Browse Questions")), __jsx("div", {
    className: "max-w-sm rounded overflow-hidden m-4 md:-mt-4  md:mb-8 border shadow-lg m-4 h-auto p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full  object-cover p-5",
    align: "middle",
    src: "https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("div", {
    className: "text-xl ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Private Q&A"), __jsx("div", {
    className: "text-3l p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Level up with Question Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine."), __jsx("button", {
    className: "bg-orange-500 m-2  text-white font-bold py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Try For Free")), __jsx("div", {
    className: "max-w-sm rounded overflow-hidden border shadow-lg m-4 h-auto p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full  object-cover p-5",
    align: "middle",
    src: "https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    className: "text-xl ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Browse Jobs"), __jsx("div", {
    className: "text-3l p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Find the right job through high quality listings and search for roles based on title, technology Question, salary, location, and more."), __jsx("button", {
    className: "bg-blue-800 m-2 text-white font-bold py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Find A Job")));
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./pages/images.js":
/*!*************************!*\
  !*** ./pages/images.js ***!
  \*************************/
/*! exports provided: urlOfImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlOfImages", function() { return urlOfImages; });
const urlOfImages = {
  'google': "data:image/png;base64,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",
  'facebook': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==',
  'github': 'https://webstockreview.net/images/github-icon-png-5.png',
  'stack-overflow': 'https://i.stack.imgur.com/GKbCl.png',
  'user': 'https://www.w3schools.com/w3css/img_avatar3.png',
  'copyright': 'http://www.pngall.com/wp-content/uploads/2017/05/Copyright-Symbol-PNG-File.png',
  'answer': 'https://image.flaticon.com/icons/png/512/1055/premium/1055441.png',
  'QandA': 'https://cdn4.iconfinder.com/data/icons/contact-us-set-6/256/50-512.png',
  'upvote': 'https://p7.hiclipart.com/preview/48/708/1000/icon-up-arrow-png-pic.jpg',
  'downvote': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAACrCAMAAADiivHpAAAAulBMVEX////u7u7+AADt7e339/f09PT6+vrx8fH8/Pz7AAD/AAD8///9dXb4bW7u9vX9ICP+h4b4fX32dXb9fn/+mpv+lZT2goH9j4/1mpn4iIf+pqX4///+LzD9Ozvt8vTt9/bw1dT1kZL2iovxxMPypaL9oqHu5+X4Vlr5VlT6Tk37REf+REL9Li39DQ/wzs794+D8YV/8wL79bGv74uH5sa/+8/Pvu7n/6ur9urf82dX9GBrwv7/r+vX4aXHxNyS2AAALTUlEQVR4nO2daWObuhKGEbuihCxtmjjEOFudpGlzsjRt03Pu//9bF5CxBQi0IiBGnzqtO7x+EKMZLdiy8uaCrDlhboRObvj4n7DhYiP/GPCwEeRGgA0P/1PJHTb8qu/g4vLy+PjkZHZwiNtB3srGl7zNZidpm6Xt6urqOGufP19dJ8akbtxZPYBKbmxoU9sO/a/TRv6H02BbQJ3B+vdvQEejeRptC6jT5p7DBWosj56jePXoVIVTz6AcPlBOCZRDXt0hr+6QV6/6NgiqRarDI5UA5eLm5U3BEPhP8WclUPbXWFKduNSNQQHvkOAdrj7CfVOxb0VQZ3SpfN25SarTiiH1zfsoM64OyKsDRpjQAsqM1FGD+jqBmkCVfZ+MEZSTt9UnQG6sPhHkxvrqeSuunrfi6nkrrp43l3Tnke70gSKlepqk0r65t3IX5s0Nsgaw4YPc8PG/YcPNDQt/zCOMIMCGRxgMd9GMv16htJ3LyJjUtTtMmj/hzHuhaGZe9Z3MlDrUzqVEwlmXKppwlr6ZoVrvizFQ4y6Ko0MlUPZoQCkXxWMGJRKjgGpRrAYqDebGpBKgyFEv8HHspxgu/hw2PGx4dSMouWvwHR0qzUfZ2ahHU9eB1I27ljyqnpwATXnUgRIn+3PFnb48qiS1kkfxPso6010toMxI7beE+TSBmkDpBaVUwvQESiSY6yqKtYAyHcz9vOH54QAbPjZcwvDcMPtzSDG8kPjYyii5q/mOjpQ42ZeLgFuqR5Hq8ktdu1vBLXdXoczcEe/9qqCuIkeqiCjPgo+gKFYEtTPblpVi1R41GlDKRfGYQTGKYo5RtHT1LmMU49HTKrWhR4GQ4LpKN0Igc3XS8EnfmbuFBlCEOy1SQ7rUjbte8qhdJVD2ScWdmcUFqUdZMd3VAsqM1I1vXlA664JdtcycBerj1HqKoGYTKL520AsoRjAHZITUNcOpBZQZqZtg7ppv8Z4SJ/sg7kG0RdwFZ10Ul8ADAjw21j1UZoQGTqQI6jACDX2ElApKUml9hEPqxl0BCtQe5Q5rPXVQ46j1JlCmiuIPDEqqgOoHlFapG3cFKEowX20JKo2ipWRCLkI6GoJ507ijKrXlm8vnUWA8eRS31KAmVbEoVnxQVUEhc1JHXRT3U8KMENSnCdSQQdWDOegwmGsEZUbqJpivlkPJtVGPXDZtMdy64bOMzEOsOMP5KTYmdfOfLOIu8ORR6pWmch61c5Q4WiZOhL55AQrUHuXB1no7RwMuYSZQMqB6LorHA2qrexRvMJeIkPqDecQTzLVIJYJ5aTs2ZW8273Zsn/TQvNU784BU8yjEL5Wprl3qxp2e81KCEU0ZlDmpoy6Kp1pvAvXxQDmUT3BdXeiAk5YYZUbqxrdY7GceQuI54IQUi+JdpOW8FI9UYtQr7sKI8qi9xpViVakfrCjem0qYCdR2gup79qBXUOSQ2nJ1pwQqsyTeNmUQVItU0bMwzZPFzFlpzonomjvVOfO92pw5p1TeaXLqnHn9YZI4L8X9oGpZUt81KHXUJcyuQakTqAlUD6CkK03zoDqTKt6jSKN8CGlwPUqn1Ipvs0VxsqcGaq+yuABGXRQvkiixrGzmCDmVm6qccCaVPpJLRchKoijSvYeza1DL27v7bw/z+fn5+ff9avuhBMr+UXP4Pb3MfP7wcH93u0zGBSq5EnhDucY2iwbUo7iK4uShB1JwbqgoZoJiFMXECB08QtOg0gs+JrxFsexruvU31ZdxS3CCx92du2JVg/Kv6Ubom2lSD/koq/WN4iZKGPQPNPv0wVdZqf3WeiE6NQvqFI0TlGVF99Dg0HcfjRZUsLSN9SkIXwMFqWxQpZJI82u6neTGHKibpNs3aaycAxI8NnyStWwW92QEVHo7btNaT2Y+oCXhLH1zKigdmfnq6m9mQNnwrQAl+pruEqiWhFMClMhtQs9GwhR8TjkNbgFUCJT1YgAUfEHqUvWDEnn0QhT+MNCjfA33lA+UdKbPnLZG17Dzp+9aj9TWGNXl6io24qOOOcGjWOa8lNg3Zy7RKy2/5h48tN8tqH3kZaf1dEglMazzKNz/eB9llXT3vUNQaeH93ve6nraro+Muu9SJhT4KKAvNOwtTcI56XynW16PQa3fx/FXvPW0E1WVRXJxWRRY66wgUPMNfRpfU+jen/XYV74kksZ/GyN1F910kU9C+j7RLpbuzSt1VZb9Va+93ktcu5oWzSShZqaKrMKuPAwFQUnVB9LOLMPVz0YHUnrdPxy+6QUH4FIMhg5LcPv2muOWgDurHm3lQIjFKbtuZbz1r5gSfkd+JVCoohVGPMq60DiVaq+N0bNhFEgeapUe95jxKe3IClt+1cUpB7S+Tj/qa7uha4zIf/Dcxs9l15ZsXlJarR1/0kfoSdSq17+3Tcy2QUtrzzqX2Cip51AIqjVCPiWFQBoN51hZfodrPNWJO9tf/OpdaCeas81K8h6d4XwqWbdxQxgS/uervGGNKLc+ZU+5CiN871s1ruoGGqSloXwCmVMCQyrElvt/XdC9uVDnZ9k1U32fegVTSnXlQYPGk2Kfg3WI7zhQvVR++pal7Kg5KaS9NdYROfqmB+tX6y9dapYLatp9yMHf4IqTUCJ16SHblpzshfFkAUAm4MlJFg7lDJhC6d9yRvkmt4XfpPgX/+qgmdbBFcf1BFUp3kfUoWfOlHfEan9kyJLWnonjtO55J9id4GIdmpfZ5pjj1HchVx/A8MC61X1DgQmqdD170Bqo5mHf77utI6ljDZdQ8jjVLlSqKQWWM7Ow4EqvFd8J9Ct738atVuFnEXWg4gtxcFNdHaK7D1/imojfRZArC34w+ojWP6v+NZNh3iP6IgvqJmt11JrV3UGkTWTtOu9+TNTJQqkVx4Rv5YqCywwlDB9XJ0W9k/RJ58n6hsDepG1AtwZwMaaVkQi2YZy055A1T0N5LmO6UpYYU3wUoFvjiEBx5F2g/EE07ixWwfKPwnA8UtPd9JCY1lJfq1X0DuaijvqWj8P3OWR3D9+q7BExL5fgy+dW7qAucNEc45ko74UlxeKonqb2DCq0HHlDZHumtBpW230xQ0Ib/DASUhkNIjQdMWt59nbtDP5nPHTwjjuP1IxWU3sMZrhZUw7qBl00D/DE3IFZX/YBcUA0o7ii+XcKIn1igbmPfXXvglLq6amkhWEWqVdyFXvKo/M9g2TrywWyPtIC7lt0EYnnUUIritW8QP7eASjn9iUXcDajW0wzK8dBuS0CHL5Wos7WggIf8/UZS8K9fPmqwzaDC+L0Z1DUaFChKSJOpNEXXIItZSHRCBwVh9lu7Hq871WDO/u0qt/EQkkfZjq3tpzHWRtPyFZwrnpfilcr85tLnpXRM8xEHnJILWpfCWzXpL9gzJnUoJczKd3RaI5VmBpcR4W4AJcwAQIHkrg7qPiLdTaDwf/pdXb6C8HfijAGUdKVJv3pDUbz2HVeXr+AfVIojLaA6lwpKv9hYGPmRq/Q24XCfG25ugLBmhCE2fMJYDSUVdwHhjuI78Ku/5PiCyu4A6Y5Tql+XWgx0glKLu8BXGrLyKJmieL3xIVnuE08f/LssXsZGy6OsRne6FhcGVxRvBuWEPH2VnZ6iJRPbW8IQ2ctivb8MwsPF2t0EqpZCFgk6tM+DLKSOG5SuJXUKqOSCSMkHCYoz0y9/s8xqek03cXWW7/UutvTPi5sU0o5tn2YZVPkVTuVkQvCe1qWW3TVLLUCtJqJxKxlu8z/JGJyfi2+zga/YMabXt4q7tqI4vwt6K03WTU0Tn2XKCS7Z3bnuTp9U2qPC+yh3XsIU7qJnCP9EIcXdYEuYXkD5zn9H/1uACRQbFAgi4EygWKBC0phAjQ/U/wEA37xz9PuS8AAAAABJRU5ErkJggg==' //'question':'https://lh3.googleusercontent.com/proxy/e-Gwn9DYpsYZDiY33rTCdgwQacPKcZ7v0rvJy99vLkbakZZCampxyTvgOc19wZdq1WECobq9ozAKeKpx61sFewp8ZBXGkKifTUrE2cgM'

};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Layout */ "./pages/Layout.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home */ "./pages/home.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _pages_personal_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/personal-Info */ "./pages/personal-Info.js");
/* harmony import */ var _pages_questionspage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/questionspage */ "./pages/questionspage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_questionWithAnswers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/questionWithAnswers */ "./pages/questionWithAnswers.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const click = () => {};

class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_pages_home__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./pages/personal-Info.js":
/*!********************************!*\
  !*** ./pages/personal-Info.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\personal-Info.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Personal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    if (!local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('loggedIn')) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }

    const url = 'https://questionstack-266907.appspot.com/users/info';

    try {
      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": '*',
          'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('token')
        }
      });

      if (response.ok) {
        const data = await response.json(); //console.log(.*)$
        //   //console.log(.*)$

        await this.setState({
          user: data.user
        });
      } else {
        alert('unable to fetch');
      }
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
    }
  }

  renderQuestions() {
    if (!this.state.user.questions) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
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

      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.user.questions.map(ques => {
        return __jsx("p", {
          key: ques._id,
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

  renderAnswers() {
    if (!this.state.user.answers) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
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

      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.user.answers.map(ans => {
        return __jsx("p", {
          key: ans._id,
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

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      src: _images__WEBPACK_IMPORTED_MODULE_2__["urlOfImages"].user,
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
      src: _images__WEBPACK_IMPORTED_MODULE_2__["urlOfImages"].copyright,
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
      src: _images__WEBPACK_IMPORTED_MODULE_2__["urlOfImages"]['stack-overflow'],
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

}

/* harmony default export */ __webpack_exports__["default"] = (Personal);

/***/ }),

/***/ "./pages/questionWithAnswers.js":
/*!**************************************!*\
  !*** ./pages/questionWithAnswers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\questionWithAnswers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class QueryWithAns extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      question: {},
      answers: [],
      loggedIn: false,
      objId: '',
      form: false,
      quesbox: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      quesbox: event.target.value
    });
  }

  async componentDidMount() {
    if (local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('loggedIn')) {
      await this.setState({
        'loggedIn': true
      });
    }

    this.show();
  }

  async upvote(id) {
    const url = 'https://questionstack-266907.appspot.com//answers/' + id + '/upvote';

    try {
      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": '*',
          'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('token')
        }
      });

      if (response.ok) {
        const data = await response.json(); //console.log(.*)$
        //console.log(.*)$

        this.componentDidMount(); //   await this.setState({
        //       user:data.user
        //   })
      } else {
        alert('unable to fetch');
      }
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
      throw new Error(error);
    } //console.log(.*)$

  }

  async downvote(id) {
    const url = 'https://questionstack-266907.appspot.com//answers/' + id + '/downvote';

    try {
      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": '*',
          'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('token')
        }
      });

      if (response.ok) {
        const data = await response.json(); //console.log(.*)$
        //console.log(.*)$

        this.componentDidMount(); //   await this.setState({
        //       user:data.user
        //   })
      } else {
        alert('unable to fetch');
      }
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
      throw new Error(error);
    } //console.log(.*)$

  }

  async show() {
    await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('https://questionstack-266907.appspot.com//questions/' + local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('obj_id')).then(response => response.json()).then(res => {
      //console.log(.*)$
      if (res.question) {
        this.setState({
          question: res.question
        });

        if (this.state.question.answers) {
          this.setState({
            answers: this.state.question.answers
          });
        }
      }

      this.setState({
        'objId': local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('obj_id')
      });
    });
  }

  async submitanswer() {
    //console.log(.*)$
    const url = 'https://questionstack-266907.appspot.com//questions/' + this.state.objId + '/answer';

    try {
      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": '*',
          'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('token')
        },
        body: JSON.stringify({
          answer: this.state.quesbox
        })
      });

      if (response.ok) {
        const data = await response.json(); //console.log(.*)$
        //console.log(.*)$

        this.toggleBox();
        this.componentDidMount(); //   await this.setState({
        //       user:data.user
        //   })
      } else {
        alert('your Session expired');
        localStorage.setItem('token', '');
        localStorage.setItem('loggedIn', false);
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
      }
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
      throw new Error(error);
    }
  }

  renderAnswer() {
    if (this.state.answers && this.state.answers.length > 0) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, this.state.answers.map(answer => {
        return __jsx("div", {
          key: answer._id,
          className: "flex justify-center bg-green-300 p-4 m-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, __jsx("div", {
          className: "block md:flex justify-center w-full",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, __jsx("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, __jsx("img", {
          src: _images__WEBPACK_IMPORTED_MODULE_2__["urlOfImages"].answer,
          className: "h-6 mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }))), __jsx("div", {
          className: "p-1 w-auto text-4m md:text-2xl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, __jsx("span", {
          className: "ml-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, answer.answer), __jsx("div", {
          className: "text-right text-gray-500",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "-- ", answer.author.name)), __jsx("div", {
          className: this.state.loggedIn ? 'block p-6' : 'hidden p-6',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, __jsx("button", {
          onClick: () => this.upvote(answer._id),
          className: "bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, "Upvote ", answer.upvote.length), __jsx("button", {
          onClick: () => this.downvote(answer._id),
          className: "bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "Downvote ", answer.downvote.length))));
      }));
    } else {
      return __jsx("div", {
        className: "flex justify-center bg-green-300 p-4 m-4 text-2xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "NO ONE ANSWERED IT YET");
    }
  }

  toggleBox() {
    this.setState({
      form: !this.state.form
    });
  }

  render() {
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      className: this.state.form ? 'hidden' : 'block',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("div", {
      className: "flex overflow-hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("div", {
      className: this.state.loggedIn ? 'block' : 'hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("div", {
      className: "fixed top-10  left-3 md:relative md:w-1/6 p-6 -ml-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("div", {
      onClick: () => this.toggleBox(),
      className: "bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-1 px-4 -ml-3 md:py-2 md:px-4 rounded m-1 md:m-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("span", {
      className: "w-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, " A")))), __jsx("div", {
      className: "block text-center  border-gray-600 w-screen w-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("center", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("div", {
      key: this.state.question._id,
      className: "text-2l md:text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "Q."), "   ", this.state.question.question), __jsx("div", {
      className: "text-2xl bg-green-500 p-8 text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "Answers", this.renderAnswer()))))), __jsx("div", {
      className: this.state.form ? 'block' : 'hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx("center", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx("div", {
      className: "max-w-sm rounded overflow-hidden shadow-lg mt-10 border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx("div", {
      className: "px-4 py-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("div", {
      className: "font-bold text-xl mb-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
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
        lineNumber: 221
      },
      __self: this
    }), __jsx("button", {
      className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",
      onClick: () => this.submitanswer(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Submit Question"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QueryWithAns);

/***/ }),

/***/ "./pages/questionspage.js":
/*!********************************!*\
  !*** ./pages/questionspage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./pages/images.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ntest\\next_tailwind\\pages\\questionspage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Query extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      questionList: [],
      answers: [],
      questionBox: false,
      quesbox: '',
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      quesbox: event.target.value
    });
  }

  async componentDidMount() {
    await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('https://questionstack-266907.appspot.com//questions/').then(response => response.json()).then(res => {
      this.setState({
        questionList: [...res.questionList]
      });
    });
  }

  questionDetails(obj) {
    localStorage.setItem('obj_id', obj);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/questionWithAnswers');
  }

  renderQuestion() {
    if (!this.state.questionList || this.state.questionList.length === 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: "text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "NOTHING FOUND"));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.questionList.map(question => {
      return __jsx("div", {
        key: question._id,
        className: "text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600",
        onClick: () => this.questionDetails(question._id),
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

  logIn() {
    return local_storage__WEBPACK_IMPORTED_MODULE_5___default.a.get('loggedIn');
  }

  openQuestionDialog() {
    this.setState({
      questionBox: !this.state.questionBox
    });
  }

  async submitquestion() {
    //console.log(.*)$
    //console.log(.*)$
    const url = 'https://questionstack-266907.appspot.com//questions';

    try {
      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": '*',
          'Authorization': 'bearer ' + local_storage__WEBPACK_IMPORTED_MODULE_5___default.a.get('token')
        },
        body: JSON.stringify({
          question: this.state.quesbox
        })
      });

      if (response.ok) {
        const data = await response.json(); //console.log(.*)$
        //console.log(.*)$

        this.openQuestionDialog();
        this.componentDidMount(); //   await this.setState({
        //       user:data.user
        //   })
      } else {
        alert('Log In to add question');
        localStorage.setItem('token', '');
        localStorage.setItem('loggedIn', false);
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
      }
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
      throw new Error(error);
    }
  }

  async test() {
    if (local_storage__WEBPACK_IMPORTED_MODULE_5___default.a.get('query') && local_storage__WEBPACK_IMPORTED_MODULE_5___default.a.get('query').length > 0) {
      //console.log(.*)$
      await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('https://questionstack-266907.appspot.com//questions/search/' + local_storage__WEBPACK_IMPORTED_MODULE_5___default.a.get('query')).then(response => response.json()).then(res => {
        //console.log(.*)$
        this.setState({
          questionList: [...res.questionList]
        });
        localStorage.setItem('query', '');
      });
    } else {
      return;
    }
  }

  render() {
    this.test();
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("div", {
      className: this.state.questionBox ? 'hidden' : 'block',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("div", {
      className: "flex overflow-hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("div", {
      className: "fixed bottom-3 right-3 md:block  p-4 md:p-8 -ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("div", {
      className: " w-full bg-yellow-300 hover:bg-yellow-500 text-white font-bold  mt-10 p-2  rounded ",
      onClick: () => {
        this.openQuestionDialog();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("span", {
      className: "text-2l md:text-2xl ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, " Q"))), __jsx("div", {
      className: "block text-center  border-gray-600 w-screen ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, this.renderQuestion()))), __jsx("div", {
      className: this.state.questionBox ? 'block' : 'hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("center", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("div", {
      className: "max-w-sm rounded overflow-hidden shadow-lg mt-10 border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("div", {
      className: "px-4 py-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("div", {
      className: "font-bold text-xl mb-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
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
        lineNumber: 151
      },
      __self: this
    }), __jsx("button", {
      className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",
      onClick: () => this.submitquestion(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Submit Question"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Query);

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\ntest\next_tailwind\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("local-storage");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map