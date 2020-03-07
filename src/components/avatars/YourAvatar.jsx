import React from 'react';
import PropTypes from 'prop-types';
import PlayerHealth from 'components/player-health/PlayerHealth';
import AvatarInteraction from 'components/interactions/avatars/AvatarInteraction';
import CARDCLASS from 'enums/cardClass.enums';

export default function YourAvatar({
  G,
  ctx,
  moves,
  isActive,
  board,
  yourID,
  playerClass
}) {
  const {
    health,
    playerCanAttack,
    playerCanBeHealed,
    playerIsAttacking,
    playerShieldPoints
  } = G;
  const YOUR_HEALTH = health[yourID];
  const YOUR_SHIELD = playerShieldPoints[yourID];

  function classImage(string) {
    // prettier-ignore
    switch (string) {
      case CARDCLASS[1]:  return require('assets/images/class-avatars/1.jpg');
      case CARDCLASS[2]:  return require('assets/images/class-avatars/2.jpg');
      case CARDCLASS[3]:  return require('assets/images/class-avatars/3.jpg');
      case CARDCLASS[4]:  return require('assets/images/class-avatars/4.jpg');
      case CARDCLASS[5]:  return require('assets/images/class-avatars/5.jpg');
      case CARDCLASS[6]:  return require('assets/images/class-avatars/6.jpg');
      case CARDCLASS[7]:  return require('assets/images/class-avatars/7.jpg');
      case CARDCLASS[8]:  return require('assets/images/class-avatars/8.jpg');
      case CARDCLASS[9]:  return require('assets/images/class-avatars/9.jpg');
      default:            return;
    }
  }

  return (
    <div
      data-file="avatars/YourAvatar"
      className={['player-avatar', 'your-avatar', 'effect--bezel'].join(' ')}
    >
      <PlayerHealth
        health={YOUR_HEALTH}
        player="YourHealth"
        shieldPoints={YOUR_SHIELD}
      />

      <div className={'avatar-image-wrapper'}>
        {playerClass && (
          <div
            className={'avatar-image'}
            style={{ backgroundImage: `url(${classImage(playerClass)})` }}
          />
        )}
      </div>

      <AvatarInteraction
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={board}
        playerCanAttack={playerCanAttack[yourID]}
        playerCanBeHealed={playerCanBeHealed[yourID]}
        playerIsAttacking={playerIsAttacking[yourID]}
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
  playerClass: PropTypes.string
};

YourAvatar.defaultProps = {
  backgroundColor: 'white'
};
