import React from 'react';
import css from './board-slot.module.scss';
// import MinionInteractionLayer from 'systems/MinionInteractionLayer';

export default function SpellSlot({ index, onClick, render }) {
  return (
    <div
      className={[css['spell-slot']].join(' ')}
      data-file="boards/SpellSlot"
      data-slot={index}
      data-render={render}
      onClick={onClick}
    />
  );
}
