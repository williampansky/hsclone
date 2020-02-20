import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';

test(`should draw a single start turn card`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { deck: 4, hand: 9 } },
    players: {
      '0': {
        deck: ['CORE_001', 'CORE_002', 'CORE_003', 'CORE_004'],
        hand: [
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD'
        ]
      }
    },
    playedCards: { 0: [] },
    health: { '0': 30 }
  };

  drawCardAtStartOfTurn(G, ctx);

  expect(G.counts['0']).toEqual({ deck: 3, hand: 10 });
  expect(G.players['0'].deck).toEqual(['CORE_002', 'CORE_003', 'CORE_004']);
  expect(G.players['0'].hand).toHaveLength(10);
  expect(G.players['0'].hand[9].id).toBe('CORE_001');
  expect(G.playedCards['0']).toHaveLength(0);
  expect(G.health['0']).toBe(30);
});

test(`should burn a card if player's hand is full`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { deck: 4, hand: 10 } },
    players: {
      '0': {
        deck: ['CORE_001', 'CORE_002', 'CORE_003', 'CORE_004'],
        hand: [
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD'
        ]
      }
    },
    playedCards: { 0: [] },
    health: { '0': 30 }
  };

  drawCardAtStartOfTurn(G, ctx);

  expect(G).toEqual({
    counts: { '0': { deck: 3, hand: 10 } },
    players: {
      '0': {
        deck: ['CORE_002', 'CORE_003', 'CORE_004'],
        hand: [
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD',
          'CARD'
        ]
      }
    },
    playedCards: { 0: ['CORE_001'] },
    health: { '0': 30 }
  });
});

test(`should remove one health point if player's deck is empty`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { deck: 0, hand: 2 } },
    players: { '0': { deck: [], hand: ['CARD', 'CARD'] } },
    playedCards: { 0: [] },
    health: { '0': 30 }
  };

  drawCardAtStartOfTurn(G, ctx);

  expect(G).toEqual({
    counts: { '0': { deck: -1, hand: 2 } },
    players: { '0': { deck: [], hand: ['CARD', 'CARD'] } },
    playedCards: { 0: [] },
    health: { '0': 29 }
  });
});

test(`should remove health equivalent to player's negative deck amount`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { deck: -4, hand: 2 } },
    players: { '0': { deck: [], hand: ['CARD', 'CARD'] } },
    playedCards: { 0: [] },
    health: { '0': 30 }
  };

  drawCardAtStartOfTurn(G, ctx);

  expect(G).toEqual({
    counts: { '0': { deck: -5, hand: 2 } },
    players: { '0': { deck: [], hand: ['CARD', 'CARD'] } },
    playedCards: { 0: [] },
    health: { '0': 25 }
  });
});
