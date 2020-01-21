import { combineReducers } from '@reduxjs/toolkit';

import layoutSlice from 'features/layout/layout.slice';
import matchSlice from 'features/match/match.slice';
import yourHandSlice from 'features/yourHand/yourHand.slice';

const rootReducer = combineReducers({
  layout: layoutSlice,
  match: matchSlice,
  yourHand: yourHandSlice
});

export default rootReducer;
