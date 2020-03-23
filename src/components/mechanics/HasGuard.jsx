import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HasGuard() {
  return <Component2 data-file="mechanics/HasGuard" />;
}

HasGuard.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component2 = styled.div`
  background-image: url('http://www.clker.com/cliparts/D/0/J/J/K/a/shield-hi.png');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 100%;
  height: 112%;
  top: -5px;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
`;
