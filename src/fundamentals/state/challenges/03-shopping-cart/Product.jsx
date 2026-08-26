const Product = ({ name, price, clicked }) => {
  return (
    <div>
      <h1>Product Name : {name}</h1>
      <h2>Price ${price}</h2>
      <button onClick={clicked}>Add To Cart</button>
    </div>
  );
};
export default Product;
