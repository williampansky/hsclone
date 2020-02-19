/* eslint-disable react/prop-types */
import React from 'react';

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
    <div data-file="EndTurn" className={'end-turn'}>
      <div
        style={{
          color: 'white',
          fontSize: '0.875em',
          padding: '4px 0',
          textAlign: 'center'
        }}
      >
        <span>Hand: {G.counts[theirID].hand}</span>
        <span>{` | `}</span>
        <span>Deck: {G.counts[theirID].deck}</span>
      </div>

      <button
        className={'end-turn-button'}
        disabled={!isActive}
        onClick={event => handleClick(event)}
      >
        {isActive ? 'End Turn' : 'Their Turn'}
      </button>

      <div
        style={{
          color: 'white',
          fontSize: '0.875em',
          padding: '4px 0',
          textAlign: 'center'
        }}
      >
        <span>Hand: {G.counts[yourID].hand}</span>
        <span>{` | `}</span>
        <span>Deck: {G.counts[yourID].deck}</span>
      </div>
    </div>
  );
}
