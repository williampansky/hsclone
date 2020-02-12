import { initCoreWarcry } from '../warcrys/core.warcrys';
import SET from '../../enums/set.enums';

export const initWarcrys = (G, ctx, card, index) => {
  const { id, set } = card;

  switch (set) {
    case SET[1]:
      return initCoreWarcry(G, ctx, id, index);

    default:
      return;
  }
};
