import attackWithWarcryEffect from 'lib/warcry-effects/attack-with-warcry-effect';
import healWithWarcryEffect from 'lib/warcry-effects/heal-with-warcry-effect';

/**
 * Casts a targeted Warcry spell object.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} targetIdx Target index if targetCtx is MINION
 */
const castTargetedWarcryEffect = (G, ctx, targetCtx, targetIdx) => {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { id, amount } = warcryObject[currentPlayer];
  const attack = attackWithWarcryEffect;
  const heal = healWithWarcryEffect;

  // clear warcryObject
  G.warcryObject[currentPlayer] = null;

  // prettier-ignore
  switch (id) {
    case 'CORE_001':  return attack(G, ctx, targetCtx, targetIdx, amount);
    case 'CORE_006':  return heal(G, ctx, targetCtx, targetIdx, amount);
    case 'CORE_016':  return attack(G, ctx, targetCtx, targetIdx, amount);
    case 'CORE_036':  return attack(G, ctx, targetCtx, targetIdx, amount);
    default:          return;
  }
};

export default castTargetedWarcryEffect;
