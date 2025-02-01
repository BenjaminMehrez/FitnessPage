import React from "react";

function ProductCard({ product }) {

  return (
    <div className="card bg-base-100 w-96 drop-shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl object-contain h-60 w-60"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <div className="card-actions">
          <button className="btn background-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
