const recalculateCoreBuff = (G, player, card) => {
  const { id, warcryObjectNumber } = card;
  const amount = warcryObjectNumber;

  // prettier-ignore
  switch (id) {
    case 'CORE_011':  return givePlayerSpellDamage(G, player, amount);
    case 'CORE_015':  return givePlayerSpellDamage(G, player, amount);
    case 'CORE_028':  return givePlayerSpellDamage(G, player, amount);
    case 'CORE_037':  return givePlayerSpellDamage(G, player, amount);
    default:          break;
  }
};

/**
 * Remove `amount` from player's spellDamage buff.
 * @param {{}} G
 * @param {string} player
 * @param {number} amount
 */
const givePlayerSpellDamage = (G, player, amount) => {
  const currentSpellDamage = G.buffs[player].spellDamage;
  G.buffs[player].spellDamage = currentSpellDamage - amount;
};

export default recalculateCoreBuff;
