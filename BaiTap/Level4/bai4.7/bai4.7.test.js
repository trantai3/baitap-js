const longestString = require("./bai4.7.js");
test("Arrange string", () => {
  expect(
    longestString([
      "the quick brown fox",
      "the lazy dog jumps over the fence",
      "the cat in the hat",
    ])
  ).toEqual([
    "the lazy dog jumps over the fence",
    "the quick brown fox",
    "the cat in the hat",
  ]);
});
