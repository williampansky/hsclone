import { limitNumberWithinRange } from '../utils/range-limit';

/**
 * Add health to a minion.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 * @param {Number} amount
 */
export const addToMinionHealth = (G, player, index, amount) => {
  const totalHealth = G.boards[player][index].totalHealth;
  const calculation = G.boards[player][index].currentHealth + amount;
  const newHealth = limitNumberWithinRange(calculation, totalHealth);

  G.boards[player][index].currentHealth = newHealth;
};

/**
 * Subtract health from a minion.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 * @param {Number} amount
 */
export const subtractFromMinionHealth = (G, player, index, amount) => {
  const totalHealth = G.boards[player][index].totalHealth;
  const calculation = G.boards[player][index].currentHealth - amount;
  const newHealth = limitNumberWithinRange(calculation, totalHealth);

  G.boards[player][index].currentHealth = newHealth;
};

/**
 * Kill a single active minion.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const killMinion = (G, player, index) => {
  G.boards[player].splice(index, 1);
};

/**
 * Kill a single active minion if its currentHealth reaches zero.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const killMinionIfHealthReachesZero = (G, player, index) => {
  if (G.boards[player][index].currentHealth <= 0)
    G.boards[player].splice(index, 1);
};
