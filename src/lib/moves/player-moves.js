export const enablePlayerBuff = (G, ctx, buffType, amount) => {};

export const addToPlayerHealth = (G, player, amount) => {
  const newHealth = G.health[player] + amount;
  G.health[player] = newHealth;
};

export const subtractFromPlayerHealth = (G, player, amount) => {
  const newHealth = G.health[player] - amount;
  G.health[player] = newHealth;
};
