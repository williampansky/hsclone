import recalculateCoreBuff from 'lib/buffs/core.buffs.recalculate';
import SET from 'enums/set.enums';

const recalculateBuffs = (G, ctx, player, card, index) => {
  const { set } = card;

  switch (set) {
    case SET[1]:
      return recalculateCoreBuff(G, player, card);

    default:
      return;
  }
};

export default recalculateBuffs;
