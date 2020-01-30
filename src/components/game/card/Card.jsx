import PropTypes from 'prop-types';
import css from '~/styles/game/game.scss';
import { fontSizeBasedOnCharacterLength } from 'utils/text';
import createMarkup from 'utils/createMarkup';

export default function Card({
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
}) {
  const { backgroundImage, foregroundImage } = images;
  const { attackSound, deathSound, dropSound } = sounds;
  const metaAttributes = [
    { name: 'artist', content: artist },
    { name: 'attack', content: attack },
    { name: 'cardClass', content: cardClass },
    { name: 'collectible', content: collectible.toString() },
    { name: 'cost', content: cost },
    { name: 'elite', content: elite.toString() },
    { name: 'entourage', content: entourage },
    { name: 'flavor', content: flavor },
    { name: 'health', content: health },
    { name: 'hideStats', content: hideStats.toString() },
    { name: 'howToEarn', content: howToEarn },
    { name: 'howToEarnGolden', content: howToEarnGolden },
    { name: 'id', content: id },
    { name: 'images.backgroundImage', content: backgroundImage },
    { name: 'images.foregroundImage', content: foregroundImage },
    { name: 'mechanics', content: JSON.stringify(mechanics) },
    { name: 'name', content: name },
    { name: 'playRequirements', content: JSON.stringify(playRequirements) },
    { name: 'race', content: race },
    { name: 'rarity', content: rarity },
    { name: 'set', content: set },
    { name: 'sounds.attackSound', content: attackSound },
    { name: 'sounds.deathSound', content: deathSound },
    { name: 'sounds.dropSound', content: dropSound },
    { name: 'spellDamage', content: spellDamage },
    { name: 'targetingText', content: targetingArrowText },
    { name: 'text', content: text },
    { name: 'type', content: type }
  ];

  const cardImage = {
    backgroundImage: `url(${foregroundImage})`
  };

  const fontSize = {
    fontSize: `${fontSizeBasedOnCharacterLength(name)}em`
  };

  return (
    <div className={css['card']}>
      <div className={css['card-cost']}>{cost}</div>
      <div className={css['card-image']} style={cardImage} />
      <div className={css['card-name']} style={fontSize}>
        {name}
      </div>
      <div className={css['card-text']}>
        <p dangerouslySetInnerHTML={createMarkup(text)} />
      </div>
      <div className={css['card-type']}>{type}</div>
      <div className={css['card-attack']}>{attack}</div>
      <div className={css['card-health']}>{health}</div>

      {metaAttributes.map((attr, index) => {
        const { name, content } = attr;
        return content ? (
          <meta key={index} name={name} content={content.toString()} />
        ) : null;
      })}
    </div>
  );
}

// Card.propTypes = {
//   artist: PropTypes.string,
//   attack: PropTypes.number,
//   cardClass: PropTypes.string,
//   collectible: PropTypes.boolean,
//   cost: PropTypes.number,
//   elite: PropTypes.boolean,
//   entourage: PropTypes.array,
//   flavor: PropTypes.string,
//   health: PropTypes.number,
//   hideStats: PropTypes.boolean,
//   howToEarn: PropTypes.string,
//   howToEarnGolden: PropTypes.string,
//   id: PropTypes.string,
//   images: PropTypes.shape({
//     backgroundImage: PropTypes.string,
//     foregroundImage: PropTypes.string
//   }),
//   mechanics: PropTypes.array,
//   name: PropTypes.string,
//   playRequirements: PropTypes.array,
//   race: PropTypes.string,
//   rarity: PropTypes.string,
//   set: PropTypes.string,
//   sounds: PropTypes.shape({
//     attackSound: PropTypes.string,
//     deathSound: PropTypes.string,
//     dropSound: PropTypes.string
//   }),
//   spellDamage: PropTypes.number,
//   targetingArrowText: PropTypes.string,
//   text: PropTypes.string,
//   type: PropTypes.string
// };

Card.defaultProps = {
  artist: 'Unknown',
  attack: 0,
  cardClass: 'Neutral',
  collectible: true,
  cost: 0,
  elite: false,
  entourage: [],
  flavor: null,
  health: 1,
  hideStats: false,
  howToEarn: null,
  howToEarnGolden: null,
  id: null,
  images: {
    backgroundImage: null,
    foregroundImage: null
  },
  mechanics: [],
  name: 'CARD NAME',
  playRequirements: [],
  race: 'None',
  rarity: 'Free',
  set: 'Free',
  sounds: {
    attackSound: null,
    deathSound: null,
    dropSound: null
  },
  spellDamage: 0,
  targetingArrowText: null,
  text: 'CARD TEXT',
  type: null
};
