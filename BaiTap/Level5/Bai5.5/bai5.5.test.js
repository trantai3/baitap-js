const groupBy = require("./bai5.5");
describe("groupBy function", () => {
  test("groups objects by specified key", () => {
    const collect = [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 2, b: 2 },
    ];
    const expected = {
      1: [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
      ],
      2: [{ a: 2, b: 2 }],
    };
    expect(groupBy(collect, "a")).toEqual(expected);
  });

  test("returns empty object if input array is empty", () => {
    expect(groupBy([], "a")).toEqual({});
  });

  test("groups by string key", () => {
    const collect = [
      { type: "fruit", name: "apple" },
      { type: "fruit", name: "banana" },
      { type: "vegetable", name: "carrot" },
    ];
    const expected = {
      fruit: [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "banana" },
      ],
      vegetable: [{ type: "vegetable", name: "carrot" }],
    };
    expect(groupBy(collect, "type")).toEqual(expected);
  });
});
