import { createSlice } from '@reduxjs/toolkit';
import server from '~/server';

let initialState = {
  username: null,
  hero: null,
  id: null,
  connected: false
};

const themSlice = createSlice({
  name: 'them',
  initialState,
  reducers: {
    setTheirConnection(state, { payload }) {
      state.connected = payload;
    },
    setTheirHero(state, { payload }) {
      state.hero = payload;
    },
    setTheirId(state, { payload }) {
      state.id = payload;
    },
    setTheirUsername(state, { payload }) {
      state.username = payload;
    }
  }
});

const { actions, reducer } = themSlice;
export const {
  setTheirConnection,
  setTheirHero,
  setTheirId,
  setTheirUsername
} = actions;
export default reducer;
