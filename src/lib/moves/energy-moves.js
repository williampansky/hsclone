import { add, subtract } from 'mathjs';

export const incrementCurrentEnergy = (G, ctx, playerID) => {
  if (Number(ctx.currentPlayer) === Number(playerID))
    G.energy[ctx.currentPlayer].current =
      G.energy[ctx.currentPlayer].current + 1;
  return ctx.events.endPhase();
};

export const incrementTotalEnergy = (G, ctx, playerID) => {
  if (Number(ctx.currentPlayer) !== Number(playerID))
    G.energy[ctx.currentPlayer].total = G.energy[ctx.currentPlayer].total + 1;
  return ctx.events.endPhase();
};

export const setCurrentEnergy = (G, ctx, player, amount) => {
  const { energy } = G;
  energy[player].current = amount;
};

export const setTotalEnergy = (G, ctx, player, amount) => {
  const { energy } = G;
  energy[player].total = amount;
};
