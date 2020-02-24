import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import limitNumberWithinRange from 'lib/utils/range-limit';
import recalculateCardMechanics from 'lib/mechanics/recalculate-mechanics';

const boards = {
  __DATA_MODEL: {
    '0': [],
    '1': []
  },
  addToMinionHealth: (G, player, index, amount) => {
    return addToMinionHealth(G, player, index, amount);
  },
  determineAttackTargets: (G, player) => {
    return determineAttackingMinionTargets(G, player);
  },
  determineHealTargets: (G, player) => {
    return determineHealingMinionTargets(G, player);
  },
  determineWarcryTargets: (G, player) => {
    return determineWarcrySpellTargets(G, player);
  },
  disableCanAttack: (G, player, index) => {
    return disableMinionCanAttack(G, player, index);
  },
  disableCanBeAttacked: (G, player, index) => {
    return disableMinionCanBeAttacked(G, player, index);
  },
  disableCanBeHealed: (G, player, index) => {
    return disableMinionCanBeHealed(G, player, index);
  },
  enableCanAttack: (G, player, index) => {
    return enableMinionCanAttack(G, player, index);
  },
  enableCanBeAttacked: (G, player, index) => {
    return enableMinionCanBeAttacked(G, player, index);
  },
  enableCanBeHealed: (G, player, index) => {
    return enableMinionCanBeHealed(G, player, index);
  },
  killMinion: (G, ctx, player, boardSlot, index) => {
    return killMinion(G, ctx, player, boardSlot, index);
  },
  killMinionIfHealthReachesZero: (G, ctx, player, boardSlot, index) => {
    return killMinionIfHealthReachesZero(G, ctx, player, boardSlot, index);
  },
  placeCardOnBoard: (G, player, boardSlotObject, index) => {
    return placeCardOnBoard(G, player, boardSlotObject, index);
  },
  subtractFromMinionHealth: (G, player, index, amount) => {
    return subtractFromMinionHealth(G, player, index, amount);
  }
};

/**
 * Add health to a minion.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 * @param {number} amount
 */
export const addToMinionHealth = (G, player, index, amount) => {
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
export const determineAttackingMinionTargets = (G, player) => {
  const { boards } = G;
  const MINION_HAS_GUARD = boards[player].find(slot => slot.hasGuard === true)
    ? true
    : false;

  if (MINION_HAS_GUARD) playerCanBeAttacked.disable(G, player);
  else if (!MINION_HAS_GUARD) playerCanBeAttacked.enable(G, player);

  G.boards[player].forEach((slot, i) => {
    if (slot.hasGuard === true) enableMinionCanBeAttacked(G, player, i);
    else if (MINION_HAS_GUARD) disableMinionCanBeAttacked(G, player, i);
    else enableMinionCanBeAttacked(G, player, i);
  });
};

/**
 * When a player plays a heal action, calulate the possible targets.
 * @param {{}} G
 * @param {string} player
 */
export const determineHealingMinionTargets = (G, player) => {
  playerCanBeHealed.enable(G, player);
  G.boards[player].forEach((slot, i) => {
    enableMinionCanBeHealed(G, player, i);
  });
};

/**
 * When a player plays a minion with a targeted Warcry spell object;
 * we need to determine the possible targets.
 * @param {{}} G
 * @param {string} player
 */
export const determineWarcrySpellTargets = (G, player) => {
  playerCanBeAttacked.enable(G, player);
  G.boards[player].forEach((slot, i) => {
    enableMinionCanBeAttacked(G, player, i);
  });
};

/**
 * Disables `canAttack` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const disableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canAttack = false;
};

/**
 * Disables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const disableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeAttacked = false;
};

/**
 * Disables `canBeHealed` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const disableMinionCanBeHealed = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeHealed = false;
};

/**
 * Enables `canAttack` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const enableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canAttack = true;
};

/**
 * Enables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const enableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeAttacked = true;
};

/**
 * Enables `canBeHealed` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const enableMinionCanBeHealed = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeHealed = true;
};

/**
 * Kill a single active minion.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} player
 * @param {{}} boardSlot
 * @param {number} index
 */
export const killMinion = (G, ctx, player, boardSlot, index) => {
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
export const killMinionIfHealthReachesZero = (
  G,
  ctx,
  player,
  boardSlot,
  index
) => {
  if (G.boards[player][index].currentHealth <= 0)
    killMinion(G, ctx, player, boardSlot, index);
};

/**
 * Places a slot object in the specific `index` of a player's board.
 *
 * @param {{}} G
 * @param {string} player
 * @param {{}} boardSlotObject
 * @param {number} index defaults to zero
 */
export const placeCardOnBoard = (G, player, boardSlotObject, index = 0) => {
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
export const subtractFromMinionHealth = (G, player, index, amount) => {
  const totalHealth = G.boards[player][index].totalHealth;
  const calculation = G.boards[player][index].currentHealth - amount;
  const newHealth = limitNumberWithinRange(calculation, totalHealth);

  G.boards[player][index].currentHealth = newHealth;
};

export default boards;
