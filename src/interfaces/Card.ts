import { CardClass } from 'enums/CardClass';
import { CardPlayReq } from 'enums/CardPlayReq';
import { CardRace } from 'enums/CardRace';
import { CardRarity } from 'enums/CardRarity';
import { CardSet } from 'enums/CardSet';
import { CardType } from 'enums/CardType';

/**
 * Data model JavaScript object for card properties.
 *
 * @namespace Card
 * @type {Object}
 * @readonly
 *
 * @see [forkedInfo]{@link https://hearthstonejson.com/docs/cards.html}
 */
export interface Card {
  /**
   * Attribution of the `images.foregroundImage` asset.
   */
  artist?: string;

  /**
   * Integer attack value. Always shown on minions and weapons.
   */
  attack: number;

  /**
   * Cards can be either class-specific or Neutral.
   */
  cardClass: CardClass;

  /**
   * Determines if the card is collectible.
   */
  collectible: boolean;

  /**
   * Card's mana cost. Always shown.
   */
  cost: number;

  /**
   * Durability value of weapons.
   */
  durability?: number;

  /**
   * Card is one that you can only have a single copy of in a deck.
   */
  elite: boolean;

  /**
   * Array of card `id` strings which represent the card’s “entourage.”
   * Often used for cards which can create new cards randomly from a pool.
   */
  entourage?: {
    [index: number]: string;
  };

  /**
   * Unrelated to actual rules or gameplay; included merely for fun.
   */
  flavor?: string;

  /**
   * Health point value of the card. Always shown for minions.
   */
  health: number;

  /**
   * Determines if the stats (cost, attack, health) should be hidden.
   */
  hideStats: boolean;

  /**
   * Path for owning the card on your account; eg. reward, craft, etc.
   */
  howToEarn?: string;

  /**
   * Path for owning the golden version of the card on your account.
   */
  howToEarnGolden?: string;

  /**
   * Unique identifier string of the card.
   */
  id: string;

  /**
   * Object of key:string pairs for the image filepaths.
   */
  images: {
    backgroundImage: string;
    foregroundImage: string;
  };

  /**
   * Array of mechanic variable enums strings
   * pertaining to the card's special abilities.
   */
  mechanics?: {
    [index: number]: string;
  };

  /**
   * Name of the card.
   */
  name: string;

  /**
   * Determine various requirements which have to be met
   * for the card to be played and what it can target.
   */
  playRequirements?: CardPlayReq;

  /**
   * Usually only available on minions.
   */
  race?: CardRace;

  /**
   * Determines the difficulty of acquiring the card.
   */
  rarity: CardRarity;

  /**
   * Which release the card belongs to. Also determines the card’s
   * watermark; Core, Free, Expansion1, Expansion2, etc.
   */
  set: CardSet;

  /**
   * Object of key:string pairs for the sound filepaths.
   */
  sounds: {
    attackSound: string;
    deathSound: string;
    dropSound: string;
  };

  /**
   * Card's added spell damage to the player's spells.
   */
  spellDamage: number;

  /**
   * Text when targeting something with the card.
   */
  targetingArrowText?: string;

  /**
   * Text displayed on the card.
   */
  text: string;

  /**
   * Type this card categorizes to; Buff, Hero, HeroPower, Minion, etc.
   */
  type: string;
}
