(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-image: url(" + escape(__webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg")) + ");\n  background-color: black;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/fonts/fonts.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/fonts/fonts.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alegreya+Sans);", ""]);

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/fonts/fonts.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/Home */ "./src/Pages/Home.js");
/* harmony import */ var _Pages_Event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/Event */ "./src/Pages/Event.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Navbar */ "./src/Components/Navbar.js");





var _jsxFileName = "/Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/src/App.js";









var app = {
  fontFamily: "font-family: 'Alegreya Sans', sans-serif;"
};

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        store: Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["Store"])(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: app,
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Navbar__WEBPACK_IMPORTED_MODULE_13__["Navbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
        exact: true,
        path: "/",
        component: _Pages_Home__WEBPACK_IMPORTED_MODULE_8__["Home"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
        path: "/events",
        component: _Pages_Event__WEBPACK_IMPORTED_MODULE_9__["Event"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Navbar.js":
/*!**********************************!*\
  !*** ./src/Components/Navbar.js ***!
  \**********************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return connectedApp; });
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux_es_connect_connect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux/es/connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");






var _jsxFileName = "/Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/src/Components/Navbar.js";







var style = {
  navbar: {
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: '1.5s'
  },
  navbarHidden: {
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    width: '100%',
    opacity: '0',
    transition: '0.5s'
  },
  mobileMenu: {
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: '1.5s',
    padding: '20px',
    float: 'right'
  },
  mobileMenuHidden: {
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    width: '100%',
    opacity: '0',
    transition: '0.5s',
    padding: '20px',
    float: 'right'
  },
  icon: {
    float: 'right',
    marginRight: '40px'
  },
  logo: {
    width: '70px',
    float: 'left',
    padding: '5px'
  },
  link: {
    height: '100%',
    float: 'right',
    padding: '20px',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    textTransform: 'uppercase'
  }
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar() {
    Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbar);

    return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar).apply(this, arguments));
  }

  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      window.addEventListener('scroll', function (e) {
        return _this.handleScroll(e);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(event) {
      var scrollposition = event.srcElement.scrollingElement.scrollTop;

      if (scrollposition > 60 && this.props.navbar.fullwidth) {
        this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["navbarActions"].hideFullwidthBar());
      } else if (scrollposition < 60 && !this.props.navbar.fullwidth) {
        this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["navbarActions"].showFullwidthBar());
      } else {}
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        style: this.props.navbar.fullwidth ? style.navbar : style.navbarHidden,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: style.logo,
        src: _logo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "fireSpot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        style: Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style.link, {
          float: 'right'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, " Logga in "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        style: style.link,
        to: "/kalender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, " Kalender "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        style: style.link,
        to: "/resultat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " Resultat "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        style: style.link,
        to: "/om-oss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " Om oss ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        style: !this.props.navbar.fullwidth ? style.mobileMenu : style.mobileMenuHidden,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
        style: style.icon,
        color: "white",
        size: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navbar: state.navbar
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var connectedApp = Object(react_redux_es_connect_connect__WEBPACK_IMPORTED_MODULE_10__["default"])(mapStateToProps, mapDispatchToProps)(Navbar);


/***/ }),

/***/ "./src/Pages/Event.js":
/*!****************************!*\
  !*** ./src/Pages/Event.js ***!
  \****************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return connectedApp; });
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Navbar */ "./src/Components/Navbar.js");
/* harmony import */ var grommet_es6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet/es6 */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");





var _jsxFileName = "/Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/src/Pages/Event.js";





var style = {
  box: {
    background: 'linear-gradient( #219bba, white)',
    minHeight: '400px'
  }
};

var Events =
/*#__PURE__*/
function (_Component) {
  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Events, _Component);

  function Events() {
    Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Events);

    return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Events).apply(this, arguments));
  }

  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Events, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_9__["eventsActions"].get());
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "App-header",
        style: {
          minHeight: '35vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        style: {
          paddingTop: '35px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Fun\xE4sdalen rando")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet_es6__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        style: style.box,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Fancy underrubrik")));
    }
  }]);

  return Events;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var connectedApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Events);


