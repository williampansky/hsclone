import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

const getInitialState = key => {
  switch (key) {
    case 'debug':
      // prettier-ignore
      return [
        { background: 'white', id: 'MINION_test1_0', name: 'test1', type: 'MINION' },
        { background: 'red', id: 'MINION_test2_1', name: 'test2', type: 'MINION' },
        { background: 'green', id: 'MINION_test3_2', name: 'test3', type: 'MINION' },
      ];

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
