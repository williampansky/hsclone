import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';
import debugData from '~/data/debug/hand.json';

const getInitialState = key => {
  switch (key) {
    case 'debug':
      return debugData;

    default:
      return [];
  }
};

const yourHand = createSlice({
  name: 'yourHand',
  initialState: getInitialState('debug'),
  reducers: {
    initYourHandFailure: loadingFailed,
    initYourHandStart: loadingStart,
    initYourHandSuccess: state => {
      state.isLoading = false;
    },
    addCardToYourHand(state, { payload }) {
      const { item, i } = payload;
      let newArray = state.slice();
      newArray.splice(i, 0, item);
      return newArray;
    },
    playSpellFromYourHand(state, { payload }) {
      const { item } = payload;
      console.log(item);
    },
    removeCardFromYourHand(state, { payload }) {
      const { id } = payload;
      return state.filter(item => item.id !== id);
    },
    updateCardInYourHand(state, { payload }) {
      const { item, i } = payload;
      return state.map((entry, index) => {
        // This isn't the entry we care about - keep it as-is
        if (index !== i) return entry;

        // Otherwise, this is the one we want - return an updated value
        return {
          ...entry,
          ...item
        };
      });
    }
  }
});

const { actions, reducer } = yourHand;

export const {
  initYourHandFailure,
  initYourHandStart,
  initYourHandSuccess,
  addCardToYourHand,
  playSpellFromYourHand,
  removeCardFromYourHand
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
