function shareBirthdayCake(slicesOfCake) {
  // base case (stop)
  if (slicesOfCake === 0) return 'The cake has been shared. It was delicious.';

  // recursive case (self)
  return shareBirthdayCake(slicesOfCake - 1); // recursive step is decrementing slicesOfCake
}

function countNestedItems(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])) {
      count++;
    } else {
      count += countNestedItems(arr[i]); // recursive case (self)
    }
  }
  return count; // base case
}

function containsKey(input, key) {
  if (input.hasOwnProperty(key)) return true;

  for (prop in input) {
    if (typeof input[prop] === 'object' && !Array.isArray(input[prop])) {
      return containsKey(input[prop], key);
    }
  }

  return false;
}

module.exports = {
  shareBirthdayCake,
  countNestedItems,
  containsKey
};
