function changeOrdersToSalad(input) {
  if (input.length === 0) {
    return [];
  }

  let newOrders = [...input];
  // console.log(input === newOrders);

  let result = newOrders.map((element) => {
    element.main = 'salad';
    return element;
  });

  console.log(result === newOrders);

  return result;
}

module.exports = changeOrdersToSalad;
