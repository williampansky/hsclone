import {
  killMinionIfHealthReachesZero,
  subtractFromMinionHealth
} from '../../minions/minions.health';
import { subtractFromPlayerHealth } from '../../moves/player-moves';
import WARCRY_TARGET_CONTEXT from '../../../enums/warcry.target-context.enum';

export const CAST_WARCRY_CORE_001 = (G, ctx, targetCtx, targetIdx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const AMOUNT = 1;

  switch (targetCtx) {
    case WARCRY_TARGET_CONTEXT[1]:
      subtractFromMinionHealth(G, otherPlayer, targetIdx, AMOUNT);
      killMinionIfHealthReachesZero(G, otherPlayer, targetIdx);
      break;

    default:
      subtractFromPlayerHealth(G, otherPlayer, AMOUNT);
      break;
  }
};
