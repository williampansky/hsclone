import CARDCLASS from 'enums/cardClass.enums';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';
import {
  gainShieldPoints,
  tradeHealthForCard
} from 'lib/class-skills/class-skills';

/**
 * Activates a playerClass skill.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const initClassSkill = (G, ctx) => {
  const { playerClass } = G;
  const { currentPlayer } = ctx;

  // eject if player can't use class skill
  if (!G.playerCanUseClassSkill[currentPlayer]) return;

  // disable player's use of class skill after use
  playerCanUseClassSkill.disable(G, currentPlayer);

  // prettier-ignore
  switch (playerClass[currentPlayer]) {
    // case CARDCLASS[1]: return initTargetedDamage(G, ctx);   // AUGUR
    // case CARDCLASS[2]: return iniTargetedSpell(G, ctx);     // SORCERER
    // case CARDCLASS[3]: return summonKnight(G, ctx);         // KNIGHT COMMANDER
    // case CARDCLASS[4]: return initTargetedHeal(G, ctx);     // WHITE MAGE
    // case CARDCLASS[5]: return equipShuriken(G, ctx);        // NINJA
    // case CARDCLASS[6]: return summonRandomIdol(G, ctx);     // MYSTIC
    case CARDCLASS[7]: return tradeHealthForCard(G, ctx);   // NECROMANCER
    case CARDCLASS[8]: return gainShieldPoints(G, ctx);     // BERSERKER

    default:
      return;
  }
};

export default initClassSkill;
