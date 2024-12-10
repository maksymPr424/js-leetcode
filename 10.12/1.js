//TODO: Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

//* Constraints:
//* 1 <= num.length <= 1000
//* num consists of only digits.
//* num doesn't have any leading zeros.

/*
//! Without make string

var removeTrailingZeros = function (num) {
  let res = num;

  while (res % 10 === 0 && res !== 0) {
    res /= 10;
  }
  return res;
};
*/

/*
//! With make string

var removeTrailingZeros = function (num) {
  return num.toString().replace(/0+$/, "");
};
*/

console.log(removeTrailingZeros(12300));
console.log(removeTrailingZeros(123));
