import React from 'react';
import css from './end-turn.module.scss';

export default function EndTurnButton(props) {
  const {
    G,
    ctx,
    ctx: { currentPlayer },
    events: { endTurn },
    moves,
    playerID
  } = props;

  const isYourTurn = Number(currentPlayer) === Number(playerID);

  function handleClick(event) {
    event.preventDefault();
    moves.hoverOverCardInHand(G, ctx, null);
    moves.selectPlayableCard(G, ctx, null);
    return endTurn();
  }

  return (
    <div className={css['end-turn']} data-file="end-turn/EndTurn">
      <button
        className={css['end-turn-button']}
        disabled={!isYourTurn}
        onClick={event => handleClick(event)}
      >
        {isYourTurn ? 'End Turn' : 'Their Turn'}
      </button>
    </div>
  );
}
