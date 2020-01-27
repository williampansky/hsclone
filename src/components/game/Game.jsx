import PropTypes from 'prop-types';

export default function Game({ children }) {
  return <div id="game">{children}</div>;
}

Game.propTypes = {
  children: PropTypes.node
};
