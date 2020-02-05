export const initCountdownTimer = (G, ctx) => {
  // Number(ctx.currentPlayer) === 0 ? countdownTick(G, 0) : countdownTick(G, 1);
};

export const resetCountdownTimer = (G, ctx) => {
  G.counts[ctx.currentPlayer].timer = 75000;
};

export const countdownTick = (G, ctx) => {
  G.counts[ctx.currentPlayer].timer = G.counts[ctx.currentPlayer].timer - 1000;
};
