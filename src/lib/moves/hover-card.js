import hoveringCardIndex from 'lib/state/hovering-card-index';
const { set } = hoveringCardIndex;

/**
 * Sets the `hoveringCardIndex` value.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const hoverCard = (G, ctx, index) => {
  return set(G, ctx, index);
};

export default hoverCard;
