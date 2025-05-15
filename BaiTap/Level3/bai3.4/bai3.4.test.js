const findMostSimilarPair = require("./bai3.4.js");
test("Find most similar pari", () => {
  expect(
    findMostSimilarPair([
      "hello",
      "world",
      "foobar",
      "barfoo",
      "he",
      "llo",
      "foobars",
      "abc",
      "cba",
    ])
  ).toEqual(["foobar", "barfoo"]);
});
