import React from 'react';
import PropTypes from 'prop-types';
import PlayerEnergy from '../player-energy/PlayerEnergy';
import CardBack from '../../components-old/cards/CardBack';
import styles from './hands.module.scss';

export default function TheirHand({ G, theirID }) {
  const { counts, energy } = G;
  const { hand } = counts[theirID];

  return (
    <div
      className={[styles['hand'], styles['hands--their_hand']].join(' ')}
      data-file="TheirHand"
      data-number-of-cards={hand}
    >
      {Array.from(Array(hand)).map((_, index) => {
        return (
          <div key={index} data-index={index}>
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
    energy: PropTypes.object
  }),
  theirID: PropTypes.string
};
