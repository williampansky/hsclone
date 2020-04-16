import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanBeAttackedBySpell({ moves, index }) {
  const { castTargetedSpell } = moves;
  return (
    <div
      className="can-be-attacked"
      data-file="interactions/minions/CanBeAttackedBySpell"
      onClick={() =>
        castTargetedSpell(TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], index)
      }
    />
  );
}

CanBeAttackedBySpell.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number
};
