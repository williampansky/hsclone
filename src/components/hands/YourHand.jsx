import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import CardInteractionLayer from '../../systems/CardInteractionLayer';
import PlayerEnergy from '../player-energy/PlayerEnergy';
import Timer from 'components/timer/Timer';
import uid from 'utils/uid';
import styles from './hands.module.scss';

export default function YourHand({
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
  return (
    <div
      className={[styles['hand'], styles['hands--their_hand']].join(' ')}
      data-file="YourHand"
      data-number-of-cards={G.counts[yourID].hand}
    >
      {G.players[yourID].hand && G.players[yourID].hand.length
        ? G.players[yourID].hand.map((card, index) => {
            return (
              <React.Fragment key={index}>
                <CardInteractionLayer
                  card={card}
                  index={index}
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
              </React.Fragment>
            );
          })
        : null}

      <PlayerEnergy energy={G.energy[yourID]} />
    </div>
  );
}
