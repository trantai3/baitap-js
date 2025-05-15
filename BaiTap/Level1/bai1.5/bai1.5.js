function shortestString(arr) {
  return arr.reduce((min, curr) => (curr.length < min.length ? curr : min));
}
module.exports = shortestString;
