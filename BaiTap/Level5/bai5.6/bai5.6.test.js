const trimAll = require("./bai5.6.js");
test("trimAll", () => {
  expect(trimAll("    hello     world    ")).toEqual("hello world");
});
