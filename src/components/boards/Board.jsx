import React from 'react';
import PropTypes from 'prop-types';

// child components
import EndTurnButton from 'components/end-turn/EndTurn';
import TheirBoard from 'components/boards/TheirBoard';
import YourBoard from 'components/boards/YourBoard';
// import LightningStrike from 'components/animations/targeted/LightningStrike';
import GlobalAnimations from 'components/animations/global/GlobalAnimations';

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
  return (
    <div data-file="boards/Board" className={'board'}>
      <TheirBoard
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        playerID={playerID}
        isActive={isActive}
        theirID={theirID}
        yourID={yourID}
      />
      <EndTurnButton
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        isActive={isActive}
        yourID={yourID}
        theirID={theirID}
      />
      <YourBoard
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        playerID={playerID}
        isActive={isActive}
        yourID={yourID}
      />
      <GlobalAnimations G={G} ctx={ctx} moves={moves} />
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
