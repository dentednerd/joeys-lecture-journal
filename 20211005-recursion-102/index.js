function containsKey(obj, keyToFind) {
  if (!obj || !keyToFind) return false;
  if (obj.hasOwnProperty(keyToFind)) return true;

  if (typeof obj === 'object') {
    for (let key in obj) {
      if (containsKey(obj[key], keyToFind)) return true;
    }
  }

  return false;
}

module.exports = containsKey;
