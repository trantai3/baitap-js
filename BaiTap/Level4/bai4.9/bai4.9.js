function arangeArray(arr) {
  if (arr.length === 0) return 0;

  const dp = Array(arr.length).fill(1);
  arr.reduce((_, current, i) => {
    for (let j = 0; j < i; j++) {
      if (current > arr[j] && current - arr[j] <= 1) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }, 0);

  return Math.max(...dp);
}

module.exports = arangeArray;
