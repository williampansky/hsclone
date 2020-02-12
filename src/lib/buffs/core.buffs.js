export const initCoreBuff = (G, player, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_011':  return CORE_011_015_028_037(G, player);
    case 'CORE_015':  return CORE_011_015_028_037(G, player);
    case 'CORE_028':  return CORE_011_015_028_037(G, player);
    case 'CORE_037':  return CORE_011_015_028_037(G, player);
    default:          break;
  }
};

/**
 * CORE_011, CORE_015, CORE_028, CORE_037
 * Give your hero +1 Spell Damage.
 */
const CORE_011_015_028_037 = (G, player) => {
  const currentSpellDamage = G.buffs[player].spellDamage;
  G.buffs[player].spellDamage = currentSpellDamage + 1;
};
