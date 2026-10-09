const Product = ({ name, price, addToCart }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>${price}</h1>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};
export default Product;
