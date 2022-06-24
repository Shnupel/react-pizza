import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketCarts, ICartState } from "../../../interface/interfaces";

import { getCartFromLS } from "../../utils/getParamsFromLocalStrorage";
import { findPizzaFromRedux, filterDeletePizzaFromRedux, filterCounterZeroDownPizzaFromRedux } from "../../utils/getPizzaFromRedux";

const initialState: ICartState = {
  items: getCartFromLS()
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IBasketCarts>) => {
      const comparison = findPizzaFromRedux(state, action);
      if(comparison){
        comparison.count += 1;
      }else{
        state.items.push({...action.payload, count: 1});
      }
    },
    removeProduct: (state, action: PayloadAction<IBasketCarts>) => {
      state.items = filterDeletePizzaFromRedux(state, action);
    },
    clearItems: (state) => {
      state.items = [];
    },
    decrementCounter: (state, action: PayloadAction<IBasketCarts>) => {
      const comparison = findPizzaFromRedux(state, action);
      comparison!.count -= 1;
      if(comparison!.count === 0){
        state.items = [...filterCounterZeroDownPizzaFromRedux(state, action)]
      }
    },
    incrementCounter: (state, action: PayloadAction<IBasketCarts>) => {
      const comparison = findPizzaFromRedux(state, action);
      comparison!.count += 1;
    },
    deletePizza: (state, action: PayloadAction<IBasketCarts>) => {
      state.items = [...filterCounterZeroDownPizzaFromRedux(state, action)];
    }
  }
});

export const { addProduct, removeProduct, clearItems, decrementCounter, incrementCounter, deletePizza } = cartSlice.actions;

export default cartSlice.reducer;