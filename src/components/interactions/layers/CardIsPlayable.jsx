import React from 'react';
import css from 'styles/interactions/card-interactions.module.scss';

export default function CardIsPlayable({ onClick }) {
  return (
    <div
      className={css['card--is_playable']}
      data-is-playable={true}
      onClick={onClick}
    />
  );
}
