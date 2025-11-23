import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "like",
  initialState: {
    likes: JSON.parse(localStorage.getItem("likes")) || [],
  },
  reducers: {
    addToLike: (state, action) => {
      if (state.likes.some((el) => el.id === action.payload.id)) {
        state.likes = state.likes.filter((el) => el.id !== action.payload.id);
      } else {
        state.likes.unshift(action.payload);
      }

      localStorage.setItem("likes", JSON.stringify(state.likes));
    },
  },
});

export const { addToLike, removeToLike } = likeSlice.actions;
export default likeSlice.reducer;
