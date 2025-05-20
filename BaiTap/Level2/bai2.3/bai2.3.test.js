const longestCommonSubstring = require("./bai2.3.test");

test("should return the longest common substring", () => {
  expect(longestCommonSubstring("abcdef", "zcdemf")).toBe("cde");
  expect(longestCommonSubstring("abc", "abc")).toBe("abc");
});

test("should throw error for invalid input", () => {
  expect(() => longestCommonSubstring(123, "abc")).toThrow();
  expect(() => longestCommonSubstring("abc", null)).toThrow();
  expect(() => longestCommonSubstring([], "abc")).toThrow();
});
