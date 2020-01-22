export enum CardType {
  Buff,
  Hero,
  HeroPower,
  Minion,
  Potion,
  Spell,
  Weapon
}

export const CardTypeLabel = new Map<number, string>([
  [CardType.Buff, 'Buff'],
  [CardType.Hero, 'Hero'],
  [CardType.HeroPower, 'Hero Power'],
  [CardType.Minion, 'Minion'],
  [CardType.Potion, 'Potion'],
  [CardType.Spell, 'Spell'],
  [CardType.Weapon, 'Weapon']
]);
