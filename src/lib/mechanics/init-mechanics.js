import { initBoons } from './init-boons';
import { initBuffs } from './init-buffs';
import { initCurses } from './init-curses';
import { initGuard } from './init-guard';
import { initStampede } from './init-stampede';
import { initWarcrys } from './init-warcrys';
import MECHANICS from '../../enums/mechanics.enums';

export const initCardMechanics = (G, ctx, card, index) => {
  const { mechanics } = card;
  if (mechanics.find(m => m === MECHANICS[1])) initBoons(G, ctx, card, index);
  if (mechanics.find(m => m === MECHANICS[2])) initBuffs(G, ctx, card, index);
  if (mechanics.find(m => m === MECHANICS[3])) initCurses(G, ctx, index);
  if (mechanics.find(m => m === MECHANICS[4])) initGuard(G, ctx, index);
  if (mechanics.find(m => m === MECHANICS[5])) initStampede(G, ctx, index);
  if (mechanics.find(m => m === MECHANICS[6])) initWarcrys(G, ctx, card, index);
};
