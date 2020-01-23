import { createSlice } from '@reduxjs/toolkit';
import {
  loadingStart,
  loadingFailed,
  loadingSuccess
} from 'utils/redux.loading';
import debugCards from 'debugData/debugCards.json';

let initialState = {
  error: null,
  isLoading: false,
  allCards: debugCards
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    initCardsFailure: loadingFailed,
    initCardsStart: loadingStart,
    initCardsSuccess: loadingSuccess
  }
});

const { actions, reducer } = cardsSlice;

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
