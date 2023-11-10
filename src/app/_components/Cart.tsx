"use client";
import ProductInCart from "@/components/ProductInCart";
import { useCartContext } from "@/context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div className="bg-black text-white w-full h-full">
      <h1>Cart</h1>
      <div className="flex justify-start">
        {Object.values(cart).map(({ count, product }) => (
          <ProductInCart key={product.id} count={count} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
