/*
Write a `Hangman` constructor. This constructor will setup a new hangman game and instances will be created with the following properties:

wordToGuess: passed as an argument to the constructor
lives: initially 5
correctLetters: an array made of blank strings or a correct guess
e.g. guessing "r" for the word "crane" -> ['', 'r', '', '', ''];

Hangman will have a guessLetter method that will take a letter to guess and either:
1. fill in the appropriate letters
2. subtract a life if the guess is wrong
*/

function Hangman(wordToGuess) {
  this.wordToGuess = wordToGuess;
  this.lives = 5;
  this.correctLetters = new Array(wordToGuess.length).fill('');
}

Hangman.prototype.guess = function (letter) {
  const indexOfLetter = this.wordToGuess.indexOf(letter);

  if (indexOfLetter !== -1) {
    this.correctLetters[indexOfLetter] = letter;
  } else {
    this.lives--;
    if (this.lives <= 0) {
      return 'Game over!';
    }
  };
}

module.exports = Hangman;
