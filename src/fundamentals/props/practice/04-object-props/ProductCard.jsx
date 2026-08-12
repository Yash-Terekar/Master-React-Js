const ProductCArd = ({ product }) => {
  return (
    <div>
      <h1>Product Name: {product.name}</h1>
      <h2>Product Price: {product.price}</h2>
      <h2>Product Category: {product.category}</h2>
    </div>
  );
};
export default ProductCArd;
