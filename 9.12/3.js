//TODO: Given an array arr and a chunk size size, return a chunked array.

//TODO: A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

//TODO: You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

//TODO: Please solve it without using lodash's _.chunk function.

//* Constraints:
//* arr is a valid JSON array
//* 2 <= JSON.stringify(arr).length <= 105
//* 1 <= size <= arr.length + 1

var chunk = function (arr, size) {
  if (!Array.isArray(arr)) {
    return;
  }

  if (typeof size !== "number" || size < 1 || size > arr.length + 1) {
    return;
  }

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const element = [];
    for (let j = i; j < size + i; j++) {
      if (arr[j] !== undefined) {
        element.push(arr[j]);
      }
    }
    i += size - 1;
    res.push(element);
  }
  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 1));
