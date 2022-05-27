// getMiddleChar
function getMiddleChar(string) {
  if (string.length === 2) return string;
  let middleIndex = Math.floor(string.length / 2);
  return string[middleIndex];
}

module.exports = getMiddleChar;
