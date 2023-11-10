import Product from "@/components/Product";
import { products } from "@/data/products";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="flex justify-start flex-wrap w-full h-full">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
