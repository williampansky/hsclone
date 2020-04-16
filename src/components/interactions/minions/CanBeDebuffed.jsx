import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanBeDebuffed({ moves, index }) {
  const { castTargetedSpell } = moves;
  return (
    <div
      className="can-be-debuffed"
      data-file="interactions/minions/CanBeDebuffed"
      onClick={() =>
        castTargetedSpell(TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], index)
      }
    />
  );
}

CanBeDebuffed.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number
};
