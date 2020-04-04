import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function AvatarCanBeAttackedByMinion({ G, ctx, moves }) {
  const { selectedMinionIndex } = G;
  const {
    attackPlayer,
    setAttackedMinionIndex,
    resetMinionIsAttacking,
    resetMinionIsAttackingPlayer
  } = moves;

  function handleClick() {
    attackPlayer();

    setTimeout(() => {
      setAttackedMinionIndex(null);
      resetMinionIsAttacking(selectedMinionIndex[ctx.currentPlayer]);
      resetMinionIsAttackingPlayer(selectedMinionIndex[ctx.currentPlayer]);
    }, 250);
  }

  return (
    <Component
      data-file="interactions/avatars/AvatarCanBeAttackedByMinion"
      onClick={() => handleClick()}
    />
  );
}

AvatarCanBeAttackedByMinion.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object
};

const Component = styled.div`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-left-radius: var(--avatar-border-radius);
  border-top-right-radius: var(--avatar-border-radius);
  box-shadow: 0 0 5px #c43800;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 20px #c43800;
  }

  &:before {
    border-radius: 50%;
    top: 13.5%;
    content: '';
    height: calc(var(--player-health-size) * 1.35);
    position: absolute;
    left: -20%;
    width: calc(var(--player-health-size) * 1.35);
  }
`;
