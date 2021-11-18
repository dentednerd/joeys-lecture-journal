# Array Methods 102

## key questions

> How was your first day of fundamentals?
> How did you find pairing and testing?
> Remember that you are never expected to finish a sprint - there's often more material than can be completed
> Remember that development is a continuous process; the aim is to learn through practice, instead of aiming for a top grade (because we don't do grades here)

## Learning Objectives

- practise TDD
- understand when to use `.map`
- understand when to use `.filter`
- revisit Higher Order Functions
- understand pure functions

## the setup

- `touch index.js`
- `git init`
- `npm init -y`
- `.gitignore`
- `mkdir __tests__` - dunderscore!
- in `__tests__`: `touch index.spec.js`
- `npm install jest -D`
- in `package.json`: `"test": "jest"`

> Remind me: what process do we use for writing tests? (Red Green Refactor)

## our first function today

- takes an array of numbers and doubles each number
- don't use array methods at first; for loops will show us the way!

## Example 1: use for loops to double/triple all the numbers

`copyArrayAndDouble` - Test for:

- empty array
- doubling one number
- doubling multiple numbers

> What data type is `expect`? (It's a function)
> What data type is `toEqual`? (Also a function)

Build up the functionality using a `for` loop

`copyArrayAndTriple` - same tests, same `for` loop

> What is the problem with this approach? (It's not DRY)
> How can we resolve this problem? (Introduce a new function `copyArrayAndDoStuff` that takes an additional argument - a function. A HOF takes another function as an argument; the argument function returns a value that the HOF uses to build up the output array)
> Which array method could we use instead? (This is basically .map under the hood)

- a function that is passed into another function as an argument is called a *callback*
- a function that works on every item in an iterable set (like an array) is called an *iteratee*
- `.map` returns a new array, where each item has been affected by the iteratee

## Example 2: get all the even numbers

This method...

- creates a new array
- iterates over the input array
- can give us an array of different length to the original it was called on

This time, pass `.filter` an anonymous function - this callback function returns a boolean - it's called a *predicate*. If a number doesn't pass the predicate, it gets filtered out of the final array

> the power of array methods!!!

## pure functions

- don't have side effects; `.filter` shouldn't mutate variables in the global execution context
- so we won't need a `const output` that `.filter` pushes to; `.filter` already returns a new array!

> What are the benefits of not mutating data and returning something different?

-- show broken -> get everyone to help fix -> show the right way -> name the right way

## TDD kata solution
