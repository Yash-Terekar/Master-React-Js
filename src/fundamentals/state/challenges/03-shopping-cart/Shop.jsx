import { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  const [count, setCount] = useState(0);
  const clickedBtn = () => setCount(count + 1);
  return (
    <div>
      <Cart count={count} />
      <Product name="Asus Strix G16" price={160000} clicked={clickedBtn} />
      <Product name="Iphone 17" price={80000} clicked={clickedBtn} />
      <Product name="Mouse" price={2600} clicked={clickedBtn} />
    </div>
  );
};
export default Shop;
