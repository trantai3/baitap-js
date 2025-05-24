function findMedianOfTwoArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Both inputs must be arrays.");
  }

  const combined = [...arr1, ...arr2].sort((a, b) => a - b);

  const len = combined.length;
  if (len === 0) {
    throw new Error("Combined array cannot be empty.");
  }

  const mid = Math.floor(len / 2);

  if (len % 2 === 1) {
    return combined[mid]; // số lẻ
  } else {
    return (combined[mid - 1] + combined[mid]) / 2; // số chẵn
  }
}

module.exports = findMedianOfTwoArrays;
