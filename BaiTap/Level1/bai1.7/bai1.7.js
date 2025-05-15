function ascendingAlphabet(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

module.exports = ascendingAlphabet;
