const winner = {
  __DATA_MODEL: null,
  set: (G, player) => setGameWinner(G, player)
};

export const setGameWinner = (G, player) => {
  G.winner = player;
};

export default winner;
