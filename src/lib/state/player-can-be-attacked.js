const playerCanBeAttacked = {
  __DATA_MODEL: {
    '0': false,
    '1': false
  },

  /**
   * Enables a player's playerCanBeAttacked boolean.
   * @param {{}} G
   * @param {string} player
   */
  enable: (G, player) => {
    const result = (G.playerCanBeAttacked[player] = true);
    return result;
  },

  /**
   * Disables a player's playerCanBeAttacked boolean.
   * @param {{}} G
   * @param {string} player
   */
  disable: (G, player) => {
    const result = (G.playerCanBeAttacked[player] = false);
    return result;
  }
};

export default playerCanBeAttacked;