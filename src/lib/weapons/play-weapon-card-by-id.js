import createWeaponObject from 'lib/creators/create-weapon-object';
import playerWeapon from 'lib/state/player-weapon';

const playWeaponByCardId = (G, ctx, player, cardId) => {
  const weaponObj = createWeaponObject(cardId);
  G.playerAttackValue[player] = weaponObj && weaponObj.attack;

  // prettier-ignore
  switch (cardId) {
    case 'CORE_076':  return playerWeapon.equip(G, player, weaponObj);
    case 'CORE_081':  return playerWeapon.equip(G, player, weaponObj);
    case 'CORE_100':  return playerWeapon.equip(G, player, weaponObj);
    case 'CORE_127':  return playerWeapon.equip(G, player, weaponObj);
    case 'CORE_128':  return equipCORE128(G, ctx, player);
    case 'CORE_132':  return playerWeapon.equip(G, player, weaponObj);
    default:          return;
  }
};

const equipCORE128 = (G, ctx, player) => {
  const { random } = ctx;
  const idols = ['CORE_128a', 'CORE_128b'];
  const randomWeaponID = random.Shuffle(idols).shift();
  playerWeapon.equip(G, player, createWeaponObject(randomWeaponID));
};

export default playWeaponByCardId;
