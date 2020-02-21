import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerEnergy({ empty, filled, number }) {
  return (
    <div
      data-file="player-energy/EnergySlot"
      className={[
        'energy-bar__energy-slot',
        empty ? 'energy-slot--empty' : '',
        filled ? 'energy-slot--filled' : ''
      ].join(' ')}
    >
      <div className={''}>{number}</div>
    </div>
  );
}

PlayerEnergy.propTypes = {
  empty: PropTypes.bool,
  filled: PropTypes.bool,
  number: PropTypes.number
};
