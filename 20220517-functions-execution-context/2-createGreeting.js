function createGreeting(name, ...otherNames) {
  const greeting = "Hello " + name;
  console.log(otherNames);
  console.log(greeting);
  return 'oreo';
}

// createGreeting('Andrew', 'Mark', 'Jess', 'Raza');

const returnValue = createGreeting('Bela');

console.log(returnValue);
