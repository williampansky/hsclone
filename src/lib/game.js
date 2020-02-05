import { TurnOrder } from 'boardgame.io/core';
import {
  hoverOverCardInHand,
  selectPlayableCard
} from './moves/aesthetic-moves';
import {
  drawCard,
  playMinionCard,
  playSpellCard,
  incrementDeck,
  deincrementDeck,
  incrementHand,
  deincrementHand
} from './moves/card-moves';
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
        hand: []
      },
      1: {
        deck: [],
        hand: []
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
    },
    playedCards: {
      0: [],
      1: []
    },
    hoveringCardIndexObject: {
      0: null,
      1: null
    },
    selectedCardIndexObject: {
      0: null,
      1: null
    },
    turnOrder: ['0', '1'].sort(() => {
      return Math.random() - 0.5;
    })

    //
    // turnOrder: [...Array(2)]
    //   .map(() => {

    //   })
    //   .join()
    //   .split(',')
    //
    // turnOrder: [...Array(2)]
    //   .map(() => {
    //     return Math.round(Math.random() * 1);
    //   })
    //   .join()
    //   .split(',')
  }),

  // prettier-ignore
  moves: {
    // server-side moves (e.g. `client: false`)
    drawCard: { client: false, move: (G, ctx, card) => drawCard(G, ctx, card) },
    playMinionCard: { client: false, move: (G, ctx, slotNumber, cardId, cardIndex) => playMinionCard(G, ctx, slotNumber, cardId, cardIndex) },
    playSpellCard: { client: false, move: (G, ctx, card, target = null) => playSpellCard(G, ctx, card, target) },

    // client-side moves
    // setCurrentEnergy: (G, ctx, player, amount) => setCurrentEnergy(G, ctx, player, amount),
    // setTotalEnergy: (G, ctx, player, amount) => setTotalEnergy(G, ctx, player, amount),

    // deck and hand count manipulations
    deincrementDeck: (G, ctx, player) => deincrementDeck(G, ctx, player),
    deincrementHand: (G, ctx, player) => deincrementHand(G, ctx, player),
    incrementDeck: (G, ctx, player) => incrementDeck(G, ctx, player),
    incrementHand: (G, ctx, player) => incrementHand(G, ctx, player),

    // hover-specific moves; indicating the opponent player's hover state
    hoverOverCardInHand: (G, ctx, index) => hoverOverCardInHand(G, ctx, index),
    selectPlayableCard: (G, ctx, index) => selectPlayableCard(G, ctx, index)
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
    order: TurnOrder.CUSTOM_FROM('turnOrder'),

    onBegin: (G, ctx, playerID) => {
      // Increments the `total` energy of the `currentPlayer`
      // by one; but not more than ten.
      if (G.energy[ctx.currentPlayer].total !== 10)
        G.energy[ctx.currentPlayer].total++;
      
      // Then, sets the `current` value to the total; which allows
      // the `currentPlayer` to spend said energy on card play functions.
      G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;

      // Next, draw one card from the player's deck & move it into their hand.
      // console.log(ctx.currentPlayer);
      // console.log(G.players[ctx.currentPlayer].hand);
      // const newDeck = G.players[ctx.currentPlayer].deck;
      // console.log(newDeck);
      
      // for (let i = 0; i < 1; i++) {
        // G.players[ctx.currentPlayer].hand.push(
        //   // G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
        //   'TEST'
        // );
      // }
      // const oldHand = G.players[ctx.currentPlayer].hand;
      // const newHand = [
      //   ...oldHand,
      //   'TEST'
      // ];

      // console.log(newHand)
      // G.players[ctx.currentPlayer].hand = [...newHand];
      // drawCard(G, ctx);
      // G.players[ctx.currentPlayer].hand.push(
      //   G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
      // );
      // if (ctx.currentPlayer === G.turnOrder[0]) drawCard(G, ctx);
      // else if (ctx.currentPlayer === G.turnOrder[1]) drawCard(G, ctx);
    },

    onEnd: (G, ctx) => {}
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

    initHands: {
      onBegin: (G, ctx) => {
        const FIRST_PLAYER = G.turnOrder[0];
        const SECOND_PLAYER = G.turnOrder[1];

        // Draw three cards from the first player's deck into their hand.
        for (let i = 0; i < 3; i++) {
          deincrementDeck(G, ctx, FIRST_PLAYER); // set counts[player].deck
          incrementHand(G, ctx, FIRST_PLAYER); // set counts[player].hand
          G.players[FIRST_PLAYER].hand.push( // pushes to hand
            G.players[FIRST_PLAYER].deck.splice(0, 1)[0] // splices from deck
          );
        }

        // Draw four cards from the first player's deck into their hand;
        // they get four cards since they are not the starting player.
        for (let i = 0; i < 4; i++) {
          deincrementDeck(G, ctx, SECOND_PLAYER); // set counts[player].deck
          incrementHand(G, ctx, SECOND_PLAYER); // set counts[player].hand
          G.players[SECOND_PLAYER].hand.push( // pushes to hand
            G.players[SECOND_PLAYER].deck.splice(0, 1)[0] // splices from deck
          );
        }

        // Give the second player the Energy card (The Orb), which when
        // played gives that player an additional energy point for the turn.
        incrementHand(G, ctx, SECOND_PLAYER);
        G.players[SECOND_PLAYER].hand.push('THE_ORB');
      },

      // End phase when both player's have their starting hands
      endIf: (G, ctx) => (
        G.players[G.turnOrder[0]].hand.length === 3 &&
        G.players[G.turnOrder[1]].hand.length === 5
      ),
      
      /**
       * @todo add ability to get new starting hand cards
       */
      // moves: {},

      next: 'play'
    },

    play: {
      turn: {
        order: TurnOrder.CUSTOM_FROM('turnOrder'),
        onBegin: (G, ctx, playerID) => {
          // Increments the `total` energy of the `currentPlayer`
          // by one; but not more than ten.
          if (G.energy[ctx.currentPlayer].total !== 10)
          G.energy[ctx.currentPlayer].total++;
          
          // Then, sets the `current` value to the total; which allows
          // the `currentPlayer` to spend said energy on card play functions.
          G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;

          deincrementDeck(G, ctx, ctx.currentPlayer); // set counts[player].deck
          incrementHand(G, ctx, ctx.currentPlayer); // set counts[player].hand

          G.players[ctx.currentPlayer].hand.push(
            G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
          );
        }
      }
    }
  }
};
