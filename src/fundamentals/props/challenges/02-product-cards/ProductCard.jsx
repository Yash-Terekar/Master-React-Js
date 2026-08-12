const ProductCard = ({ name, price, category, inStock }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Price: {price}</h2>
      <h2>Category: {category}</h2>
      <h2>InStock: {inStock ? "Available" : "Out of Stock"}</h2>
    </div>
  );
};
export default ProductCard;
