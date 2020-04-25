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
import Deck from 'components/decks/Deck';
import SpellSlot from 'components/board-slots/SpellSlot';
import WeaponSlot from 'components/board-slots/WeaponSlot';
import SPELLTYPE from 'enums/spellType.enums';
import TYPE from 'enums/type.enums';
import SpellObject from 'components/spells/SpellObject';
import WarcryObject from 'components/warcrys/WarcryObjectV2';
import ItemSlot from 'components/board-slots/ItemSlot';

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
  theirID,
  gameWidth
}) {
  const {
    cardBack,
    counts,
    energy,
    playerCanAttack,
    playerCanUseClassSkill,
    playerAttackValue,
    playerIsAttacking,
    playerClass,
    playerWeapon,
    selectedCardObject,
    selectedCardType,
    selectedCardSpellType,
    warcryObject,
    spellObject
  } = G;

  const { playCard } = moves;

  const selectedCard = selectedCardObject[yourID];
  const cardId = selectedCard && selectedCard.id;
  const cardUUID = selectedCard && selectedCard.uuid;
  const cardType = selectedCard && selectedCardType[yourID];
  const spellType = selectedCard && selectedCardSpellType[yourID];
  const spellObjectId = spellObject[yourID] && spellObject[yourID].id;

  function castGlobalSpell(index = 0, uuid = cardUUID, id = cardId) {
    return playCard(index, uuid, id);
  }

  function equipPlayerWeapon(index = 0, uuid = cardUUID, id = cardId) {
    return playCard(index, uuid, id);
  }

  return (
    <div
      data-file="boards/Board"
      className={['board', spellObjectId === 'GAME_010' ? 'GAME_010' : ''].join(
        ' '
      )}
    >
      {cardType === TYPE[2] && spellType === SPELLTYPE[1] ? (
        <ItemSlot
          index={0}
          gameWidth={1920}
          onClick={() => castGlobalSpell()}
        />
      ) : null}

      {cardType === TYPE[3] && spellType === SPELLTYPE[1] ? (
        <SpellSlot
          index={0}
          gameWidth={1920}
          onClick={() => castGlobalSpell()}
        />
      ) : null}

      {cardType === TYPE[4] ? (
        <WeaponSlot
          index={0}
          gameWidth={1920}
          onClick={() => equipPlayerWeapon()}
        />
      ) : null}
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
      {/* {warcryObject[yourID] ? (
        <WarcryObject data={warcryObject[yourID]} />
      ) : null} */}
      {/* {spellObject[yourID] ? <SpellObject data={spellObject[yourID]} /> : null} */}
      {/* <Deck
        board={PLAYER_BOARDS[1]}
        cardBackSrc={cardBack[yourID]}
        length={counts[yourID].deck}
      /> */}
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
  theirID: PropTypes.string,
  gameWidth: PropTypes.number
};
