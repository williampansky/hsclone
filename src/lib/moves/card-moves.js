import { add, subtract } from 'mathjs';

export const incrementDeck = (G, ctx, player) => {
  return G.counts[player].deck++;
};

export const deincrementDeck = (G, ctx, player) => {
  return G.counts[player].deck--;
};

export const incrementHand = (G, ctx, player) => {
  return G.counts[player].hand++;
};

export const deincrementHand = (G, ctx, player) => {
  return G.counts[player].hand--;
};

export const drawCard = (G, ctx, card) => {
  const { players } = G;
  const { currentPlayer } = ctx;

  Number(currentPlayer) === 0
    ? deincrementDeck(G, ctx, 0)
    : deincrementDeck(G, ctx, 1);

  Number(currentPlayer) === 0
    ? incrementHand(G, ctx, 0)
    : incrementHand(G, ctx, 1);

  players[currentPlayer].cards.push(card);
};

export const playMinionCard = (G, ctx, slotNumber, card) => {
  const { boards } = G;
  const { currentPlayer } = ctx;

  boards[currentPlayer][`slot${slotNumber}`] = card;
};

export const playSpellCard = (G, ctx, card, target) => {
  const { boards } = G;
  const { currentPlayer } = ctx;

  boards[currentPlayer][`slot${target}`] = card;
};
