import React from 'react';
import Board from 'components/boards/Board';
import TheirBoard from 'components/boards/TheirBoard';
import TheirHand from 'components/hands/TheirHand';
import YourBoard from 'components/boards/YourBoard';
import YourHand from 'components/hands/YourHand';
import EndTurnButton from 'components/end-turn/EndTurn';
import css from './game-component.module.scss';

export default function GameWrapper(props) {
  const {
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
    credentials
  } = props;

  const yourID = Number(playerID) === 0 ? 0 : 1;
  const theirID = Number(playerID) === 0 ? 1 : 0;

  return props ? (
    <div data-file="Game" className={css['game-component']}>
      <TheirHand
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        reset={reset}
        undo={undo}
        redo={redo}
        step={step}
        log={log}
        gameID={gameID}
        playerID={playerID}
        gameMetadata={gameMetadata}
        isActive={isActive}
        isMultiplayer={isMultiplayer}
        isConnected={isConnected}
        credentials={credentials}
        yourID={yourID}
        theirID={theirID}
      />
      <Board>
        <TheirBoard
          G={G}
          ctx={ctx}
          moves={moves}
          events={events}
          reset={reset}
          undo={undo}
          redo={redo}
          step={step}
          log={log}
          gameID={gameID}
          playerID={playerID}
          gameMetadata={gameMetadata}
          isActive={isActive}
          isMultiplayer={isMultiplayer}
          isConnected={isConnected}
          credentials={credentials}
          theirID={theirID}
        />
        <EndTurnButton
          G={G}
          ctx={ctx}
          moves={moves}
          events={events}
          isActive={isActive}
          yourID={yourID}
          theirID={theirID}
        />
        <YourBoard
          G={G}
          ctx={ctx}
          moves={moves}
          events={events}
          reset={reset}
          undo={undo}
          redo={redo}
          step={step}
          log={log}
          gameID={gameID}
          playerID={playerID}
          gameMetadata={gameMetadata}
          isActive={isActive}
          isMultiplayer={isMultiplayer}
          isConnected={isConnected}
          credentials={credentials}
        />
      </Board>
      <YourHand
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        reset={reset}
        undo={undo}
        redo={redo}
        step={step}
        log={log}
        gameID={gameID}
        playerID={playerID}
        gameMetadata={gameMetadata}
        isActive={isActive}
        isMultiplayer={isMultiplayer}
        isConnected={isConnected}
        credentials={credentials}
        yourID={yourID}
        theirID={theirID}
      />
    </div>
  ) : null;
}
