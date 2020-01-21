import React from 'react';

// libs
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
import { Component, Label } from 'components/DebugBar/DebugBarStyles';

const HoveredTargetFile = ({ target }) => {
  return (
    <Component>
      <Label>Hovered File</Label>
      <div>
        <Output>{target}</Output>
      </div>
    </Component>
  );
};

HoveredTargetFile.propTypes = {
  target: PropTypes.string
};

const Output = styled.span`
  display: inline-block;
  min-width: 45px;
`;

export default HoveredTargetFile;
