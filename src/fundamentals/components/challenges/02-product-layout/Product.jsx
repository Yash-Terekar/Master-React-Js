import ProductInfo from "./ProductInfo";

const Product = () => {
  const price = 160000;
  return (
    <div>
      <h2>Gaming Laptop</h2>
      <h2>₹{price}</h2>
      <ProductInfo />
    </div>
  );
};

export default Product;
