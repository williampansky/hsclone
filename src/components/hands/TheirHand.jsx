import React from 'react';
import PropTypes from 'prop-types';

// child components
import CardBack from 'components/cards/CardBack';
import GameMenuTrigger from 'components/game-menu/GameMenuTrigger';
import PlayerEnergy from 'components/player-energy/PlayerEnergy';

export default function TheirHand({ G, theirID, toggleMenuFn }) {
  const {
    counts,
    energy,
    hoveringCardIndex,
    selectedCardIndex,
    selectedMinionIndex
  } = G;
  const handLength = counts[theirID] && counts[theirID].hand;

  function transforms(idx) {
    let key;

    if (selectedMinionIndex[theirID]) key = '';
    else if (selectedCardIndex[theirID] === idx) key = 'selected';
    else if (hoveringCardIndex[theirID] === idx) key = 'hover';

    switch (key) {
      case 'selected':
        return;

      case 'hover':
        return `translateY(calc(${calcOffset(idx, handLength)} * 1px)) 
        rotate(calc(${calcRotate(idx, handLength)} * -0.25deg)) 
        scale(0.675)`;

      default:
        return `translateY(calc(${calcOffset(idx, handLength)} * -1px)) 
        rotate(calc(${calcRotate(idx, handLength)} * -1deg)) 
        scale(0.675)`;
    }
  }

  function classes(idx) {
    let key;

    if (selectedMinionIndex[theirID]) key = '';
    else if (selectedCardIndex[theirID] === idx) key = 'selected';
    else if (hoveringCardIndex[theirID] === idx) key = 'hover';

    switch (key) {
      case 'selected':
        return ['card-in-their-hand', 'card-they-have-selected'].join(' ');

      case 'hover':
        return ['card-in-their-hand', 'card-they-are-hovering'].join(' ');

      default:
        return 'card-in-their-hand';
    }
  }

  return (
    <div
      data-file="hands/TheirHand"
      data-number-of-cards={handLength}
      className={['hand', 'hands--their_hand'].join(' ')}
    >
      <GameMenuTrigger toggleMenuFn={toggleMenuFn} />

      {Array.from(Array(handLength)).map((_, index) => {
        return (
          <div
            key={index}
            data-index={index}
            className={classes(index)}
            style={{ transform: transforms(index) }}
          >
            <CardBack />
          </div>
        );
      })}

      <PlayerEnergy energy={energy[theirID]} />
    </div>
  );
}

TheirHand.propTypes = {
  G: PropTypes.shape({
    counts: PropTypes.object,
    energy: PropTypes.object,
    hoveringCardIndex: PropTypes.object,
    selectedCardIndex: PropTypes.object,
    selectedMinionIndex: PropTypes.object
  }),
  theirID: PropTypes.string
};

// prettier-ignore
// abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
function calcOffset(index, total = 10, offsetRange = 80) {
  // index = index + 1;
  if (total <= 4) {
    if (index === 0) return Math.abs((index + 1) * offsetRange);
  }

  return Math.abs((index - (total - 1) / 2) / (total - 2) * offsetRange);
}

// prettier-ignore
// ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
function calcRotate(index, total = 10, rotationRange = 50) {
  // index = index + 1;
  return (index - (total - 1) / 2) / (total - 2) * rotationRange;
}
