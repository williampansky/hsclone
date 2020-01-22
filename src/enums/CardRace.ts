export enum CardRace {
  Beast,
  Dragon
}

export const CardRaceLabel = new Map<number, string>([
  [CardRace.Beast, 'Beast'],
  [CardRace.Dragon, 'Dragon']
]);
