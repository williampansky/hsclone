import React from 'react';
import PropTypes from 'prop-types';

// styles
import css from './avatar.module.scss';

export default function TheirAvatar({ G, moves, theirID, src }) {
  const { health, canBeAttacked } = G;
  const THEIR_HEALTH = health[theirID];
  const CAN_BE_ATTACKED = canBeAttacked[theirID];

  return (
    <div
      data-file="TheirAvatar"
      className={[
        css['player-avatar'],
        css['their-avatar'],
        CAN_BE_ATTACKED ? css['player-avatar--can_be_attacked'] : ''
      ].join(' ')}
      // onClick={() => handleClick()}
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
  theirID: PropTypes.string,
  src: PropTypes.string
};

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
