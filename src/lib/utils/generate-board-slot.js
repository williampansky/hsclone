import { generateMinion } from './generate-minion';

export const generateBoardSlotObject = cardId => {
  const minionObject = generateMinion(cardId);
  if (!minionObject) return;

  const { attack, health } = minionObject;

  return {
    canAttack: false,
    canBeAttacked: false,
    currentAttack: attack,
    currentHealth: health,
    hasGuard: false,
    minionData: minionObject,
    totalAttack: attack,
    totalHealth: health
  };
};
