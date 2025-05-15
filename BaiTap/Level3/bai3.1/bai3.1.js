function secondSmallestNumber(arr) {
  const newArr = arr.sort((a, b) => a - b);
  return newArr[1];
}

module.exports = secondSmallestNumber;
