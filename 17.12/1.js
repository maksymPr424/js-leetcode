//TODO: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

//TODO: Increment the large integer by one and return the resulting array of digits.

var plusOne = function (digits) {
  let stringNumber = "";

  digits.forEach((num) => (stringNumber = stringNumber + num.toString()));

  const result = [];
  (Number(stringNumber) + 1)
    .toString()
    .split("")
    .forEach((str) => result.push(Number(str)));

  return result;
};

//* For all arrays
/*
var plusOne = function (digits) {
    let carry = 1; 
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += carry;
      if (digits[i] < 10) {
        carry = 0; 
        break;
      }
      digits[i] = 0; 
    }
    if (carry > 0) {
      digits.unshift(1);
    }
    return digits;
  };
*/

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
