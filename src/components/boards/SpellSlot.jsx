import React from 'react';
import css from './board-slot.module.scss';
// import MinionInteractionLayer from 'systems/MinionInteractionLayer';

export default function SpellSlot({ onClick, render, slot }) {
  return (
    <div
      className={[css['spell-slot']].join(' ')}
      data-file="boards/SpellSlot"
      data-slot={slot}
      data-render={render}
      onClick={onClick}
    >
      {/* {minion && (
        <React.Fragment>
          <MinionInteractionLayer board={p} data={minion} slot={slot} />
        </React.Fragment>
      )} */}
    </div>
  );
}
