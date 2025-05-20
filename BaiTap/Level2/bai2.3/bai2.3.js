function longestCommonSubstring(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Inputs must be strings.");
  }

  const m = str1.length;
  const n = str2.length;
  let maxLength = 0;
  let endIndex = 0;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i;
        }
      }
    }
  }

  return str1.substring(endIndex - maxLength, endIndex);
}

module.exports = longestCommonSubstring;
