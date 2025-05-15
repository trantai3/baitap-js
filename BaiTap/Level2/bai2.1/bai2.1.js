function secondLargestNumber(arr) {
  const newArr = arr.sort((a, b) => a - b);
  return newArr[arr.length - 2];
}

module.exports = secondLargestNumber;
