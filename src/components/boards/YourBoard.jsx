import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';
import SPELLTYPE from 'enums/spellType.enums';

// child components
import SpellSlot from 'components/board-slots/SpellSlot';
import YourAvatar from 'components/avatars/YourAvatar';
import YourBoardPlayArea from 'components/board-play-areas/YourBoardPlayArea';
import YourDeck from 'components/decks/YourDeck';

export default function YourBoard({ G, ctx, moves, isActive, yourID }) {
  const { counts, playerClass, selectedCardObject, cardBack } = G;
  const { playCard } = moves;

  const yourCardBackImageSrc = cardBack[yourID];
  const yourDeckLength = counts[yourID].deck;
  const selectedCard = selectedCardObject[yourID];
  const cardId = selectedCard && selectedCard.id;
  const cardUUID = selectedCard && selectedCard.uuid;
  const spellType = selectedCard && selectedCard.spellType;

  function castGlobalSpell(index = 0, uuid = cardUUID, id = cardId) {
    return playCard(index, uuid, id);
  }

  return (
    <div data-file="boards/YourBoard" className={'your-board'}>
      {spellType === SPELLTYPE[1] ? (
        <SpellSlot index={0} onClick={() => castGlobalSpell()} />
      ) : null}

      <YourBoardPlayArea
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        board="YourBoard"
        yourID={yourID}
      />

      <YourDeck
        board="YourBoard"
        cardBackSrc={yourCardBackImageSrc}
        length={yourDeckLength}
      />

      <YourAvatar
        G={G}
        moves={moves}
        yourID={yourID}
        src={avatars[playerClass[yourID]]}
      />
    </div>
  );
}

YourBoard.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  yourID: PropTypes.string
};
