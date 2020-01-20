import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

/**
 *
 */
let initialState = {
  error: null,
  isLoading: true,
  fitWorldClicked: false
};

const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    initStageFailure: loadingFailed,
    initStageStart: loadingStart,
    initStageSuccess(state) {
      state.isLoading = false;
    },
    fitWorld(state) {
      state.fitWorldClicked = true;
    }
  }
});

const { actions, reducer } = viewportSlice;
export const { fitWorld } = actions;
export default reducer;
