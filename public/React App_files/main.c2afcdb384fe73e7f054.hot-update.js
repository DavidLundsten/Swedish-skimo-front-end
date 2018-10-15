webpackHotUpdate("main",{

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


/***/ })

})
//# sourceMappingURL=main.c2afcdb384fe73e7f054.hot-update.js.map