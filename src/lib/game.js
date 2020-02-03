import { drawCard, playMinionCard, playSpellCard } from './moves/card-moves';

let StripSecrets = (G, playerID) => ({
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
        total: 10
      },
      1: {
        current: 0,
        total: 10
      }
    }
  }),

  // prettier-ignore
  moves: {
    moveThatUsesSecret: {
      
      playMinionCard: (G, ctx, slotNumber, card) => playMinionCard(G, ctx, slotNumber, card),
      playSpellCard: (G, ctx, card, target = null) => playSpellCard(G, ctx, card, target),

      client: false
    },

    drawCard: {
      move: (G, ctx, card) => drawCard(G, ctx, card),
      client: false
    },

    // drawCard: (G, ctx, card) => drawCard(G, ctx, card),
    // playMinionCard: (G, ctx, slotNumber, card) => playMinionCard(G, ctx, slotNumber, card),
    // playSpellCard: (G, ctx, card, target = null) => playSpellCard(G, ctx, card, target),

    endTurn: (G, ctx) => {}
  },

  // Function that allows you to tailor the game state to a specific player.
  playerView: (G, ctx, playerID) => {
    return StripSecrets(G, playerID);
  }
};
