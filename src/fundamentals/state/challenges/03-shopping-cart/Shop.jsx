import { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => setCartCount(cartCount + 1);
  return (
    <div>
      <Cart count={cartCount} />
      <Product
        name="Asus Rog Strix G16"
        price={210000}
        addToCart={handleAddToCart}
      />
      <Product
        name="Iphone 18 Pro"
        price={160000}
        addToCart={handleAddToCart}
      />
      <Product
        name="Samsung Monitor 240hz"
        price={68000}
        addToCart={handleAddToCart}
      />
    </div>
  );
};
export default Shop;
