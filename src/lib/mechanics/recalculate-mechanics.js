import recalculateBoons from 'lib/mechanics/recalculate-boons';
import recalculateBuffs from 'lib/mechanics/recalculate-buffs';
// import initCurses from 'lib/mechanics/init-curses';
// import initGuard from 'lib/mechanics/init-guard';
// import initStampede from 'lib/mechanics/init-stampede';
// import initWarcrys from 'lib/mechanics/init-warcrys';
import MECHANICS from 'enums/mechanics.enums';

// prettier-ignore
const recalculateCardMechanics = (G, ctx, player, card, index) => {
  if (!card || (card && !card.mechanics)) return;
  const { mechanics } = card;
  if (mechanics.find(m => m === MECHANICS[1])) recalculateBoons(G, ctx, card, index);
  if (mechanics.find(m => m === MECHANICS[2])) recalculateBuffs(G, ctx, player, card, index);
  // if (mechanics.find(m => m === MECHANICS[3])) recalculateCurses(G, ctx, index);
  // if (mechanics.find(m => m === MECHANICS[4])) recalculateGuard(G, ctx, index);
  // if (mechanics.find(m => m === MECHANICS[5])) recalculateStampede(G, ctx, index);
  // if (mechanics.find(m => m === MECHANICS[6])) recalculateWarcrys(G, ctx, card, index);
};

export default recalculateCardMechanics;
