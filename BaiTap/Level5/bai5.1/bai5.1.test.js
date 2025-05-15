const reverse = require("./bai5.1.js");
test("Reverse array", () => {
  expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});
