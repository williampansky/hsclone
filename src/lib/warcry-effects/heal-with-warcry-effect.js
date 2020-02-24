import boards from 'lib/state/boards';
import health from 'lib/state/health';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

/**
 * Attack a target with a damaging Warcry effect.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} targetContext
 * @param {number} targetIndex
 * @param {number} healAmount
 */
const attackWithWarcryEffect = (
  G,
  ctx,
  targetContext,
  targetIndex,
  healAmount
) => {
  const { currentPlayer } = ctx;
  const target = G.turnOrder.find(p => p !== currentPlayer);
  const targetSlot = G.boards[target][targetIndex];

  switch (targetContext) {
    case WARCRY_TARGET_CONTEXT[1]:
      return castAtMinion(G, ctx, target, targetSlot, targetIndex, healAmount);

    default:
      return castAtPlayer(G, target, healAmount);
  }
};

const castAtMinion = (G, target, targetIndex, healAmount) => {
  boards.addToMinionHealth(G, target, targetIndex, healAmount);
};

const castAtPlayer = (G, target, healAmount) => {
  health.add(G, target, healAmount);
};

export default attackWithWarcryEffect;
