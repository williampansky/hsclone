import { add } from 'mathjs';
import { limitNumberWithinRange } from '../utils/range-limit';

/**
 * Increments the `total` energy of the `ctx.currentPlayer` by one;
 * unless the total is already at ten.
 *
 * @param {Object} G Game state object.
 * @param {Number|String} player Player to increment.
 * @requires mathjs::add()
 */
export const incrementTotalEnergy = (G, player) => {
  const { energy } = G;
  const { total } = energy[player];

  if (total === 10) return;

  const newTotal = add(Number(total), 1);
  return (G.energy[player].total = newTotal);
};

/**
 * Sets the `current` value to the `total`; which allows the
 * `ctx.currentPlayer` to spend energy on card play moves.
 *
 * @param {Object} G Game state object.
 * @param {Number|String} player Player to match.
 */
export const matchCurrentWithTotalEnergy = (G, player) => {
  const { energy } = G;
  const { total } = energy[player];
  return (G.energy[player].current = total);
};

/**
 * Sets the `current` energy value of the
 * `player` param to the specified `amount`.
 *
 * @param {Object} G Game state object.
 * @param {Number|String} player Player to set.
 * @param {Number} amount Value to set.
 */
export const setCurrentEnergy = (G, player, amount) => {
  const { energy } = G;
  return (energy[player].current = amount);
};

/**
 * Sets the `total` energy value of the
 * `player` param to the specified `amount`.
 *
 * @param {Object} G Game state object.
 * @param {Number|String} player Player to set.
 * @param {Number} amount Value to set.
 */
export const setTotalEnergy = (G, player, amount) => {
  const { energy } = G;
  return (energy[player].total = amount);
};

/**
 * Subtracts amount from player's current energy value.
 *
 * @param {{}} G Game state object.
 * @param {string|number} player
 * @param {number} amount
 */
export const subtractFromCurrentEnergy = (G, player, amount) => {
  const { current, total } = G.energy[player];
  const newValue = limitNumberWithinRange(current - amount, total, 0);
  G.energy[player].current = newValue;
};
