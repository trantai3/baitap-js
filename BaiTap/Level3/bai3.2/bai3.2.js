function maximumdifferent(arr) {
  let max = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > max) {
        max = Math.abs(arr[i] - arr[j]);
      }
    }
  }
  return max;
}

module.exports = maximumdifferent
