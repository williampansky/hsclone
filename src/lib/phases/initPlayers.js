const AUGUR = require('data/debug/CORE_DECK_AUGUR_01.json');
const BERSERKER = require('data/debug/CORE_DECK_BERSERKER_01.json');
const MYSTIC = require('data/debug/CORE_DECK_MYSTIC_01.json');
const NECROMANCER = require('data/debug/CORE_DECK_NECROMANCER_01.json');
const NEUTRAL = require('data/debug/CORE_DECK_NEUTRAL_01.json');
const KNIGHTCOMMANDER = require('data/debug/CORE_DECK_KNIGHTCOMMANDER_01.json');
const NINJA = require('data/debug/CORE_DECK_NINJA_01.json');
const SNIPER = require('data/debug/CORE_DECK_SNIPER_01.json');
const SORCERER = require('data/debug/CORE_DECK_SORCERER_01.json');
const WHITEMAGE = require('data/debug/CORE_DECK_WHITEMAGE_01.json');

export default {
  // Start the match by initiating each player's deck from the
  // component (client-side) state into the G state.
  // @TODO fix later on for deck selection/lobby/etc
  onBegin: (G, ctx) => {
    G.playerName['0'] = ctx.random.Shuffle(BERSERKER);
    G.players['1'].deck = ctx.random.Shuffle(BERSERKER);
  },

  // End phase when both player's decks are full (30 cards)
  // prettier-ignore
  endIf: (G, ctx) => (
    G.players[ctx.playOrder['0']].deck.length === 30 &&
    G.players[ctx.playOrder['1']].deck.length === 30
  ),

  start: true,
  next: 'initDecks'
};
