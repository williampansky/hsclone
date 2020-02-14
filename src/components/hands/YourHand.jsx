import React from 'react';
import PropTypes from 'prop-types';

// styles
import css from './hands.module.scss';
import interactionStyles from '../interactions/card-interactions.module.scss';

// child components
import PlayerEnergy from '../player-energy/PlayerEnergy';
import CardInteraction from 'components/interactions/CardInteraction';

export default function YourHand({ G, ctx, moves, isActive, yourID }) {
  const { counts, energy, players, selectedCardIndex } = G;
  const yourHand = players[yourID] && players[yourID].hand;
  const handLength = counts[yourID] && counts[yourID].hand;
  const cardIsSelected = selectedCardIndex[yourID];

  return (
    <div
      className={[css['hand'], css['hands--your_hand']].join(' ')}
      data-file="YourHand"
      data-number-of-cards={handLength}
    >
      {yourHand.map((card, index) => {
        return (
          <React.Fragment key={index}>
            <CardInteraction
              G={G}
              ctx={ctx}
              moves={moves}
              isActive={isActive}
              yourID={yourID}
              card={card}
              index={index}
              numberOfCards={handLength}
            />

            {cardIsSelected && selectedCardIndex[yourID] === index ? (
              <div
                className={[
                  interactionStyles['card-in-your-hand'],
                  interactionStyles['card-placeholder']
                ].join(' ')}
              />
            ) : null}
          </React.Fragment>
        );
      })}
      <PlayerEnergy energy={energy[yourID]} />
    </div>
  );
}

YourHand.propTypes = {
  G: PropTypes.shape({
    counts: PropTypes.object,
    energy: PropTypes.object,
    players: PropTypes.object
  }),
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string
};
