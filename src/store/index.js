import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import likeSlice from "./likeSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    like: likeSlice,
    cart: cartSlice,
  },
});

export default store;
