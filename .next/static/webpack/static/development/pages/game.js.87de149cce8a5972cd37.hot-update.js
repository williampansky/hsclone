webpackHotUpdate("static/development/pages/game.js",{

/***/ "./src/features/yourHand/YourHand.jsx":
/*!********************************************!*\
  !*** ./src/features/yourHand/YourHand.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/william.pansky/www/hsclone/src/features/yourHand/YourHand.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n\n  & > div {\n    position: relative;\n    top: -20px;\n  }\n\n  & > div + div {\n    margin-left: calc(calc(var(--card-height) / 1.4) / -3.5);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // import Card from 'components/Card/Card.component';
// import CardDragLayer from 'systems/CardDragLayer';

var YourHand = function YourHand() {
  // const yourCards = useSelector(s => s.yourHand);
  var yourCards = [];
  var length = yourCards.length;
  return __jsx(Component, {
    "data-layout": "YourHand",
    "data-length": length,
    numberOfCardsInHand: length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, yourCards.map(function (card, index) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }));
};

var Component = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (YourHand);

/***/ })

})
//# sourceMappingURL=game.js.87de149cce8a5972cd37.hot-update.js.map