export enum CardSet {
  Core,
  Free
}

export const CardSetLabel = new Map<number, string>([
  [CardSet.Core, 'Core'],
  [CardSet.Free, 'Free']
]);
