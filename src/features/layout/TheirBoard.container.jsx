import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TheirBoard = ({ children }) => {
  const { boardHeight, boardWidth } = useSelector(s => s.layout);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'SPELL',
    drop: () => ({ name: 'TheirBoard' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return boardHeight && boardWidth ? (
    <Component
      data-feature="TheirBoard"
      height={boardHeight}
      ref={drop}
      width={boardWidth}
    >
      {children}
    </Component>
  ) : null;
};

const Component = styled.div`
  box-sizing: border-box;
  background: #333;
  height: ${props => (props.height ? `calc(${props.height}px / 2)` : `0px`)};
  margin: auto auto 0;
  overflow: hidden;
  width: ${props => (props.width ? `${props.width}px` : `0px`)};
`;

TheirBoard.propTypes = {
  children: PropTypes.node
};

export default TheirBoard;
