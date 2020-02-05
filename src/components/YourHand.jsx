import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import CardInteractionLayer from '../systems/CardInteractionLayer';
import PlayerEnergy from './player-energy/PlayerEnergy';
import uid from 'utils/uid';

export default function YourHand(props) {
  const {
    allCards,
    G,
    ctx,
    ctx: { currentPlayer },
    playerID,
    moves
  } = props;
  const { counts, energy, players, selectedCardIndexObject } = G;
  const yourNumber = Number(playerID) === 0 ? 0 : 1;
  const yourTimer = counts[yourNumber].timer;

  // state
  // const [hoverRef, isHovered] = useHover();
  const [{ cards }, setCards] = useState({ cards: [] });

  const setCardsCallback = useCallback((incomingCards = []) => {
    // const newCardsForHand = incomingCards.map(cardId => {
    //   return {
    //     [uid()]: allCards[cardId]
    //   };
    // });

    // return cards === null
    //   ? setCards({
    //       cards: newCardsForHand
    //     })
    //   : setCards({
    //       cards: {
    //         cards,
    //         ...newCardsForHand
    //       }
    //     });

    const newCardsForHand = incomingCards.map(cardId => {
      return allCards[cardId];
    });

    return setCards({
      cards: [...cards, newCardsForHand].flat()
    });
  }, []);

  useEffect(() => {
    players[yourNumber] && setCardsCallback(players[yourNumber].hand);
  }, [G]);

  const energyObject = energy[yourNumber];

  return (
    <Component
      data-file="YourHand"
      data-number-of-cards={cards && cards.length}
    >
      {cards && cards.length
        ? cards.map((card, index) => {
            return (
              <CardInteractionLayer
                card={card}
                key={index}
                index={index}
                G={G}
                ctx={ctx}
                playerID={playerID}
                moves={moves}
                energy={energy}
                selectedCardIndexObject={selectedCardIndexObject}
              />
            );
          })
        : null}

      <PlayerEnergy energy={energyObject} />

      <Timer timer={yourTimer} />
    </Component>
  );
}

const Component = styled.div`
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
`;

const Timer = styled.div`
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
  background: yellow;
  width: ${props => percentage(props.timer, 750)}%;
  height: 2px;
  transition: 100ms width ease-out;
  z-index: 500;
`;

function percentageDivider(source) {
  const timerSource = source;
  const timerString = timerSource.toString();
  const split = timerString.split('');
  const remove = split.slice(0, 3);
  const newTimerString = remove.join().replace(/(,)/g, '');
  const newTimer = Number(newTimerString);
  return newTimer;
}

function percentage(num, divider) {
  // e.g. 75000 becomes 750
  // const timerSource = num;
  // const timerString = timerSource.toString();
  // const split = timerString.split('');
  // const remove = split.slice(0, 3);
  // const newTimerString = remove.join().replace(/(,)/g, '');
  // const newTimer = Number(newTimerString);
  // const divider = Number(
  //   num
  //     .toString()
  //     .split('')
  //     .slice(0, 3)
  //     .join()
  //     .replace(/(,)/g, '')
  // );

  return num / divider;
}
