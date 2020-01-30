import React from 'react';
import css from '~/styles/game/game.scss';

export default function YourAvatar({ health, src }) {
  return (
    <div
      data-file="YourAvatar"
      className={[css.PlayerAvatar, css.YourAvatar].join(' ')}
    >
      <div className={[css['player-health']].join(' ')}>{health}</div>
      <div className={css.AvatarImageWrapper}>
        <div
          className={css.AvatarImage}
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
    </div>
  );
}
