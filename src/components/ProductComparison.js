import React from "react";

const ProductComparison = ({ products }) => {
  if (!products || products.length < 2) {
    return <p>Please select at least two products to compare.</p>;
  }

  // Extract unique feature names dynamically (assuming all products have features as an object)
  const featureNames = Object.keys(products[0]?.features || {});

  return (
    <div className="comparison-container">
      <h2>Product Comparison</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>{products[0]?.name || "Product 1"}</th>
            <th>{products[1]?.name || "Product 2"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price (₹)</td>
            <td>{products[0]?.price ?? "N/A"}</td>
            <td>{products[1]?.price ?? "N/A"}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{products[0]?.rating ? `${products[0].rating} ⭐` : "N/A"}</td>
            <td>{products[1]?.rating ? `${products[1].rating} ⭐` : "N/A"}</td>
          </tr>
          {/* Dynamically display all features */}
          {featureNames.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
              <td>{products[0]?.features?.[feature] ?? "N/A"}</td>
              <td>{products[1]?.features?.[feature] ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
