# Queues

Implement a `createQueue` factory function that returns a queue instance.
The `createQueue` function will take a single argument representing the `maxSize`, the limit of the number of items in the queue.

```js
const testQueue = createQueue(5);
// the new queue instance is allowed up to 5 items in the queue storage
```

An instance of `createQueue` should have the following:

- `front` and `back` properties, representing the position of the front and back of the queue respectively. You should use these properties to add and remove items from the queue at the correct position.
- A `storage` property, which is initially an empty object {}.
- An `enQueue` method that adds items to the back of the queue. Items can only be added if the queue isn't full.
- A `deQueue` method that removes items from the front of the queue, provided the queue isn't already empty.- A `getQuantity` method that returns the number of items in the queue.
- An `isEmpty` method that will return a boolean indicating if the queue is empty or not.
- An `isFull` method that will return a boolean indicating if the queue is full or not.
- A `peek` method that returns the element at the front of the queue (without removing it)
