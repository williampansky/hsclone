const esmImport = require('esm')(module);
const { hoverOverCardInHand, selectPlayableCard } = esmImport(
  '../../lib/moves/aesthetic-moves'
);

/**
 * aesthetic-moves::hoverOverCardInHand() - w/ index
 */
test(`with an index provided, sets the currentPlayer's card hover index`, () => {
  const G = {
    hoveringCardIndex: {
      '0': null,
      '1': null
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '1'
  };

  hoverOverCardInHand(G, ctx, 4);

  expect(G).toEqual({
    hoveringCardIndex: {
      '0': null,
      '1': 4
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    }
  });
});

/**
 * aesthetic-moves::hoverOverCardInHand() - w/o index
 */
test(`without an index & card provided, sets the currentPlayer's card hover to null`, () => {
  const G = {
    hoveringCardIndex: {
      '0': 2,
      '1': null
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  hoverOverCardInHand(G, ctx);

  expect(G).toEqual({
    hoveringCardIndex: {
      '0': null,
      '1': null
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    }
  });
});

/**
 * aesthetic-moves::selectPlayableCard() - w/o index
 */
test(`without an index & card provided, sets the currentPlayer's selectedCardIndex & selectedCardObject to null`, () => {
  const G = {
    players: {
      '0': {
        hand: [
          'CARD',
          'CARD',
          {
            id: 'CARD_OBJECT'
          }
        ]
      }
    },
    selectedCardIndex: {
      '0': 2,
      '1': null
    },
    selectedCardObject: {
      '0': {
        id: 'CARD_OBJECT'
      },
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  selectPlayableCard(G, ctx);

  expect(G).toEqual({
    players: {
      '0': {
        hand: [
          'CARD',
          'CARD',
          {
            id: 'CARD_OBJECT'
          }
        ]
      }
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    },
    selectedCardObject: {
      '0': null,
      '1': null
    }
  });
});

/**
 * aesthetic-moves::selectPlayableCard() - w/ index
 */
test(`with an index provided, sets the currentPlayer's selectedCardIndex and selectedCardObject`, () => {
  const G = {
    players: {
      '0': {
        hand: [
          'CARD',
          'CARD',
          {
            id: 'CARD_OBJECT'
          }
        ]
      }
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    },
    selectedCardObject: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  selectPlayableCard(G, ctx, G.players[ctx.currentPlayer].hand[2], 2);

  expect(G).toEqual({
    players: {
      '0': {
        hand: [
          'CARD',
          'CARD',
          {
            id: 'CARD_OBJECT'
          }
        ]
      }
    },
    selectedCardIndex: {
      '0': 2,
      '1': null
    },
    selectedCardObject: {
      '0': {
        id: 'CARD_OBJECT'
      },
      '1': null
    }
  });
});
