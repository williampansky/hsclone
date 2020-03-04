import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import boards from 'lib/state/boards';
import TYPE from 'enums/type.enums';
import SPELLTYPE from 'enums/spellType.enums';

/**
 * Sets the `selectedCardIndex` and `selectedCardObject`
 * of the current player's card.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} cardObject
 * @param {number} index
 */
const selectCard = (G, ctx, cardObject = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectedCardIndex.set(G, currentPlayer, index);
  selectedCardObject.set(G, currentPlayer, cardObject);

  if (cardObject === null) return;

  const { id, spellContext, spellType, type } = cardObject;
  G.selectedCardType[currentPlayer] = type;
  G.selectedCardSpellType[currentPlayer] = spellType;
  G.selectedCardSpellContext[currentPlayer] = spellContext;

  if (type === TYPE[3] && spellType === SPELLTYPE[2]) {
    // prettier-ignore
    switch (id) {
      case 'CORE_115':  return enableCanBeAttacked(G, ctx, otherPlayer);
      case 'CORE_119':  return enableCanBeAttacked(G, ctx, otherPlayer);
      case 'CORE_120':  return enableCanBeAttacked(G, ctx, otherPlayer);
      case 'CORE_123':  return CORE_123(G, ctx, currentPlayer);
      case 'CORE_126':  return CORE_126(G, ctx, otherPlayer);
      default:          return;
    }
  }
};

const enableCanBeAttacked = (G, ctx, player) => {
  G.boards[player].forEach((slot, i) => (slot.canBeAttacked = true));
};

const CORE_123 = (G, ctx, player) => {
  G.boards[player].forEach((slot, i) => {
    slot.canBeBuffed = true;
  });
};

const CORE_126 = (G, ctx, player) => {
  G.boards[player].forEach((slot, i) => {
    if (slot.totalHealth > slot.currentHealth) slot.canBeAttacked = true;
  });
};

export default selectCard;
