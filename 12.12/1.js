//TODO: Write a function to find the longest common prefix string amongst an array of strings.

//TODO: If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (str) {
  if (!str.length) return "";

  let prefix = str[0];

  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
