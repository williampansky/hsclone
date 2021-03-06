import React from 'react';
import PropTypes from 'prop-types';
import CardBack from 'components/cards/CardBack';
import limitNumberWithinRange from 'lib/utils/range-limit';
import PLAYER_BOARDS from 'enums/playerBoards.enums';

export default function Deck({ board, cardBackSrc, length }) {
  return (
    <div data-file="decks/Deck" className={'deck'}>
      {Array.from(Array(limitNumberWithinRange(length, 3, 0))).map(
        (_, index) => {
          return (
            <div key={index} data-index={index} className={'deck__card'}>
              <CardBack imageSrc={cardBackSrc} />
            </div>
          );
        }
      )}

      <div className={'deck__count'}>{`${
        board === PLAYER_BOARDS[1] ? 'Your' : 'Their'
      } deck has ${length} cards left`}</div>
    </div>
  );
}

Deck.propTypes = {
  board: PropTypes.string,
  cardBackSrc: PropTypes.string,
  length: PropTypes.number
};
