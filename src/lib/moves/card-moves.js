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

export const playMinionCard = (G, ctx, slotNumber, cardId, cardIndex) => {
  const { boards, players, playedCards } = G;
  const { currentPlayer } = ctx;

  // place card in selected slotNumber on your board
  boards[currentPlayer][`slot${slotNumber}`] = cardId;

  // move to your playerCards array
  playedCards[currentPlayer].push(
    players[currentPlayer].hand.find(c => c === cardId)
  );

  // and then remove card from your hand
  const newHand = players[currentPlayer].hand.filter(c => c !== cardId);
  players[currentPlayer].hand = newHand;

  // then deincrement your hand count
  deincrementHand(G, ctx, currentPlayer);
};

export const playSpellCard = (G, ctx, card, target) => {
  const { boards } = G;
  const { currentPlayer } = ctx;

  boards[currentPlayer][`slot${target}`] = card;
};
