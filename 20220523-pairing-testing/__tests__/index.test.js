const getMiddleChar = require('../index');

describe('getMiddleChar', () => {
  test('returns a single character when provided a single character', () => {
    // Arrange
    let character = 'a';
    let expectedResult = 'a';
    // Act
    let actual = getMiddleChar(character);
    // Assert
    expect(actual).toBe(expectedResult);
  });

  test('returns two characters when provided a string of two characters', () => {
    //Arrange
    let string = 'ab';
    let expectedResult = 'ab';

    //Act
    let actual = getMiddleChar(string);

    //Assert
    expect(actual).toBe(expectedResult);
  });

  test('returns a single character from a string of three characters', () => {
    // Arrange
    let str = 'abc';
    let expectedResult = 'b';

    // Act
    let actual = getMiddleChar(str);

    // Assert
    expect(actual).toBe(expectedResult);
  });
});
