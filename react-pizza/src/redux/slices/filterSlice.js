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
      state.categoryId = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload
    }
  }
});

export const { setCategoryId, setSort, setSearchFilter } = filterSlice.actions;

export default filterSlice.reducer;