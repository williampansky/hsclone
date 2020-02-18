// state
import boards from 'state/boards';
import counts from 'state/counts';
import energy from 'state/energy';

// moves
import selectCard from 'moves/select-card';

// utils
import copyCardToPlayedCards from 'utils/copy-card-to-played-cards';
import createBoardSlotObject from 'creators/create-board-slot-object';
import createMinionObject from 'creators/create-minion-object';
import playSpellByCardId from 'spells/play-spell-card-by-id';
import removeCardFromHand from 'utils/remove-card-from-hand';
import TYPE from 'enums/type.enums';

/**
 * Plays the provided card.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} cardObject
 * @param {number} index
 */
const playCard = (G, ctx, index, cardId = null) => {
  if (!cardId) return;

  const CARD_OBJECT = createMinionObject(cardId);
  if (!CARD_OBJECT) return;

  const BOARD_SLOT_OBJ = createBoardSlotObject(cardId);
  if (!BOARD_SLOT_OBJ) return;

  const { type } = CARD_OBJECT;
  switch (type) {
    case TYPE[1]:
      return playMinionCard(G, ctx, index, cardId, CARD_OBJECT, BOARD_SLOT_OBJ);

    case TYPE[3]:
      return playSpellCard(G, ctx, index, cardId, CARD_OBJECT.cost);

    default:
      return;
  }
};

export const playMinionCard = (G, ctx, index, cardId, cardObj, boardObj) => {
  const { currentPlayer } = ctx;
  const { cost } = cardObj;

  // subtract the card's cost from player's current energy count
  energy.subtract(G, currentPlayer, cost);

  // place card in selected index on your board
  boards.placeCardOnBoard(G, currentPlayer, boardObj, index);

  // move to your playerCards array
  copyCardToPlayedCards(G, currentPlayer, cardId);

  // and then remove card from your hand
  removeCardFromHand(G, currentPlayer, cardId);

  // then deincrement your hand count
  counts.deincrementHand(G, currentPlayer);

  // check and init and mechanics
  // initCardMechanics(G, ctx, cardObj, index);

  // reset selectedCardObject
  G.selectedCardIndex[currentPlayer] = null;
  G.selectedCardObject[currentPlayer] = null;
};

export const playSpellCard = (G, ctx, index, cardId, cardCost, target) => {
  switch (index) {
    case 0:
      return playGlobalSpellCard(G, ctx, cardId, cardCost);

    default:
      break;
  }
};

export const playGlobalSpellCard = (G, ctx, cardId, cardCost) => {
  const { currentPlayer } = ctx;

  energy.subtract(G, currentPlayer, cardCost);
  playSpellByCardId(G, ctx, cardId);
  selectCard(G, ctx);
  copyCardToPlayedCards(G, currentPlayer, cardId);
  removeCardFromHand(G, currentPlayer, cardId);
  counts.deincrementHand(G, currentPlayer);
};

export default playCard;
