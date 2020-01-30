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
import BoardSlot from '~/components/game/BoardSlot';
import Minion from '~/components/game/minion/Minion';

export default function YourBoardPlayerArea({ children }) {
  const dispatch = useDispatch();
  const { selectedCard } = useSelector(s => s.yourHand);

  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = useSelector(
    s => s.yourBoard
  );

  async function handleClick(event, slot, obj = selectedCard) {
    event.preventDefault();

    if (!selectedCard) return;

    return playCard(obj, slot).then(resp => {
      const { data, slot } = resp;
      const addObj = {
        card: data,
        slot: `slot${slot}`
      };

      dispatch(addCardToYourBoard(addObj));
      dispatch(deselectCard());
      dispatch(removeCardFromYourHand(obj));
    });
  }

  return (
    <div
      className={[css.BoardPlayArea, selectedCard && css.BoardIsActive].join(
        ' '
      )}
      data-file="YourBoardPlayArea"
    >
      <BoardSlot minion={slot1} slot="1" onClick={e => handleClick(e, 1)} />
      <BoardSlot minion={slot2} slot="2" onClick={e => handleClick(e, 2)} />
      <BoardSlot minion={slot3} slot="3" onClick={e => handleClick(e, 3)} />
      <BoardSlot minion={slot4} slot="4" onClick={e => handleClick(e, 4)} />
      <BoardSlot minion={slot5} slot="5" onClick={e => handleClick(e, 5)} />
      <BoardSlot minion={slot6} slot="6" onClick={e => handleClick(e, 6)} />
      <BoardSlot minion={slot7} slot="7" onClick={e => handleClick(e, 7)} />
    </div>
  );
}
