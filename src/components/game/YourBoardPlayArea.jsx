import React from 'react';
import css from '~/pages/game/styles/game.scss';
import { useSelector, useDispatch } from 'react-redux';
import playCard from 'lib/game/play-card';
import { addCardToYourBoard } from '~/features/yourBoard/yourBoard.slice';
import {
  removeCardFromYourHand,
  deselectCard
} from '~/features/yourHand/yourHand.slice';

export default function YourBoardPlayerArea({ children }) {
  const dispatch = useDispatch();
  const yourBoard = useSelector(s => s.yourBoard);
  const { selectedCard } = useSelector(s => s.yourHand);

  function handleClick(event, slot, obj = selectedCard) {
    event.preventDefault();
    return playCard(obj, slot).then(resp => {
      const { data, slot } = resp;
      const addObj = {
        item: data,
        i: slot
      };

      dispatch(addCardToYourBoard(addObj));
      dispatch(deselectCard());
      dispatch(removeCardFromYourHand(obj));
    });
  }

  return (
    <div
      className={[
        css.boardPlayArea,
        selectedCard && css.isActive,
        yourBoard.length !== 0 && css.hasMinions
      ].join(' ')}
      data-file="YourBoardPlayArea"
    >
      <div className={css.slot} onClick={event => handleClick(event)} />
      {yourBoard.map((card, index) => {
        const { name, attack, health } = card;
        return (
          <React.Fragment key={`React.Fragment_${index}`}>
            <div
              className={css.slot}
              data-idx={index}
              key={index + name}
              onClick={event => handleClick(event, index)}
            >
              <div>{name}</div>
              <div>
                <span>ap: {attack}</span>
                <span> | </span>
                <span>hp: {health}</span>
              </div>
            </div>
            <div
              className={css.slot}
              key={index + 'slot'}
              onClick={event => handleClick(event, index)}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
