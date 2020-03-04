import React from 'react';

export default function WeaponSlot({ index, onClick, render }) {
  return (
    <div
      data-file="board-slots/WeaponSlot"
      data-slot={index}
      className={['spell-slot'].join(' ')}
      onClick={onClick}
    />
  );
}
