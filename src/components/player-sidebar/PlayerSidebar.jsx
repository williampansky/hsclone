/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import createMarkup from 'utils/createMarkup';
import RARITY from 'enums/rarity.enums';
import EndTurnButton from 'components/end-turn/EndTurn';

export default function PlayerSidebar({
  G,
  ctx,
  moves,
  events,
  isActive,
  yourID,
  theirID,
  gameWidth
}) {
  const { matchHistory } = G;

  return (
    <Component data-file="player-sidebar/PlayerSidebar" gameWidth={gameWidth}>
      <EndTurnButton
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        isActive={isActive}
        yourID={yourID}
        theirID={theirID}
      />
    </Component>
  );
}

// MatchHistory.propTypes = {
//   onClick: PropTypes.func
// };

const Component = styled.div`
  height: 100%;
  pointer-events: auto;
  position: absolute;
  top: 0;
  right: 0;
  /* width: ${p => `calc(${p.gameWidth}px / 5.5)`}; */
  width: 300px;
  box-sizing: border-box;
  color: white;
  font-size: 12px;
  overflow: hidden;
  font-family: 'Verdana', sans-serif;
  margin: 0 0 0 auto;
  z-index: 300;
`;
