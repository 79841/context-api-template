"use client";
import { useCartContext } from "@/context/CartContext";
import { TProduct } from "@/types/Product";
import { useState } from "react";

type TProps = {
  product: TProduct;
};

const Product = ({ product }: TProps) => {
  const { addProduct } = useCartContext();

  const [count, setCount] = useState(0);
  const handleMinus: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setCount(count - 1);
  };
  const handlePlus: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setCount(count + 1);
  };

  return (
    <div className="w-[100px] h-[100px] border-black border-2 border-solid">
      <div className="flex justify-center">{product.name}</div>
      <ul>
        <li className="flex justify-center">{product.price}</li>

        <div className="flex justify-evenly">
          <button onClick={handleMinus}>-</button>
          <span>{count}</span>
          <button onClick={handlePlus}>+</button>
        </div>

        <button onClick={() => addProduct(product, count)}>Add to Cart</button>
      </ul>
    </div>
  );
};

export default Product;
