import React from 'react';
import css from '../styles/game.scss';
import MinionInteractionLayer from '../systems/MinionInteractionLayer';

import Minion from '../components/game/minion/Minion';

export default function BoardSlot({ minion, p, onClick, slot }) {
  return (
    <div
      className={[css.BoardSlot, minion && css.HasMinion].join(' ')}
      data-file="BoardSlot"
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
