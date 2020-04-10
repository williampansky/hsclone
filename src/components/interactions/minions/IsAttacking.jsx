import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function IsAttacking({ moves }) {
  const { deselectMinion } = moves;

  return (
    <Component
      data-file="interactions/minions/IsAttacking"
      onClick={() => deselectMinion()}
    />
  );
}

IsAttacking.propTypes = {
  moves: PropTypes.object
};

const Component = styled.div`
  animation: fadeIn 1200ms var(--animation-transition-cubic) forwards;
  border-radius: var(--minion-border-radius);
  box-shadow: var(--box-shadow-is-selected);
  cursor: pointer;
  height: 100%;
  opacity: 0;
  transition-property: box-shadow, opacity, transform;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;
  transform: scale(1.15);
  z-index: -1;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
