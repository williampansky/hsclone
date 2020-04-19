import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanBeBuffed({ G, ctx, moves, index }) {
  const { selectedCardObject, warcryObject } = G;
  const { currentPlayer } = ctx;
  const { castTargetedSpell, castTargetedWarcry } = moves;

  function handleClick() {
    if (selectedCardObject[currentPlayer] !== null) {
      return castTargetedSpell(
        TARGET_CONTEXT[1],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
    } else if (warcryObject[currentPlayer] !== null)
      return castTargetedWarcry(
        TARGET_CONTEXT[1],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
  }

  return (
    <div
      className="can-be-buffed"
      data-file="interactions/minions/CanBeBuffed"
      onClick={() => handleClick()}
    />
  );
}

CanBeBuffed.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  index: PropTypes.number
};
