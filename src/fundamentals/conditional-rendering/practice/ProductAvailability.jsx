import { useState } from "react";

const ProductAvailability = () => {
  const [inStock, setInStock] = useState(true);

  return (
    <div>
      <button
        onClick={inStock ? () => setInStock(false) : () => setInStock(true)}
      >
        Toggle Availiblity
      </button>
      <h1>Asus Rog Strix G16</h1>
      <h2>240000</h2>
      <h2>{inStock ? "In Stock" : "Out of Stock"}</h2>
      <button disabled={!inStock}>Add to Cart</button>
    </div>
  );
};
export default ProductAvailability;
