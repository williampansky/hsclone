import PropTypes from 'prop-types';
import css from '~/styles/game/components/board.scss';

export default function TheirBoard({ children }) {
  return (
    <div data-file="TheirBoard" className={css.TheirBoard}>
      {children}
    </div>
  );
}

TheirBoard.propTypes = {
  children: PropTypes.node
};
