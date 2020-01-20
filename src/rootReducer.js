import { combineReducers } from '@reduxjs/toolkit';

import gameEngineSlice from 'features/GameEngine/gameEngine.slice';
import goldSlice from 'features/gold/gold.slice';
import layoutSlice from 'features/layout/layout.slice';
import viewportSlice from 'features/Viewport/viewport.slice';
import gridSlice from 'features/Grid/grid.slice';
import entitiesSlice from 'features/entities/entities.slice';

const rootReducer = combineReducers({
  grid: gridSlice,
  gameEngine: gameEngineSlice,
  gold: goldSlice,
  layout: layoutSlice,
  viewport: viewportSlice,
  entities: entitiesSlice
});

export default rootReducer;
