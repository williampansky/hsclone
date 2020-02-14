import React from 'react';
import css from './player-energy.module.scss';

export default function PlayerEnergy({ energy }) {
  const { current, total } = energy;
  return (
    <div className={css['player-energy']} data-file="PlayerEnergy">
      {current}/{total}
    </div>
  );
}
