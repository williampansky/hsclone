import boards from 'lib/state/boards';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';

/**
 * Sets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} minionObject
 * @param {number} index
 */
const selectMinion = (G, ctx, minionObject = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  G.boards[currentPlayer][index].isAttacking = true;
  G.boards[currentPlayer].forEach((slot, i) => {
    if (index !== i) slot.isAttacking = false;
  });

  selectedMinionIndex.set(G, currentPlayer, index);
  selectedMinionObject.set(G, currentPlayer, minionObject);
  playerCanBeAttacked.enableByMinion(G, otherPlayer);
  boards.determineAttackTargets(G, otherPlayer);
};

export default selectMinion;
