const hof = require('../index');

describe('addf', () => {
  it('returns a function on first invocation', () => {
    expect(typeof hof.addf(3)).toBe('function');
  });

  it('returns the total of both invocations', () => {
    expect(hof.addf(3)(4)).toBe(7);
  });

  it('returns a function that is reusable', () => {
    const add100 = hof.addf(100);
    expect(add100(5)).toBe(105);
    expect(add100(100)).toBe(200);
    expect(add100(-100)).toBe(0);
  });

  it.only('returns a function within a function within the function', () => {
    expect(typeof hof.addf(3)).toBe('function');
    expect(typeof hof.addf(3)(4)).toBe('function');
    expect(typeof hof.addf(3)(4)(5)).toBe('number');
    expect(hof.addf(3)(4)(5)).toBe(12);
  });
});
