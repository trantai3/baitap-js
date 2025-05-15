function maxProductOfThree(arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;

  const option1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
  const option2 = arr[0] * arr[1] * arr[n - 1];

  return Math.max(option1, option2);
}

module.exports = maxProductOfThree;
