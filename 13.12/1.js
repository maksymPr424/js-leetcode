//TODO: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//TODO: An input string is valid if:

//TODO: Open brackets must be closed by the same type of brackets.
//TODO: Open brackets must be closed in the correct order.
//TODO: Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char in map) {
      const topElement = stack.length ? stack.pop() : "#";
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};


console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true