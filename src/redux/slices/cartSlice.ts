"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/interFace/interFace";
import { toast } from "react-toastify";
interface CartState {
  cartProducts: ProductType[];
}
const initialState: CartState = {
  cartProducts: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart_product: (state, { payload }: PayloadAction<ProductType>) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item._id === payload._id
      );

      if (productIndex >= 0) {
        state.cartProducts[productIndex].totalCard! += 1;
        toast.info("Increase Product Quantity");
      } else {
        const tempProduct = {
          ...payload,
          totalCard: 1,
        };
        state.cartProducts.push(tempProduct);
        toast.success(`${payload.productName} added to cart`);
      }
    },
    remove_cart_product: (
      state,
      { payload }: PayloadAction<ProductType>
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== payload._id
      );
      toast.error(`remove from your cart`);
    },

    clear_cart: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_quantity: (state, { payload }: PayloadAction<ProductType>) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item._id === payload._id
      );
    
      if (cartIndex >= 0) {
        const totalCard = state.cartProducts[cartIndex]?.totalCard ?? 0;
    
        if (totalCard > 1) {
          state.cartProducts[cartIndex].totalCard = totalCard - 1;
          toast.error(`Quantity Decrease`);
        } else {
          toast.error(`Quantity cannot be less than 1`);
        }
      }
    }
  },
});

export const {
  cart_product,
  remove_cart_product,
  clear_cart,
  decrease_quantity,
} = cartSlice.actions;

export default cartSlice.reducer;
