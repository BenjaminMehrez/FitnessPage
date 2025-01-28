import React from "react";

function ProductCard({ product }) {

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
