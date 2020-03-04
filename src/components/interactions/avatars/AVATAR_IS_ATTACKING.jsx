import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function AVATAR_IS_ATTACKING({ G, ctx, moves, board }) {
  const { terminatePlayerWeaponAttack } = moves;

  function handleClick() {
    if (board === 'YourBoard') return terminatePlayerWeaponAttack();
  }

  return (
    <Component
      board={board}
      data-file="interactions/avatars/AVATAR_IS_ATTACKING"
      onClick={() => handleClick()}
    />
  );
}

AVATAR_IS_ATTACKING.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
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
