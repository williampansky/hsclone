import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';
// import debugYourBoard from 'debugData/debugYourBoard.json';

const getInitialState = key => {
  switch (key) {
    case 'debug':
      return;
    // return debugYourBoard;

    default:
      return {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
        slot6: null,
        slot7: null
      };
  }
};

const yourBoard = createSlice({
  name: 'yourBoard',
  initialState: getInitialState(),
  reducers: {
    initYourBoardFailure: loadingFailed,
    initYourBoardStart: loadingStart,
    initYourBoardSuccess: state => {
      state.isLoading = false;
    },
    // addCardToYourBoard(state, { payload }) {
    //   const { item, i } = payload;
    //   const newBoard = [...state.slice(0, i + 1), item, ...state.slice(i + 1)];
    //   return newBoard;
    // }
    addCardToYourBoard(state, { payload }) {
      const { card, slot } = payload;
      state[slot] = card;
    }
  }
});

const { actions, reducer } = yourBoard;

export const {
  initYourBoardFailure,
  initYourBoardStart,
  initYourBoardSuccess,
  addCardToYourBoard
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
