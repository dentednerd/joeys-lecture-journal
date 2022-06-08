function enQueue(string) {
  if (this.back - this.front < this.maxSize) { // can we add anything to the queue?
    this.storage[this.back] = string; // { 1: string }
    this.back++;
  }
}

function createQueue(maxSize = 5) {
  const newQueue = {};
  newQueue.storage = {}; // this.storage
  newQueue.maxSize = maxSize;
  newQueue.front = 1;
  newQueue.back = 1;

  newQueue.enQueue = enQueue;

  return newQueue;
}

module.exports = createQueue;
