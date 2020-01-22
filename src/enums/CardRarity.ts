export enum CardRarity {
  Free,
  Common,
  Rare,
  Epic,
  Legendary
}

export const CardRarityLabel = new Map<number, string>([
  [CardRarity.Free, 'Free'],
  [CardRarity.Common, 'Common'],
  [CardRarity.Rare, 'Rare'],
  [CardRarity.Epic, 'Epic'],
  [CardRarity.Legendary, 'Legendary']
]);

export const CardRarityColor = new Map<number, string>([
  [CardRarity.Free, 'transparent'],
  [CardRarity.Common, '#e0e5ff'],
  [CardRarity.Rare, '#22b9ff'],
  [CardRarity.Epic, '#e330ff'],
  [CardRarity.Legendary, '#ff753a']
]);
