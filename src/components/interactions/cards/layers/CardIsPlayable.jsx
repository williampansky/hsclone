import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CardIsPlayable({ onClick }) {
  return (
    <Component onClick={onClick}>
      <CardEffect />
    </Component>
  );
}

CardIsPlayable.propTypes = {
  onClick: PropTypes.func
};

const Component = styled.div`
  border-radius: var(--card-border-radius);
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  pointer-events: auto;
`;

const CardEffect = styled.div`
  box-shadow: 0 0 10px #00c469, 0 0 20px #0ee681;
  border-radius: var(--card-border-radius);
  content: '';
  left: 0;
  height: var(--card-height);
  position: absolute;
  top: 0;
  z-index: 0;
  transition: box-shadow 400ms cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: none;
  width: 100%;
  height: var(--card-height);
`;
