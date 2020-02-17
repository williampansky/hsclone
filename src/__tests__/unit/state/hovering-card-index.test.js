import hoverCard from 'lib/moves/hover-card';

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

  hoverCard(G, ctx, 4);

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

  hoverCard(G, ctx);

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
