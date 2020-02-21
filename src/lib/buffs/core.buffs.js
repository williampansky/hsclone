/**
 * Returns the corresponding Buff effect from the CORE card set.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 * @param {number} index
 */
const initCoreBuff = (G, player, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_011':  return givePlayerSpellDamage(G, player, 1);
    case 'CORE_015':  return givePlayerSpellDamage(G, player, 1);
    case 'CORE_028':  return givePlayerSpellDamage(G, player, 1);
    case 'CORE_037':  return givePlayerSpellDamage(G, player, 1);
    default:          break;
  }
};

/**
 * Give your hero +1 Spell Damage.
 * @param {{}} G
 * @param {string} player
 * @param {number} amount
 */
const givePlayerSpellDamage = (G, player, amount) => {
  const currentSpellDamage = G.buffs[player].spellDamage;
  G.buffs[player].spellDamage = currentSpellDamage + amount;
};

export default initCoreBuff;
