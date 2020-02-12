export const enablePlayerBuff = (G, ctx, buffType, amount) => {};

/**
 * @see https://stackoverflow.com/a/5842770/8296677
 */
const limitHealthWithinRange = number => {
  const MIN = 0;
  const MAX = 30;
  const parsed = parseInt(number);
  return Math.min(Math.max(parsed, MIN), MAX);
};

export const addToPlayerHealth = (G, player, amount) => {
  const newHealth = limitHealthWithinRange(G.health[player] + amount);
  G.health[player] = newHealth;
};

export const subtractFromPlayerHealth = (G, player, amount) => {
  const newHealth = limitHealthWithinRange(G.health[player] - amount);
  G.health[player] = newHealth;
};
