import React from 'react';
import PropTypes from 'prop-types';

export default function GameOver({ yourID, theirID, winner }) {
  return (
    <div data-file="GameOver" className={'game-over'}>
      {winner === yourID ? (
        <h1>Victory is yours!</h1>
      ) : (
        <h1>You have been defeated!</h1>
      )}
    </div>
  );
}

GameOver.propTypes = {
  yourID: PropTypes.string,
  theirID: PropTypes.string,
  winner: PropTypes.string
};
