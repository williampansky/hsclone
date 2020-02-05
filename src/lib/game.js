import { TurnOrder } from 'boardgame.io/core';
import { stripSecrets } from './stripSecrets';
import { deincrementDeck, incrementHand } from './moves/card-moves';
import state from './state';
import moves from './moves';
import initHandsPhase from './phases/initHands';
import playPhase from './phases/play';
const deck3 = require('../data/debug/deck3.json');

/**
 *
 */
export const HSclone = {
  name: 'HSclone',
  setup: () => state,
  moves: moves,

  /**
   * This method uses the `stripSecrets` function to hide
   * the opponent player's hand and deck data from your client.
   * @requires stripSecrets
   */
  playerView: (G, ctx, playerID) => {
    return stripSecrets(G, playerID);
  },

  /**
   * @name turn
   * @memberof HSclone
   */
  // prettier-ignore
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx, events, playerID) => {
      // Reset timer to 75 seconds
      // G.counts[ctx.currentPlayer].timer = 75000;

      // Increments the `total` energy of the `currentPlayer`
      // by one; but not more than ten.
      if (G.energy[ctx.currentPlayer].total !== 10)
        G.energy[ctx.currentPlayer].total++;
      
      // Then, sets the `current` value to the total; which allows
      // the `currentPlayer` to spend said energy on card play functions.
      G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;
    },
    endIf: (G, ctx) => G.counts[ctx.currentPlayer].timer === 0,
  },

  /**
   * Most games beyond very simple ones tend to have different behaviors at
   * various phases. A game might have a phase at the beginning where players
   * are drafting cards before entering a playing phase, for example.
   *
   * @name phases
   * @memberof HSclone
   */
  // prettier-ignore
  phases: {
    initDecks: {
      // Start the match by initiating each player's deck from the
      // component (client-side) state into the G state.
      // @TODO fix later on for deck selection/lobby/etc
      onBegin: (G, ctx, playerID) => {
        G.players[0].deck = ctx.random.Shuffle(deck3);
        G.players[1].deck = ctx.random.Shuffle(deck3);
      },

      // End phase when both player's decks are full (30 cards)
      endIf: (G, ctx) => (
        G.players[ctx.playOrder[0]].deck.length === 30 &&
        G.players[ctx.playOrder[1]].deck.length === 30
      ),
      
      start: true,
      next: 'initHands'
    },

    initHands: initHandsPhase,
    play: playPhase
  }
};
