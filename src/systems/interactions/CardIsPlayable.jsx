import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectCard, selectCard } from '~/features/yourHand/yourHand.slice';
import css from '~/styles/game/game.scss';

export default function CardIsPlayable({ children, data, index }) {
  const dispatch = useDispatch();
  const { selectedCard } = useSelector(s => s.yourHand);
  const [isSelected, setIsSelected] = useState(false);
  const dataID = data && data.id;
  const selectedID = selectedCard && selectedCard.id;

  function handleClick(event, object = data, selected = isSelected) {
    event.preventDefault();
    return !selected ? dispatch(selectCard(object)) : dispatch(deselectCard());
  }

  useEffect(() => {
    dataID === selectedID ? setIsSelected(true) : setIsSelected(false);
  }, [dataID, selectedID]);

  return (
    <div
      className={[css.CardInYourHand].join(' ')}
      data-is-selected={isSelected}
      data-index={index}
      onClick={event => handleClick(event, data, isSelected)}
      style={{
        transform: `translateY(calc(${calcOffset(index)} * 1px))
        rotate(calc(${calcRotate(index)} * 1deg)) scale(0.675)`
      }}
    >
      {children}
      {/* <style jsx>{`
        div {
          transform: ${`translateY(calc(${calcOffset(index)} * 1px))
            rotate(calc(${calcRotate(index)} * 1deg)) scale(0.675)`};
        }
      `}</style> */}
    </div>
  );
}

// prettier-ignore
// abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
function calcOffset(index, offsetRange = 80, total = 10) {
  index = index + 1;
  return Math.abs((index - (total - 1) / 2) / (total - 2) * offsetRange);
}

// prettier-ignore
// ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
function calcRotate(index, rotationRange = 50, total = 10) {
  index = index + 1;
  return (index - (total - 1) / 2) / (total - 2) * rotationRange;
}
