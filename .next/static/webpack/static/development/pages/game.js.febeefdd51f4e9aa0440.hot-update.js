webpackHotUpdate("static/development/pages/game.js",{

/***/ "./src/features/yourHand/TheirHand.jsx":
/*!*********************************************!*\
  !*** ./src/features/yourHand/TheirHand.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheirHand; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/william.pansky/www/hsclone/src/features/yourHand/TheirHand.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Card from 'components/Card/Card.component';
// import CardDragLayer from 'systems/CardDragLayer';

function TheirHand() {
  // const yourCards = useSelector(s => s.yourHand);
  var theirCards = [];
  return __jsx("div", {
    "data-file": "TheirHand",
    className: "jsx-3584714752",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, theirCards.map(function (card, index) {
    return __jsx("div", {
      className: "jsx-3584714752",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3584714752",
    __self: this
  }, "div.jsx-3584714752{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--board-theirHand-background-color);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;height:var(--theirHand-height);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;width:100vw;z-index:var(--theirHand-zIndex);}div.jsx-3584714752>div.jsx-3584714752{position:relative;top:-20px;}div.jsx-3584714752>div.jsx-3584714752+div.jsx-3584714752{margin-left:calc(calc(var(--card-height) / 1.4) / -3.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9zcmMvZmVhdHVyZXMveW91ckhhbmQvVGhlaXJIYW5kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFFc0IsQUFXQyxBQUdzQyxrQkFGOUMsVUFBQyw0QkFFOEMscUNBYlIsbURBQzdCLHNCQUNULDBFQUNRLDJFQUNVLCtCQUNSLG1HQUNMLGtCQUNOLFlBQ29CLGdDQUFDIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9zcmMvZmVhdHVyZXMveW91ckhhbmQvVGhlaXJIYW5kLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudHMvQ2FyZC9DYXJkLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgQ2FyZERyYWdMYXllciBmcm9tICdzeXN0ZW1zL0NhcmREcmFnTGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVpckhhbmQoKSB7XG4gIC8vIGNvbnN0IHlvdXJDYXJkcyA9IHVzZVNlbGVjdG9yKHMgPT4gcy55b3VySGFuZCk7XG4gIGNvbnN0IHRoZWlyQ2FyZHMgPSBbXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1maWxlPVwiVGhlaXJIYW5kXCI+XG4gICAgICB7dGhlaXJDYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICAgIH0pfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2FyZC10aGVpckhhbmQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXRoZWlySGFuZC1oZWlnaHQpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgei1pbmRleDogdmFyKC0tdGhlaXJIYW5kLXpJbmRleCk7XG5cbiAgICAgICAgICAmID4gZGl2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiA+IGRpdiArIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAvIDEuNCkgLyAtMy41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/william.pansky/www/hsclone/src/features/yourHand/TheirHand.jsx */"));
}

/***/ })

})
//# sourceMappingURL=game.js.febeefdd51f4e9aa0440.hot-update.js.map