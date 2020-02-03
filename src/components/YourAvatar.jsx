import React from 'react';
import css from '../styles/game.scss';

export default function YourAvatar({ health, src }) {
  return (
    <div
      data-file="YourAvatar"
      className={[css.PlayerAvatar, css.YourAvatar].join(' ')}
    >
      <div className={[css['player-health']].join(' ')}>{health}</div>
      <div className={css.AvatarImageWrapper}>
        {src && (
          <div
            className={css.AvatarImage}
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
