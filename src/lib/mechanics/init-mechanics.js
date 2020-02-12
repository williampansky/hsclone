import { initBoons } from './init-boons';
import { initCoreBuff } from '../buffs/core.buffs';
import {
  enableMinionCanAttack,
  enableMinionHasGuard,
  initMinionWarcry
} from '../moves/minion-moves';
import MECHANICS from '../../enums/mechanics.enums';

// prettier-ignore
export const initCardMechanics = (G, ctx, card, index) => {
  const { currentPlayer } = ctx;
  const { id, mechanics } = card;

  // if minion has boon
  if (mechanics.find(m => m === MECHANICS[1]))
    initBoons(G, ctx, card, index);

  // if minion has buff
  if (mechanics.find(m => m === MECHANICS[2]))
    initCoreBuff(G, currentPlayer, id);

  // if minion has guard
  if (mechanics.find(m => m === MECHANICS[4]))
    enableMinionHasGuard(G, currentPlayer, index);

  // if minion has stampede
  if (mechanics.find(m => m === MECHANICS[5]))
    enableMinionCanAttack(G, currentPlayer, index);

  // if minion has warcry
  if (mechanics.find(m => m === MECHANICS[6]))
    initMinionWarcry(G, ctx, id, index);
};
