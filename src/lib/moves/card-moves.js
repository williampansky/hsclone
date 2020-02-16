import { getCardByID } from '../utils/get-card-by-id';
import { playSpellByCardId } from './spell-moves';
import { moveCardToPlayedCards } from '../cards/moveCardToPlayedCards';
import { removeCardFromHand } from '../cards/removeCardFromHand';
import { selectPlayableCard } from '../moves/aesthetic-moves';
import { subtractFromCurrentEnergy } from '../moves/energy-moves';
import { subtractFromPlayerHealth } from '../moves/player-moves';

export const incrementDeckCount = (G, player) => {
  return G.counts[player].deck++;
};

export const deincrementDeckCount = (G, player) => {
  return G.counts[player].deck--;
};

export const incrementHandCount = (G, player) => {
  if (G.players[player].deck.length === 0) return;
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
  if (G.players[player].deck.length === 0) return; // eject if no deck
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
