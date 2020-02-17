const canBeAttacked = {
  _DATA_MODEL: {
    '0': false,
    '1': false
  },
  enable: (G, player, amount) => enablePlayerCanBeAttacked(G, player, amount),
  disable: (G, player, amount) => disablePlayerCanBeAttacked(G, player, amount)
};

/**
 * Enables a player's canBeAttacked boolean.
 * @param {{}} G
 * @param {string} player
 */
export const enablePlayerCanBeAttacked = (G, player) => {
  G.canBeAttacked[player] = true;
};

/**
 * Disables a player's canBeAttacked boolean.
 * @param {{}} G
 * @param {string} player
 */
export const disablePlayerCanBeAttacked = (G, player) => {
  G.canBeAttacked[player] = false;
};

export default canBeAttacked;
