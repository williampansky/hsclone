import React from 'react';
import css from './avatar.module.scss';

export default function YourAvatar(props) {
  const { G, ctx, isActive, playerID, src } = props;
  const { health } = G;
  const YOUR_HEALTH = health[playerID];

  const CAN_BE_ATTACKED = !isActive;

  return (
    <div
      data-file="YourAvatar"
      className={[css['player-avatar'], css['your-avatar']].join(' ')}
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

YourAvatar.defaultProps = {
  backgroundColor: 'white'
};
