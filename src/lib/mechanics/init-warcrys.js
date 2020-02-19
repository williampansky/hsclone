import initCoreWarcry from 'lib/warcrys/core.warcrys';
import SET from 'enums/set.enums';

const initWarcrys = (G, ctx, card, index) => {
  const { id, set } = card;

  switch (set) {
    case SET[1]:
      return initCoreWarcry(G, ctx, id, index);

    default:
      return;
  }
};

export default initWarcrys;
