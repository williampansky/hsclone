import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';

// styles
import css from './board.module.scss';

// child components
import TheirAvatar from 'components/avatars/TheirAvatar';

export default function TheirBoard({ G, ctx, moves, theirID, yourID }) {
  const { playerClass } = G;

  return (
    <div data-file="boards/TheirBoard" className={css['their-board']}>
      <TheirAvatar
        G={G}
        moves={moves}
        src={avatars[playerClass[theirID]]}
        theirID={theirID}
        yourID={yourID}
      />
    </div>
  );
}

TheirBoard.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  theirID: PropTypes.string
};
