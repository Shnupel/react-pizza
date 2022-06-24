import { PayloadAction } from "@reduxjs/toolkit";
import { IBasketCarts } from "../../interface/interfaces";

interface StateInterface{
  items: IBasketCarts[]
}

export const findPizzaFromRedux = (state: StateInterface, action: PayloadAction<IBasketCarts>) => state.items.find(item => (item.id === action.payload.id) && (item.size === action.payload.size) && (item.type === action.payload.type));
export const filterDeletePizzaFromRedux = (state: StateInterface, action: PayloadAction<IBasketCarts>) => state.items.filter(item => (item.id === action.payload.id) && (item.size === action.payload.size) && (item.type === action.payload.type));
export const filterCounterZeroDownPizzaFromRedux = (state: StateInterface, action: PayloadAction<IBasketCarts>) => {
  if(action.payload.id.includes("-")){
    return state.items.filter(item => item.id !== action.payload.id.replace("-", ""));
  }
  return state.items.filter(item => (item.id !== action.payload.id) || (item.size !== action.payload.size) || (item.type !== action.payload.type))
};