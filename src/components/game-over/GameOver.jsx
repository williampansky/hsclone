import React from 'react';
import PropTypes from 'prop-types';
import css from './game-over.module.scss';

export default function GameOver({ winner }) {
  return (
    <div data-file="GameOver" className={css['game-over']}>
      <h1>Player {winner} wins!</h1>
    </div>
  );
}

GameOver.propTypes = {
  winner: PropTypes.string
};
