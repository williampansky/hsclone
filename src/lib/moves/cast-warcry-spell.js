import CAST_WARCRY_CORE_001 from 'lib/warcrys/objects/CAST_WARCRY_CORE_001';
import CAST_WARCRY_CORE_006 from 'lib/warcrys/objects/CAST_WARCRY_CORE_006';

/**
 * Casts a targeted Warcry spell object.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} targetIdx Target index if targetCtx is MINION
 */
const castWarcrySpell = (G, ctx, targetCtx, targetIdx) => {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { id } = warcryObject[currentPlayer];

  // clear warcryObject
  G.warcryObject[currentPlayer] = null;

  // prettier-ignore
  switch (id) {
    case 'CORE_001':  return CAST_WARCRY_CORE_001(G, ctx, targetCtx, targetIdx);
    case 'CORE_006':  return CAST_WARCRY_CORE_006(G, ctx, targetCtx, targetIdx);
    default:          return;
  }
};

export default castWarcrySpell;
