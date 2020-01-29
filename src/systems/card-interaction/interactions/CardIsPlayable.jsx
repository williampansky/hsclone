import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectCard, selectCard } from '~/features/yourHand/yourHand.slice';

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
      data-is-selected={isSelected}
      onClick={event => handleClick(event, data, isSelected)}
    >
      {children}
      <style jsx>{`
        div {
          box-sizing: border-box;
          cursor: pointer;
          margin-left: ${index === 0
            ? 0
            : 'calc(calc(var(--card-height) / 0.95) / -3.5)'};
          padding: 0;
          position: relative;
          right: 0;
          top: 0;
          transform: ${`translateY(calc(${calcOffset(index)} * 1px))
            rotate(calc(${calcRotate(index)} * 1deg)) scale(0.675)`};
          transition: 800ms cubic-bezier(0.19, 1, 0.22, 1);
          transition-property: transform;
          user-select: none;
          z-index: 1; // make sure to NOT animate z-index

          &:before {
            content: '';
            box-shadow: -5px 5px 5px hsla(0, 0%, 0%, 0.15);
            left: 0;
            height: var(--card-height);
            position: absolute;
            top: 0;
            transition: box-shadow 800ms cubic-bezier(0.19, 1, 0.22, 1);
            width: 100%;
          }

          &:after {
            animation: none;
            background: #fff;
            bottom: 0;
            content: '';
            left: 0;
            opacity: 0;
            position: absolute;
            right: 0;
            top: 0;
            pointer-events: none;
          }

          &:hover {
            padding-bottom: 250px;
            transform: translateY(calc(-0.0015 * var(--card-height)))
              rotate(0deg) scale(1);
            transition: 100ms cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-property: box-shadow, padding, transform;
            z-index: 100;

            &:before {
              box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.4);
            }

            &:after {
              animation: fade 250ms ease-out forwards;
            }
          }
        }

        div[data-is-selected='true'] {
          position: absolute;
          right: 5%;
          top: calc(-0.85 * var(--card-height));
          transform: translateY(0) rotate(0) scale(1);
          z-index: 100;

          &:before {
            box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.4);
          }

          &:after {
            content: none;
          }

          &:hover {
            padding-bottom: 0;
            transform: inherit;
          }
        }

        @keyframes fade {
          0% {
            opacity: 0.625;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
}

// prettier-ignore
// abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
function calcOffset(index, range = 80, total = 10) {
  index = index + 1;
  return Math.abs((index - (total - 1) / 2) / (total - 2) * range);
}

// prettier-ignore
// ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
function calcRotate(index, range = 50, total = 10) {
  index = index + 1;
  return (index - (total - 1) / 2) / (total - 2) * range;
}
