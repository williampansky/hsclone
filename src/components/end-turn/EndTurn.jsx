/* eslint-disable react/prop-types */
import React from 'react';
import css from './end-turn.module.scss';

export default function EndTurnButton({
  G,
  events,
  moves,
  isActive,
  yourID,
  theirID
}) {
  function handleClick(event) {
    event.preventDefault();
    moves.hoverCard(null);
    moves.selectCard(null, null);
    // moves.selectAttackingMinion(null, null);
    return events.endTurn();
  }

  return (
    <div data-file="EndTurn" className={css['end-turn']}>
      <div
        style={{
          color: 'white',
          padding: '4px 0',
          textAlign: 'center'
        }}
      >
        {G.counts[theirID].deck}
      </div>
      <button
        className={css['end-turn-button']}
        disabled={!isActive}
        onClick={event => handleClick(event)}
      >
        {isActive ? 'End Turn' : 'Their Turn'}
      </button>
      <div
        style={{
          color: 'white',
          padding: '4px 0',
          textAlign: 'center'
        }}
      >
        {G.counts[yourID].deck}
      </div>
    </div>
  );
}
