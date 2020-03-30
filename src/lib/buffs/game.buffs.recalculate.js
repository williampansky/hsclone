/**
 * Returns the adjustment function per the GAME cardId.
 * @param {{}} G
 * @param {string} player
 * @param {{}} card
 */
const recalculateGameBuff = (G, player, card) => {
  const { id, warcryNumber } = card;
  const amount = warcryNumber;

  // prettier-ignore
  switch (id) {
    case 'GAME_006':  return removeFromPlayerSpellDamage(G, player, amount);
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

export default recalculateGameBuff;
