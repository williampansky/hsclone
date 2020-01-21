import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

const getInitialState = key => {
  switch (key) {
    case 'debug':
      // prettier-ignore
      return [
        { background: 'white', id: 'MINION_min1', name: 'min1', type: 'MINION' },
        { background: 'red', id: 'MINION_min2', name: 'min2', type: 'MINION' },
        { background: 'lightblue', id: 'SPELL_spell0', name: 'spell0', type: 'SPELL' },
        { background: 'lightgreen', id: 'SPELL_spell1', name: 'spell1', type: 'SPELL' },
        { background: 'green', id: 'MINION_min3', name: 'min3', type: 'MINION' },
        { background: 'teal', id: 'MINION_min4', name: 'min4', type: 'MINION' },
        { background: 'darkblue', id: 'MINION_min5', name: 'min5', type: 'MINION' },
        { background: '#999', id: 'MINION_min6', name: 'min6', type: 'MINION' },
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
