import CARDCLASS from 'enums/cardClass.enums';
import gainShieldPoints from 'lib/class-skills/gain-shield-points';

/**
 * Activates a playerClass skill.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const useClassSkill = (G, ctx) => {
  const { playerClass } = G;

  // prettier-ignore
  switch (playerClass) {
    // case CARDCLASS[1]: return initTargetedDamage(G, ctx);   // AUGUR
    // case CARDCLASS[2]: return iniTargetedSpell(G, ctx);     // SORCERER
    // case CARDCLASS[3]: return summonKnight(G, ctx);         // KNIGHT COMMANDER
    // case CARDCLASS[4]: return initTargetedHeal(G, ctx);     // WHITE MAGE
    // case CARDCLASS[5]: return equipShuriken(G, ctx);        // NINJA
    // case CARDCLASS[6]: return summonRandomIdol(G, ctx);     // MYSTIC
    // case CARDCLASS[7]: return sarcificLifeForCard(G, ctx);  // NECROMANCER
    case CARDCLASS[8]: return gainShieldPoints(G, ctx);     // BERSERKER

    default:
      return;
  }
};

export default useClassSkill;
