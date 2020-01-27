webpackHotUpdate("static/development/pages/game.js",{

/***/ "./src/features/layout/Footer.jsx":
/*!****************************************!*\
  !*** ./src/features/layout/Footer.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var features_layout_layout_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/layout/layout.slice */ "./src/features/layout/layout.slice.js");
/* harmony import */ var features_yourHand_YourHand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/yourHand/YourHand */ "./src/features/yourHand/YourHand.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_use_dimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use-dimensions */ "./node_modules/react-use-dimensions/es/index.js");

var _jsxFileName = "/Users/william.pansky/www/hsclone/src/features/layout/Footer.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useDimensions = Object(react_use_dimensions__WEBPACK_IMPORTED_MODULE_6__["default"])({
    liveMeasure: false
  }),
      _useDimensions2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      ref = _useDimensions2[0],
      height = _useDimensions2[1].height;

  var handleDispatch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (height) {
    return dispatch(Object(features_layout_layout_slice__WEBPACK_IMPORTED_MODULE_3__["setFooterHeight"])(height));
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    height && handleDispatch(height);
  }, [handleDispatch, height]);
  return __jsx("div", {
    "data-file": "Footer",
    ref: ref,
    className: "jsx-224844844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(features_yourHand_YourHand__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "224844844",
    __self: this
  }, "div.jsx-224844844{background:gray;box-sizing:border-box;height:calc(100vh - var(--footer-height));position:relative;width:100vw;z-index:200;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9zcmMvZmVhdHVyZXMvbGF5b3V0L0Zvb3Rlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUVtQixnQkFDTSxzQkFDb0IsMENBQ3hCLGtCQUNOLFlBQ0EsWUFBQyIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbS5wYW5za3kvd3d3L2hzY2xvbmUvc3JjL2ZlYXR1cmVzL2xheW91dC9Gb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0Rm9vdGVySGVpZ2h0IH0gZnJvbSAnZmVhdHVyZXMvbGF5b3V0L2xheW91dC5zbGljZSc7XG5pbXBvcnQgWW91ckhhbmQgZnJvbSAnZmVhdHVyZXMveW91ckhhbmQvWW91ckhhbmQnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSAncmVhY3QtdXNlLWRpbWVuc2lvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3JlZiwgeyBoZWlnaHQgfV0gPSB1c2VEaW1lbnNpb25zKHsgbGl2ZU1lYXN1cmU6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGhhbmRsZURpc3BhdGNoID0gdXNlQ2FsbGJhY2soXG4gICAgaGVpZ2h0ID0+IHtcbiAgICAgIHJldHVybiBkaXNwYXRjaChzZXRGb290ZXJIZWlnaHQoaGVpZ2h0KSk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2hdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoZWlnaHQgJiYgaGFuZGxlRGlzcGF0Y2goaGVpZ2h0KTtcbiAgfSwgW2hhbmRsZURpc3BhdGNoLCBoZWlnaHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1maWxlPVwiRm9vdGVyXCIgcmVmPXtyZWZ9PlxuICAgICAgPFlvdXJIYW5kIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgei1pbmRleDogMjAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/william.pansky/www/hsclone/src/features/layout/Footer.jsx */"));
});

/***/ })

})
//# sourceMappingURL=game.js.2f95bac8029946b6c30b.hot-update.js.map