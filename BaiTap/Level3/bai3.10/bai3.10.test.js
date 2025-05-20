const sortByUniqueCharacters = require("./sortByUniqueCharacters");

test("should sort by number of unique characters", () => {
  const input = ["apple", "banana", "orange", "kiwi", "strawberry"];
  const output = ["banana", "kiwi", "apple", "orange", "strawberry"];
  expect(sortByUniqueCharacters(input)).toEqual(output);
});

test("should handle empty array", () => {
  expect(sortByUniqueCharacters([])).toEqual([]);
});

test("should throw error if input is not an array of strings", () => {
  expect(() => sortByUniqueCharacters(["valid", 123, "text"])).toThrow();
  expect(() => sortByUniqueCharacters("not array")).toThrow();
});
