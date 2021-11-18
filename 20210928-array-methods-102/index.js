function copyArrayAndDouble(array) {
  const output = []; // first test: return an empty array if no/empty array given

  // output.push(array[0] * 2); // second test: double a single value

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2); // third test: double multiple values
  }

  return output;
}

function copyArrayAndTriple(array) {
  const output = []; // first test: return an empty array if no/empty array given

  // output.push(array[0] * 2); // second test: triple a single value

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 3); // third test: triple multiple values
  }

  return output;
}

function copyArrayAndDoStuff(array, instructions) {
  const output = []; // returns new array

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i])); // runs instructions on every item in the array
  }

  return output;
}

function tripleValue(value) {
  return value * 3;
}

module.exports = {
  copyArrayAndDouble,
  copyArrayAndTriple,
  copyArrayAndDoStuff,
  tripleValue
}
