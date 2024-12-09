//TODO: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//* Constraints: 0 <= args.length <= 10

var createHelloWorld = function () {
  return function (...args) {
    if (args.length >= 0 && args.length <= 10) {
      return "Hello World";
    }
  };
};

const f = createHelloWorld();
console.log(f());
// "Hello World"
