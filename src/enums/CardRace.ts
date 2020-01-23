export enum CardRace {
  None,
  Beast,
  Dragon
}

export const CardRaceLabel = new Map<number, string>([
  [CardRace.None, 'None'],
  [CardRace.Beast, 'Beast'],
  [CardRace.Dragon, 'Dragon']
]);
