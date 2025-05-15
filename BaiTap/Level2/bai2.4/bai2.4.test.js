const sumNumbersDivBoth3And5 = require("./bai2.4.js");
test("Sum of Numbers that divide both 3 and 5", () => {
  expect(sumNumbersDivBoth3And5([1, 3, 5, 15, 30])).toBe(45);
});
