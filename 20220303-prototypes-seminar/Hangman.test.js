const { expect } = require('@jest/globals');
const Hangman = require('./Hangman.js');

describe("Hangman", () => {
  test('returns an object', () => {
    expect(typeof new Hangman('')).toEqual('object');
  });
  test('returns an object with the properties wordToGuess, lives and correctLetters', () => {
    const testInstance = new Hangman('test');
    expect(testInstance.wordToGuess).toBe('test');
    expect(testInstance.lives).toBe(5);
    expect(testInstance.correctLetters).toEqual(['', '', '', '']);
  });
  test('if the letter is in the word, add the letter to the array in the correct position', () => {
    const testLetter = new Hangman('shrel');
    testLetter.guess('h');
    expect(testLetter.correctLetters).toEqual(['', 'h', '', '', '']);
  });
  test('if the letter is not in the word, remove a life', () => {
    const testNotLetter = new Hangman('shrel');
    testNotLetter.guess('a');
    expect(testNotLetter.lives).toBe(4);
  });
  test('if lives are 0, console.log("Game Over")', () => {
    const testLosingGame = new Hangman('shrel');
    testLosingGame.guess('z');
    testLosingGame.guess('q');
    testLosingGame.guess('w');
    testLosingGame.guess('t');
    expect(testLosingGame.guess('y')).toBe('Game over!');
  })
});
