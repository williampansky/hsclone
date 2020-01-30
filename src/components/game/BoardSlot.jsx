import React from 'react';
import css from '~/styles/game/game.scss';
import { useSelector, useDispatch } from 'react-redux';
import playCard from 'lib/game/play-card';
import { addCardToYourBoard } from '~/features/yourBoard/yourBoard.slice';
import {
  removeCardFromYourHand,
  deselectCard
} from '~/features/yourHand/yourHand.slice';
import MinionInteractionLayer from '~/systems/MinionInteractionLayer';
import YourBoardMinions from '~/components/game/YourBoardMinions';
import Minion from '~/components/game/minion/Minion';

export default function BoardSlot({ minion, onClick, slot }) {
  return (
    <div
      className={[css.BoardSlot, minion && css.HasMinion].join(' ')}
      data-file="BoardSlot"
      data-slot={slot}
      onClick={onClick}
    >
      {minion && (
        <MinionInteractionLayer data={minion} slot={slot}>
          <Minion data={minion} />
        </MinionInteractionLayer>
      )}
    </div>
  );
}
