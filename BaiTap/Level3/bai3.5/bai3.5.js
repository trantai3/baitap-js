function findSmallestUnrepresentableSum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }

  // Kiểm tra mảng có phần tử không phải số nguyên dương
  for (let num of arr) {
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error("All elements must be positive integers.");
    }
  }

  arr.sort((a, b) => a - b); // Sắp xếp tăng dần

  let res = 1; // Bắt đầu kiểm tra từ số 1

  for (let i = 0; i < arr.length && arr[i] <= res; i++) {
    res += arr[i]; // Cộng dồn nếu phần tử <= res
  }

  return res;
}

module.exports = findSmallestUnrepresentableSum;
