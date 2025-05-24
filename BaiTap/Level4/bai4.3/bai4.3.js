function longestSubstring(strings) {
  if (strings.length === 0) return 0;

  const firstStr = strings[0];
  let maxLength = 0;

  // Try all possible substrings of the first string
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = i + 1; j <= firstStr.length; j++) {
      const substr = firstStr.slice(i, j);

      // Check if this substring appears in all other strings
      const isCommon = strings.every((str) => str.includes(substr));

      if (isCommon) {
        maxLength = Math.max(maxLength, substr.length);
      }
    }
  }

  return maxLength;
}

module.exports = longestSubstring;
