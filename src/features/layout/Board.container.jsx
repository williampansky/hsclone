import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Board = ({ children, onMouseMove }) => {
  const { boardHeight, boardWidth } = useSelector(s => s.layout);

  return boardHeight && boardWidth ? (
    <Component
      data-feature="Board"
      height={boardHeight}
      onMouseMove={onMouseMove}
      width={boardWidth}
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

Board.propTypes = {
  children: PropTypes.node.isRequired,
  onMouseMove: PropTypes.func
};

export default Board;
