import { createSlice } from '@reduxjs/toolkit';
import { add, subtract } from 'mathjs';

let initialState = false;

const minionIsAttackingSlice = createSlice({
  name: 'minionIsAttacking',
  initialState,
  reducers: {
    canAttack(state) {
      return true;
    },
    canNotAttack(state) {
      return false;
    }
  }
});

const { actions, reducer } = minionIsAttackingSlice;
export const { canAttack, canNotAttack } = actions;
export default reducer;
