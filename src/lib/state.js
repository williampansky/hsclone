import boards from 'lib/state/boards';
import buffs from 'lib/state/buffs';
import cardBack from 'lib/state/card-back';
import CARDCLASS from 'enums/cardClass.enums';
import counts from 'lib/state/counts';
import energy from 'lib/state/energy';
import GAME_CONFIG from 'config/game.config';
import health from 'lib/state/health';
import hoveringCardIndex from 'lib/state/hovering-card-index';
import playedCards from 'lib/state/played-cards';
import playerAttackValue from 'lib/state/player-attack-value';
import playerCanAttack from 'lib/state/player-can-attack';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';
import playerIsAttacking from 'lib/state/player-is-attacking';
import playerIsDisabled from './state/player-is-disabled';
import players from 'lib/state/players';
import playerShieldPoints from 'lib/state/player-shield-points';
import playerUsedClassSkill from 'lib/state/player-used-class-skill';
import playerWeapon from 'lib/state/player-weapon';
import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';
import spellObject from 'lib/state/spell-object';
import warcryObject from 'lib/state/warcry-object';

export default {
  buffs: buffs.__DATA_MODEL,
  playerCanBeAttackedByMinion: playerCanBeAttacked.playerCanBeAttackedByMinion,
  playerCanBeAttackedByPlayer: playerCanBeAttacked.playerCanBeAttackedByPlayer,
  playerCanBeAttackedBySpell: playerCanBeAttacked.playerCanBeAttackedBySpell,
  playerCanBeAttackedByWarcry: playerCanBeAttacked.playerCanBeAttackedByWarcry,
  playerCanBeHealed: playerCanBeHealed.__DATA_MODEL,
  playerCanAttack: playerCanAttack.__DATA_MODEL,
  playerIsAttacking: playerIsAttacking.__DATA_MODEL,
  playerIsDisabled: playerIsDisabled.__DATA_MODEL,
  playerCanUseClassSkill: playerCanUseClassSkill.__DATA_MODEL,
  playerUsedClassSkill: playerUsedClassSkill.__DATA_MODEL,
  playerShieldPoints: playerShieldPoints.__DATA_MODEL,
  playerWeapon: playerWeapon.__DATA_MODEL,
  playerAttackValue: playerAttackValue.__DATA_MODEL,
  counts: counts.__DATA_MODEL,
  health: health.__DATA_MODEL,
  playerClass: {
    '0': CARDCLASS[2],
    '1': CARDCLASS[8]
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
  attackedMinionIndex: null,
  spellObject: spellObject.__DATA_MODEL,
  warcryObject: warcryObject.__DATA_MODEL,
  cardBack: cardBack.__DATA_MODEL,
  lastPlayedCardId: null,
  animationStates: {
    minionIsAttacking: {
      '0': null,
      '1': null
    },
    playerIsAttackingMinion: {
      '0': false,
      '1': false
    },
    playerIsAttackingPlayer: {
      '0': false,
      '1': false
    }
  },
  winner: null,
  turnOrder: ['0', '1'].sort(() => {
    if (!GAME_CONFIG.matchConfig.enableRandomTurnOrder) return ['0', '1'];
    return Math.random() - 0.5;
  }),
  matchHistory: []
};
