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
  health: {
    0: 30,
    1: 30
  },
  playerClass: {
    0: 'SOCERER',
    1: 'GUARDIAN'
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
  //
  // prettier-ignore
  boards: {
    0: [],
    1: []
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
  hoveringCardIndex: {
    0: null,
    1: null
  },
  selectedCardIndex: {
    0: null,
    1: null
  },
  selectedCardObject: {
    0: null,
    1: null
  },
  selectedMinionIndex: {
    0: null,
    1: null
  },
  selectedMinionObject: {
    0: null,
    1: null
  },
  turnOrder: ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  })
};
