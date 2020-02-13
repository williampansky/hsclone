import { limitNumberWithinRange } from '../utils/range-limit';

/**
 * Adds `amount` to the targeted player's health value.
 * @param {{}} G
 * @param {number} player
 * @param {number} amount
 */
export const addToPlayerHealth = (G, player, amount) => {
  const newHealth = limitNumberWithinRange(G.health[player] + amount, 30, 0);
  G.health[player] = newHealth;
};

/**
 * Subtracts `amount` from the targeted player's health value.
 * @param {{}} G
 * @param {number} player
 * @param {number} amount
 */
export const subtractFromPlayerHealth = (G, player, amount) => {
  const newHealth = limitNumberWithinRange(G.health[player] - amount, 30, 0);
  G.health[player] = newHealth;
};
