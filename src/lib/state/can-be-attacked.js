const canBeAttacked = {
  __DATA_MODEL: {
    '0': false,
    '1': false
  },
  enable: (G, player) => enablePlayerCanBeAttacked(G, player),
  disable: (G, player) => disablePlayerCanBeAttacked(G, player)
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