/***/ }),

/***/ "./src/Pages/Home.js":
/*!***************************!*\
  !*** ./src/Pages/Home.js ***!
  \***************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return connectedApp; });
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var grommet_es6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/es6 */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");





var _jsxFileName = "/Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/src/Pages/Home.js";






var style = {
  textbox: {
    backgroundColor: 'white',
    opacity: '0.6',
    height: '100%'
  },
  section: {
    minHeight: '50vh'
  }
};

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_8__["eventsActions"].get());
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.events.length);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        container: true,
        style: {
          maxWidth: '900px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "It's here."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Get the story")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.section,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        container: true,
        style: {
          maxWidth: '900px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    events: state.events
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var connectedApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Home);


/***/ }),

/***/ "./src/actions/events.actions.js":
/*!***************************************!*\
  !*** ./src/actions/events.actions.js ***!
  \***************************************/
/*! exports provided: eventsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsActions", function() { return eventsActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");




function get() {
  return function (dispatch) {
    dispatch(request());

    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(_helpers__WEBPACK_IMPORTED_MODULE_1__["events"]) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(_helpers__WEBPACK_IMPORTED_MODULE_1__["events"])) {
      dispatch(success(_helpers__WEBPACK_IMPORTED_MODULE_1__["events"]));
    } else {
      failure();
    }
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["eventsConstants"].GET_EVENTS_REQUEST
    };
  }

  function success(payload) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["eventsConstants"].GET_EVENTS_SUCCESS,
      payload: payload
    };
  }

  function failure() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["eventsConstants"].GET_EVENTS_FAILURE
    };
  }
}

var eventsActions = {
  get: get
};

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: eventsActions, navbarActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.actions */ "./src/actions/events.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventsActions", function() { return _events_actions__WEBPACK_IMPORTED_MODULE_0__["eventsActions"]; });

/* harmony import */ var _navbar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.actions */ "./src/actions/navbar.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navbarActions", function() { return _navbar_actions__WEBPACK_IMPORTED_MODULE_1__["navbarActions"]; });




/***/ }),

/***/ "./src/actions/navbar.actions.js":
/*!***************************************!*\
  !*** ./src/actions/navbar.actions.js ***!
  \***************************************/
/*! exports provided: navbarActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarActions", function() { return navbarActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


function hideFullwidthBar() {
  return function (dispatch) {
    dispatch(request());
    dispatch(success());
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["navbarConstants"].HIDE_FULLWIDTH_BAR_REQUEST
    };
  }

  function success() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["navbarConstants"].HIDE_FULLWIDTH_BAR_SUCCESS
    };
  }
}

function showFullwidthBar() {
  return function (dispatch) {
    dispatch(request());
    dispatch(success());
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["navbarConstants"].SHOW_FULLWIDTH_BAR_REQUEST
    };
  }

  function success() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["navbarConstants"].SHOW_FULLWIDTH_BAR_SUCCESS
    };
  }
}

var navbarActions = {
  showFullwidthBar: showFullwidthBar,
  hideFullwidthBar: hideFullwidthBar
};

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg.8da12d28.jpg";

/***/ }),

/***/ "./src/constants/events.constants.js":
/*!*******************************************!*\
  !*** ./src/constants/events.constants.js ***!
  \*******************************************/
/*! exports provided: eventsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsConstants", function() { return eventsConstants; });
var eventsConstants = {
  GET_EVENTS_REQUEST: 'EVENTS_GET_EVENTS_REQUEST',
  GET_EVENTS_SUCCESS: 'EVENTS_GET_EVENTS_SUCCESS',
  GET_EVENTS_FAILURE: 'EVENTS_GET_EVENTS_FAILURE'
};

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: eventsConstants, navbarConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.constants */ "./src/constants/events.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventsConstants", function() { return _events_constants__WEBPACK_IMPORTED_MODULE_0__["eventsConstants"]; });

/* harmony import */ var _navbar_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.constants */ "./src/constants/navbar.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navbarConstants", function() { return _navbar_constants__WEBPACK_IMPORTED_MODULE_1__["navbarConstants"]; });




