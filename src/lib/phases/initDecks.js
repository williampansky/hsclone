const DECK1 = require('data/debug/CORE_DECK_MYSTIC_01.json');
const DECK2 = require('data/debug/CORE_DECK_BERSERKER_01.json');

export default {
  // Start the match by initiating each player's deck from the
  // component (client-side) state into the G state.
  // @TODO fix later on for deck selection/lobby/etc
  onBegin: (G, ctx) => {
    G.players['0'].deck = ctx.random.Shuffle(DECK1);
    G.players['1'].deck = ctx.random.Shuffle(DECK2);
  },

  // End phase when both player's decks are full (30 cards)
  // prettier-ignore
  endIf: (G, ctx) => (
    G.players[ctx.playOrder['0']].deck.length === 30 &&
    G.players[ctx.playOrder['1']].deck.length === 30
  ),

  start: true,
  next: 'initHands'
};
