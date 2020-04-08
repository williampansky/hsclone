/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import createMarkup from 'utils/createMarkup';
import RARITY from 'enums/rarity.enums';
import ScrollToBottom from 'react-scroll-to-bottom';

export default function MatchHistory({ G, ctx, gameWidth }) {
  const { matchHistory } = G;

  return (
    <Component data-file="match-history/MatchHistory" gameWidth={gameWidth}>
      <Log>
        <ScrollToBottom
          checkInterval={100}
          scrollViewClassName="_scrollable little"
          mode="bottom"
        >
          {matchHistory.map((log, i) => {
            return (
              <div
                className="log-item uk-animation-slide-top-small"
                key={i}
                dangerouslySetInnerHTML={createMarkup(log)}
              />
            );
          })}
        </ScrollToBottom>
      </Log>
    </Component>
  );
}

// MatchHistory.propTypes = {
//   onClick: PropTypes.func
// };

const Component = styled.div`
  height: calc(100% - var(--board-theirHand-height));
  pointer-events: auto;
  position: absolute;
  top: 0;
  /* width: ${p => `calc(${p.gameWidth}px / 5.5)`}; */
  width: 300px;
  box-sizing: border-box;

  color: white;
  font-size: 12px;
  overflow: hidden;
  font-family: 'Verdana', sans-serif;
  margin: var(--board-theirHand-height) 0 0;
  z-index: 300;

  &:before {
    background: linear-gradient(rgba(0, 0, 0, 0.85), transparent);
    bottom: auto;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 4.25%;
    pointer-events: none;
    z-index: 1;
  }
`;

const Log = styled.div`
  /* overflow-y: scroll;
  height: 100%;
  width: 100%; */
  /* padding: 40px 10px 0 10px; */
  cursor: default;
  height: 100%;

  & > div {
    height: 100%;
  }

  ._scrollable {
    padding: 40px 10px 0 10px;
  }

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

  .log-item:last-of-type {
    padding-bottom: 20px;
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

  button {
    background: red;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    bottom: 15px;
    transform: rotate(135deg) scale(1);
  }

  button:hover {
    background: red;
    transform: rotate(135deg) scale(1.25);
  }
`;
