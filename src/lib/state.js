import boards from 'lib/state/boards';
import buffs from 'lib/state/buffs';
import cardBack from 'lib/state/card-back';
import counts from 'lib/state/counts';
import deckInfo from 'lib/state/deck-info';
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
import playerSpellDamage from 'lib/state/player-spell-damage';
import playerUsedClassSkill from 'lib/state/player-used-class-skill';
import playerWeapon from 'lib/state/player-weapon';
import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';
import spellObject from 'lib/state/spell-object';
import warcryObject from 'lib/state/warcry-object';

export default {
  attackedMinionIndex: null,
  buffs: buffs.__DATA_MODEL,
  cardBack: cardBack.__DATA_MODEL,
  counts: counts.__DATA_MODEL,
  energy: energy.__DATA_MODEL,
  health: health.__DATA_MODEL,
  hoveringCardIndex: hoveringCardIndex.__DATA_MODEL,
  lastPlayedCardId: null,
  lastTargeted: { context: null, index: null },
  playerAttackValue: playerAttackValue.__DATA_MODEL,
  playerCanAttack: playerCanAttack.__DATA_MODEL,
  playerCanBeAttackedByMinion: playerCanBeAttacked.playerCanBeAttackedByMinion,
  playerCanBeAttackedByPlayer: playerCanBeAttacked.playerCanBeAttackedByPlayer,
  playerCanBeAttackedBySpell: playerCanBeAttacked.playerCanBeAttackedBySpell,
  playerCanBeAttackedByWarcry: playerCanBeAttacked.playerCanBeAttackedByWarcry,
  playerCanBeHealed: playerCanBeHealed.__DATA_MODEL,
  playerCanUseClassSkill: playerCanUseClassSkill.__DATA_MODEL,
  playerClass: { '0': null, '1': null },
  playerHasAttacked: { '0': false, '1': false },
  playerIsAttacking: playerIsAttacking.__DATA_MODEL,
  playerIsDisabled: playerIsDisabled.__DATA_MODEL,
  playerShieldPoints: playerShieldPoints.__DATA_MODEL,
  playerSpellDamage: playerSpellDamage.__DATA_MODEL,
  playerUsedClassSkill: playerUsedClassSkill.__DATA_MODEL,
  playerWeapon: playerWeapon.__DATA_MODEL,
  selectedCardIndex: selectedCardIndex.__DATA_MODEL,
  selectedCardObject: selectedCardObject.__DATA_MODEL,
  selectedCardSpellContext: { '0': null, '1': null },
  selectedCardSpellType: { '0': null, '1': null },
  selectedCardType: { '0': null, '1': null },
  selectedMinionIndex: selectedMinionIndex.__DATA_MODEL,
  selectedMinionObject: selectedMinionObject.__DATA_MODEL,
  spellObject: spellObject.__DATA_MODEL,
  warcryObject: warcryObject.__DATA_MODEL,
  playerName: {
    '0': 'Player 0',
    '1': 'Player 1'
  },
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
  boards: boards.__DATA_MODEL,
  deckInfo: deckInfo.__DATA_MODEL,
  playedCards: playedCards.__DATA_MODEL,
  players: players.__DATA_MODEL,
  initHandsSelection: {
    '0': {
      ready: false,
      discard: [],
      cards: []
    },
    '1': {
      ready: false,
      discard: [],
      cards: []
    }
  },
  allPlayedCards: [],
  matchHistory: []
};
