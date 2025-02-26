import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Rating: {product.rating} ⭐</p>
    </div>
  );
};

export default ProductCard;
