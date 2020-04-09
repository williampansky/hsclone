import TYPE from 'enums/type.enums';
import exists from 'utils/element.exists';

const minionHTML = obj => {
  const {
    artist,
    attack,
    cardClass,
    collectible,
    cost,
    elite,
    health,
    id,
    mechanics,
    name,
    race,
    rarity,
    set,
    text,
    type
  } = obj;

  return `
    <strong 
      class="card-name" 
      data-artist="${artist}"
      data-attack="${attack}"
      data-cardClass="${cardClass}"
      data-collectible="${collectible}"
      data-cost="${cost}"
      data-elite="${elite}"
      data-health="${health}"
      data-id="${id}"
      data-mechanics="${mechanics}"
      data-name="${name}"
      data-race="${race}"
      data-rarity="${rarity}"
      data-set="${set}"
      data-text="${text}"
      data-type="${type}"
    >${name}</strong>
  `;
};

const spellHTML = obj => {
  const {
    artist,
    attack,
    cardClass,
    collectible,
    cost,
    elite,
    health,
    id,
    mechanics,
    name,
    race,
    rarity,
    set,
    text,
    type
  } = obj;

  return `
    <strong 
      class="card-name" 
      data-artist="${artist}"
      data-attack="${attack}"
      data-cardClass="${cardClass}"
      data-collectible="${collectible}"
      data-cost="${cost}"
      data-elite="${elite}"
      data-health="${health}"
      data-id="${id}"
      data-mechanics="${mechanics}"
      data-name="${name}"
      data-race="${race}"
      data-rarity="${rarity}"
      data-set="${set}"
      data-text="${text}"
      data-type="${type}"
    >${name}</strong>
  `;
};

const weaponHTML = obj => {
  const {
    id,
    attack,
    health,
    imageSrc,
    name,
    rarity,
    set,
    targetingArrowText
  } = obj;

  return `
    <strong 
      class="card-name" 
      data-id="${id}"
      data-attack="${attack}"
      data-health="${health}"
      data-imageSrc="${imageSrc}"
      data-name="${name}"
      data-rarity="${rarity}"
      data-set="${set}"
      data-targetingArrowText="${targetingArrowText}"
    >${name}</strong>
  `;
};

export const generateNameHTML = (object, context) => {
  if (!exists(object)) return;

  switch (context) {
    case TYPE[1]:
      return minionHTML(object);
    case TYPE[3]:
      return spellHTML(object);
    case TYPE[4]:
      return weaponHTML(object);
    default:
      return;
  }
};
