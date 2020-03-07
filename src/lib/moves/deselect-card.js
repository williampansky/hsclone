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

  G.boards[otherPlayer].forEach(slot => {
    slot.canBeAttackedByMinion = false;
    slot.canBeAttackedByPlayer = false;
    slot.canBeAttackedBySpell = false;
    slot.canBeAttackedByWarcry = false;
  });

  G.selectedCardType[currentPlayer] = null;
  G.selectedCardSpellType[currentPlayer] = null;
  G.selectedCardSpellContext[currentPlayer] = null;

  G.boards[currentPlayer].forEach(slot => {
    slot.canBeAttackedByMinion = false;
    slot.canBeAttackedByPlayer = false;
    slot.canBeAttackedBySpell = false;
    slot.canBeAttackedByWarcry = false;
    slot.canBeBuffed = false;
    slot.canBeHealed = false;
    slot.canBeDebuffed = false;
    slot.canBeExpired = false;
    slot.canBeReturned = false;
    slot.canBeSacrificed = false;
    slot.canBeStolen = false;
    slot.canReceiveEnergyShield = false;
    slot.canReceiveOnslaught = false;
  });
};

export default deselectCard;
