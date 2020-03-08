import attackWithWarcryEffect from 'lib/warcry-effects/attack-with-warcry-effect';
import buffWithWarcryEffect from 'lib/warcry-effects/buff-with-warcry-effect';
import healWithWarcryEffect from 'lib/warcry-effects/heal-with-warcry-effect';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import boards from 'lib/state/boards';

/**
 * Casts a targeted Warcry spell object.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} playerCtx Either SELF || OPPONENT
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} targetIdx Target index if targetCtx is MINION
 */
const castTargetedWarcry = (G, ctx, playerCtx, targetCtx, targetIdx) => {
  const { warcryObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const { id, amount } = warcryObject[currentPlayer];
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const attack = attackWithWarcryEffect;
  const buff = buffWithWarcryEffect;
  const heal = healWithWarcryEffect;

  // prettier-ignore
  switch (id) {
    case 'CORE_001':  attack(G, ctx, targetCtx, targetIdx, amount); break;
    case 'CORE_006':  heal(G, ctx, playerCtx, targetCtx, targetIdx, amount); break;
    case 'CORE_016':  attack(G, ctx, targetCtx, targetIdx, amount); break;
    case 'CORE_021':  buff(G, ctx, targetIdx, amount); break;
    case 'CORE_036':  attack(G, ctx, targetCtx, targetIdx, amount); break;
    case 'CORE_099':  G.boards[currentPlayer][targetIdx].hasOnslaught = true; break;
    case 'CORE_110':  G.boards[currentPlayer][targetIdx].hasOnslaught = true; break;
    case 'CORE_112':  attack(G, ctx, targetCtx, targetIdx, amount); break;
    default:          return;
  }

  // clear warcry object and card states
  G.warcryObject[currentPlayer] = null;
  G.selectedCardType[currentPlayer] = null;
  G.selectedCardSpellType[currentPlayer] = null;
  G.selectedCardSpellContext[currentPlayer] = null;

  G.boards[currentPlayer].forEach(slot => {
    slot.canBeAttackedByMinion = false;
    slot.canBeAttackedByPlayer = false;
    slot.canBeAttackedBySpell = false;
    slot.canBeAttackedByWarcry = false;
    slot.canBeBuffed = false;
    slot.canBeHealed = false;
    slot.canBeDebuffed = false;
    slot.canBeExpired = false;
    slot.canBeReturned = false;
    slot.canBeSacrificed = false;
    slot.canBeStolen = false;
    slot.canReceiveEnergyShield = false;
    slot.canReceiveOnslaught = false;
  });

  G.boards[otherPlayer].forEach(slot => {
    slot.canBeAttackedByMinion = false;
    slot.canBeAttackedByPlayer = false;
    slot.canBeAttackedBySpell = false;
    slot.canBeAttackedByWarcry = false;
    slot.canBeBuffed = false;
    slot.canBeHealed = false;
    slot.canBeDebuffed = false;
    slot.canBeExpired = false;
    slot.canBeReturned = false;
    slot.canBeSacrificed = false;
    slot.canBeStolen = false;
    slot.canReceiveEnergyShield = false;
    slot.canReceiveOnslaught = false;
  });
};

export default castTargetedWarcry;
