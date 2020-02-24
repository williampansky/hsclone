import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import limitNumberWithinRange from 'lib/utils/range-limit';
import recalculateCardMechanics from 'lib/mechanics/recalculate-mechanics';

import {
  _dMCA,
  _dAMCA,
  _eMCA,
  _eAMCA
} from 'lib/state/board-methods/can-attack';

import {
  _dMCBA,
  _dAMCBA,
  _eMCBA,
  _eAMCBA
} from 'lib/state/board-methods/can-be-attacked';

import {
  _dMCBH,
  _dAMCBH,
  _eMCBH,
  _eAMCBH
} from 'lib/state/board-methods/can-be-healed';

// prettier-ignore
const boards = {
  __DATA_MODEL: {
    '0': [],
    '1': []
  },

  // minion health
  addToMinionHealth: (G, player, index, amount) => _aTMH(G, player, index, amount),
  subtractFromMinionHealth: (G, player, index, amount) => _sFMH(G, player, index, amount),

  // target determination
  determineAttackTargets: (G, player) => _dAMT(G, player),
  determineHealTargets: (G, player) => _dHMT(G, player),
  determineWarcryTargets: (G, player) => _dWT(G, player),

  // canAttack
  disableCanAttack: (G, player, index) => _dMCA(G, player, index),
  disableAllCanAttack: (G, player) => _dAMCA(G, player),
  enableCanAttack: (G, player, index) => _eMCA(G, player, index),
  enableAllCanAttack: (G, player) => _eAMCA(G, player),
  
  // canBeAttacked
  disableCanBeAttacked: (G, player, index) => _dMCBA(G, player, index),
  disableAllCanBeAttacked: (G, player) => _dAMCBA(G, player),
  enableCanBeAttacked: (G, player, index) => _eMCBA(G, player, index),
  enableAllCanBeAttacked: (G, player) => _eAMCBA(G, player),

  // canBeHealed
  disableCanBeHealed: (G, player, index) => _dMCBH(G, player, index),
  disableAllCanBeHealed: (G, player, index) => _dAMCBH(G, player, index),
  enableCanBeHealed: (G, player, index) => _eMCBH(G, player, index),
  enableAllCanBeHealed: (G, player, index) => _eAMCBH(G, player, index),

  // kill minion methods
  killMinion: (G, ctx, player, boardSlot, index) => _kM(G, ctx, player, boardSlot, index),
  killMinionIfHealthIsZero: (G, ctx, player, boardSlot, index) => _kM0(G, ctx, player, boardSlot, index),

  // card placement
  placeCardOnBoard: (G, player, boardSlotObject, index) => _pC(G, player, boardSlotObject, index),
};

/**
 * Add health to a minion.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 * @param {number} amount
 */
export const _aTMH = (G, player, index, amount) => {
  const totalHealth = G.boards[player][index].totalHealth;
  const calculation = G.boards[player][index].currentHealth + amount;
  const newHealth = limitNumberWithinRange(calculation, totalHealth);

  G.boards[player][index].currentHealth = newHealth;
};

/**
 * When a player selects a minion that can attack, we need to determine
 * its possible targets—both opposing minions and the opposing player.
 * @param {{}} G
 * @param {string} player
 */
export const _dAMT = (G, player) => {
  const { boards } = G;
  const MINION_HAS_GUARD = boards[player].find(slot => slot.hasGuard === true)
    ? true
    : false;

  if (MINION_HAS_GUARD) playerCanBeAttacked.disable(G, player);
  else if (!MINION_HAS_GUARD) playerCanBeAttacked.enable(G, player);

  G.boards[player].forEach((slot, i) => {
    if (slot.hasGuard === true) _eMCBA(G, player, i);
    else if (MINION_HAS_GUARD) _dMCBA(G, player, i);
    else _eMCBA(G, player, i);
  });
};

/**
 * When a player plays a heal action, calulate the possible targets.
 * @param {{}} G
 * @param {string} player
 */
export const _dHMT = (G, player) => {
  playerCanBeHealed.enable(G, player);
  G.boards[player].forEach((slot, i) => {
    _eMCBH(G, player, i);
  });
};

/**
 * When a player plays a minion with a targeted Warcry spell object;
 * we need to determine the possible targets.
 * @param {{}} G
 * @param {string} player
 */
export const _dWT = (G, player) => {
  playerCanBeAttacked.enable(G, player);
  G.boards[player].forEach((slot, i) => {
    _eMCBA(G, player, i);
  });
};

/**
 * Kill a single active minion.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} player
 * @param {{}} boardSlot
 * @param {number} index
 */
export const _kM = (G, ctx, player, boardSlot, index) => {
  const { minionData } = boardSlot;
  G.boards[player].splice(index, 1);
  recalculateCardMechanics(G, ctx, player, minionData, index);
};

/**
 * Kill a single active minion if its currentHealth reaches zero.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} player
 * @param {{}} boardSlot
 * @param {number} index
 */
export const _kM0 = (G, ctx, player, boardSlot, index) => {
  if (G.boards[player][index].currentHealth <= 0)
    _kM(G, ctx, player, boardSlot, index);
};

/**
 * Places a slot object in the specific `index` of a player's board.
 *
 * @param {{}} G
 * @param {string} player
 * @param {{}} boardSlotObject
 * @param {number} index defaults to zero
 */
export const _pC = (G, player, boardSlotObject, index = 0) => {
  const newBoard = [
    ...G.boards[player].slice(0, index),
    boardSlotObject,
    ...G.boards[player].slice(index)
  ];

  // swap new board in
  G.boards[player] = newBoard;
};

/**
 * Subtract health from a minion.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 * @param {number} amount
 */
export const _sFMH = (G, player, index, amount) => {
  const totalHealth = G.boards[player][index].totalHealth;
  const calculation = G.boards[player][index].currentHealth - amount;
  const newHealth = limitNumberWithinRange(calculation, totalHealth);

  G.boards[player][index].currentHealth = newHealth;
};

export default boards;
