import React from 'react';
import CardIsPlayable from './interactions/CardIsPlayable';
import css from 'styles/interactions/card-interactions.module.scss';

export default function CardInteractionLayer({
  children,
  data,
  index,
  interactions,
  theirHand
}) {
  const theirHandStyle = {
    transform: `
      translateY(calc(${calcOffset(index)} * -1px)) 
      rotate(calc(${calcRotate(index)} * -1deg)) 
      scale(0.675)
    `
  };

  const yourHandStyle = {
    transform: `
      translateY(calc(${calcOffset(index)} * 1px)) 
      rotate(calc(${calcRotate(index)} * 1deg)) 
      scale(0.675)
    `
  };

  if (theirHand)
    return (
      <div
        className={css['card-in-their-hand']}
        data-index={index}
        style={theirHandStyle}
      >
        {children}
      </div>
    );

  switch (interactions) {
    case 'is-playable':
      // prettier-ignore
      return <CardIsPlayable children={children} data={data} index={index} style={yourHandStyle} />;

    default:
      // prettier-ignore
      return (
        <div className={css['card-in-your-hand']} data-index={index} style={yourHandStyle}>
          {children}
        </div>
      );
  }
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
