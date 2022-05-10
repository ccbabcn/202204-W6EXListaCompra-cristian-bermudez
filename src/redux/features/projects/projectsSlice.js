import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: [],
  reducers: {
    loadItems: (shoppingList, action) => [...action.payload],
  },
});

export const { loadItems: loadItemsActionCreator } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
