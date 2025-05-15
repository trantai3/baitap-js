const ascendingAlphabet = require("./bai1.7.js");
test("Asscending Alphabet", () => {
  expect(ascendingAlphabet(["e", "c", "a", "b"])).toEqual(["a", "b", "c", "e"]);
});
