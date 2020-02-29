import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';
import SPELLTYPE from 'enums/spellType.enums';
import TYPE from 'enums/type.enums';

// child components
import Deck from 'components/decks/Deck';
import SpellSlot from 'components/board-slots/SpellSlot';
import WeaponSlot from 'components/board-slots/WeaponSlot';
import YourBoardPlayArea from 'components/board-play-areas/YourBoardPlayArea';
import YourPlayerArea from 'components/player-areas/YourPlayerArea';

export default function YourBoard({ G, ctx, moves, isActive, yourID }) {
  const { counts, playerClass, selectedCardObject, cardBack } = G;
  const { playCard } = moves;

  const yourCardBackImageSrc = cardBack[yourID];
  const yourDeckLength = counts[yourID].deck;
  const selectedCard = selectedCardObject[yourID];
  const cardId = selectedCard && selectedCard.id;
  const cardUUID = selectedCard && selectedCard.uuid;
  const cardType = selectedCard && selectedCard.type;
  const spellType = selectedCard && selectedCard.spellType;

  function castGlobalSpell(index = 0, uuid = cardUUID, id = cardId) {
    return playCard(index, uuid, id);
  }

  function equipPlayerWeapon(index = 0, uuid = cardUUID, id = cardId) {
    return playCard(index, uuid, id);
  }

  return (
    <div data-file="boards/YourBoard" className={'your-board'}>
      {cardType === TYPE[3] && spellType === SPELLTYPE[1] ? (
        <SpellSlot index={0} onClick={() => castGlobalSpell()} />
      ) : null}

      {cardType === TYPE[4] ? (
        <WeaponSlot index={0} onClick={() => equipPlayerWeapon()} />
      ) : null}

      <YourBoardPlayArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board="YourBoard"
        yourID={yourID}
      />

      <Deck
        board="YourBoard"
        cardBackSrc={yourCardBackImageSrc}
        length={yourDeckLength}
      />

      <YourPlayerArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board="YourBoard"
        yourID={yourID}
        avatars={avatars}
        playerClass={playerClass}
      />
    </div>
  );
}

YourBoard.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string
};
