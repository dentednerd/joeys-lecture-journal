const { copyArrayAndDouble } = require('..');

describe('copyArrayAndDouble', () => {
  it('returns an empty array when given no/empty array', () => {
    const input = [];
    const actual = copyArrayAndDouble(input);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it('doubles a single value', () => {
    const input = [2];
    const actual = copyArrayAndDouble(input);
    const expected = [4];
    expect(actual).toEqual(expected);
  });

  it('doubles all values', () => {
    const input = [1,2,3];
    const actual = copyArrayAndDouble(input);
    const expected = [2,4,6];
    expect(actual).toEqual(expected);
  });
})
