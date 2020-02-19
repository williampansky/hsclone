import React from 'react';
import PropTypes from 'prop-types';

export default function TheirAvatar({ G, moves, src, theirID, yourID }) {
  const { health, playerCanBeAttacked, selectedMinionIndex, warcryObject } = G;
  const { attackPlayer } = moves;

  const THEIR_HEALTH = health[theirID];
  const CAN_BE_ATTACKED = playerCanBeAttacked[theirID];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[yourID] !== null;
  // const ATTACKING_WITH_WARCRY = warcryObject[yourID];

  function handleClick() {
    if (ATTACKING_MINION_INDEX) return attackPlayer();
  }

  return (
    <div
      data-file="avatars/TheirAvatar"
      className={[
        'player-avatar',
        'their-avatar',
        CAN_BE_ATTACKED && ATTACKING_MINION_INDEX
          ? 'player-avatar--can_be_attacked'
          : ''
      ].join(' ')}
      onClick={() => handleClick()}
    >
      <div className={['player-health'].join(' ')}>{THEIR_HEALTH}</div>
      <div className={'avatar-image-wrapper'}>
        {src && (
          <div
            className={'avatar-image'}
            style={{ backgroundImage: `url(${src})` }}
          />
        )}
      </div>
    </div>
  );
}

TheirAvatar.propTypes = {
  G: PropTypes.object,
  moves: PropTypes.object,
  src: PropTypes.string,
  theirID: PropTypes.string,
  yourID: PropTypes.string
};

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
