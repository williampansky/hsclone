import { TurnOrder } from 'boardgame.io/core';
import logMessage from './match-history/log-message';

export default {
  order: TurnOrder.CUSTOM_FROM('turnOrder'),
  onBegin: (G, ctx) => {
    // Reset timer to 75 seconds
    // G.counts[ctx.currentPlayer].timer = 75000;

    // log message
    logMessage(G, ctx, 'startTurn');

    // Increments the `total` energy of the `currentPlayer`
    // by one; but not more than ten.
    if (G.energy[ctx.currentPlayer].total !== 10)
      G.energy[ctx.currentPlayer].total++;

    // Then, sets the `current` value to the total; which allows
    // the `currentPlayer` to spend said energy on card play functions.
    G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;
  },

  endIf: (G, ctx) => G.counts[ctx.currentPlayer].timer === 0
};
