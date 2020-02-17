import energy from 'lib/state/energy';
const { incrementTotal, matchTotal, setCurrent, setTotal, subtract } = energy;

test(`increments player 0's total energy`, () => {
  const player = '0';
  const G = { energy: { '0': { total: 0 } } };
  incrementTotal(G, player);
  expect(G).toEqual({ energy: { '0': { total: 1 } } });
});

test(`matches player's current energy with their total`, () => {
  const player = '0';
  const G = { energy: { '0': { current: 0, total: 5 } } };
  matchTotal(G, player);
  expect(G).toEqual({ energy: { '0': { current: 5, total: 5 } } });
});

test(`set player's current energy to provided amount`, () => {
  const player = '0';
  const G = { energy: { '0': { current: 0 } } };
  setCurrent(G, player, 10);
  expect(G).toEqual({ energy: { '0': { current: 10 } } });
});

test(`set player's total energy to provided amount`, () => {
  const player = '0';
  const G = { energy: { '0': { total: 0 } } };
  setTotal(G, player, 10);
  expect(G).toEqual({ energy: { '0': { total: 10 } } });
});

test(`subtract the provided amount from player's current energy value`, () => {
  const player = '0';
  const G = { energy: { '0': { current: 4, total: 4 } } };
  subtract(G, player, 2);
  expect(G).toEqual({ energy: { '0': { current: 2, total: 4 } } });
});
