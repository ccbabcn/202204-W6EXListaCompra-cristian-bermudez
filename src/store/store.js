import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "../redux/features/projects/projectsSlice";

const store = configureStore({
  reducer: { shoppingList: shoppingListReducer },
});

export default store;
