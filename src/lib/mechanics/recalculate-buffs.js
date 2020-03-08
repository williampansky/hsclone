import recalculateCoreBuff from 'lib/buffs/core.buffs.recalculate';
import recalculateGameBuff from 'lib/buffs/game.buffs.recalculate';
import SET from 'enums/set.enums';

const recalculateBuffs = (G, ctx, player, card, index) => {
  const { set } = card;

  switch (set) {
    case SET[1]:
      return recalculateCoreBuff(G, player, card);

    default:
      return recalculateGameBuff(G, player, card);
  }
};

export default recalculateBuffs;
