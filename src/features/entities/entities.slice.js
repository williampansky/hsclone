import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  ents: [],
  selected: {
    id: null
  }
};

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    initFailure: loadingFailed,
    initStart: loadingStart,
    initSuccess: state => {
      state.isLoading = false;
    },
    addNewEntityToStage(state, { payload }) {
      const { name, type, positionX, positionY } = payload;
      state.ents.push({
        positionX,
        positionY
      });
    },
    selectEntity(state, { payload }) {
      const { id } = payload;
      state.selected = {
        id
      };
    },
    deselectCurrentEntity(state) {
      state.selected = {
        id: null
      };
    }
  }
});

const { actions, reducer } = entitiesSlice;

export const {
  addNewEntityToStage,
  selectEntity,
  deselectCurrentEntity
} = actions;

export default reducer;
