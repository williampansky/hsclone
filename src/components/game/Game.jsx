import PropTypes from 'prop-types';
import { useEffect } from 'react';
import playGame from 'lib/game/play-game';

export default function Game({ children }) {
  useEffect(() => {
    // playGame().then(resp => console.log(resp));
  }, []);

  return <div id="game">{children}</div>;
}

Game.propTypes = {
  children: PropTypes.node
};
