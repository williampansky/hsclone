import React from 'react';
import { useSelector } from 'react-redux';

import Card from 'components/game/card/Card';
import CardInteractionLayer from '~/systems/CardInteractionLayer';

export default function YourHand() {
  const yourCards = useSelector(s => s.yourHand);

  return (
    <div data-file="YourHand">
      {yourCards.map((card, index) => {
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
          <CardInteractionLayer key={index} index={index}>
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
          </CardInteractionLayer>
        );
      })}

      <style jsx>{`
        div {
          align-items: center;
          background: var(--board-yourHand-background-color);
          box-sizing: border-box;
          display: flex;
          flex-flow: row nowrap;
          height: var(--board-yourHand-height);
          justify-content: center;
          position: relative;
          width: 100vw;
          z-index: var(--board-yourHand-zIndex);
        }
      `}</style>
    </div>
  );
}
