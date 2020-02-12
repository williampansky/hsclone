const esmImport = require('esm')(module);
const {
  deincrementDeckCount,
  deincrementHandCount,
  discardCard,
  discardCards,
  drawCard,
  drawCards,
  drawSingleCardAtStartOfCurrentPlayersTurn,
  incrementDeckCount,
  incrementHandCount
} = esmImport('../../lib/moves/card-moves');

/**
 * card-moves::deincrementDeckCount()
 */
test(`deincrement player 0's deck count`, () => {
  const G = {
    counts: {
      '0': {
        deck: 1
      }
    }
  };

  deincrementDeckCount(G, '0');

  expect(G).toEqual({
    counts: {
      '0': {
        deck: 0
      }
    }
  });
});

/**
 * card-moves::deincrementHandCount()
 */
test(`deincrement player 0's hand count`, () => {
  const G = {
    counts: {
      '0': {
        hand: 1
      }
    }
  };

  deincrementHandCount(G, '0');

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 0
      }
    }
  });
});

/**
 * card-moves::discardCard()
 */
test(`discard a single card from your deck to your playedCards array`, () => {
  const G = {
    counts: {
      0: {
        deck: 30
      }
    },
    players: {
      0: {
        deck: ['CARD']
      }
    },
    playedCards: {
      0: []
    }
  };

  discardCard(G, 0);

  expect(G).toEqual({
    counts: {
      0: {
        deck: 29
      }
    },
    players: {
      0: {
        deck: []
      }
    },
    playedCards: {
      0: ['CARD']
    }
  });
});

/**
 * card-moves::discardCards()
 */
test(`discard cards equal to the provided value`, () => {
  const G = {
    counts: {
      0: {
        deck: 30
      }
    },
    players: {
      0: {
        deck: [1, 2, 3]
      }
    },
    playedCards: {
      0: []
    }
  };

  discardCards(G, 0, 3);
  expect(G.counts[0].deck).toBe(27);
  expect(G.players[0].deck).toHaveLength(0);
  expect(G.playedCards[0]).toHaveLength(3);
});

/**
 * card-moves::drawCard()
 */
test(`draw a single card from your deck to your hand`, () => {
  const G = {
    counts: {
      0: {
        deck: 30,
        hand: 0
      }
    },
    players: {
      0: {
        deck: [1, 2, 3],
        hand: []
      }
    }
  };

  drawCard(G, 0);
  expect(G.counts[0].deck).toBe(29);
  expect(G.counts[0].hand).toBe(1);
  expect(G.players[0].hand).toHaveLength(1);
});

/**
 * card-moves::drawCards()
 */
test(`draw cards equal to the provided value`, () => {
  const G = {
    counts: {
      0: {
        deck: 30,
        hand: 0
      }
    },
    players: {
      0: {
        deck: [1, 2, 3],
        hand: []
      }
    }
  };

  drawCards(G, 0, 3);
  expect(G.counts[0].deck).toBe(27);
  expect(G.counts[0].hand).toBe(3);
  expect(G.players[0].hand).toHaveLength(3);
});

/**
 * card-moves::drawSingleCardAtStartOfCurrentPlayersTurn() - draw
 */
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

  drawSingleCardAtStartOfCurrentPlayersTurn(G, ctx);
  expect(G.counts[1].deck).toBe(14);
  expect(G.counts[1].hand).toBe(6);
  expect(G.players[1].hand).toHaveLength(6);
});

/**
 * card-moves::drawSingleCardAtStartOfCurrentPlayersTurn() - burn
 */
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

  drawSingleCardAtStartOfCurrentPlayersTurn(G, ctx);
  expect(G.counts[1].deck).toBe(19);
  expect(G.counts[1].hand).toBe(10);
  expect(G.players[1].hand).toHaveLength(10);
  expect(G.playedCards[1]).toHaveLength(1);
});

/**
 * card-moves::incrementDeckCount()
 */
test(`increment player 0's deck count`, () => {
  const G = {
    counts: {
      0: {
        deck: 0
      }
    }
  };

  incrementDeckCount(G, 0);
  expect(G.counts[0].deck).toBe(1);
});

/**
 * card-moves::incrementDeckCount()
 */
test(`increment player 0's hand count`, () => {
  const G = {
    counts: {
      0: {
        hand: 0
      }
    }
  };

  incrementHandCount(G, 0);
  expect(G.counts[0].hand).toBe(1);
});
