import {
  subtractFromMinionHealth,
  killMinionIfHealthReachesZero
} from '../minions/minions.health';
import { subtractFromPlayerHealth } from './player-moves';
import WARCRY_TARGET_CONTEXT from '../../enums/warcry.target-context.enum';

/**
 * Casts a targeted Warcry spell object.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string|number} targetIdx Target index if targetCtx is MINION
 */
export const castWarycrySpell = (G, ctx, targetCtx, targetIdx) => {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { id } = warcryObject[currentPlayer];

  // clear warcryObject
  G.warcryObject[currentPlayer] = null;

  // prettier-ignore
  switch (id) {
    case 'CORE_001':  return CAST_WARCRY_CORE_001(G, ctx, targetCtx, targetIdx);
    default:          return null;
  }
};

const CAST_WARCRY_CORE_001 = (G, ctx, targetCtx, targetIdx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  switch (targetCtx) {
    case WARCRY_TARGET_CONTEXT[1]:
      subtractFromMinionHealth(G, otherPlayer, targetIdx, 1);
      killMinionIfHealthReachesZero(G, otherPlayer, targetIdx);
      break;

    default:
      subtractFromPlayerHealth(G, otherPlayer, 1);
      break;
  }
};
