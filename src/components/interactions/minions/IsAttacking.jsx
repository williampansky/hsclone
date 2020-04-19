import React from 'react';
import PropTypes from 'prop-types';

export default function IsAttacking({ moves }) {
  const { deselectMinion } = moves;

  return (
    <div
      className="is-selected"
      data-file="interactions/minions/IsAttacking"
      onClick={() => deselectMinion()}
    />
  );
}

IsAttacking.propTypes = {
  moves: PropTypes.object
};
