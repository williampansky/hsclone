import { subtract } from 'mathjs';
import { generateMinion } from '../utils/generate-minion';
import { deincrementHandCount } from '../moves/card-moves';
import { initCardMechanics } from '../mechanics/init-mechanics';

/**
 * Plays the selected minion card.
 */
export const playMinionCard = (G, ctx, index, cardId, cardCost) => {
  const { boards, energy, players, playedCards } = G;
  const { currentPlayer } = ctx;

  const minionObject = generateMinion(cardId);
  const { mechanics } = minionObject;

  const CARD_ITEM = {
    canAttack: false,
    canBeAttacked: false,
    currentAttack: minionObject && minionObject.attack,
    currentHealth: minionObject && minionObject.health,
    hasGuard: false,
    minionData: minionObject,
    totalAttack: minionObject && minionObject.attack,
    totalHealth: minionObject && minionObject.health
  };

  // subtract the card's cost from player's current energy count
  energy[ctx.currentPlayer].current = subtract(
    energy[ctx.currentPlayer].current,
    cardCost
  );

  // place card in selected index on your board
  const newBoard = [
    ...boards[currentPlayer].slice(0, index + 1),
    CARD_ITEM,
    ...boards[currentPlayer].slice(index + 1)
  ];

  // swap new board in
  boards[currentPlayer] = newBoard;

  // move to your playerCards array
  playedCards[currentPlayer].push(
    players[currentPlayer].hand.find(c => c.id === cardId)
  );

  // and then remove card from your hand
  const newHand = players[currentPlayer].hand.filter(c => c.id !== cardId);
  players[currentPlayer].hand = newHand;

  // then deincrement your hand count
  deincrementHandCount(G, currentPlayer);

  // check and init and mechanics
  initCardMechanics(G, ctx, mechanics, cardId, index);
};
