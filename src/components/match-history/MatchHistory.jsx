/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import createMarkup from 'utils/createMarkup';
import RARITY from 'enums/rarity.enums';

export default function MatchHistory({ G, ctx, gameWidth }) {
  const { matchHistory } = G;

  return (
    <Component data-file="match-history/MatchHistory" gameWidth={gameWidth}>
      <Log>
        {matchHistory.map((log, i) => {
          return (
            <div
              className="log-item"
              key={i}
              dangerouslySetInnerHTML={createMarkup(log)}
            />
          );
        })}
      </Log>
    </Component>
  );
}

// MatchHistory.propTypes = {
//   onClick: PropTypes.func
// };

const Component = styled.div`
  background: black;
  height: 100%;
  pointer-events: auto;
  position: absolute;
  top: 0;
  /* width: ${p => `calc(${p.gameWidth}px / 5.5)`}; */
  width: 300px;
  z-index: 100;
  box-sizing: border-box;

  color: white;
  font-size: 12px;
  overflow: hidden;
  font-family: 'Verdana', sans-serif;
`;

const Log = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 40px 20px 0;

  p {
    margin: 0;
  }

  .log-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .log-item + .log-item {
    margin: 12px 0 0;
  }

  .timestamp {
    opacity: 0.725;
    display: inline-block;
    min-width: 70px;
    font-size: 10px;
    line-height: 1.5;
    position: relative;
    top: 1px;
    letter-spacing: 0.03em;
  }

  .message {
    display: inline-block;
    line-height: 1.5;
  }

  /* prettier-ignore */
  .card-name {
    cursor: pointer;
    display: inline-block;
    font-family: 'Carter One', sans-serif;
    &[data-rarity='${RARITY[0]}'] { color: #fdfdfd; }
    &[data-rarity='${RARITY[0]}'] { color: #fdfdfd; }
    &[data-rarity='${RARITY[2]}'] { color: #23cbf2; }
    &[data-rarity='${RARITY[3]}'] { color: #4ae329; }
    &[data-rarity='${RARITY[4]}'] { color: #db24f3; }
    &[data-rarity='${RARITY[5]}'] { color: #f42226; }
  }
`;
