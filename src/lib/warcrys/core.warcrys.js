import boards from 'lib/state/boards';
import health from 'lib/state/health';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import playerCanAttack from 'lib/state/player-can-attack';
import playerWeapon from 'lib/state/player-weapon';

const initCoreWarcry = (G, ctx, cardId, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  // prettier-ignore
  switch (cardId) {
    case 'CORE_001':  return CORE_001(G, ctx, cardId, otherPlayer);
    case 'CORE_006':  return CORE_006(G, ctx, cardId, otherPlayer);
    case 'CORE_007':  return CORE_007(G, ctx, cardId, otherPlayer);
    case 'CORE_012':  return CORE_012(G, ctx, cardId);
    case 'CORE_013':  return CORE_013(G, ctx, cardId);
    case 'CORE_016':  return CORE_016(G, ctx, cardId);
    case 'CORE_020':  return CORE_020(G, ctx, cardId);
    case 'CORE_021':  return CORE_021(G, ctx, cardId, index);
    case 'CORE_025':  return CORE_025(G, ctx, cardId);
    case 'CORE_026':  return CORE_026(G, ctx, cardId);
    case 'CORE_032':  return CORE_032(G, ctx, cardId);
    case 'CORE_033':  return CORE_033(G, ctx, cardId);
    case 'CORE_035':  return CORE_035(G, ctx, otherPlayer);
    case 'CORE_036':  return CORE_036(G, ctx, cardId, otherPlayer);
    default:          break;
  }
};

const CORE_001 = (G, ctx, cardId, otherPlayer) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineWarcryTargets(G, otherPlayer);
};

const CORE_006 = (G, ctx, cardId, otherPlayer) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineHealTargets(G, ctx.currentPlayer);
  boards.determineHealTargets(G, otherPlayer);
};

const CORE_007 = (G, ctx, cardId, otherPlayer) => {
  playerCanAttack.disable(G, otherPlayer);
  playerWeapon.unequip(G, otherPlayer);
};

const CORE_012 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(createBoardSlotObject(`${cardId}a`));
};

const CORE_013 = (G, ctx) => {
  return drawCardAtStartOfTurn(G, ctx);
};

const CORE_016 = (G, ctx, cardId) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
};

/**
 * Calls for backup in the form of a 1/1 creature.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} cardId
 */
const CORE_020 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(
    createBoardSlotObject(
      `${cardId}${['a', 'b'].sort(() => {
        return Math.random() - 0.5;
      })}`
    )
  );
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

const CORE_025 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(createBoardSlotObject(`${cardId}a`));
};

const CORE_026 = (G, ctx) => {
  return drawCardAtStartOfTurn(G, ctx);
};

/**
 * Restore 2 Health to you and all your minions.
 */
const CORE_032 = (G, ctx, cardId) => {
  const HEAL_AMOUNT = 2;

  // heal player
  health.add(G, ctx.currentPlayer, HEAL_AMOUNT);

  // heal minions w/loop method
  for (let i = 0; i < G.boards[ctx.currentPlayer].length; i++)
    if (G.boards[ctx.currentPlayer][i].minionData.id !== cardId)
      boards.addToMinionHealth(G, ctx.currentPlayer, i, HEAL_AMOUNT);
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
    const AP = parseInt(G.boards[player][index].currentAttack);
    const HP = parseInt(G.boards[player][index].currentHealth);

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
const CORE_035 = (G, ctx, otherPlayer) => {
  health.subtract(G, otherPlayer, 3);
};

/**
 * Deal 2 damage to the enemy player or one of their minions.
 */
const CORE_036 = (G, ctx, cardId, otherPlayer) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineWarcryTargets(G, otherPlayer);
};

export default initCoreWarcry;
