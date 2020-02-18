import canBeAttacked from 'state/can-be-attacked';
import limitNumberWithinRange from 'utils/range-limit';

const boards = {
  __DATA_MODEL: {
    '0': [],
    '1': []
  },
  addToMinionHealth: (G, player, index, amount) => {
    return addToMinionHealth(G, player, index, amount);
  },
  determineTargets: (G, player) => {
    return determineAttackingMinionTargets(G, player);
  },
  disableCanAttack: (G, player, index) => {
    return disableMinionCanAttack(G, player, index);
  },
  disableCanBeAttacked: (G, player, index) => {
    return disableMinionCanBeAttacked(G, player, index);
  },
  enableCanAttack: (G, player, index) => {
    return enableMinionCanAttack(G, player, index);
  },
  enableCanBeAttacked: (G, player, index) => {
    return enableMinionCanBeAttacked(G, player, index);
  },
  killMinion: (G, player, index) => {
    return killMinion(G, player, index);
  },
  killMinionIfHealthReachesZero: (G, player, index) => {
    return killMinionIfHealthReachesZero(G, player, index);
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
  const BOARD = boards[player];
  const MINION_HAS_GUARD = BOARD.find(b => b.hasGuard === true) ? true : false;

  if (MINION_HAS_GUARD) canBeAttacked.disable(G, player);
  else if (!MINION_HAS_GUARD) canBeAttacked.enable(G, player);

  // first, enable all minions to be attackable
  for (let i = 0; i < G.boards[player].length; i++) {
    enableMinionCanBeAttacked(G, player, i);
    if (!G.boards[player].hasGuard === false)
      disableMinionCanBeAttacked(G, player, i);
  }
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
 * Kill a single active minion.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const killMinion = (G, player, index) => {
  G.boards[player].splice(index, 1);
};

/**
 * Kill a single active minion if its currentHealth reaches zero.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const killMinionIfHealthReachesZero = (G, player, index) => {
  if (G.boards[player][index].currentHealth <= 0)
    G.boards[player].splice(index, 1);
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
