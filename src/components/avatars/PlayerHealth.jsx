import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerHealth({ health }) {
  return (
    <div
      data-file="avatars/PlayerHealth"
      className={['player__health'].join(' ')}
    >
      <div className={'player__health--bokeh'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={'player__health__value'}>{health}</div>
    </div>
  );
}

PlayerHealth.propTypes = {
  health: PropTypes.number
};
