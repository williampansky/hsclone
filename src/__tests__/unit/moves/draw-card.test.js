import drawCard from 'lib/moves/draw-card';

test(`should draw a single card from your deck to your hand`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: {
      '0': {
        deck: 3,
        hand: 0
      }
    },
    players: {
      '0': {
        deck: ['CARD_TO_DRAW', 'SOME_CARD', 'SOME_OTHER_CARD'],
        hand: []
      }
    }
  };

  drawCard(G, ctx, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(2);
  expect(G.counts[ctx.currentPlayer].hand).toBe(1);
  expect(G.players[ctx.currentPlayer].deck).toHaveLength(2);
  expect(G.players[ctx.currentPlayer].hand).toHaveLength(1);
});

test(`should draw multiple cards from your deck to your hand`, () => {
  const AMOUNT_TO_DRAW = 4;
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: {
      '0': {
        deck: 6,
        hand: 0
      }
    },
    players: {
      '0': {
        deck: [
          'CARD_TO_DRAW1',
          'CARD_TO_DRAW2',
          'CARD_TO_DRAW3',
          'CARD_TO_DRAW4',
          'SOME_CARD',
          'SOME_OTHER_CARD'
        ],
        hand: []
      }
    }
  };

  drawCard(G, ctx, ctx.currentPlayer, AMOUNT_TO_DRAW);
  expect(G.counts[ctx.currentPlayer].deck).toBe(2);
  expect(G.counts[ctx.currentPlayer].hand).toBe(4);
  expect(G.players[ctx.currentPlayer].deck).toHaveLength(2);
  expect(G.players[ctx.currentPlayer].hand).toHaveLength(4);
});

test(`should eject if player's deck is empty`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: {
      '0': {
        deck: 0,
        hand: 0
      }
    },
    players: {
      '0': {
        deck: [],
        hand: ['SOME_CARD', 'SOME_OTHER_CARD']
      }
    }
  };

  drawCard(G, ctx, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(-1);
  expect(G.counts[ctx.currentPlayer].hand).toBe(0);
  expect(G.players[ctx.currentPlayer].deck).toHaveLength(0);
  expect(G.players[ctx.currentPlayer].hand).toHaveLength(2);
});
