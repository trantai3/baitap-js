function largestString(str) {
  const arr = str.trim().split(" ");
  return arr.reduce((max, curr) => (curr.length > max.length ? curr : max));
}
module.exports = largestString;
