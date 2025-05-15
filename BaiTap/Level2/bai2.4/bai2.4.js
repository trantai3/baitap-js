function sumNumbersDivBoth3And5(arr) {
  let sum = 0;
  for (num of arr) {
    if (num % 5 === 0 && num % 3 === 0) {
      sum += num;
    }
  }
  return sum;
}

module.exports = sumNumbersDivBoth3And5;
