import { CartContextProvider } from "@/context/CartContext";
import ProductList from "./_components/ProductList";
import Cart from "./_components/Cart";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center">
      <CartContextProvider>
        <div className="w-1/2 h-full">
          <ProductList />
        </div>
        <div className="w-1/2 h-full">
          <Cart />
        </div>
      </CartContextProvider>
    </div>
  );
}
