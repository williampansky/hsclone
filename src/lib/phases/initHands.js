import { deincrementDeck, incrementHand } from '../moves/card-moves';

export default {
  onBegin: (G, ctx) => {
    const FIRST_PLAYER = G.turnOrder[0];
    const SECOND_PLAYER = G.turnOrder[1];

    // Draw three cards from the first player's deck into their hand.
    for (let i = 0; i < 3; i++) {
      deincrementDeck(G, ctx, FIRST_PLAYER); // set counts[player].deck
      incrementHand(G, ctx, FIRST_PLAYER); // set counts[player].hand
      G.players[FIRST_PLAYER].hand.push(
        // pushes to hand
        G.players[FIRST_PLAYER].deck.splice(0, 1)[0] // splices from deck
      );
    }

    // Draw four cards from the first player's deck into their hand;
    // they get four cards since they are not the starting player.
    for (let i = 0; i < 4; i++) {
      deincrementDeck(G, ctx, SECOND_PLAYER); // set counts[player].deck
      incrementHand(G, ctx, SECOND_PLAYER); // set counts[player].hand
      G.players[SECOND_PLAYER].hand.push(
        // pushes to hand
        G.players[SECOND_PLAYER].deck.splice(0, 1)[0] // splices from deck
      );
    }

    // Give the second player the Energy card (The Orb), which when
    // played gives that player an additional energy point for the turn.
    incrementHand(G, ctx, SECOND_PLAYER);
    G.players[SECOND_PLAYER].hand.push('THE_ORB');
  },

  // End phase when both player's have their starting hands
  endIf: (G, ctx) =>
    G.players[G.turnOrder[0]].hand.length === 3 &&
    G.players[G.turnOrder[1]].hand.length === 5,

  /**
   * @todo add ability to get new starting hand cards
   */
  // moves: {},

  next: 'play'
};
