import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';

/**
 * Resets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const deselectCard = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectedCardIndex.reset(G, currentPlayer);
  selectedCardObject.reset(G, currentPlayer);

  G.boards[otherPlayer].forEach((slot, i) => {
    slot.canBeAttacked = false;
  });

  G.selectedCardType[currentPlayer] = null;
  G.selectedCardSpellType[currentPlayer] = null;
  G.selectedCardSpellContext[currentPlayer] = null;

  G.boards[currentPlayer].forEach((slot, i) => {
    slot.canBeBuffed = false;
    slot.canBeHealed = false;
  });
};

export default deselectCard;
