import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectCard, selectCard } from '~/features/yourHand/yourHand.slice';
import { subtracted } from '~/features/energy/yourEnergy.slice';
import css from '~/styles/game/game.scss';

export default function CardIsPlayable({ children, data, index, style }) {
  const dispatch = useDispatch();
  const { selectedCard } = useSelector(s => s.yourHand);
  const [isSelected, setIsSelected] = useState(false);
  const dataID = data && data.id;
  const selectedID = selectedCard && selectedCard.id;

  function dispatchSelectCard(selected, object) {
    return !selected ? dispatch(selectCard(object)) : dispatch(deselectCard());
  }

  function handleClick(event, object = data, selected = isSelected) {
    event.preventDefault();
    return dispatchSelectCard(selected, object);
  }

  useEffect(() => {
    dataID === selectedID ? setIsSelected(true) : setIsSelected(false);
  }, [dataID, selectedID]);

  return (
    <div
      className={[css.CardInYourHand].join(' ')}
      data-is-playable={true}
      data-is-selected={isSelected}
      data-index={index}
      onClick={event => handleClick(event, data, isSelected)}
      style={style}
    >
      {children}
    </div>
  );
}
