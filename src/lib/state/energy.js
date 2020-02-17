import { add, subtract } from 'mathjs';
import limitNumberWithinRange from 'lib/utils/range-limit';

/**
 * Increments the `total` energy of the `ctx.currentPlayer` by one;
 * unless the total is already at ten.
 *
 * @param {{}} G Game state object.
 * @param {string} player Player to increment.
 * @requires mathjs::add()
 */
const incrementTotalEnergy = (G, player) => {
  const { energy } = G;
  const { total } = energy[player];

  if (total === 10) return;

  const newTotal = add(Number(total), 1);
  G.energy[player].total = newTotal;
};

/**
 * Sets the `current` value to the `total`; which allows the
 * `ctx.currentPlayer` to spend energy on card play moves.
 *
 * @param {{}} G Game state object.
 * @param {string} player Player to match.
 */
const matchCurrentWithTotalEnergy = (G, player) => {
  const { energy } = G;
  const { total } = energy[player];
  G.energy[player].current = total;
};

/**
 * Sets the `current` energy value of the
 * `player` param to the specified `amount`.
 *
 * @param {{}} G Game state object.
 * @param {string} player Player to set.
 * @param {number} amount Value to set.
 */
const setCurrentEnergy = (G, player, amount) => {
  G.energy[player].current = amount;
};

/**
 * Sets the `total` energy value of the
 * `player` param to the specified `amount`.
 *
 * @param {{}} G Game state object.
 * @param {string} player Player to set.
 * @param {number} amount Value to set.
 */
const setTotalEnergy = (G, player, amount) => {
  G.energy[player].total = amount;
};

/**
 * Subtracts amount from player's current energy value.
 *
 * @param {{}} G Game state object.
 * @param {string} player
 * @param {number} amount
 * @requires mathjs::subtract()
 */
const subtractFromCurrentEnergy = (G, player, amount) => {
  const { current, total } = G.energy[player];

  const calculation = subtract(Number(current), Number(amount));
  const newValue = limitNumberWithinRange(calculation, total, 0);

  G.energy[player].current = newValue;
};

// prettier-ignore
const energy = {
  incrementTotalEnergy: (G, player) => incrementTotalEnergy(G, player),
  matchCurrentWithTotalEnergy: (G, player) => matchCurrentWithTotalEnergy(G, player),
  setCurrentEnergy: (G, player, amount) => setCurrentEnergy(G, player, amount),
  setTotalEnergy: (G, player, amount) => setTotalEnergy(G, player, amount),
  subtractFromCurrentEnergy: (G, player, amount) => subtractFromCurrentEnergy(G, player, amount)
};

export default energy;
