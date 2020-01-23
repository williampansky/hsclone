import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from 'components/Card/Card.component';
import CardDragLayer from 'systems/CardDragLayer';

const YourHand = () => {
  const yourCards = useSelector(s => s.yourHand);
  const { length } = yourCards;

  return (
    <Component
      data-layout="YourHand"
      data-length={length}
      numberOfCardsInHand={length}
    >
      {yourCards.map(card => {
        const {
          artist,
          attack,
          cardClass,
          collectible,
          cost,
          elite,
          entourage,
          flavor,
          health,
          hideStats,
          howToEarn,
          howToEarnGolden,
          id,
          images,
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
        } = card;

        return (
          <CardDragLayer
            key={id}
            artist={artist}
            attack={attack}
            cardClass={cardClass}
            collectible={collectible}
            cost={cost}
            elite={elite}
            entourage={entourage}
            flavor={flavor}
            health={health}
            hideStats={hideStats}
            howToEarn={howToEarn}
            howToEarnGolden={howToEarnGolden}
            id={id}
            images={images}
            mechanics={mechanics}
            name={name}
            playRequirements={playRequirements}
            race={race}
            rarity={rarity}
            set={set}
            sounds={sounds}
            spellDamage={spellDamage}
            targetingArrowText={targetingArrowText}
            text={text}
            type={type}
          >
            <Card
              artist={artist}
              attack={attack}
              cardClass={cardClass}
              collectible={collectible}
              cost={cost}
              elite={elite}
              entourage={entourage}
              flavor={flavor}
              health={health}
              hideStats={hideStats}
              howToEarn={howToEarn}
              howToEarnGolden={howToEarnGolden}
              id={id}
              images={images}
              mechanics={mechanics}
              name={name}
              playRequirements={playRequirements}
              race={race}
              rarity={rarity}
              set={set}
              sounds={sounds}
              spellDamage={spellDamage}
              targetingArrowText={targetingArrowText}
              text={text}
              type={type}
            />
          </CardDragLayer>
        );
      })}
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  & > div {
    position: relative;
    top: -20px;
  }

  & > div + div {
    margin-left: 10px;
  }
`;

export default YourHand;
