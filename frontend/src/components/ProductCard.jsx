import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product">
      <div className="product-info">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>
          Precio: <span className="product-price">${product.price}</span>
        </p>
        <button className="product-button">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
