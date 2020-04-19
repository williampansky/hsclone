// prettier-ignore
const MECHANICS = {
  1:  '%BOON%',           // temporary bonuses
  2:  '%BUFF%',           // permanent bonuses
  3:  '%ON_DEATH%',       // activated when minion dies
  4:  '%BULWARK%',        // only these minions can be attacked
  5:  '%RUSH%',           // can attack immediately
  6:  '%ON_PLAY%',        // activated when card is played
  7:  '%DOUBLE_ATTACK%',  // can attack twice
  8:  '%HIDDEN%',         // cannot be attacked or targeted
  9:  '%BUBBLE%',         // cannot lose Health when active
  10: '%EXPIRATION%',     // minion will be killed at start of your next turn
  11: '%DISABLE%',        // minion cannot attack
  12: '%ARMOR%',          // secondary HP available only to players
  13: '%ENERGY%',         // resource used to play cards
  14: '%CANT_TARGET%',    // unable to be targeted by spells, skills, or items
  15: '%COMBO%',          // triggers if you already played another card
  16: '%DEBUFF%',         // permanent bonus descrease
  17: '%DESTROY%',        // kills target
  18: '%DISCOVER%',       // choose 1 from 3 random class-relative cards
  19: '%DRAW_CARD%',      // draw one or more cards from player's deck
  20: '%IMMUNE%',         // prevents all damage
  21: '%LIFESTEAL%',      // heals for amount of damage dealt
  22: '%MYSTERY%',        // hidden spell that triggers under circumstances
  23: '%OVERLOAD%',       // reduces total energy resource next turn
  24: '%POISON%',         // kill any minion damaged by this mechanic
  25: '%SET_VALUE%',      // set attribute to a certain value
  26: '%SILENCE%',        // removes all buffs/debuffs/etc
  27: '%SPELL_DAMAGE%',   // increases damage done by spells
  28: '%STEAL%',          // take control of target
  29: '%SUMMON%',         // generates a minion
  30: '%TRANSFORM%'       // transforms target into something else
};

export default MECHANICS;
