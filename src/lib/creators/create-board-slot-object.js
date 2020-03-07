import createMinionObject from 'lib/creators/create-minion-object';

const createBoardSlotObject = cardId => {
  const minionObject = createMinionObject(cardId);
  if (!minionObject) return;

  const { attack, health } = minionObject;

  return {
    canAttack: false,
    canBeAttackedByMinion: false,
    canBeAttackedByPlayer: false,
    canBeAttackedBySpell: false,
    canBeAttackedByWarcry: false,
    canBeBuffed: false,
    canBeHealed: false,
    canBeDebuffed: false,
    canBeExpired: false,
    canBeReturned: false,
    canBeSacrificed: false,
    canBeStolen: false,
    canReceiveEnergyShield: false,
    canReceiveOnslaught: false,
    currentAttack: attack,
    currentHealth: health,
    hasBoon: false,
    hasEnergyShield: false,
    hasGuard: false,
    isConcealed: false,
    isCursed: false,
    isDisabled: false,
    minionData: minionObject,
    hasOnslaught: false,
    totalAttack: attack,
    totalHealth: health,
    willExpire: false,
    willExpireIn: 2
  };
};

export default createBoardSlotObject;
