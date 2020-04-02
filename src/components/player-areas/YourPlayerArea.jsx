import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// children
import ClassSkillButtonV2 from 'components/class-skill/ClassSkillButtonV2';
import PlayerWeapon from 'components/player-weapon/PlayerWeapon';
import YourAvatar from 'components/avatars/YourAvatar';

export default function YourPlayerArea({
  G,
  ctx,
  moves,
  isActive,
  board,
  yourID,
  playerClass
}) {
  const {
    energy,
    playerCanAttack,
    playerCanUseClassSkill,
    playerAttackValue,
    playerIsAttacking,
    playerWeapon
  } = G;

  const WEAPON = playerWeapon[yourID];
  const WEAPON_AP = WEAPON && WEAPON.attack;
  const WEAPON_HP = WEAPON && WEAPON.health;
  const WEAPON_IMG = WEAPON && WEAPON.imageSrc;
  const CAN_USE_SKILL =
    playerCanUseClassSkill[yourID] && energy[yourID].current >= 2;

  return (
    <Component board={board} data-file="player-areas/YourPlayerArea">
      <AvatarWrapper board={board}>
        <ClassSkillButtonV2
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          playerClass={playerClass[yourID]}
          canUse={CAN_USE_SKILL}
        />

        {playerWeapon[yourID] !== null ? (
          <PlayerWeapon
            canUse={playerCanAttack[yourID]}
            playerAttackValue={playerAttackValue[yourID]}
            weaponAttack={WEAPON_AP}
            weaponHealth={WEAPON_HP}
            weaponImageSrc={WEAPON_IMG}
          />
        ) : null}

        <YourAvatar
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          board="YourBoard"
          yourID={yourID}
          playerClass={playerClass[yourID]}
          playerIsAttacking={playerIsAttacking[yourID]}
        />
      </AvatarWrapper>
    </Component>
  );
}

YourPlayerArea.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  board: PropTypes.string,
  yourID: PropTypes.string,
  playerClass: PropTypes.object
};

const Component = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.465);
  width: 100%;
  background-color: var(--board-yourPlayerArea-background-color);
  background-image: url('');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  background-blend-mode: overlay;
  image-rendering: pixelated;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 calc(var(--board-yourPlayerArea-height) / 8);
  height: var(--board-yourPlayerArea-height);
  position: relative;
`;

const AvatarWrapper = styled.div`
  border-top-left-radius: var(--avatar-border-radius);
  border-top-right-radius: var(--avatar-border-radius);
  background: var(--board-yourPlayerArea-background-color);
  border-top: 1px solid rgba(255, 255, 255, 0.465);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 10px;
  position: relative;
  height: calc(var(--avatar-height) * 2);
  width: calc(var(--avatar-width) * 1.15);
`;

const AvatarHealthWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.465);
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-flow: column nowrap;
  font-size: 20px;
  font-weight: bold;
  height: calc(var(--player-health-size) * 1.25);
  justify-content: center;
  position: absolute;
  width: calc(var(--player-health-size) * 1.25);
  z-index: 1;
  background: var(--board-yourPlayerArea-background-color);
  top: 21%;
  left: -8%;
`;
