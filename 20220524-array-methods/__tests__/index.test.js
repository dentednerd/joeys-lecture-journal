const getIceCreamOptions = require('../index');

const iceCreams = [
  { name: 'Magnum Cookie Cream', type: 'dairy', price: 1000 },
  { name: 'Calippo', type: 'vegan', price: 1.99 },
  { name: 'Fab lolly', type: 'vegetarian', price: 2.99 },
  { name: 'Fruit lolly', type: 'vegan', price: 0.99 },
];

describe('getIceCreamOptions', () => {
  test('returns an empty array when there are no available ice creams', () => {
    // Arrange
    let maxPrice = 1;
    let isVegan = false;

    // Act
    let result = getIceCreamOptions(iceCreams, maxPrice, isVegan);

    // Assert
    expect(result).toEqual([]);
  });

  test('returns an array with a single object that meets all the criteria', () => {
    //Arrange
    let maxPrice = 1;
    let isVegan = true;
    let expectedResult = [{ name: 'Fruit lolly', type: 'vegan', price: 0.99 },]

    //Act
    let actual = getIceCreamOptions(iceCreams, maxPrice, isVegan);

    //Assert
    expect(expectedResult).toEqual(actual);
  })
});
