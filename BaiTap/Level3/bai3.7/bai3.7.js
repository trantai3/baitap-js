function longestPalindromeLength(s) {
  if (typeof s !== "string") {
    throw new Error("Input must be a string.");
  }

  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const charCount = {};

  for (const char of cleaned) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let length = 0;
  let hasOdd = false;

  for (const count of Object.values(charCount)) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? length + 1 : length;
}

module.exports = longestPalindromeLength;
