function median(arr) {
  const arrAsc = arr.sort((a, b) => a - b);
  if (arrAsc.length % 2 !== 0) {
    const ind = (arrAsc.length + 1) / 2;
    return arr[ind - 1];
  } else {
    const kq = (arr[arrAsc.length / 2] + arr[arrAsc.length / 2 - 1]) / 2;
    return kq;
  }
}

module.exports = median;
