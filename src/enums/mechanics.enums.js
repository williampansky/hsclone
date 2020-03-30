// prettier-ignore
const MECHANICS = {
  1:  'BOON',           // buffs your minions
  2:  'BUFF',           // buffs your player
  3:  'CURSE',          // activated when minion dies
  4:  'GUARD',          // only this & other guard minions can be attacked
  5:  'STAMPEDE',       // minion can attack immediately
  6:  'WARCRY',         // activated when card is played
  7:  'ONSLAUGHT',      // player/minion can attack twice
  8:  'CONCEALED',      // minion cannot be attacked or targeted
  9:  'ENERGY SHIELD',  // minion cannot lose Health with E.S. active
  10: 'EXPIRATION,',    // minion will be killed at start of your next turn
  11: 'DISABLE,'        // minion cannot attack while disabled
};

export default MECHANICS;
