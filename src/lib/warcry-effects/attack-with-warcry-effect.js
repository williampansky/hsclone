import boards from 'lib/state/boards';
import health from 'lib/state/health';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

/**
 * Attack a target with a damaging Warcry effect.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} targetContext
 * @param {number} targetIndex
 * @param {number} damageNum
 */
const attackWithWarcryEffect = (
  G,
  ctx,
  targetContext,
  targetIndex,
  damageNum
) => {
  const { currentPlayer } = ctx;
  const target = G.turnOrder.find(p => p !== currentPlayer);
  const targetSlot = G.boards[target][targetIndex];

  switch (targetContext) {
    case WARCRY_TARGET_CONTEXT[1]:
      return castAtMinion(G, ctx, target, targetSlot, targetIndex, damageNum);

    default:
      return castAtPlayer(G, target, damageNum);
  }
};

const castAtMinion = (G, ctx, target, targetSlot, targetIndex, damageNum) => {
  boards.subtractFromMinionHealth(G, target, targetIndex, damageNum);
  boards.killMinionIfHealthIsZero(G, ctx, target, targetSlot, targetIndex);
};

const castAtPlayer = (G, target, damageNum) => {
  health.subtract(G, target, damageNum);
};

export default attackWithWarcryEffect;
