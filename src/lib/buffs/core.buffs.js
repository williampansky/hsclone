export const initCoreBuff = (G, player, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_011':  return CORE_011(G, player);
    default:          break;
  }
};

const CORE_011 = (G, player) => {
  const currentSpellDamage = G.buffs[player].spellDamage;
  G.buffs[player].spellDamage = currentSpellDamage + 1;
};
