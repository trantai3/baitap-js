function longestIncSub(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let length = 1;
    let prev = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > prev) {
        length++;
        prev = arr[j];
      }
    }

    if (length > max) {
      max = length;
    }
  }

  return max;
}

module.exports = longestIncSub;
