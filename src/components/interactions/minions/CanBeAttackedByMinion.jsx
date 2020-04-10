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
  animation: fadeIn 1200ms var(--animation-transition-cubic) forwards;
  border-radius: var(--minion-border-radius);
  box-shadow: var(--box-shadow-can-be-attacked);
  cursor: pointer;
  height: 100%;
  opacity: 0;
  transition-property: box-shadow, opacity;
  transition: 600ms ease-in-out;
  width: 100%;
  position: absolute;
  will-change: box-shadow, opacity;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(196, 56, 0, 0);
  }

  &:after {
    animation: at-ripple-pink 600ms linear infinite;
    content: '';
    position: absolute;
    border-radius: var(--minion-border-radius);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 600ms ease-in-out;
    will-change: opacity;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* forked https://codepen.io/salahuddin/pen/OmqOpg */
  @keyframes at-ripple-pink {
    0% {
      box-shadow: 0 4px 10px rgba(196, 56, 0, 0.5),
        0 0 0 0 rgba(196, 56, 0, 0.5), 0 0 0 5px rgba(196, 56, 0, 0.5),
        0 0 0 10px rgba(196, 56, 0, 0.5);
    }
    100% {
      box-shadow: 0 4px 10px rgba(196, 56, 0, 0.5),
        0 0 0 5px rgba(196, 56, 0, 0.5), 0 0 0 10px rgba(196, 56, 0, 0.5),
        0 0 0 20px rgba(196, 56, 0, 0);
    }
  }
`;
