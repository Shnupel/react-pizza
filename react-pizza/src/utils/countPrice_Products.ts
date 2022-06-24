import { IBasketCarts } from "../../interface/interfaces";

export const countProducts = (pizzas: IBasketCarts[]) => {
  let counter = 0;
  pizzas.forEach(pizza => counter += pizza.count);
  return counter;
}

export const costProducts = (pizzas: IBasketCarts[]) => {
  let cost = 0;
  pizzas.forEach(pizza => cost += pizza.count*pizza.cost)
  return cost;
}