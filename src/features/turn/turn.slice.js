import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';

let initialState = 'YOUR_TURN';

const turnSlice = createSlice({
  name: 'turn',
  initialState,
  reducers: {
    theirTurn(state) {
      return 'THEIR_TURN';
    },
    yourTurn(state) {
      return 'YOUR_TURN';
    },
    setTurn(state, { payload }) {
      return payload;
    }
  }
});

const { actions, reducer } = turnSlice;
export const { theirTurn, yourTurn, setTurn } = actions;
export default reducer;
