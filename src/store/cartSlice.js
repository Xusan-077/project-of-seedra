import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const inCart = state.carts.find((el) => el.id == item.id);

      if (inCart) {
        state.carts = [
          { ...inCart, count: inCart.count + 1 },
          ...state.carts.filter((el) => el.id !== item.id),
        ];
      } else {
        state.carts = [{ ...item, count: 1 }, ...state.carts];
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    removeFromCart: (state, action) => {
      const item = action.payload;

      if (item.count === 1) {
        state.carts = state.carts.filter((el) => el.id !== item.id);
      } else {
        state.carts = state.carts.map((el) =>
          el.id === item.id ? { ...el, count: el.count - 1 } : el
        );
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
