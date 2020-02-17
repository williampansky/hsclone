import boards from 'lib/state/boards';
import buffs from 'lib/state/buffs';
import canBeAttacked from 'lib/state/can-be-attacked';
import counts from 'lib/state/counts';
import energy from 'lib/state/energy';
import health from 'lib/state/health';
import hoveringCardIndex from 'lib/state/hovering-card-index';
import players from 'lib/state/players';
import playedCards from 'lib/state/played-cards';
import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';

export default {
  buffs: buffs.__DATA_MODEL,
  canBeAttacked: canBeAttacked.__DATA_MODEL,
  counts: counts.__DATA_MODEL,
  health: health.__DATA_MODEL,
  playerClass: {
    '0': 'SOCERER',
    '1': 'GUARDIAN'
  },
  players: players.__DATA_MODEL,
  boards: boards.__DATA_MODEL,
  energy: energy.__DATA_MODEL,
  playedCards: playedCards.__DATA_MODEL,
  hoveringCardIndex: hoveringCardIndex.__DATA_MODEL,
  selectedCardIndex: selectedCardIndex.__DATA_MODEL,
  selectedCardObject: selectedCardObject.__DATA_MODEL,
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
