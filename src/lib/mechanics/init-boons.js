import { initCoreBoon } from '../boons/core.boons';
import SET from '../../enums/set.enums';

export const initBoons = (G, ctx, card, index) => {
  const { currentPlayer } = ctx;
  const { id, set } = card;

  switch (set) {
    case SET[1]:
      return initCoreBoon(G, currentPlayer, id);

    default:
      return;
  }
};
