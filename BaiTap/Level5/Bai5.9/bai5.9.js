function sumAll(arr) {
  return arr.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      const val = Number(obj[key]);
      if (!isNaN(val)) {
        acc[key] = (acc[key] || 0) + val;
      }
    });
    return acc;
  }, {});
}
module.exports = sumAll;
