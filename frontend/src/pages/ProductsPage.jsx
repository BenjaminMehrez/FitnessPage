// src/pages/Products.jsx
import HeroProducts from "../components/Hero/HeroProducts";
import { ProductsList } from "../components/ProductsList";

function Products() {
  return (
    <div>
      <HeroProducts />
      <div className="py-16 px-8 bg-gray-200">
        <h1 className="text-4xl font-bold text-center mb-8 underline text-gray-800">Our Products</h1>
        <section className="max-w-7xl m-auto">
          <ProductsList />
        </section>
      </div>
    </div>
  );
}

export default Products;
