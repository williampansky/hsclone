const incrementHandCount = (G, player) => {
  if (G.players[player].deck.length === 0) return;
  return G.counts[player].hand++;
};

export default incrementHandCount;
