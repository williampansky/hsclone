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
            <div className="log-message" key={i}>
              <p dangerouslySetInnerHTML={createMarkup(log)} />
            </div>
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
  width: ${p => `calc(${p.gameWidth}px / 6)`};
  z-index: 100;
  box-sizing: border-box;

  color: white;
  font-size: 12px;
  overflow: hidden;
  font-family: sans-serif;
`;

const Log = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 40px 20px 0;

  p {
    margin: 0;
  }

  .log-message + .log-message {
    margin: 4px 0 0;
  }

  .timestamp {
    opacity: 0.725;
  }

  /* prettier-ignore */
  .card-name {
    cursor: pointer;
    &[data-rarity='${RARITY[0]}'] { color: #fdfdfd; }
    &[data-rarity='${RARITY[0]}'] { color: #fdfdfd; }
    &[data-rarity='${RARITY[2]}'] { color: #23cbf2; }
    &[data-rarity='${RARITY[3]}'] { color: #4ae329; }
    &[data-rarity='${RARITY[4]}'] { color: #db24f3; }
    &[data-rarity='${RARITY[5]}'] { color: #f42226; }
  }
`;
