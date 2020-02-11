import React, { useState, useEffect } from 'react';
import MinionCanAttack from './interactions/MinionCanAttack';
import MinionCanBeAttacked from './interactions/MinionCanBeAttacked';
import css from 'styles/interactions/minion-interactions.module.scss';
import useHover from 'hooks/useHover';
import MECHANICS from '../enums/mechanics.enums';

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

  let CAN_BE_ATTACKED = false;
  let SIBLING_HAS_GUARD = false;
  G.boards[previousPlayer].forEach(slot => {
    if (slot.hasGuard === true) SIBLING_HAS_GUARD = true;
  });

  const CAN_ATTACK =
    isActive &&
    board === 'Yours' &&
    G.boards[currentPlayer][index].canAttack === true &&
    attack !== 0;

  const HAS_GUARD = mechanics.find(m => m === MECHANICS[4]);
  const HAS_STAMPEDE = mechanics.find(m => m === MECHANICS[5]);
  const HAS_WARCRY = mechanics.find(m => m === MECHANICS[6]);

  if (
    isActive &&
    board === 'Theirs' &&
    !SIBLING_HAS_GUARD &&
    G.boards[previousPlayer][index].canBeAttacked === true &&
    G.selectedMinionIndex[ctx.currentPlayer] !== null
  )
    CAN_BE_ATTACKED = true;
  else if (
    isActive &&
    board === 'Theirs' &&
    HAS_GUARD &&
    G.boards[previousPlayer][index].canBeAttacked === true &&
    G.selectedMinionIndex[ctx.currentPlayer] !== null
  )
    CAN_BE_ATTACKED = true;

  const IS_ATTACKING =
    CAN_ATTACK && G.selectedMinionIndex[ctx.currentPlayer] === index;

  const WARCRY_IS_ACTIVE = G.warcryObject[ctx.currentPlayer] !== null;

  function handleClick(event) {
    moves.hoverOverCardInHand(null, null);
    moves.selectPlayableCard(null, null);

    if (WARCRY_IS_ACTIVE) {
      return moves.castWarycrySpell(
        G.warcryObject[ctx.currentPlayer],
        'minion',
        index
      );
    }

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
        CAN_BE_ATTACKED ? css['minion--can_be_attacked'] : '',
        WARCRY_IS_ACTIVE ? css['minion--can_be_attacked'] : '',
        HAS_GUARD ? css['minion--has_guard'] : '',
        HAS_STAMPEDE ? css['minion--has_stampede'] : '',
        HAS_WARCRY ? css['minion--has_warcry'] : '',
        IS_ATTACKING ? css['minion--is_attacking'] : ''
      ].join(' ')}
      data-file="systems/MinionInteractionLayer"
      data-render={render}
      ref={hoverRef}
      onClick={event => handleClick(event)}
    />
  );
}
