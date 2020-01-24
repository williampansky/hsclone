import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  enabled: false,
  target: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    right: 0,
    bottom: 0
  }
};

const targetingSlice = createSlice({
  name: 'targeting',
  initialState,
  reducers: {
    enableTargeting(state) {
      state.enabled = true;
    },
    disableTargeting(state) {
      state.enabled = false;
    },
    targetHovered(state, { payload }) {
      const { width, height, top, left, x, y, right, bottom } = payload;
      if (state.enabled)
        state.target = {
          width,
          height,
          top,
          left,
          x,
          y,
          right,
          bottom
        };
    },
    resetHoveredTarget(state) {
      const { target } = initialState;
      state.target = target;
    }
  }
});

const { actions, reducer } = targetingSlice;

export const {
  enableTargeting,
  disableTargeting,
  targetHovered,
  resetHoveredTarget
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
