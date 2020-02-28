import React from 'react';
import PropTypes from 'prop-types';
import PlayerHealth from 'components/player-health/PlayerHealth';
import AvatarInteraction from 'components/interactions/avatars/AvatarInteraction';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

export default function TheirAvatar({
  G,
  ctx,
  moves,
  isActive,
  board,
  theirID,
  yourID,
  src
}) {
  const {
    health,
    playerShieldPoints,
    playerCanBeAttacked,
    playerCanBeHealed,
    selectedMinionIndex,
    warcryObject
  } = G;
  const { attackPlayer, castTargetedWarcryEffect } = moves;
  const THEIR_HEALTH = health[theirID];
  const THEIR_SHIELD = playerShieldPoints[theirID];

  const canBeAttacked = playerCanBeAttacked[theirID];

  const attackingMinionIndex = selectedMinionIndex[yourID] !== null;
  const activeWarcryObject = warcryObject[yourID] !== null;

  const canBeAttackedByMinion = canBeAttacked && attackingMinionIndex;
  const canBeAttackedByWarcry = canBeAttacked && activeWarcryObject;

  return (
    <div
      data-file="avatars/TheirAvatar"
      className={['player-avatar', 'their-avatar', 'effect--bezel'].join(' ')}
    >
      <PlayerHealth
        health={THEIR_HEALTH}
        player="TheirHealth"
        shieldPoints={THEIR_SHIELD}
      />
      <div className={'avatar-image-wrapper'}>
        {src && (
          <div
            className={'avatar-image'}
            style={{ backgroundImage: `url(${src})` }}
          />
        )}
      </div>

      <AvatarInteraction
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board={board}
        theirID={theirID}
        yourID={yourID}
        playerCanBeAttacked={playerCanBeAttacked[theirID]}
        playerCanBeHealed={playerCanBeHealed[theirID]}
      />
    </div>
  );
}

TheirAvatar.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  board: PropTypes.string,
  theirID: PropTypes.string,
  yourID: PropTypes.string,
  src: PropTypes.string
};

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
