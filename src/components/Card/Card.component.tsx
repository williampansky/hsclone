import {
  CardNameWrapper,
  CardTextWrapper,
  CardTypeWrapper,
  Component,
  ImageWrapper
} from 'components/Card/Card.component.styles';
import { CardClass, CardClassLabel } from 'enums/CardClass';
import { CardRace, CardRaceLabel } from 'enums/CardRace';
import { CardRarity, CardRarityLabel } from 'enums/CardRarity';
import { CardSet, CardSetLabel } from 'enums/CardSet';
import { Card as CardInterface } from 'interfaces/Card';
import React from 'react';
import createMarkup from 'utils/createMarkup';
import { fontSizeBasedOnCharacterLength } from 'utils/text';

const Card = ({
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
}: CardInterface) => {
  const { backgroundImage, foregroundImage } = images;
  const { attackSound, deathSound, dropSound } = sounds;
  const metaAttributes = [
    { name: 'artist', content: artist },
    { name: 'cardClass', content: CardClassLabel.get(cardClass) },
    { name: 'id', content: id },
    { name: 'collectible', content: collectible.toString() },
    { name: 'elite', content: elite.toString() },
    { name: 'hideStats', content: hideStats.toString() },
    { name: 'howToEarn', content: howToEarn },
    { name: 'howToEarnGolden', content: howToEarnGolden },
    { name: 'images.backgroundImage', content: backgroundImage },
    { name: 'images.foregroundImage', content: foregroundImage },
    { name: 'flavor', content: flavor },
    { name: 'mechanics', content: JSON.stringify(mechanics) },
    { name: 'playRequirements', content: JSON.stringify(playRequirements) },
    { name: 'rarity', content: CardRarityLabel.get(rarity) },
    { name: 'set', content: CardSetLabel.get(set) },
    { name: 'sounds.attackSound', content: attackSound },
    { name: 'sounds.deathSound', content: deathSound },
    { name: 'sounds.dropSound', content: dropSound },
    { name: 'spellDamage', content: spellDamage },
    { name: 'targetingText', content: targetingArrowText }
  ];

  return (
    <Component>
      <ImageWrapper>
        <img alt={name} role="presentation" src={foregroundImage} />
      </ImageWrapper>

      <CardNameWrapper fontSize={fontSizeBasedOnCharacterLength(name)}>
        <span>{name}</span>
      </CardNameWrapper>

      <CardTextWrapper>
        <p dangerouslySetInnerHTML={createMarkup(text)} />
      </CardTextWrapper>

      {type && <CardTypeWrapper>{type}</CardTypeWrapper>}

      {/* <div>attack: {attack}</div>
      <div>cost: {cost}</div>
      <div>health: {health}</div>
      {race && <div>race: {race}</div>}
      <div>rarity: {CardRarityLabel.get(rarity)}</div>
      <div>set: {CardSetLabel.get(set)}</div>
      <div>spellDamage: {spellDamage}</div> */}

      {metaAttributes.map((attr, index) => {
        const { name, content } = attr;
        return content ? (
          <meta key={index} name={name} content={content.toString()} />
        ) : null;
      })}
    </Component>
  );
};

const defaultProps = {
  artist: 'Unknown',
  attack: 0,
  cardClass: CardClass.Neutral,
  collectible: true,
  cost: 0,
  elite: false,
  entourage: undefined,
  flavor: undefined,
  health: 1,
  hideStats: false,
  howToEarn: undefined,
  howToEarnGolden: undefined,
  id: undefined,
  images: {
    backgroundImage: undefined,
    foregroundImage: undefined
  },
  mechanics: undefined,
  name: 'CARD NAME',
  playRequirements: undefined,
  race: CardRace.None,
  rarity: CardRarity.Free,
  set: CardSet.Free,
  sounds: {
    attackSound: undefined,
    deathSound: undefined,
    dropSound: undefined
  },
  spellDamage: 0,
  targetingArrowText: undefined,
  text: 'CARD TEXT',
  type: undefined
};

Card.defaultProps = defaultProps;

export default Card;
