import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MINION_HAS_GUARD() {
  return <Component data-file="mechanics/MINION_HAS_GUARD" />;
}

MINION_HAS_GUARD.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Comp = styled.div`
  background-image: url('https://cdn.pixabay.com/photo/2015/04/11/10/08/shield-717505_960_720.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  width: 120%;
  height: 110%;
  top: 0;
`;

const Component = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: black;
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
