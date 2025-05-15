function numberStringStarta(str) {
  let count = 0;
  const strConvertToString = str.trim().split(" ");
  for (char of strConvertToString) {
    const check = char.includes("a");
    if (check) ++count;
  }
  return count;
}

module.exports = numberStringStarta;
