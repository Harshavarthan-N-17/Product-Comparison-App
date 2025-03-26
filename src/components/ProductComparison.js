import React from "react";

const ProductComparison = ({ products }) => {
  if (!products || products.length < 2) {
    return <p>Please select at least two products to compare.</p>;
  }

  // Extract all unique feature names across products
  const featureNames = [
    ...new Set(products.flatMap((product) => Object.keys(product.features || {}))),
  ];

  return (
    <div className="comparison-container">
      <h2>Product Comparison</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            {products.map((product, index) => (
              <th key={index}>{product.name || `Product ${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price (₹)</td>
            {products.map((product, index) => (
              <td key={index}>{product.price ?? "N/A"}</td>
            ))}
          </tr>
          <tr>
            <td>Rating</td>
            {products.map((product, index) => (
              <td key={index}>
                {product.rating ? `${product.rating} ⭐` : "N/A"}
              </td>
            ))}
          </tr>
          {/* Dynamically display all features */}
          {featureNames.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
              {products.map((product, idx) => (
                <td key={idx}>{product.features?.[feature] ?? "N/A"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
