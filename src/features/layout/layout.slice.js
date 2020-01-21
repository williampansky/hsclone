import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  error: null,
  isLoading: false,
  boardHeight: 0,
  boardWidth: 0,
  debugBarHeight: 0,
  footerHeight: 0,
  headerHeight: 0
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    initLayoutFailure: loadingFailed,
    initLayoutStart: loadingStart,
    initLayoutSuccess: state => {
      state.isLoading = false;
    },
    getFooterHeight(state) {
      return state.footerHeight;
    },
    setBoardHeight(state, { payload }) {
      state.boardHeight = Number(payload);
    },
    setBoardWidth(state, { payload }) {
      state.boardWidth = Number(payload);
    },
    setDebugBarHeight(state, { payload }) {
      state.debugBarHeight = Number(payload);
    },
    setFooterHeight(state, { payload }) {
      state.footerHeight = Number(payload);
    },
    setHeaderHeight(state, { payload }) {
      state.headerHeight = Number(payload);
    }
  }
});

const { actions, reducer } = layoutSlice;

export const {
  initLayoutFailure,
  initLayoutStart,
  initLayoutSuccess,
  getFooterHeight,
  setBoardHeight,
  setBoardWidth,
  setDebugBarHeight,
  setFooterHeight,
  setHeaderHeight
} = actions;

// const fetchMapDroneImagesFromNeighborhoods = data => {
//   return data;
// }

// export const initLayout = () => async dispatch => {
//   try {
//     dispatch(initLayoutStart());
//     const footerHeight = await getFooterHeight();
//     dispatch(initLayoutSuccess(footerHeight));
//   } catch (err) {
//     dispatch(initLayoutFailure(err));

//     // recursive failure init
//     setTimeout(() => {
//       dispatch(initLayout());
//     }, 2000);
//   }
// };

export default reducer;
