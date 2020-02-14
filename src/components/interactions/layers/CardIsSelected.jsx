import React from 'react';
import css from 'components/interactions/card-interactions.module.scss';

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
