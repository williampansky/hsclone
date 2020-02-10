import React from 'react';
import css from './avatar.module.scss';
import { getCardByID } from '../../lib/utils/get-card-by-id';

export default function TheirAvatar({
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
  theirID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials,
  src
}) {
  const CURRENT_PLAYER = ctx.currentPlayer;
  const THEIR_HEALTH = G.health[theirID];
  const THEIR_BOARD = G.boards[theirID];

  const selectedCardIdFromHand =
    G.players[CURRENT_PLAYER] &&
    G.players[CURRENT_PLAYER].hand &&
    G.players[CURRENT_PLAYER].hand[G.selectedCardIndex[CURRENT_PLAYER]];
  const selectedCardObj = getCardByID(selectedCardIdFromHand);
  const selectedCardType = selectedCardObj && selectedCardObj.type;

  const atkMinionIdx = G.selectedMinionIndex[CURRENT_PLAYER];
  const atkMinionObj = G.boards[CURRENT_PLAYER][`slot${atkMinionIdx}`];
  const atkMinionsAtk = atkMinionObj && atkMinionObj.minionData.attack;

  const CAN_BE_ATTACKED =
    isActive &&
    (G.selectedMinionIndex[CURRENT_PLAYER] !== null ||
      G.selectedCardIndex[CURRENT_PLAYER] !== null) &&
    THEIR_BOARD['slot1'].hasGuard !== false &&
    THEIR_BOARD['slot2'].hasGuard !== false &&
    THEIR_BOARD['slot3'].hasGuard !== false &&
    THEIR_BOARD['slot4'].hasGuard !== false &&
    THEIR_BOARD['slot5'].hasGuard !== false &&
    THEIR_BOARD['slot6'].hasGuard !== false &&
    THEIR_BOARD['slot7'].hasGuard !== false;

  const CARD_IS_MINION =
    G.selectedCardIndex[CURRENT_PLAYER] !== null &&
    selectedCardType === 'MINION';

  const CARD_IS_SPELL =
    G.selectedCardIndex[CURRENT_PLAYER] !== null &&
    selectedCardType === 'SPELL';

  function handleClick() {
    if (!CAN_BE_ATTACKED || CARD_IS_MINION) return;

    if (CARD_IS_SPELL)
      return moves.attackPlayerWithSpell(G.selectedCardIndex[CURRENT_PLAYER]);

    return moves.attackPlayer(theirID, atkMinionsAtk);
  }

  return (
    <div
      data-file="TheirAvatar"
      className={[
        css['player-avatar'],
        css['their-avatar'],
        !CARD_IS_MINION &&
          CAN_BE_ATTACKED &&
          css['player-avatar--can_be_attacked']
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

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
