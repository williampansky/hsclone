import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/interactions/cards/card-interactions.module.scss';

export default function CardIsPlayable({ onClick }) {
  return (
    <div
      className={css['card--is_playable']}
      data-is-playable={true}
      onClick={onClick}
    />
  );
}

CardIsPlayable.propTypes = {
  onClick: PropTypes.func
};
