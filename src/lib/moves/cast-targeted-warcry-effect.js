import attackWithWarcryEffect from 'lib/warcry-effects/attack-with-warcry-effect';

/**
 * Casts a targeted Warcry spell object.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} targetIdx Target index if targetCtx is MINION
 * @param {number} warcryNum minion.warcryNumber
 */
const castTargetedWarcryEffect = (G, ctx, targetCtx, targetIdx, warcryNum) => {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { id } = warcryObject[currentPlayer];
  const func = attackWithWarcryEffect;

  // clear warcryObject
  G.warcryObject[currentPlayer] = null;

  // prettier-ignore
  switch (id) {
    case 'CORE_001':  return func(G, ctx, targetCtx, targetIdx, warcryNum);
    case 'CORE_006':  return func(G, ctx, targetCtx, targetIdx, warcryNum);
    case 'CORE_016':  return func(G, ctx, targetCtx, targetIdx, warcryNum);
    case 'CORE_036':  return func(G, ctx, targetCtx, targetIdx, warcryNum);
    default:          return;
  }
};

export default castTargetedWarcryEffect;
