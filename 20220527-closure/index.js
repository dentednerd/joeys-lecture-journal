const hof = {};

// Write a function `addf` that adds from two invocations.

hof.addf = function(arg1) {
  return function(arg2) {
    return function(arg3) {
      return arg1 + arg2 + arg3;
    }
  };
}

module.exports = hof;

// What is closure?
// combination of a function with its lexical environment
// function that refs vars in the outer scope from its inner scope

// Why is it useful?
// allows for complicated functions
// encapsulation - data is only reachable from certain places, but not globally (data privacy)

// How is a closure created?
// a function within a function
// returns a reference to a function within a function

// What is the COVE?
// Closed Over Variable Environment

// How does the COVE fit into the rules of scope?
// doesn't change of scope
// parent function will end its execution context, but variables from the parent func can still be accessed by the child / COVE
// limits reach of variables to avoid writing to global scope
