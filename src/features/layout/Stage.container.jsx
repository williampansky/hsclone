import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Stage = ({ children, onMouseMove }) => {
  const { stageHeight, stageWidth } = useSelector(s => s.layout);

  return stageHeight && stageWidth ? (
    <Component
      data-feature="Stage"
      height={stageHeight}
      onMouseMove={onMouseMove}
      width={stageWidth}
    >
      {children}
    </Component>
  ) : null;
};

const Component = styled.div`
  box-sizing: border-box;
  background: black;
  height: ${props => (props.height ? `${props.height}px` : `0px`)};
  overflow: auto;
  width: ${props => (props.width ? `${props.width}px` : `0px`)};
`;

Stage.propTypes = {
  children: PropTypes.node.isRequired,
  onMouseMove: PropTypes.func.isRequired
};

export default Stage;
