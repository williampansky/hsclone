import { limitNumberWithinRange } from '../utils/range-limit';
import { generateBoardSlotObject } from '../utils/generate-board-slot';
import { generateWarcryObject } from '../utils/generate-warcry-object';
import { drawSingleCardAtStartOfCurrentPlayersTurn } from '../moves/card-moves';
import {
  addToPlayerHealth,
  subtractFromPlayerHealth
} from '../moves/player-moves';

export const initCoreWarcry = (G, ctx, cardId, index) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_001':  return CORE_001(G, ctx, cardId);
    case 'CORE_006':  return CORE_006(G, ctx, cardId);
    case 'CORE_012':  return CORE_012(G, ctx, cardId);
    case 'CORE_013':  return CORE_013(G, ctx, cardId);
    case 'CORE_016':  return CORE_016(G, ctx, cardId);
    case 'CORE_021':  return CORE_021(G, ctx, cardId, index);
    case 'CORE_026':  return CORE_026(G, ctx, cardId);
    case 'CORE_032':  return CORE_032(G, ctx, cardId);
    case 'CORE_033':  return CORE_033(G, ctx, cardId);
    case 'CORE_035':  return CORE_035(G, ctx, cardId);
    case 'CORE_036':  return CORE_036(G, ctx, cardId);
    default:          break;
  }
};

const CORE_001 = (G, ctx, cardId) => {
  G.warcryObject[ctx.currentPlayer] = generateWarcryObject(cardId);
};

const CORE_006 = (G, ctx, cardId) => {
  G.warcryObject[ctx.currentPlayer] = generateWarcryObject(cardId);
};

const CORE_012 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(generateBoardSlotObject(`${cardId}a`));
};

const CORE_013 = (G, ctx) => {
  return drawSingleCardAtStartOfCurrentPlayersTurn(G, ctx);
};

const CORE_016 = (G, ctx, cardId) => {
  G.warcryObject[ctx.currentPlayer] = generateWarcryObject(cardId);
};

/**
 * Provide +1/+1 to one of your minions.
 */
const CORE_021 = (G, ctx, cardId, index) => {
  G.boards[ctx.currentPlayer][index] = {
    ...G.boards[ctx.currentPlayer][index],
    currentAttack: G.boards[ctx.currentPlayer][index].currentAttack + 1,
    currentHealth: G.boards[ctx.currentPlayer][index].currentHealth + 1,
    totalAttack: G.boards[ctx.currentPlayer][index].totalAttack + 1,
    totalHealth: G.boards[ctx.currentPlayer][index].totalHealth + 1
  };
};

const CORE_026 = (G, ctx) => {
  return drawSingleCardAtStartOfCurrentPlayersTurn(G, ctx);
};

/**
 * Restore 2 Health to you and all your minions.
 */
const CORE_032 = (G, ctx, cardId) => {
  const HEAL_AMOUNT = 2;

  // heal player
  addToPlayerHealth(G, ctx.currentPlayer, HEAL_AMOUNT);

  // heal minions w/loop method
  for (let i = 0; i < G.boards[ctx.currentPlayer].length; i++) {
    if (G.boards[ctx.currentPlayer][i].minionData.id !== cardId)
      transformEach(G, ctx.currentPlayer, i);
  }

  // transformation method
  function transformEach(G, player, index) {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentHealth: limitNumberWithinRange(
        G.boards[player][index].currentHealth + HEAL_AMOUNT,
        G.boards[player][index].totalHealth
      )
    };
  }
};

/**
 * Gain +1/+1 for each of your other active minions.
 */
const CORE_033 = (G, ctx, cardId) => {
  // (length - 1) since we don't count CORE_033 itself
  const NUMBER_OF_MINIONS = parseInt(G.boards[ctx.currentPlayer].length - 1);
  const isTargetId = obj => obj.minionData.id === cardId;
  const targetIndex = G.boards[ctx.currentPlayer].findIndex(isTargetId);

  // add to CORE_033's current values
  transformTarget(G, ctx.currentPlayer, targetIndex);

  // transformation method
  function transformTarget(G, player, index) {
    const AP = parseInt(G.boards[player][index].minionData.attack);
    const HP = parseInt(G.boards[player][index].minionData.health);

    const newAP = AP + NUMBER_OF_MINIONS;
    const newHP = HP + NUMBER_OF_MINIONS;

    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: newAP,
      currentHealth: newHP
    };
  }
};

/**
 * Attack the enemy hero for 3 damage.
 */
const CORE_035 = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  subtractFromPlayerHealth(G, otherPlayer, 3);
};

/**
 * Deal 2 damage to anyone.
 */
const CORE_036 = (G, ctx, cardId) => {
  G.warcryObject[ctx.currentPlayer] = generateWarcryObject(cardId);
};
