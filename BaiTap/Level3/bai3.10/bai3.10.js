function sortByUniqueCharacters(arr) {
  if (!Array.isArray(arr) || !arr.every((s) => typeof s === "string")) {
    throw new Error("Input must be an array of strings.");
  }

  return arr
    .map((str, index) => ({
      str,
      uniqueCount: new Set(str).size,
      index,
    }))
    .sort((a, b) => {
      if (a.uniqueCount !== b.uniqueCount) {
        return a.uniqueCount - b.uniqueCount;
      }
      return a.index - b.index;
    })
    .map((item) => item.str);
}

module.exports = sortByUniqueCharacters;
