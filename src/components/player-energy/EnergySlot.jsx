import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

export default function PlayerEnergy({ available, empty, filled, number }) {
  return (
    <div
      data-file="player-energy/EnergySlot"
      className={[
        'energy-bar__energy-slot',
        available ? 'energy-slot--available' : '',
        filled ? 'energy-slot--filled' : ''
      ].join(' ')}
    >
      {available ? (
        <div className={''}>{number}</div>
      ) : (
        <ReactSVG className={'icon'} src="assets/icons/padlock.svg" />
      )}
    </div>
  );
}

PlayerEnergy.propTypes = {
  available: PropTypes.bool,
  empty: PropTypes.bool,
  filled: PropTypes.bool,
  number: PropTypes.number
};
