function countSubsets(arr, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    for (let sum = target; sum >= num; sum--) {
      dp[sum] += dp[sum - num];
    }
  }

  return dp[target];
}

