import calculatePizzaPrice from "./calculatePizzaPrice";

export default function calculateOrderTotal(order, pizzas) {
  // Loop over each item in the order
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((pie) => pie.id === singleOrder.id);
    // Calc the total for that pizza
    // add that total to the running total
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
