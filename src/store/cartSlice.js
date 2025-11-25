import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCartInDetail: (state, action) => {
      const item = action.payload.product;

      const inCart = state.carts.find((el) => el.id == item.id);

      console.log("item", item);
      console.log("many", action.payload.many);

      if (inCart) {
        state.carts = [
          { ...inCart, count: inCart.count + action.payload.many },
          ...state.carts.filter((el) => el.id !== item.id),
        ];
      } else {
        state.carts = [{ ...item, count: action.payload.many }, ...state.carts];
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

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

    addToInCart: (state, action) => {
      const item = action.payload;
      const inCart = state.carts.find((el) => el.id == item.id);

      if (inCart) {
        state.carts = state.carts.map((el) =>
          el.id === item.id ? { ...el, count: el.count + 1 } : el
        );
      } else {
        state.carts = [...state.carts, { ...item, count: 1 }];
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

export const { addToCartInDetail, addToCart, removeFromCart, addToInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
