import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISortParams } from "../../../interface/interfaces";

interface filterState {
  categoryId: number,
  searchFilter: string,
  sort: ISortParams
}

const initialState: filterState = {
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<ISortParams>) => {
      state.sort = action.payload;
    },
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload;
    },
  }
});

export const { setCategoryId, setSort, setSearchFilter } = filterSlice.actions;

export default filterSlice.reducer;