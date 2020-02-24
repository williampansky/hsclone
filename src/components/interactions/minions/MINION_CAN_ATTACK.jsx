import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MINION_CAN_ATTACK({ moves, data, index }) {
  const { selectMinion } = moves;

  return (
    <Component
      data-file="interactions/minions/MINION_CAN_ATTACK"
      onClick={() => selectMinion(data, index)}
    />
  );
}

MINION_CAN_ATTACK.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
  box-shadow: 0px 0px 15px 5px rgba(0, 196, 105, 0.465);
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  @keyframes canAttackGlow {
    0% {
      box-shadow: 0 0 -20px #00c469;
    }
    50% {
      box-shadow: 0 0 8px #0ee681;
    }
    100% {
      box-shadow: 0 0 -20px #00c469;
    }
  }
`;
