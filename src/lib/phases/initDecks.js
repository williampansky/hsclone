import CORE_001_DECK from 'data/debug/single-card-id-arrays/CORE_001_DECK.json';
import CORE_006_DECK from 'data/debug/single-card-id-arrays/CORE_006_DECK.json';
import CORE_021_DECK from 'data/debug/single-card-id-arrays/CORE_021_DECK.json';
import CORE_DECK_NEUTRAL_01 from 'data/debug/CORE_DECK_NEUTRAL_01.json';
import CORE_DECK_NEUTRAL_02 from 'data/debug/CORE_DECK_NEUTRAL_02.json';

export default {
  // Start the match by initiating each player's deck from the
  // component (client-side) state into the G state.
  // @TODO fix later on for deck selection/lobby/etc
  onBegin: (G, ctx) => {
    G.players[0].deck = ctx.random.Shuffle(CORE_021_DECK);
    G.players[1].deck = ctx.random.Shuffle(CORE_DECK_NEUTRAL_02);
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
