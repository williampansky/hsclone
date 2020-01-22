const IMAGES = {
  backgroundImage: String,
  foregroundImage: String
};

const PLAY_REQUIREMENTS = {};

const SOUNDS = {
  attackSound: String,
  deathSound: String,
  dropSound: String
};

/**
 * Data model JavaScript object for card properties.
 *
 * @namespace CardDataModel
 * @type {Object}
 * @readonly
 *
 * @prop {String} artist - Attribution of the `images.foregroundImage` asset.
 * @prop {String=0} attack - (Integer) The card’s attack value. Always shown on minions and weapons.
 * @prop {String=NEUTRAL} cardClass - (Enum: `CardClass`) Cards can be either class-specific or Neutral.
 * @prop {Boolean=true} collectible - Determines whether the card is collectible.
 * @prop {Number=0} cost - (Integer) Card's mana cost. Always shown, even if 0.
 * @prop {Number=1} [durability] -  Durability value of weapons. Always shown for `type === WEAPON`.
 * @prop {Boolean} elite - An elite card is one that you can only have one copy of in a deck.
 * @prop {Array} [entourage] - Array of card IDs which represent the card’s “entourage.” Often used for cards which can create new cards randomly from a specific pool.
 * @prop {String} [flavor] - Unrelated to actual rules or gameplay; included merely for fun.
 * @prop {Number} health - Health point value of the card. Always shown for minions.
 * @prop {Boolean=false} hideStats - Determines if the stats (cost, attack, health) should be hidden.
 * @prop {String} howToEarn - Path for owning the card on your account; eg. reward, craft, etc.
 * @prop {String} howToEarnGolden - Path for owning the golden version of the card on your account.
 * @prop {String} id - Unique identifier string of the card.
 * @prop {Object.<key, string>} images - Object of key:string pairs for the image filepaths.
 * @prop {Array} mechanics - Array of mechanic variable enums pertaining to the card's special abilities.
 * @prop {Object.<key, string>} playRequirements - (Enum: `PlayReq`) Determine various requirements which have to be met for the card to be played and what it can target.
 * @prop {String} race - (Enum: `Race`) Usually only available on minions.
 * @prop {String} rarity - (Enum: `Rarity`) Determines the difficulty of acquiring the card.
 * @prop {String} set - (Enum: `CardSet`) Also determines the card’s watermark; CORE, EXPANSION1, EXPANSION2, etc.
 * @prop {Object.<key, string>} sounds - Object of key:string pairs for the sound filepaths.
 * @prop {Number=0} spellDamage - Card's added spell damage to the player's spells.
 * @prop {String} targetingArrowText - Text when targeting something with the card.
 * @prop {String} text - Text displayed on the card.
 * @prop {String} type - (Enum: `CardType`) BUFF, HERO, HERO_POWER, MINION, SPELL, WEAPON.
 *
 * @see [forkedInfo]{@link https://hearthstonejson.com/docs/cards.html}
 * @see [playRequirements]{@link https://github.com/HearthSim/hsdata/blob/master/PlayErrors.xml}
 */
const CardDataModel = {
  artist: String,
  attack: Number,
  cardClass: String,
  collectible: Boolean,
  cost: Number,
  durability: Number,
  elite: Boolean,
  entourage: [String],
  flavor: String,
  health: Number,
  hideStats: Boolean,
  howToEarn: String,
  howToEarnGolden: String,
  id: String,
  images: { IMAGES },
  mechanics: [String],
  name: String,
  playRequirements: { PLAY_REQUIREMENTS },
  race: String,
  rarity: String,
  set: String,
  sounds: { SOUNDS },
  spellDamage: Number,
  targetingArrowText: String,
  text: String,
  type: String
};

export default CardDataModel;
