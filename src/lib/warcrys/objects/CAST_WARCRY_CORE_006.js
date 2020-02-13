import { addToMinionHealth } from '../../minions/minions.health';
import { addToPlayerHealth } from '../../moves/player-moves';
import WARCRY_TARGET_CONTEXT from '../../../enums/warcry.target-context.enum';

export const CAST_WARCRY_CORE_006 = (G, ctx, targetCtx, targetIdx) => {
  const { currentPlayer } = ctx;
  const AMOUNT = 2;

  switch (targetCtx) {
    case WARCRY_TARGET_CONTEXT[1]:
      addToMinionHealth(G, currentPlayer, targetIdx, AMOUNT);
      break;

    default:
      addToPlayerHealth(G, currentPlayer, AMOUNT);
      break;
  }
};
