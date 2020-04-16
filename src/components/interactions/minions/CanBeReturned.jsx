import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanBeReturned({ moves, index, targetContext }) {
  const { castTargetedSpell } = moves;
  return (
    <div
      className="can-be-debuffed"
      data-file="interactions/minions/CanBeReturned"
      onClick={() =>
        castTargetedSpell(
          TARGET_CONTEXT[targetContext],
          WARCRY_TARGET_CONTEXT[1],
          index
        )
      }
    />
  );
}

CanBeReturned.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number,
  targetContext: PropTypes.number
};
