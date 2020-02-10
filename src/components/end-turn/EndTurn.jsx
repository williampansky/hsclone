import React from 'react';
import css from './end-turn.module.scss';

export default function EndTurnButton({ events, moves, isActive }) {
  function handleClick(event) {
    event.preventDefault();
    moves.hoverOverCardInHand(null);
    moves.selectPlayableCard(null, null);
    moves.selectMinionForAttack(null, null);
    return events.endTurn();
  }

  return (
    <div className={css['end-turn']} data-file="end-turn/EndTurn">
      <button
        className={css['end-turn-button']}
        disabled={!isActive}
        onClick={event => handleClick(event)}
      >
        {isActive ? 'End Turn' : 'Their Turn'}
      </button>
    </div>
  );
}
