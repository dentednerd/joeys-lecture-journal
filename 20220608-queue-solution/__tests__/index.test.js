const createQueue = require('../index');

describe('#createQueue properties', () => {
  test('returns an empty object on the .storage property when created', () => {
    // arrange
    const testQueue = createQueue(); // { storage: {} }

    // assert
    expect(testQueue.storage).toEqual({});
  });

  test('if no maxSize argument is provided, assign a default value of 5 to maxSize', () => {
    const testQueue = createQueue();

    expect(testQueue.maxSize).toBe(5);
  });

  test('when passed a maxSize argument, returns a .maxSize property of that value', () => {
    const testQueue = createQueue(10);

    expect(testQueue.maxSize).toBe(10);
  });

  test('returned object has a .front and .back property, both initialised to 1', () => {
    const testQueue = createQueue();

    expect(testQueue.hasOwnProperty('front')).toBe(true);
    expect(testQueue.hasOwnProperty('back')).toBe(true);
    expect(testQueue.front).toBe(1);
    expect(testQueue.back).toBe(1);
  });
});

describe('#createQueue methods', () => {
  test('.enQueue - adds an item to the back of the queue if the queue is not full', () => {
    // arrange
    const testQueue = createQueue();

    // act
    testQueue.enQueue('apple');
    expect(testQueue.back).toBe(2);
    expect(testQueue.storage[testQueue.front]).toBe('apple');
    expect(testQueue.storage).toEqual({ 1: 'apple' });
  });

  test('.enQueue - does not add an item to the back of the queue if the queue is full', () => {
    // arrange
    const testQueue = createQueue(2);

    // act
    testQueue.enQueue('apple');
    testQueue.enQueue('banana');
    testQueue.enQueue('grape');

    expect(testQueue.storage).toEqual({ 1: 'apple', 2: 'banana' });
  });
});
