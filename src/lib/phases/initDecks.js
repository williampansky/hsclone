const CORE_DECK_NEUTRAL = require('../../data/debug/CORE_DECK_NEUTRAL.json');

export default {
  // Start the match by initiating each player's deck from the
  // component (client-side) state into the G state.
  // @TODO fix later on for deck selection/lobby/etc
  onBegin: (G, ctx) => {
    G.players[0].deck = ctx.random.Shuffle(CORE_DECK_NEUTRAL);
    G.players[1].deck = ctx.random.Shuffle(CORE_DECK_NEUTRAL);
  },

  // End phase when both player's decks are full (30 cards)
  // prettier-ignore
  endIf: (G, ctx) => (
    G.players[ctx.playOrder[0]].deck.length === 30 &&
    G.players[ctx.playOrder[1]].deck.length === 30
  ),

  start: true,
  next: 'initHands'
};
