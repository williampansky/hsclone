import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';

// child components
import TheirPlayerArea from 'components/player-areas/TheirPlayerArea';
import TheirBoardPlayerArea from 'components/board-play-areas/TheirBoardPlayArea';
import Deck from 'components/decks/Deck';

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
      <TheirPlayerArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board="TheirBoard"
        theirID={theirID}
        yourID={yourID}
        avatars={avatars}
        playerClass={playerClass}
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

      <Deck
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
  isActive: PropTypes.bool,
  theirID: PropTypes.string,
  yourID: PropTypes.string
};
