function reverse(arr) {
  let newArr = [];
  for (num of arr) {
    newArr.unshift(num);
  }
  return newArr;
}

module.exports = reverse;
