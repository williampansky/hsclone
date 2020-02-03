import React from 'react';
import PropTypes from 'prop-types';
import css from './board.module.scss';

const Board = ({ children }) => {
  return (
    <div data-file="Board" className={css['board']}>
      {children}
    </div>
  );
};

Board.propTypes = {
  children: PropTypes.node.isRequired
};

export default Board;
