import discardCard from 'lib/moves/discard-card';

test(`discard a single card from your deck to your playedCards array`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { deck: 30 } },
    players: { '0': { deck: ['CARD'] } },
    playedCards: { '0': [] }
  };

  discardCard(G, ctx, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(29);
  expect(G.players[ctx.currentPlayer].deck).toHaveLength(0);
  expect(G.playedCards[ctx.currentPlayer]).toHaveLength(1);
});

test(`discard cards equal to the provided value`, () => {
  const AMOUNT_TO_DISCARD = 3;
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: {
      '0': {
        deck: 30
      }
    },
    players: {
      '0': {
        deck: [1, 2, 3]
      }
    },
    playedCards: {
      '0': []
    }
  };

  discardCard(G, ctx, ctx.currentPlayer, AMOUNT_TO_DISCARD);
  expect(G.counts[ctx.currentPlayer].deck).toBe(27);
  expect(G.players[ctx.currentPlayer].deck).toHaveLength(0);
  expect(G.playedCards[0]).toHaveLength(3);
});
