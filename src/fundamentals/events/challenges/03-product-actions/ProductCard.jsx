import ProductActions from "./ProductActions";

const ProductCard = ({ title, price, category }) => {
  return (
    <div>
      <p>================================</p>
      <h1>{title}</h1> <h2>₹{price}</h2> <h2>{category}</h2>
      <ProductActions title={title} />
      <p>================================</p>
    </div>
  );
};
export default ProductCard;
