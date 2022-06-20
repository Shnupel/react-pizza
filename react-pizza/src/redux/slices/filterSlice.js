import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  searchFilter: "",
  sort: {
    name: "популярности",
    sortProperty: "rating"
  }
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
    setFilters: (state, action) => {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    }
  }
});

export const { setCategoryId, setSort, setSearchFilter, setFilters } = filterSlice.actions;

export default filterSlice.reducer;