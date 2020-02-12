import { limitNumberWithinRange } from '../utils/range-limit';

export const addToPlayerHealth = (G, player, amount) => {
  const newHealth = limitNumberWithinRange(G.health[player] + amount, 30, 0);
  G.health[player] = newHealth;
};

export const subtractFromPlayerHealth = (G, player, amount) => {
  const newHealth = limitNumberWithinRange(G.health[player] - amount, 30, 0);
  G.health[player] = newHealth;
};
