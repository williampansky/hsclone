import { subtract } from 'mathjs';
import { generateMinion } from '../utils/generate-minion';
import { initCoreBoon } from '../boons/core.boons';
import { initCoreBuff } from '../buffs/core.buffs';
import { deincrementHandCount } from '../moves/card-moves';
import {
  enableMinionCanAttack,
  enableMinionHasGuard,
  initMinionWarcry
} from '../moves/minion-moves';
import MECHANICS from '../../enums/mechanics.enums';

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

  // if minion has boon
  if (mechanics.find(m => m === MECHANICS[1]))
    initCoreBoon(G, currentPlayer, cardId);

  // if minion has buff
  if (mechanics.find(m => m === MECHANICS[2]))
    initCoreBuff(G, currentPlayer, cardId);

  // if minion has guard
  if (mechanics.find(m => m === MECHANICS[4]))
    enableMinionHasGuard(G, currentPlayer, index);

  // if minion has stampede
  if (mechanics.find(m => m === MECHANICS[5]))
    enableMinionCanAttack(G, currentPlayer, index);

  // if minion has warcry
  if (mechanics.find(m => m === MECHANICS[6]))
    initMinionWarcry(G, ctx, cardId, index);
};
