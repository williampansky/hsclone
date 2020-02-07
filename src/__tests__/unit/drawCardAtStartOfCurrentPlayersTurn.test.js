const esmImport = require('esm')(module);
const { drawCardAtStartOfCurrentPlayersTurn } = esmImport(
  '../../lib/moves/card-moves'
);

test(`Draw 1 card at the start of the current player's turn when their hand is not full`, () => {
  const G = {
    counts: {
      1: {
        deck: 15,
        hand: 5
      }
    },
    players: {
      1: {
        deck: [1],
        hand: [1, 2, 3, 4, 5]
      }
    }
  };

  const ctx = {
    currentPlayer: 1
  };

  drawCardAtStartOfCurrentPlayersTurn(G, ctx);
  expect(G.counts[1].deck).toBe(14);
  expect(G.counts[1].hand).toBe(6);
  expect(G.players[1].hand).toHaveLength(6);
});

test(`Discard 1 card at the start of the current player's turn when their hand is full`, () => {
  const G = {
    counts: {
      1: {
        deck: 20,
        hand: 10
      }
    },
    players: {
      1: {
        deck: [1],
        hand: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    playedCards: {
      1: []
    }
  };

  const ctx = {
    currentPlayer: 1
  };

  drawCardAtStartOfCurrentPlayersTurn(G, ctx);
  expect(G.counts[1].deck).toBe(19);
  expect(G.counts[1].hand).toBe(10);
  expect(G.players[1].hand).toHaveLength(10);
  expect(G.playedCards[1]).toHaveLength(1);
});
