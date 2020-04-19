import React from 'react';
import PropTypes from 'prop-types';

export default function CanReceiveStampede({ moves, index }) {
  const { giveMinionStampede } = moves;

  return (
    <div
      className="can-be-buffed"
      data-file="interactions/minions/CanReceiveStampede"
      onClick={() => giveMinionStampede(index)}
    />
  );
}

CanReceiveStampede.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number
};
