webpackHotUpdate("static/development/pages/game.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "./node_modules/core-js/library/fn/object/freeze.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.freeze */ "./node_modules/core-js/library/modules/es6.object.freeze.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.freeze;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

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
    var artist = card.artist,
        attack = card.attack,
        cardClass = card.cardClass,
        collectible = card.collectible,
        cost = card.cost,
        elite = card.elite,
        entourage = card.entourage,
        flavor = card.flavor,
        health = card.health,
        hideStats = card.hideStats,
        howToEarn = card.howToEarn,
        howToEarnGolden = card.howToEarnGolden,
        id = card.id,
        images = card.images,
        mechanics = card.mechanics,
        name = card.name,
        playRequirements = card.playRequirements,
        race = card.race,
        rarity = card.rarity,
        set = card.set,
        sounds = card.sounds,
        spellDamage = card.spellDamage,
        targetingArrowText = card.targetingArrowText,
        text = card.text,
        type = card.type;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }) // <CardDragLayer
    //   key={index}
    //   index={index}
    //   artist={artist}
    //   attack={attack}
    //   cardClass={cardClass}
    //   collectible={collectible}
    //   cost={cost}
    //   elite={elite}
    //   entourage={entourage}
    //   flavor={flavor}
    //   health={health}
    //   hideStats={hideStats}
    //   howToEarn={howToEarn}
    //   howToEarnGolden={howToEarnGolden}
    //   id={id}
    //   images={images}
    //   mechanics={mechanics}
    //   name={name}
    //   playRequirements={playRequirements}
    //   race={race}
    //   rarity={rarity}
    //   set={set}
    //   sounds={sounds}
    //   spellDamage={spellDamage}
    //   targetingArrowText={targetingArrowText}
    //   text={text}
    //   type={type}
    // >
    //   <Card
    //     artist={artist}
    //     attack={attack}
    //     cardClass={cardClass}
    //     collectible={collectible}
    //     cost={cost}
    //     elite={elite}
    //     entourage={entourage}
    //     flavor={flavor}
    //     health={health}
    //     hideStats={hideStats}
    //     howToEarn={howToEarn}
    //     howToEarnGolden={howToEarnGolden}
    //     id={id}
    //     images={images}
    //     mechanics={mechanics}
    //     name={name}
    //     playRequirements={playRequirements}
    //     race={race}
    //     rarity={rarity}
    //     set={set}
    //     sounds={sounds}
    //     spellDamage={spellDamage}
    //     targetingArrowText={targetingArrowText}
    //     text={text}
    //     type={type}
    //   />
    // </CardDragLayer>
    ;
  }));
};

var Component = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (YourHand);

/***/ }),

/***/ "./src/pages/game/index.js":
/*!*********************************!*\
  !*** ./src/pages/game/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/game/Game */ "./src/components/game/Game.jsx");
/* harmony import */ var features_layout_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/layout/Board */ "./src/features/layout/Board.jsx");
/* harmony import */ var features_layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/layout/Footer */ "./src/features/layout/Footer.jsx");
/* harmony import */ var features_layout_TheirBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/layout/TheirBoard */ "./src/features/layout/TheirBoard.jsx");
/* harmony import */ var features_yourBoard_YourBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/yourBoard/YourBoard */ "./src/features/yourBoard/YourBoard.jsx");
/* harmony import */ var features_yourHand_YourHand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/yourHand/YourHand */ "./src/features/yourHand/YourHand.jsx");
var _jsxFileName = "/Users/william.pansky/www/hsclone/src/pages/game/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(components_game_Game__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(features_layout_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(features_layout_TheirBoard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(features_yourBoard_YourBoard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx(features_yourHand_YourHand__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=game.js.5b4511d13b866bc5ffac.hot-update.js.map