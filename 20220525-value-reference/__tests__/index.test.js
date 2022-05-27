const changeOrdersToSalad = require('../index');

// example of test orders...
// [
//   { name: 'Joey', main: 'calabrese' },
//   { name: 'Karla', main: 'cheeseburger' },
//   { name: 'Jim', main: 'pepperoni, pineapple and jalapeno' },
//   { name: 'Andrea', main: 'quattro formaggi' },
//   { name: 'Liam', main: 'nduja' }
// ]

describe('changeOrdersToSalad', () => {
  test('returns an empty array when provided an empty array', () => {
    // arrange
    let input = [];
    let expected = [];

    // act
    let actual = changeOrdersToSalad(input);

    // assert
    expect(actual).toEqual(expected);
  });

  test('returns an array with a single object with a main of "salad" when provided an array with a single object', () => {
    // arrange
    let input = [{ name: 'Joey', main: 'calabrese' }];
    let expected = [{ name: 'Joey', main: 'salad' }];

    // act
    let actual = changeOrdersToSalad(input);

    // assert
    expect(actual).toEqual(expected);
  });

  test('returns an array with multiple objects with a main of "salad" when provided an array of multiple objects', () => {
    // arrange
    let input = [
      { name: 'Joey', main: 'calabrese' },
      { name: 'Karla', main: 'cheeseburger' },
      { name: 'Jim', main: 'pepperoni, pineapple and jalapeno' },
      { name: 'Andrea', main: 'quattro formaggi' },
      { name: 'Liam', main: 'nduja' }
    ];
    let expected = [
      { name: 'Joey', main: 'salad' },
      { name: 'Karla', main: 'salad' },
      { name: 'Jim', main: 'salad' },
      { name: 'Andrea', main: 'salad' },
      { name: 'Liam', main: 'salad' }
    ];

    // act
    let actual = changeOrdersToSalad(input);

    // assert
    expect(actual).toEqual(expected);
  });

  test('returns an array of objects with main "salad" when provided an array in which one object already has a main "salad"', () => {
    // arrange
    let input = [
      { name: 'Joey', main: 'salad' },
      { name: 'Karla', main: 'cheeseburger' },
    ];
    let expected = [
      { name: 'Joey', main: 'salad' },
      { name: 'Karla', main: 'salad' },
    ]

    // act
    let actual = changeOrdersToSalad(input);

    // assert
    expect(actual).toEqual(expected);
  });

  test('returns an array without mutating the original array', () => {
    // arrange
    let input = [
      { name: 'Joey', main: 'salad' },
      { name: 'Karla', main: 'cheeseburger' },
    ];

    // act
    let actual = changeOrdersToSalad(input);
    // console.log(input);

    // assert
    expect(actual).not.toBe(input);
  });
});
