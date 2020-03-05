import createMinionObject from 'lib/creators/create-minion-object';

const createBoardSlotObject = cardId => {
  const minionObject = createMinionObject(cardId);
  if (!minionObject) return;

  const { attack, health } = minionObject;

  return {
    canAttack: false,
    canBeAttacked: false,
    canBeBuffed: false,
    canBeHealed: false,
    canbeDebuffed: false,
    canbeExpired: false,
    canbeReturned: false,
    canbeSacrificed: false,
    canbeStolen: false,
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
    willExpire: false
  };
};

export default createBoardSlotObject;
