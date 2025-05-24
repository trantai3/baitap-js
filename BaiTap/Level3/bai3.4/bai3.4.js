function countCommonChars(str1, str2) {
  const arr2 = str2.split("");
  let count = 0;

  for (const c of str1) {
    const index = arr2.indexOf(c);
    if (index !== -1) {
      count++;
      arr2.splice(index, 1);
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

console.log(findMostSimilarPair(["hello", "world", "lll", "ll"]));
