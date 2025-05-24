function getOverlapLength(s1, s2, k) {
  const minLen = Math.min(s1.length, s2.length);
  for (let len = minLen; len >= k; len--) {
    if (s1.slice(-len) === s2.slice(0, len)) {
      return len;
    }
  }
  return 0;
}

function findMaxOverlapPair(strings, k) {
  let maxOverlap = 0;
  let result = ["", ""];

  strings.forEach((s1, i) => {
    strings.forEach((s2, j) => {
      if (i !== j) {
        const overlap = getOverlapLength(s1, s2, k);
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          result = [s1, s2];
        }
      }
    });
  });

  return result;
}
module.exports = findMaxOverlapPair;
