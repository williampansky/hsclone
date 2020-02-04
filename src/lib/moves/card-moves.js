import { add, subtract } from 'mathjs';
import { playSpellByCardId } from './spell-moves';

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

export const playMinionCard = (G, ctx, slotNumber, cardId, cardCost) => {
  const { boards, energy, players, playedCards } = G;
  const { currentPlayer } = ctx;

  // subtract the card's cost from player's current energy count
  energy[ctx.currentPlayer].current = subtract(
    energy[ctx.currentPlayer].current,
    cardCost
  );

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

export const playSpellCard = (G, ctx, cardId, cardCost) => {
  const { energy, players, playedCards } = G;
  const { currentPlayer } = ctx;

  // subtract the card's cost from player's current energy count
  energy[ctx.currentPlayer].current = subtract(
    energy[ctx.currentPlayer].current,
    cardCost
  );

  // play spell based on the card's id
  playSpellByCardId(G, ctx, cardId);

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
