import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';
import boards from 'lib/state/boards';

/**
 * Resets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const deselectMinion = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectedMinionIndex.reset(G, currentPlayer);
  selectedMinionObject.reset(G, currentPlayer);
  playerCanBeAttacked.disable(G, otherPlayer);
  G.boards[otherPlayer].forEach((slot, i) => {
    boards.disableCanBeAttacked(G, otherPlayer, i);
  });
};

export default deselectMinion;