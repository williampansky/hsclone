import React from 'react';
import PropTypes from 'prop-types';
import css from './board.module.scss';

export default function TheirBoard({ children }) {
  return (
    <div data-file="boards/TheirBoard" className={css['their-board']}>
      {children}
    </div>
  );
}

TheirBoard.propTypes = {
  children: PropTypes.node
};
