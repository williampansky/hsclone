import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MINION_IS_ATTACKING({ moves }) {
  const { deselectMinion } = moves;

  return (
    <Component
      data-file="interactions/minions/MINION_IS_ATTACKING"
      onClick={() => deselectMinion()}
    />
  );
}

MINION_IS_ATTACKING.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  animation: isAttackingGlow 2500ms infinite;
  border-radius: var(--minion-border-radius);
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  @keyframes isAttackingGlow {
    0% {
      box-shadow: 0 0 5px #ecd24f;
    }
    40% {
      box-shadow: 0 0 20px #faff10;
    }
    60% {
      box-shadow: 0 0 20px #faff10;
    }
    100% {
      box-shadow: 0 0 5px #ecd24f;
    }
  }
`;
