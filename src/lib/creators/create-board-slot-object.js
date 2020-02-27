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
    hasGuard: false,
    minionData: minionObject,
    totalAttack: attack,
    totalHealth: health
  };
};

export default createBoardSlotObject;
