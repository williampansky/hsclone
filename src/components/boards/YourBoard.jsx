import React from 'react';
import PropTypes from 'prop-types';

// configs
import avatars from 'config/avatars.config';
import SPELLTYPE from 'enums/spellType.enums';

// styles
import css from './board.module.scss';

// child components
import SpellSlot from 'components/board-slots/SpellSlot';
import YourAvatar from 'components/avatars/YourAvatar';
import YourBoardPlayArea from 'components/board-play-areas/YourBoardPlayArea';

export default function YourBoard({ G, ctx, moves, isActive, yourID }) {
  const { playerClass, selectedCardObject } = G;
  const { playCard } = moves;

  const selectedCard = selectedCardObject[yourID];
  const cardId = selectedCard && selectedCard.id;
  const spellType = selectedCard && selectedCard.spellType;

  function castGlobalSpell(index = 0, id = cardId) {
    return playCard(index, id);
  }

  return (
    <div data-file="boards/YourBoard" className={css['your-board']}>
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
