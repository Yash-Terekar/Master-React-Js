import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div>
      <ProductCard
        name="ASUS ROG Strix G16"
        price={160000}
        category="Laptop"
        inStock={true}
      />
      <ProductCard
        name="iPhone 17"
        price={80000}
        category="Phone"
        inStock={false}
      />
      <ProductCard
        name="Logitech Mouse"
        price={2500}
        category="Accessories"
        inStock={true}
      />
    </div>
  );
};
export default Products;
