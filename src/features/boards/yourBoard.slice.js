import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';
import { add, subtract } from 'mathjs';
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
  initialState: getInitialState(),
  reducers: {
    // addMinion(state, { payload }) {
    //   const { item, i } = payload;
    //   const newBoard = [...state.slice(0, i + 1), item, ...state.slice(i + 1)];
    //   return newBoard;
    // }
    addYourMinion(state, { payload }) {
      const { card, slot } = payload;
      state[slot] = card;
    },
    removeYourMinion(state, { payload }) {
      state[payload] = null;
    },
    setYourMinionHealth(state, { payload }) {
      const { attack, card, slot } = payload;
      const val = subtract(Number(state[slot].health), Number(attack));
      const newCard = {
        ...card,
        health: val
      };

      state[slot] = newCard;
    }
  }
});

const { actions, reducer } = yourBoardSlice;
export const { addYourMinion, removeYourMinion, setYourMinionHealth } = actions;
export default reducer;
