const largestNumber = require("./bai1.4.js");
test("The largest of array is 5", () => {
  expect(largestNumber([1, 2, 4, 6, 5])).toBe(6);
});
