import CARDCLASS from 'enums/cardClass.enums';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';
import {
  snipeOpponent,
  equipKatar,
  gainShieldPoints,
  initTargetedDamage,
  initTargetedHeal,
  initTargetedSpell,
  summonKnight,
  summonRandomUndeadMinion,
  tradeHealthForCard
} from 'lib/class-skills/class-skills';
import energy from 'lib/state/energy';

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

  // remove 2 energy for skill cost
  energy.subtract(G, currentPlayer, 2);

  // prettier-ignore
  switch (playerClass[currentPlayer]) {
    case CARDCLASS[1]: return initTargetedDamage(G, ctx);       // AUGUR
    case CARDCLASS[2]: return snipeOpponent(G, ctx);            // SNIPER
    case CARDCLASS[3]: return initTargetedSpell(G, ctx);        // SORCERER
    case CARDCLASS[4]: return summonKnight(G, ctx);             // KNIGHT COMMANDER
    case CARDCLASS[5]: return initTargetedHeal(G, ctx);         // WHITE MAGE
    case CARDCLASS[6]: return equipKatar(G, ctx);               // ASSASSIN
    case CARDCLASS[7]: return summonRandomUndeadMinion(G, ctx); // NECROMANCER
    case CARDCLASS[8]: return tradeHealthForCard(G, ctx);       // MYSTIC
    case CARDCLASS[9]: return gainShieldPoints(G, ctx);         // BERSERKER
    default: return;
  }
};

export default initClassSkill;
