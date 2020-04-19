import React from 'react';
import PropTypes from 'prop-types';

export default function CanAttack({ moves, data, index }) {
  const { selectMinion } = moves;
  return (
    <div
      className="can-be-selected"
      data-file="interactions/minions/CanAttack"
      onClick={() => selectMinion(data, index)}
    />
  );
}

CanAttack.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};
