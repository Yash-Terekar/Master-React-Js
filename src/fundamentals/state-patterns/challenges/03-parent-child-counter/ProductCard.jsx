const ProductCard = ({ name, price, addToCart }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
