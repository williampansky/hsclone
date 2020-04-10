import React from 'react';
import PropTypes from 'prop-types';

// child components
import PlayerEnergy from 'components/player-energy/PlayerEnergy';
import CardInteraction from 'components/interactions/cards/CardInteraction';
import SpellObject from 'components/spells/SpellObject';
import WarcryObject from 'components/warcrys/WarcryObject';
import styled from 'styled-components';
import ClassSkillButton from 'components/class-skill/ClassSkillButtonV3';
import PLAYER_BOARDS from 'enums/playerBoards.enums';
import PlayerHealth from 'components/player-health/PlayerHealthV3';

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
    playerClass,
    selectedCardIndex,
    selectedCardObject,
    playerCanUseClassSkill,
    spellObject,
    warcryObject,
    health,
    playerShieldPoints
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
      <PlayerHealth
        health={health[yourID]}
        board={PLAYER_BOARDS[1]}
        shieldPoints={playerShieldPoints[yourID]}
        // wasAttacked={wasAttacked}
      />

      <ClassSkillButton
        G={G}
        ctx={ctx}
        moves={moves}
        isActive={isActive}
        playerClass={playerClass[yourID]}
        board={PLAYER_BOARDS[1]}
        canUse={playerCanUseClassSkill[yourID] && energy[yourID].current >= 2}
      />

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
  width: ${p => `calc(${p.gameWidth}px - 600px)`};
  height: var(--board-yourHand-height);
  z-index: var(--board-yourHand-zIndex);
  bottom: var(--board-yourHand-height);
  z-index: 250;
  margin-left: 300px;
`;

YourHand.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string,
  gameWidth: PropTypes.number
};
