import React from 'react';
import PropTypes from 'prop-types';
import PlayerEnergy from '../player-energy/PlayerEnergy';
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
  yourID
}) {
  const { counts, energy } = G;
  const { hand } = counts[yourID];

  return (
    <div
      className={[styles['hand'], styles['hands--their_hand']].join(' ')}
      data-file="YourHand"
      data-number-of-cards={hand}
    >
      <PlayerEnergy energy={energy[yourID]} />
    </div>
  );
}

YourHand.propTypes = {
  G: PropTypes.shape({
    counts: PropTypes.object,
    energy: PropTypes.object
  }),
  yourID: PropTypes.string
};
