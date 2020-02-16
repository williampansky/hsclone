const deincrementDeckCount = (G, player) => {
  return G.counts[player].deck--;
};

const deincrementHandCount = (G, player) => {
  return G.counts[player].hand--;
};

const incrementDeckCount = (G, player) => {
  return G.counts[player].deck++;
};

const incrementHandCount = (G, player) => {
  if (G.players[player].deck.length === 0) return;
  return G.counts[player].hand++;
};

const counts = {
  deincrementDeckCount: (G, player) => deincrementDeckCount(G, player),
  deincrementHandCount: (G, player) => deincrementHandCount(G, player),
  incrementDeckCount: (G, player) => incrementDeckCount(G, player),
  incrementHandCount: (G, player) => incrementHandCount(G, player)
};

export default counts;
