// TODO: Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// TODO: The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// TODO: The function composition of an empty list of functions is the identity function f(x) = x.

// TODO: You may assume each function in the array accepts one integer as input and returns one integer as output.

var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const first = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const second = first(4);

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
 // 9
