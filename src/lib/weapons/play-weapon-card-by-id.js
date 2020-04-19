import createWeaponObject from 'lib/creators/create-weapon-object';
import playerWeapon from 'lib/state/player-weapon';

const playWeaponByCardId = (G, ctx, player, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_128':  return equipCORE128(G, ctx, player);
    case 'CORE_076':
    case 'CORE_081':
    case 'CORE_100':
    case 'CORE_127':
    case 'CORE_132':  return equipGenericWeapon(G, player, cardId);
    default:          return;
  }
};

const equipGenericWeapon = (G, player, cardId) => {
  const weaponObj = createWeaponObject(`${cardId}a`);
  G.playerAttackValue[player] = weaponObj && weaponObj.attack;
  playerWeapon.equip(G, player, weaponObj);
};

const equipCORE128 = (G, ctx, player) => {
  const { random } = ctx;
  const weapons = ['CORE_128a', 'CORE_128a'];
  const randomWeaponID = random.Shuffle(weapons).shift();
  const randomWeaponObj = createWeaponObject(randomWeaponID);
  G.playerAttackValue[player] = randomWeaponObj && randomWeaponObj.attack;
  playerWeapon.equip(G, player, randomWeaponObj);
};

export default playWeaponByCardId;
