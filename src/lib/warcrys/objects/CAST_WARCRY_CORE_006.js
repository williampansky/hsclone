import boards from 'lib/state/boards';
import health from 'lib/state/health';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

const CAST_WARCRY_CORE_006 = (G, ctx, targetCtx, targetIdx) => {
  const { currentPlayer } = ctx;
  const AMOUNT = 2;

  switch (targetCtx) {
    case WARCRY_TARGET_CONTEXT[1]:
      boards.addToMinionHealth(G, currentPlayer, targetIdx, AMOUNT);
      break;

    default:
      health.add(G, currentPlayer, AMOUNT);
      break;
  }
};

export default CAST_WARCRY_CORE_006;
