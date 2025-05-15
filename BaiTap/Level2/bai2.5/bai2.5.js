function maxSubarraySum(arr) {
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];
      res = Math.max(res, currSum);
    }
  }
  return res;
}

module.exports = maxSubarraySum;
