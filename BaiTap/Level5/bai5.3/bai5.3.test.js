const uniq = require("./bai5.3.js");
test("Uniq", () => {
  expect(uniq([1, 2, 3, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
