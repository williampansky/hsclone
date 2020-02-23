import React from 'react';
import PropTypes from 'prop-types';
import PlayerHealth from 'components/avatars/PlayerHealth';

export default function YourAvatar({ G, moves, yourID, src }) {
  const { health } = G;
  const YOUR_HEALTH = health[yourID];
  // const CAN_BE_ATTACKED = canBeAttacked[yourID];

  return (
    <div
      data-file="avatars/YourAvatar"
      className={[
        'player-avatar',
        'your-avatar',
        'effect--bezel'
        // CAN_BE_ATTACKED ? css['player-avatar--can_be_attacked'] : ''
      ].join(' ')}
    >
      <PlayerHealth health={YOUR_HEALTH} />
      <div className={'avatar-image-wrapper'}>
        {src && (
          <div
            className={'avatar-image'}
            style={{ backgroundImage: `url(${src})` }}
          />
        )}
      </div>
    </div>
  );
}

YourAvatar.propTypes = {
  G: PropTypes.object,
  moves: PropTypes.object,
  yourID: PropTypes.string,
  src: PropTypes.string
};

YourAvatar.defaultProps = {
  backgroundColor: 'white'
};
