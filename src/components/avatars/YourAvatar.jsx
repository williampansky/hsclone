import React from 'react';
import PropTypes from 'prop-types';

// styles
import css from './avatar.module.scss';

export default function YourAvatar({ G, moves, yourID, src }) {
  const { health, canBeAttacked } = G;
  const YOUR_HEALTH = health[yourID];
  // const CAN_BE_ATTACKED = canBeAttacked[yourID];

  return (
    <div
      data-file="avatars/YourAvatar"
      className={[
        css['player-avatar'],
        css['your-avatar']
        // CAN_BE_ATTACKED ? css['player-avatar--can_be_attacked'] : ''
      ].join(' ')}
    >
      <div className={[css['player-health']].join(' ')}>{YOUR_HEALTH}</div>
      <div className={css['avatar-image-wrapper']}>
        {src && (
          <div
            className={css['avatar-image']}
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
