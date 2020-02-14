import React, { useEffect, useState } from 'react';
import PlayerEnergy from '../player-energy/PlayerEnergy';
import CardBack from '../cards/CardBack';
import css from 'styles/interactions/card-interactions.module.scss';
import styles from './hands.module.scss';

export default function TheirHand({
  G,
  ctx,
  moves,
  events,
  reset,
  undo,
  redo,
  step,
  log,
  gameID,
  playerID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials,
  yourID,
  theirID
}) {
  function transformHovering(idx) {
    return `translateY(calc(${calcOffset(idx)} * 1px)) 
    rotate(calc(${calcRotate(idx)} * -0.25deg)) 
    scale(0.675)`;
  }

  function handleTransforms(idx) {
    let key;

    if (G.selectedMinionIndex[theirID]) key = '';
    else if (G.selectedCardIndex[theirID] === idx) key = 'selected';
    else if (G.hoveringCardIndex[theirID] === idx) key = 'hover';

    switch (key) {
      case 'selected':
        return false;

      case 'hover':
        return transformHovering(idx);

      default:
        return `translateY(calc(${calcOffset(idx)} * -1px)) 
        rotate(calc(${calcRotate(idx)} * -1deg)) 
        scale(0.675)`;
    }
  }

  function handleClasses(idx) {
    let key;

    if (G.selectedMinionIndex[theirID]) key = '';
    else if (G.selectedCardIndex[theirID] === idx) key = 'selected';
    else if (G.hoveringCardIndex[theirID] === idx) key = 'hover';

    switch (key) {
      case 'selected':
        return css['card-they-have-selected'];

      case 'hover':
        return css['card-they-are-hovering'];

      default:
        return false;
    }
  }

  return (
    <div
      className={[styles['hand'], styles['hands--their_hand']].join(' ')}
      data-file="TheirHand"
      data-number-of-cards={G.counts[theirID].hand}
    >
      {Array.from(Array(G.counts[theirID].hand)).map((_, index) => {
        return (
          <div
            key={index}
            className={[css['card-in-their-hand'], handleClasses(index)].join(
              ' '
            )}
            data-index={index}
            style={{ transform: handleTransforms(index) }}
          >
            <CardBack />
          </div>
        );
      })}

      <PlayerEnergy energy={G.energy[theirID]} />
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
