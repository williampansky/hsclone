import React from 'react';
import css from './board-slot.module.scss';
import MinionInteractionLayer from 'systems/MinionInteractionLayer';
import Minion from 'components/minion/Minion';

export default function BoardSlot(props) {
  const { board, minion, onClick, slot, render } = props;

  return (
    <div
      className={[css['board-slot'], minion && css['has-minion']].join(' ')}
      data-file="boards/BoardSlot"
      data-slot={slot}
      data-render={render}
      onClick={onClick}
    >
      {minion && (
        <MinionInteractionLayer
          board={board}
          minionData={minion}
          slot={slot}
          render={render}
          {...props}
        />
      )}
      {minion && <Minion data={minion} slot={slot} />}
    </div>
  );
}
