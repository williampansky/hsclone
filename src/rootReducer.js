import { combineReducers } from '@reduxjs/toolkit';

import layoutSlice from 'features/layout/layout.slice';

const rootReducer = combineReducers({
  layout: layoutSlice
});

export default rootReducer;
