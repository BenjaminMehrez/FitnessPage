// src/pages/Products.jsx
import HeroProducts from "../components/Hero/HeroProducts";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  return (
    <div>
      <HeroProducts />
      <div className="py-16 px-8 bg-gray-200">
        <section className="max-w-7xl m-auto">
            <ProductCard />
        </section>
      </div>
    </div>
  );
}

export default ProductPage;
