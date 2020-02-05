export default {
  counts: {
    0: {
      deck: 30,
      hand: 0,
      timer: 75000
    },
    1: {
      deck: 30,
      hand: 0,
      timer: 75000
    }
  },
  players: {
    0: {
      deck: [],
      hand: []
    },
    1: {
      deck: [],
      hand: []
    }
  },
  boards: {
    0: {
      slot1: null,
      slot2: null,
      slot3: null,
      slot4: null,
      slot5: null,
      slot6: null,
      slot7: null
    },
    1: {
      slot1: null,
      slot2: null,
      slot3: null,
      slot4: null,
      slot5: null,
      slot6: null,
      slot7: null
    }
  },
  energy: {
    0: {
      current: 0,
      total: 0
    },
    1: {
      current: 0,
      total: 0
    }
  },
  playedCards: {
    0: [],
    1: []
  },
  hoveringCardIndexObject: {
    0: null,
    1: null
  },
  selectedCardIndexObject: {
    0: null,
    1: null
  },
  turnOrder: ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  })
};
