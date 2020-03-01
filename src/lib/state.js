import boards from 'lib/state/boards';
import buffs from 'lib/state/buffs';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import playerCanAttack from 'lib/state/player-can-attack';
import playerIsAttacking from 'lib/state/player-is-attacking';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';
import playerShieldPoints from 'lib/state/player-shield-points';
import playerWeapon from 'lib/state/player-weapon';
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
import spellObject from 'lib/state/spell-object';
import warcryObject from 'lib/state/warcry-object';

export default {
  buffs: buffs.__DATA_MODEL,
  playerCanBeAttacked: playerCanBeAttacked.__DATA_MODEL,
  playerCanBeHealed: playerCanBeHealed.__DATA_MODEL,
  playerCanAttack: playerCanAttack.__DATA_MODEL,
  playerIsAttacking: playerIsAttacking.__DATA_MODEL,
  playerCanUseClassSkill: playerCanUseClassSkill.__DATA_MODEL,
  playerShieldPoints: playerShieldPoints.__DATA_MODEL,
  playerWeapon: playerWeapon.__DATA_MODEL,
  counts: counts.__DATA_MODEL,
  health: health.__DATA_MODEL,
  playerClass: {
    '0': 'BERSERKER',
    '1': 'BERSERKER'
  },
  players: players.__DATA_MODEL,
  boards: boards.__DATA_MODEL,
  energy: energy.__DATA_MODEL,
  playedCards: playedCards.__DATA_MODEL,
  hoveringCardIndex: hoveringCardIndex.__DATA_MODEL,
  selectedCardIndex: selectedCardIndex.__DATA_MODEL,
  selectedCardType: { '0': null, '1': null },
  selectedCardSpellType: { '0': null, '1': null },
  selectedCardSpellContext: { '0': null, '1': null },
  selectedCardObject: selectedCardObject.__DATA_MODEL,
  selectedMinionIndex: selectedMinionIndex.__DATA_MODEL,
  selectedMinionObject: selectedMinionObject.__DATA_MODEL,
  spellObject: spellObject.__DATA_MODEL,
  warcryObject: warcryObject.__DATA_MODEL,
  cardBack: cardBack.__DATA_MODEL,
  turnOrder: ['0', '1'].sort(() => {
    // return Math.random() - 0.5;
    return ['0', '1'];
  })
};
