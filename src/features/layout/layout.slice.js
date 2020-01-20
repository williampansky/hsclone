import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  error: null,
  isLoading: true,
  footerHeight: 0,
  headerHeight: 0,
  stageHeight: 0,
  stageWidth: 0
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
    setFooterHeight(state, { payload }) {
      state.footerHeight = Number(payload);
    },
    setHeaderHeight(state, { payload }) {
      state.headerHeight = Number(payload);
    },
    setStageHeight(state, { payload }) {
      state.stageHeight = Number(payload);
    },
    setStageWidth(state, { payload }) {
      state.stageWidth = Number(payload);
    }
  }
});

const { actions, reducer } = layoutSlice;

export const {
  initLayoutFailure,
  initLayoutStart,
  initLayoutSuccess,
  setFooterHeight,
  setHeaderHeight,
  setStageHeight,
  setStageWidth
} = actions;

// export const initLayout = () => async dispatch => {
//   try {
//     dispatch(initLayoutStart());
//     const locations = await fetchLocationsFromApi();
//     dispatch(initLayoutSuccess(locations));
//   } catch (err) {
//     dispatch(initLayoutFailure(err));

//     // recursive failure init
//     setTimeout(() => {
//       dispatch(initLayout());
//     }, 2000);
//   }
// };

export default reducer;
