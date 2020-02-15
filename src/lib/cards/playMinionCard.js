import { generateMinion } from '../utils/generate-minion';
import { deincrementHandCount } from '../moves/card-moves';
import { initCardMechanics } from '../mechanics/init-mechanics';
import { generateBoardSlotObject } from '../utils/generate-board-slot';
import { subtractFromCurrentEnergy } from '../moves/energy-moves';
import { moveCardToPlayedCards } from './moveCardToPlayedCards';
import { removeCardFromHand } from './removeCardFromHand';
import { placeCardOnBoard } from '../boards/placeCardOnBoard';
import { selectPlayableCard } from '../moves/aesthetic-moves';

/**
 * Plays the selected minion card.
 */
export const playMinionCard = (G, ctx, index, cardId = null) => {
  if (!cardId) return;
  const { boards } = G;
  const { currentPlayer } = ctx;

  if (boards[currentPlayer][index]) return;

  const CARD_OBJECT = generateMinion(cardId);
  const BOARD_SLOT_OBJ = generateBoardSlotObject(cardId);

  // subtract the card's cost from player's current energy count
  subtractFromCurrentEnergy(G, currentPlayer, CARD_OBJECT.cost);

  // place card in selected index on your board
  placeCardOnBoard(G, currentPlayer, BOARD_SLOT_OBJ, index);

  // move to your playerCards array
  moveCardToPlayedCards(G, currentPlayer, cardId);

  // and then remove card from your hand
  removeCardFromHand(G, currentPlayer, cardId);

  // then deincrement your hand count
  deincrementHandCount(G, currentPlayer);

  // check and init and mechanics
  initCardMechanics(G, ctx, CARD_OBJECT, index);

  // reset selectedCardObject
  selectPlayableCard(G, ctx);
};
