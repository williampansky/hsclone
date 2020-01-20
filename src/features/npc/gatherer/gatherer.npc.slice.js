import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  error: null,
  isLoading: true,
  currentAction: null
};

const gathererNpcSlice = createSlice({
  name: 'gathererNPC',
  initialState,
  reducers: {
    initGathererNpcFailure: loadingFailed,
    initGathererNpcStart: loadingStart,
    initGathererNpcSuccess: state => {
      state.isLoading = false;
    },
    setCurrentGathererNpcAction(state, { payload }) {
      state.currentAction = payload;
    }
  }
});

const { actions, reducer } = gathererNpcSlice;

export const {
  initGathererNpcFailure,
  initGathererNpcStart,
  setCurrentGathererNpcAction
} = actions;

export default reducer;
