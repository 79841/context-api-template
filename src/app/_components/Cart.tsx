"use client";
import ProductInCart from "@/components/ProductInCart";
import { useCartContext } from "@/context/CartContext";

const Cart = () => {
  const { cart, getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();
  return (
    <div className="bg-black text-white w-full h-full">
      <div className="flex">
        <div className="mr-10">Cart</div>
        <div>{totalPrice}</div>
      </div>

      <div className="flex justify-start">
        {Object.values(cart).map(({ count, product }) => (
          <ProductInCart key={product.id} count={count} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
