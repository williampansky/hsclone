import React from 'react';
import PropTypes from 'prop-types';

// child components
import CardInteraction from 'components/interactions/cards/CardInteraction';

export default function CardSelection({
  G,
  ctx,
  moves,
  isActive,
  yourID,
  array
}) {
  const { counts, energy, players, selectedCardIndex } = G;

  return (
    <div data-file="CardSelection" className="card-selection-modal">
      {array.map((card, index) => {
        return (
          <CardInteraction
            key={index}
            G={G}
            ctx={ctx}
            moves={moves}
            isActive={isActive}
            yourID={yourID}
            card={card}
            index={index}
            numberOfCards={array.length}
          />
        );
      })}
    </div>
  );
}

CardSelection.propTypes = {
  G: PropTypes.shape({
    counts: PropTypes.object,
    energy: PropTypes.object,
    players: PropTypes.object,
    selectedCardIndex: PropTypes.object
  }),
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string,
  array: PropTypes.array
};
