webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/william.pansky/www/hsclone/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/randomQuote".concat(query.author ? "?author=" + query.author : ""), fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`


  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";
  return __jsx("main", {
    className: "jsx-1236022937" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1236022937" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-1236022937" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236022937",
    __self: this
  }, "main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBR3FCLEFBTVUsQUFNRyxVQVhQLFVBTUYsR0FNQSxHQVhJLFFBTUgsR0FNQSxPQVhHLEtBTUUsR0FNdEIsVUFYQSxPQU1BIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtLnBhbnNreS93d3cvaHNjbG9uZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyBcIj9hdXRob3I9XCIgKyBxdWVyeS5hdXRob3IgOiBcIlwifWAsXG4gICAgZmV0Y2hlclxuICApO1xuICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgaGFzIG9wdGlvbmFsIGNoYWluaW5nLCBhZGRlZCBpbiBOZXh0LmpzIHY5LjEuNSxcbiAgLy8gaXMgdGhlIHNhbWUgYXMgYGRhdGEgJiYgZGF0YS5hdXRob3JgXG4gIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcbiAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XG5cbiAgaWYgKCFkYXRhKSBxdW90ZSA9IFwiTG9hZGluZy4uLlwiO1xuICBpZiAoZXJyb3IpIHF1b3RlID0gXCJGYWlsZWQgdG8gZmV0Y2ggdGhlIHF1b3RlLlwiO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvZGl2PlxuICAgICAge2F1dGhvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj4tIHthdXRob3J9PC9zcGFuPn1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucXVvdGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgIGNvbG9yOiAjZTI0M2RlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/william.pansky/www/hsclone/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.59cb710408cd683b0ddb.hot-update.js.map