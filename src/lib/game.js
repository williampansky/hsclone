import {
  getCardFromDeck,
  playMinionCard,
  playSpellCard
} from './moves/card-moves';

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
      player1: {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
        slot6: null,
        slot7: null
      },
      player2: {
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
      player1: {
        current: 0,
        total: 10
      },
      player2: {
        current: 0,
        total: 10
      }
    },
    numberOfCardsInTheirHand: 0,
    numberOfCardsInTheirDeck: 30
  }),

  // prettier-ignore
  moves: {
    moveThatUsesSecret: {
      /**
       * @param {Number} slotNumber
       * @param {Object} card
       */
      playCard: (G, ctx, slotNumber, card) => {
        const { boards } = G;
        const { currentPlayer } = ctx;
        const playerNumber = Number(currentPlayer) + 1;

        boards[`player${playerNumber}`][`slot${slotNumber}`] = card;
      },

      client: false
    },

    getCardFromDeck: (G, ctx, card) => getCardFromDeck(G, ctx, card),
    playMinionCard: (G, ctx, slotNumber, card) => playMinionCard(G, ctx, slotNumber, card),
    playSpellCard: (G, ctx, card, target = null) => playSpellCard(G, ctx, card, target),

    endTurn: (G, ctx) => {}
  },

  // Function that allows you to tailor the game state to a specific player.
  playerView: (G, ctx, playerID) => {
    return StripSecrets(G, playerID);
  }
};
