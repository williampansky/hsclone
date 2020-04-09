import React from 'react';
import PropTypes from 'prop-types';

// child components
import PlayerEnergy from 'components/player-energy/PlayerEnergy';
import CardInteraction from 'components/interactions/cards/CardInteraction';
import SpellObject from 'components/spells/SpellObject';
import WarcryObject from 'components/warcrys/WarcryObject';
import styled from 'styled-components';

export default function YourHand({
  G,
  ctx,
  moves,
  isActive,
  yourID,
  gameWidth
}) {
  const {
    counts,
    energy,
    players,
    selectedCardIndex,
    selectedCardObject,
    spellObject,
    warcryObject
  } = G;

  const yourHand = players[yourID] && players[yourID].hand;
  const handLength = counts[yourID] && counts[yourID].hand;
  const cardIsSelected = selectedCardIndex[yourID];
  const selectedCardObj = selectedCardObject[yourID];
  const selectedCardCost = selectedCardObj && selectedCardObj.cost;
  const activeSpellObject = spellObject[yourID];
  const activeWarcryObject = warcryObject[yourID];

  return (
    <Component
      data-file="hands/YourHand"
      data-number-of-cards={handLength}
      gameWidth={gameWidth}
    >
      {/* {selectedCardIndex[yourID] === 0 ? (
        <div
          data-index={0}
          className={['card-in-your-hand', 'card-placeholder'].join(' ')}
        />
      ) : null} */}

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

            {/* {cardIsSelected && selectedCardIndex[yourID] === index ? (
              <div
                data-index={index}
                className={['card-in-your-hand', 'card-placeholder'].join(' ')}
              />
            ) : null} */}
          </React.Fragment>
        );
      })}
    </Component>
  );
}

const Component = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
  width: ${p => `${p.gameWidth}px`};
  height: var(--board-yourHand-height);
  z-index: var(--board-yourHand-zIndex);
  bottom: var(--board-yourHand-height);
  z-index: 250;
`;

YourHand.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string,
  gameWidth: PropTypes.number
};
