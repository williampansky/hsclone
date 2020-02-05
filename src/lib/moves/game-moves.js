import { add, subtract } from 'mathjs';

export const initTurnTimer = (G, ctx, events, playerID) => {
  if (Number(ctx.currentPlayer) === Number(playerID)) {
    console.log('startInterval');
    const interval = setInterval(() => {
      const timeLeft = subtract(G.counts[ctx.currentPlayer].timer, 1000);
      G.counts[ctx.currentPlayer].timer = timeLeft;

      if (G.counts[ctx.currentPlayer].timer <= 0) {
        console.log('clearInterval');
        clearInterval(interval);
        return events.endTurn();
      }
    }, 1000);
  }
  //
  // Number(ctx.currentPlayer) === 0 ? countdownTick(G, 0) : countdownTick(G, 1);
};

export const resetCountdownTimer = (G, ctx) => {
  G.counts[ctx.currentPlayer].timer = 75000;
};

export const countdownTick = (G, ctx) => {
  G.counts[ctx.currentPlayer].timer = G.counts[ctx.currentPlayer].timer - 1000;
};
