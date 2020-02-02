import { createSlice } from '@reduxjs/toolkit';
import server from '~/server';

let initialState = {
  username: null,
  hero: null,
  id: null,
  connected: false
};

const youSlice = createSlice({
  name: 'you',
  initialState,
  reducers: {
    setYourConnection(state, { payload }) {
      state.connected = payload;
    },
    setYourHero(state, { payload }) {
      state.hero = payload;
    },
    setYourId(state, { payload }) {
      state.id = payload;
    },
    setYourUsername(state, { payload }) {
      state.username = payload;
    }
  }
});

const { actions, reducer } = youSlice;
export const {
  setYourConnection,
  setYourHero,
  setYourId,
  setYourUsername
} = actions;
export default reducer;
