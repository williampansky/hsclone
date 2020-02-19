import React from 'react';

export default function PlayerEnergy({ energy }) {
  const { current, total } = energy;
  return (
    <div data-file="player-energy/PlayerEnergy" className={'player-energy'}>
      {current}/{total}
    </div>
  );
}
