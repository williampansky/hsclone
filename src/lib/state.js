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
  // prettier-ignore
  boards: {
    0: {
      slot1: { canAttack: false, canBeAttacked: false, minionData: null },
      slot2: { canAttack: false, canBeAttacked: false, minionData: null },
      slot3: { canAttack: false, canBeAttacked: false, minionData: null },
      slot4: { canAttack: false, canBeAttacked: false, minionData: null },
      slot5: { canAttack: false, canBeAttacked: false, minionData: null },
      slot6: { canAttack: false, canBeAttacked: false, minionData: null },
      slot7: { canAttack: false, canBeAttacked: false, minionData: null },
    },
    1: {
      slot1: { canAttack: false, canBeAttacked: false, minionData: null },
      slot2: { canAttack: false, canBeAttacked: false, minionData: null },
      slot3: { canAttack: false, canBeAttacked: false, minionData: null },
      slot4: { canAttack: false, canBeAttacked: false, minionData: null },
      slot5: { canAttack: false, canBeAttacked: false, minionData: null },
      slot6: { canAttack: false, canBeAttacked: false, minionData: null },
      slot7: { canAttack: false, canBeAttacked: false, minionData: null }
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
  selectedMinionIndexObject: {
    0: null,
    1: null
  },
  turnOrder: ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  })
};
