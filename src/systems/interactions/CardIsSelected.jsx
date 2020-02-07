import React from 'react';
import css from 'styles/interactions/card-interactions.module.scss';

export default function CardIsSelected({ onClick }) {
  return (
    <div
      className={css['card--is_selected']}
      data-is-selected={true}
      onClick={onClick}
    />
  );
}
