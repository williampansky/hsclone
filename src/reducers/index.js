import { combineReducers } from '@reduxjs/toolkit';

import goldSlice from 'features/gold/gold.slice';
// import cardsSlice from 'features/cards/cards.slice';
// import layoutSlice from 'features/layout/layout.slice';
// import matchSlice from 'features/match/match.slice';
// import yourHandSlice from 'features/yourHand/yourHand.slice';
// import yourBoardSlice from 'features/yourBoard/yourBoard.slice';
// import targetingSlice from 'features/targeting/targeting.slice';

const rootReducer = combineReducers({
  gold: goldSlice
  // cards: cardsSlice,
  // layout: layoutSlice,
  // match: matchSlice,
  // yourHand: yourHandSlice,
  // yourBoard: yourBoardSlice,
  // targeting: targetingSlice
});

export default rootReducer;
