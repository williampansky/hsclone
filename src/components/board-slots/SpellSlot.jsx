import React from 'react';
import css from 'components/board-slots/board-slot.module.scss';

export default function SpellSlot({ index, onClick, render }) {
  return (
    <div
      data-file="board-slots/SpellSlot"
      data-slot={index}
      className={[css['spell-slot']].join(' ')}
      onClick={onClick}
    />
  );
}
