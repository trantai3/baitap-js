const uniqArrayObject = require("./uniqArrayObject");

describe("uniqArrayObject function", () => {
  test("removes duplicate objects ignoring key order", () => {
    const input = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { y: 2, x: 1 },
    ];
    const expected = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];
    expect(uniqArrayObject(input)).toEqual(expected);
  });

  test("handles empty array", () => {
    expect(uniqArrayObject([])).toEqual([]);
  });

  test("keeps objects with different keys", () => {
    const input = [{ a: 1 }, { b: 1 }, { a: 1 }];
    const expected = [{ a: 1 }, { b: 1 }];
    expect(uniqArrayObject(input)).toEqual(expected);
  });

  test("handles objects with nested values (does shallow only)", () => {
    const input = [
      { a: 1, b: { c: 2 } },
      { b: { c: 2 }, a: 1 },
      { a: 1, b: { c: 3 } },
    ];
    const expected = [
      { a: 1, b: { c: 2 } },
      { a: 1, b: { c: 3 } },
    ];
    expect(uniqArrayObject(input)).toEqual(expected);
  });
});
