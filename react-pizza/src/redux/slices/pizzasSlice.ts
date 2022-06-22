import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPizza } from "../../../interface/interfaces";

export const fetchPizzas = createAsyncThunk('pizza/fetchedPizzas', async (params: Record<string, string>) => {
  const { order, sortBy, category, search } = params;
  const { data } = await axios.get<IPizza[]>(`https://629f95b4461f8173e4ecfc76.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`);
  return data;
});

enum Status{
  LOADING = "loading",
  SUCCES = "success",
  ERROR = "error"
}

interface PizzaSliceState{
  items: IPizza[],
  status: string;
}

const initialState: PizzaSliceState = {
  status: Status.LOADING,
  items: []
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCES;
    })
  }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;