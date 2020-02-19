import React from 'react';
import PropTypes from 'prop-types';

export default function YourAvatar({ G, moves, yourID, src }) {
  const { health, canBeAttacked } = G;
  const YOUR_HEALTH = health[yourID];
  // const CAN_BE_ATTACKED = canBeAttacked[yourID];

  return (
    <div
      data-file="avatars/YourAvatar"
      className={[
        'player-avatar',
        'your-avatar'
        // CAN_BE_ATTACKED ? css['player-avatar--can_be_attacked'] : ''
      ].join(' ')}
    >
      <div className={['player-health'].join(' ')}>{YOUR_HEALTH}</div>
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
