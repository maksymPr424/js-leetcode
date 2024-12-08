// TODO: Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// TODO:This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// TODO:If the length of the array is 0, the function should return init.
// TODO:Please solve it without using the built-in Array.reduce method.

var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let accum = init;

  for (let i = 0; i < nums.length; i++) {
    console.log(accum);

    accum = fn(accum, nums[i]);
  }
  return accum;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr * curr;
};
const init = 100;
console.log(reduce(nums, fn, init));
