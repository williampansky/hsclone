import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';
import exists from 'utils/element.exists';

let initialState = 0;

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice(state, { payload }) {
      return Number(payload);
    },
    addToPrice(state, { payload }) {
      if (!exists(payload)) payload = 0;
      const val = add(Number(state), Number(payload));
      return val;
    },
    subtractFromPrice(state, { payload }) {
      if (!exists(payload)) payload = 0;
      const val = subtract(Number(state), Number(payload));
      return val;
    }
  }
});

export const { setPrice, addToPrice, subtractFromPrice } = priceSlice.actions;

export default priceSlice.reducer;
