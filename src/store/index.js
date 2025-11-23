import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import likeSlice from "./likeSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    like: likeSlice,
  },
});

export default store;
