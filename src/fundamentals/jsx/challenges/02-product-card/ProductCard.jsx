import React from "react";

const ProductCard = () => {
  const name = "Asus ROG Strix G16";
  const price = 160000;
  const category = "Laptop";
  const inStock = false;
  return (
    <div>
      <p>-------------------------------------</p>
      <h2>Name: {name}</h2>
      <h2>Price: ${price}</h2>
      <h2>Category: {category}</h2>
      <h2>Available: {inStock ? "Available" : "Out of Stock"}</h2>
      <p>-------------------------------------</p>
    </div>
  );
};

export default ProductCard;
