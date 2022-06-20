import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  counterPizzas: 0,
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const comparison = state.items.find(item => (item.id === action.payload.id) && (item.size === action.payload.size) && (item.type === action.payload.type));
      if(comparison){
        comparison.count += 1;
      }else{
        state.items.push({...action.payload, count: 1});
      }
      state.totalPrice += action.payload.cost;
      state.counterPizzas += 1;
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id === action.payload.id && item.size === action.payload.size && item.type === action.payload.type);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.counterPizzas = 0;
    },
    decrementCounter: (state, action) => {
      const comparison = state.items.find(item => (item.id === action.payload.id) && (item.size === action.payload.size) && (item.type === action.payload.type));
      comparison.count -= 1;
      if(comparison.count === 0){
        state.items = [...state.items.filter(item => (item.id !== action.payload.id) || (item.size !== action.payload.size) || (item.type !== action.payload.type))]
      }
      state.totalPrice -= action.payload.cost;
      state.counterPizzas -= 1;
    },
    incrementCounter: (state, action) => {
      const comparison = state.items.find(item => (item.id === action.payload.id) && (item.size === action.payload.size) && (item.type === action.payload.type));
      comparison.count += 1;
      state.totalPrice += action.payload.cost;
      state.counterPizzas += 1;
    },
    deletePizza: (state, action) => {
      state.items = [...state.items.filter(item => (item.id !== action.payload.id) || (item.size !== action.payload.size) || (item.type !== action.payload.type))]
      state.totalPrice -= action.payload.cost * action.payload.count;
      state.counterPizzas -= action.payload.count;
    }
  }
});

export const { addProduct, removeProduct, clearItems, decrementCounter, incrementCounter, deletePizza } = cartSlice.actions;

export default cartSlice.reducer;