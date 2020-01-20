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
      boardHeight={boardHeight}
      boardWidth={boardWidth}
      data-feature="TheirBoard"
      ref={drop}
    >
      {children}
    </Component>
  ) : null;
};

const Component = styled.div`
  box-sizing: border-box;
  background: #333;
  height: ${p => (p.boardHeight ? `calc(${p.boardHeight}px / 2)` : `0px`)};
  margin: auto auto 0;
  overflow: hidden;
  width: ${p => (p.boardWidth ? `${p.boardWidth}px` : `0px`)};
`;

TheirBoard.propTypes = {
  children: PropTypes.node
};

export default TheirBoard;
