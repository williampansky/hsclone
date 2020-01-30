import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';

let initialState = 1;

const theirEnergyTotalSlice = createSlice({
  name: 'theirEnergyTotal',
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

const { actions, reducer } = theirEnergyTotalSlice;
export const { added, subtracted, set } = actions;
export default reducer;