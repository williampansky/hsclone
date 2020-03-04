import createWeaponObject from 'lib/creators/create-weapon-object';
import playerWeapon from 'lib/state/player-weapon';

const playWeaponByCardId = (G, player, cardId) => {
  const weaponObj = createWeaponObject(cardId);

  // prettier-ignore
  switch (cardId) {
    case 'CORE_127':    return EQUIP_WEAPON(G, player, weaponObj);
    case 'CORE_128':    return EQUIP_WEAPON(G, player, weaponObj);
    case 'CORE_132':    return EQUIP_WEAPON(G, player, weaponObj);
    default:            return null;
  }
};

export const EQUIP_WEAPON = (G, player, weaponObj) => {
  return playerWeapon.equip(G, player, weaponObj);
};

export default playWeaponByCardId;
