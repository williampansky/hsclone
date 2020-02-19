import React from 'react';
import PropTypes from 'prop-types';

export default function CardIsPlayable({ onClick }) {
  return (
    <div
      className={'card--is_playable'}
      data-is-playable={true}
      onClick={onClick}
    />
  );
}

CardIsPlayable.propTypes = {
  onClick: PropTypes.func
};
