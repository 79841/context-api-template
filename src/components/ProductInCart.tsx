import { useCartContext } from "@/context/CartContext";
import { TProduct } from "@/types/Product";

type TProps = {
  count: number;
  product: TProduct;
};

const ProductInCart = ({ count, product }: TProps) => {
  const { deleteProduct } = useCartContext();

  return (
    <div className="w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white border-solid">
      <div>{product.name}</div>
      <ul>
        <li>{product.price}</li>
        <li>{count}</li>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </ul>
    </div>
  );
};

export default ProductInCart;
