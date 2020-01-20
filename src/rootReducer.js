import { combineReducers } from '@reduxjs/toolkit';

import layoutSlice from 'features/layout/layout.slice';
import matchSlice from 'features/match/match.slice';

const rootReducer = combineReducers({
  layout: layoutSlice,
  match: matchSlice
});

export default rootReducer;
