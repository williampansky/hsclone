import React from 'react';
import PropTypes from 'prop-types';
import PlayerHealth from 'components/player-health/PlayerHealthV2';
import AvatarAnimation from 'components/animations/avatars/AvatarAnimation';
import AvatarInteraction from 'components/interactions/avatars/AvatarInteraction';
import CARDCLASS from 'enums/cardClass.enums';

export default function TheirAvatar({
  G,
  ctx,
  moves,
  isActive,
  board,
  theirID,
  yourID,
  playerClass
}) {
  const [wasAttacked, setWasAttacked] = React.useState(false);
  const {
    health,
    playerShieldPoints,
    playerCanBeHealed,
    playerIsAttacking,
    playerUsedClassSkill
  } = G;
  const THEIR_HEALTH = health[theirID];
  const THEIR_SHIELD = playerShieldPoints[theirID];

  React.useEffect(() => {
    setWasAttacked(true);
    setTimeout(() => {
      setWasAttacked(false);
    }, 510);
  }, [THEIR_HEALTH]);

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
      data-file="avatars/TheirAvatar"
      className={[
        'player-avatar',
        'their-avatar',
        wasAttacked ? '--was-attacked' : ''
      ].join(' ')}
    >
      <PlayerHealth
        health={THEIR_HEALTH}
        player="TheirHealth"
        shieldPoints={THEIR_SHIELD}
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
        theirID={theirID}
        yourID={yourID}
        playerIsAttacking={playerIsAttacking[yourID]}
        playerCanBeHealed={playerCanBeHealed[theirID]}
      />

      <AvatarAnimation
        G={G}
        moves={moves}
        youUsedClassSkill={playerUsedClassSkill[yourID]}
        theyUsedClassSkill={playerUsedClassSkill[theirID]}
      />
    </div>
  );
}

TheirAvatar.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  board: PropTypes.string,
  theirID: PropTypes.string,
  yourID: PropTypes.string,
  playerClass: PropTypes.string
};

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
