import { getCardByID } from '../utils/get-card-by-id';
import { playSpellByCardId } from './spell-moves';
import { moveCardToPlayedCards } from '../cards/moveCardToPlayedCards';
import { removeCardFromHand } from '../cards/removeCardFromHand';
import { selectPlayableCard } from '../moves/aesthetic-moves';
import { subtractFromCurrentEnergy } from '../moves/energy-moves';
import { subtractFromPlayerHealth } from '../moves/player-moves';

export const addCardToHand = (G, ctx, player, cardId) => {
  if (!getCardByID(cardId)) return;
  incrementHandCount(G, player);
  G.players[player].hand.push(cardId);
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
  const currentPlayerDeckLength = G.players[currentPlayer].deck.length;
  const currentPlayerHandLength = G.players[currentPlayer].hand.length;
  const currentPlayerHasLessThan10Cards = currentPlayerHandLength <= 9;

  if (currentPlayerHasLessThan10Cards) drawCard(G, currentPlayer);
  else discardCard(G, currentPlayer);

  if (currentPlayerDeckLength === 0)
    subtractFromPlayerHealth(
      G,
      currentPlayer,
      Math.abs(G.counts[currentPlayer].deck)
    );
};

export const playSpellCard = (G, ctx, cardId, cardCost, target) => {
  const { currentPlayer } = ctx;

  subtractFromCurrentEnergy(G, currentPlayer, cardCost);
  playSpellByCardId(G, ctx, cardId, target);
  selectPlayableCard(G, ctx, null, null);
  moveCardToPlayedCards(G, currentPlayer, cardId);
  removeCardFromHand(G, currentPlayer, cardId);
  deincrementHandCount(G, currentPlayer);
};
