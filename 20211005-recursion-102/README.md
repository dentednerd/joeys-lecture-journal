# Recursion 102

## After this morning, we can...

- identify the key features of a recursive function
- understand when using recursion is necessary / a good idea

## This afternoon, we will...

- gain confidence in applying recursion to nested collections
- briefly look at using VSCode's inbuilt debugger to debug recursive problems

---

## containsKey()

Create a recursive function, `containsKey`, that accepts a nested object and a key. The function will search through the object for the key. If the key is found at any level within the object, return `true`; if not, return `false`.

### Example

```js
const fruitsBasket = {
  apples: 2,
  bananas: 4,
  oranges: 3,
  pears: 7,
  riceballs: 1,
  berries: {
    strawberries: 8,
    raspberries: 10,
    blueberries: 14
  }
}

containsKey(fruitsBasket, 'pears');
// returns true

containsKey(fruitsBasket, 'dragonfruits');
// returns false

containsKey(fruitsBasket, 'blueberries');
// returns true
```
