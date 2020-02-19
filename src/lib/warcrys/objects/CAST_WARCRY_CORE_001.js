import boards from 'lib/state/boards';
import health from 'lib/state/health';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

const CAST_WARCRY_CORE_001 = (G, ctx, targetCtx, targetIdx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const AMOUNT = 1;

  switch (targetCtx) {
    case WARCRY_TARGET_CONTEXT[1]:
      boards.subtractFromMinionHealth(G, otherPlayer, targetIdx, AMOUNT);
      boards.killMinionIfHealthReachesZero(G, otherPlayer, targetIdx);
      break;

    default:
      health.subtract(G, otherPlayer, AMOUNT);
      break;
  }
};

export default CAST_WARCRY_CORE_001;
