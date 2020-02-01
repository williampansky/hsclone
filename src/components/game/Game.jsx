import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from '~/styles/game/game.scss';

export default function Game({ children }) {
  useEffect(() => {
    // playGame().then(resp => console.log(resp));
  }, []);

  return <div className={css.Game}>{children}</div>;
}

Game.propTypes = {
  children: PropTypes.node
};
