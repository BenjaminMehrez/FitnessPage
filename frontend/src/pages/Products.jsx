// src/pages/Products.jsx
import { ProductsList } from "../components/ProductsList";

function Products() {
  return (
    <div className="py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Productos</h1>
      <ProductsList />
    </div>
  );
}

export default Products;
