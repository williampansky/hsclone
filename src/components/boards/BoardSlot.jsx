import React from 'react';
import css from './board-slot.module.scss';
import MinionInteractionLayer from 'systems/MinionInteractionLayer';
import Minion from 'components/minion/Minion';

export default function BoardSlot(props) {
  const { board, minion, onClick, slot, render } = props;
  const { canAttack, canBeAttacked, minionData } = minion;

  return (
    <div
      className={[
        css['board-slot'],
        !minionData && css['is-empty'],
        minionData && css['has-minion']
      ].join(' ')}
      data-file="boards/BoardSlot"
      data-slot={slot}
      data-render={render}
      onClick={onClick}
    >
      {minionData && (
        <MinionInteractionLayer
          board={board}
          minionData={minionData}
          slot={slot}
          render={render}
          {...props}
        />
      )}
      {minionData && <Minion data={minionData} slot={slot} />}
    </div>
  );
}
