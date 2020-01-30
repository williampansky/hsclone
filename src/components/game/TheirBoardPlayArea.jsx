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

import BoardSlot from '~/components/game/BoardSlot';
import Minion from '~/components/game/minion/Minion';
import { subtracted } from '~/features/energy/yourEnergy.slice';

export default function TheirBoardPlayerArea({ children }) {
  const dispatch = useDispatch();
  // const { selectedCard } = useSelector(s => s.theirHand);

  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = useSelector(
    s => s.theirBoard
  );

  async function handleClick(event, slot, obj) {
    event.preventDefault();

    // if (!selectedCard) return;

    // return playCard(obj, slot).then(resp => {
    //   const { data, slot } = resp;
    //   const { cost } = data;
    //   const addObj = {
    //     card: data,
    //     slot: `slot${slot}`
    //   };

    //   dispatch(addMinion(addObj));
    //   dispatch(deselectCard());
    //   dispatch(removeCardFromYourHand(obj));
    //   dispatch(subtracted(cost));
    // });
  }

  // prettier-ignore
  return (
    <div
      className={[css.BoardPlayArea, css.TheirBoardPlayArea].join(' ')}
      data-file="TheirBoardPlayArea"
    >
      <BoardSlot minion={slot1} p="Theirs" slot={1} onClick={e => handleClick(e, 1)} />
      <BoardSlot minion={slot2} p="Theirs" slot={2} onClick={e => handleClick(e, 2)} />
      <BoardSlot minion={slot3} p="Theirs" slot={3} onClick={e => handleClick(e, 3)} />
      <BoardSlot minion={slot4} p="Theirs" slot={4} onClick={e => handleClick(e, 4)} />
      <BoardSlot minion={slot5} p="Theirs" slot={5} onClick={e => handleClick(e, 5)} />
      <BoardSlot minion={slot6} p="Theirs" slot={6} onClick={e => handleClick(e, 6)} />
      <BoardSlot minion={slot7} p="Theirs" slot={7} onClick={e => handleClick(e, 7)} />
    </div>
  );
}
