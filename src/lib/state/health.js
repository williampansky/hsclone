import limitNumberWithinRange from 'lib/utils/range-limit';

const health = {
  __DATA_MODEL: {
    '0': 30,
    '1': 30
  },
  add: (G, player, amount) => addToPlayerHealth(G, player, amount),
  subtract: (G, player, amount) => subtractFromPlayerHealth(G, player, amount)
};

/**
 * Adds `amount` to the targeted player's health value.
 * @param {{}} G
 * @param {string} player
 * @param {number} amount
 * @requires limitNumberWithinRange()
 */
export const addToPlayerHealth = (G, player, amount) => {
  const calculation = G.health[player] + amount;
  const newHealth = limitNumberWithinRange(calculation, 30, 0);
  G.health[player] = newHealth;
};

/**
 * Subtracts `amount` from the targeted player's health value.
 * @param {{}} G
 * @param {string} player
 * @param {number} amount
 * @requires limitNumberWithinRange()
 */
export const subtractFromPlayerHealth = (G, player, amount) => {
  const calculation = G.health[player] - amount;
  const newHealth = limitNumberWithinRange(calculation, 30, 0);
  G.health[player] = newHealth;
};

export default health;
