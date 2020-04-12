import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MatchStats({ G, theirID, yourID }) {
  const { counts } = G;

  return (
    <Component data-file="player-sidebar/MatchStats">
      <div className={`row`}>
        <div className={`item`}>
          <span className={`item__label`}>Your deck</span>
          <span className={`text__value`}>{G.counts[yourID].deck}</span>
        </div>
        <div className={`item`}>
          <span className={`item__label`}>Your deck</span>
          <span className={`text__value`}>{G.counts[yourID].hand}</span>
        </div>
      </div>
      <div className={`row`}>
        <div className={`item`}>
          <span className={`item__label`}>Their deck</span>
          <span className={`text__value`}>{G.counts[theirID].deck}</span>
        </div>
        <div className={`item`}>
          <span className={`item__label`}>Their deck</span>
          <span className={`text__value`}>{G.counts[theirID].hand}</span>
        </div>
      </div>
    </Component>
  );
}

MatchStats.propTypes = {
  G: PropTypes.object,
  theirID: PropTypes.string,
  yourID: PropTypes.string
};

const Component = styled.div`
  font-size: 18px;
  padding: 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: default;

  .row {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .item {
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }

  .item__label {
    font-family: 'Verdana', monospace;
    font-size: 0.5em;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .text__value {
    font-size: 1em;
  }
`;
