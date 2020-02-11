import { getCardByID } from '../utils/get-card-by-id';
import { drawSingleCardAtStartOfCurrentPlayersTurn } from '../moves/card-moves';
import { addToPlayerHealth } from '../moves/player-moves';
import { limitNumberWithinRange } from '../utils/range-limit';

export const initCoreWarcry = (G, ctx, cardId, index) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_001':  return CORE_001(G, ctx);
    case 'CORE_006':  return CORE_006(G, ctx);
    case 'CORE_012':  return CORE_012(G, ctx, cardId);
    case 'CORE_013':  return CORE_013(G, ctx);
    case 'CORE_016':  return CORE_016(G, ctx);
    case 'CORE_021':  return CORE_021(G, ctx, index);
    case 'CORE_026':  return CORE_026(G, ctx);
    case 'CORE_032':  return CORE_032(G, ctx);
    default:          break;
  }
};

const CORE_001 = (G, ctx) => {
  G.warcryObject[ctx.currentPlayer] = {
    id: 'CORE_001',
    type: 'SPELL',
    cost: 0,
    attack: 1,
    spellType: 'TARGETED',
    targetingArrowText: 'Deal 1 damage'
  };
};

const CORE_006 = (G, ctx) => {
  G.warcryObject[ctx.currentPlayer] = {
    id: 'CORE_006',
    type: 'SPELL',
    cost: 0,
    heal: 1,
    spellType: 'TARGETED',
    targetingArrowText: 'Restore 2 Health to anyone.'
  };
};

const CORE_012 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push({
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: getCardByID(`${cardId}a`)
  });
};

const CORE_013 = (G, ctx) => {
  return drawSingleCardAtStartOfCurrentPlayersTurn(G, ctx);
};

const CORE_016 = (G, ctx) => {
  G.warcryObject[ctx.currentPlayer] = {
    id: 'CORE_016',
    type: 'SPELL',
    cost: 0,
    attack: 1,
    spellType: 'TARGETED',
    targetingArrowText: 'Deal 1 damage'
  };
};

/**
 * Provide +1/+1 to one of your minions.
 */
const CORE_021 = (G, ctx, index) => {
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

  // minion loop
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
