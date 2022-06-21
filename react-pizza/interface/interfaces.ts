export interface IPizzaData {
  imageUrl: string,
  name: string,
  price: number
}

export type ICartState = {
  cart: {
    totalPrice: number,
    counterPizzas: number,
    items: IBasketCarts[]
  }
}

export interface IBasketCarts{
  id: number,
  name: string,
  type: number,
  size: number,
  img: string,
  cost: number,
  count: number
}

export interface IFilter{
  filter:{ 
    categoryId: number,
    searchFilter: string,
    sort: ISortParams
  }
}

export interface ISortParams{
  name: string,
  sortProperty: string
}

export interface IPizzas{
  pizza:{
    status: string,
    items: IPizza[]
  }
}

export interface IPizza{
  id: string,
  name: string,
  types: number[],
  sizes: string[],
  imageUrl: string,
  price: number,
  count: number,
  date: number
}