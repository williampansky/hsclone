export enum CardSet {
  Free,
  Core
}

export const CardSetLabel = new Map<number, string>([
  [CardSet.Free, 'Free'],
  [CardSet.Core, 'Core']
]);
