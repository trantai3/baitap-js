const switchOrder = require("./switchOrder");

const arr = [
  { id: 10, order: 0 },
  { id: 12, order: 1 },
  { id: 9, order: 2 },
  { id: 11, order: 3 },
];

test("switchOrder moves item to new position", () => {
  expect(switchOrder(arr, 9, 1)).toEqual([
    { id: 10, order: 0 },
    { id: 9, order: 1 },
    { id: 12, order: 2 },
    { id: 11, order: 3 },
  ]);
});

test("switchOrder returns original if id not found", () => {
  expect(switchOrder(arr, 99, 1)).toEqual(arr);
});

test("switchOrder still works when newOrder is large", () => {
  expect(switchOrder(arr, 9, 10)).toEqual([
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 11, order: 2 },
    { id: 9, order: 3 },
  ]);
});
