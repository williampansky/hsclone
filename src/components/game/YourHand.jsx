import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import server from '~/server';

import {
  addCardsToYourHand,
  initYourHand
} from 'features/yourHand/yourHand.slice';
import Card from 'components/game/card/Card';
import CardInteractionLayer from '~/systems/CardInteractionLayer';
import YourEnergy from './YourEnergy';

export default function YourHand() {
  const DEBUG_IS_PLAYABLE = false;

  const dispatch = useDispatch();
  const { cardsInHand } = useSelector(s => s.yourHand);
  const yourEnergy = useSelector(s => s.yourEnergy);

  React.useEffect(() => {
    cardsInHand.length === 0 && dispatch(initYourHand());
  }, [cardsInHand]);

  return (
    <div
      data-file="YourHand"
      data-number-of-cards={cardsInHand && cardsInHand.length}
    >
      {cardsInHand.map((card, index) => {
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

        const isPlayable = DEBUG_IS_PLAYABLE
          ? DEBUG_IS_PLAYABLE
          : cost <= yourEnergy;

        return (
          <CardInteractionLayer
            data={card}
            key={index}
            index={index}
            interactions={isPlayable && 'is-playable'}
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
          </CardInteractionLayer>
        );
      })}

      <YourEnergy />

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
