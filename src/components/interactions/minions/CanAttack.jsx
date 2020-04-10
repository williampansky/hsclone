import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CanAttack({ moves, data, index }) {
  const { selectMinion } = moves;

  return (
    <Component
      data-file="interactions/minions/CanAttack"
      onClick={() => selectMinion(data, index)}
    />
  );
}

CanAttack.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  animation: fadeIn 1200ms var(--animation-transition-cubic) forwards;
  border-radius: var(--minion-border-radius);
  box-shadow: var(--box-shadow-can-be-selected);
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
