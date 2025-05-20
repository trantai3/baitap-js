function mapKey(keys, collections) {
  return collections.map((obj) => {
    const newObj = {};
    keys.forEach((key) => {
      if (key in obj) {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  });
}

module.exports = mapKey;
