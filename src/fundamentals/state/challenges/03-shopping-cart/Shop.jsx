import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <Cart />
      <Product name="Asus Strix G16" price={160000} />
      <Product name="Iphone 17" price={80000} />
      <Product name="Mouse" price={2600} isClicked />
    </div>
  );
};
export default Shop;
