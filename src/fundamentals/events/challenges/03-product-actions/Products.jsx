import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <ProductCard
        title="Asus ROG Strix G16"
        price={160000}
        category="Gaming Laptop"
      />
      <ProductCard title="Iphone 17" price={80000} category="Mobile" />
      <ProductCard title="Logitech Mouse" price={2400} category="Mouse" />
    </div>
  );
};
export default Products;
