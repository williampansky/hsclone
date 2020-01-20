import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  error: null,
  isLoading: true,
  // entities: {
  //   //-- Notice that each entity has a unique id (required)
  //   //-- and a renderer property (optional). If no renderer
  //   //-- is supplied with the entity - it won't get displayed.
  //   box1: { x: 200, y: 200, renderer: Box }
  // },
  style: {
    backgroundColor: 'black',
    height: '100%',
    minHeight: 600,
    minWidth: 900,
    overflow: 'hidden',
    width: '100%'
  },
  systems: []
};

const gameEngineSlice = createSlice({
  name: 'gameEngine',
  initialState,
  reducers: {
    initFailure: loadingFailed,
    initStart: loadingStart,
    initSuccess: state => {
      state.isLoading = false;
    },
    setStyleMinHeight(state, { payload }) {
      state.style.minHeight = Number(payload);
    },
    setStyleMinWidth(state, { payload }) {
      state.style.minWidth = Number(payload);
    }
  }
});

const { actions, reducer } = gameEngineSlice;

export const { setStyleMinHeight, setStyleMinWidth } = actions;

export default reducer;
