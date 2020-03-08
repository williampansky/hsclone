import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PLAYER_BOARDS from 'enums/playerBoards.enums';

export default function AvatarIsAttacking({ moves, board }) {
  const { terminatePlayerWeaponAttack } = moves;

  function handleClick() {
    if (board === PLAYER_BOARDS[1]) return terminatePlayerWeaponAttack();
  }

  return (
    <Component
      board={board}
      data-file="interactions/avatars/AvatarIsAttacking"
      onClick={() => handleClick()}
    />
  );
}

AvatarIsAttacking.propTypes = {
  moves: PropTypes.object,
  board: PropTypes.string
};

const Component = styled.div`
  border-top-left-radius: var(--avatar-border-radius);
  border-top-right-radius: var(--avatar-border-radius);
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 100ms ease-in-out;
  width: 100%;
  position: absolute;
  box-shadow: 0px 0px 20px 10px rgba(0, 196, 105, 0.625);
`;
