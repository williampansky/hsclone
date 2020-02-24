import boards from 'lib/state/boards';
import buffs from 'lib/state/buffs';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import cardBack from 'lib/state/cardBack';
import counts from 'lib/state/counts';
import energy from 'lib/state/energy';
import health from 'lib/state/health';
import hoveringCardIndex from 'lib/state/hovering-card-index';
import playedCards from 'lib/state/played-cards';
import players from 'lib/state/players';
import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';
import warcryObject from 'lib/state/warcry-object';

export default {
  buffs: buffs.__DATA_MODEL,
  playerCanBeAttacked: playerCanBeAttacked.__DATA_MODEL,
  playerCanBeHealed: playerCanBeHealed.__DATA_MODEL,
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
  cardBack: cardBack.__DATA_MODEL,
  turnOrder: ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  })
};
