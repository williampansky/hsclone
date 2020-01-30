import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';

let initialState = null;

const minionCanAttackSlice = createSlice({
  name: 'minionCanAttack',
  initialState,
  reducers: {
    minionSelected(state, { payload }) {
      return payload;
    },
    minionDeselected(state) {
      return null;
    }
  }
});

const { actions, reducer } = minionCanAttackSlice;
export const { minionSelected, minionDeselected } = actions;
export default reducer;
