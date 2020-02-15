import React from 'react';
import PropTypes from 'prop-types';

// styles
import css from './avatar.module.scss';

export default function TheirAvatar({ G, moves, src, theirID, yourID }) {
  const { health, canBeAttacked, selectedMinionIndex, warcryObject } = G;
  const { attackPlayerWithMinion } = moves;

  const THEIR_HEALTH = health[theirID];
  const CAN_BE_ATTACKED = canBeAttacked[theirID];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[yourID] !== null;
  // const ATTACKING_WITH_WARCRY = warcryObject[yourID];

  function handleClick() {
    if (ATTACKING_MINION_INDEX) return attackPlayerWithMinion();
  }

  return (
    <div
      data-file="avatars/TheirAvatar"
      className={[
        css['player-avatar'],
        css['their-avatar'],
        CAN_BE_ATTACKED && ATTACKING_MINION_INDEX
          ? css['player-avatar--can_be_attacked']
          : ''
      ].join(' ')}
      onClick={() => handleClick()}
    >
      <div className={[css['player-health']].join(' ')}>{THEIR_HEALTH}</div>
      <div className={css['avatar-image-wrapper']}>
        {src && (
          <div
            className={css['avatar-image']}
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
