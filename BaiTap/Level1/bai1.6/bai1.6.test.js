const ascendingOrder = require("./bai1.6.js");
test("Asscending array", () => {
  expect(ascendingOrder([6, 5, 7, 1, 2])).toEqual([1, 2, 5, 6, 7]);
});