/***/ }),

/***/ "./src/constants/navbar.constants.js":
/*!*******************************************!*\
  !*** ./src/constants/navbar.constants.js ***!
  \*******************************************/
/*! exports provided: navbarConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarConstants", function() { return navbarConstants; });
var navbarConstants = {
  HIDE_FULLWIDTH_BAR_REQUEST: 'NAVBAR_HIDE_FULLWIDTH_BAR_REQUEST',
  HIDE_FULLWIDTH_BAR_SUCCESS: 'NAVBAR_HIDE_FULLWIDTH_BAR_SUCCESS',
  SHOW_FULLWIDTH_BAR_REQUEST: 'NAVBAR_SHOW_FULLWIDTH_BAR_REQUEST',
  SHOW_FULLWIDTH_BAR_SUCCESS: 'NAVBAR_SHOW_FULLWIDTH_BAR_SUCCESS'
};

/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/fonts/fonts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/fonts/fonts.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/fonts/fonts.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/helpers/events.mockup.js":
/*!**************************************!*\
  !*** ./src/helpers/events.mockup.js ***!
  \**************************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var events = [{
  raceID: 0,
  name: 'Fjellpuls cup Årebjörnen',
  startDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2018-12-15'),
  endDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2018-12-15'),
  distance: 5000,
  verticals: 1000,
  duration: '',
  verticalPerMinute: null,
  distanceVerticalRatio: 5,
  raceRank: null,
  individual: null
}, {
  raceID: 1,
  name: 'Funäsdalen rando',
  startDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2018-12-20'),
  endDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2018-12-21'),
  distance: 10000,
  verticals: 2000,
  duration: '',
  verticalPerMinute: null,
  distanceVerticalRatio: 5,
  raceRank: null,
  individual: null
}, {
  raceID: 2,
  name: 'Kebnekaise classic',
  startDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2019-04-15'),
  endDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2019-04-18'),
  distance: 3000,
  verticals: 1000,
  duration: '',
  verticalPerMinute: null,
  distanceVerticalRatio: 3,
  raceRank: null,
  individual: null
}];

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: Store, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/helpers/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["Store"]; });

/* harmony import */ var _events_mockup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.mockup */ "./src/helpers/events.mockup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events_mockup__WEBPACK_IMPORTED_MODULE_1__["events"]; });




/***/ }),

/***/ "./src/helpers/store.js":
/*!******************************!*\
  !*** ./src/helpers/store.js ***!
  \******************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../reducers */ "./src/reducers/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);




var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])();
function Store() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], loggerMiddleware));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/reducers/events.reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/events.reducer.js ***!
  \****************************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


function events() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["eventsConstants"].GET_EVENTS_REQUEST:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        events: action.payload
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["eventsConstants"].GET_EVENTS_SUCCESS:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        events: action.payload
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["eventsConstants"].GET_EVENTS_FAILURE:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        events: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _events_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.reducer */ "./src/reducers/events.reducer.js");
/* harmony import */ var _navbar_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.reducer */ "./src/reducers/navbar.reducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  events: _events_reducer__WEBPACK_IMPORTED_MODULE_1__["events"],
  navbar: _navbar_reducer__WEBPACK_IMPORTED_MODULE_2__["navbar"]
}));

/***/ }),

/***/ "./src/reducers/navbar.reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/navbar.reducer.js ***!
  \****************************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });
/* harmony import */ var _Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


function navbar() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fullwidth: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["navbarConstants"].HIDE_FULLWIDTH_BAR_REQUEST:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["navbarConstants"].HIDE_FULLWIDTH_BAR_SUCCESS:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        fullwidth: false
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["navbarConstants"].SHOW_FULLWIDTH_BAR_REQUEST:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["navbarConstants"].SHOW_FULLWIDTH_BAR_SUCCESS:
      return Object(_Users_david_lundsten_GIT_swedish_skimo_swedish_skimo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        fullwidth: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.'); // Execute callback

            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/david.lundsten/GIT/swedish-skimo/swedish-skimo/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map