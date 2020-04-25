import deckInfo from 'lib/state/deck-info';
import CARDCLASS from 'enums/cardClass.enums';

const ASSASSIN = require('data/debug/CORE_DECK_ASSASSIN_01.json');
const AUGUR = require('data/debug/CORE_DECK_AUGUR_01.json');
const BERSERKER = require('data/debug/CORE_DECK_BERSERKER_01.json');
const KNIGHTCOMMANDER = require('data/debug/CORE_DECK_KNIGHTCOMMANDER_01.json');
const MYSTIC = require('data/debug/CORE_DECK_MYSTIC_01.json');
const NECROMANCER = require('data/debug/CORE_DECK_NECROMANCER_01.json');
const NEUTRAL = require('data/debug/CORE_DECK_NEUTRAL_01.json');
const SNIPER = require('data/debug/CORE_DECK_SNIPER_01.json');
const SORCERER = require('data/debug/CORE_DECK_SORCERER_01.json');
const WHITEMAGE = require('data/debug/CORE_DECK_WHITEMAGE_01.json');

export default {
  // Start the match by initiating each player's deck from the
  // component (client-side) state into the G state.
  // @TODO fix later on for deck selection/lobby/etc
  onBegin: (G, ctx) => {
    const p1deck = SORCERER;
    const p2deck = SORCERER;

    G.players['0'].deck = ctx.random.Shuffle(p1deck);
    G.players['1'].deck = ctx.random.Shuffle(p2deck);

    deckInfo.set(G, ctx, '0', p1deck);
    deckInfo.set(G, ctx, '1', p2deck);

    G.playerClass['0'] = CARDCLASS[3];
    G.playerClass['1'] = CARDCLASS[3];
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
