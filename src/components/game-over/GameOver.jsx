import React from 'react';
import PropTypes from 'prop-types';

export default function GameOver({ winner }) {
  return (
    <div data-file="GameOver" className={'game-over'}>
      <h1>Player {winner} wins!</h1>
    </div>
  );
}

GameOver.propTypes = {
  winner: PropTypes.string
};
