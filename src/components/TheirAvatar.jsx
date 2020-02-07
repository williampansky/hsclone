import React from 'react';
import css from '../styles/game.scss';

export default function TheirAvatar({ health, src }) {
  return (
    <div
      data-file="TheirAvatar"
      className={[css.PlayerAvatar, css.TheirAvatar].join(' ')}
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

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
