import { subtract } from 'mathjs';
import { getCardByID } from '../utils/get-card-by-id';
import { generateMinion } from '../utils/generate-minion';
import { playSpellByCardId } from './spell-moves';
import {
  enableMinionCanAttack,
  enableMinionHasGuard,
  initMinionWarcry
} from './minion-moves';
import MECHANICS from '../../enums/mechanics.enums';

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

export const addCardToHand = (G, ctx, player, cardId) => {
  if (!getCardByID(cardId)) return;
  incrementHandCount(G, player);
  G.players[player].hand.push(cardId);
};

/**
 * Discard a single card from your deck into your `playedCards`; also runs
 * `deincrementDeckCount()` and `incrementHandCount()` functions.
 * @param {*} G
 * @param {*} player
 * @requires card-moves::deincrementDeckCount()
 */
// prettier-ignore
export const discardCard = (G, player) => {
  deincrementDeckCount(G, player); // ............. set counts[player].deck
  G.playedCards[player].push( // .................. pushes to playedCards
    G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
  );
};

/**
 * Runs `discardCard()` multiple times based on the `numberOfCards` param.
 * @param {Number} numberOfCards Number of cards to discard
 * @requires card-moves::discardCard()
 */
export const discardCards = (G, player, numberOfCards = 1) => {
  for (let i = 0; i < numberOfCards; i++) discardCard(G, player);
};

/**
 * Draw a single card from your deck into your hand; also runs
 * `deincrementDeckCount()` and `incrementHandCount()` functions.
 * @requires card-moves::deincrementDeckCount()
 * @requires card-moves::incrementHandCount()
 */
// prettier-ignore
export const drawCard = (G, player) => {
  deincrementDeckCount(G, player); // ............... set counts[player].deck
  incrementHandCount(G, player); // ................. set counts[player].hand
  G.players[player].hand.push( // ................... pushes to hand
    getCardByID( // ................................. generates card object
      G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
    ) 
  );
};

/**
 * Runs `drawCard()` multiple times based on the `numberOfCards` param.
 * @param {Number} numberOfCards Number of cards to draw
 * @requires card-moves::drawCard()
 */
export const drawCards = (G, player, numberOfCards = 1) => {
  for (let i = 0; i < numberOfCards; i++) drawCard(G, player);
};

/**
 * Draws or discards a single card at the start of the current player's turn.
 * @param {Object} ctx currentPlayer
 * @requires card-moves::drawCard()
 * @requires card-moves::discardCard()
 */
export const drawSingleCardAtStartOfCurrentPlayersTurn = (G, ctx) => {
  const { currentPlayer } = ctx;
  const currentPlayerHandLength = G.players[currentPlayer].hand.length;
  const currentPlayerHasLessThan10Cards = currentPlayerHandLength <= 9;

  if (currentPlayerHasLessThan10Cards) drawCard(G, currentPlayer);
  else discardCard(G, currentPlayer);
};

export const playMinionCard = (G, ctx, slotNumber, cardId, cardCost) => {
  const { boards, energy, players, playedCards } = G;
  const { currentPlayer } = ctx;
  const minionObject = generateMinion(cardId);
  const { mechanics } = minionObject;

  // subtract the card's cost from player's current energy count
  energy[ctx.currentPlayer].current = subtract(
    energy[ctx.currentPlayer].current,
    cardCost
  );

  // place card in selected slotNumber on your board
  boards[currentPlayer][`slot${slotNumber}`].minionData = minionObject;

  // move to your playerCards array
  playedCards[currentPlayer].push(
    players[currentPlayer].hand.find(c => c.id === cardId)
  );

  // and then remove card from your hand
  const newHand = players[currentPlayer].hand.filter(c => c.id !== cardId);
  players[currentPlayer].hand = newHand;

  // then deincrement your hand count
  deincrementHandCount(G, currentPlayer);

  // if minion has guard
  if (mechanics.find(m => m === MECHANICS[4]))
    enableMinionHasGuard(G, ctx.currentPlayer, slotNumber);

  // if minion has stampede
  if (mechanics.find(m => m === MECHANICS[5]))
    enableMinionCanAttack(G, ctx.currentPlayer, slotNumber);

  // if minion has warcry
  if (mechanics.find(m => m === MECHANICS[6]))
    initMinionWarcry(G, ctx, slotNumber, cardId);
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
    players[currentPlayer].hand.find(c => c.id === cardId)
  );

  // and then remove card from your hand
  const newHand = players[currentPlayer].hand.filter(c => c.id !== cardId);
  players[currentPlayer].hand = newHand;

  // then deincrement your hand count
  deincrementHandCount(G, currentPlayer);
};
