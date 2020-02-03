import { drawCard, playMinionCard, playSpellCard } from './moves/card-moves';
import {
  incrementCurrentEnergy,
  incrementTotalEnergy,
  setCurrentEnergy,
  setTotalEnergy
} from './moves/energy-moves';

const deck1 = require('../data/debug/deck1.json');
const deck2 = require('../data/debug/deck2.json');
const deck3 = require('../data/debug/deck3.json');

let stripSecrets = (G, playerID) => ({
  ...G,
  players: {
    [playerID]: G.players[playerID]
  }
});

/**
 *
 */
export const HSclone = {
  name: 'HSclone',
  setup: () => ({
    counts: {
      0: {
        deck: 30,
        hand: 0
      },
      1: {
        deck: 30,
        hand: 0
      }
    },
    players: {
      0: {
        deck: [],
        cards: []
      },
      1: {
        deck: [],
        cards: []
      }
    },
    boards: {
      0: {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
        slot6: null,
        slot7: null
      },
      1: {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
        slot6: null,
        slot7: null
      }
    },
    energy: {
      0: {
        current: 0,
        total: 0
      },
      1: {
        current: 0,
        total: 0
      }
    }
  }),

  // prettier-ignore
  moves: {
    // server-side moves (e.g. `client: false`)
    drawCard: { client: false, move: (G, ctx, card) => drawCard(G, ctx, card) },
    playMinionCard: { client: false, move: (G, ctx, slotNumber, card) => playMinionCard(G, ctx, slotNumber, card) },
    playSpellCard: { client: false, move: (G, ctx, card, target = null) => playSpellCard(G, ctx, card, target) },

    // client-side moves
    // setCurrentEnergy: (G, ctx, player, amount) => setCurrentEnergy(G, ctx, player, amount),
    // setTotalEnergy: (G, ctx, player, amount) => setTotalEnergy(G, ctx, player, amount),
  },

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
    order: {
      // Get the initial value of playOrderPos.
      // This is called at the beginning of the phase.
      first: (G, ctx) => 0,
  
      // Get the next value of playOrderPos.
      // This is called at the end of each turn.
      // The phase ends if this returns undefined.
      next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.numPlayers,
  
      // OPTIONAL:
      // Override the initial value of playOrder.
      // This is called at the beginning of the game / phase.
      playOrder: (G, ctx) => ctx.random.Shuffle(ctx.playOrder),
    },

    onBegin: (G, ctx) => {
      // Increments the `total` energy of the `currentPlayer`
      // by one; but not more than ten.
      if (G.energy[ctx.currentPlayer].total !== 10)
        G.energy[ctx.currentPlayer].total++;
      
      // Then, sets the `current` value to the total; which allows
      // the `currentPlayer` to spend said energy on card play functions.
      G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;
    },
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
      onBegin: (G, ctx, playerID) => {
        G.players[0].deck = ctx.random.Shuffle(deck3);
        G.players[1].deck = ctx.random.Shuffle(deck3);
      },
      endIf: (G) => (G.players[0].deck.length === 30),
      start: true,
  
      /**
       * @todo add ability to get new starting hand cards
       */
      // moves: {}
    }
  }
};
