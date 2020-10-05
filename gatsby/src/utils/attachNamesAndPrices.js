import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from "./formatMoney";

export default function attachNameAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: pizza.name,
      thumbnail: pizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(pizza.price, item.size)),
    };
  });
}
