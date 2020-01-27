import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Board = ({ children }) => {
  return (
    <div data-file="Board">
      {children}
      <style jsx>{`
        div {
          box-sizing: border-box;
          background: black;
          height: calc(100vh - var(--board-players-hands-height));
          overflow: auto;
          width: 100vw;
        }
      `}</style>
    </div>
  );
};

Board.propTypes = {
  children: PropTypes.node.isRequired
};

export default Board;
