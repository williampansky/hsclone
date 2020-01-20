import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YourBoard = () => {
  const dispatch = useDispatch();
  const { boardHeight, boardWidth } = useSelector(s => s.layout);
  const { yourBoard } = useSelector(s => s.match);

  return (
    <Component
      data-file="YourBoardCards"
      height={boardHeight}
      width={boardWidth}
    >
      {yourBoard && yourBoard.length
        ? yourBoard.map((card, i) => {
            return (
              <div
                id={card.id}
                key={i}
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
          })
        : null}
    </Component>
  );
};

const Component = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: ${props => (props.height ? `calc(${props.height}px / 3)` : `0px`)};
  justify-content: center;
  margin: auto;
  width: ${props => (props.width ? `calc(${props.width}px - 20%)` : `0px`)};

  & > div + div {
    margin-left: 10px;
  }
`;

export default YourBoard;
