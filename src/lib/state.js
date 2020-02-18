import boards from 'state/boards';
import buffs from 'state/buffs';
import canBeAttacked from 'state/can-be-attacked';
import counts from 'state/counts';
import energy from 'state/energy';
import health from 'state/health';
import hoveringCardIndex from 'state/hovering-card-index';
import playedCards from 'state/played-cards';
import players from 'state/players';
import selectedCardIndex from 'state/selected-card-index';
import selectedCardObject from 'state/selected-card-object';
import selectedMinionIndex from 'state/selected-minion-index';
import selectedMinionObject from 'state/selected-minion-object';
import warcryObject from 'state/warcry-object';

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
  selectedMinionIndex: selectedMinionIndex.__DATA_MODEL,
  selectedMinionObject: selectedMinionObject.__DATA_MODEL,
  warcryObject: warcryObject.__DATA_MODEL,
  turnOrder: ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  })
};
