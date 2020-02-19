import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';

// child components
import TheirAvatar from 'components/avatars/TheirAvatar';
import TheirBoardPlayerArea from 'components/board-play-areas/TheirBoardPlayArea';

export default function TheirBoard({
  G,
  ctx,
  moves,
  isActive,
  theirID,
  yourID
}) {
  const { playerClass } = G;

  return (
    <div data-file="boards/TheirBoard" className={'their-board'}>
      <TheirAvatar
        G={G}
        moves={moves}
        isActive={isActive}
        src={avatars[playerClass[theirID]]}
        theirID={theirID}
        yourID={yourID}
      />
      <TheirBoardPlayerArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board="TheirBoard"
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
