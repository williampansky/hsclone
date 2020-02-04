import React from 'react';
import css from './board-slot.module.scss';
import MinionInteractionLayer from 'systems/MinionInteractionLayer';
import Minion from 'components/minion/Minion';

export default function BoardSlot({ minion, p, onClick, slot }) {
  return (
    <div
      className={[css['board-slot'], minion && css['has-minion']].join(' ')}
      data-file="boards/BoardSlot"
      data-slot={slot}
      onClick={onClick}
    >
      {minion && (
        <React.Fragment>
          <MinionInteractionLayer board={p} data={minion} slot={slot} />
          <Minion data={minion} p={p} slot={slot} />
        </React.Fragment>
      )}
    </div>
  );
}
