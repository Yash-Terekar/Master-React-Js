import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };
  return (
    <div>
      <Cart count={cartCount} />
      <ProductCard
        name="Asus Rog Strix G16"
        price="200000"
        addToCart={handleAddToCart}
      />
      <ProductCard
        name="Iphone 18"
        price="120000"
        addToCart={handleAddToCart}
      />
      <ProductCard
        name="Logitech Mouse"
        price="2400"
        addToCart={handleAddToCart}
      />
    </div>
  );
};
export default Shop;
