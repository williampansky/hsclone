import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';

let initialState = 30;

const theirHealthSlice = createSlice({
  name: 'theirHealth',
  initialState,
  reducers: {
    added(state, { payload }) {
      const val = add(Number(state), Number(payload));
      return val;
    },
    subtracted(state, { payload }) {
      const val = subtract(Number(state), Number(payload));
      return val;
    },
    set(state, { payload }) {
      return payload;
    }
  }
});

const { actions, reducer } = theirHealthSlice;
export const { added, subtracted, set } = actions;
export default reducer;
