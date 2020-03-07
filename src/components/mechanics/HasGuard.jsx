import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HasGuard() {
  return <Component data-file="mechanics/HasGuard" />;
}

HasGuard.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: black;
    pointer-events: none;
  }

  &:before {
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 15%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    top: -35px;
  }

  &:after {
    width: 80%;
    height: 75%;
    clip-path: polygon(50% 15%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    bottom: -10px;
    left: 12px;
  }
`;
