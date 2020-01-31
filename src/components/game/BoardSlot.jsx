import React from 'react';
import css from '~/styles/game/game.scss';
import { useSelector, useDispatch } from 'react-redux';
import playCard from 'lib/game/play-card';
import { addMinion } from '~/features/boards/yourBoard.slice';
import {
  removeCardFromYourHand,
  deselectCard
} from '~/features/yourHand/yourHand.slice';
import MinionInteractionLayer from '~/systems/MinionInteractionLayer';

import Minion from '~/components/game/minion/Minion';

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
