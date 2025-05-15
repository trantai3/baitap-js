function uniq(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

module.exports = uniq;
