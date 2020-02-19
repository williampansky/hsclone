import React from 'react';

export default function SpellSlot({ index, onClick, render }) {
  return (
    <div
      data-file="board-slots/SpellSlot"
      data-slot={index}
      className={['spell-slot'].join(' ')}
      onClick={onClick}
    />
  );
}
