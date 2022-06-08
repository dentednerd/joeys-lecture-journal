const { shareBirthdayCake, countNestedItems, containsKey } = require('../index');

xdescribe('#shareBirthdayCake', () => {
  test('returns a string that indicates an empty plate of cake, yum yum', () => {
    expect(shareBirthdayCake(8)).toBe('The cake has been shared. It was delicious.');
  });
});

xdescribe('countNestedItems', () => {
  it('returns 0 when passed an empty array', () => {
    expect(countNestedItems([])).toBe(0);
  });
  it('returns count when passed a shallow array', () => {
    expect(countNestedItems([2, 'hello'])).toBe(2);
  });
  it('returns count of items in all arrays when nested one level deep', () => {
    expect(countNestedItems([[]])).toEqual(0);
    expect(countNestedItems([2, 'hello', [1, true]])).toBe(4);
  });
  it('returns count of all arrays when nested many levels deep', () => {
    expect(countNestedItems([2, 'hello', [1, true, []], []])).toBe(4);
  });
});

describe('containsKey', () => {
  it('returns true when passed an object, with specified property', () => {
    const input = { specialKey: 'hello' };
    expect(containsKey(input, 'specialKey')).toBe(true);
  });

  it('returns false when passed an object, without specified key', () => {
    const input = { specialKey: 'hello' };
    expect(containsKey(input, 'specialK')).toBe(false);
  });

  it('returns true when passed an object, with specified key nested', () => {
    const input = { key: 1, boringKey: { hi: 'yo', specialKey: 'hello' } };
    expect(containsKey(input, 'specialKey')).toBe(true);
  });

  it('returns false when passed a deeply nested object that does not contain specified key', () => {
    const input = { boringKey: { ordinaryKey: 'hello' } };
    expect(containsKey(input, 'specialKey')).toBe(false);
  });
});
