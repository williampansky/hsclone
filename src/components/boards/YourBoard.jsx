import React from 'react';
import PropTypes from 'prop-types';
import css from './board.module.scss';

export default function YourBoard({ children }) {
  return (
    <div data-file="boards/YourBoard" className={css['your-board']}>
      {children}
    </div>
  );
}

YourBoard.propTypes = {
  children: PropTypes.node
};
