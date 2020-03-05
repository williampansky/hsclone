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
    currentAttack: attack,
    currentHealth: health,
    hasBoon: false,
    hasGuard: false,
    isConcealed: false,
    isCursed: false,
    isDisabled: false,
    minionData: minionObject,
    totalAttack: attack,
    totalHealth: health,
    willExpire: false
  };
};

export default createBoardSlotObject;
