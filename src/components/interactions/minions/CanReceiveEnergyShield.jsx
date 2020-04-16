import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanReceiveEnergyShield({ moves, index }) {
  const { castTargetedSpell } = moves;
  return (
    <div
      className="can-be-buffed"
      data-file="interactions/minions/CanReceiveEnergyShield"
      onClick={() =>
        castTargetedSpell(TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], index)
      }
    />
  );
}

CanReceiveEnergyShield.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number
};
