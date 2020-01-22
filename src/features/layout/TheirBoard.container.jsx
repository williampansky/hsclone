import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card.component';

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
      data-file="TheirBoard"
      ref={drop}
    >
      {children}
      <Card attack={4} />
    </Component>
  ) : null;
};

const Component = styled.div`
  align-items: center;
  background: #333;
  box-shadow: inset 0 0 10px transparent;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: ${p => (p.boardHeight ? `calc(${p.boardHeight}px / 2)` : `0px`)};
  justify-content: center;
  margin: auto auto 0;
  overflow: hidden;
  width: ${p => (p.boardWidth ? `${p.boardWidth}px` : `0px`)};
`;

TheirBoard.propTypes = {
  children: PropTypes.node
};

export default TheirBoard;
