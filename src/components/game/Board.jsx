import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from '~/styles/game/components/board.scss';

const Board = ({ children }) => {
  return (
    <div data-file="Board" className={css.Board}>
      {children}
    </div>
  );
};

Board.propTypes = {
  children: PropTypes.node.isRequired
};

export default Board;
