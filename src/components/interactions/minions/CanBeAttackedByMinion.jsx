import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CanBeAttackedByMinion({ G, ctx, moves, index }) {
  const { selectedMinionIndex } = G;
  const {
    attackMinion,
    setAttackedMinionIndex,
    resetMinionIsAttacking,
    resetMinionIsAttackingIndex
  } = moves;

  function handleClick() {
    attackMinion(index);

    setTimeout(() => {
      setAttackedMinionIndex(null);
      resetMinionIsAttacking(selectedMinionIndex[ctx.currentPlayer]);
      resetMinionIsAttackingIndex(selectedMinionIndex[ctx.currentPlayer]);
    }, 250);
  }

  return (
    <Component
      data-file="interactions/minions/CanBeAttackedByMinion"
      onClick={() => handleClick()}
    />
  );
}

CanBeAttackedByMinion.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
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
`;
