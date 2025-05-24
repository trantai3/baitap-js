function longestIncreasingSubseqWithDiff1(arr) {
  if (arr.length === 0) return 0;

  let maxLen = 1;
  let currentLen = 1;

  arr.reduce((prev, curr) => {
    if (curr > prev && curr - prev <= 1) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 1;
    }
    return curr;
  });

  return maxLen;
}

module.exports = longestIncreasingSubseqWithDiff1;
