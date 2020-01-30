import React from 'react';
import css from '~/styles/game/game.scss';

export default function TheirAvatar({ health, src }) {
  return (
    <div
      data-file="TheirAvatar"
      className={[css.PlayerAvatar, css.TheirAvatar].join(' ')}
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