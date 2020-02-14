import React from 'react';
import css from './cards.module.scss';

export default function CardBack() {
  return <div className={[css['card'], css['card-back']].join(' ')} />;
}
