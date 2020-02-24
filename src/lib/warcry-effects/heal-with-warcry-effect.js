import boards from 'lib/state/boards';
import health from 'lib/state/health';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

/**
 * Heal a target with a Warcry effect.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} context
 * @param {string} targetContext
 * @param {number} targetIndex
 * @param {number} healAmount
 */
const healWithWarcryEffect = (
  G,
  ctx,
  context,
  targetContext,
  targetIndex,
  healAmount
) => {
  const { currentPlayer } = ctx;
  const otherPlayer = G.turnOrder.find(p => p !== currentPlayer);
  const target = context === TARGET_CONTEXT[1] ? currentPlayer : otherPlayer;

  switch (targetContext) {
    case WARCRY_TARGET_CONTEXT[1]:
      return castAtMinion(G, target, targetIndex, healAmount);

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

export default healWithWarcryEffect;
