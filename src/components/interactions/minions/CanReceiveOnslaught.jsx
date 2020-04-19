import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanReceiveOnslaught({ G, ctx, moves, index }) {
  const { castTargetedSpell, castTargetedWarcry } = moves;

  function handleClick() {
    return G.warcryObject[ctx.currentPlayer] !== null
      ? castTargetedWarcry(TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], index)
      : castTargetedSpell(TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], index);
  }

  return (
    <div
      className="can-be-buffed"
      data-file="interactions/minions/CanReceiveOnslaught"
      onClick={() => handleClick()}
    />
  );
}

CanReceiveOnslaught.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  index: PropTypes.number
};
