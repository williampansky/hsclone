import initBoons from 'lib/mechanics/init-boons';
import initBuffs from 'lib/mechanics/init-buffs';
import initCurses from 'lib/mechanics/init-curses';
import initGuard from 'lib/mechanics/init-guard';
import initStampede from 'lib/mechanics/init-stampede';
import initWarcrys from 'lib/mechanics/init-warcrys';
import initEnergyShield from 'lib/mechanics/init-energy-shield';
import MECHANICS from 'enums/mechanics.enums';

// prettier-ignore
const initCardMechanics = (G, ctx, card, index) => {
  const { mechanics } = card;
  if (mechanics.find(m => m === MECHANICS[1])) initBoons(G, ctx, card, index);
  if (mechanics.find(m => m === MECHANICS[2])) initBuffs(G, ctx, card, index);
  if (mechanics.find(m => m === MECHANICS[3])) initCurses(G, ctx, index);
  if (mechanics.find(m => m === MECHANICS[4])) initGuard(G, ctx, index);
  if (mechanics.find(m => m === MECHANICS[5])) initStampede(G, ctx, index);
  if (mechanics.find(m => m === MECHANICS[6])) initWarcrys(G, ctx, card, index);
  if (mechanics.find(m => m === MECHANICS[9])) initEnergyShield(G, ctx, index);
};

export default initCardMechanics;
