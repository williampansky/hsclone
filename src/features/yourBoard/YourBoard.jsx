import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YourBoardCards from 'features/yourBoard/YourBoardCards';

const YourBoard = () => {
  const { boardHeight, boardWidth } = useSelector(s => s.layout);
  return boardHeight && boardWidth ? (
    <Component
      boardHeight={boardHeight}
      boardWidth={boardWidth}
      data-file="YourBoard"
    >
      <YourBoardCards />
    </Component>
  ) : null;
};

const Component = styled.div`
  align-items: center;
  background: #111;
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

YourBoard.propTypes = {
  children: PropTypes.node
};

export default YourBoard;
