function switchOrder(arr, id, newOrder) {
  const newArr = [...arr];

  const index = newArr.findIndex((o) => o.id === id);
  if (index === -1) return arr;

  const objToMove = { ...newArr[index], order: newOrder };
  newArr.splice(index, 1);

  newArr.push(objToMove);

  newArr.sort((a, b) => a.order - b.order);

  for (let i = 0; i < newArr.length; i++) {
    newArr[i].order = i;
  }

  return newArr;
}
module.exports = switchOrder;
