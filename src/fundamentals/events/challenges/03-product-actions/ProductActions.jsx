const ProductActions = ({ title }) => {
  const handleCartEvent = (event) => {
    console.log(`${title} Added to Cart`);
  };

  const handleBuyEvent = (event) => {
    console.log(`Buying ${title}`);
  };
  return (
    <div>
      <button onClick={handleCartEvent}>Add to Cart</button>
      <button onClick={handleBuyEvent}>Buy Now</button>
    </div>
  );
};
export default ProductActions;
