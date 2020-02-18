import canBeAttacked from 'lib/state/can-be-attacked';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';
import boards from 'lib/state/boards';

/**
 * Sets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} minionObject
 * @param {number} index
 * @requires selectedMinionIndex
 * @requires selectedMinionObject
 */
const selectMinion = (G, ctx, minionObject = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  if (!minionObject && !index) {
    selectedMinionIndex.reset(G, currentPlayer);
    selectedMinionObject.reset(G, currentPlayer);
    canBeAttacked.disable(G, otherPlayer);
    boards.determineTargets(G, otherPlayer);
  } else {
    selectedMinionIndex.set(G, currentPlayer, index);
    selectedMinionObject.set(G, currentPlayer, minionObject);
    canBeAttacked.enable(G, otherPlayer);
    boards.determineTargets(G, otherPlayer);
  }
};

export default selectMinion;
