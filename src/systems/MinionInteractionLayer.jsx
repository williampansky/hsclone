import React, { useState, useEffect } from 'react';
import MinionCanAttack from './interactions/MinionCanAttack';
import MinionCanBeAttacked from './interactions/MinionCanBeAttacked';
import css from 'styles/interactions/minion-interactions.module.scss';
import useHover from 'hooks/useHover';

export default function MinionInteractionLayer({
  board,
  minionData,
  index,
  onClick,
  render,
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
  credentials
}) {
  const [hoverRef, isHovered] = useHover();
  const {
    artist,
    attack,
    cardClass,
    collectible,
    cost,
    elite,
    entourage,
    flavor,
    goldenImageSrc,
    health,
    hideStats,
    howToEarn,
    howToEarnGolden,
    id,
    imageSrc,
    mechanics,
    name,
    playRequirements,
    race,
    rarity,
    set,
    sounds,
    spellDamage,
    targetingArrowText,
    text,
    type
  } = minionData;

  const players = G.turnOrder;
  const currentPlayer = ctx.currentPlayer;
  const previousPlayer = players.find(p => p !== currentPlayer);

  const CAN_BE_ATTACKED =
    isActive &&
    board === 'Theirs' &&
    G.boards[previousPlayer][`slot${index}`].canBeAttacked === true &&
    G.selectedMinionIndex[ctx.currentPlayer] !== null;

  const CAN_ATTACK =
    isActive &&
    board === 'Yours' &&
    G.boards[currentPlayer][`slot${index}`].canAttack === true &&
    attack !== 0;

  const HAS_STAMPEDE = mechanics.find(m => m === 'STAMPEDE');
  const HAS_GUARD = mechanics.find(m => m === 'GUARD');

  const IS_ATTACKING =
    CAN_ATTACK && G.selectedMinionIndex[ctx.currentPlayer] === index;

  function handleClick(event) {
    moves.hoverOverCardInHand(null, null);
    moves.selectPlayableCard(null, null);

    if (CAN_ATTACK) {
      return G.selectedMinionIndex[currentPlayer] === index
        ? moves.selectMinionForAttack(null, null)
        : moves.selectMinionForAttack(minionData, index);
    }

    if (CAN_BE_ATTACKED) {
      return moves.attackMinion(index);
    }
  }

  return (
    <div
      className={[
        css['minion--interaction_layer'],
        CAN_ATTACK ? css['minion--can_attack'] : '',
        IS_ATTACKING ? css['minion--is_attacking'] : '',
        CAN_BE_ATTACKED ? css['minion--can_be_attacked'] : '',
        HAS_STAMPEDE ? css['minion--has_stampede'] : '',
        HAS_GUARD ? css['minion--has_guard'] : ''
      ].join(' ')}
      data-file="systems/MinionInteractionLayer"
      data-render={render}
      ref={hoverRef}
      onClick={event => handleClick(event)}
    />
  );
}
