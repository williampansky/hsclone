import {
  CardName,
  Component,
  Header,
  ImageWrapper
} from 'components/Card/CardComponentStyles';
import { CardClass, CardClassLabel } from 'enums/CardClass';
import { CardRarity, CardRarityLabel } from 'enums/CardRarity';
import { CardSet, CardSetLabel } from 'enums/CardSet';
import { CardType, CardTypeLabel } from 'enums/CardType';
import { CardRace, CardRaceLabel } from 'enums/CardRace';
import { Card as CardInterface } from 'interfaces/Card';
import React from 'react';

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
    { name: '', content: '' },
    { name: 'images.backgroundImage', content: backgroundImage },
    { name: 'images.foregroundImage', content: foregroundImage },
    { name: 'flavor', content: flavor },
    { name: 'mechanics', content: JSON.stringify(mechanics) },
    { name: 'playRequirements', content: JSON.stringify(playRequirements) },
    { name: 'sounds.attackSound', content: attackSound },
    { name: 'sounds.deathSound', content: deathSound },
    { name: 'sounds.dropSound', content: dropSound },
    { name: 'targetingText', content: targetingArrowText }
  ];

  return (
    <Component>
      <ImageWrapper>
        <div>Image</div>
      </ImageWrapper>

      <Header>
        <CardName>{name}</CardName>
      </Header>

      <div>attack: {attack}</div>
      <div>cost: {cost}</div>
      <div>health: {health}</div>
      {race && <div>race: {race}</div>}
      <div>rarity: {CardRarityLabel.get(rarity)}</div>
      <div>set: {CardSetLabel.get(set)}</div>
      <div>spellDamage: {spellDamage}</div>
      <div>text: {text}</div>
      <div>type: {CardTypeLabel.get(type)}</div>

      {metaAttributes.map((attr, idx) => {
        const { name, content } = attr;
        return content && <meta key={idx} name={name} content={content} />;
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
  race: undefined,
  rarity: CardRarity.Free,
  set: CardSet.Free,
  sounds: {
    attackSound: undefined,
    deathSound: undefined,
    dropSound: undefined
  },
  spellDamage: 0,
  targetingArrowText: undefined,
  text: undefined,
  type: CardType.Minion
};

Card.defaultProps = defaultProps;

export default Card;
