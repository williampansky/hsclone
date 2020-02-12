import { initCoreBoon } from '../boons/core.boons';
import { initCoreBuff } from '../buffs/core.buffs';
import {
  enableMinionCanAttack,
  enableMinionHasGuard,
  initMinionWarcry
} from '../moves/minion-moves';
import MECHANICS from '../../enums/mechanics.enums';

export const initCardMechanics = (G, ctx, mechanics, cardId, index) => {
  const { currentPlayer } = ctx;

  // if minion has boon
  if (mechanics.find(m => m === MECHANICS[1]))
    initCoreBoon(G, currentPlayer, cardId);

  // if minion has buff
  if (mechanics.find(m => m === MECHANICS[2]))
    initCoreBuff(G, currentPlayer, cardId);

  // if minion has guard
  if (mechanics.find(m => m === MECHANICS[4]))
    enableMinionHasGuard(G, currentPlayer, index);

  // if minion has stampede
  if (mechanics.find(m => m === MECHANICS[5]))
    enableMinionCanAttack(G, currentPlayer, index);

  // if minion has warcry
  if (mechanics.find(m => m === MECHANICS[6]))
    initMinionWarcry(G, ctx, cardId, index);
};
