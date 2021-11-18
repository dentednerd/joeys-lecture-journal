const containsKey = require('..');

describe('containsKey', () => {
  it('returns false when given an empty object', () => {
    const actual = containsKey({}, '');
    expect(actual).toBe(false);
  });

  it('returns false when given an empty key', () => {
    const actual = containsKey({ hello: 'everyone' }, '');
    expect(actual).toBe(false);
  });

  it('returns true when the key is found in a flat object', () => {
    const gameScores = {
      skyrim: 10,
      finalFantasy13: 10,
      outerWilds: 10,
      undertale: 10,
      discoElysium: 10
    };

    const actual = containsKey(gameScores, 'skyrim');

    expect(actual).toBe(true);
  });

  it('returns true when the key is found in a nested object', () => {
    const nineNineTerry = {
      firstName: 'Terry',
      lastName: 'Jeffords',
      rank: 'sergeant',
      marriedTo: 'Sharon',
      children: {
        firstChild: 'Cagney',
        secondChild: 'Lacey',
        thirdChild: 'Ava'
      },
      loves: {
        food: {
          yogurt: true,
          boneBroth: true,
          pickles: false
        },
        tv: {
          frasier: true,
          foreignFilms: true,
          sportsBloopers: true
        },
        being: {
          scary: false,
          strong: true
        }
      }
    };

    const actual = containsKey(nineNineTerry,'yogurt');
    expect(actual).toBe(true);

    const secondActual = containsKey(nineNineTerry, 'jake');
    expect(secondActual).toBe(false);
  });
});
