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
import Minion from '~/components/game/minion/Minion';

export default function YourBoardMinions({ children }) {
  const dispatch = useDispatch();
  const yourBoard = useSelector(s => s.yourBoard);
  const { selectedCard } = useSelector(s => s.yourHand);

  return (
    <div
      // className={[
      //   css.boardPlayArea,
      // ].join(' ')}
      data-file="YourBoardMinions"
    >
      {yourBoard.map((card, index) => {
        const { id } = card;
        return <Minion data={card} key={`${id}_${index}`} />;
      })}
    </div>
  );
}
