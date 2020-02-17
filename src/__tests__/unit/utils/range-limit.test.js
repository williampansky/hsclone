import limitNumberWithinRange from 'lib/utils/range-limit';

test(`result should be no more than 5`, () => {
  const NUMBER = 2;
  const ADD_TO = 5;
  const MAX = 5;
  const MIN = 0;

  const result = limitNumberWithinRange(NUMBER + ADD_TO, MAX, MIN);
  expect(result).toBe(5);
});

test(`result should be 4`, () => {
  const NUMBER = 2;
  const ADD_TO = 2;
  const MAX = 5;
  const MIN = 0;

  const result = limitNumberWithinRange(NUMBER + ADD_TO, MAX, MIN);
  expect(result).toBe(4);
});

test(`result should be no less than 0`, () => {
  const NUMBER = 1;
  const SUB_FROM = 6;
  const MAX = 5;
  const MIN = 0;

  const result = limitNumberWithinRange(NUMBER - SUB_FROM, MAX, MIN);
  expect(result).toBe(0);
});

test(`result should be 2`, () => {
  const NUMBER = 3;
  const SUB_FROM = 1;
  const MAX = 5;
  const MIN = 0;

  const result = limitNumberWithinRange(NUMBER - SUB_FROM, MAX, MIN);
  expect(result).toBe(2);
});
