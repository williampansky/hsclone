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
    className: "jsx-2321838442",
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
    id: "2321838442",
    __self: this
  }, "div.jsx-2321838442{background:gray;box-sizing:border-box;height:var(--footer-height);position:relative;width:100vw;z-index:200;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9zcmMvZmVhdHVyZXMvbGF5b3V0L0Zvb3Rlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUVtQixnQkFDTSxzQkFDTSw0QkFDVixrQkFDTixZQUNBLFlBQUMiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW0ucGFuc2t5L3d3dy9oc2Nsb25lL3NyYy9mZWF0dXJlcy9sYXlvdXQvRm9vdGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEZvb3RlckhlaWdodCB9IGZyb20gJ2ZlYXR1cmVzL2xheW91dC9sYXlvdXQuc2xpY2UnO1xuaW1wb3J0IFlvdXJIYW5kIGZyb20gJ2ZlYXR1cmVzL3lvdXJIYW5kL1lvdXJIYW5kJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gJ3JlYWN0LXVzZS1kaW1lbnNpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtyZWYsIHsgaGVpZ2h0IH1dID0gdXNlRGltZW5zaW9ucyh7IGxpdmVNZWFzdXJlOiBmYWxzZSB9KTtcblxuICBjb25zdCBoYW5kbGVEaXNwYXRjaCA9IHVzZUNhbGxiYWNrKFxuICAgIGhlaWdodCA9PiB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goc2V0Rm9vdGVySGVpZ2h0KGhlaWdodCkpO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGVpZ2h0ICYmIGhhbmRsZURpc3BhdGNoKGhlaWdodCk7XG4gIH0sIFtoYW5kbGVEaXNwYXRjaCwgaGVpZ2h0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtZmlsZT1cIkZvb3RlclwiIHJlZj17cmVmfT5cbiAgICAgIDxZb3VySGFuZCAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICB6LWluZGV4OiAyMDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/william.pansky/www/hsclone/src/features/layout/Footer.jsx */"));
});

/***/ })

})
//# sourceMappingURL=game.js.7b967db625f097d4d78f.hot-update.js.map