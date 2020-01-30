import React from 'react';
import css from '~/styles/game/game.scss';

export default function YourAvatar({ src }) {
  return (
    <div
      data-file="YourAvatar"
      className={[css.PlayerAvatar, css.YourAvatar].join(' ')}
    >
      <div
        className={css.AvatarImage}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
}
