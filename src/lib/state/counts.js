const counts = {
  __DATA_MODEL: {
    '0': {
      deck: 30,
      hand: 0,
      timer: 75000
    },
    '1': {
      deck: 30,
      hand: 0,
      timer: 75000
    }
  },
  deincrementDeck: (G, player) => deincrementDeckCount(G, player),
  deincrementHand: (G, player) => deincrementHandCount(G, player),
  incrementDeck: (G, player) => incrementDeckCount(G, player),
  incrementHand: (G, player) => incrementHandCount(G, player)
};

export const deincrementDeckCount = (G, player) => {
  G.counts[player].deck--;
};

export const deincrementHandCount = (G, player) => {
  G.counts[player].hand--;
};

export const incrementDeckCount = (G, player) => {
  G.counts[player].deck++;
};

export const incrementHandCount = (G, player) => {
  if (G.players[player].deck.length === 0) return;
  G.counts[player].hand++;
};

export default counts;
