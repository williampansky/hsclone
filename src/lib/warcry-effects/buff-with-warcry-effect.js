/**
 * Buffs a target with a enhancement Warcry effect.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 * @param {number} warcryNum
 */
const buffWithWarcryEffect = (G, ctx, index, warcryNum) => {
  const { currentPlayer } = ctx;

  const newSlotObject = {
    ...G.boards[currentPlayer][index],
    currentAttack: G.boards[currentPlayer][index].currentAttack + warcryNum,
    currentHealth: G.boards[currentPlayer][index].currentHealth + warcryNum,
    totalAttack: G.boards[currentPlayer][index].totalAttack + warcryNum,
    totalHealth: G.boards[currentPlayer][index].totalHealth + warcryNum
  };

  G.boards[currentPlayer][index] = newSlotObject;
};

export default buffWithWarcryEffect;
