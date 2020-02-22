import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';

// child components
import TheirAvatar from 'components/avatars/TheirAvatar';
import TheirBoardPlayerArea from 'components/board-play-areas/TheirBoardPlayArea';
import TheirDeck from 'components/decks/YourDeck';

export default function TheirBoard({
  G,
  ctx,
  moves,
  isActive,
  theirID,
  yourID
}) {
  const { counts, playerClass, cardBack } = G;
  const theirDeckLength = counts[theirID].deck;

  const theirCardBackImageSrc = cardBack[theirID];

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

      <TheirDeck
        board="TheirBoard"
        cardBackSrc={theirCardBackImageSrc}
        length={theirDeckLength}
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
