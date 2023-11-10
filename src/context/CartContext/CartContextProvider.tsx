"use client";

import { TCart } from "@/types/Cart";
import { TProduct } from "@/types/Product";
import { useState } from "react";
import { CartContext } from "./CartContext";

type TProps = React.PropsWithChildren;

export const CartContextProvider = ({ children }: TProps) => {
  const [cart, setCart] = useState<TCart>([]);

  const cartController = {
    addProduct(product: TProduct, count: number) {
      const newCart =
        product.id in cart
          ? {
              ...cart,
              [product.id]: {
                count: cart[product.id].count + count,
                product,
              },
            }
          : { ...cart, [product.id]: { count, product } };
      setCart(newCart);
    },

    deleteProduct(productId: number) {
      const { [productId]: _, ...newCart } = cart;
      setCart(newCart);
    },

    getTotalPrice() {
      return Object.values(cart).reduce((total, { count, product }) => {
        return total + count * product.price;
      }, 0);
    },
  };
  return (
    <CartContext.Provider value={{ cart, ...cartController }}>
      {children}
    </CartContext.Provider>
  );
};
