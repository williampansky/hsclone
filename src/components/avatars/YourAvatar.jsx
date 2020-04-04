import React from 'react';
import PropTypes from 'prop-types';
import PlayerHealth from 'components/player-health/PlayerHealthV2';
import AvatarInteraction from 'components/interactions/avatars/AvatarInteraction';
import CARDCLASS from 'enums/cardClass.enums';
import ClassSkillButton from 'components/class-skill/ClassSkillButtonV2';
import PLAYER_BOARDS from 'enums/playerBoards.enums';
import usePrevious from 'components/hooks/usePrevious';

export default function YourAvatar({
  G,
  ctx,
  moves,
  isActive,
  board,
  yourID,
  playerClass,
  playerIsAttacking
}) {
  const [attackingPlayerClass, setAttackingPlayerClass] = React.useState('');

  const {
    playerCanUseClassSkill,
    energy,
    health,
    playerCanAttack,
    playerCanBeHealed,
    playerShieldPoints,
    animationStates: { playerIsAttackingPlayer }
  } = G;

  const YOUR_HEALTH = health[yourID];
  const YOUR_SHIELD = playerShieldPoints[yourID];
  const [wasAttacked, setWasAttacked] = React.useState(false);
  const previousCurrentHealth = usePrevious(YOUR_HEALTH);

  const animateWasAttacked = React.useCallback(
    currentHealth => {
      currentHealth < previousCurrentHealth && setWasAttacked(true);
      return setTimeout(() => {
        setWasAttacked(false);
      }, 510);
    },
    [previousCurrentHealth]
  );

  React.useEffect(() => {
    animateWasAttacked(YOUR_HEALTH);
  }, [YOUR_HEALTH, animateWasAttacked]);

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

  const PlayerIsAttackingPlayer = playerIsAttackingPlayer[yourID];

  // playerIsAttackingPlayer[yourID]
  const playerIsAttackingPlayerAnimation = React.useCallback(bool => {
    if (bool) {
      setAttackingPlayerClass('player-avatar--is_attacking_player');
      return setTimeout(() => {
        setAttackingPlayerClass('');
      }, 900);
    }
  }, []);

  React.useEffect(() => {
    playerIsAttackingPlayerAnimation(PlayerIsAttackingPlayer);
  }, [PlayerIsAttackingPlayer, playerIsAttackingPlayerAnimation]);

  return (
    <div
      data-file="avatars/YourAvatar"
      className={[
        'player-avatar',
        'your-avatar',
        playerIsAttacking ? 'player-avatar--is_attacking' : '',
        attackingPlayerClass
      ].join(' ')}
    >
      <PlayerHealth
        health={YOUR_HEALTH}
        player="YourHealth"
        shieldPoints={YOUR_SHIELD}
      />

      <ClassSkillButton
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        playerClass={playerClass}
        board={PLAYER_BOARDS[1]}
        canUse={playerCanUseClassSkill[yourID] && energy[yourID].current >= 2}
      />

      <div
        className={[
          'avatar-image-wrapper',
          wasAttacked ? '--was-attacked' : ''
        ].join(' ')}
      >
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
        playerIsAttacking={playerIsAttacking}
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
  playerClass: PropTypes.string,
  playerIsAttacking: PropTypes.bool
};

YourAvatar.defaultProps = {
  backgroundColor: 'white'
};
