import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function GAME_010({ onEnd }) {
  // prettier-ignore
  useEffect(() => {
    setTimeout(() => { onEnd(); }, 1250);
  }, [onEnd]);

  return (
    <Component
      src={require('assets/images/animation-props/blue-explosion.gif')}
    />
  );
}

GAME_010.propTypes = {
  onEnd: PropTypes.func
};

const Component = styled.img`
  animation: scaleUp 400ms cubic-bezier(0.19, 1, 0.22, 1) forwards;
  height: auto;
  pointer-events: none;
  position: absolute;
  top: -35px;
  width: 100%;

  @keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    80% {
      opacity: 1;
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
`;
