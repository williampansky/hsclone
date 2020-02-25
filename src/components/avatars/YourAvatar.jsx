import React from 'react';
import PropTypes from 'prop-types';
import PlayerHealth from 'components/avatars/PlayerHealth';
import AvatarInteraction from 'components/interactions/avatars/AvatarInteraction';

export default function YourAvatar({
  G,
  ctx,
  moves,
  isActive,
  board,
  yourID,
  src
}) {
  const { health, playerCanBeHealed } = G;
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
      <PlayerHealth health={YOUR_HEALTH} player="YourHealth" />
      <div className={'avatar-image-wrapper'}>
        {src && (
          <div
            className={'avatar-image'}
            style={{ backgroundImage: `url(${src})` }}
          />
        )}
      </div>

      <AvatarInteraction
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={board}
        playerCanBeHealed={playerCanBeHealed[yourID]}
      />
    </div>
  );
}

YourAvatar.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  board: PropTypes.string,
  yourID: PropTypes.string,
  src: PropTypes.string
};

YourAvatar.defaultProps = {
  backgroundColor: 'white'
};
