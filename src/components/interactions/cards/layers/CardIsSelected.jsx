import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/interactions/cards/card-interactions.module.scss';

export default function CardIsSelected({ onClick }) {
  return (
    <div
      className={css['card--is_selected']}
      data-is-selected={true}
      onClick={onClick}
    >
      <div className={css['deselect-label']}>Deselect Card</div>
    </div>
  );
}

CardIsSelected.propTypes = {
  onClick: PropTypes.func
};
