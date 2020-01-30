import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';
import debugHand from 'data/debug/board.json';

const getInitialState = key => {
  switch (key) {
    case 'debug':
      return {
        slot1: null,
        slot2: null,
        slot3: debugHand[2],
        slot4: debugHand[1],
        slot5: debugHand[0],
        slot6: null,
        slot7: null
      };

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

const yourBoardSlice = createSlice({
  name: 'yourBoard',
  initialState: getInitialState('debug'),
  reducers: {
    // addMinion(state, { payload }) {
    //   const { item, i } = payload;
    //   const newBoard = [...state.slice(0, i + 1), item, ...state.slice(i + 1)];
    //   return newBoard;
    // }
    addMinion(state, { payload }) {
      const { card, slot } = payload;
      state[slot] = card;
    },
    removeMinion(state, { payload }) {
      state[payload] = null;
    }
  }
});

const { actions, reducer } = yourBoardSlice;
export const { addMinion, removeMinion } = actions;
export default reducer;
