import React from 'react';

// libs
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
import { Component, Label } from 'components/DebugBar/DebugBarStyles';

const MousePosition = ({ x, y }) => {
  return (
    <Component>
      <Label>Mouse Position</Label>
      <div>
        <Output>x: {x}</Output>
        <Output>y: {y}</Output>
      </div>
    </Component>
  );
};

MousePosition.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

const Output = styled.span`
  display: inline-block;
  min-width: 45px;
  text-transform: uppercase;
`;

export default MousePosition;
