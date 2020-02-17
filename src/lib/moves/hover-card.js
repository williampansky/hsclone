import setHoveringCardIndex from 'lib/state/hovering-card-index';

/**
 * Sets the `hoveringCardIndex` value.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const hoverCard = (G, ctx, index) => {
  return setHoveringCardIndex(G, ctx, index);
};

export default hoverCard;
