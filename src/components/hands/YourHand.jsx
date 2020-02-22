import React from 'react';
import PropTypes from 'prop-types';

// child components
import PlayerEnergy from 'components/player-energy/PlayerEnergy';
import CardInteraction from 'components/interactions/cards/CardInteraction';
import WarcryObject from 'components/warcrys/WarcryObject';

export default function YourHand({ G, ctx, moves, isActive, yourID }) {
  const {
    counts,
    energy,
    players,
    selectedCardIndex,
    selectedCardObject,
    warcryObject
  } = G;

  const yourHand = players[yourID] && players[yourID].hand;
  const handLength = counts[yourID] && counts[yourID].hand;
  const cardIsSelected = selectedCardIndex[yourID];
  const selectedCardObj = selectedCardObject[yourID];
  const selectedCardCost = selectedCardObj && selectedCardObj.cost;
  const activeWarcryObject = warcryObject[yourID];

  return (
    <div
      data-file="hands/YourHand"
      data-number-of-cards={handLength}
      className={['hand', 'hands--your_hand'].join(' ')}
    >
      {selectedCardIndex[yourID] === 0 ? (
        <div
          data-index={0}
          className={['card-in-your-hand', 'card-placeholder'].join(' ')}
        />
      ) : null}

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
                data-index={index}
                className={['card-in-your-hand', 'card-placeholder'].join(' ')}
              />
            ) : null}
          </React.Fragment>
        );
      })}
      {activeWarcryObject && <WarcryObject data={activeWarcryObject} />}
      <PlayerEnergy energy={energy[yourID]} selectedCost={selectedCardCost} />
    </div>
  );
}

YourHand.propTypes = {
  G: PropTypes.shape({
    counts: PropTypes.object,
    energy: PropTypes.object,
    players: PropTypes.object,
    selectedCardIndex: PropTypes.object
  }),
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string
};
