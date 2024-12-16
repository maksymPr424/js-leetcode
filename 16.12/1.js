//TODO: Given a string s consisting of words and spaces, return the length of the last word in the string.

//TODO:A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
  const splitStr = s.trim().split(" ");
  return splitStr[splitStr.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
