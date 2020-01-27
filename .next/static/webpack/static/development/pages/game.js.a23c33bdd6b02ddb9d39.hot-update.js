webpackHotUpdate("static/development/pages/game.js",{

/***/ "./src/features/yourHand/YourHand.jsx":
/*!********************************************!*\
  !*** ./src/features/yourHand/YourHand.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YourHand; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/william.pansky/www/hsclone/src/features/yourHand/YourHand.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Card from 'components/Card/Card.component';
// import CardDragLayer from 'systems/CardDragLayer';

function YourHand() {
  // const yourCards = useSelector(s => s.yourHand);
  var yourCards = [];
  return __jsx("div", {
    "data-file": "YourHand",
    className: "jsx-3614598509",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, yourCards.map(function (card, index) {
    return __jsx("div", {
      className: "jsx-3614598509",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3614598509",
    __self: this
  }, "div.jsx-3614598509{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:var(--yourHand-color);box-sizing:border-box;height:var(--yourHand-height);position:relative;width:100vw;z-index:var(--yourHand-zIndex);}div.jsx-3614598509>div.jsx-3614598509{position:relative;top:-20px;}div.jsx-3614598509>div.jsx-3614598509+div.jsx-3614598509{margin-left:calc(calc(var(--card-height) / 1.4) / -3.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9zcmMvZmVhdHVyZXMveW91ckhhbmQvWW91ckhhbmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUVnQixBQVdPLEFBR3NDLGtCQUY5QyxVQUFDLDRCQUU4QyxrQkFidEMsMkVBQ0YsNkZBQ0ksbUdBQ1UsaUNBQ1gsc0JBQ1EsOEJBQ1osa0JBQ04sWUFDbUIsK0JBQUMiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW0ucGFuc2t5L3d3dy9oc2Nsb25lL3NyYy9mZWF0dXJlcy95b3VySGFuZC9Zb3VySGFuZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnRzL0NhcmQvQ2FyZC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IENhcmREcmFnTGF5ZXIgZnJvbSAnc3lzdGVtcy9DYXJkRHJhZ0xheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91ckhhbmQoKSB7XG4gIC8vIGNvbnN0IHlvdXJDYXJkcyA9IHVzZVNlbGVjdG9yKHMgPT4gcy55b3VySGFuZCk7XG4gIGNvbnN0IHlvdXJDYXJkcyA9IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLWZpbGU9XCJZb3VySGFuZFwiPlxuICAgICAge3lvdXJDYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICAgIH0pfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS15b3VySGFuZC1jb2xvcik7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXlvdXJIYW5kLWhlaWdodCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICB6LWluZGV4OiB2YXIoLS15b3VySGFuZC16SW5kZXgpO1xuXG4gICAgICAgICAgJiA+IGRpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYgPiBkaXYgKyBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgLyAxLjQpIC8gLTMuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/william.pansky/www/hsclone/src/features/yourHand/YourHand.jsx */"));
}

/***/ })

})
//# sourceMappingURL=game.js.a23c33bdd6b02ddb9d39.hot-update.js.map