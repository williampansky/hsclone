/**
 * Returns the adjustment function per the CORE cardId.
 * @param {{}} G
 * @param {string} player
 * @param {{}} card
 */
const recalculateCoreBuff = (G, player, card) => {
  const { id, warcryNumber } = card;
  const amount = warcryNumber;

  // prettier-ignore
  switch (id) {
    case 'CORE_011':  return removeFromPlayerSpellDamage(G, player, amount);
    case 'CORE_015':  return removeFromPlayerSpellDamage(G, player, amount);
    case 'CORE_028':  return removeFromPlayerSpellDamage(G, player, amount);
    case 'CORE_037':  return removeFromPlayerSpellDamage(G, player, amount);
    default:          break;
  }
};

/**
 * Remove `amount` from player's spellDamage buff.
 * @param {{}} G
 * @param {string} player
 * @param {number} amount
 */
const removeFromPlayerSpellDamage = (G, player, amount) => {
  const currentSpellDamage = G.buffs[player].spellDamage;
  G.buffs[player].spellDamage = currentSpellDamage - amount;
};

export default recalculateCoreBuff;
