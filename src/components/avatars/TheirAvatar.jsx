import React from 'react';
import PropTypes from 'prop-types';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import PlayerHealth from 'components/avatars/PlayerHealth';
import AvatarInteraction from 'components/interactions/avatars/AvatarInteraction';

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
  const CONTEXT = WARCRY_TARGET_CONTEXT;
  const {
    health,
    playerCanBeAttacked,
    playerCanBeHealed,
    selectedMinionIndex,
    warcryObject
  } = G;
  const { attackPlayer, castTargetedWarcryEffect } = moves;
  const THEIR_HEALTH = health[theirID];

  const canBeAttacked = playerCanBeAttacked[theirID];

  const attackingMinionIndex = selectedMinionIndex[yourID] !== null;
  const activeWarcryObject = warcryObject[yourID] !== null;

  const canBeAttackedByMinion = canBeAttacked && attackingMinionIndex;
  const canBeAttackedByWarcry = canBeAttacked && activeWarcryObject;
  const CAN_BE_ATTACKED = canBeAttackedByMinion || canBeAttackedByWarcry;

  function handleClick() {
    if (CAN_BE_ATTACKED) {
      if (canBeAttackedByMinion) return attackPlayer();
      if (canBeAttackedByWarcry) return castTargetedWarcryEffect(CONTEXT[2]);
    }
  }

  return (
    <div
      data-file="avatars/TheirAvatar"
      className={['player-avatar', 'their-avatar', 'effect--bezel'].join(' ')}
    >
      {CAN_BE_ATTACKED && (
        <div
          className={'player-avatar--can_be_attacked'}
          onClick={() => handleClick()}
        />
      )}

      <PlayerHealth health={THEIR_HEALTH} player="TheirHealth" />
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
