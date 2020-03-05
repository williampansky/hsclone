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
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { id, amount } = warcryObject[currentPlayer];
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
    case 'CORE_112':  attack(G, ctx, targetCtx, targetIdx, amount); break;
    default:          return;
  }

  // clear warcryObject
  G.warcryObject[currentPlayer] = null;

  // disable all playerCanBeAttacked
  playerCanBeAttacked.disable(G, '0');
  playerCanBeAttacked.disable(G, '1');

  // disable all playerCanBeHealed
  playerCanBeHealed.disable(G, '0');
  playerCanBeHealed.disable(G, '1');

  // disable all canBeAttacked
  boards.disableAllCanBeAttacked(G, '0');
  boards.disableAllCanBeAttacked(G, '1');

  // disable all canBeAttacked
  boards.disableAllCanBeBuffed(G, '0');
  boards.disableAllCanBeBuffed(G, '1');

  // disable all canBeHealed
  boards.disableAllCanBeHealed(G, '0');
  boards.disableAllCanBeHealed(G, '1');
};

export default castTargetedWarcry;
