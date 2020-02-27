import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CARD_IS_PLAYABLE({ onClick }) {
  return (
    <Component
      data-file="interactions/cards/CARD_IS_PLAYABLE"
      onClick={onClick}
    />
  );
}

CARD_IS_PLAYABLE.propTypes = {
  onClick: PropTypes.func
};

const Component = styled.div`
  border-radius: var(--card-border-radius);
  cursor: pointer;
  height: 100%;
  pointer-events: auto;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 200;
`;
