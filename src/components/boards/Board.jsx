import React from 'react';
import PropTypes from 'prop-types';

// child components
import EndTurnButton from 'components/end-turn/EndTurn';
import TheirBoard from 'components/boards/TheirBoard';
import YourBoard from 'components/boards/YourBoard';
// import LightningStrike from 'components/animations/targeted/LightningStrike';
import GlobalAnimations from 'components/animations/global/GlobalAnimations';
import YourAvatar from 'components/avatars/YourAvatar';
import TheirAvatar from 'components/avatars/TheirAvatar';
import YourBoardPlayArea from 'components/board-play-areas/YourBoardPlayArea';
import TheirBoardPlayerArea from 'components/board-play-areas/TheirBoardPlayArea';
import PLAYER_BOARDS from 'enums/playerBoards.enums';

export default function Board({
  G,
  ctx,
  moves,
  events,
  reset,
  undo,
  redo,
  step,
  log,
  gameID,
  playerID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials,
  yourID,
  theirID
}) {
  const {
    energy,
    playerCanAttack,
    playerCanUseClassSkill,
    playerAttackValue,
    playerIsAttacking,
    playerClass,
    playerWeapon
  } = G;

  return (
    <div data-file="boards/Board" className={'board'}>
      {/* <TheirBoard
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        playerID={playerID}
        isActive={isActive}
        theirID={theirID}
        yourID={yourID}
      /> */}
      {/* <EndTurnButton
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        isActive={isActive}
        yourID={yourID}
        theirID={theirID}
      /> */}
      {/* <YourBoard
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        playerID={playerID}
        isActive={isActive}
        yourID={yourID}
      /> */}
      <TheirAvatar
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={PLAYER_BOARDS[2]}
        theirID={theirID}
        yourID={yourID}
        playerClass={playerClass[theirID]}
      />
      <TheirBoardPlayerArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={PLAYER_BOARDS[2]}
        theirID={theirID}
        yourID={yourID}
      />
      <YourBoardPlayArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={PLAYER_BOARDS[1]}
        theirID={theirID}
        yourID={yourID}
      />
      <YourAvatar
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={PLAYER_BOARDS[1]}
        yourID={yourID}
        playerClass={playerClass[yourID]}
        playerIsAttacking={playerIsAttacking[yourID]}
      />
    </div>
  );
}

Board.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  events: PropTypes.object,
  reset: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
  step: PropTypes.func,
  log: PropTypes.array,
  gameID: PropTypes.string,
  playerID: PropTypes.string,
  gameMetadata: PropTypes.object,
  isActive: PropTypes.bool,
  isMultiplayer: PropTypes.bool,
  isConnected: PropTypes.bool,
  credentials: PropTypes.string,
  yourID: PropTypes.string,
  theirID: PropTypes.string
};
