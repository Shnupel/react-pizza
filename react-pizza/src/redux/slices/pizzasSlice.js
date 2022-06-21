import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchedPizzas', async (params, thunkAPI) => {
  const { order, sortBy, category, search } = params;
  const result = await axios.get(`https://629f95b4461f8173e4ecfc76.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`);
  return result.data;
})

const initialState = {
  status: "loading", //loading, success, error
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
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
      console.log(action);
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
  }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;