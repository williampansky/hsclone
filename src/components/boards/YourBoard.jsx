import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';

// styles
import css from './board.module.scss';

// child components
import YourAvatar from 'components/avatars/YourAvatar';

export default function YourBoard({ G, ctx, moves, yourID }) {
  const { playerClass } = G;

  return (
    <div data-file="boards/YourBoard" className={css['your-board']}>
      <YourAvatar
        G={G}
        moves={moves}
        yourID={yourID}
        src={avatars[playerClass[yourID]]}
      />
    </div>
  );
}

YourBoard.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  yourID: PropTypes.string
};
