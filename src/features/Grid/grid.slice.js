import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  error: null,
  isLoading: true,
  // --- opts
  maxColumns: 200,
  maxRows: 10,
  tileSize: 50
};

const girdSlice = createSlice({
  name: 'gird',
  initialState,
  reducers: {
    initFailure: loadingFailed,
    initStart: loadingStart,
    initSuccess: state => {
      state.isLoading = false;
    },
    setMaxColumns(state, { payload }) {
      state.maxColumns = Number(payload);
    },
    setMaxRows(state, { payload }) {
      state.maxRows = Number(payload);
    },
    setTileSize(state, { payload }) {
      state.tileSize = Number(payload);
    }
  }
});

const { actions, reducer } = girdSlice;

export const { setMaxColumns, setMaxRows, setTileSize } = actions;

export default reducer;
