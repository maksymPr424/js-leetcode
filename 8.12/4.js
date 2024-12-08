// TODO: Write a generator function that returns a generator object which yields the fibonacci sequence.

// TODO: The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// TODO: The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

// TODO: Constraints: 0 <= callCount <= 50

var fibGenerator = function* () {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
