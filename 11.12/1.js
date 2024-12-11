//TODO: Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  const str = x.toString();
  return str.toString() === str.split("").reverse().join("");
};

console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(122));
