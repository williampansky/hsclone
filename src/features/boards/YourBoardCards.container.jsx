import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addCardToYourBoard } from 'features/match/match.slice';
import BoardDropArea from 'features/boards/BoardDropArea.component';

const Test = ({ card }) => {
  return (
    <div
      id={card.id}
      style={{
        cursor: 'default',
        height: 100,
        width: 65,
        background: card.background
      }}
    >
      {card.name}
    </div>
  );
};

const YourBoard = () => {
  const dispatch = useDispatch();
  const { boardHeight, boardWidth } = useSelector(s => s.layout);
  const { yourBoard } = useSelector(s => s.match);

  const dropCard = React.useCallback(
    (object, index) => {
      const dispatchObj = {
        item: object,
        i: index
      };

      dispatch(addCardToYourBoard(dispatchObj));
    },
    [dispatch]
  );

  return (
    <Component
      boardHeight={boardHeight}
      boardWidth={boardWidth}
      data-file="YourBoardCards"
    >
      <BoardDropArea dropItem={dropCard} />
      {yourBoard.map((card, i) => {
        return (
          <React.Fragment key={i}>
            <Test card={card} key={`c${card.id}`} />
            <BoardDropArea key={`a${i}`} afterIndex={i} dropItem={dropCard} />
          </React.Fragment>
        );
      })}
    </Component>
  );
};

const Component = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: ${p => (p.boardHeight ? `calc(${p.boardHeight}px / 3)` : `0px`)};
  justify-content: center;
  margin: auto;
  width: ${p => (p.boardWidth ? `calc(${p.boardWidth}px - 20%)` : `0px`)};

  /* & > div + div {
    margin-left: 10px;
  } */
`;

export default YourBoard;
