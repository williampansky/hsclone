import React from 'react';
import css from '../styles/game.scss';

export default function YourBoardPlayerArea({ children }) {
  // const dispatch = useDispatch();
  // const { selectedCard } = useSelector(s => s.yourHand);

  // const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = useSelector(
  //   s => s.yourBoard
  // );

  const selectedCard = null;

  async function handleClick(event, slot, obj = selectedCard) {
    event.preventDefault();

    if (!selectedCard) return;

    // return playCard(obj, slot).then(resp => {
    //   const { data, slot } = resp;
    //   const { cost } = data;
    //   const addObj = {
    //     card: data,
    //     slot: `slot${slot}`
    //   };

    //   // dispatch(addYourMinion(addObj));
    //   // dispatch(deselectCard());
    //   // dispatch(removeCardFromYourHand(obj));
    //   // dispatch(subtracted(cost));
    // });
  }

  // prettier-ignore
  return (
    <div
      className={[
        css.BoardPlayArea,
        css.YourBoardPlayArea,
        selectedCard && css.BoardIsActive
      ].join(' ')}
      data-file="YourBoardPlayArea"
    >
      {/* <BoardSlot minion={slot1} p="Yours" slot={1} onClick={e => handleClick(e, 1)} />
      <BoardSlot minion={slot2} p="Yours" slot={2} onClick={e => handleClick(e, 2)} />
      <BoardSlot minion={slot3} p="Yours" slot={3} onClick={e => handleClick(e, 3)} />
      <BoardSlot minion={slot4} p="Yours" slot={4} onClick={e => handleClick(e, 4)} />
      <BoardSlot minion={slot5} p="Yours" slot={5} onClick={e => handleClick(e, 5)} />
      <BoardSlot minion={slot6} p="Yours" slot={6} onClick={e => handleClick(e, 6)} />
      <BoardSlot minion={slot7} p="Yours" slot={7} onClick={e => handleClick(e, 7)} /> */}
    </div>
  );
}
