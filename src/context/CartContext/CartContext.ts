"use client";
import { TCart } from "@/types/Cart";
import { TProduct } from "@/types/Product";
import { createContext, useContext } from "react";

type TCartContext = {
  cart: TCart;
  addProduct: (product: TProduct, count: number) => void;
  deleteProduct: (productId: number) => void;
  getTotalPrice: () => number;
};

export const CartContext = createContext<TCartContext>({
  cart: {},
  addProduct(product: TProduct, count: number) {},
  deleteProduct(productId: number) {},
  getTotalPrice() {
    return 0;
  },
});

export const useCartContext = () => useContext(CartContext);
