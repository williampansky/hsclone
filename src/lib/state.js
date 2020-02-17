import counts from 'lib/state/counts';
import canBeAttacked from 'lib/state/can-be-attacked';
import energy from 'lib/state/energy';
import health from 'lib/state/health';

export default {
  buffs: {
    '0': {
      attack: 0,
      spellDamage: 0
    },
    '1': {
      attack: 0,
      spellDamage: 0
    }
  },
  canBeAttacked: canBeAttacked.__DATA_MODEL,
  counts: counts._DATA_MODEL,
  health: health._DATA_MODEL,
  playerClass: {
    '0': 'SOCERER',
    '1': 'GUARDIAN'
  },
  players: {
    '0': {
      deck: [],
      hand: []
    },
    '1': {
      deck: [],
      hand: []
    }
  },
  boards: {
    '0': [
      /**
       * {
       *  canAttack: false,
       *  canBeAttacked: false,
       *  currentAttack: minionObject.attack,
       *  currentHealth: minionObject.health,
       *  hasGuard: false,
       *  minionData: minionObject,
       *  totalAttack: minionObject.attack,
       *  totalHealth: minionObject.health
       * }
       */
    ],
    '1': []
  },
  energy: energy.__DATA_MODEL,
  playedCards: {
    '0': [],
    '1': []
  },
  hoveringCardIndex: {
    '0': null,
    '1': null
  },
  selectedCardIndex: {
    '0': null,
    '1': null
  },
  selectedCardObject: {
    '0': null,
    '1': null
  },
  selectedMinionIndex: {
    '0': null,
    '1': null
  },
  selectedMinionObject: {
    '0': null,
    '1': null
  },
  warcryObject: {
    '0': null,
    '1': null
  },
  turnOrder: ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  })
};
