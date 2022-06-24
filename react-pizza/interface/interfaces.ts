export interface ICartState {
  items: IBasketCarts[]
}

export type IBasketCarts = {
  id: string,
  name: string,
  type: number,
  size: string,
  img: string,
  cost: number,
  count: number
}

export type ISortParams = {
  name: string,
  sortProperty: "rating" | "price" | "-price" | "name" | "-name"
}

export type IPizza = {
  id: string,
  name: string,
  types: number[],
  sizes: string[],
  imageUrl: string,
  price: number,
  count: number,
  date: number
}