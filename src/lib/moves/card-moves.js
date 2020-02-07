import { subtract } from 'mathjs';
import { playSpellByCardId } from './spell-moves';
import { generateMinion } from '../utils/generate-minion';

export const incrementDeckCount = (G, player) => {
  return G.counts[player].deck++;
};

export const deincrementDeckCount = (G, player) => {
  return G.counts[player].deck--;
};

export const incrementHandCount = (G, player) => {
  return G.counts[player].hand++;
};

export const deincrementHandCount = (G, player) => {
  return G.counts[player].hand--;
};

export const drawCardAtStartOfCurrentPlayersTurn = (G, ctx) => {
  if (G.players[CURRENT_PLAYER].hand.length <= 9) {
    deincrementDeckCount(G, CURRENT_PLAYER); // set counts[player].deck
    incrementHandCount(G, CURRENT_PLAYER); // set counts[player].hand

    G.players[CURRENT_PLAYER].hand.push(
      G.players[CURRENT_PLAYER].deck.splice(0, 1)[0]
    );
  } else {
    // if you are holding ten cards, your next card will be discarded
    G.playedCards[CURRENT_PLAYER].push(
      G.players[CURRENT_PLAYER].deck.splice(0, 1)[0]
    );
  }
};

export const discardCard = (G, player, numberOfCards = 1) => {
  // prettier-ignore
  for (let i = 0; i < numberOfCards; i++) {
    deincrementDeckCount(G, player); // set counts[player].deck
    incrementHandCount(G, player); // set counts[player].hand
    G.playedCards[player].hand.push( // pushes to playedCards
      G.players[player].deck.splice(0, 1)[0] // splices from deck
    );
  }
};

/**
 * Draw a single card from your deck into your hand; also runs
 * `deincrementDeckCount()` and `incrementHandCount()` functions.
 * @param {*} G
 * @param {*} player
 */
// prettier-ignore
export const drawCard = (G, player) => {
  deincrementDeckCount(G, player); // ............. set counts[player].deck
  incrementHandCount(G, player); // ............... set counts[player].hand
  G.players[player].hand.push( // ................. pushes to hand
    G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
  );
};

/**
 * Runs `drawCard()` multiple times based
 * on the provided `numberOfCards` param.
 * @param {*} G
 * @param {*} player
 * @param {*} numberOfCards
 * @requires card-moves::drawCard()
 */
export const drawCards = (G, player, numberOfCards = 1) => {
  // prettier-ignore
  for (let i = 0; i < numberOfCards; i++) {
    drawCard(G, player);
  }
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
  boards[currentPlayer][`slot${slotNumber}`].minionData = generateMinion(
    cardId
  );

  // move to your playerCards array
  playedCards[currentPlayer].push(
    players[currentPlayer].hand.find(c => c === cardId)
  );

  // and then remove card from your hand
  const newHand = players[currentPlayer].hand.filter(c => c !== cardId);
  players[currentPlayer].hand = newHand;

  // then deincrement your hand count
  deincrementHandCount(G, currentPlayer);
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
  deincrementHandCount(G, currentPlayer);
};
