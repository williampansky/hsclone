import { add, subtract } from 'mathjs';

const playerShieldPoints = {
  __DATA_MODEL: {
    '0': 0,
    '1': 0
  },

  /**
   * Adds amount to player's playerShieldPoints value.
   * @param {{}} G
   * @param {string} player
   * @param {number} amount
   */
  add: (G, player, amount) => {
    const oldValue = G.playerShieldPoints[player];
    const newValue = add(Number(oldValue), amount);
    G.playerShieldPoints[player] = newValue;
  },

  /**
   * Removes amount from player's playerShieldPoints value.
   * @param {{}} G
   * @param {string} player
   * @param {number} amount
   */
  remove: (G, player, amount) => {
    const oldValue = G.playerShieldPoints[player];
    const newValue = subtract(Number(oldValue), amount);
    G.playerShieldPoints[player] = newValue;
  }
};

export default playerShieldPoints;
