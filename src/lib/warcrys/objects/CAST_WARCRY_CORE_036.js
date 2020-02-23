import boards from 'lib/state/boards';
import health from 'lib/state/health';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

const CAST_WARCRY_CORE_036 = (G, ctx, targetCtx, targetIdx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const BEING_ATTACKED_SLOT = G.boards[otherPlayer][targetIdx];
  const AMOUNT = 2;

  // prettier-ignore
  switch (targetCtx) {
    case WARCRY_TARGET_CONTEXT[1]:
      boards.subtractFromMinionHealth(G, otherPlayer, targetIdx, AMOUNT);
      boards.killMinionIfHealthReachesZero(G, ctx, otherPlayer, BEING_ATTACKED_SLOT, targetIdx);
      break;

    default:
      health.subtract(G, otherPlayer, AMOUNT);
      break;
  }
};

export default CAST_WARCRY_CORE_036;
