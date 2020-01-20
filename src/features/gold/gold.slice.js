import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';
// import exists from 'utils/element.exists';

let initialState = 0;

const goldSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setGoldValue(state, { payload }) {
      return Number(payload);
    },

    incrementGoldValue(state) {
      return state + 1;
    },

    tickGoldValue(state) {
      setInterval(function() {
        incrementGoldValue();
      }, 200);
    }

    // addToPrice(state, { payload }) {
    //   if (!exists(payload)) payload = 0;
    //   const val = add(Number(state), Number(payload));
    //   return val;
    // },

    // subtractFromPrice(state, { payload }) {
    //   if (!exists(payload)) payload = 0;
    //   const val = subtract(Number(state), Number(payload));
    //   return val;
    // }
  }
});

const { actions, reducer } = goldSlice;
export const { setGoldValue, incrementGoldValue, tickGoldValue } = actions;
export default reducer;
