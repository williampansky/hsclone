import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';
import debugData from '~/data/debug/hand.json';
import server from '~/server';

const getInitialState = key => {
  switch (key) {
    case 'debug':
      return {
        error: null,
        isLoading: false,
        cardsInHand: debugData,
        selectedCard: null
      };

    default:
      return {
        error: null,
        isLoading: false,
        cardsInHand: [],
        selectedCard: null
      };
  }
};

const yourHand = createSlice({
  name: 'yourHand',
  initialState: getInitialState(),
  reducers: {
    addCardsToYourHand(state, { payload }) {
      state.cardsInHand = payload;
    },
    addCardToYourHand(state, { payload }) {
      const { item, i } = payload;
      let newArray = state.slice();
      newArray.splice(i, 0, item);
      state.cardsInHand = newArray;
    },
    deselectCard(state, { payload }) {
      state.selectedCard = null;
    },
    playSpellFromYourHand(state, { payload }) {
      const { item } = payload;
      console.log(item);
    },
    removeCardFromYourHand(state, { payload }) {
      const { id } = payload;
      state.cardsInHand = state.cardsInHand.filter(item => item.id !== id);
    },
    selectCard(state, { payload }) {
      state.selectedCard = payload;
    },
    updateCardInYourHand(state, { payload }) {
      const { item, i } = payload;
      state.cardsInHand = state.map((entry, index) => {
        // This isn't the entry we care about - keep it as-is
        if (index !== i) return entry;

        // Otherwise, this is the one we want - return an updated value
        return {
          ...entry,
          ...item
        };
      });
    }
  }
});

const { actions, reducer } = yourHand;

export const {
  initYourHandFailure,
  initYourHandStart,
  initYourHandSuccess,
  addCardsToYourHand,
  addCardToYourHand,
  playSpellFromYourHand,
  removeCardFromYourHand,
  selectCard,
  deselectCard
} = actions;

export const initYourHand = () => dispatch => {
  function getStartingCards() {
    return new Promise((response, reject) => {
      const socket = server();

      // ask server for the gid of the current user
      socket.emit('get-starting-cards', null, result => {
        const { code, data } = result;
        if (code === 200) {
          response(data);
        } else {
          console.error('initYourHand error');
        }
      });
    });
  }

  getStartingCards().then(data => dispatch(addCardsToYourHand(data)));
};

export default reducer;
