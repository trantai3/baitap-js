function longestString(arr) {
  arr.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length;
    }
    return a.localeCompare(b);
  });
  return arr;
}

module.exports = longestString;
