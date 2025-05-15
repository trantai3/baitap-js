function countCommonChars(str1, str2) {
  let countedChars = "";
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (countedChars.includes(char)) continue;

    if (str2.includes(char)) {
      count++;
      countedChars += char;
    }
  }

  return count;
}

function findMostSimilarPair(arr) {
  let max = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const common = countCommonChars(arr[i], arr[j]);
      if (common > max) {
        max = common;
        result = [arr[i], arr[j]];
      }
    }
  }

  return result;
}

module.exports = findMostSimilarPair;
