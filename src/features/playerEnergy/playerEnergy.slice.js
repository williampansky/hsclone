import { createSlice } from '@reduxjs/toolkit';
// import { add, subtract } from 'mathjs';

let initialState = {
  currentEnergy: 0,
  totalAvailableEnergy: 1
};

const playerEnergySlice = createSlice({
  name: 'playerEnergy',
  initialState,
  reducers: {
    addToCurrentEnergy(state, { payload }) {
      const val = add(Number(state), Number(payload));
      state.currentEnergy = val;
    },
    subtractFromCurrentEnergy(state, { payload }) {
      const val = subtract(Number(state), Number(payload));
      state.currentEnergy = val;
    },
    setCurrentEnergyValue(state, { payload }) {
      state.currentEnergy = payload;
    },

    addToTotalAvailableEnergy(state, { payload }) {
      const val = add(Number(state), Number(payload));
      state.currentEnergy = val;
    },
    subtractFromTotalAvailableEnergy(state, { payload }) {
      const val = subtract(Number(state), Number(payload));
      state.currentEnergy = val;
    },
    setTotalAvailableEnergy(state, { payload }) {
      state.currentEnergy = payload;
    }
  }
});

// const { actions, reducer } = playerEnergySlice;

export const {
  addToCurrentEnergy,
  subtractFromCurrentEnergy,
  setCurrentEnergyValue,

  addToTotalAvailableEnergy,
  subtractFromTotalAvailableEnergy,
  setTotalAvailableEnergy
} = playerEnergySlice.actions;

export default playerEnergySlice.reducer;
