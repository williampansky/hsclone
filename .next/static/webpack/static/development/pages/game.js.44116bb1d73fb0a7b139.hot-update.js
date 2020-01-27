webpackHotUpdate("static/development/pages/game.js",{

/***/ "./src/features/layout/TheirBoard.jsx":
/*!********************************************!*\
  !*** ./src/features/layout/TheirBoard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheirBoard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/william.pansky/www/hsclone/src/features/layout/TheirBoard.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function TheirBoard(_ref) {
  var children = _ref.children;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (s) {
    return s.layout;
  }),
      boardHeight = _useSelector.boardHeight,
      boardWidth = _useSelector.boardWidth;

  return __jsx("div", {
    "data-file": "TheirBoard",
    className: "jsx-1276012708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1276012708",
    __self: this
  }, "div.jsx-1276012708{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#333;box-shadow:inset 0 0 10px transparent;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;height:calc(100% / 2);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto auto 0;overflow:hidden;width:100%;}div.jsx-1276012708>div.jsx-1276012708+div.jsx-1276012708{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9zcmMvZmVhdHVyZXMvbGF5b3V0L1RoZWlyQm9hcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQixBQUVzQixBQWFGLGlCQUFDLDRFQVpGLGdCQUNzQixzQ0FDaEIsc0JBQ1QsMEVBQ1EsMkVBQ0Msc0JBQ0MsbUdBQ0osbUJBQ0gsZ0JBQ0wsV0FBQyIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbS5wYW5za3kvd3d3L2hzY2xvbmUvc3JjL2ZlYXR1cmVzL2xheW91dC9UaGVpckJvYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlaXJCb2FyZCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBib2FyZEhlaWdodCwgYm9hcmRXaWR0aCB9ID0gdXNlU2VsZWN0b3IocyA9PiBzLmxheW91dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtZmlsZT1cIlRoZWlyQm9hcmRcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDIpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiA+IGRpdiArIGRpdiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuVGhlaXJCb2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbiJdfQ== */\n/*@ sourceURL=/Users/william.pansky/www/hsclone/src/features/layout/TheirBoard.jsx */"));
}
TheirBoard.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ })

})
//# sourceMappingURL=game.js.44116bb1d73fb0a7b139.hot-update.js.map